import React from 'react'
import styled, {css} from 'styled-components'
import Icon from './Icon';
import LevelImage from '../grid/LevelImage'

interface CardProps {
    level: number;
    target: [asterix: string, obelix: string, dogmatix?: string];
    showIcon: boolean;
    active?: boolean;
}

interface StyledComponents {
    active?: boolean;
    showIcon?: boolean;
}




export const Card: React.FC<CardProps> = ({level, target, showIcon, active}) => {


    const icons = target.map((name, index) => {
        return <Icon key={index} name={name}/>
    })
    
    return (
        <CardWrapper active={active}>
            <LevelImage level={level}/>
            <InfoWrapper showIcon={showIcon}>
                <p>Level {level}</p>
                { showIcon && <IconWrapper>{icons}</IconWrapper> }
            </InfoWrapper>
        </CardWrapper>
    );
}

export default Card;

const CardWrapper = styled.div<StyledComponents>`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    // border: 1px solid red;

    & > img {
        width: 100%;
    }

    ${({active}) => 
    active &&
        css`
            background-color: ${({theme}) => theme.color.darkBlue};
            color: white;
        `
    }


`


const InfoWrapper = styled.div<StyledComponents>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    width: 100%;
    
    p {
        width: 50%;
        padding-left: .5em;
        font-size: 1.2em;

        ${({showIcon}) => 
            !showIcon &&
                css`
                text-align: center;
                `
    }

        
    }

    ${({showIcon}) => 
            !showIcon &&
                css`
                justify-content: center;
                padding-bottom: .5em;
                `
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
