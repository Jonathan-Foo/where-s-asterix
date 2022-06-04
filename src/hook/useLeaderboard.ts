import { useState } from "react";
import firebase, {firestore} from "../firebase";
import { getDoc } from "firebase/firestore";
import { LeaderboardType } from "./levels";

export const useLeaderboard = () => {
    const [activeLvl, setActiveLvl] = useState<number>(1);
    const [boardInfo, setBoardInfo] = useState<LeaderboardType>([]);

    const fbLeaderboard = async (level: number) => {
        try {
            
            const docRef = firestore.collection('game').doc(`lvl${level}`)
            const docSnap = await getDoc(docRef);
            const {leaderboard, location} = docSnap.data()!
            return leaderboard;    
        }catch(error) {
            console.error(error)
        }
    }

    const cardClickHandler = async (level: number) => {
        setActiveLvl(level);
        const leaderboard = await fbLeaderboard(level);
        if (leaderboard === undefined) return;
        const orderedleaderboard = leaderboard.slice().sort((a: {name: string, time: number}, b: {name: string, time: number}) => a.time - b.time)
        setBoardInfo(orderedleaderboard);
    }

    const refreshBoard = async (level: number) => {
        const leaderboard = await fbLeaderboard(level);
        const orderedleaderboard = leaderboard.slice().sort((a: {name: string, time: number}, b: {name: string, time: number}) => a.time - b.time)
        setBoardInfo(orderedleaderboard);
    }

    
    


    return [
        setActiveLvl,
        cardClickHandler,
        boardInfo,
        activeLvl,
        refreshBoard,
        setBoardInfo
    ] as const
}

export default useLeaderboard;