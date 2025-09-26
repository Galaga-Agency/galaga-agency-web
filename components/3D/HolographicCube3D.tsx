"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function HolographicCube3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const cubeRef: any = useRef<THREE.Mesh | null>(null);
  const wireframeRef = useRef<THREE.LineSegments | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(4, 3, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a0a0a, 0.3);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight("#121c30", 4.0, 30);
    light1.position.set(6, 6, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight("#1a2847", 3.0, 25);
    light2.position.set(-5, 4, -3);
    scene.add(light2);

    const light3 = new THREE.PointLight("#0f1a2e", 2.0, 20);
    light3.position.set(2, -4, 8);
    scene.add(light3);

    // THE CUBE
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: "#121c30",
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.1,
      transmission: 0.95,
      thickness: 3.0,
      emissive: "#121c30",
      emissiveIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      ior: 1.8,
      iridescence: 1.0,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [200, 1200],
    });

    const cube = new THREE.Mesh(cubeGeometry, glassMaterial);
    cubeRef.current = cube;

    // Create a group for cube + wireframe + bubbles
    const cubeGroup = new THREE.Group();
    cubeGroup.add(cube);

    // Thick wireframe
    const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: "#121c30",
      transparent: true,
      opacity: 1.0,
      linewidth: 50,
    });

    const wireframe = new THREE.LineSegments(edgesGeometry, wireframeMaterial);
    wireframeRef.current = wireframe;
    cubeGroup.add(wireframe);

    scene.add(cubeGroup);
    cubeRef.current = cubeGroup as any;

    // Resize handler
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);

      if (size > 0) {
        renderer.setSize(size, size, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      if (cubeRef.current && wireframeRef.current) {
        cubeRef.current.rotation.y += 0.015;
        cubeRef.current.rotation.x += 0.005;

        wireframeRef.current.rotation.y += 0.015;
        wireframeRef.current.rotation.x += 0.005;

        // Dynamic effects
        glassMaterial.emissiveIntensity = 1.0 + Math.sin(time * 2) * 0.5;
        wireframeMaterial.opacity = 1.0 + Math.sin(time * 3) * 0.3;

        // Dynamic iridescence
        const thickness1 = 200 + Math.sin(time * 1.5) * 100;
        const thickness2 = 800 + Math.cos(time * 1.2) * 200;
        glassMaterial.iridescenceThicknessRange = [thickness1, thickness2];
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      resizeObserver.disconnect();

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry?.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material?.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
