import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const DUMMY_TODOS = [
    { id: 1, title: '대출 갱신 알아보기', done: false },
    { id: 2, title: '제주도 여행 준비', done: false },
    { id: 3, title: '취업 준비', done: true },
]

const TodoMain = () => {
    return (
        <ul className={styles['todo-list']}>
            {
                DUMMY_TODOS.map(todo => (<TodoItem key={todo.id} item={todo}/>))
            }
        </ul>
    );
};

export default TodoMain;