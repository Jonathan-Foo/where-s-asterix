import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <FooterWrapper>
         <p className="copyright">Copyright © 2022 JonathanFoo</p>
            <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                <FaGithub size={15}/>
            </GitLink>
        </FooterWrapper>
    );
}

export default Footer;

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .8em;
    font-weight: 500;
    gap: .3em;
    width: 100%;
    padding-block: .5em;
    box-shadow: 0 -2px 5px hsl(0, 0%, 90%);
`

const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: 150ms ease-in-out;
    color: ${({theme}) => theme.color.mainGray};

    &:hover{
        transform: scale(1.1);
        color: ${({theme}) => theme.color.mainBlue};
    }
`