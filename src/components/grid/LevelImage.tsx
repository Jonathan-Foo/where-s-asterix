import React from 'react'
import level1 from '../../assets/page1.png'
import level2 from '../../assets/page2.png'
import level3 from '../../assets/page3.png'
import level4 from '../../assets/page4.png'
import level5 from '../../assets/page5.png'
import level6 from '../../assets/page6.png'
import styled from 'styled-components'

interface LevelImageProps {
    level: number;
    onClick?: (e?: any) => void;
}

export const LevelImage: React.FC<LevelImageProps> = ({ level, onClick }) => {

    const src = level === 1 ? level1 :
    level === 2 ? level2 :
    level === 3 ? level3 :
    level === 4 ? level4 :
    level === 5 ? level5 :
    level6

    return (
        <img src={src} alt={`Level ${level}`} onClick={onClick} draggable='false'/>
    );
}

export default LevelImage;



