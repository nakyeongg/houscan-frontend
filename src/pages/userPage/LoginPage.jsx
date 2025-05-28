import React, { useState, useEffect } from 'react';
import * as S from './LoginPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstace from './../../apis/axiosInstance';
import { useGlobalContext } from '../../context/context';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useGlobalContext();

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        try {
            const response = await axiosInstace.post('/api/users/auth/', {
                email,
                password,
            })
            console.log('로그인 요청 성공', response);
            if (response.data.message==='로그인 성공!') {
                console.log('로그인 성공', response.data);
                console.log('토큰을 저장합니다',response.data.token.access);
                localStorage.setItem('accessToken', response.data.token.access);
                setIsLogin(true);
                navigate('/');
            } else {
                console.log('로그인 실페');
            }
        } catch(error) {
            console.log('로그인 실패', error);
            alert(error.response.data.message);
        }
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
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
                            type='password'
                            onKeyDown={handleEnter}
                        />
                    </S.ColumnWrapper>
                    <S.ColumnWrapper>
                        <S.Button disabled={disable} onClick={handleLogin}>로그인</S.Button>
                        <S.GuideWrapper>
                            <S.Guide>아직 회원이 아니신가요?</S.Guide>
                            <S.SignupButton onClick={() => navigate('/signup')}>회원가입</S.SignupButton>
                        </S.GuideWrapper>
                    </S.ColumnWrapper>
                </S.Wrapper>
            </Layout>
        </>
    )
}

export default LoginPage;
