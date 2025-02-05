import React from 'react';
import './CourseItem.css';

const CourseItem = ({item, onDelete}) => {

    const { id, text } = item;

    /*
           1. li 태그에 클릭이벤트가 걸려야 함
           2. App.jsx에 있는 goals 배열에 클릭한 아이템을 찾아서 지워야 함
           3. 클릭한 아이템을 App.jsx가 찾게하기위해 자신의 id값을 app.jsx로 끌어올려보내야 함
           4. App.jsx에서는 받은 id를 기반으로 goals배열에서 해당 아이템을 제거 후 상태변경을 통해 리렌더링
     */

    const deleteHandler = (e) => {
        const $selectedLi = e.target;
        let selectedId = $selectedLi.id;

        // 지울 li 태그의 id를 부모에 바구니 함수로 전달해줌
        onDelete(selectedId);
    }

    // 1. 클릭 이벤트 걸기
    // 2. 선택한 태그가 무엇인지 알 수 있도록, 부모에서 가져온 이 component에도 붙여주기
    return <li className='goal-item' id={id} onClick={ deleteHandler }>{ text }</li>;
};

export default CourseItem;
