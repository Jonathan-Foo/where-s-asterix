import React, { useEffect } from 'react'
import styled from 'styled-components'
import GameHeader from '../components/GameHeader'
import { useLocation } from 'react-router-dom' 
import { Level as levelInt, info } from '../hook/levels'
import Dropdown from '../components/modal/Dropdown'
import SubmitScore from '../components/modal/SubmitScore'
import LevelImage from '../components/grid/LevelImage'
import OutsideClickHandler from 'react-outside-click-handler';
import useGame from '../hook/useGame'


interface GameProps {
   
}

export const Game: React.FC<GameProps> = () => {
    const [ showDropdown, hideDropdown, dropdownCoord, imageClickHandler, setTargetNumber, 
            foundCheck, gameOver, setlevel, dropdownHandler, startTimer, time, gameOverCheck, 
            found, submitScore] = useGame();

    const location = useLocation().state as levelInt
    const {level, id, target} = location === null ? info[0] : location 

    useEffect(() => {
        setTargetNumber(target.length);
        setlevel(level);
        startTimer();
    }, [])

    useEffect(() => {
        gameOverCheck();
    }, [found])


    return (
        <GameWrapper>
            <GameHeader target={target} foundCheck={foundCheck}/>
            <GameArea>
                <OutsideClickHandler onOutsideClick={hideDropdown}>
                <Cover>
                    <LevelImage level={level} onClick={(e) => imageClickHandler(e)}/>
                    <Dropdown target={target} show={showDropdown} dropdownCoord={dropdownCoord} dropdownHandler={dropdownHandler}/>
                </Cover>
                </OutsideClickHandler>
            </GameArea>
            <SubmitScore time={time!} show={gameOver} submitScore={submitScore}/>

        </GameWrapper>
    );
}

export default Game;

const GameWrapper = styled.div`
    position: relative;
    min-height: 100vh;

`

const Cover = styled.div`
    position: relative;

    & > :first-child {
        width: 100%;

        @media (max-width: 750px) {
            width: 100%;
        }
    }
`

const GameArea = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    
`