import { useSphere } from "@react-three/cannon";
import usePlayerStore from "../store/playerStore";

function SingleBullet({ position }) {

  const setHelpPanelStats = usePlayerStore((state) => state.setHelpPanelStats);
  const setTotalScore = usePlayerStore((state) => state.setTotalScore);
  const setNightGuardStat = usePlayerStore((state) => state.setNightGuardStat);

  // Subscribe to the states
  const helpPanelStats = usePlayerStore((state) => state.helpPanelStats);
  const totalScore = usePlayerStore((state) => state.totalScore);
  const nightGuardStat = usePlayerStore((state) => state.nightGuardStat);

  function handleHelpPanelStats() {
    if (helpPanelStats <= 0) return;

    const newStat = helpPanelStats - 1;

    if (newStat === 0) {
      setTotalScore(totalScore + 150);
    }

    setHelpPanelStats(newStat);
  }

  function handleEnemyPanelStats() {
    if (totalScore > 0) {
      setTotalScore(totalScore - 150);
    }
  }

  function handleNightGuard() {
    if (nightGuardStat > 0) {
      setNightGuardStat(nightGuardStat - 1);
    }

    if (nightGuardStat === 0) {
      setTotalScore(totalScore + 250);
      setNightGuardStat(5)
    }
  }

  const [singleBulletRef, SingleBulletApi] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.2],
    velocity: [0, 0, -300],
    onCollide: (e) => {
      if (e.body?.userData?.id === "help-panel") {
        handleHelpPanelStats();
      } else if (e.body?.userData?.id === "enemy-panel") {
        handleEnemyPanelStats();
      } else if (e.body?.userData?.id === "night-guard") {
        handleNightGuard();
      }
    },
  }));

  return (
    <mesh ref={singleBulletRef}>
      <sphereGeometry args={[0.3, 15, 15]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function Bullets({ bullets }) {
  return (
    <>
      {bullets.map((each) => (
        <SingleBullet key={each.id} position={each.position} />
      ))}
    </>
  );
}

export default Bullets;
