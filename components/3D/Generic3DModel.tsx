"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useTranslation } from "@/hooks/useTranslation";

export interface Generic3DModelProps {
  modelPath: string;
  className?: string;

  materialType?: "standard" | "physical" | "toon" | "lambert" | "phong";
  color?: string;
  roughness?: number;
  metalness?: number;
  opacity?: number;
  transparent?: boolean;

  textureUrl?: string;
  normalMapUrl?: string;
  roughnessMapUrl?: string;
  metalnessMapUrl?: string;

  lightingPreset?:
    | "studio"
    | "outdoor"
    | "dramatic"
    | "soft"
    | "neon"
    | "custom";
  customLights?: {
    hemisphere?: { skyColor: string; groundColor: string; intensity: number };
    directional?: {
      color: string;
      intensity: number;
      position: [number, number, number];
    }[];
    point?: {
      color: string;
      intensity: number;
      position: [number, number, number];
      distance?: number;
    }[];
  };

  autoRotate?: boolean;
  rotationSpeed?: number;
  floatingAnimation?: boolean;
  floatingRange?: number;
  floatingSpeed?: number;

  cameraPosition?: [number, number, number];
  modelScale?: number;
  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];

  enableShadows?: boolean;
  toneMapping?: "none" | "linear" | "reinhard" | "cineon" | "aces";
  toneMappingExposure?: number;

  enableMouseInteraction?: boolean;
  interactionSensitivity?: number;

  onModelLoad?: (model: THREE.Group) => void;
  onError?: (error: any) => void;
}

const LIGHTING_PRESETS: Record<
  Exclude<NonNullable<Generic3DModelProps["lightingPreset"]>, "custom">,
  NonNullable<Generic3DModelProps["customLights"]>
> = {
  studio: {
    hemisphere: { skyColor: "#ffffff", groundColor: "#444444", intensity: 0.4 },
    directional: [
      {
        color: "#ffffff",
        intensity: 1.0,
        position: [5, 5, 5],
      },
      {
        color: "#ffffff",
        intensity: 0.3,
        position: [-5, 3, -5],
      },
    ],
  },
  outdoor: {
    hemisphere: { skyColor: "#87CEEB", groundColor: "#8B4513", intensity: 0.6 },
    directional: [
      {
        color: "#FFF8DC",
        intensity: 1.2,
        position: [10, 10, 5],
      },
    ],
  },
  dramatic: {
    hemisphere: { skyColor: "#111111", groundColor: "#000000", intensity: 0.1 },
    directional: [
      {
        color: "#ffffff",
        intensity: 2.0,
        position: [2, 8, 4],
      },
    ],
    point: [
      {
        color: "#ff4444",
        intensity: 0.8,
        position: [-4, 2, -2],
        distance: 10,
      },
    ],
  },
  soft: {
    hemisphere: { skyColor: "#ffffff", groundColor: "#cccccc", intensity: 0.8 },
    directional: [
      {
        color: "#ffffff",
        intensity: 0.6,
        position: [3, 4, 6],
      },
      {
        color: "#ffffff",
        intensity: 0.4,
        position: [-3, 2, 3],
      },
    ],
  },
  neon: {
    hemisphere: { skyColor: "#0a0a0a", groundColor: "#000000", intensity: 0.1 },
    point: [
      {
        color: "#00ffff",
        intensity: 1.5,
        position: [3, 3, 3],
        distance: 15,
      },
      {
        color: "#ff00ff",
        intensity: 1.2,
        position: [-3, 2, -3],
        distance: 12,
      },
      {
        color: "#ffff00",
        intensity: 0.8,
        position: [0, 5, 0],
        distance: 10,
      },
    ],
  },
};

