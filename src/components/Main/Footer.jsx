import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import github from '../../assets/icons/github.svg';

export const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <Logo src={logo} />
                <GithubLink to='https://github.com/Houscan-dev'>
                    <GithubIcon src={github} />
                </GithubLink>
                <ColumnWrapper>
                    <DescWrapper>
                        <Desc>개인정보 처리방침</Desc>
                        <Desc>이용약관</Desc>
                    </DescWrapper>
                    <Copyright>©2025 Houscan. All Rights Reserved.</Copyright>
                </ColumnWrapper>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #F6F6F6;
    padding: 30px auto;
    width: 100%;
    position: absolute;
    left: 0;
`

const Content = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 40px 30px;
`

const Logo = styled.img`
    width: 80px;
    margin-bottom: 20px;
`

const GithubLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
`

const GithubIcon = styled.img`
    width: 25px;
    height: 25px;
`

const ColumnWrapper = styled.div`
    display: flex;
    font-size: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`

const DescWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const Desc = styled.p`
    color: #A3A3A3;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Copyright = styled.p`
    color: #A3A3A3;
`