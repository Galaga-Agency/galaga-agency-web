"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export function Puzzle3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Environment
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.35);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 4, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.8);
    fill.position.set(-4, 1, 3);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.25, 20);
    rim.position.set(0, 0, -4);
    scene.add(rim);

    // Puzzle material (slightly translucent & metallic)
    const puzzleMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.9,
      envMapIntensity: 1.1,
      transparent: true,
      opacity: 0.97,
    });

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/assets/models/puzzle-3D.glb", // <-- Make sure you place your puzzle model here
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = puzzleMat;
          }
        });

        // Center & scale
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.set(-center.x, -center.y, -center.z);

        const maxDim = Math.max(size.x, size.y, size.z);
        model.scale.setScalar(3 / maxDim);

        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (err) => console.error("Failed to load Puzzle GLB:", err)
    );

    // Resize handling (keep square)
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const rect = container.getBoundingClientRect();
      const s = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
      renderer.setSize(s, s, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animate
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.rotation.y -= 0.015; // slower than Target3D
        modelRef.current.rotation.x += 0.005; // subtle tilt
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();

      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose && m.dispose());
          } else {
            (mesh.material as THREE.Material).dispose?.();
          }
        }
      });

      envRT.texture.dispose();
      envRT.dispose?.();
      pmrem.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "90%",
          height: "90%",
        }}
      />
    </div>
  );
}
