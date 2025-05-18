import React, { useState, useEffect } from 'react';
import * as S from './MyPage.styled';
import { Header } from '../../components/main/Header';
import { Layout } from '../../layout/Layout';
import { ButtonModal } from '../../components/modal/ButtonModal';
import { InputModal } from '../../components/modal/InputModal';
import axiosInstace from '../../apis/axiosInstance';

const MyPage = () => {
    const [name, setName] = useState('사용자');
    const [email, setEmail] = useState('example@naver.com');
    const [activeModal, setActiveModal] = useState(null);
    
    const handleInfo = async () => {
        try {
            const response = await axiosInstace.get('/api/users/my');
            console.log('나의 정보 가져오기 성공',response);
        } catch(error) {
            console.log('나의 정보 가져오기 실패', error);
        }
    }

    useEffect(() => {
        handleInfo();
    }, [])

    const handleModal = () => {
        if (activeModal==='nickname') {
            return (
                <InputModal
                    title='닉네임 변경'
                    blueButtonText='저장'
                    whtieButtonText='취소'
                    blueButtonClick={() => setActiveModal(null)}
                    whiteButtonClick={() => setActiveModal(null)}
                    placeholder1='닉네임을 입력하세요'
                />
            )
        } else if (activeModal==='password') {
            return (
                <InputModal
                    title='비밀번호 변경'
                    blueButtonText='저장'
                    whtieButtonText='취소'
                    blueButtonClick={() => setActiveModal(null)}
                    whiteButtonClick={() => setActiveModal(null)}
                    placeholder1='비밀번호를 입력하세요'
                    placeholder2='비밀번호를 다시 입력하세요'
                />
            )
        } else if (activeModal==='logout') {
            return (
                <ButtonModal
                    title='로그아웃 하시겠습니까?'
                    blueButtonText='로그아웃'
                    whtieButtonText='취소'
                    blueButtonClick={() => setActiveModal(null)}
                    whiteButtonClick={() => setActiveModal(null)}
                />
            )
        } else if (activeModal==='delete') {
            return (
                <ButtonModal
                    title='정말로 탈퇴하시겠습니까?'
                    blueButtonText='확인'
                    whtieButtonText='취소'
                    blueButtonClick={() => setActiveModal('deleteConfirm')}
                    whiteButtonClick={() => setActiveModal(null)}
                    />
            )
        } else if (activeModal==='deleteConfirm') {
            return (
                <ButtonModal
                    title='탈퇴가 완료되었습니다'
                    blueButtonText='확인'
                    blueButtonClick={() => setActiveModal(null)}
                    desc='그동안 저희 사이트를 이용해주셔서 감사합니다. 앞으로 더 좋은 모습으로 만나뵐 수 있도록 노력하겠습니다.'
                />
            )
        } else {
            return null;
        }
    }

    return (
        <>
            <Header />
            <Layout>
                <S.Title>마이페이지</S.Title>
                <S.Wrapper>
                    <S.Category>닉네임</S.Category>
                    <S.ValueWrapper>
                        <S.Value>{name}</S.Value>
                        <S.EditButton onClick={() =>{setActiveModal('nickname')}}>닉네임 변경</S.EditButton>
                    </S.ValueWrapper>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Category>이메일</S.Category>
                    <S.ValueWrapper>
                        <S.Value>{email}</S.Value>
                    </S.ValueWrapper>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Category>비밀번호</S.Category>
                    <S.ValueWrapper>
                        <S.Value>**********</S.Value>
                        <S.EditButton onClick={() => {setActiveModal('password')}}>비밀번호 변경</S.EditButton>
                    </S.ValueWrapper>
                </S.Wrapper>
                <S.InformationButton>개인정보 입력 페이지로 이동</S.InformationButton>
                <S.GreyButton onClick={() =>{setActiveModal('logout')}}>로그아웃</S.GreyButton>
                <S.GreyButton onClick={() => setActiveModal('delete')}>회원탈퇴</S.GreyButton>
            </Layout>
            {handleModal()}
        </>
    )
}

export default MyPage;
