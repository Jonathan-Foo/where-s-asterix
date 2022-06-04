import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { info } from '../hook/levels'
import LeaderboardGrid from '../components/grid/LeaderboardGrid'
import LevelLeaderBoard from '../components/leaderboard/LevelLeaderboard'
import { Link } from 'react-router-dom';
import useLeaderboard from '../hook/useLeaderboard'
import {useLocation} from 'react-router-dom';


interface LeaderboardProps {
    
}

export const Leaderboard: React.FC<LeaderboardProps> = ({  }) => {
    const [setActiveLvl, cardClickHandler, boardInfo, activeLvl, refreshBoard, setBoardInfo] = useLeaderboard(); 
    const location = useLocation().state as {level: number | null}
    const prevLevel = location === null ? 1 : location.level 
    

    useEffect(() => {
        cardClickHandler(activeLvl);
    }, [activeLvl]);


    useEffect(() => {
        cardClickHandler(prevLevel!);
        console.log('triggered')
    }, []);


    return (
        <>
        <Header/>
        <Content>
            <Title>
                <p>Global Leaderboards</p>
                <div>
                    <HomeLink to='/'><p>Home</p></HomeLink>
                    <Link to='/game' state={info[activeLvl! - 1]}><p>Play</p></Link>
                </div>
            </Title>
            <LeaderboardGrid cardClickHandler={cardClickHandler} activeLvl={activeLvl}/>
            <LevelLeaderBoard leaderboard={boardInfo}/>
        </Content>
        <Footer />
        </>
    );
}

export default Leaderboard;


const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin-bottom: 3em;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: 3em;
    color: ${({theme}) => theme.color.mainGray};

    & > p {
        font-weight: 500;
    }

    & > div {
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2em;

        a {
            font-size: .5em;
            appearance: none;
            padding-inline: 1.2em;
            padding-block: .5em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        & > :last-child {
            background-color: ${({theme}) => theme.color.mainBlue};
            color: white;

            &:hover {
                background-color: ${({theme}) => theme.color.darkBlue};
            }

        }
    }

    @media (max-width:750px) {
        font-size: 1.5em;
        width: 90%;
    }

`

const HomeLink = styled(Link)`
    &:hover {
        color: hsl(0, 0%, 45%);
    }
`

