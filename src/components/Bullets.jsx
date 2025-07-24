import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

function SingleBullet({position}){
    const SPEED = 100;

    const [singleBulletRef, SingleBulletApi]= useSphere(()=>({
        mass: 1,
        position,
        args:[0.2],
        velocity:[0,0,-300],
        onCollide: (e) => {
            if(e.body?.userData?.id === "help-panel"){
                console.log("hit help-panel");
            }else if(e.body?.userData?.id === "enemy-panel"){
                console.log("hit enempy-panel")
            }
}
}));

    return(
        <mesh ref={singleBulletRef}> 
            <sphereGeometry args={[0.3,15,15]}/>
            <meshStandardMaterial color="white"/>
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
