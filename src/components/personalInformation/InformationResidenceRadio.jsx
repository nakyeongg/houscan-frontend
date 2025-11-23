import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const InformationResidenceRadio = ({ options, onChange, value }) => {

    const [selectedOption, setSelectedOption] = useState(value);

    const hendledOption = (event) => {
        setSelectedOption(Number(event.target.value));
        onChange(Number(event.target.value));
    }

    useEffect(() => {
        setSelectedOption(value);
    }, [value])

    return (
        <Wrapper>
            {options.map((option, index) => (
                <label key={index}>
                    <Input
                        type='radio'
                        name='option'
                        value={option.value}
                        onChange={hendledOption}
                        checked={option.value === selectedOption}
                    />
                    <Text
                        selected={option.value === selectedOption}
                    >
                        {option.text}
                    </Text>
                </label>
                ))
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    gap: 10px;

    @media (max-width: 540px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 450px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 350px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Input = styled.input`
    position: absolute;
`

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
    font-size: 18px;
    background-color: ${({selected}) => selected ? '#007BFF' : '#F6F6F6'};
    color: ${({selected}) => selected ? '#FFFFFF' : '#000000'};
    cursor: pointer;
`