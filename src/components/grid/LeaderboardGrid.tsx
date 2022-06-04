import React from 'react'
import Card from './Card'
import { info } from '../../hook/levels'
import styled from 'styled-components'

interface LeaderboardGridProps {
    cardClickHandler:  (level: number) => Promise<void>;
    activeLvl: number;
}

export const LeaderboardGrid: React.FC<LeaderboardGridProps> = ({cardClickHandler, activeLvl }) => {
    const levels = info.map(levelInfo  => {
        return (
            <CardWrapper key={levelInfo.id }onClick={() => cardClickHandler(levelInfo.level)}>
                <Card level={levelInfo.level} target={levelInfo.target} showIcon={false} active={levelInfo.level === activeLvl}/>
            </CardWrapper>
        )
    })

    return (
        <GridWrapper>
            {levels}
        </GridWrapper>
    );
}

export default LeaderboardGrid;

const GridWrapper = styled.div`
    padding-block: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: .6em;
    row-gap: 1.5em;
    width: 80%;
    

    @media (max-width: 750px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    @media (max-width:750px) {
        width: 90%;
    }
`
const CardWrapper = styled.div`
    cursor: pointer;
    transition: 150ms ease-in-out;

    &:hover {
        background-color: ${({theme}) => theme.color.mainBlue};
        color: #FFF;

    }
`