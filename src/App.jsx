
import { useState } from "react";
import ExpenseList from "./components/expenseTracker/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

// 컴포넌트
const App = () => {
    // 서버에서 지출항목 JSON이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 30000,
            date: new Date(2025, 2 - 1, 3),
        },
        {
            title: '족발',
            price: 50000,
            date: new Date(2024, 9 - 1, 30),
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2025, 1 - 1, 15),
        },
        {
            title: '피자',
            price: 4000,
            date: new Date(2020, 8 - 1, 28),
        },
        {
            title: '파리채',
            price: 1000,
            date: new Date(2022, 7 - 1, 12),
        },
    ];

    // 지출항목 배열을 상태변수로 관리
    const [expenseList, setExpenseList] = useState(expenses);

    // 상향식 데이터 전달을 위해 하위컴포넌트에게 함수 하나를 내려줘야 함.
    const onAddExpense = (newUserData) => {
        // console.log('상향식데이터 전달용 함수 호출!');


        // console.log(newUserData);
        // expenseList.push(newUserData)
        setExpenseList([ ...expenseList, newUserData ]);

    };

    return (
        <>
            <NewExpense onSave={onAddExpense} />
            <ExpenseList expenses={expenseList} />
        </>
    );
}


export default App;
