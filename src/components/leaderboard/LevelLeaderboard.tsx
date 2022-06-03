import React from 'react'
import styled from 'styled-components'

interface Player {
    name: string;
    time: number;
}

type LeaderBoard = Player[] 


interface LevelLeaderboardProps {
    leaderboard: LeaderBoard;
}

export const LevelLeaderboard: React.FC<LevelLeaderboardProps> = ({ leaderboard }) => {
    
    const results = leaderboard.map((player, index) => {
        return (
              <PlayerInfo key={index}>
                  <p>{player.name}</p>
                  <p>{player.time}</p>
              </PlayerInfo>  
        )
    })
    
    return (
        <LeadeboardWrapper>
            <TableHeader>
                <p>Name</p>
                <p>Time(seconds)</p>
            </TableHeader>
            {results}
        </LeadeboardWrapper>
    );
}

export default LevelLeaderboard;

const LeadeboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .05em;
    background-color: hsl(0, 0%, 90%);
    width: 80%;
    border-radius: 5px;
    overflow: hidden;
    color: hsl(0, 0%, 30%);
    outline: 1px solid hsl(0, 0%, 90%);
    table-layout: fixed;
    

    @media (max-width:750px) {   
        width: 90%;
    }
`

const TableHeader = styled.div`
    display: flex;
    background-color: hsl(0, 0%, 95%);
    padding-block: .5em;
    padding-inline: 1em;
    color: hsl(0, 0%, 15%);
    text-align: left; 

    & > :first-child {
        width: 51%;

        @media (max-width:750px) {   
            width: 54%;
        }
    }
`
const PlayerInfo = styled.div`
    display: flex;
    width: 100%;
    background-color: #FFF;
    padding-block: .5em;
    padding-inline: 1em;

    
    & > :first-child {
        width: 50%;

    }
    

`