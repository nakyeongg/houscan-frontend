import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <Wrapper>{ children }</Wrapper>
    )
}

export default Layout;

const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 100vh;
    background-color:rgb(244, 244, 244);
    overflow-y: auto;
`