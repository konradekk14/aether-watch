"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Model({ scrollY }: { scrollY: number }) {
  const gltf = useLoader(GLTFLoader, "/aether-model.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Setup model with premium material enhancements
  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      gltf.scene.position.sub(center);
      const size = box.getSize(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const scale = 1.2 / maxSize;
      gltf.scene.scale.setScalar(scale);

      // Store the calculated scale for use in animations
      gltf.scene.userData.baseScale = scale;

      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          if (child.material) {
            const material = child.material as THREE.MeshStandardMaterial;

            // Subtle premium material improvements
            material.metalness = Math.min(material.metalness + 0.2, 1.0);
            material.roughness = Math.max(material.roughness - 0.1, 0.05);

            // Enhance screen/display elements
            if (
              child.name.includes("screen") ||
              child.name.includes("display")
            ) {
              material.emissive = new THREE.Color("#003355");
              material.emissiveIntensity = 0.1;
            }

            material.shadowSide = THREE.DoubleSide;
          }
        }
      });
    }
  }, [gltf]);

  // Enhanced animation with subtle floating
  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.elapsedTime;

      // Original rotation with scroll
      const baseRotation = -Math.PI * 0.174;
      const targetRotation = baseRotation + scrollY * 0.002;
      modelRef.current.rotation.y +=
        (targetRotation - modelRef.current.rotation.y) * 0.1;

      // Subtle floating animation
      modelRef.current.position.y = Math.sin(time * 0.6) * 0.03;

      // Gentle breathing scale (maintaining base scale)
      const baseScale = gltf.scene.userData.baseScale || 1;
      const breathe = baseScale * (1 + Math.sin(time * 0.8) * 0.01);
      modelRef.current.scale.setScalar(breathe);
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

function CameraController({ scrollY }: { scrollY: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      // Original zoom behavior with smoother interpolation
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

  // Optimized scroll tracking
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

  // Modified IntersectionObserver with larger threshold and margin
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: "100%", // Keep loaded even when 200px outside viewport
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
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.3,
          }}
          shadows
        >
          <CameraController scrollY={scrollY} />

          {/* Brighter, clean lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={3.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-3, 2, -3]} intensity={2.0} />
          <directionalLight position={[0, -2, 3]} intensity={1.5} />

          <Model scrollY={scrollY} />

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
