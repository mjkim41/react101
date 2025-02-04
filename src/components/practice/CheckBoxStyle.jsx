import React, { useState } from 'react';
import './CheckBoxStyle.css';

function CheckBoxStyle() {

    /*
        1. input[checkbox]에 change 이벰트가 걸려서
        2. 체크상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
        3. label 클래스를 유동적으로 변경해야 함.
     */

    // 2. 상태 변수로 관리(초기값 : unchcked)
    const [isChecked, setIsChecked] = useState(false);

    const checkboxStyleHandler = (e) => {
        // 2. 체크상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
        setIsChecked(!isChecked);
        console.log(isChecked);
    }

    return (
        <div className="checkbox-container">
            {/*1. input[checkbox]에 change 이벰트가 걸려서  */}
            <input
                type="checkbox"
                id="styled-checkbox"
                onChange = { checkboxStyleHandler }
            />
            <label
                htmlFor="styled-checkbox"
                className={ isChecked ? 'checked' : 'unchecked' }
            >
                Check me!
            </label>
        </div>
    );
}

export default CheckBoxStyle;