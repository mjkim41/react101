import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

// props.todo : TodoMain에서 보낸 todos 리스트
const TodoItem = ({item}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

    // props.todo 분해
    const { id, title, done } = item;

    return (
        // todo에서 받은 id 주입(나중에 삭제 시 id 참고용)
        <li className={itemStyle} id={id}>
            <div className={checkCircle}>
                { done && <MdDone /> }
            </div>
            <span className={text}> {title} </span>
            <div className={remove}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;