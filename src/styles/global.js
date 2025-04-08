import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,
small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,
aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,
nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 140%;
    letter-spacing: -2.5%;
    font-family: ${({ theme }) =>
    theme.fonts.default["font-family"]};
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,
nav,section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

button {
    background: inherit; 
    border:none; 
    border-radius:0;
    padding:0; 
    cursor:pointer;
    font-family: var(--mainfont);
    line-height: 140%;
}

a {
    color: inherit;
    text-decoration: none;
    outline: none;
}

a:visited {
    text-decoration: none;
    color: inherit;
}

input {
    -webkit-appearance: none; /* Safari and Chrome */
        -moz-appearance: none; /* Firefox */
            appearance: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
}

input:focus {
    outline: none;
}

@font-face {
    font-family: "SUIT-THIN";
    src: url("/fonts/SUIT-THIN.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-LIGHT";
    src: url("/fonts/SUIT-LIGHT.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-REGULAR";
    src: url("/fonts/SUIT-REGULAR.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-MEDIUM";
    src: url("/fonts/SUIT-MEDIUM.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-SEMIBOLD";
    src: url("/fonts/SUIT-SEMIBOLD.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-BOLD";
    src: url("/fonts/SUIT-BOLD.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-EXTRABOLD";
    src: url("/fonts/SUIT-EXTRABOLD.TTF") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "SUIT-HEAVY";
    src: url("/fonts/SUIT-HEAVY.TTF") format("opentype");
    font-style: normal;
}
`;

export default GlobalStyle;