import React from 'react';
import * as S from './MainPage.styled'
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import Slider from './../../components/main/Slider';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <Slider />
                <SubscriptionList />
                <Link to='/'>
                    <S.More>더보기</S.More>
                </Link>
            </Layout>
            <Footer />
        </>
    )
}

export default MainPage
