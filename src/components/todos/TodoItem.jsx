import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

// props.todo : TodoMain에서 보낸 todos 리스트
// onDelete : TodoTemplete에서 보낸 바구니 함수(휴지통 누르면 어떤 li 태그인지 보내주는 용도)
const TodoItem = ({item, onDelete}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

    // props.todo 분해
    const { id, title, done } = item;

    // 휴지통 아이콘 클릭하면 삭제
    function handleDelete(e) {
        onDelete(id);
    }

    return (
        // todo에서 받은 id 주입(나중에 삭제 시 id 참고용)
        <li className={itemStyle}>
            <div className={checkCircle}>
                { done && <MdDone /> }
            </div>
            <span className={text}> {title} </span>
            <div className={remove} onClick={handleDelete}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;