import { useBox } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"

function NightGuard() {

  const SPEED = 20;

  const [ngRef, ngRefApi] = useBox(()=>({
    type:"Kinematic",
    position:[10, 2, -250],
    args: [15, 10, 10],
    userData: {id:"night-guard"}
  }))

  useFrame((_,delta)=>{
    if(ngRef.current){
      const pos = ngRef.current.position;
      const z = pos.z + delta*SPEED;

      ngRefApi.position.set(pos.x,pos.y,z);
      ngRef.current.position.set(pos.x,pos.y,z);

        if(ngRef.current.position.z >= 50){
          ngRefApi.position.set(10, 2, -300) // resetting physics body
          ngRef.current.position.set(10, 2, -300) // resetting mesh 
      }
    }

  })

  return (
    <mesh ref={ngRef} position={[10, 2, -300]}>
      <boxGeometry args={[15, 10, 10]} />
      
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
