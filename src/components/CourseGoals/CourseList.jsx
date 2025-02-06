import React from 'react';
import CourseItem from './CourseItem';
import styles from './CourseList.module.css';

const CourseList = ({ items, onDelete }) => {

    const { 'goal-list':goalList } = styles;
    return (
        <ul className={goalList}>
            {
                items.map(item => <CourseItem key={item.id} item={item} onDelete={onDelete} />)
            }
        </ul>
    );
};

export default CourseList;