import React, { useState, useEffect } from 'react';
import * as S from './LoginPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        setDisable(email.trim() === "" || password.trim() === "");
    }, [email, password]);

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    <S.Title>로그인</S.Title>
                    <S.ColumnWrapper>
                        <S.Name>이메일</S.Name>
                        <S.Input 
                            placeholder='example@naver.com' 
                            value={email}
                            onChange={handleEmail}
                        />
                    </S.ColumnWrapper>
                    <S.ColumnWrapper>
                        <S.Name>비밀번호</S.Name>
                        <S.Input 
                            placeholder='비밀번호를 입력하세요' 
                            value={password}
                            onChange={handlePassword}
                        />
                    </S.ColumnWrapper>
                    <S.ColumnWrapper>
                        <S.Button disabled={disable} >로그인</S.Button>
                        <S.GuideWrapper>
                            <S.Guide>아직 회원이 아니신가요?</S.Guide>
                            <Link to='/'>
                                <S.SignupButton>회원가입</S.SignupButton>
                            </Link>
                        </S.GuideWrapper>
                    </S.ColumnWrapper>
                </S.Wrapper>
            </Layout>
        </>
    )
}

export default LoginPage;
