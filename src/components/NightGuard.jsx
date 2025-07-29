import { useBox } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'

function NightGuard() {
  const { scene } = useGLTF('./nightguard.glb')
  const SPEED = 25;

  const [ngRef, ngRefApi] = useBox(()=>({
    type:"Kinematic",
    position:[-12, 3, -300],
    userData: {id:"night-guard"}
  }))

  useFrame((_,delta)=>{
    if(ngRef.current){
      const pos = ngRef.current.position;
      const z = pos.z +delta*SPEED; 

      ngRefApi.position.set(pos.x,pos.y,z);
      ngRef.current.position.set(pos.x,pos.y,z);

        if(ngRef.current.position.z >= 50){
          ngRefApi.position.set(-12, 3, -300) // resetting physics body
          ngRef.current.position.set(-12, 3, -300) // resetting mesh 
      }
    }

  })

  return (
    <mesh ref={ngRef} position={[-12, 3, -300]}>
    <primitive object={scene} rotation={[0, Math.PI / 2, 0]}  scale={3}/>
      
      <meshStandardMaterial
        color="red"
        transparent={true}
        opacity={0.2}
        emissive="green"
        emissiveIntensity={1}
        side={2}
      />

    </mesh>
  )
}

export default NightGuard
