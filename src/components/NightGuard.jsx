function NightGuard() {
  return (
    <mesh position={[10, 2, -300]}>
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
