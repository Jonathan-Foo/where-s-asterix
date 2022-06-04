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

type LeaderboardType = User[]

export {type Level, type LevelInfo, info, type LeaderboardType}