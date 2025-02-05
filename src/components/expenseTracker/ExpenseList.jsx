import React from 'react';
import ExpenseItem from './ExpenseItem';
// React 프로젝트에서 JSX 파일에 CSS 파일을 가져오는 법 : html 과는 달리 import './App.css'; 이런식으로 해주면 됨
import './ExpenseList.css';
import ExpenseFilter from "./ExpenseFilter.jsx";
const ExpenseList = ({ expenses }) => {

    // ExpenseFilter에서 선택한 연도값을 여기서 출력
    // console.log('필터 연도값을 출력!', filteredYear );

    // drilling 1. 함수 만들어주기(ExpenseFilter에서 연도를 끌어올리기 위한 임의의 함수)
    // drilling 3. ExpenseFilter에서 onSelectYear(e.target.value)로 값을 전달해주었음
    const onFilterChange = ( selectedYear ) => {
        console.log('ExpenseFilter.jsx에서 끌어올려온 filtered year:', selectedYear);
    }

    const createItemArray = () => {
      // expenses라는 객체배열을 ExpenseItem 컴포넌트로 배열로 변환
        return expenses.map(ex => <ExpenseItem expense={ex} />);
    };

    return (
        <div className='expenses'>
            {/* Drilling 2.ExpenseFilter에 driling 용 함수 전달해주기 */}
            <ExpenseFilter onSelectYear={ onFilterChange }/>

            {createItemArray()}
        </div>
    );
};

export default ExpenseList;
