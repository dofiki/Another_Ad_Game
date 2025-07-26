import { useRef} from "react"
import degToRad from "../utils/degToRad"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";


function HelpPanel() {
    
  const SPEED = 25;

  const [helpRef, helpApi ] = useBox(()=>({
    type:"Kinematic",
    position:[-10, 2, -80],
    args: [20, 20, 5],
    rotation: [degToRad(0), degToRad(0), degToRad(180)],
    userData: { id: "help-panel" },
    
  })) 

  //const helpNameRef = useRef()
  //const helpStatusRef = useRef()

  useFrame((_, delta) => {
    if (helpRef.current) {

      const pos = helpRef.current.position
      const z = pos.z + delta * SPEED


      helpApi.position.set(pos.x,pos.y,z) // physics body
      helpRef.current.position.set(pos.x,pos.y,z) // mesh

     // helpNameRef.current.position.y -= delta * SPEED;
    //helpStatusRef.current.position.y -= delta * SPEED;
    }

    // threshold
    if(helpRef.current.position.z >= 50){
        helpApi.position.set(-10, 10, -80) // resetting physics body
        helpRef.current.position.set(-10, 10, -80) // resetting mesh 

       // helpNameRef.current.position.y = -10;
       // helpStatusRef.current.position.y = -10;
    }

  })

  return (
    <>
    <mesh
      ref={helpRef}
    >
  
      <boxGeometry args={[20, 20, 1]} />
      
      <meshStandardMaterial
        color="green"
        transparent={true}
        opacity={0.1}
        emissive="green"
        emissiveIntensity={0.7}
        side={2}
      />

    </mesh>
    {
      /*
        <Text
        ref={helpNameRef}
        position={[-10, -10, 11.5]} 
        rotation={[degToRad(90),degToRad(0),degToRad(0)]}
        fontSize={3}
        color="Blue"
        anchorX="center"
        anchorY="middle"
      >
        +5
      </Text>
      
      <Text
        ref={helpStatusRef}
        position={[-10, -11, 5]} 
        rotation={[degToRad(90),degToRad(0),degToRad(0)]}
        fontSize={3}
        color="Blue"
        anchorX="center"
        anchorY="middle"
      >
        15
   </Text>
      */
    }
    </>
  )
}

export default HelpPanel