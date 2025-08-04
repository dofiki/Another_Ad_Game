import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';

import Player from './components/Player';
import Ground from './components/Ground';
import HelpPanel from './components/HelpPanel';
import EnemyPanel from './components/EnemyPanel';
import GrassLeft from './components/sideway/GrassLeft';
import GrassRight from './components/sideway/GrassRight';
import NightGuard from './components/NightGuard';
import Score from './components/Score';

function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows camera={{ position: [0, 20, 28], fov: 80 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 30, 200]} />

        {/* helpers */}
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <OrbitControls />

        {/* lights */}
        <ambientLight intensity={0.5} color="white" /> 
        <spotLight
          position={[20, 37, -25]} 
          angle={Math.PI / 5}
          intensity={120} 
          distance={80} 
          decay={1}
          penumbra={0.5}
          castShadow
          color="white"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />  

        {/* scene with debug body */}
        <Physics>
          <Debug color="hotpink" scale={1.1}>
            <Ground />
            <Player />
            <NightGuard />
            <HelpPanel />
            <EnemyPanel />
            <GrassLeft />
            <GrassRight />
          </Debug>
        </Physics>

        <Score />
      </Canvas>
    </div>
  );
}

export default App;
