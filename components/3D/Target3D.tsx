"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export function Target3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5;

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

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

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

    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.22,
      metalness: 0.9,
      envMapIntensity: 1.0,
      transparent: true,
      opacity: 0.95,
    });

    const targetGroup = new THREE.Group();

    const ringCount = 3;
    for (let i = 0; i < ringCount; i++) {
      const geometry = new THREE.TorusGeometry(1.5 - i * 0.45, 0.15, 8, 64);
      const ring = new THREE.Mesh(geometry, whiteMat.clone());
      ring.position.z = i * 0.2;
      targetGroup.add(ring);
    }

    const centerGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
    const centerCylinder = new THREE.Mesh(centerGeometry, whiteMat.clone());
    centerCylinder.rotation.x = Math.PI / 2;
    centerCylinder.position.z = ringCount * 0.2;
    targetGroup.add(centerCylinder);

    scene.add(targetGroup);
    targetRef.current = targetGroup;

    const handleResize = () => {
      if (!container || !renderer) return;
      const rect = container.getBoundingClientRect();
      const s = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
      renderer.setSize(s, s, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (targetRef.current) {
        targetRef.current.children.forEach((child, index) => {
          if (
            child instanceof THREE.Mesh &&
            child.geometry instanceof THREE.TorusGeometry
          ) {
            child.rotation.z += 0.008 * (index % 2 === 0 ? 1 : -1);
          }
        });

        const targetRotationX = mouseRef.current.y * 0.3;
        const targetRotationY = mouseRef.current.x * 0.3;

        targetRef.current.rotation.x +=
          (targetRotationX - targetRef.current.rotation.x) * 0.05;
        targetRef.current.rotation.y +=
          (targetRotationY - targetRef.current.rotation.y) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);

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
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
