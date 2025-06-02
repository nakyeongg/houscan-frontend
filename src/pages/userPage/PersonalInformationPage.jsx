import React, { useState, useEffect } from 'react';
import * as S from './PersonalInformationPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { personalInformationData } from './../../constant/personalInformationData';
import { InformationInput } from '../../components/personalInformation/InformationInput';
import { InformationRadio } from '../../components/personalInformation/InformationRadio';
import loading from '../../assets/images/loading.gif';
import { useNavigate } from 'react-router-dom';
import axiosInstace from './../../apis/axiosInstance';

const PersonalInformationPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswered, setIsAnswered] = useState(); // 처음 작성하는 것인지 수정하는 것인지 파악하기 위함
    const [disable, setDisable] = useState(true);
    const [answers, setAnswers] = useState(Array(personalInformationData.length).fill(null)); // 현재 체크한 답변
    const navigate = useNavigate();

    const handleInputChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value.trim() !== '' ? value : null;
        setAnswers(updatedAnswers);
    };

    const handleRadioChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const mapAnswers = (answers) => {
        return {
            "birth_date": answers[0],
            "gender": answers[1]===0 ? "M" : "F",
            "university": answers[2]===0,
            "graduate": answers[3]===0,
            "employed": answers[4]===0,
            "job_seeker": answers[5]===0,
            "welfare_receipient": answers[6]===0,
            "parents_own_house": answers[7]===0,
            "disability_in_family": answers[8]===0,
            "subscription_account": Number(answers[9]),
            "total_assets": Number(answers[10]),
            "car_value": Number(answers[11]),
            "income_range": answers[12]===0 ? "100% 이하" : "50% 이하",
            "is_eligible": null,
            "priority_info": null,
        }
    }

    const mapFetchAnswers = (data) => {
        return [
            data.birth_date,
            data.gender==="M" ? 0 : 1,
            data.university ? 0 : 1,
            data.graduate ? 0 : 1,
            data.employed ? 0 : 1,
            data.job_seeker ? 0 : 1,
            data.welfare_receipient ? 0 : 1,
            data.parents_own_house ? 0 : 1,
            data.disability_in_family ? 0 : 1,
            data.subscription_account,
            data.total_assets,
            data.car_value,
            data.income_range==="100% 이하" ? 0 : 1
        ]
    }

    const getPersonalInformation = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstace.get('/api/profile/');
            console.log('개인정보 가져오기 성공', response.data);
            if (response.status===200) {
                setIsAnswered(true);
                setAnswers(mapFetchAnswers(response.data));
                console.log('isAnswered', isAnswered);
            }
            setIsLoading(false);
        } catch(error) {
            console.log('개인정보 가져오기 에러', error);
            if (error.response.status===404) {
                setIsAnswered(false);
                console.log('isAnswered', isAnswered);
                setIsLoading(false);
            }
            setIsLoading(false);
        }
    }

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const data = mapAnswers(answers);
            console.log('data?????', data);
            const response = await axiosInstace.post('api/profile/create/', data);
            console.log('개인정보 입력 요청 성공', response);
            alert('개인 정보가 저장되었습니다.');
            setIsLoading(false);
            navigate('/');
        } catch(error) {
            console.log('개인정보 입력 요청 실패', error);
            setIsLoading(false);
        }
    }

    const handleEdit = async () => {
        try {
            setIsLoading(true);
            const data = mapAnswers(answers);
            console.log('data', data);
            const response = await axiosInstace.patch('/api/profile/', data);
            console.log('개인정보 수정 성공', response);
            alert('개인 정보가 수정되었습니다.');
            setIsLoading(false);
            navigate('/');
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const allAnswered = answers.every(answer => answer !== null && answer !== undefined);
        setDisable(!allAnswered);
    }, [answers]);

    useEffect(() => {
        getPersonalInformation();
    }, [])

    return (
        <>
            <Header />
            <Layout>
                <S.Title>개인 정보 입력</S.Title>
                {isLoading ? (
                    <img src={loading} alt="loading icon" />
                ) : (
                    <>
                        <S.Wrapper>
                        {personalInformationData.map((data, index) => (
                            <S.QuestionWrapper key={index}>
                                <S.Question>{data.question}</S.Question>
                                {
                                    data.type === 'input' 
                                    ? <InformationInput 
                                        placeholder={data.placeholder} 
                                        onChange={(event)=> handleInputChange(index, event)} 
                                        value={answers[index]}
                                    /> 
                                    : <InformationRadio 
                                        options={data.options} 
                                        onChange={(event) => handleRadioChange(index, event)} 
                                        value={answers[index]}
                                    />
                                }
                            </S.QuestionWrapper>
                        ))}
                        </S.Wrapper>
                        <S.Button 
                            disabled={disable} 
                            onClick={isAnswered ? handleEdit : handleSubmit}
                        >
                            저장
                        </S.Button>
                    </>
                )}
            </Layout>
        </>
    )
}

export default PersonalInformationPage;
