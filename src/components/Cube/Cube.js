import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/Three.js'
import { OrbitControls } from "@react-three/drei";


function RotatingCube ({img, position, link}) {
    const cubeRef = useRef();

    const texture = useLoader(TextureLoader, img);

    useFrame(() => {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
    })

    const handleClick = () => {
        const fullLink = link.startsWith('http') ? link : `https://${link}`;
        window.location.href = fullLink;
    };

    return (
        <mesh ref={cubeRef} position={position} onClick={handleClick}>
            <boxGeometry args={[3, 3, 3]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    ) 
}

function Cube({img, position, link}) {
  return (
    <Canvas shadows>
        <hemisphereLight
            skyColor={'#FFFFFF'}
            groundColor={'#000000'}
            intensity={2}
            position={[0, 20, 0]}
        />
        <RotatingCube img={img} position={position} link={link}/>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Cube