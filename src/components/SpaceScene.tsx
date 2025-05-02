import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Planet = ({ position = [0, 0, 0] as [number, number, number], size = 2, rotationSpeed = 0.005, textureUrl = '' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/placeholder.svg'); // Using placeholder as fallback
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial 
        map={texture} 
        color="#1e1e3f" 
        roughness={0.7}
        metalness={0.2}
      />
    </mesh>
  );
};

const FloatingRing = ({ position = [0, 0, 0] as [number, number, number], size = 3, thickness = 0.2, color = '#4CC9F0' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, thickness, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
      />
    </mesh>
  );
};

const SpaceScene = () => {
  return (
    <div className="h-[25rem] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B2CBF" />
        
        <Planet position={[0, 0, 0]} size={1.5} rotationSpeed={0.003} />
        <FloatingRing position={[0, 0, 0]} size={2.5} thickness={0.08} color="#7B2CBF" />
        <FloatingRing position={[0, 0, 0]} size={3} thickness={0.05} color="#4CC9F0" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
