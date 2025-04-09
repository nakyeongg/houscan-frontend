import React from 'react';
import * as S from './SubscriptionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import search from '../../assets/icons/search.svg';

const SubscriptionListPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    <S.InputWrapper>
                        <S.Input
                            placeholder='검색어를 입력하세요'
                        />
                        <S.InputIcon src={search} />
                    </S.InputWrapper>
                </S.Wrapper>
                <SubscriptionList />
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionListPage;
