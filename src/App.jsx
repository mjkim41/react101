import './App.css';
import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import CourseList from "./components/CourseGoals/CourseList.jsx";
import {useState} from "react";

// 컴포넌트
const App = () => {

    // 목표 쌓아야 되니까 배열로 관리
    const [goals, setGoals] = useState([]);

    // 바구니 함수(CourseInput에 전달할 함수)
    const onAddGoal = ( newGoal ) => {
        setGoals( [ ...goals, newGoal ] );
    }

    // 바구니 함수(CourItem에 지울 li의 id 알려달라고 전달할 함수)
    const onDeleteGoal = ( goal ) => {
        console.log(goal);
    }

    return (
        <div>
            <section id={'goal-form'}>
                <CourseInput onAdd={ onAddGoal }/>
            </section>
            <section id='goals'>
                {/* onDelete = 자식한테 지울 li 받아오는 것 */}
                <CourseList items={goals} onDelete={ onDeleteGoal }/>
            </section>
        </div>
    );
}

export default App;