import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../../assets/icons/close.svg';
import file from '../../assets/icons/file.svg';
import user from '../../assets/icons/user.svg';
import userAdd from '../../assets/icons/userAdd.svg';
import { Link } from 'react-router-dom';

export const Sidebar = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Wrapper>
            <Close src={close} onClick={onClose}/>
            <Container>
                <Link to='/subscription'>
                    <Category>
                        <Icon src={file} />
                        <Name>청약 공고</Name>
                    </Category>                
                </Link>
                {!isLogin ? (
                    <>
                        <Link to='/login'>
                            <Category>
                                <Icon src={user} />
                                <Name>로그인</Name>
                            </Category>
                        </Link>
                        <Link to='/signup'>
                            <Category>
                                <Icon src={userAdd} />
                                <Name>회원가입</Name>
                            </Category>
                        </Link>               
                    </>
                ):( 
                    <>
                        <Category>
                            <Icon src={user} />
                            <Name>개인 정보 입력</Name>
                        </Category>
                        <Category>
                            <Icon src={user} />
                            <Name>마이페이지</Name>
                        </Category>  
                    </>
                )}
            </Container>
        </Wrapper>    
    )
}

const Wrapper = styled.div`
    width: 350px;
    height: 100vh;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    padding: 0 30px;
    display: flex;
    align-items: end;
    flex-direction: column;
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
`

const Close = styled.img`
    margin-top: 40px;
    width: 30px;
    height: 30px;

    &:hover {
        cursor: pointer;
    }
`

const Container = styled.div`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`

const Category = styled.div`
    padding: 12px 20px;
    gap: 20px;
    display: flex;
    align-items: center;
    border-radius: 8px;

    &:hover {
        background-color: #F1F8FF;
        cursor: pointer;
    }
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
`

const Name = styled.p`
    font-size: 15px;
`