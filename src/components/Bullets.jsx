import { useSphere } from "@react-three/cannon";
import usePlayerStore from "../store/playerStore";

function SingleBullet({ position }) {
  const setHelpPanelStats = usePlayerStore((state) => state.setHelpPanelStats);
  const setTotalScore = usePlayerStore((state) => state.setTotalScore); // subscribed 

function handleStats() {
  const current = usePlayerStore.getState().helpPanelStats;

  if (current <= 0) return;

  const newStat = current - 1;

  if (newStat === 0) {
    const currentScore = usePlayerStore.getState().totalScore; // not subscribed
    setTotalScore(currentScore + 150);
  }

  setHelpPanelStats(newStat);
}



    const [singleBulletRef, SingleBulletApi]= useSphere(()=>({
        mass: 1,
        position,
        args:[0.2],
        velocity:[0,0,-300],
        onCollide: (e) => {
            if(e.body?.userData?.id === "help-panel"){
                handleStats();
            }else if(e.body?.userData?.id === "enemy-panel"){
                console.log("hit enempy-panel") 
            }
}
}));

    return(
        <mesh ref={singleBulletRef}> 
            <sphereGeometry args={[0.3,15,15]}/>
            <meshStandardMaterial color="white"/>
        </mesh>

    )
}

function Bullets({bullets}) {
  return (
   <>
    {bullets.map((each)=>{
       return <SingleBullet key={each.id} position={each.position} />
    })}
   </>
  )
}

export default Bullets
