import React, { useState } from 'react';
import * as S from './SubscriptionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import { ButtonModal } from '../../components/user/ButtonModal';

const SubscriptionListPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isInfoEntered, setIsInfoEntered] = useState(false);

    const Ranks = [
        {text: '1순위', value: 0},
        {text: '2순위', value: 1},
    ]

    const [selectedRank, setSelectedRank] = useState();

    const handleRank = (event) => {
        const value = Number(event.target.value);
        console.log('click',value)
        if (value===selectedRank) {
            setSelectedRank(undefined);
        } else {
            setSelectedRank(value);
        }
    }

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    { (isLogin && isInfoEntered) ? (
                        <S.ButtonWrapper>
                            {Ranks.map((rank, index) => (
                                <label key={index}>
                                    <S.Input
                                        type='radio'
                                        name='rank'
                                        value={rank.value}
                                        onClick={handleRank}
                                        onChange={()=>{}}
                                        checked={rank.value===selectedRank}
                                    />
                                    <S.Text selected={index===selectedRank}>
                                        {rank.text}
                                    </S.Text>
                                </label>
                            ))}
                        </S.ButtonWrapper>
                    ) : !isLogin ? (
                        <ButtonModal
                            title='로그인 후 개인정보를 입력하고 나에게 맞는 공고를 확인하세요'
                            blueButtonText='로그인하러 가기'
                            whtieButtonText='머무르기'
                            blueButtonClick={() => {window.location.href='/login';}}
                        />
                    ) : (
                        <ButtonModal
                            title='개인정보를 입력하고 나에게 맞는 공고를 확인하세요'
                            blueButtonText='개인정보 입력하러 가기'
                            whtieButtonText='머무르기'
                            blueButtonClick={() => {window.location.href='/information';}}
                        />
                    )}
                </S.Wrapper>
                <SubscriptionList />
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionListPage;
