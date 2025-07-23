import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SingleBullet({position}){
    const SPEED = 100;
    const singleBulletRef = useRef();

    useFrame((_,delta)=>{
        if(singleBulletRef.current){
            singleBulletRef.current.position.z -= delta*SPEED;

            if(singleBulletRef.current.position.z <= 180){
                
            }
        }
    })

    return(
        <mesh ref={singleBulletRef} position={[...position]}> 
            <sphereGeometry args={[0.3,15,15]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    )
}

function Bullets({bullets}) {
  return (
   <>
    {bullets.map((each)=>{
       return <SingleBullet key={each.id} position={each.position} />
    })}
   </>
  )
}

export default Bullets
