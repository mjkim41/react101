import React, {forwardRef} from 'react';

const InputComponent = (props, ref) => {
    return (
        <input type={props.type} ref={ref}/>
    );
};

const Input = forwardRef(InputComponent);

export default Input;