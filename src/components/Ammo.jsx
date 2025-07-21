import { useRef} from "react"
import degToRad from "../utils/degToRad"
import { useFrame } from "@react-three/fiber"

function Ammo() {
    
  const SPEED = 25;
  const groundRef = useRef()

  useFrame((state, delta) => {
    if (groundRef.current) {
      groundRef.current.position.y -= delta * SPEED;
    }

    // threshold
    if(groundRef.current.position.y <= -180){
        groundRef.current.position.y = -10;
    }

  })

  return (
    <mesh
      ref={groundRef}
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
  )
}

export default Ammo
