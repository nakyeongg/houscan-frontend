import React, { useEffect } from 'react';
import * as S from './ChatbotPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import chatbot from '../../assets/images/chatbot.png';
import send from '../../assets/icons/send.svg';
import aiAxiosInstace from '../../apis/aiAxiosInstance';

const ChatbotPage = () => {
    // const handlePdf = async () => {
    //     try {
    //         const response = await aiAxiosInstace.get('/api/available-pdfs');
    //         console.log(response);
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    const handleChat = async () => {
        try {
            const response = await aiAxiosInstace.post('/api/chat', {
                pdf_name: "1_[공고문] 2024년 2차 청년 매입임대주택 입주자모집공고문 (3).pdf",
                query: "나 대학생인데 이 공고 지원 가능해?"
            });
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // handlePdf();
        handleChat();
    }, [])
    
    return (
        <>
            <Header/>
            <Layout>
                <S.Title>[청년형] 특화형 매입임대주택(은평구) 입주자 모집 공고(운영기관 : 협동조합 큰바위얼굴)</S.Title>
                <S.ChatWrapper>
                    <S.BotWrapper>
                        <S.BotImage src={chatbot} />
                        <S.BotChat>해당하는 청약 공고에 대해서 궁금한 점이 있다면 물어보세요!해당하는 청약 공고에 대해서 궁금한 점이 있다면 물어보세요!</S.BotChat>
                    </S.BotWrapper>
                    <S.UserWrapper>
                        <S.UserChat>내가 이 공고에 해당되지 않는 이유가 뭐야?</S.UserChat>
                    </S.UserWrapper>
                    <S.BotWrapper>
                        <S.BotImage src={chatbot} />
                        <S.BotChat>해당하는 청약 공고에 대해서 궁금한 점이 있다면 물어보세요!</S.BotChat>
                    </S.BotWrapper>
                    <S.UserWrapper>
                        <S.UserChat>내가 이 공고에 해당되지 않는 이유가 뭐야?내가 이 공고에 해당되지 않는 이유가 뭐야?</S.UserChat>
                    </S.UserWrapper>
                </S.ChatWrapper>
                <S.InputWrapper>
                    <S.Input placeholder='무엇이든 물어보세요'/>
                    <S.InputButton onClick={() => {}}>
                        <S.InputImg src={send} />
                    </S.InputButton>
                </S.InputWrapper>
            </Layout>
        </>
    )
}

export default ChatbotPage;
