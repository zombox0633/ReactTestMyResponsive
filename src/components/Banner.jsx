import React from 'react'
import styled from 'styled-components'

const BannerBg = styled.div`
    position: relative;
    height: 500px;
    background: url(https://images.unsplash.com/photo-1669647561467-891414e9b140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80) no-repeat;
    background-size: cover;
    background-position: 0 30%;
    overflow:hidden;
`
const OverLay = styled.div`
    position: absolute;//
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.85);
`
const Container = styled.div`
    position: relative;
    max-width: 960px;
    margin: 0 auto;
`
const BannerCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`
const BannerText = styled.div`
    margin: 0 2rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
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

function Banner() {
    let bannerData = {
        title:"React landing page",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga non iure perferendis repudiandae amet. Nihil, eligendi animi voluptatem, explicabo quis dolorum repudiandae eius natus dolor vel, ad blanditiis! Tenetur, totam!"

    }
  return (
    <BannerBg>
        <OverLay/>
        <Container>
            <BannerCon>
                <BannerText>
                    <h1>{bannerData.title}</h1>
                    <p>{bannerData.desc}</p>
                    <BannerBtn href="">Learn More</BannerBtn>
                </BannerText>
            </BannerCon>
        </Container>
    </BannerBg>
  )
}

export default Banner