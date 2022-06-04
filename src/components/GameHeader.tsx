import React from 'react'
import Icon from './grid/Icon'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'


interface GameHeaderProps {
    target: [asterix: string, obelix: string, dogmatix?: string];
    foundCheck: (name: string) => boolean;
}

interface StyledInt {
    found: boolean;
}


export const GameHeader: React.FC<GameHeaderProps> = ({ target, foundCheck }) => {
    
    const icons = target.map((name, index) => {
        return ( 
                <HeaderIcon key={index} found={foundCheck(name!)}>
                    <Icon name={name} found={true}/>
                    <p>{name}</p>
                </HeaderIcon>
            )
    })


    return (
        <HeaderWrapper>
            <IconWrapper>{icons}</IconWrapper>
            <StyledLink to='/'>Home</StyledLink>
        </HeaderWrapper>
    );
}


export default GameHeader;

const StyledLink  = styled(Link)`
    font-size: 1.3em;
    color: white;
    padding-inline: 1.5em;
    padding-block: .5em;
    background-color: ${({theme}) => theme.color.mainBlue};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.color.darkBlue};
    }

    @media (max-width: 750px){
        font-size: 1.2em;
    }

`
const HeaderIcon = styled.div<StyledInt>`

    display: flex;
    flex-direction: column;
    width: 9%;
    align-items: center;
    
    p{
        font-weight: bold;
        
    }

    @media (max-width: 750px) {
        width: 15%;
        font-size: .7em;
    }

    ${({found}) => 
        found && 
            css`
                opacity: 0.3;
            `
    }

`


const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-block: .5em;
    padding-inline: 1em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    gap: .5em;
    color: ${({theme}) => theme.color.mainGray};
    z-index: 2;
    background: #FFF;

`

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1em;   

    
    img{
        width: 100%;
    }
`