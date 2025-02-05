import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

// onDelete : courseitem한테 지울 li 태그 전달해달라고 함수로 넘기는 바구니 함수
const CourseList = ({items, onDelete}) => {
    return (
        <ul className='goal-list'>
            {
                items.map(item => <CourseItem key={items.id} onDelete={onDelete} item={item} />)
            }
        </ul>
    );
};

export default CourseList;