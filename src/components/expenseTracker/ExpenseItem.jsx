import React from 'react';
/* React에서 CSS를 import할 수 있는 원리는 Webpack과 같은 모듈 번들러 덕분입니다.
Webpack은 CSS 파일을 JavaScript 모듈처럼 취급하고, 이를 통해 CSS를 JavaScript 코드 내에서 가져올 수 있도록 도와줍니다.
이 과정은 개발자가 직접 설정하지 않더라도, Create React App 등의 도구를 사용하면 자동으로 설정됩니다.
 */

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../ui/card.jsx";

const ExpenseItem = ({ expense }) => {
    // console.log('props: ', props);
    const { title, price, date } = expense;

    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR', {style: 'currency', currency:'krw'}).format(price);

    return (
        // 카드로 감싸줌
        <Card className='expense-item'>
            {/* 날짜를 component 화 함*/}
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                {/* 통화 표시를 compeont화 함 */}
                <div className='expense-item__price'>{formatPrice}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;

