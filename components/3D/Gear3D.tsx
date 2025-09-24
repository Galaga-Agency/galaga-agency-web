// /components/3D/Gear3D.tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export function Gear3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const gearRef = useRef<THREE.Group | null>(null);
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

    const gearGroup = new THREE.Group();

    const innerRadius = 0.8;
    const outerRadius = 1.5;
    const depth = 0.3;
    const teethCount = 12;

    const shape = new THREE.Shape();
    for (let i = 0; i < teethCount; i++) {
      const angle1 = (i / teethCount) * Math.PI * 2;
      const angle2 = ((i + 0.4) / teethCount) * Math.PI * 2;
      const angle3 = ((i + 0.6) / teethCount) * Math.PI * 2;
      const angle4 = ((i + 1) / teethCount) * Math.PI * 2;

      if (i === 0) {
        shape.moveTo(
          Math.cos(angle1) * outerRadius,
          Math.sin(angle1) * outerRadius
        );
      } else {
        shape.lineTo(
          Math.cos(angle1) * outerRadius,
          Math.sin(angle1) * outerRadius
        );
      }
      shape.lineTo(
        Math.cos(angle2) * outerRadius,
        Math.sin(angle2) * outerRadius
      );
      shape.lineTo(
        Math.cos(angle3) * innerRadius,
        Math.sin(angle3) * innerRadius
      );
      shape.lineTo(
        Math.cos(angle4) * innerRadius,
        Math.sin(angle4) * innerRadius
      );
    }
    shape.closePath();

    const extrudeSettings = {
      steps: 1,
      depth: depth,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    const gear = new THREE.Mesh(geometry, whiteMat);

    const centerHoleGeometry = new THREE.CylinderGeometry(
      0.3,
      0.3,
      depth + 0.2,
      32
    );
    const centerHole = new THREE.Mesh(centerHoleGeometry, whiteMat.clone());
    centerHole.rotation.x = Math.PI / 2;

    gearGroup.add(gear);
    gearGroup.add(centerHole);

    scene.add(gearGroup);
    gearRef.current = gearGroup;

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

      if (gearRef.current) {
        gearRef.current.rotation.z += 0.01;

        const targetRotationX = mouseRef.current.y * 0.3;
        const targetRotationY = mouseRef.current.x * 0.3;

        gearRef.current.rotation.x +=
          (targetRotationX - gearRef.current.rotation.x) * 0.05;
        gearRef.current.rotation.y +=
          (targetRotationY - gearRef.current.rotation.y) * 0.05;
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
