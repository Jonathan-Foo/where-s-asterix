import React from 'react'
import styled from 'styled-components'
import GameHeader from '../components/GameHeader'
import {Level} from '../hook/levels'
import level1 from '../assets/page1.png'
import level2 from '../assets/page2.png'
import level3 from '../assets/page3.png'
import level4 from '../assets/page4.png'
import level5 from '../assets/page5.png'
import level6 from '../assets/page6.png'
import { useLocation } from 'react-router-dom' 
import { Level as levelInt, info } from '../hook/levels'

interface GameProps {
   
}

export const Game: React.FC<GameProps> = () => {
    const location = useLocation().state as levelInt
    const {level, id, target} = location === null ? info[0] : location 

    const src = level === 1 ? level1 :
                level === 2 ? level2 :
                level === 3 ? level3 :
                level === 4 ? level4 :
                level === 5 ? level5 :
                level6
    
    return (
        <>
        <GameHeader target={target}/>
        <GameArea>
            <img src={src} alt={`Level ${level}`} />
        </GameArea>
        </>
    );
}

const GameArea = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
        
        @media (max-width: 750px) {
            width: 100%;
        }
    }

    @media (max-width: 750px) {

    }
`