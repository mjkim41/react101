import React, {useState} from 'react';
import styles from './CourseInput.module.css';
import Button from "../ui/Button.jsx";

// onAdd : App에 goal 전달용 임의 함수
const CourseInput = ({onAdd}) => {

    console.log(styles);

    // css 모듈
    const { 'form-control':formControl, invalid } = styles;
    const [enteredText, setEnteredText] = useState('');
    const [isValid, setIsValid] = useState('true');

    const handleSubmit = e => {
        e.preventDefault();

        // 입력값 검증
        if (!enteredText.trim().length > 0) {
            setIsValid(false);
            return;
        }

        // 부모에 goal 보내주기
        onAdd({
            id: Math.random().toString(),
            text: enteredText
        });

        // 전송 끝나면 입력창 비우기
        setEnteredText('');
        document.querySelector('input').focus();
    };

    const handleGoalInput = (e) => {

        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim().length > 0 ) {
            setIsValid(true);
        }

        setEnteredText(inputValue);

    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className={ `${formControl} ${!isValid? invalid : ''}`} >
                <label>나의 목표</label>
                <input
                    type='text'
                    onInput={ handleGoalInput }
                    value={ enteredText }
                />
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
