import React from 'react';
// import 해줘야 함 (같은 jsx면 확장자 생략 가능)
import Hello from './components/Hello'
import Bye from "./components/Bye.jsx";
import ExpenseItem from "./components/expenseTracker/ExpenseItem.jsx";
import ExpenseList from "./components/expenseTracker/ExpenseList.jsx";

// 컴포넌트
//    title = { } :
// props : 부모가 전달한 데이터가 들어옴
const App = () => {

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
       <ExpenseList expenses={expenses} />
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



