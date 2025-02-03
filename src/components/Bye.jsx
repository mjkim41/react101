// react 18 버전 부터는 import React from "React" 생략 가능 (클래스 컴포넌트는 무조건 넣어야 함)

// 함수형 컴포넌트(최근 리액트 방식)
import Greet from "./Greet.jsx";

function Bye() {

    return (
        <div>
            <a href='https://www.github.com/mjkim41'>내 깃허브로 이동</a>
            <Greet />
        </div>
    )
}

export default Bye
