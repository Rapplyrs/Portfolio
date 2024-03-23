import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber'; 
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'; 

import CanvasLoader from '../Loader'; 

const Computers = ({ isMobile}) => {

  const computer = useGLTF('./public/desktop_pc/scene.gltf')

  useEffect(() => {
    console.log(computer.error);
  }, [computer.error]);
  
  console.log("test" + computer);

  return (
    <mesh>
      <hemisphereLight intensity ={1.75}
      />
      <pointLight intensity = {3} />

      <spotLight
      position ={[-10, 60, 20]}
      angle = {0.19}
      penumbra={1}
      intensity = {1}
      castShadow
      shadow-mapSize= {1024}
      />
      <primitive object ={computer.scene}
      
      scale = {isMobile ? 0.7 : 0.75}
      position = {isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation = {[-0.01, -0.2, -0.1]}
      />

      </mesh> 
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); 
    
    setIsMobile(mediaQuery.matches); 

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); 
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange); 

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
    
  }, [])
  return(
    <Canvas
      frameLoop = "demand"
      shadows
      camera ={{position: [20, 3, 5], fov:25}}
      gl ={{preserveDrawingBuffer: true}}
>
  <Suspense fallback = {<CanvasLoader/>}>
    <OrbitControls
      enableZoom = {false}
      maxPolarAngle = {Math.PI / 2}
      minPolarAngle = {Math.PI / 2}
    />

  <Computers isMobile = {isMobile}/>
  </Suspense>
<Preload all />
    </Canvas>
  )
  
}

export default ComputersCanvas