import React from 'react';
import './ExpenseFilter.css';

// drilling 1. : onSelectYear 가져오기
const ExpenseFilter = ( { onSelectYear } ) => {

    // Select에 Change 이벤트가 일어나면 발생하는 이벤트
    const changeYearHandler = e => {
        // drilling 2. 부모 Component인 ExpenseList에서 가져온 onSelectYear 함수에, 선턱된 연도 값 전달해주기
        const selectedYear = e.target.value;
        onSelectYear(selectedYear);
    };

    // 연도 만들기
    const yearArr = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
    const createYear =
        yearArr
            .sort((a,b) => b-a)
            .map((year) => (<option key={year} value={year}>{year}</option>));
    console.log(createYear);

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeYearHandler}>
                    {createYear}
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
