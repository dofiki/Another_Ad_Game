import {create} from 'zustand';

const usePlayerStore = create((set)=> ({
    playerPosition:[0, 1, 20],
    setPlayerPosition: (position)=> set({playerPosition:position}),

    helpPanelStats:12,
    setHelpPanelStats: (newStats)=> set({helpPanelStats:newStats}),

    totalScore:0,
    setTotalScore: (newScore)=> set({totalScore:newScore})
}))

export default usePlayerStore;

