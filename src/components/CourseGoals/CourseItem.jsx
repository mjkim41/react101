import './CourseItem.module.css';
import React from 'react';
// # css 모듈화 활용 1. css 파일 import : 모듈로 바꿔줬으므로, import '.파일명.css'가 아닌 아래와 같이 import
import styles from './CourseItem.module.css'

const CourseItem = ({ item, onDelete }) => {

    // # css 모듈화 활용  2. Courseitem.module.css에서 import 아무이름 해주면, { 원래클래스명 : 랜덤생성클래스명}이 가져와임
    //   -> 이를 활용하기 위해 deconstructuring
    const { 'goal-item':goalItem } = styles;

    const { id, text } = item;

    /*
     1. li태그에 클릭이벤트가 걸려야 함
     2. App.jsx에 있는 goals배열에서 클릭한 아이템을 찾아서 지워야함.
     3. 클릭한 아이템을 App.jsx가 찾게하기위해 자신의 id값을 App.jsx로 끌어올려보냄
     4. App.jsx에서는 받은 id를 기반으로 goals배열에서 해당 아이템을 제거후 상태변경을 통해 리렌더링
    */

    const handleDelete = e => {
        // console.log('삭제!! ', id);
        onDelete(id);
    };

    return (
        <li
            // # css 모듈화 활용 3. module.css에서 가져온 css를 모듈을 적용
            className={ goalItem }
            onClick={handleDelete}>
            {text}
        </li>
    );
};

export default CourseItem;
