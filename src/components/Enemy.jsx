import { useRef } from "react";
import degToRad from "../utils/degToRad";
import { useFrame } from "@react-three/fiber";

function Enemy() {
  const SPEED = 25;
  const enemeyRef = useRef();

  useFrame((state,delta)=>{
    if(enemeyRef.current){
        enemeyRef.current.position.y -= delta * SPEED;
    }
    // threshold
    if(enemeyRef.current.position.y <= -180){
        enemeyRef.current.position.y = -10;
    }
  })

  return (

      <mesh
        ref={enemeyRef}
        position={[10, -10, 0]}
        rotation={[degToRad(90), degToRad(0), degToRad(180)]}
      >
        <planeGeometry args={[20,20]}/>
        <meshStandardMaterial color="red"/>
      </mesh>
  )
}

export default Enemy
