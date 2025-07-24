import {Canvas} from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import Player from './components/Player';
import Ground from './components/Ground';
import { Debug, Physics} from '@react-three/cannon'
import HelpPanel from './components/HelpPanel';
import EnemyPanel from './components/EnemyPanel';

function App() {

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 30, 40], fov: 50}} >
        
        <color attach="background" args={['black']} />

        {/*helpers*/}
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <OrbitControls />

        {/*Scene*/}
       <Physics>
         <Debug color="red" scale={1.1}>
          <Ground />
          <Player/>
          <HelpPanel />
          <EnemyPanel />
         </Debug>
       </Physics>

        {/*lights*/}
        <ambientLight intensity={0.4} color="white"/>
        <directionalLight position={[2, 5, 1]} intensity={0.5} color="white" />

      </Canvas>
    </div>
        
  )
}

export default App
