import { useLoader } from "@react-three/fiber";
import * as THREE from "three"

export default function GrassLeft(){
    const texture = useLoader(THREE.TextureLoader,"/textures/rocky_terrain_02_diff_1k.jpg")

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(2,4)

    return (
    <mesh rotation={[-Math.PI / 2, 0, 0] } position={[-80,0,-100]}>
          <planeGeometry args={[120, 300]} />
          <meshStandardMaterial map={texture} />
     </mesh>
    )
}