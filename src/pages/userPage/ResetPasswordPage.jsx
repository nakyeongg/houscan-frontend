import React, { useEffect, useState } from 'react';
import * as S from './ResetPasswordPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const uid = searchParams.get('uid');
    const token = searchParams.get('token');

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handlePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value)
    }

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post('/api/users/password-reset/confirm/', {
                uid,
                token,
                new_password: password,
            });
            console.log('비밀번호 재설정 성공', response.data);
            alert('비밀번호가 성공적으로 재설정되었습니다. 다시 로그인해주세요.');
            navigate('/login');
        } catch (error) {
            console.log('비밀번호 재설정 실패', error);
            alert('비밀번호는 영문, 숫자, 특수문자를 포함하며 8자 이상이어야 합니다.');
        }
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }
        
    useEffect(() => {
        setDisable(password.trim() === "" || passwordConfirm.trim() === "" || password !== passwordConfirm);
    }, [password, passwordConfirm]);

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    <S.Title>비밀번호 재설정</S.Title>
                    <S.ColumnWrapper>
                        <S.Name>비밀번호</S.Name>
                        <S.Input
                            placeholder='영문, 숫자, 특수문자를 포함하며 8자 이상이어야 합니다' 
                            value={password}
                            onChange={handlePassword}
                            onKeyDown={handleEnter}
                        />
                    </S.ColumnWrapper>
                    <S.ColumnWrapper>
                        <S.Name>비밀번호 확인</S.Name>
                        <S.Input
                            placeholder='비밀번호를 한 번 더 입력하세요' 
                            value={passwordConfirm}
                            onChange={handlePasswordConfirm}
                            onKeyDown={handleEnter}
                        />
                    </S.ColumnWrapper>
                    <S.Button disabled={disable} onClick={handleSubmit}>재설정하기</S.Button>
                </S.Wrapper>
            </Layout>
        </>
    )
}

export default ResetPasswordPage
