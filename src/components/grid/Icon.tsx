import React from 'react'
import asterix from '../../assets/icon1.png';
import obelix from '../../assets/icon2.png';
import dogmatix from '../../assets/icon3.png';
import styled from 'styled-components'


interface IconsProps {
    name: string | undefined; 
}

export const Icon: React.FC<IconsProps> = ({ name }) => {
    const src = name === 'asterix' ? asterix :
                name === 'obelix' ? obelix :
                dogmatix
    
    return (
        <img src={src} alt={name} draggable="false"/>
    );
}

export default Icon;



