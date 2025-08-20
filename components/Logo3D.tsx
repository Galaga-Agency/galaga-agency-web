// import React, { useRef, useEffect, useState, Suspense } from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Environment, Float, Center } from '@react-three/drei';
// import * as THREE from 'three';

// // 3D Logo Model Component
// function Logo3D({ isVisible = true }) {
//   const meshRef = useRef<THREE.Group>(null);
//   const gltf = useLoader(GLTFLoader, '/assets/models/galaga-logo.glb');
  
//   // Animate rotation
//   useFrame((state) => {
//     if (meshRef.current && isVisible) {
//       meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
//       // Gentle floating animation
//       meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
//     }
//   });

//   useEffect(() => {
//     if (gltf) {
//       // Apply brand colors to materials
//       gltf.scene.traverse((child: any) => {
//         if (child instanceof THREE.Mesh) {
//           if (child.material) {
//             // Apply your brand teal color
//             child.material = new THREE.MeshStandardMaterial({
//               color: '#176161', // brand-teal
//               metalness: 0.3,
//               roughness: 0.4,
//             });
//           }
//         }
//       });
//     }
//   }, [gltf]);

//   return (
//     <Center>
//       <Float
//         speed={2}
//         rotationIntensity={0.5}
//         floatIntensity={0.2}
//       >
//         <group ref={meshRef} scale={[1.5, 1.5, 1.5]}>
//           <primitive object={gltf.scene} />
//         </group>
//       </Float>
//     </Center>
//   );
// }

// // Fallback while loading
// function LogoFallback() {
//   return (
//     <Center>
//       <mesh>
//         <boxGeometry args={[2, 1, 0.2]} />
//         <meshStandardMaterial color="#176161" />
//       </mesh>
//     </Center>
//   );
// }

// // Main Loading Component
// export default function Logo3DLoader({ 
//   isLoading = true, 
//   onComplete 
// }: { 
//   isLoading?: boolean;
//   onComplete?: () => void;
// }) {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (!isLoading) {
//       // Fade out animation
//       const timer = setTimeout(() => {
//         setIsVisible(false);
//         onComplete?.();
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isLoading, onComplete]);

//   // Simulate loading progress (replace with real loading logic)
//   useEffect(() => {
//     if (isLoading) {
//       const interval = setInterval(() => {
//         setProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           return prev + Math.random() * 10;
//         });
//       }, 100);
//       return () => clearInterval(interval);
//     }
//   }, [isLoading]);

//   if (!isVisible) return null;

//   return (
//     <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-azul-profundo transition-opacity duration-500 ${
//       isLoading ? 'opacity-100' : 'opacity-0'
//     }`}>
//       {/* 3D Canvas */}
//       <div className="w-64 h-64 mb-8">
//         <Canvas
//           camera={{ position: [0, 0, 5], fov: 50 }}
//           gl={{ antialias: true, alpha: true }}
//         >
//           <Suspense fallback={<LogoFallback />}>
//             <Environment preset="studio" />
//             <ambientLight intensity={0.6} />
//             <directionalLight 
//               position={[10, 10, 5]} 
//               intensity={1}
//               color="#4cbcc5" // brand-turquesa
//             />
//             <Logo3D isVisible={isVisible} />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Loading Text */}
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-blanco mb-4">
//           Cargando experiencia
//         </h2>
        
//         {/* Progress Bar */}
//         <div className="w-64 h-1 bg-hielo/20 rounded-full overflow-hidden">
//           <div 
//             className="h-full bg-gradient-to-r from-teal to-turquesa transition-all duration-300 ease-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
        
//         <p className="text-hielo/70 mt-2 text-sm">
//           {Math.round(progress)}%
//         </p>
//       </div>

//       {/* Loading dots animation */}
//       <div className="flex gap-2 mt-6">
//         <div className="w-2 h-2 bg-turquesa rounded-full loading-dot-1"></div>
//         <div className="w-2 h-2 bg-turquesa rounded-full loading-dot-2"></div>
//         <div className="w-2 h-2 bg-turquesa rounded-full loading-dot-3"></div>
//       </div>
//     </div>
//   );
// }