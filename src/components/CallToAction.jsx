import React from 'react'
import styled from 'styled-components'
import {FiCode} from 'react-icons/fi'

const CtaBg = styled.div`
    position: relative;//*
    height: 500px;
    background: url(https://images.unsplash.com/photo-1646274778020-776505566b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat;
    background-size: cover;
    background-position: center;
`
const OverLay = styled.div`
    position: absolute;//*
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
`
const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
` 
const CtaText = styled.div`
    position: relative;//*
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;//
    margin: 0 2rem;
    color: #fff;
    z-index: 10;

    h2{
        margin: 0 0 0.5rem 0;
        font-size: 2rem;
    }

`
const BannerBtn = styled.a`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    text-transform: uppercase;

    &:hover{
        border: 2px solid #fff;
        background: transparent;
        color: #fff;
    }

`

function CallToAction() {
  return (
    <CtaBg>
        <OverLay/>
        <Container>
            <CtaText>
                <h2><FiCode/></h2>
                <h2>We're react dev team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ea libero exercitationem atque iure nostrum ex numquam quasi eius maiores hic dolores ipsum incidunt molestias voluptates temporibus debitis, labore et!</p>
                <BannerBtn>get to know us</BannerBtn>
            </CtaText>
        </Container>
    </CtaBg>
  )
}

export default CallToAction