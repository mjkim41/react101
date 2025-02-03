import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ expenseDate }) => {

    // 날짜 형식 변경 : toLocaleString('언어-지역', 옵션으로 {year/month/day: numeric 등등})
    const month = expenseDate.toLocaleString('ko-KR', {month: 'long'});

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{expenseDate.getFullYear()}</div>
            <div className='expense-date__year'>{ month }</div>
            <div className='expense-date__day'>{ expenseDate.getDate() }</div>
        </div>
    );
};

export default ExpenseDate;