export function Generic3DModel({
  modelPath,
  className = "",
  materialType = "standard",
  color = "#ffffff",
  roughness = 0.3,
  metalness = 0.1,
  opacity = 1,
  transparent = false,
  textureUrl,
  normalMapUrl,
  roughnessMapUrl,
  metalnessMapUrl,
  lightingPreset = "studio",
  customLights,
  autoRotate = true,
  rotationSpeed = 0.01,
  floatingAnimation = false,
  floatingRange = 0.5,
  floatingSpeed = 1,
  cameraPosition = [0, 0, 5],
  modelScale = 1,
  modelPosition = [0, 0, 0],
  modelRotation = [0, 0, 0],
  enableShadows = false,
  toneMapping = "aces",
  toneMappingExposure = 1.2,
  enableMouseInteraction = false,
  interactionSensitivity = 1,
  onModelLoad,
  onError,
}: Generic3DModelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialRotationRef = useRef<THREE.Euler | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(...cameraPosition);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);

    switch (toneMapping) {
      case "none":
        renderer.toneMapping = THREE.NoToneMapping;
        break;
      case "linear":
        renderer.toneMapping = THREE.LinearToneMapping;
        break;
      case "reinhard":
        renderer.toneMapping = THREE.ReinhardToneMapping;
        break;
      case "cineon":
        renderer.toneMapping = THREE.CineonToneMapping;
        break;
      case "aces":
      default:
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        break;
    }
    renderer.toneMappingExposure = toneMappingExposure;

    if (enableShadows) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    rendererRef.current = renderer;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;

    const lights =
      lightingPreset === "custom"
        ? customLights
        : LIGHTING_PRESETS[lightingPreset];

    if (lights?.hemisphere) {
      const hemi = new THREE.HemisphereLight(
        lights.hemisphere.skyColor,
        lights.hemisphere.groundColor,
        lights.hemisphere.intensity
      );
      scene.add(hemi);
    }

    if (lights?.directional) {
      lights.directional.forEach((light) => {
        const dirLight = new THREE.DirectionalLight(
          light.color,
          light.intensity
        );
        dirLight.position.set(...light.position);
        if (enableShadows) {
          dirLight.castShadow = true;
          dirLight.shadow.mapSize.width = 2048;
          dirLight.shadow.mapSize.height = 2048;
        }
        scene.add(dirLight);
      });
    }

    if (lights?.point) {
      lights.point.forEach((light) => {
        const pointLight = new THREE.PointLight(
          light.color,
          light.intensity,
          light.distance || 0
        );
        pointLight.position.set(...light.position);
        if (enableShadows) pointLight.castShadow = true;
        scene.add(pointLight);
      });
    }

    const createMaterial = () => {
      const materialProps: any = {
        color: new THREE.Color(color),
        roughness,
        metalness,
        opacity,
        transparent,
      };

      const textureLoader = new THREE.TextureLoader();

      if (textureUrl) {
        materialProps.map = textureLoader.load(textureUrl);
      }
      if (normalMapUrl) {
        materialProps.normalMap = textureLoader.load(normalMapUrl);
      }
      if (roughnessMapUrl) {
        materialProps.roughnessMap = textureLoader.load(roughnessMapUrl);
      }
      if (metalnessMapUrl) {
        materialProps.metalnessMap = textureLoader.load(metalnessMapUrl);
      }

      switch (materialType) {
        case "physical":
          return new THREE.MeshPhysicalMaterial(materialProps);
        case "toon":
          return new THREE.MeshToonMaterial(materialProps);
        case "lambert":
          return new THREE.MeshLambertMaterial(materialProps);
        case "phong":
          return new THREE.MeshPhongMaterial(materialProps);
        case "standard":
        default:
          return new THREE.MeshStandardMaterial(materialProps);
      }
    };

    const material = createMaterial();

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = material;
            if (enableShadows) {
              mesh.castShadow = true;
              mesh.receiveShadow = true;
            }
          }
        });

        model.position.set(...modelPosition);
        model.rotation.set(...modelRotation);
        model.scale.setScalar(modelScale);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const finalScale = (3 / maxDim) * modelScale;
        model.scale.setScalar(finalScale);

        scene.add(model);
        modelRef.current = model;
        initialRotationRef.current = model.rotation.clone();

        onModelLoad?.(model);
      },
      undefined,
      (error) => {
        console.error("Failed to load 3D model:", error);
        onError?.(error);
      }
    );

    const handleMouseMove = (event: MouseEvent) => {
      if (!enableMouseInteraction || !container) return;

      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x:
          ((event.clientX - rect.left) / rect.width - 0.5) *
          2 *
          interactionSensitivity,
        y:
          ((event.clientY - rect.top) / rect.height - 0.5) *
          2 *
          interactionSensitivity,
      };
    };

    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const rect = container.getBoundingClientRect();
      const size = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (!modelRef.current) return;

      const elapsedTime = clockRef.current.getElapsedTime();

      if (autoRotate) {
        modelRef.current.rotation.y += rotationSpeed;
      }

      if (floatingAnimation) {
        modelRef.current.position.y =
          Math.sin(elapsedTime * floatingSpeed) * floatingRange;
      }

      if (enableMouseInteraction && initialRotationRef.current) {
        modelRef.current.rotation.x =
          initialRotationRef.current.x + mouseRef.current.y * 0.3;
        modelRef.current.rotation.y =
          initialRotationRef.current.y + mouseRef.current.x * 0.5;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();

      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
      }

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

      material.dispose();
      envRT.texture.dispose();
      pmrem.dispose();
      renderer.dispose();
    };
  }, [
    modelPath,
    materialType,
    color,
    roughness,
    metalness,
    opacity,
    transparent,
    textureUrl,
    normalMapUrl,
    roughnessMapUrl,
    metalnessMapUrl,
    lightingPreset,
    autoRotate,
    rotationSpeed,
    floatingAnimation,
    floatingRange,
    floatingSpeed,
    enableMouseInteraction,
    interactionSensitivity,
    modelScale,
    enableShadows,
    toneMapping,
    toneMappingExposure,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
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
