import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/icons/hamburger.svg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    const handleClose = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [sidebarRef]);


    const handleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Wrapper ref={sidebarRef}>
            <MainLink to='/'>
                <Logo src={logo}/>
            </MainLink>
            <Hamburger src={hamburger} onClick={handleSidebar} />
            {isOpen && <Sidebar onClose={() => setIsOpen(false)}/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: #FFFFFF;
`

const MainLink = styled(Link)`
    height: 30px;
    display: flex;
`

const Logo = styled.img`
    width: 100px;
`

const Hamburger = styled.img`
    height: 30px;

    &:hover {
        cursor: pointer;
    }
`