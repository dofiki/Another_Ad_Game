import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import Player from './components/Player';
import Ground from './components/Ground';
import { Physics } from '@react-three/cannon';
import HelpPanel from './components/HelpPanel';
import EnemyPanel from './components/EnemyPanel';
import GrassLeft from './components/sideway/GrassLeft';
import GrassRight from './components/sideway/GrassRight';

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
        <ambientLight intensity={0.5} color="white" /> {/* Very low ambient */}
          <spotLight
          position={[20, 37, -25]} // Positioned above the ground at z=-100
          angle={Math.PI / 5} // 30 degree cone
          intensity={120} // Strong intensity
          distance={80} // Enough to reach the ground
          decay={1}
          penumbra={0.5}
          castShadow
          color="white"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* scene */}
        <Physics>
          <Ground />
          <Player />
          <HelpPanel />
          <EnemyPanel />
          <GrassLeft />
          <GrassRight />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;