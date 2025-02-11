import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

/*
  timer를 전역변수로 설정시 5초 start -> 10초 start -> 10초 stop -> 5초 stop
  을 순서대로 눌러보면 5초 타이머가 제대로 중지되지 않음

  원인은 4개의 컴포넌트가 1개의 전역변수 timer를 공유함으로써 생기는 문제임
  처음 5초짜리의 타이머아이디가 10초짜리에게 덮어씌워져 사라짐.
*/

// 타이머 id 저장
// let timer;

const TimerChallenge = ({ title, targetTime }) => {
    // 타이머 id를 컴포넌트별로 각각 관리 - 리렌더링이 되어도 값이 유지
    const timer = useRef();

    // 모달을 제어하기 위해 모달을 저장하는 Ref
    const dialogRef = useRef();

    // 남은 시간을 관리하는 상태변수
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    // start stop 활성화 조건
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // 게임 패배조건 - 남은 시간이 0초 밑으로 떨어졌을 때
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialogRef.current.showModal();
    }

    // start 이벤트
    const handleStart = (e) => {
        // 실제 시간을 실행
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);

        // console.log(`start timer: ${timer.current}`);
    };

    // stop 이벤트
    const handleStop = (e) => {
        clearInterval(timer.current); // 타이머 해제
        // 승리 시점
        dialogRef.current.showModal();
    };

    // 모달 닫기 버튼을 누르면 남은시간을 리셋하는 함수
    const handleReset = () => setTimeRemaining(targetTime * 1000);

    return (
        <>
            <ResultModal
                ref={dialogRef}
                result={timeRemaining <= 0 ? 'lost' : 'won'}
                targetTime={targetTime}
                timeRemaining={timeRemaining}
                onReset={handleReset}
            />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;