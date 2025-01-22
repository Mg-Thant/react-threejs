import React from 'react'

const Loader = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  )
}

export default Loader;