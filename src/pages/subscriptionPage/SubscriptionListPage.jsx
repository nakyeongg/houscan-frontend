import React, { useEffect, useState } from 'react';
import * as S from './SubscriptionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import { ButtonModal } from '../../components/modal/ButtonModal';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { useCookies } from 'react-cookie';
import axiosInstance from '../../apis/axiosInstance';

const SubscriptionListPage = () => {
    const navigate = useNavigate();
    const { isLogin } = useGlobalContext();
    const [userId, setUserId] = useState(0);
    const [selectedRank, setSelectedRank] = useState();
    const [selectedRankText, setSelectedRankText] = useState();
    const [isAnswered, setIsAnswers] = useState(false);
    const [hasCookie, setHasCookie] = useState(true); // 쿠키의 저장 여부
    const [cookies, setCookies] = useCookies(); // 쿠키에 저장되는 내용

    console.log(isLogin, isAnswered);

    const Ranks = [
        { text: '1순위', value: 0 },
        { text: '2순위', value: 1 },
        { text: '3순위', value: 2 },
    ]

    const handleRank = (event) => {
        const value = Number(event.target.value);
        const text = Ranks.find(rank => rank.value === value).text;
        console.log('click', value, text);
        if (value === selectedRank) {
            setSelectedRank(undefined);
            setSelectedRankText(undefined);
        } else {
            setSelectedRank(value);
            setSelectedRankText(text)
        }
    }

    const getUserId = async () => {
        try {
            const response = await axiosInstance.get('/api/users/my/');
            console.log('유저 id 요청 성공', response);
            setUserId(response.data.id);
        } catch (error) {
            console.log('유저 id 가져오기 에러', error);
        }
    }

    const getPersonalInformation = async () => {
        try {
            const response = await axiosInstance.get('/api/profile/');
            console.log('개인정보 작성 여부 확인 성공', response.data);
            if (response.status === 200) {
                setIsAnswers(true);
            } else {
                setIsAnswers(false);
            }
        } catch (error) {
            console.log('개인정보 작성 여부 확인 실패', error);
            if (error.response.status === 404) {
                setIsAnswers(false);
            }
        }
    }

    // 쿠키 유효기간
    const handleExpiredDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    // 쿠키 유무 확인
    useEffect(() => {
        if (cookies[`Modal_Cookies_${userId}`]) {
            setHasCookie(true);
        } else {
            setHasCookie(false);
        }
    }, [cookies, userId])

    // 머무르기 버튼 클릭 시
    const handleStay = () => {
        const expires = handleExpiredDate(7);
        setCookies(`Modal_Cookies_${userId}`, true, { path: "/", expires });
        setHasCookie(true);
    }

    useEffect(() => {
        getUserId();
        getPersonalInformation();
    }, [])

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    {(isLogin && isAnswered) && (
                        <S.ButtonWrapper>
                            {Ranks.map((rank, index) => (
                                <label key={index}>
                                    <S.Input
                                        type='radio'
                                        name='rank'
                                        value={rank.value}
                                        onClick={handleRank}
                                        onChange={() => { }}
                                        checked={rank.value === selectedRank}
                                    />
                                    <S.Text selected={index === selectedRank}>
                                        {rank.text}
                                    </S.Text>
                                </label>
                            ))}
                        </S.ButtonWrapper>
                    )}
                    {!hasCookie && (
                        !isLogin ? (
                            <ButtonModal
                                title='로그인 후 개인정보를 입력하고 나에게 맞는 공고를 확인하세요'
                                blueButtonText='로그인하러 가기'
                                whtieButtonText='머무르기'
                                blueButtonClick={() => navigate('/login')}
                                whiteButtonClick={handleStay}
                            />
                        ) : !isAnswered ? (
                            <ButtonModal
                                title='개인정보를 입력하고 나에게 맞는 공고를 확인하세요'
                                blueButtonText='개인정보 입력하러 가기'
                                whtieButtonText='머무르기'
                                blueButtonClick={() => navigate('/information')}
                                whiteButtonClick={handleStay}
                            />
                        ) : null
                    )}
                </S.Wrapper>
                <SubscriptionList rank={selectedRankText} />
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionListPage;
