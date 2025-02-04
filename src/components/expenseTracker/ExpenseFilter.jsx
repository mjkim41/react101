import React from 'react';
import './ExpenseFilter.css';

// drilling 1. : onSelectYear 가져오기
const ExpenseFilter = ( {onSelectYear} ) => {

    // Select에 Change 이벤트가 일어나면 발생하는 이벤트
    const changeYearHandler = e => {
        // drilling 2. 부모 Component인 ExpenseList에서 가져온 onSelectYear 함수에, 선턱된 연도 값 전달해주기
        const selectedYear = e.target.value;
        onSelectYear(selectedYear);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeYearHandler}>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
