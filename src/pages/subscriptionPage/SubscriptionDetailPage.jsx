import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SubscriptionDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { subscriptionDetailData } from '../../constant/subscriptionDetailData';
import { RegionButton } from '../../components/subscription/RegionButton';
import { HouseList } from '../../components/subscription/HouseList';

const SubscriptionDetailPage = () => {

    return (
        <>
            <Header />
            <Layout>
                <S.Wrapper>
                    <S.Title>{subscriptionDetailData.title}</S.Title>
                    <S.CategoryWrapper>
                        <S.Category>신청자격</S.Category>
                        <p>{subscriptionDetailData.condition}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <S.Category>거주기간</S.Category>
                        <p>{subscriptionDetailData.duration}</p>
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                        <p>본 정보는 AI를 활용하여 요약되었으며, 정확성이 보장되지 않을 수 있으므로 참고용으로만 사용하기시 바랍니다. 더 자세한 정보는 아래의 첨부파일을 참고하세요.</p>
                        <S.PdfLink to={`${subscriptionDetailData.url}`}>공고 자세히 보기기</S.PdfLink>
                    </S.CategoryWrapper>
                </S.Wrapper>
                <RegionButton />
                <HouseList />
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionDetailPage;
