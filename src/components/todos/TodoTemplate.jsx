
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

    // 손자 TodoItemd.jsx에 내려줄 todo 완료여부 확인용 바구니 함수
    const checkTodo = ( id ) => {
        // 쉬운 방법
        // fyi. copy 뜨는 이유 : todoList 변수는 hook이므로, 그냥 수정하면 안 됨
        // const copyTodoList = [...todoList];
        // const targetTodo = copyTodoList.find(todo => todo.id === id);
        // targetTodo.done = !targetTodo.done;
        // setTodoList(copyTodoList);

        // 코드 단순화
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
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


    // 남은 할 일 수 구하기(todoheader에 전달)
    const countRestTodo = todoList.filter(todo => !todo.done).length;

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader count={countRestTodo}/>
            <TodoMain onRemove={removeTodo} onCheck={checkTodo} items={todoList} />
            {/*//  todoInput.jsx에서 새 todo 전달받아, 형제 Component인 TodoMain에 뿌리기*/}
            {/*//    1) 부모 컴포넌트인 TodoTemplete에서 바구니 함수 내려주기*/}
            <TodoInput onAdd = { addTodo }/>
        </div>
    );
};

export default TodoTemplate;
