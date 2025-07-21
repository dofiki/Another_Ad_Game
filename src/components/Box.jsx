import { useEffect } from 'react';
import { useState } from 'react';

export default function Box(){

  const [boxPosition,setBoxPosition] = useState([0, 1, 20])

  useEffect(()=>{

    const handleKeyPress= (e)=>{

    const [x,y,z] = boxPosition
      switch(e.key){
      
        case "w":
          setBoxPosition([x,y,z-1])
          break

        case "s":
          setBoxPosition([x,y,z+1])
          break

        case "a":
          setBoxPosition([x-1,y,z])
          break

        case "d":
          setBoxPosition([x+1,y,z])
          break
      }
    }

    window.addEventListener('keypress',handleKeyPress)

    return()=>{
      window.removeEventListener('keypress',handleKeyPress)
    }
    
  },[boxPosition])

  return(
      <mesh position={boxPosition}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="deepskyblue" />
      </mesh>
  )
}