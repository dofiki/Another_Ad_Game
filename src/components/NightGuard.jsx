import { useBox } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'

function NightGuard() {
  const { scene } = useGLTF('./nightguard.glb')
  const SPEED = 25;

  const [ngRef, ngRefApi] = useBox(()=>({
    type:"Kinematic",
    position:[10, 2, -300],
    args: [10, 5, 20],
    userData: {id:"night-guard"}
  }))

  useFrame((_,delta)=>{
    if(ngRef.current){
      const pos = ngRef.current.position;
      const z = pos.z +delta*SPEED; 

      ngRefApi.position.set(pos.x,pos.y,z);
      ngRef.current.position.set(pos.x,pos.y,z);

        if(ngRef.current.position.z >= 50){
          ngRefApi.position.set(10, 2, -200) // resetting physics body
          ngRef.current.position.set(10, 2, -200) // resetting mesh 
      }
    }

  })

  return (
     <mesh ref={ngRef}>
      <group position={[-20, 0, 0]}> {/* aligning mesh with physics body */}
        <primitive object={scene} rotation={[0, Math.PI / 2, 0]} scale={3} />
      </group>
    </mesh>
  )
}

export default NightGuard
