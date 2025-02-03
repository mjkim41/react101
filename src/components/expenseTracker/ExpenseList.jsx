import React from 'react';
import ExpenseItem from './ExpenseItem';
// React 프로젝트에서 JSX 파일에 CSS 파일을 가져오는 법 : html 과는 달리 import './App.css'; 이런식으로 해주면 됨
import './ExpenseList.css';
const ExpenseList = ({ expenses }) => {
    console.log(expenses);
    return (
        <div className='expenses'>
            {/*App에서 배열 안에 객체 감싸서 보내줬었음*/}
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </div>
    );
};

export default ExpenseList;
