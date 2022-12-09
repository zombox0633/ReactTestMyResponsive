//การสร้างใช้คำสั่ง rfce จะทำการสร้างฟอร์ม function ให้

import React,{useState} from 'react'
import { FiCode,FiX,FiMenu} from "react-icons/fi";
import styled from 'styled-components';

const HEader = styled.div`
    height: 80px;
    background-color: #333;
    @media screen and (max-width: 480px) {
        padding: 0 2rem;
    }
`
const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`
const HeaderCon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`
const LogoContainer = styled.div`
    a{
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 2rem;
    }
`
const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    
    li{
        padding-left: 2rem;
    }
    li a{
        text-decoration: none;
        color: #fff;
    }

    @media screen and (max-width: 480px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        top: 64px;
        left: -110%;//1
        padding-left: 0;
        background-color: #111;
        opacity: 0;//1
        transition: 0.5s ease;//1
        z-index: 999;
        
        li{
            padding-right: 0;
        }
        &.Active{//การสร้าง class
            align-items: center;
            left: 0;//2
            opacity: 1;//2
            transition: 0.5s ease;//2
        }
    }
`
const MenuLink = styled.li`
    @media screen and (max-width: 480px){
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        padding: 10px 0;
    }
`
const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 480px) {
        display: block;
        color: #fff;
        font-size: 2rem;
    }
`

function Header() {
    const [click, setClick] = useState(false)
    
    const handleClick = (() => setClick(!click)) //click = useState(false) / เมื่อ handleClick ทำงาน !click = useState(true)
    console.log(click);

    const closeMobileMenu = (() => setClick(false))

  return (
    <HEader>
        <Container>
            <HeaderCon>
                <LogoContainer>
                    <a href="*">ReDev <FiCode/></a>
                </LogoContainer>
                <Menu className={click? 'Active':''}>
                    <MenuLink onClick={closeMobileMenu}>
                        <a href="*">About</a>
                    </MenuLink>
                    <MenuLink onClick={closeMobileMenu}>
                        <a href="*">Contact</a>
                    </MenuLink>
                    <MenuLink onClick={closeMobileMenu}>
                        <a href="*">Blog</a>
                    </MenuLink>
                </Menu>
                <MobileMenu onClick={handleClick}>
                    {click ?( //ถ้า click มีค่าเป็น true แสดง <FiX/>
                        <FiX/>
                    ):( //click มีค่าเป็น false แสดง <FiMenu/>
                        <FiMenu/>
                    )}
                </MobileMenu>
            </HeaderCon>
        </Container>
    </HEader>
  )
}

export default Header