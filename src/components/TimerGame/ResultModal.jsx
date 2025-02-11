import React, { forwardRef } from 'react'

const ResultModalComponent = ({ result, targetTime, timeRemaining, onReset },  ref) => {

    // const dialogRef = useRef();

    // useEffect(() => {
    //   dialogRef.current.showModal();
    // }, []);

    // 남은시간을 밀리초에서 초로 변환
    const formattedTime = (timeRemaining / 1000).toFixed(2);

    return (
        <dialog ref={ref} className='result-modal'>
            <h2>Your {result}!</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{ formattedTime } seconds left.</strong>
            </p>
            <form method='dialog'>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    );
}

const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;