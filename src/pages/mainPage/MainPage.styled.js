import styled from "styled-components";
import { Link } from "react-router-dom";

export const More = styled(Link)`
    margin: 20px 0;
    text-align: center;
    color: #B5B7C0 !important;
    font-size: 14px;
    
    &:hover {
        cursor: pointer;
        font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
    }
`