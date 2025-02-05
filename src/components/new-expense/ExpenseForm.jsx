import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd } ) => {

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 1. 상태값 관리하기
    //   <input type="text" onChange={e => setTitle(e.target.value)}/>

    // 하나씩
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [date, setDate] = useState(null);

    const initialUserInput = {
        title: '',
        price: 0,
        date: '',
    };

    // 여러 개 한 번에
    const [userInput, setUserInput] = useState(initialUserInput);


    // 3. form에 걸 이벤트 만들기
    const handleSubmit = e => {
        e.preventDefault();

        // 단일 값 할 때
        // const payload = {
        //     title,
        //     price,
        //     date
        // };

        console.log('payload : ', userInput);

        // 부모에 drilling
        onAdd({
            ...userInput,
            date : new Date(userInput.date)
        });

        // 입력창 비우기 - 상태값과 input을 연결하려면 양방향으로 연결해야 함
        // input 태그에 입력하면 상태값 userInput만 변경됨 - 단방향
        // setUserInput(null); !! <- 이렇게 하면 지워지지도 않고 순서 때문에 payload도 null이 되어 버림 !!!!
        setUserInput(initialUserInput);


    }

    // 객체로 상태관리하깅 위해서, 쉽게 하기 위해 함수 빼줌
    // ! 상태값이 객체나 배열일 경우에는 항상 새로운 객체, 배열을 통해 세팅하여야 함
    const handleTitleInput = (e) => {
        // 이전 상태를 가져와서
        setUserInput((prevState) => {
            return {
                // 객체 복사 후 기존에 있는 key 값을 다시 설정하면, 그 key의 값이 수정됨 !
                ...prevState,
                title: e.target.value
            }
        })
    }
    const handlePriceInput = (e) => {
        setUserInput({
            ... userInput,
            price: e.target.value
        })
    }
    const handleDateInput = (e) => {
        setUserInput({
            ...userInput,
            date: e.target.value
        })
    }

    return (
        // 2. form에 submit 이벤트 걸기
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* 단일 상태 관리 값으로 관리할 떄 : onChange={e => setTitle(e.target.value)} */}
                    <input
                        type="text"
                        onChange={ handleTitleInput }
                        // ???? 이래야 value 값이 바뀐다고??
                        value={userInput.title} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onChange={ handlePriceInput }
                        value={userInput.price}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={getTodayDate()}
                        onChange={ handleDateInput }
                        value={userInput.date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
