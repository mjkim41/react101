import React, {useState} from 'react';

const Counter = () => {

    //  상태 관리 하려면 일반 변수가 아니라 useState로 관리해야 함
    // useState의 리턴값 : 1. 상태관리 변수값 2. 상태변경 함수
    const [count, setCount] = useState(0);
    console.log('1. init count: ', count);

    const increaseHandler = () => {
        // 상태 값을 업데이트할 때는, 반드시  setter를 통해 업데이트해야 함
        // count++; 이렇게 하면 안 됨
        // 그냥 setCount(count+1); 이렇게 해버리면, 이전 상태랑 비교해서 봤을 때 얘 입장에서는 1 -> 1로 바꿔달라는 말이니까 안 바뀜
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        // 상태 업데이트는 리렌더링 이후에 일어남
        console.log('2. click count: ', count);
    };

    const decreaseHandler = () => setCount(count - 1);

    console.log('3. last count: ', count);
    return (
        <div>
            <h1>숫자: {count}</h1>
            <button onClick={increaseHandler}>증가</button>
            <button onClick={decreaseHandler}>감소</button>

        </div>
    );
};

export default Counter;
