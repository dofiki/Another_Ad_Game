import { useLoader } from "@react-three/fiber"
import * as THREE from "three"
import Ammo from "./Ammo"
import Enemy from "./Enemy";

function Ground() {
  const texture = useLoader(THREE.TextureLoader, '/textures/Road001_1K-JPG_Color.jpg')
  
  texture.wrapS = THREE.RepeatWrapping; // horizontally
  texture.wrapT = THREE.RepeatWrapping; // vertically
  texture.repeat.set(1,15) // one tile horizontally and 15 tiles vertically

  return (
     <mesh rotation={[-Math.PI / 2, 0, 0] } position={[0,0,-100]}>
          <planeGeometry args={[40, 300]} />
          <Ammo />
          <Enemy />
          <meshStandardMaterial map={texture} />
     </mesh>
  )
}
export default Ground
