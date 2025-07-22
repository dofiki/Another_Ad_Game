import { useRef} from "react"
import degToRad from "../utils/degToRad"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei";

function HelpPanel() {
    
  const SPEED = 25;
  const helpRef = useRef()
  const helpNameRef = useRef()
  const helpStatusRef = useRef()

  useFrame((state, delta) => {
    if (helpRef.current && helpNameRef.current) {
      helpRef.current.position.y -= delta * SPEED;
      helpNameRef.current.position.y -= delta * SPEED;
      helpStatusRef.current.position.y -= delta * SPEED;
    }

    // threshold
    if(helpRef.current.position.y <= -180){
        helpRef.current.position.y = -10;
        helpNameRef.current.position.y = -10;
        helpStatusRef.current.position.y = -10;
    }

  })

  return (
    <>
    <mesh
      ref={helpRef}
      position={[-10, -10, 0]}
      rotation={[degToRad(90), degToRad(0), degToRad(180)]}
    >
      <planeGeometry args={[20, 20]} />
      
      <meshStandardMaterial
        color="blue"
        transparent={true}
        opacity={0.4}
        emissive="blue"
        emissiveIntensity={0.7}
        side={2}
      />
    </mesh>
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
    </>
  )
}

export default HelpPanel
