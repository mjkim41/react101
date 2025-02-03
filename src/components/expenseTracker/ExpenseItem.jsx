import React from 'react';
// css도 이렇게 import 함
/* React에서 CSS를 import할 수 있는 원리는 Webpack과 같은 모듈 번들러 덕분입니다.
Webpack은 CSS 파일을 JavaScript 모듈처럼 취급하고, 이를 통해 CSS를 JavaScript 코드 내에서 가져올 수 있도록 도와줍니다.
이 과정은 개발자가 직접 설정하지 않더라도, Create React App 등의 도구를 사용하면 자동으로 설정됩니다.
 */

// props 뭔 말이여????
/*
React에서 props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다. props는 "properties"의 약자입니다.
props 전달하기: 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 props를 사용합니다. 예를 들어, ExpenseItem 컴포넌트를 사용하면서 title과 같은 값을 전달할 수 있습니다:
props 받기: 자식 컴포넌트에서는 props 객체를 받아서 사용할 수 있습니다. ExpenseItem 컴포넌트의 경우, props 객체를 매개변수로 받고, 이 객체의 속성(title)을 사용합니다.
 */

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = ({ expense }) => {
    // console.log('props: ', props);
    const { title, price, date } = expense;

    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <div className='expense-item'>
            {/* 날짜를 component 화 함*/}
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                {/* 통화 표시를 compeont화 함 */}
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;

