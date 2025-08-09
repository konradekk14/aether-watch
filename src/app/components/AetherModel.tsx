"use client";
import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ scrollY }: { scrollY: number }) {
  const gltf = useGLTF("/apple_watch.glb"); // <-- updated to your baked model
  const modelRef = useRef<THREE.Group>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (gltf.scene) {
      // Reset transforms to avoid cached state across unmount/remount
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.set(0, 0, 0);
      gltf.scene.scale.setScalar(1);

      // Center and scale model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      gltf.scene.position.sub(center);
      const size = box.getSize(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const scale = 1.7 / maxSize;
      gltf.scene.scale.setScalar(scale);

      gltf.scene.userData.baseScale = scale;

      // Replace materials with MeshBasicMaterial for baked lighting
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const oldMat = child.material;
          child.material = new THREE.MeshBasicMaterial({
            map: (oldMat as any).map || null,
            color: (oldMat as any).color || new THREE.Color(0xffffff),
            transparent: true,
            opacity: 0, // start transparent for fade-in effect
            side: THREE.DoubleSide,
          });
        }
      });

      setIsLoaded(true);
    }
  }, [gltf]);

  // Animation with subtle floating and fade-in
  useFrame((state) => {
    if (!modelRef.current) return;
    if (!isLoaded) return;

    if (modelRef.current) {
      const time = state.clock.elapsedTime;

      const baseRotation = -Math.PI * 0.174;
      const targetRotation = baseRotation + scrollY * 0.002;
      modelRef.current.rotation.y +=
        (targetRotation - modelRef.current.rotation.y) * 0.1;

      // Compensate horizontal shift caused by Y-rotation so the model stays visually centered
      const currentYRotation = modelRef.current.rotation.y;
      const desiredOffsetX = -0.2 * Math.sin(currentYRotation);
      modelRef.current.position.x +=
        (desiredOffsetX - modelRef.current.position.x) * 0.1;

      modelRef.current.position.y = Math.sin(time * 0.6) * 0.03;

      const baseScale = gltf.scene.userData.baseScale || 1;
      const breathe = baseScale * (1 + Math.sin(time * 0.8) * 0.01);
      modelRef.current.scale.setScalar(breathe);

      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshBasicMaterial;
          if (material.opacity < 1) {
            material.opacity = Math.min(material.opacity + 0.05, 1);
            material.transparent = true;
          }
        }
      });
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

function CameraController({ scrollY }: { scrollY: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      const baseOffset = 250 * 0.005;
      const targetZ = Math.min(2 + baseOffset + scrollY * 0.005, 5);
      cameraRef.current.position.z +=
        (targetZ - cameraRef.current.position.z) * 0.08;
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 3.25]}
      fov={45}
    />
  );
}

export default function AetherModel({
  className = "",
}: {
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY || 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: "150%",
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      {isVisible && (
        <Canvas
          dpr={[1, window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio]}
          performance={{ min: 0.3 }}
          gl={{
            antialias: window.innerWidth > 768,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.3,
          }}
          shadows={false} // no shadows needed with baked lighting
        >
          <CameraController scrollY={scrollY} />

          {/* No lights because lighting is baked */}

          <Suspense fallback={null}>
            <Model scrollY={scrollY} />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            makeDefault
          />
        </Canvas>
      )}
    </div>
  );
}

// Preload the baked model for faster loading
useGLTF.preload("/apple_watch.glb");
