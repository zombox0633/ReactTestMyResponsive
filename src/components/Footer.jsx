import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #333;
    color: #fff;
`

function Footer() {
  return (
    <FooterDiv>
        <p>Copyright 2021. All Rights Reserved.</p>
    </FooterDiv>
  )
}

export default Footer