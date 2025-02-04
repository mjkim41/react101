import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

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
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(null);

    // 3. form에 걸 이벤트 만들기
    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            title,
            price,
            date
        };

        console.log('payload : ', payload);
    }

    return (
        // 2. form에 submit 이벤트 걸기
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onChange={e => setPrice(+e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={getTodayDate()}
                        onChange={e => setDate(e.target.value)}
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
