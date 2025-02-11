import React, {useEffect, useRef} from 'react';

const ResultModal = ({targetTime}) => {

    const dialogRef = useRef();

    useEffect(() => {
        dialogRef.current.showModal();
    });

    return (
        // dialog 태그
        // - css : ::backdrop, [open] 등
        // - showModal(), show(), close()
        <dialog ref={dialogRef} className="result-modal">
            {/*<h2>Your {result}!</h2>*/}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
};

export default ResultModal;