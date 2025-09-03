'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface Logo3DProps {
  className?: string;
  size?: number;
}

export const Logo3D: React.FC<Logo3DProps> = ({ 
  className = '', 
  size = 400 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const logoRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      antialias: true, 
      alpha: true 
    });
    
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/galaga-logo.glb',
      (gltf) => {
        const model = gltf.scene;
        
        const whiteMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xffffff,
          shininess: 500
        });
        
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = whiteMaterial;
          }
        });
        
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        const boxSize = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(boxSize.x, boxSize.y, boxSize.z);
        model.scale.setScalar(3 / maxDim);
        
        scene.add(model);
        logoRef.current = model;
      }
    );

    camera.position.z = 5;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      if (logoRef.current) {
        logoRef.current.rotation.y -= 0.02;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      renderer.dispose();
    };
  }, [size]);

  return (
    <div 
      className={className}
      style={{ 
        width: 'auto', 
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <canvas 
        ref={canvasRef}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'block'
        }}
      />
    </div>
  );
};