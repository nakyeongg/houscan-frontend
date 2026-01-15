import React, { useEffect, useState } from 'react';
import * as S from './FindPasswordPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const FindPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(true);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post('/api/users/password-reset/', {
                email
            });
            console.log('비밀번호 찾기 이메일 전송 성공', response.data);
            alert('비밀번호 재설정 이메일이 전송되었습니다. 이메일을 확인해주세요.');
        } catch (error) {
            console.log('비밀번호 찾기 이메일 전송 실패', error);
            alert('해당 이메일로 가입된 계정이 없습니다.');
        }
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }
    
    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = email.trim() !== "" && emailRegex.test(email);
        setDisable(!isValid);
    }, [email]);

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    <S.Title>비밀번호 찾기</S.Title>
                    <S.Desc>기존에 가입하신 이메일을 입력하시면 비밀번호 변경 메일을 발송해드립니다.</S.Desc>
                    <S.Input
                        placeholder='example@naver.com' 
                        value={email}
                        onChange={handleEmail}
                        onKeyDown={handleEnter}
                    />
                    <S.Button disabled={disable} onClick={handleSubmit}>이메일 받기</S.Button>
                </S.Wrapper>
            </Layout>
        </>
    )
}

export default FindPasswordPage
