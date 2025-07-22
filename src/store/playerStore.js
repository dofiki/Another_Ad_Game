import {create} from 'zustand';

const usePlayerStore = create((set)=> ({
    playerPosition:[0, 1, 20],
    setPlayerPosition: (position)=> set({playerPosition:position})
}))

export default usePlayerStore;

