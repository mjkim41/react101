import React, {useState} from 'react';
import './CourseInput.css';
import Button from "../ui/Button.jsx";

// onAdd : App에 goal 전달용 임의 함수
const CourseInput = ({onAdd}) => {



    const [enteredText, setEnteredText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(enteredText);
        // 부모에 goal 보내주기
        onAdd({
            id: Math.random().toString(),
            text: enteredText
        });

        // 전송 끝나면 입력창 비우기
        setEnteredText('');
        document.querySelector('input').focus();
    };

    const handleGoalInput = e => {
        const inputValue = e.target.value;
        setEnteredText(inputValue);

    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className='form-control'>
                <label>나의 목표</label>
                <input type='text' onInput={ handleGoalInput } value={ enteredText }/>
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
