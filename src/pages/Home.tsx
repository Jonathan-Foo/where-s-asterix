import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeGrid from '../components/grid/HomeGrid'
import HomeLeaderboard from '../components/leaderboard/HomeLeaderboard'
import styled from 'styled-components'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <>
        <Header/>
        <Main>
            <HomeGrid />
            <HomeLeaderboard />
        </Main>
        <Footer />
        </>
    );
}

export default Home;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 100%;
    gap: 2em;
    margin-bottom: 3em;


`