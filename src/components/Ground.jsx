import { useLoader } from "@react-three/fiber"
import * as THREE from "three"

function Ground() {
  const texture = useLoader(THREE.TextureLoader, '/textures/Road001_1K-JPG_Color.jpg')
  
  texture.wrapS = THREE.RepeatWrapping; // horizontally
  texture.wrapT = THREE.RepeatWrapping; // vertically
  texture.repeat.set(1,10) // one tile horizontally and 15 tiles vertically

  return (
     <mesh receiveShadow={true}  rotation={[-Math.PI / 2, 0, 0] } position={[0,0,-100]}>
          <planeGeometry args={[40, 300]} />
          <meshStandardMaterial map={texture} />

     </mesh>
  )
}
export default Ground
