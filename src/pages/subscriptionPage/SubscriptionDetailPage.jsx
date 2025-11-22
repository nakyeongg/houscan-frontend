import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './SubscriptionDetailPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { RegionButton } from '../../components/subscription/RegionButton';
import { HouseList } from '../../components/subscription/HouseList';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const SubscriptionDetailPage = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [subscription, setSubscription] = useState();
    const [houses, setHouses] = useState([]);
    const [region, setRegion] = useState("전체");
    const navigate = useNavigate();

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
            const response = await axiosInstance.get(`/api/announcements/${id}`);
            console.log('공고 디테일 가져오기 성공', response.data);
            setTitle(response.data.title);
            setSubscription(response.data.ai_summary_json);
            setHouses(response.data.housing_info_list);
            console.log('주택 정보', response.data.housing_info_list);
        } catch(error) {
            console.log('공고 디테일 가져오기 에러', error);
        }
    }

    const handleRegionChange = (newRegion) => {
        setRegion(newRegion);
    }

    useEffect(() => {
        handleDetail();
    }, [])

    return (
        <>
            <Header />
            <Layout>
                {subscription && (
                    <>
                        <S.Wrapper>
                            {/* {subscription.analysis!==null && (
                                subscription.analysis.is_eligible ? (
                                <S.BadgeWrapper>
                                    <S.Badge>해당됨</S.Badge>
                                    <S.Badge>{subscription.analysis.priority}</S.Badge>
                                </S.BadgeWrapper>
                            ) : (
                                <S.WarningBadge>해당되지 않음</S.WarningBadge>
                            ))} */}
                            <S.Title>{title}</S.Title>
                            {subscription.application_eligibility && (
                                <S.CategoryWrapper>
                                    <S.Category>신청자격</S.Category>
                                    <p>{subscription.application_eligibility}</p>
                                    {/* {subscription.analysis!==null && !subscription.analysis.is_eligible && subscription.analysis.reasons.length && (
                                        <S.ReasonWrapper>
                                            <S.ReasonTitle>미해당 사유</S.ReasonTitle>
                                            {subscription.analysis.reasons.map((reason, index) => (
                                            <S.Reason key={index}>{reason}</S.Reason>
                                        ))}
                                        </S.ReasonWrapper>
                                    )} */}
                                </S.CategoryWrapper>
                            )}
                            {subscription.application_schedule && (
                                <S.CategoryWrapper>
                                    <S.Category>모집일정</S.Category>
                                    {Object.entries(subscription.application_schedule).map(([key, value]) => {
                                        if (!value || (typeof value === 'object' && !value.start && !value.end)) return null;
                                        const label = scheduleLabel[key] || key;
                                        const displayValue =
                                            typeof value === 'string'
                                                ? value
                                                : `${value.start ?? ''} ~ ${value.end ?? ''}`.trim();
                                            return (
                                            <S.RowWrapper key={key}>
                                                • {label}: {displayValue}
                                            </S.RowWrapper>
                                        );
                                    })}
                                </S.CategoryWrapper>
                            )}
                            {Array.isArray(subscription.priority_and_bonus.priority_criteria) && subscription.priority_and_bonus.priority_criteria.length > 0 && subscription.priority_and_bonus.priority_criteria[0].priority!==null && (
                                <S.CategoryWrapper>
                                    <S.Category>순위별 자격요건</S.Category>
                                    <S.MiniCategoryWrapper>
                                        {subscription.priority_and_bonus.priority_criteria.map((priority, index) => (
                                            <div key={index}>
                                                <S.MiniCategory>{priority.priority}</S.MiniCategory>
                                                {Array.isArray(priority.criteria) && priority.criteria.map((criterion, index) => (
                                                    <S.RowWrapper key={index}>• {criterion}</S.RowWrapper>
                                                ))}
                                            </div>
                                        ))}
                                    </S.MiniCategoryWrapper>
                                </S.CategoryWrapper>
                            )}
                            {(Array.isArray(subscription.priority_and_bonus.score_items) && subscription.priority_and_bonus.score_items.length > 0 && subscription.priority_and_bonus.score_items[0].priority!==null) && (
                                <S.CategoryWrapper>
                                <S.Category>가점사항</S.Category>
                                <S.MiniCategoryWrapper>
                                    {subscription.priority_and_bonus.score_items.map((items, index) => (
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
                                </S.MiniCategoryWrapper>
                            </S.CategoryWrapper>
                            )}
                            {subscription.residence_period && (
                                <S.CategoryWrapper>
                                    <S.Category>거주기간</S.Category>
                                    <p>{subscription.residence_period}</p>
                                </S.CategoryWrapper>
                            )}
                            {subscription.precautions && (
                                <S.CategoryWrapper>
                                    <S.Category>유의사항</S.Category>
                                    <S.RowWrapper>{subscription.precautions}</S.RowWrapper>
                                </S.CategoryWrapper>
                            )}
                            <S.CategoryWrapper>
                                <p>본 정보는 AI를 활용하여 요약되었으며, 정확성이 보장되지 않을 수 있으므로 참고용으로만 사용하기시 바랍니다. 더 자세한 정보는 아래의 첨부파일을 참고하세요.</p>
                            </S.CategoryWrapper>
                        </S.Wrapper>
                        {houses && (
                            <>
                                <RegionButton onDataChange={handleRegionChange}/>
                                <HouseList houses={houses} onDataChange={handleRegionChange} region={region}/>
                            </>
                        )}
                    </>
                )}
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionDetailPage;
