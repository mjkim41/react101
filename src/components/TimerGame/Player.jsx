import React, {useRef, useState} from "react";
import Input from "./Input.jsx";

const Player = () => {

    // input 태그 저장할 ref
    const nameRef = useRef();

    const [enteredName, setEnteredName] = useState('anonymous');

    const handleChangeName = (e) => {

        const $input = nameRef.current;
        setEnteredName($input.value);

        $input.value='';
    };

    return (
        <section id="player">
            <h2>Welcome { enteredName }</h2>
            <p>
                {/* DOM에 접근하기 위해서 Input에 ref 를 달음 -> 근데 ref는 HTML 태그에만 되는데? 그럼 props으로보내면 안 되나? 응 안돼. 그럼 어떻게? forwardRef를 이용해서 */}
                <Input type="text" ref={nameRef}/>
                <button onClick={handleChangeName}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;
