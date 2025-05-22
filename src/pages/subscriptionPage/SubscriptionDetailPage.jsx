import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './SubscriptionDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { subscriptionDetailData } from '../../constant/subscriptionDetailData';
import { RegionButton } from '../../components/subscription/RegionButton';
import { HouseList } from '../../components/subscription/HouseList';
import axiosInstace from '../../apis/axiosInstance';

const SubscriptionDetailPage = () => {
    const {id} = useParams();
    const [subscription, setSubscription] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const scheduleLabel = {
        announcement_date: '모집공고',
        online_application_period: '인터넷 신청접수',
        document_submission_period: '서류제출',
        inspection_period: '입주자격 검증',
        winner_announcement: '당첨자 발표',
        payment_period: '계약금 납부 기간',
        contract_period: '계약 기간',
        move_in_period: '입주 기간',
    }

    const handleDetail = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstace.get(`/api/announcements/${id}`);
            console.log('공고 디테일 가져오기 성공', response.data);
            setSubscription(response.data);
            setIsLoading(false);
        } catch(error) {
            console.log('공고 디테일 가져오기 에러', error);
        }
    }

    useEffect(() => {
        handleDetail();
    }, [])

    return (
        <>
            <Header />
            <Layout>
                {isLoading || !subscription ? (
                    <p>정보 가져오는 중입니다</p>
                ) : (
                    <>
                        <S.Wrapper>
                            <S.Title>{subscription.file_name}</S.Title>
                            <S.CategoryWrapper>
                                <S.Category>모집일정</S.Category>
                                {Object.entries(subscription.schedule).map(([key, value]) => {
                                    if (!value || (typeof value === 'object' && !value.start && !value.end)) return null;
                                    const label = scheduleLabel[key] || key;
                                    const displayValue =
                                        typeof value === 'string'
                                            ? value
                                            : `${value.start ?? ''} ~ ${value.end ?? ''}`.trim();

                                        return (
                                        <p key={key}>
                                            {label}: {displayValue}
                                        </p>
                                    );
                                })}
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <S.Category>신청자격</S.Category>
                                {subscription.priority_score.priority_criteria.map((priority, index) => (
                                    <div>
                                        <S.MiniCategory>{priority.priority}</S.MiniCategory>
                                        {priority.criteria.map((criterion, index) => (
                                            <p>• {criterion}</p>
                                        ))}
                                    </div>
                                ))}
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <S.Category>가점사항</S.Category>
                                {subscription.priority_score.score_items.map((items, index) => (
                                    <div key={index}>
                                        <S.MiniCategory>{items.priority}</S.MiniCategory>
                                        {items.items.map((item, index) => (
                                            <S.RowWrapper key={index}>
                                                <p>• {item.item}</p>
                                                <S.Score>{item.score}점</S.Score>
                                            </S.RowWrapper>
                                        ))}
                                    </div>
                                ))}
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <S.Category>거주기간</S.Category>
                                <p>{subscription.residence_period}</p>
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <S.Category>유의사항</S.Category>
                                {subscription.precautions.map((precaution, index) => (
                                    <p key={index}>• {precaution}</p>
                                ))}
                                <p></p>
                            </S.CategoryWrapper>
                            <S.CategoryWrapper>
                                <p>본 정보는 AI를 활용하여 요약되었으며, 정확성이 보장되지 않을 수 있으므로 참고용으로만 사용하기시 바랍니다. 더 자세한 정보는 아래의 첨부파일을 참고하세요.</p>
                                <S.PdfLink to={`${subscriptionDetailData.url}`}>공고 자세히 보기기</S.PdfLink>
                            </S.CategoryWrapper>
                        </S.Wrapper>
                        <RegionButton />
                        <HouseList />
                    </>
                )}
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionDetailPage;
