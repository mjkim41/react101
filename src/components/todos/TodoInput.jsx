import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = () => {

    console.log(styles);

    const { 'form-wrapper':formWrapper, 'insert-btn':insertBtn, 'insert-form':insertForm, open:openStyle} = styles;

    // [버튼 클릭 시 입력창 열리는 이벤트]
    //   2. 입력창 여는 여부를 useState로 관리
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                /* [버튼 클릭 시 입력창 열리는 이벤트]
                       3. 입력창 여는 여부 확인하는 변수의 값에 따라, 태그 표시 or 미표시 */
                open &&
                    <div className={insertBtn}>
                        <form className={insertForm}>
                            <input
                                type='text'
                                placeholder='할 일을 입력 후, 엔터를 누르세요!'
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