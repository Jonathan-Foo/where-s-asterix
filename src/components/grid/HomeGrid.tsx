import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import {info} from '../../hook/levels'
import { Link } from 'react-router-dom';


interface HomeGridProps {

}

export const HomeGrid: React.FC<HomeGridProps> = ({}) => {
    const cards = info.map(cardInfo => {
        return ( 
            <Link to='/game' state={cardInfo} key={cardInfo.id}>
                <Card  level={cardInfo.level} target={cardInfo.target}/>
            </Link>)
    })

    return (
        <HomeGridWrapper>
            {cards}
        </HomeGridWrapper>
    );
}

export default HomeGrid;

const HomeGridWrapper = styled.div`
    padding-block: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1em;
    row-gap: 1.5em;
    width: 80%;
    min-height: 500px;
   
    

    & > div {
        cursor: pointer;
        transition: 150ms ease-in-out;

        &:hover {
            transform: scale(1.02)
        }
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
`