/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/proj1_kitchen2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.26, 0.13, -0.11]} scale={[3.75, 2.91, 3.75]}>
        <mesh geometry={nodes.wall_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.wall_2.geometry} material={materials['Material.114']} />
      </group>
      <mesh geometry={nodes.floor.geometry} material={materials.Material} position={[-0.26, 0.13, -0.11]} scale={[3.75, 2.91, 3.75]} />
      <mesh geometry={nodes.wooden_floor.geometry} material={materials.floor} position={[-0.26, 0.13, -0.11]} scale={[3.75, 2.91, 3.75]} />
      <mesh geometry={nodes.fridge.geometry} material={materials['Material.005']} position={[-3.13, -1.98, 2.21]} scale={[0.79, 1.59, 1.25]}>
        <mesh geometry={nodes.fridge_door.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.fridge_door_handle.geometry} material={materials['Material.007']} position={[1.52, 1.43, -0.72]} scale={[-0.12, -0.06, -0.08]} />
      </mesh>
      <group position={[-2.9, -2, -0.08]} scale={1.01}>
        <mesh geometry={nodes.Plane004.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.131']} />
        <mesh geometry={nodes.Circle008.geometry} material={materials['Material.032']} position={[1.4, 2.04, 0.69]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.11} />
        <mesh geometry={nodes.Circle010.geometry} material={materials['Material.033']} position={[1.4, 2.04, 0.23]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.11} />
        <mesh geometry={nodes.Circle011.geometry} material={materials['Material.034']} position={[1.4, 2.04, -0.25]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.11} />
        <mesh geometry={nodes.Circle012.geometry} material={materials['Material.035']} position={[1.4, 2.04, -0.72]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
        <mesh geometry={nodes.knob.geometry} material={materials['Material.096']} position={[1.35, 2.04, 0.69]} rotation={[0, 0, -Math.PI / 2]} scale={0.14} />
        <mesh geometry={nodes.knob001.geometry} material={materials['Material.095']} position={[1.35, 2.04, 0.22]} rotation={[0, 0, -Math.PI / 2]} scale={0.14} />
        <mesh geometry={nodes.knob002.geometry} material={materials['Material.093']} position={[1.35, 2.04, -0.26]} rotation={[0, 0, -Math.PI / 2]} scale={0.14} />
        <mesh geometry={nodes.knob003.geometry} material={materials['Material.094']} position={[1.35, 2.04, -0.72]} rotation={[0, 0, -Math.PI / 2]} scale={0.14} />
      </group>
      <mesh geometry={nodes.cooking_range_top.geometry} material={materials['Material.036']} position={[-2.73, -1.88, -0.09]} scale={0.83}>
        <mesh geometry={nodes.grill.geometry} material={materials['Material.048']} position={[0.69, 2.86, -0.48]}>
          <mesh geometry={nodes.Circle002.geometry} material={materials['Material.052']} position={[0, -0.07, 0]} scale={0.14} />
          <mesh geometry={nodes.Circle003.geometry} material={materials['Material.051']} position={[0, -0.01, 0]} scale={0.14} />
          <mesh geometry={nodes.cooking_range_main006.geometry} material={materials['Material.049']} />
          <mesh geometry={nodes.cooking_range_main007.geometry} material={materials['Material.050']} position={[-0.04, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        </mesh>
        <mesh geometry={nodes.grill001.geometry} material={materials['Material.053']} position={[-0.18, 2.86, -0.47]}>
          <mesh geometry={nodes.Circle006.geometry} material={materials['Material.057']} position={[0, -0.07, 0]} scale={0.14} />
          <mesh geometry={nodes.Circle007.geometry} material={materials['Material.056']} position={[0, -0.01, 0]} scale={0.14} />
          <mesh geometry={nodes.cooking_range_main012.geometry} material={materials['Material.054']} />
          <mesh geometry={nodes.cooking_range_main013.geometry} material={materials['Material.055']} position={[-0.04, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        </mesh>
        <mesh geometry={nodes.grill002.geometry} material={materials['Material.043']} position={[-0.18, 2.86, 0.48]}>
          <mesh geometry={nodes.Circle004.geometry} material={materials['Material.047']} position={[0, -0.07, 0]} scale={0.14} />
          <mesh geometry={nodes.Circle005.geometry} material={materials['Material.046']} position={[0, -0.01, 0]} scale={0.14} />
          <mesh geometry={nodes.cooking_range_main009.geometry} material={materials['Material.044']} />
          <mesh geometry={nodes.cooking_range_main010.geometry} material={materials['Material.045']} position={[-0.04, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        </mesh>
        <mesh geometry={nodes.grill003.geometry} material={materials['Material.038']} position={[0.69, 2.86, 0.47]}>
          <mesh geometry={nodes.Circle.geometry} material={materials['Material.042']} position={[0, -0.07, 0]} scale={0.14} />
          <mesh geometry={nodes.Circle001.geometry} material={materials['Material.041']} position={[0, -0.01, 0]} scale={0.14} />
          <mesh geometry={nodes.cooking_range_main003.geometry} material={materials['Material.039']} position={[-0.04, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.cooking_range_main004.geometry} material={materials['Material.040']} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.cooking_range_handle.geometry} material={materials['Material.031']} position={[-1.57, -0.28, -0.08]} scale={[0.83, 0.83, 0.69]} />
      <mesh geometry={nodes.counter.geometry} material={materials['Material.001']} position={[0.17, -0.81, -2.61]} scale={[3.63, 0.83, 1.3]} />
      <mesh geometry={nodes.counter_top.geometry} material={materials['Material.003']} position={[-0.24, 0.11, -2.47]} scale={[3.63, 0.83, 1.3]} />
      <mesh geometry={nodes.counter_sink.geometry} material={materials['Material.140']} position={[0.45, 0.04, -2.11]} scale={[3.63, 0.83, 1.3]} />
      <mesh geometry={nodes.faucet.geometry} material={materials['Material.008']} position={[0.45, 0.88, -3.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.83}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.009']} position={[0.32, 0.13, 0.28]} rotation={[0, -Math.PI / 2, 0]} scale={[0.06, 0.1, 0.06]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.010']} position={[0.32, 0.26, 0.21]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-0.02, -0.07, -0.02]} />
      </mesh>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.029']} position={[0.45, -2, -0.04]} scale={[1.27, 0.83, 0.82]} />
      <mesh geometry={nodes.wall001.geometry} material={materials['Material.115']} position={[0.49, 1.84, -4.49]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
      <mesh geometry={nodes.curtain_rod.geometry} material={materials['Material.012']} position={[0.5, 3.07, -4.92]} rotation={[0, 0, -Math.PI / 2]} scale={[-0.1, -1.82, -0.1]} />
      <mesh geometry={nodes.curtain.geometry} material={materials['Material.011']} position={[0.5, 1.83, -4.25]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
      <mesh geometry={nodes.shelf.geometry} material={materials['Material.108']} position={[-4.04, 1.85, -1.95]} scale={[3.75, 2.91, 3.75]} />
      <mesh geometry={nodes.plant_pot.geometry} material={materials['Material.080']} position={[-2, 2.09, -3.58]} scale={0.23}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.081']} position={[0, -0.82, 0]} scale={[1.35, 1.13, 1.13]} />
        <mesh geometry={nodes.Plane001.geometry} material={materials['Material.060']} position={[-0.11, 1.22, 1.26]} rotation={[2.2, -0.06, -3.07]} scale={-0.46} />
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.059']} position={[-1.17, 1.09, -0.25]} rotation={[1.36, 0.6, -1.04]} scale={-0.46} />
        <mesh geometry={nodes.Plane003.geometry} material={materials['Material.063']} position={[0.06, 1.12, -0.43]} rotation={[0.94, -0.03, 0.2]} scale={[-0.35, -0.21, -0.24]} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.061']} position={[1.32, 1.02, 0.09]} rotation={[1.55, -0.63, 1.7]} scale={-0.46} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['Material.058']} position={[-0.89, 1.44, 0.62]} rotation={[1.94, 0.51, -2.05]} scale={[-0.31, -0.59, -0.45]} />
        <mesh geometry={nodes.Plane006.geometry} material={materials['Material.062']} position={[1, 1.7, 0.68]} rotation={[-1.23, 0.53, -2.38]} scale={[0.27, 0.4, 0.4]} />
      </mesh>
      <mesh geometry={nodes.plant_pot001.geometry} material={materials['Material.082']} position={[-1.01, 1.19, -4.12]} scale={0.11}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.083']} position={[0, -0.82, 0]} scale={[1.35, 1.13, 1.13]} />
        <mesh geometry={nodes.Plane007.geometry} material={materials['Material.076']} position={[-0.36, 0.89, 0.07]} rotation={[2.01, 0.46, -2.22]} scale={[-0.24, -0.15, -0.16]} />
        <mesh geometry={nodes.Plane009.geometry} material={materials['Material.071']} position={[-0.13, 1.12, -1.02]} rotation={[0.97, 0.18, -0.09]} scale={[-0.35, -0.21, -0.24]} />
        <mesh geometry={nodes.Plane012.geometry} material={materials['Material.074']} position={[0.47, 0.91, 0.58]} rotation={[-0.91, 0.44, -2.52]} scale={[0.26, 0.19, 0.24]} />
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.077']} position={[-0.84, 0.91, 0.01]} rotation={[1.54, 0.63, -1.35]} scale={[-0.35, -0.21, -0.24]} />
        <mesh geometry={nodes.Plane014.geometry} material={materials['Material.075']} position={[-0.12, 0.96, 0.81]} rotation={[2.2, 0.04, -2.92]} scale={[-0.35, -0.21, -0.24]} />
        <mesh geometry={nodes.Plane015.geometry} material={materials['Material.072']} position={[0.58, 1.12, -0.34]} rotation={[1.28, -0.56, 1.23]} scale={[-0.35, -0.21, -0.24]} />
        <mesh geometry={nodes.Plane016.geometry} material={materials['Material.073']} position={[0.99, 1.11, 0.34]} rotation={[1.85, -0.41, 1.84]} scale={[-0.35, -0.21, -0.24]} />
      </mesh>
      <mesh geometry={nodes.fruit_bowl.geometry} material={materials['Material.018']} position={[2.54, 0.64, -2.92]} scale={[0.35, 0.21, 0.35]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.092']} position={[0.07, 0.65, -0.47]} scale={[0.04, 0.06, 0.04]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.090']} position={[-0.33, 0.68, 0.31]} rotation={[0, 1.17, 0]} scale={[0.04, 0.06, 0.04]} />
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Material.091']} position={[0.48, 0.55, 0.38]} rotation={[0.46, 0.61, -0.06]} scale={[0.03, 0.05, 0.03]} />
        <mesh geometry={nodes.orange1.geometry} material={materials['Material.015']} position={[0.09, -0.04, -0.43]} scale={[0.39, 0.63, 0.39]} />
        <mesh geometry={nodes.orange1001.geometry} material={materials['Material.013']} position={[-0.29, 0, 0.31]} rotation={[0, 1.17, 0]} scale={[0.39, 0.63, 0.39]} />
        <mesh geometry={nodes.orange1003.geometry} material={materials['Material.014']} position={[0.47, 0.02, 0.24]} rotation={[0, 0.26, 0]} scale={[0.33, 0.55, 0.33]} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.017']} position={[-0.01, 0.67, -0.32]} rotation={[1.75, 0.68, -1.55]} scale={[-0.07, -0.05, -0.07]} />
        <mesh geometry={nodes.Plane010.geometry} material={materials['Material.016']} position={[-0.23, 0.7, 0.44]} rotation={[2.22, -0.08, -3.05]} scale={[-0.07, -0.05, -0.07]} />
      </mesh>
      <mesh geometry={nodes.plates.geometry} material={materials['Material.138']} position={[-3.69, 2.17, -1.44]} scale={[0.27, 0.16, 0.27]}>
        <mesh geometry={nodes.fruit_bowl001.geometry} material={materials['Material.137']} position={[0, -0.86, 0]} />
        <mesh geometry={nodes.fruit_bowl002.geometry} material={materials['Material.139']} position={[0, -1.3, 0]} />
        <mesh geometry={nodes.fruit_bowl003.geometry} material={materials['Material.136']} position={[0, -0.41, 0]} />
      </mesh>
      <mesh geometry={nodes.mug001.geometry} material={materials['Material.026']} position={[-3.69, 1.91, -3.04]} scale={[0.17, 0.1, 0.17]} />
      <mesh geometry={nodes.bowls.geometry} material={materials['Material.023']} position={[-3.66, 1.98, -2.33]} scale={[0.35, 0.21, 0.35]}>
        <mesh geometry={nodes.fruit_bowl007.geometry} material={materials['Material.024']} position={[-0.04, 0.82, -0.07]} rotation={[0.18, 0, 0]} scale={[1, 0.99, 1.02]} />
        <mesh geometry={nodes.fruit_bowl008.geometry} material={materials['Material.025']} position={[-0.05, 1.51, 0.04]} rotation={[-0.11, 0, 0]} scale={[1, 1, 1.01]} />
      </mesh>
      <mesh geometry={nodes.tofu_bowl.geometry} material={materials['Material.085']} position={[2.61, -1.82, -0.43]} scale={[0.41, 0.25, 0.41]} />
      <group position={[-3.65, 2.24, -0.42]} scale={[0.13, 0.23, 0.13]}>
        <mesh geometry={nodes.Cylinder026.geometry} material={materials['Material.100']} />
        <mesh geometry={nodes.Cylinder026_1.geometry} material={materials['Material.101']} />
        <mesh geometry={nodes.Cylinder026_2.geometry} material={materials['Material.107']} />
      </group>
      <group position={[-3.67, 1.99, -0.76]} scale={0.13}>
        <mesh geometry={nodes.Cylinder027.geometry} material={materials['Material.105']} />
        <mesh geometry={nodes.Cylinder027_1.geometry} material={materials['Material.102']} />
        <mesh geometry={nodes.Cylinder027_2.geometry} material={materials['Material.106']} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.104']} position={[0.02, 2.13, 0.69]} rotation={[Math.PI / 2, 0, 0]} scale={-0.09} />
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Material.103']} position={[0.02, 2.13, -0.7]} rotation={[-1.6, 0, 0]} scale={-0.09} />
      </group>
      <mesh geometry={nodes['pan_(marie-anne)'].geometry} material={materials['Material.021']} position={[-1.92, 0.73, -1.16]} rotation={[-Math.PI, -1.26, -Math.PI / 2]} scale={[0.03, 0.32, 0.07]}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.084']} position={[-0.27, -2.01, 0.31]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.72, 1.22, 2.61]} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.098']} position={[-5.97, 2.38, 1.19]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.48, 0.75, 2.63]} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.037']} position={[-0.04, -2.01, 0.31]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.72, 1.22, 2.61]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.037']} position={[-6.69, 2.37, 1.19]} rotation={[-2.5, 0.54, -1.29]} scale={[2.27, 1.22, 1.9]} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['Material.098']} position={[-86.88, 2.12, -61.11]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.42, 0.66, 2.31]} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.037']} position={[-87.51, 2.12, -61.11]} rotation={[-2.5, 0.54, -1.29]} scale={[2, 1.08, 1.67]} />
        <mesh geometry={nodes.fruit_bowl004.geometry} material={materials['Material.020']} position={[-0.72, -2.12, -0.09]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.99, 6.94, 4.33]} />
      </mesh>
      <mesh geometry={nodes['mug_(sophia)'].geometry} material={materials['Material.028']} position={[-1.04, 0.67, -2.22]} rotation={[1.07, -1.43, -0.51]} scale={[0.26, 0.57, 0.4]}>
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Material.027']} position={[0.04, 0.01, 0.3]} rotation={[0.05, -0.13, 1.58]} scale={[0.26, 0.59, 0.38]} />
      </mesh>
      <mesh geometry={nodes.counter001.geometry} material={materials['Material.002']} position={[2.48, -0.11, -1.17]} scale={[2.92, 0.67, 1.05]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.089']} position={[2.49, -0.17, -0.96]} scale={0.07} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.022']} position={[2.49, -0.78, -0.96]} scale={0.07} />
      <mesh geometry={nodes.plant_pot002.geometry} material={materials['Material.078']} position={[-3.05, 2.02, -3.5]} rotation={[0, 1.13, 0]} scale={0.16}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.079']} position={[0, -0.82, 0]} scale={[1.35, 1.13, 1.13]} />
        <mesh geometry={nodes.Plane017.geometry} material={materials['Material.066']} position={[-0.11, 1.22, 1.26]} rotation={[2.2, -0.06, -3.07]} scale={-0.46} />
        <mesh geometry={nodes.Plane018.geometry} material={materials['Material.065']} position={[-1.15, 1.3, -0.23]} rotation={[1.36, 0.6, -1.04]} scale={-0.46} />
        <mesh geometry={nodes.Plane019.geometry} material={materials['Material.070']} position={[-0.14, 1.12, -0.72]} rotation={[-2.12, -0.3, 0.25]} scale={[0.22, 0.32, 0.32]} />
        <mesh geometry={nodes.Plane020.geometry} material={materials['Material.069']} position={[1.32, 1.32, 0.08]} rotation={[1.55, -0.63, 1.7]} scale={-0.46} />
        <mesh geometry={nodes.Plane021.geometry} material={materials['Material.064']} position={[0.62, 1.28, -1.34]} rotation={[0.97, -0.18, 0.46]} scale={[-0.31, -0.59, -0.45]} />
        <mesh geometry={nodes.Plane022.geometry} material={materials['Material.068']} position={[0.66, 1.05, 0.6]} rotation={[-1.13, 0.46, -2.59]} scale={[0.27, 0.4, 0.4]} />
        <mesh geometry={nodes.Plane023.geometry} material={materials['Material.067']} position={[-0.58, 1.22, 0.62]} rotation={[-1.24, -0.54, 1.96]} scale={[0.21, 0.3, 0.3]} />
      </mesh>
      <mesh geometry={nodes.plates001.geometry} material={materials['Material.099']} position={[-1.74, 0.59, -1.91]} scale={[0.27, 0.16, 0.27]} />
      <group position={[-2.02, 0.67, -3.31]} rotation={[0, -1.45, 0]} scale={[-0.3, -0.15, -0.3]}>
        <mesh geometry={nodes.Cylinder039.geometry} material={materials['Material.086']} />
        <mesh geometry={nodes.Cylinder039_1.geometry} material={materials['Material.109']} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Material.087']} position={[-0.01, -0.6, 1.26]} scale={[-0.24, -0.21, -0.22]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.088']} position={[-0.01, -0.6, -1.25]} rotation={[Math.PI, 0, Math.PI]} scale={[-0.24, -0.21, -0.22]} />
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.110']} position={[0.49, 0.92, -0.5]} scale={[0.09, 0.18, 0.09]} />
        <mesh geometry={nodes.Cylinder013.geometry} material={materials['Material.113']} position={[-0.51, 0.92, -0.5]} scale={[0.09, 0.18, 0.09]} />
        <mesh geometry={nodes.Cylinder014.geometry} material={materials['Material.111']} position={[-0.51, 0.92, 0.54]} scale={[0.09, 0.18, 0.09]} />
        <mesh geometry={nodes.Cylinder015.geometry} material={materials['Material.112']} position={[0.51, 0.92, 0.54]} scale={[0.09, 0.18, 0.09]} />
      </group>
      <mesh geometry={nodes.mug002.geometry} material={materials['Material.026']} position={[-3.09, 0.52, -1.6]} scale={[0.17, 0.1, 0.17]} />
      <mesh geometry={nodes.curtain_rod001.geometry} material={materials['Material.012']} position={[0.78, -0.13, -2.02]} rotation={[0, 0, -Math.PI / 2]} scale={[-0.1, -1.82, -0.1]} />
      <mesh geometry={nodes.curtain001.geometry} material={materials['Material.011']} position={[0.78, -1.37, -1.35]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
      <mesh geometry={nodes['mug_(sophia)001'].geometry} material={materials['Material.028']} position={[-2.87, 0.76, -3.3]} rotation={[0.24, -0.72, -1.33]} scale={[0.34, 0.57, 0.41]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Material.019']} position={[2.48, 0.51, -1.82]} rotation={[0, -0.27, 0]} />
      <mesh geometry={nodes.Plane026.geometry} material={materials['Material.030']} position={[-1.35, -1.03, -0.04]} rotation={[0, -0.08, 0]} scale={[0.76, 1.12, 0.76]} />
      <mesh geometry={nodes.Plane027.geometry} material={materials['Material.141']} position={[0.39, -0.28, -2.1]} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.116']} position={[2.38, 0.73, -1.58]} rotation={[0.5, -0.17, -3.01]} scale={[0.24, 0.29, 0.18]} />
      <group position={[2.46, 0.58, -1.93]} rotation={[-Math.PI, 0.04, -Math.PI]} scale={[0.24, 0.29, 0.18]}>
        <mesh geometry={nodes.Sphere008.geometry} material={materials['Material.121']} />
        <mesh geometry={nodes.Sphere008_1.geometry} material={materials['Material.122']} />
      </group>
      <mesh geometry={nodes.Sphere004.geometry} material={materials['Material.118']} position={[2.24, 0.76, -1.69]} rotation={[-2.87, -0.53, 3.01]} scale={[-0.04, -0.05, -0.03]} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials['Material.119']} position={[2.36, 0.76, -1.64]} rotation={[-2.87, -0.53, 3.01]} scale={[-0.04, -0.05, -0.03]} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials['Material.120']} position={[2.5, 0.77, -1.6]} rotation={[-2.87, -0.53, 3.01]} scale={[-0.04, -0.05, -0.03]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.124']} position={[2.99, 0.66, -2.05]} rotation={[Math.PI, -0.15, Math.PI]} scale={[0.06, 0.03, 0.3]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.123']} position={[3.05, 0.66, -1.68]} rotation={[Math.PI, -0.15, Math.PI]} scale={[0.09, 0.08, 0.22]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.128']} position={[-3.14, 1.42, -1.79]} rotation={[-1.96, -0.1, -2.87]} scale={[0.12, 0.05, 0.15]}>
        <mesh geometry={nodes.Cube010_1.geometry} material={materials['Material.127']} position={[0.02, -0.09, -2.06]} rotation={[0, 0.03, 0.04]} scale={[0.54, 0.39, 2.43]} />
        <mesh geometry={nodes.Cube012.geometry} material={materials['Material.125']} position={[0.78, 0.62, -2.29]} rotation={[-0.49, 0, 1.75]} scale={[0.98, 0.13, 2.96]} />
      </mesh>
      <mesh geometry={nodes.Sphere007.geometry} material={materials['Material.126']} position={[-3.33, 1.43, -1.56]} rotation={[-3.07, -0.26, -2.08]} scale={[0.18, 0.06, 0.13]} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials['Material.130']} position={[-1.34, 0.58, -1.83]} rotation={[-0.97, -0.44, -2.27]} scale={[0.01, 0.31, 0.01]} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials['Material.129']} position={[-1.32, 0.57, -1.87]} rotation={[-0.88, -0.41, -2.16]} scale={[0.01, 0.31, 0.01]} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials['Material.132']} position={[-3.1, 0.72, -3.14]} rotation={[0, 0.15, 0.01]} scale={[1, 0.72, 1]}>
        <mesh geometry={nodes.Cylinder020.geometry} material={materials['Material.134']} position={[-0.25, 0.15, 0.24]} rotation={[0.28, 0.37, 0.81]} scale={[0.06, 0.11, 0.04]} />
        <mesh geometry={nodes.Sphere008_2.geometry} material={materials['Material.133']} position={[0.01, 0.44, 0.02]} rotation={[0, 0, 3.14]} scale={0.3} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/proj1_kitchen2.glb')
