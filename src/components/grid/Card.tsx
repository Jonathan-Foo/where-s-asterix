import React from 'react'
import styled from 'styled-components'
import level1 from '../../assets/page1.png'
import level2 from '../../assets/page2.png'
import level3 from '../../assets/page3.png'
import level4 from '../../assets/page4.png'
import level5 from '../../assets/page5.png'
import level6 from '../../assets/page6.png'
import Icon from './Icon';

interface CardProps {
    level: number;
    target: [asterix: string, obelix: string, dogmatix?: string];
}

export const Card: React.FC<CardProps> = ({level, target }) => {
    const src = level === 1 ? level1 :
                level === 2 ? level2 :
                level === 3 ? level3 :
                level === 4 ? level4 :
                level === 5 ? level5 :
                level6


    const icons = target.map((name, index) => {
        return <Icon key={index} name={name}/>
    })
    
    return (
        <CardWrapper>
            <LevelImg src={src} alt={`Level ${level}`} />
            <InfoWrapper>
                <p>Level {level}</p>
                <IconWrapper>{icons}</IconWrapper>
            </InfoWrapper>
        </CardWrapper>
    );
}

export default Card;

const CardWrapper = styled.div`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`
const LevelImg = styled.img`
    width: 100%;
`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    width: 100%;
    
    p {
        width: 50%;
        padding-left: .5em;
        font-size: 1.2em;
    }

`

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items; center;
    gap: .5em;   
    padding-right: .5em;

    img {
        width: 13%;
    }
    
`
