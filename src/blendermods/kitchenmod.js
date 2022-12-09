import React, { useLayoutEffect }from 'react'; 
import { useGLTF } from '@react-three/drei'; 
import * as THREE from 'three'; 
 
export const Kitchen = () => { 
  const { scene, nodes, materials } = useGLTF("public/images/3D/proj1_kitchen.glb"); 
 
  useLayoutEffect(() => { 
    Object.assign(materials.Material, {  
      roughness: 0,  
      metalness: 0.25, 
      emissive: new THREE.Color(0x000000), 
      envMapIntensity: 0.5 }) 
  }, [scene, nodes, materials]); 
 
  return <primitive object={scene} /> 
}; 