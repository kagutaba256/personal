import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

interface DemoObject {
  mesh: React.MutableRefObject<THREE.Mesh>
  position: {
    x: number
    y: number
    z: number
  }
  rotation: {
    x: number
    y: number
    z: number
  }
  velocity: {
    x: number
    y: number
    z: number
  }
  mass: number
  radius: number
  restitution: number
}

const tick = (object: DemoObject, delta: number) => {
  const Cd = 0.47 // Dimensionless
  const rho = 1.22 // kg / m^3
  const A = Math.PI * object.radius * object.radius// m^2
  const ag = 0.000001 // m / s^2
  const brownianStrength = 0.0001

  let Fx = -0.5 * Cd * A * rho * object.velocity.x * object.velocity.x * object.velocity.x / Math.abs(object.velocity.x);
  let Fy = -0.5 * Cd * A * rho * object.velocity.y * object.velocity.y * object.velocity.y / Math.abs(object.velocity.y);

  Fx = isNaN(Fx) ? 0 : Fx;
  Fy = isNaN(Fy) ? 0 : Fy;

  const ax = Fx / object.mass;
  const ay = ag + Fy / object.mass;

  object.velocity.x = object.velocity.x + ax * delta;
  object.velocity.y = object.velocity.y + ay * delta;

  object.position.x = object.position.x + object.velocity.x * delta * 2;
  object.position.y = object.position.y + object.velocity.y * delta * 2;

  if (object.position.y < -10) {
    object.velocity.y = -object.velocity.y * object.restitution;
    object.position.y = 10;
  }

  if (object.position.x > 10) {
    object.velocity.x = -object.velocity.x * object.restitution;
    object.position.x = 10;
  }

  if (object.position.y > 10) {
    object.velocity.y = -object.velocity.y * object.restitution;
    object.position.y = 10;
  }

  if (object.position.x < -10) {
    object.velocity.x = -object.velocity.x * object.restitution;
    object.position.x = 10;
  }

  object.rotation.x += Math.random() * brownianStrength;
  object.rotation.y += Math.random() * brownianStrength;
  object.rotation.z += Math.random() * brownianStrength;

  // set mesh position
  object.mesh.current.position.x = object.position.x
  object.mesh.current.position.y = object.position.y

  // set mesh rotation
  object.mesh.current.rotation.x = object.rotation.x
  object.mesh.current.rotation.y = object.rotation.y
  object.mesh.current.rotation.z = object.rotation.z

}

const FloatingObject = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!)

  function loadFBX(model: string) {
    const loader = new FBXLoader()
    loader.load(
      model,
      (fbx) => {
        fbx.scale.setScalar(0.003 * Math.random() + 0.001)
        fbx.traverse(c => {
          c.castShadow = true
        })
        ref.current.add(fbx)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      },
      (error) => {
        console.error(error)
      }
    )
  }

  // loadFBX('/assets/models/3d/3d.fbx')

  let object: DemoObject = {
    mesh: ref,
    position: {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 + 50,
      z: Math.random() * 100 - 50,
    },
    rotation: {
      x: Math.random() * 2 * Math.PI,
      y: Math.random() * 2 * Math.PI,
      z: Math.random() * 2 * Math.PI,
    },
    velocity: {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5,
    },
    mass: 1,
    radius: 1,
    restitution: -0.5,
  }

  useFrame((state, delta) => tick(object, delta))

  const randomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  return (
    <mesh ref={ref} {...props} key={object.position.x} position={[object.position.x, object.position.y, object.position.z]} rotation={[object.rotation.x, object.rotation.y, object.rotation.z]}>
      {/* box */}
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color = {randomHexColor()} />

    </mesh>
  )
}

export default FloatingObject

