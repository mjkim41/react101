import { useState } from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login';

// 컴포넌트
const App = () => {

    // 로그인 상태 체크
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // 지금 이 컴포넌트가 렌더링될 때 localStorage에서 토큰을 꺼내서 이전에 로그인 했던 사람인지를 확인
    console.log('토큰 검사!!');
    const token = localStorage.getItem('login-flag');

    if (token === '1') {
        setIsLoggedIn(true);
    }


    // 로그인 수행 함수를 전달
    const handleLogin = (email, password) => {

        // 검증
        if (email === 'abc@def.com' && password === '12345678') {
            localStorage.setItem('login-flag', '1');
            setIsLoggedIn(true); // 상태값이 변경되면 리액트는 컴포넌트를 리 렌더링한다.
        } else {
            alert('로그인 실패!');
        }
    };

    return <>
        <MainHeader />
        <main>
            {isLoggedIn && <Home />}
            {!isLoggedIn && <Login onLogin={handleLogin} />}
        </main>
    </>;
};

export default App;