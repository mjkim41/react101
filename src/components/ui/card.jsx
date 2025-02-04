import React from 'react';
import './Card.css';

// 안의 태그 내용이 유동적인 경우 : 부모에서 props로 전달해주면 자식 태그에서 props.children으로 사용
// onClick 을 props로 전달받음
const Card = ({ children, className, onClick }) => {

    // 카드....
    const cn = `card ${className}`;
    return (
        // 이벤트 받아줌
        <div className={cn} onClick={onClick}>
            {/* 유동적인 구조인 경우 */}
            {children}
        </div>
    );
};

export default Card;
