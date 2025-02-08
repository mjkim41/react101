import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

// props.todo : TodoMain에서 보낸 todos 리스트
// onDelete : TodoTemplete에서 보낸 바구니 함수(휴지통 누르면 어떤 li 태그인지 보내주는 용도)
// onRemove : todoItem에서 휴지통 아이콘 클릭 시 <li> id를 확인하기 위해 todoTemplete > todoMain > todoItem 으로 내려줌
// onCheck : todoItem에서 완료 여부 변경 시, 변경한 id와 done:true/false 확인하기 위해, todoTemplete > todoMain > todoItem 으로 내려줌
const TodoItem = ({item, onDelete, onCheck}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle, active, finish } = styles;

    // props.todo 분해
    const { id, title, done } = item;

    // 휴지통 아이콘 클릭하면 삭제
    function handleDelete(e) {
        onDelete(id);
    }

    // 체크박스 클릭 시 todo 완료여부를 변경해주는 함수
    const handleToggleCompletion = (e) => {
        onCheck(id);
    }

    return (
        // todo에서 받은 id 주입(나중에 삭제 시 id 참고용)
        <li className={itemStyle}>
            {/*onClick 이벤트 : 클릭여부에 따라 todo 완료 여부 변경 */}
            <div className={`${checkCircle} ${done && active} `} onClick={ handleToggleCompletion }>
                { done && <MdDone /> }
            </div>
            <span className={`${text} ${done && finish}`}> {title} </span>
            <div className={remove} onClick={handleDelete}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;