import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import usePlayerStore from "../store/playerStore"

function Bullets() {
  const SPEED = 100;  
  const playerPos = usePlayerStore((state)=>{return state.playerPosition})
  
  const [x,y,z] = playerPos;
  const bulletRef = useRef();

  useFrame((state,delta)=>{

    if(bulletRef.current){
        bulletRef.current.position.z -= delta*SPEED;
    }
  })

  return (
    <mesh ref={bulletRef} position={[x,y,z-5]}>
        <sphereGeometry args={[0.3,15,15]}/>
        <meshStandardMaterial color="red"/>
    </mesh>
  )
}

export default Bullets
