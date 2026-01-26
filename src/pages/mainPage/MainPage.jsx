import React from 'react';
import * as S from './MainPage.styled'
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import Slider from './../../components/main/Slider';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import { MainKakaoMap } from '../../components/main/MainKakaoMap';

const MainPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <Slider />
                <SubscriptionList display='none' limit={5} />
                <S.More to='/subscription'>더보기</S.More>
                <MainKakaoMap />
            </Layout>
            <Footer />
        </>
    )
}

export default MainPage
