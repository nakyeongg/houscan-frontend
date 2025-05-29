import React, { useState } from 'react';
import styled from 'styled-components';

export const RegionButton = ({ onDataChange }) => {

    const Regions = [
        {text: '전체', value: 0},
        {text: '강남구', value: 1},
        {text: '강동구', value: 2},
        {text: '강북구', value: 3},
        {text: '강서구', value: 4},
        {text: '관악구', value: 5},
        {text: '광진구', value: 6},
        {text: '구로구', value: 7},
        {text: '금천구', value: 8},
        {text: '노원구', value: 9},
        {text: '도봉구', value: 10},
        {text: '동대문구', value: 11},
        {text: '동작구', value: 12},
        {text: '마포구', value: 13},
        {text: '서대문구', value: 14},
        {text: '서초구', value: 15},
        {text: '성동구', value: 16},
        {text: '성북구', value: 17},
        {text: '송파구', value: 18},
        {text: '양천구', value: 19},
        {text: '영등포구', value: 20},
        {text: '용산구', value: 21},
        {text: '은평구', value: 22},
        {text: '종로구', value: 23},
        {text: '중구', value: 24},
        {text: '중랑구', value: 25},
    ]

    const [selectedRegion, setSelectedRegion] = useState(0);
    const [selectedRegionText, setSelectedRegionText] = useState('전체');

    const handleRegion = (event) => {
        const value = Number(event.target.value);
        const selected = Regions.find(region => region.value === value);
        setSelectedRegion(value);
        setSelectedRegionText(selected.text);
        onDataChange(selected.text);
    }

    const handleDataToParent = () => {
        const newRegion = selectedRegionText;
        onDataChange(newRegion);
    }

    return (
        <Wrapper>
            {Regions.map((region, index) => (
                <label key={index}>
                    <Input
                        type='radio'
                        name='region'
                        value={region.value}
                        onChange={handleRegion}
                        checked={index === selectedRegion}
                        onClick={handleDataToParent}
                    />
                    <Text
                        selected={index === selectedRegion}
                    >
                        {region.text}
                    </Text>
                </label>
                ))
            }
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap;
    gap: 4px;
`

const Input = styled.input`
    position: absolute;
`

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
    width: 73px;
    border-radius: 12px;
    font-size: 14px;
    background-color: #FAFAFA;
    border: ${({selected}) => selected ? '1px solid #007BFF' : '1px solid #000000'};
    background-color: ${({selected}) => selected ? '#C4E0FF' : '#FFFFFF'};
    color: ${({selected}) => selected ? '#007BFF' : '#000000'};
    cursor: pointer;
`