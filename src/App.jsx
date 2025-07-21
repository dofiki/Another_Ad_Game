import {Canvas} from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import Box from './components/box';
import Ground from './components/Ground';

function App() {

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 30, 40], fov: 50}}>

        {/*helpers*/}
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <gridHelper args={[80, 30, "red","gray"]} />
        <axesHelper args={[5]} />

        <OrbitControls />

        {/*Scene*/}
        <Box/>
        <Ground />

        {/*lights*/}
        <ambientLight intensity={0.4} color="white"/>
        <directionalLight position={[2, 5, 1]} intensity={0.5} color="white" />

      </Canvas>
    </div>
        
  )
}

export default App
