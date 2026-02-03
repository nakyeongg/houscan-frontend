import React, { useEffect, useState, useRef } from 'react';
import * as S from './SubscriptionListPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { Footer } from '../../components/main/Footer';
import { SubscriptionList } from '../../components/subscription/SubscriptionList';
import { ButtonModal } from '../../components/modal/ButtonModal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { useCookies } from 'react-cookie';
import axiosInstance from '../../apis/axiosInstance';
import Down from '../../assets/icons/down.svg';
import Up from '../../assets/icons/up.svg';

const SubscriptionListPage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLogin } = useGlobalContext();
    const [userId, setUserId] = useState(0);
    const getParamRank = () => searchParams.get('rank');
    const getParamUser = () => searchParams.get('user') || '전체';
    const getParamType = () => searchParams.get('type') || '전체';
    const [selectedRank, setSelectedRank] = useState(getParamRank() !== null ? Number(getParamRank()) : undefined);
    const [selectedRankText, setSelectedRankText] = useState(
        getParamRank() !== null ? ['1순위', '2순위', '3순위'][Number(getParamRank())] : undefined
    );
    const [filterUser, setFilterUser] = useState(getParamUser());
    const [filterType, setFilterType] = useState(getParamType());
    const [isAnswered, setIsAnswers] = useState(false);
    const [hasCookie, setHasCookie] = useState(true); // 쿠키의 저장 여부
    const [cookies, setCookies] = useCookies(); // 쿠키에 저장되는 내용

    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const userOptions = ['전체', '청년', '신혼부부', '기타'];
    const typeOptions = ['전체', '안심주택', '행복주택', '임대주택', '기타'];
    const userDropdownRef = useRef(null);
    const typeDropdownRef = useRef(null);

    console.log(isLogin, isAnswered);

    const Ranks = [
        { text: '1순위', value: 0 },
        { text: '2순위', value: 1 },
        { text: '3순위', value: 2 },
    ]


    useEffect(() => {
        const rank = getParamRank();
        const user = getParamUser();
        const type = getParamType();

        // URL에 rank가 있으면 숫자와 텍스트 세팅, 없으면 초기화
        setSelectedRank(rank !== null ? Number(rank) : undefined);
        setSelectedRankText(rank !== null ? ['1순위', '2순위', '3순위'][Number(rank)] : undefined);

        // URL에 있는 user, type 값을 state에 반영
        setFilterUser(user);
        setFilterType(type);
    }, [searchParams]);

    const updateURL = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value === undefined || value === '전체' || value === null) {
            newParams.delete(key); // 기본값이면 URL에서 파라미터 제거 (깔끔함)
        } else {
            newParams.set(key, value); // 값이 있으면 URL에 기록
        }
        setSearchParams(newParams);
    };

    const handleRank = (event) => {
        const value = Number(event.target.value);
        // State를 직접 바꾸지 말고 URL만 업데이트 -> useEffect가 State를 바꿈
        if (value === selectedRank) {
            updateURL('rank', null);
        } else {
            updateURL('rank', value);
        }
    };

    const handleSelectUser = (option) => {
        updateURL('user', option); // URL 업데이트
        setIsUserOpen(false);
    };

    const handleSelectType = (option) => {
        updateURL('type', option); // URL 업데이트
        setIsTypeOpen(false);
    };

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

    const toggleUserDropdown = () => {
        setIsUserOpen(!isUserOpen);
        setIsTypeOpen(false);
    }

    const toggleTypeDropdown = () => {
        setIsTypeOpen(!isTypeOpen);
        setIsUserOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsUserOpen(false);
            }
            if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
                setIsTypeOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
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
                    <S.DropdownWrapper>
                        <S.Dropdown ref={userDropdownRef}>
                            <S.DropdownSelect onClick={toggleUserDropdown}>
                                {filterUser}
                                <S.DropdownImg src={isUserOpen ? Up : Down} alt="arrow" />
                            </S.DropdownSelect>
                            {isUserOpen && (
                                <S.DropdownOptionWrapper>
                                    {userOptions.map(option => (
                                        <S.DropdownOption key={option} onClick={() => handleSelectUser(option)}>
                                            {option}
                                        </S.DropdownOption>
                                    ))}
                                </S.DropdownOptionWrapper>
                            )}
                        </S.Dropdown>
                        <S.Dropdown ref={typeDropdownRef}>
                            <S.DropdownSelect onClick={toggleTypeDropdown}>
                                {filterType}
                                <S.DropdownImg src={isTypeOpen ? Up : Down} alt="arrow" />
                            </S.DropdownSelect>
                            {isTypeOpen && (
                                <S.DropdownOptionWrapper>
                                    {typeOptions.map(option => (
                                        <S.DropdownOption key={option} onClick={() => handleSelectType(option)}>
                                            {option}
                                        </S.DropdownOption>
                                    ))}
                                </S.DropdownOptionWrapper>
                            )}
                        </S.Dropdown>
                    </S.DropdownWrapper>
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
                <SubscriptionList
                    rank={selectedRankText}
                    filterUser={filterUser}
                    filterType={filterType}
                />
            </Layout>
            <Footer />
        </>
    )
}

export default SubscriptionListPage;
