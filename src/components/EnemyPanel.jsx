import { useRef } from "react";
import degToRad from "../utils/degToRad";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { Text } from "@react-three/drei";

function EnemyPanel() {
  
  const SPEED = 25 ;

  const [enemeyRef, enemeyRefApi] = useBox(()=>({
    type:"kinematic",
    position:[10, 2, -200],
    rotation:[degToRad(0), degToRad(0), degToRad(180)],
    args: [20,20,5],
    userData: { id: "enemy-panel" },
  }));

  useFrame((_, delta)=>{
    if(enemeyRef.current){
        const pos = enemeyRef.current.position;
        const z = pos.z + delta*SPEED;

        enemeyRefApi.position.set(pos.x,pos.y,z) // physics body
        enemeyRef.current.position.set(pos.x,pos.y,z) //mesh

    }
    // threshold
    if(enemeyRef.current.position.z >= 50){
        enemeyRefApi.position.set(10, 2, -200) // resetting physics body
        enemeyRef.current.position.set(10, 2, -200) // resetting mesh
    }
  })

  return (
      <mesh
        ref={enemeyRef}
        position={[10, -10, 0]}
        rotation={[degToRad(0), degToRad(0), degToRad(180)]}
      >
        <boxGeometry args={[20, 20, 1]} />
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.2}
          emissive="red"
          emissiveIntensity={1}
          side={2}/>

        <Text 
          position={[0, 0, 0.6]} 
          rotation={[degToRad(0), degToRad(0), degToRad(180)]}
          fontSize={2}
          color="red"
          anchorX={4}
          anchorY={-15}>
            -150 pts
      </Text>

      </mesh>
  )
}

export default EnemyPanel
