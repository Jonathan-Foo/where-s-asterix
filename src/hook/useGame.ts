import { useState } from "react";
import firebase, {firestore} from "../firebase";
import { getDoc } from "firebase/firestore";
import inRange from "../helper/inRange";
import useTimer from "@bradgarropy/use-timer/dist/types/useTimer";

export const useGame = () => {
    const [level, setlevel] = useState<number>();
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [time, setTime] = useState<number>();
    const [clickCoord, setclickCoord] = useState<{top: number, left: number} | null>(null)
    const [dropdownCoord, setDropdownCoord] = useState<{top: string, left: string}>({top: '0%', left: '0%'})
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [targetNumber, setTargetNumber] = useState<number>();
    const [found, setFound] = useState<string[]>([]);
    const stopWatch = useTimer();

    const starTimer = () => {
        stopWatch.start()
    }

    const clickCoordinates = (e: any) => {
        const top = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
        const left = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
        const coords = {top, left};
        return coords;
    }

    const updatedropDownCoord = (coord: {top: number, left: number}) => {
        setDropdownCoord({top: `${coord.top}%`, left: `${coord.left}%`});
    }

    const imageClickHandler = (e: any) => {
        const coord = clickCoordinates(e);
        setclickCoord(coord);
        updatedropDownCoord(coord);
        setShowDropdown(true);

    }

    const hideDropdown = () => {
        setShowDropdown(false);
    }

    const dropdownHandler = async (name: string) => {
        if (found.indexOf(name) !== -1) return;
        const location = await fbLocationData();
        const {top, left} = location[name];
        if (inRange(top, clickCoord!.top) && inRange(left, clickCoord!.left)) {
            setFound(prevFound => [...prevFound, name])
        } else {
            return 
        }
    }

    const fbLocationData = async () => {
        try {
            const docRef = firestore.collection('game').doc(`level${level}`)
            const docSnap = await getDoc(docRef);
            const {leaderboard, location} = docSnap.data()!
            return location;    
        }catch(error) {
            console.error(error)
        }
    }

    const gameOverCheck = () => {
        return found.length === targetNumber! - 1 
    }


    const foundCheck = (name: string) => {
        return found.indexOf(name) !== -1;
    } 



    
    return [
        showDropdown,
        hideDropdown,
        dropdownCoord,
        imageClickHandler,
        setTargetNumber,
        foundCheck,
        gameOver,
        setlevel,
        dropdownHandler,
    


    ] as const; 
}

export default useGame;