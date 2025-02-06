import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import CourseList from "./components/CourseGoals/CourseList.jsx";
import {useState} from "react";

const App = () => {

    // 목표데이터들의 묶음배열
    const [goals, setGoals] = useState([
        {
            id: 'g1',
            text: '테스트 데이터1',
        },
        {
            id: 'g2',
            text: '테스트 데이터2',
        },
    ]);

    // CourseInput에게 전달할 함수
    const onAddGoal = (goal) => {
        setGoals([...goals, goal]);
    };

    // console.log(goals);
    // 삭제를 위한 함수
    const onDeleteGoal = (id) => {
        // id를 통해 해당 객체를 탐색한 후 배열에서 제거

        setGoals(goals.filter((g) => g.id !== id));
        // for (let i = 0; i < goals.length; i++) {
        //   if (goals[i].id === id) {
        //     const copyGoals = [...goals];
        //     copyGoals.splice(i, 1);
        //     setGoals(copyGoals);
        //   }
        // }
    };

    return (
        <div>
            <section id='goal-form'>
                <CourseInput onAdd={onAddGoal}/>
            </section>
            <section id='goals'>
                <CourseList items={goals} onDelete={onDeleteGoal}/>
            </section>
        </div>
    );
}

export default App;