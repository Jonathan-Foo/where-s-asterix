import { v4 as uuidv4 } from 'uuid';



interface Level {
    level: number;
    id: string;
    target: [asterix: string, obelix: string, dogmatix?: string];
}

type LevelInfo = Level[]

const info: LevelInfo = [
    {level: 1, id: uuidv4(), target: ['asterix', 'obelix', 'dogmatix']},
    {level: 2, id: uuidv4(), target: ['asterix', 'obelix', 'dogmatix']},
    {level: 3, id: uuidv4(), target: ['asterix', 'obelix', 'dogmatix']},
    {level: 4, id: uuidv4(), target: ['asterix', 'obelix']},
    {level: 5, id: uuidv4(), target: ['asterix', 'obelix']},
    {level: 6, id: uuidv4(), target: ['asterix', 'obelix', 'dogmatix']},
]


interface Coord {
    top: string;
    left: string;
}

interface User {
    name: string;
    time: number;
}

type Leaderboard = User[]

interface LocationLeaderboard {
    location: { asterix: Coord, obelix: Coord, dogmatix?: Coord};
    leaderboard: Leaderboard;
}

type GameInfo = {
    level1: LocationLeaderboard;
    level2: LocationLeaderboard;
    level3: LocationLeaderboard;
    level4: LocationLeaderboard;
    level5: LocationLeaderboard;
    level6: LocationLeaderboard;
}


const gameCollection: GameInfo = {
    level1: {
        location: { asterix: {top: "59%", left: '13%'}, obelix: {top: "42%", left: '30%'}, dogmatix: {top: "62%", left: '64%'}},
        leaderboard: []
    },
    level2: {
        location: { asterix: {top: "42%", left: '24%'}, obelix: {top: "56%", left: '46%'}, dogmatix: {top: "94%", left: '37%'}},
        leaderboard: []
    },
    level3: {
        location: { asterix: {top: "34%", left: '15%'}, obelix: {top: "46%", left: '31%'}, dogmatix: {top: "89%", left: '61%'}},
        leaderboard: []
    },
    level4: {
        location: { asterix: {top: "82%", left: '62%'}, obelix: {top: "64%", left: '86%'}},
        leaderboard: []
    },
    level5: {
        location: { asterix: {top: "58%", left: '56%'}, obelix: {top: "4%", left: '45%'}},
        leaderboard: []
    },
    level6: {   
        location: { asterix: {top: "66%", left: '79%'}, obelix: {top: "24%", left: '16%'}, dogmatix: {top: "29%", left: '14%'}},
        leaderboard: []
    }
}

export {type Level, type LevelInfo, info}