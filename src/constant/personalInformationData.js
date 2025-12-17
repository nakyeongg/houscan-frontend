export const personalInformationData = [
    {
        question: '생년월일을 입력해주세요',
        type: 'input',
        placeholder: '990101',
    },
    {
        question: '성별을 선택해주세요',
        type: 'radio',
        options: [
            {text: '남성', value: 0},
            {text: '여성', value: 1},
        ]
    },
    {
        question: '신혼부부에 해당되십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '거주지를 선택해주세요',
        type: 'residenceRadio',
        options: [
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
            {text: '기타', value: 26},
        ]
    },
    {
        question: '대학교 재학여부',
        type: 'radio',
        options: [
            {text: '재학 중', value: 0},
            {text: '재학 중 아님', value: 1},
        ]
    },
    {
        question: '대학 또는 고등학교를 졸업한지 2년 이내이십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '직장에 재직 중이십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '취업준비자이십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '복지 수혜 대상에 해당되십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '세대 구성원이 주택을 소유 중이십니까?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '자신이나 가구원 중에 본인 명의의 장애인 등록증을 소유하고 계신 분이 있으신가요?',
        type: 'radio',
        options: [
            {text: '예', value: 0},
            {text: '아니오', value: 1},
        ]
    },
    {
        question: '청약 납입 횟수를 입력해주세요',
        type: 'input',
        placeholder: '10',
    },
    {
        question: '총 자산이 얼마이신가요? (단위: 원)',
        type: 'input',
        placeholder: '10000000',
    },
    {
        question: '소유하고 있는 자동차 가액이 얼마이신가요? (단위: 원)',
        type: 'input',
        placeholder: '10000000',
    },
    {
        question: '가구당 월평균 소득이 얼마이신가요?',
        type: 'radio',
        options: [
            {text: '100% 이하', value: 0},
            {text: '50% 이하', value: 1},
        ]
    },
]