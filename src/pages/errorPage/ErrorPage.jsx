import React from 'react';
import * as S from './ErrorPage.styled';
import { Layout } from '../../layout/Layout';
import error from '../../assets/images/error.svg';

const ErrorPage = () => {
    return (
        <>
            <Layout>
                <S.Image src={error} alt="error image" />
                <S.Desc>
                    죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
                </S.Desc>
                <S.Button to='/'>메인으로</S.Button>
            </Layout>
        </>
    )
}

export default ErrorPage;
