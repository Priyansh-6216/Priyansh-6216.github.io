import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sparkles, Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useScroll } from 'framer-motion'

function Particles() {
  const count = 5000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 40
        const y = (Math.random() - 0.5) * 40
        const z = (Math.random() - 0.5) * 40
        pos[i * 3] = x
        pos[i * 3 + 1] = y
        pos[i * 3 + 2] = z
    }
    return pos
  }, [count])

  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
        ref.current.rotation.y = state.clock.elapsedTime * 0.03
        ref.current.rotation.z = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function Scene() {
    const { scrollYProgress } = useScroll()
    const group = useRef()

    useFrame((state) => {
        // Tie camera Z and rotation to scroll
        const scroll = scrollYProgress.get()
        
        // Move camera - start at 5, push forward as we scroll
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5 - scroll * 15, 0.05)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, scroll * 5, 0.05)
        
        // Gentle sway
        state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
        
        // Add mouse interaction
        const targetX = (state.pointer.x * Math.PI) / 6
        const targetY = (state.pointer.y * Math.PI) / 6

        if (group.current) {
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05)
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.05)
        }
    })

    return (
        <group ref={group}>
            <Particles />
            <Sparkles count={200} scale={15} size={3} speed={0.4} opacity={0.6} color="#22d3ee" />
            
            {/* Hero Section Geometry */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[2.5, 0, 1]}>
                <mesh>
                    <torusKnotGeometry args={[1, 0.1, 128, 16]} />
                    <meshStandardMaterial color="#4f46e5" wireframe opacity={0.6} transparent />
                </mesh>
            </Float>
            
            {/* About Section Geometry (reveals as you scroll forward) */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-3, -2, -4]}>
                <mesh>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#ec4899" wireframe opacity={0.4} transparent />
                </mesh>
            </Float>

            {/* Experience Section Geometry */}
            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[3, 4, -9]}>
                <mesh>
                    <octahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#06b6d4" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
            
            {/* Projects Section Geometry */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2} position={[-4, -1, -14]}>
                <mesh>
                    <torusGeometry args={[2, 0.2, 16, 100]} />
                    <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.5} transparent />
                </mesh>
            </Float>
        </group>
    )
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050508]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Scene />
      </Canvas>
    </div>
  )
}
