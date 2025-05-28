import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppProvider from './context/context';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CookiesProvider>
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <App />
                </ThemeProvider>
            </AppProvider>
        </CookiesProvider>
    </React.StrictMode>
);
