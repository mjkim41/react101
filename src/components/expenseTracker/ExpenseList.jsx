import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {

    const [year, setYear] = useState(new Date().getFullYear().toString());

    // 연도를 끌어올리기 위한 함수
    const onFilterChange = (filteredYear) => {

        console.log(`선택된 끌어올려진 연도: ${filteredYear}`);
        // setYear
        setYear(filteredYear);
    };


    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter={onFilterChange} />
            {expenses
                .filter(ex => ex.date.getFullYear().toString() === year)
                // React에서 key prop은 리스트의 각 항목을 고유하게 식별하기 위해 사용됩니다
                .map((ex) => (<ExpenseItem key={Math.random()} expense={ex} />))}
        </div>
    );
};

export default ExpenseList;
