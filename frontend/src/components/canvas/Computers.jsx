import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.75} position={isMobile ? [-2.8, -2.5, -1.5] : [0, -3.5, -1.5]} rotation={[ -0.01, -0.2, -0.1]} dispose={null} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenSize = window.matchMedia("(max-width: 500px)");
    
    setIsMobile(screenSize.matches);  

    const handleScreenSizeChange = (event) => {
      setIsMobile(event.matches);
    }

    screenSize.addEventListener("change", handleScreenSizeChange);

    return () => {
      screenSize.removeEventListener("change", handleScreenSizeChange);
    } // remove for components that don't unmount
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
