import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`
const ContentCon = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    
    &:first-child{
        padding: 5rem 2rem;
    }
    &:last-child{
        padding: 5rem 2rem;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;

        &:nth-child(2) .ContentRClass{//?
            order: 1;//?
        }
    }
`
const ContentL = styled.div`
    img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 10px 5px 5px rgba(0,0,0,0.1);
    }
`
const ContentR = styled.div`
    padding: 2rem;
    text-align: left;
`

function Content() {
  return (
    <Container>
        <ContentCon>
            <ContentL>
                <img src="https://images.unsplash.com/photo-1635799944379-7c20f383d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
            </ContentL>
            <ContentR>
                <h2>Some title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam praesentium aliquid et deleniti, dolores perferendis! Expedita, deserunt, quisquam tempore enim officiis minima asperiores quis impedit quae harum nemo fuga magni!</p>
            </ContentR>
        </ContentCon>
        <ContentCon>
            <ContentR className='ContentRClass'>
                <h2>Some title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam praesentium aliquid et deleniti, dolores perferendis! Expedita, deserunt, quisquam tempore enim officiis minima asperiores quis impedit quae harum nemo fuga magni!</p>
            </ContentR>
            <ContentL className='ContentL'>
                <img src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            </ContentL>
        </ContentCon>
        <ContentCon>
            <ContentL>
                <img src="https://images.unsplash.com/photo-1560010537-f8655a00173f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80" alt="" />
            </ContentL>
            <ContentR>
                <h2>Some title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam praesentium aliquid et deleniti, dolores perferendis! Expedita, deserunt, quisquam tempore enim officiis minima asperiores quis impedit quae harum nemo fuga magni!</p>
            </ContentR>
        </ContentCon>
    </Container>
  )
}

export default Content