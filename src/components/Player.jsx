import { useEffect, useState } from 'react';
import usePlayerStore from '../store/playerStore'; 
import Bullets from './Bullets';

export default function Player(){

  const playerPos = usePlayerStore((state)=>{ return state.playerPosition})
  const setPlayerPos = usePlayerStore((state)=>{ return state.setPlayerPosition})

  const [bullets, setBullets] = useState([]);

  // player movement
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

  // shooting bullets
  useEffect(()=>{
    function handleMouseDown(){
      setBullets((prev)=>[...prev,{id:Date.now()+Math.random(), position: [...playerPos]}])
    }

    window.addEventListener("mousedown", handleMouseDown);

    return()=>{
      window.removeEventListener("mousedown", handleMouseDown);
    }

  },[playerPos])

  return(
      <>
      <mesh castShadow  position={playerPos}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" wireframe />
      </mesh>
        <Bullets bullets={bullets} />
      </> 
  )
}