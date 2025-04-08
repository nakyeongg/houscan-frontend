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
    padding: 0 40px;
    min-height: 100%;
    overflow-y: auto;
    margin-top: 106px;
    display: flex;
    flex-direction: column;
    align-items: center;
`