// utils/sphereAnimations.ts
import * as THREE from 'three';

export class SphereAnimator {
  private sphere: THREE.Mesh;
  private targetRotation = { x: 0, y: 0 };
  private mouse = { x: 0, y: 0 };
  private animationId: number | null = null;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.Camera;

  constructor(sphere: THREE.Mesh, renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    this.sphere = sphere;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  startAnimation() {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      // Smooth rotation towards target
      this.sphere.rotation.x += (this.targetRotation.x - this.sphere.rotation.x) * 0.05;
      this.sphere.rotation.y += (this.targetRotation.y - this.sphere.rotation.y) * 0.05;

      // Auto rotation
      this.sphere.rotation.y += 0.008;

      // Render the scene
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  handleMouseMove(event: MouseEvent, element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    this.targetRotation.x = this.mouse.y * 0.2;
    this.targetRotation.y = this.mouse.x * 0.2;
  }

  handleMouseLeave() {
    this.targetRotation.x = 0;
    this.targetRotation.y = 0;
  }

  stopAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}