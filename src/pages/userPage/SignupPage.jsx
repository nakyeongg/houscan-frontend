import React, { useState, useEffect } from 'react';
import * as S from './SignupPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstace from '../../apis/axiosInstance';

const SignupPage = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleNickname = (event) => {
        setNickname(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handlePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value)
    }

    useEffect(() => {
        setDisable(nickname.trim() === "" || email.trim() === "" || password.trim() === "" || passwordConfirm.trim() === "");
    }, [nickname, email, password, passwordConfirm]);

    const handleSignup = async () => {
        try {
            const response = await axiosInstace.post('/api/users/signup/', {
                'email': email,
                'nickname': nickname,
                'password': password,
                'password2':passwordConfirm,
            },)
            console.log('회원가입 성공', response);
            navigate('/login');
        } catch(error) {
            console.log('회원가입 실패', error);
        }
    }

    return (
            <>
                <Header />
                <Layout>
                    <S.Wrapper>
                        <S.Title>회원가입</S.Title>
                        <S.ColumnWrapper>
                            <S.Name>닉네임</S.Name>
                            <S.Input 
                                placeholder='닉네임을 입력하세요' 
                                value={nickname}
                                onChange={handleNickname}
                            />
                        </S.ColumnWrapper>
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
                                placeholder='영문, 숫자, 특수문자를 포함하며 8자 이상이어야 합니다' 
                                value={password}
                                onChange={handlePassword}
                                type='password'
                            />
                        </S.ColumnWrapper>
                        <S.ColumnWrapper>
                            <S.Name>비밀번호 확인</S.Name>
                            <S.Input 
                                placeholder='비밀번호를 한 번 더 입력하세요' 
                                value={passwordConfirm}
                                onChange={handlePasswordConfirm}
                                type='password'
                            />
                        </S.ColumnWrapper>
                        <S.ColumnWrapper>
                            <S.Button disabled={disable} onClick={handleSignup}>회원가입</S.Button>
                            <S.GuideWrapper>
                                <S.Guide>이미 계정이 있으신가요?</S.Guide>
                                <Link to='/login'>
                                    <S.LoginButton>로그인</S.LoginButton>
                                </Link>
                            </S.GuideWrapper>
                        </S.ColumnWrapper>
                    </S.Wrapper>
                </Layout>
            </>
    )
}

export default SignupPage;
