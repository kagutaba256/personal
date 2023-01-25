import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'

import FloatingObject from './FloatingObject'

const Demo = () => {
  const numberOfObjects = 60
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {Array.from({ length: numberOfObjects }, (_, i) => (
        <FloatingObject key={i} />
      ))}
    </>
  )
}

export default Demo