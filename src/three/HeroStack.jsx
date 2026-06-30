import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const PLANETS = [
  { position: [-1.8, 0.2, 0.1], radius: 0.7, color: "#6e56f8", speed: 0.16, ring: true, ringColor: "#6e56f8" },
  { position: [1.4, 0.6, -0.3], radius: 0.65, color: "#38e1c6", speed: -0.14, ring: false },
  { position: [0, -1.1, 0.25], radius: 0.55, color: "#8b76ff", speed: 0.18, ring: true, ringColor: "#8b76ff" },
];

function Planet({ position, radius, color, speed, ring, ringColor }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <group ref={ref} position={position}>
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[radius, 48, 48]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.18}
            metalness={0.12}
            transmission={0.55}
            thickness={0.8}
            clearcoat={1}
            emissive={color}
            emissiveIntensity={0.14}
          />
        </mesh>
      </Float>
      {ring && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius * 1.25, radius * 1.65, 96]} />
          <meshBasicMaterial color={ringColor} transparent opacity={0.18} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}

function Rig({ children }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.28;
    const y = -state.pointer.y * 0.16;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, y, 5, state.delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, x, 5, state.delta);
  });

  return <group ref={group}>{children}</group>;
}

function PlanetField() {
  const rings = useMemo(
    () => [
      { radius: 2.6, color: "#6e56f8" },
      { radius: 3.4, color: "#38e1c6" },
    ],
    []
  );

  return (
    <group>
      {rings.map((ring, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[ring.radius - 0.02, ring.radius + 0.02, 120]} />
          <meshBasicMaterial color={ring.color} transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroStack({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [4, 2.1, 5], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <pointLight position={[4, 4, 6]} intensity={1.2} color="#8c82ff" />
        <pointLight position={[-4, -3, -4]} intensity={0.9} color="#38e1c6" />

        <Stars radius={40} depth={30} count={2400} factor={5} saturation={0.25} fade speed={0.3} />

        <Rig>
          <Float speed={1.1} rotationIntensity={0.14} floatIntensity={0.4}>
            <mesh position={[0, -0.5, 0]}>
              <sphereGeometry args={[1.72, 64, 64]} />
              <meshPhysicalMaterial
                color="#120d24"
                roughness={0.18}
                metalness={0.05}
                transmission={0.55}
                thickness={1.1}
                clearcoat={1}
                emissive="#1e1a3c"
                emissiveIntensity={0.16}
              />
            </mesh>
            <PlanetField />
            {PLANETS.map((planet, index) => (
              <Planet key={index} {...planet} />
            ))}
          </Float>
        </Rig>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
