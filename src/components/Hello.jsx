// 개인이 만든 component는 app.jsx에 직접 넣지 않고, 보통 components 폴더를 만들어서 거기에 넣음
// component: 태그를 그리기 위한 하나의 단의

// legay한 방법) 클래스 컴포넌트
// 오버라이딩 하기 위해 extends React.Component
import React from "react";

// 클래스 컴포넌트 : legacy
class Hello extends React.Component {

    render() {

        return (
            <>
                <h1>하하호호</h1>
                <h2>냠냠뇽뇽</h2>
            </>
        );
    }
}

export default Hello;