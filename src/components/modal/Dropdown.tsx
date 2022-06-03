import React from 'react'
import styled, {css} from 'styled-components'
import Icon from '../grid/Icon'

interface DropdownProps {
    target: [asterix: string, obelix: string, dogmatix?: string | undefined];
    show: boolean;
    dropdownCoord: {top: string, left: string}; 
    dropdownHandler: (name: string) => Promise<void>;
}

interface StyledProps {
    show: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ target, show, dropdownCoord, dropdownHandler }) => {

    const options = target.map((name, index) => {
        return (
            <Option key={index} onClick={() => dropdownHandler(name!)}>
            <Icon name={name}/>
            <p>{name}</p>
            </Option>
        )
    })

    return (
        <DropdownWraper show={show} style={dropdownCoord}>
            {options}
        </DropdownWraper>
    );
}

export default Dropdown;


const DropdownWraper =  styled.div<StyledProps>`
    display: none;
    flex-direction: column;
    gap: .05em;
    position: absolute;
    width: 250px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 5px;
    overflow: hidden;
    color: ${({theme}) => theme.color.mainGray};
    transition: 200ms ease-in-out;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    

    ${({ show }) => 
    show &&
        css`
            display: flex;
        `
    }

    @media (max-width: 750px) {
        width: 30%;
    }

`

const Option = styled.div`
    display: flex;
    align-items: center;
    padding-block: .2em;
    padding-inline: 1em; 
    background-color: #fff;
    gap: 0.5em;
    cursor: pointer;
    img {
        width: 18%;
    }

    &:hover {
        background-color: hsl(0, 0%, 95%);
    }
`