import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 3000

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute on sphere surface
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 1.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.15
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#5b5af6"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingRing() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.3
    ref.current.rotation.y = state.clock.elapsedTime * 0.15
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.008, 16, 120]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} />
    </mesh>
  )
}

function FloatingRing2() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = -state.clock.elapsedTime * 0.2
    ref.current.rotation.z = state.clock.elapsedTime * 0.1
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3, 0.005, 16, 100]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.15} />
    </mesh>
  )
}

function GridPlane() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.z = (state.clock.elapsedTime * 0.3) % 2
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const vertices = []
    const size = 20
    const divisions = 20
    for (let i = -divisions; i <= divisions; i++) {
      const t = (i / divisions) * size
      vertices.push(-size, -3, t, size, -3, t)
      vertices.push(t, -3, -size, t, -3, size)
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#5b5af6" transparent opacity={0.06} />
    </lineSegments>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingRing />
        <FloatingRing2 />
        <GridPlane />
      </Canvas>
    </div>
  )
}
