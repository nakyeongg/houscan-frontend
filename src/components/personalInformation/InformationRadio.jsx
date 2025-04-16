import React, { useState } from 'react';
import styled from 'styled-components';

export const InformationRadio = ({ options, onChange }) => {

    const [selectedOption, setSelectedOption] = useState();

    const hendledOption = (event) => {
        const value = Number(event.target.value);
        setSelectedOption(value);
        onChange(value);
    }    

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
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

const Input = styled.input`
    position: absolute;
`

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
    border-radius: 12px;
    font-size: 18px;
    background-color: ${({selected}) => selected ? '#007BFF' : '#F6F6F6'};
    color: ${({selected}) => selected ? '#FFFFFF' : '#000000'};
    cursor: pointer;
`