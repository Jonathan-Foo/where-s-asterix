import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface HomeLeaderboardProps {

}

export const HomeLeaderboard: React.FC<HomeLeaderboardProps> = ({}) => {
    return (
        <AdWrapper>
            <div>
                <p>Do you have what it takes?</p>
                <p>View the leaderboards!</p>
            </div>
            <LeaderboardLink to='/leaderboard'><p>View Leaderboard</p></LeaderboardLink>
        </AdWrapper>
    );
}

export default HomeLeaderboard;

const AdWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    padding-block: 2.5em;
    gap: 35%;
    width: 76%;
    background-color: hsl(0, 0%, 90%);
    border-radius: 10px;

    & > div {
        font-weight: bold;
        font-size: 2.1em;
        color: ${({theme}) => theme.color.mainGray};

        & :last-child {
            color: ${({theme}) => theme.color.mainBlue};
        }

        @media (max-width: 750px) {
            font-size: 1.3em;
        }
    }

    @media (max-width: 750px) {
        gap: 10%;
        padding-block: 2em;
    }
`

const LeaderboardLink = styled(Link)`
    font-size: 1.4em;
    color: white;
    padding-inline: 1.5em;
    padding-block: .5em;
    background-color: ${({theme}) => theme.color.mainBlue};
    border-radius: 10px;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: ${({theme}) => theme.color.darkBlue};
    }

    @media (max-width: 750px) {
        font-size: 1em;
    }
`