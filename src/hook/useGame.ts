import { useState } from "react";
import firebase, {firestore} from "../firebase";
import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import inRange from "../helper/inRange";
import useTimer from "@bradgarropy/use-timer"
import { useNavigate } from "react-router";


export const useGame = () => {
    const [level, setlevel] = useState<number>();
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [time, setTime] = useState<number>();
    const [clickCoord, setclickCoord] = useState<{top: number, left: number} | null>(null)
    const [dropdownCoord, setDropdownCoord] = useState<{top: string, left: string}>({top: '0%', left: '0%'})
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [targetNumber, setTargetNumber] = useState<number>();
    const [found, setFound] = useState<string[]>([]);
    const navigate = useNavigate();
  

    const stopWatch = useTimer()

    const startTimer = () => {
        stopWatch.start();
    }
    
    const stopTimer = () => {
        stopWatch.stop();
        
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
            setShowDropdown(false)
        } else {
            setShowDropdown(false) 
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
        if (found.length !== targetNumber!) return;
        stopTimer();
        setTime(stopWatch.elapsedTime / 1000);
        setGameOver(true);
    }


    const foundCheck = (name: string) => {
        return found.indexOf(name) !== -1;
    } 
    

    const submitScore = async (name: string) => {
        const Filter = require('bad-words');
        const filter = new Filter();
        const filteredName = filter.clean(name);
        try {
            const docRef = firestore.collection('game').doc(`level${level}`)
            await updateDoc(docRef, {
                leaderboard: arrayUnion({name: filteredName, time})
            });
            navigate('/leaderboard', {state: { level }});
        }catch(error) {
            console.error(error)
        }
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
        startTimer,
        time,
        gameOverCheck,
        found,
        submitScore,

    ] as const; 
}

export default useGame;