
import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const DUMMY_TODOS = [
    { id: 1, title: '대출 갱신 알아보기', done: false },
    { id: 2, title: '제주도 여행 준비', done: false },
    { id: 3, title: '취업 준비', done: true },
];

const TodoTemplate = () => {

    //  자식 TodoItem.jsx에서 휴지통 버튼을 누르면, 삭제될 <li>의 id를 전달받아, todoList에서 삭제하는 함수
    const removeTodo = ( deleteLiId ) => {
        setTodoList((prev) => prev.filter(todo => todo.id !== deleteLiId));
    }


    //  todoInput.jsx에서 새 todo 전달받아, 형제 Component인 TodoMain에 뿌리기
    //    1) 부모 컴포넌트인 TodoTemplete에서 바구니 함수 내려주기
    const addTodo = ( newTitle ) => {
        // 2) input에서는 title만 받고, 여기에서 id랑 done 여부 부여(input에서는 id, done은 쓸 일 없음)
        const newTodo = {
            id: Math.random().toString(),
            title: newTitle,
            done: false
        }
        setTodoList((prev) => {return [...prev, newTodo]});
    }

    const [todoList, setTodoList] = useState(DUMMY_TODOS);

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader />
            <TodoMain onRemove={removeTodo} items={todoList} />
            {/*//  todoInput.jsx에서 새 todo 전달받아, 형제 Component인 TodoMain에 뿌리기*/}
            {/*//    1) 부모 컴포넌트인 TodoTemplete에서 바구니 함수 내려주기*/}
            <TodoInput onAdd = { addTodo }/>
        </div>
    );
};

export default TodoTemplate;
