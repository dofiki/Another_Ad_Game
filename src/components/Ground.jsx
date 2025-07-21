
function Ground() {
  return (
     <mesh rotation={[-Math.PI / 2, 0, 0] } position={[0,0,-100]}>
          <planeGeometry args={[40, 300]} />
          <meshStandardMaterial color="green" />
     </mesh>
  )
}

export default Ground
