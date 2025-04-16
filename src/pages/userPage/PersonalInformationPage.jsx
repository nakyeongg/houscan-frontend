import React, { useState, useEffect } from 'react';
import * as S from './PersonalInformationPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import { personalInformationData } from './../../constant/personalInformationData';
import { InformationInput } from '../../components/personalInformation/InformationInput';
import { InformationRadio } from '../../components/personalInformation/InformationRadio';

const PersonalInformationPage = () => {
    const [disable, setDisable] = useState(true);
    const [answers, setAnswers] = useState(Array(personalInformationData.length).fill(null));

    
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

    useEffect(() => {
        const allAnswered = answers.every(answer => answer !== null && answer !== undefined);
        setDisable(!allAnswered);
    }, [answers]);

    return (
        <>
            <Header />
            <Layout>
                <S.Title>개인 정보 입력</S.Title>
                <S.Wrapper>
                    {personalInformationData.map((data, index) => (
                        <S.QuestionWrapper id={index}>
                            <S.Question>{data.question}</S.Question>
                            {
                                data.type === 'input' 
                                ? <InformationInput placeholder={data.placeholder} onChange={(event)=> handleInputChange(index, event)} /> 
                                : <InformationRadio options={data.options} onChange={(event) => handleRadioChange(index, event)} />
                            }
                        </S.QuestionWrapper>
                    ))}
                </S.Wrapper>
                <S.Button disabled={disable}>저장</S.Button>
            </Layout>
        </>
    )
}

export default PersonalInformationPage;
