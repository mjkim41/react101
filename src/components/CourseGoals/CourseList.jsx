import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({items}) => {
    return (
        <ul className='goal-list'>
            {
                items.map(item => <CourseItem key={Math.random()} item={item} />)
            }
        </ul>
    );
};

export default CourseList;