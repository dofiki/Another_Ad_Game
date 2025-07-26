import { useRef} from "react"
import degToRad from "../utils/degToRad"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import usePlayerStore from "../store/playerStore";


function HelpPanel() {
    
  const helpPanelStats = usePlayerStore((state)=>{return state.helpPanelStats})
  const setHelpPanelStats = usePlayerStore((state)=>{return state.setHelpPanelStats})

  const SPEED = 20;
  
  const [helpRef, helpApi ] = useBox(()=>({
    type:"Kinematic",
    position:[-10, 2, -100],
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
        helpApi.position.set(-10, 2, -100) // resetting physics body
        helpRef.current.position.set(-10, 2, -100) // resetting mesh 
        setHelpPanelStats(5)

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
        opacity={0.2}
        emissive="green"
        emissiveIntensity={1}
        side={2}
      />

     <Text
      position={[0, 0, 0.6]} 
      rotation={[degToRad(0), degToRad(0), degToRad(180)]}
      fontSize={2}
      color="green"
      anchorX={1}
      anchorY={-5}
    >
      {helpPanelStats > 0 ? helpPanelStats : "-"}
 </Text>

      
     <Text
      rotation={[degToRad(0), degToRad(0), degToRad(180)]}
      fontSize={2}
      color="green"
      anchorX={5}
      anchorY={-15}>

      {helpPanelStats === 0 ? " ate +150 pts": " +150 pts"}
</Text>


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