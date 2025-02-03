import React from 'react';
// css도 이렇게 import 함
/* React에서 CSS를 import할 수 있는 원리는 Webpack과 같은 모듈 번들러 덕분입니다.
Webpack은 CSS 파일을 JavaScript 모듈처럼 취급하고, 이를 통해 CSS를 JavaScript 코드 내에서 가져올 수 있도록 도와줍니다.
이 과정은 개발자가 직접 설정하지 않더라도, Create React App 등의 도구를 사용하면 자동으로 설정됩니다.
 */
import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>2025-02-03</div>
            <div className='expense-item__description'>
                <h2>점심밥</h2>
                <div className='expense-item__price'>10000원</div>
            </div>
        </div>
    );
}

export default ExpenseItem