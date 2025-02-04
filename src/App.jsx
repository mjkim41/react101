import React from 'react';
import ExpenseList from "./components/expenseTracker/ExpenseList.jsx";
import ExpenseForm from "./components/new-expense/ExpenseForm.jsx";
import NewExpense from "./components/new-expense/NewExpense.jsx";
import CheckBoxStyle from "./components/practice/CheckBoxStyle.jsx";
import Counter from "./components/Counter.jsx";

/*
  [ 자식 React Component에 Props (properties의 약자)를 이용하여 정보를 전달해주는 법 ]
   1) 부모 요소에서 return ( <자식컴포넌트명 /> ) 이 부분에 <자식컴포넌트명 Props명=속성값> 형식으로 정보를 전달해준다.
     - 예시) <ExpenseList expenses={expenses} />
   2) 자식요소에서 const 자식컴포넌트명 = () => { return () } 부분에서 parameter로 props 를 받아서 사용한다.
     - 예시)  이 클래스의 자식 컴포넌트에서 첫줄 보면 props을 받아서 deconstructuring 하였음
      const ExpenseList = ({ expenses }) => {
     return (
        <div className='expenses'>
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </div>
     );
};

 */
const App = () => {

    // drilling
    // 상향식 데이터 전달을 위해 하위컴포넌트에 함수 하나를 내려저ㅜ야 함. drilling
    // react 관례상 앞에 on을 붙이면 함수임
    // 이름 왜 userInput으로 안하고 newUserData로 해도 되는 거지???
    const onAddExpense = ( newUserData ) => {
        console.log('상향식 데이터 전달용 함수', newUserData);
        expenses.push(newUserData);

        console.log(expenses);
    }

    // 서버에서 지출 항목 json 이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 30000,
            date: new Date(2025, 2 - 1, 3),
        },
        {
            title: '로제떡볶이',
            price: 20000,
            date: new Date(2024, 9 - 1, 1),
        },
        {
            title: '크로스핏',
            price: 300000,
            date: new Date(2025, 1 - 1, 15),
        }
    ];

    return (
        // 부모 요소에서 return ( <자식컴포넌트명 /> ) 이 부분에 <자식컴포넌트명 Props명=속성값> 형식으로 정보를 전달해준다.

            // 안의 태그 내용이 유동적인 경우 : 부모가 <></> 사이에 내용 적어서 children으로 전달해주면, 자식 태그에서 props.children으로 사용
            <>
                {/* drilling */}
                <NewExpense onSave={onAddExpense}/>
                <ExpenseList expenses={expenses} />
            </>
    );

}


/*
  jsx : 리액트에서 사용하는 특수한 js 문법, 태그를 그대로 쓰면 알아서 변환
 */

  // 원래 문법 :
  // const $h1 = React.createElement('h1', null, 'React 101');

  // 축약 문법 :
  // const $h1 = <h1>React 101</h1>;
  // return $h1;

  // 규칙 1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 함.
  // return <h1>ㅎㅎ</h1><h2>ㅍㅍ</h2>;
  // return (
  //     <header>
  //       <h1>React</h1>
  //       <h2>102</h2>
  //     </header>
  // );

    // 규칙 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨 (혹은 <>
    // const subject =  <span>ㅎㅎㅎ</span>
    // return (
    //     <>
    //         <header className='ㅎㅎ'>
    //             <h1>React {subject}</h1>
    //             <label htmlFor='username'> </label>
    //             <input type='text' id='username' />
    //         </header>
    //         <main> 메인 컨텐츠~~</main>
    //     </>
    // );


    // 규칙 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
  // return (
  //     <header>
  //       <input type='text'/>ㅎㅎ
  //     </header>
  // );

  // 규칙 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  //        label for 은 label htmlfor로
  // return (
  //     <header className='ㅎㅎ'>
  //       <h1>React</h1>
  //       <label htmlFor='username'></label>
  //       <input type='text' id='username' />
  //     </header>
  // );


  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  // const subject =  <span>ㅎㅎㅎ</span>
  //  return (
  //     <header className='ㅎㅎ'>
  //       <h1>React {subject}</h1>
  //       <label htmlFor='username'> </label>
  //       <input type='text' id='username' />
  //     </header>
  // );
  //
  //   return (
  //       <>
  //           <Hello />
  //           <Bye />
  //       </>
  //   )



export default App



