import { useEffect, useState } from 'react';
import usePlayerStore from '../store/playerStore'; 
import Bullets from './Bullets';

export default function Player(){

  const playerPos = usePlayerStore((state)=>{ return state.playerPosition})
  const setPlayerPos = usePlayerStore((state)=>{ return state.setPlayerPosition})

  const [isShooting,setIsShooting] = useState(false)

  // left to right movement
  useEffect(()=>{

    const handleKeyPress= (e)=>{

    const [x,y,z] = playerPos
      switch(e.key){

        case "a":
          setPlayerPos([x-1,y,z])
          break

        case "d":
          setPlayerPos([x+1,y,z])
          break
      }
    }

    window.addEventListener('keypress', handleKeyPress)

    return()=>{
      window.removeEventListener('keypress', handleKeyPress)
    }

  },[playerPos])

  // mouse left click
  useEffect(()=>{
    function handleMouseDown(){
      setIsShooting(true);
      console.log("shooting")
    }

    function handleMouseUp(){
      setIsShooting(false);
      console.log("stoped")
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp)

    return()=>{
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseDown);
    }

  },[playerPos])

  return(
      <>
      <mesh position={playerPos}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {isShooting && (
        <Bullets />
      )}
      </>
  )
}