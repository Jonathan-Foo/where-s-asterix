import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <HeaderWrapper>
            <p>Where's Asterix?</p>
            <img src={logo} alt="logo" draggable="false"/>
        </HeaderWrapper>
    );
}


export default Header;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: .5em;
    box-shadow: 0 2px 5px hsl(0, 0%, 90%);
    gap: .5em;
    color: ${({theme}) => theme.color.mainBlue};

    img {
        width: 3%;
        
        @media (max-width: 750px) {
            width: 8%;
        }
    }

    p {
        font-size: 2.5em;
        font-weight: 500;
        color: ${({theme}) => theme.color.mainGray};
    }
`
