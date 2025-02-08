
import { useState } from 'react';
import './App.css';
import AddUsers from "./components/Users/AddUsers.jsx";
import UserList from "./components/Users/UserrList.jsx";


// 컴포넌트
const App = () => {

    // 회원 저장 배열
    const [userList, setUserList] = useState([]);

    // 입력한 회원정보를 가져오는 함수
    const addUserInfo = (user) => {
        setUserList([...userList, user]);
    }
    return <>
        <AddUsers onAddUser={addUserInfo}/>
        <UserList users={userList}/>
    </>;
};

export default App;
