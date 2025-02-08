import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

// onRemove : todoItem에서 휴지통 아이콘 클릭 시 <li> id를 확인하기 위해 todoTemplete > todoMain > todoItem 으로 내려줌
// onCheck : todoItem에서 완료 여부 변경 시, 변경한 id와 done:true/false 확인하기 위해, todoTemplete > todoMain > todoItem 으로 내려줌
const TodoMain = ({items, onRemove, onCheck}) => {
    return (
        <ul className={styles['todo-list']}>
            {
                items.map(todo => (<TodoItem key={todo.id} onDelete={onRemove} onCheck={onCheck} item={todo}/>))
            }
        </ul>
    );
};

export default TodoMain;