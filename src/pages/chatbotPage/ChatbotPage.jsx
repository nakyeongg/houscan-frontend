import React, { useState, useEffect, useRef } from 'react';
import * as S from './ChatbotPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/main/Header';
import chatbot from '../../assets/images/chatbot.png';
import send from '../../assets/icons/send.svg';
import loading from '../../assets/images/loading.gif';
import { useLocation } from 'react-router-dom';
import aiAxiosInstace from '../../apis/aiAxiosInstance';

const ChatbotPage = () => {
    const { state } = useLocation();
    const pdf = state.pdf;
    const title = state.title;
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesRef = useRef();
    const [isBotLoading, setIsBotLoading] = useState(false);

    const handlePdf = async () => {
        try {
            const response = await aiAxiosInstace.get('/api/available-pdfs');
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    const handleChat = async () => {
        if (!question.trim()) return;
        const userQuestion = question;
        setQuestion('');
        setIsBotLoading(true);
        setMessages(prev => [...prev, {type: 'user', text: userQuestion}]);
        try {
            const response = await aiAxiosInstace.post('/api/chat', {
                pdf_name: pdf,
                query: question
            });
            const answer = response.data.data.answer;
            setIsBotLoading(false);
            setMessages(prev => [...prev, {type: 'bot', text: answer}]);
        } catch(error) {
            setIsBotLoading(false);
            setMessages(prev => [...prev, {type: 'bot', text: '오류가 발생했습니다. 다시 질문을 해주세요.'}]);
            console.log(error);
        }
    }

    const handleInput = (event) => {
        setQuestion(event.target.value);
    }

    useEffect(() => {
        messagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    useEffect(() => {
        handleChat();
    }, [])
    
    return (
        <>
            <Header/>
            <Layout>
                <S.Title>{title}</S.Title>
                <S.ChatWrapper>
                    {messages.map((message, index) => (
                        message.type === 'user' ? (
                            <S.UserWrapper>
                                <S.UserChat>{message.text}</S.UserChat>
                            </S.UserWrapper>
                        ) : (
                            <S.BotWrapper>
                                <S.BotImage src={chatbot} />
                                <S.BotChat>{message.text}</S.BotChat>
                            </S.BotWrapper>
                        )
                    ))}
                    {isBotLoading && 
                        <S.BotWrapper>
                            <S.BotImage src={chatbot} />
                            <S.BotLoading src={loading}/>
                        </S.BotWrapper>
                    }
                    <div ref={messagesRef}/>
                </S.ChatWrapper>
                <S.InputWrapper>
                    <S.Input 
                        placeholder='무엇이든 물어보세요'
                        value={question}
                        onChange={handleInput}
                    />
                    <S.InputButton onClick={handleChat}>
                        <S.InputImg src={send} />
                    </S.InputButton>
                </S.InputWrapper>
            </Layout>
        </>
    )
}

export default ChatbotPage;
