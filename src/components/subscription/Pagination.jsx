import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ length, handlePageChange, display, forcePage }) => {
    return (
        <Wrapper display={display}>
            <StyledPagination
                pageCount={Math.ceil(length / 10)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                previousLabel={"<"}
                nextLabel={">"}
                containerClassName={"pagination"}
                activeClassName={"active"}
                forcePage={forcePage}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: ${({ display }) => display === 'none' ? 'none' : 'flex'};
`

const StyledPagination = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 30px 0 50px 0;
    width: 100%;

    li {
        border: 1px solid #F1F1F1;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        font-size: 13px;
        font-family: ${({ theme }) =>
        theme.fonts.SUITSemiBold["font-family"]};
        cursor: pointer;

        &.disabled {
            cursor: default;
            color: #CCCCCC;
        }

        &.active {
            color: #FFFFFF;
            background-color: ${({ theme }) => theme.colors.mainColor};
        }

        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`