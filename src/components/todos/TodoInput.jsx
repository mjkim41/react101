import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

//  todoInput.jsx에서 새 todo 전달받아, 형제 Component인 TodoMain에 뿌리기
//    1) 부모 컴포넌트인 TodoTemplete에서 내려준 바구니 함수
const TodoInput = ( { onAdd } ) => {

    const { 'form-wrapper':formWrapper, 'insert-btn':insertBtn, 'insert-form':insertForm, open:openStyle} = styles;

    // [버튼 클릭 시 입력창 열리는 이벤트]
    //   2. 입력창 여는 여부를 useState로 관리
    const [open, setOpen] = useState(false);

    const [enteredTitle, setEnteredTitle] = useState('');

    // submit 이벤트 핸들러
    function handleSubmit(e) {
        e.preventDefault();

        // TodoTemplete.jsx에서 새 todo를 전달받기 받아 (TodoInput의 형제인) TodoMain에 뿌리기 위해 내려준 바구니 함수
        onAdd(enteredTitle);
    }

    return (
        <>
            {
                /* [버튼 클릭 시 입력창 열리는 이벤트]
                       3. 입력창 여는 여부 확인하는 변수의 값에 따라, 태그 표시 or 미표시 */
                open &&
                    <div className={insertBtn}>
                        <form className={insertForm} onSubmit={ handleSubmit }>
                            <input
                                type='text'
                                placeholder='할 일을 입력 후, 엔터를 누르세요!'
                                onInput = { (e) => setEnteredTitle(e.target.value)}
                                value = { enteredTitle }
                            />
                        </form>
                    </div>

            }

            {/* [버튼 클릭 시 입력창 열리는 이벤트]
               1. 클릭이벤트 걸어주기 */}
            <button className={ `${insertBtn} ${open && openStyle}` } onClick={() => setOpen(!open)}>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;