import { useEffect } from 'react';
import { useState } from 'react';

export default function Player(){

  const [playerPosition,setPlayerPosition] = useState([0, 1, 20])

  useEffect(()=>{

    const handleKeyPress= (e)=>{

    const [x,y,z] = playerPosition
      switch(e.key){
      
        case "w":
          setPlayerPosition([x,y,z-1])
          break

        case "s":
          setPlayerPosition([x,y,z+1])
          break

        case "a":
          setPlayerPosition([x-1,y,z])
          break

        case "d":
          setPlayerPosition([x+1,y,z])
          break
      }
    }

    window.addEventListener('keypress', handleKeyPress)

    return()=>{
      window.removeEventListener('keypress', handleKeyPress)
    }

  },[playerPosition])

  return(
      <mesh position={playerPosition}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="deepskyblue" />
      </mesh>
  )
}