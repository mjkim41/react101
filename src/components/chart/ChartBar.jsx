import React from "react";

import "./ChartBar.css";

// 월을 props.label로 받아와서
const ChartBar = ({label}) => {

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                ></div>
            </div>
            {/* props.label로 받아온 월을 입력해주기 */}
            <div className="chart-bar__label">{ label }</div>
        </div>
    );
};

export default ChartBar;
