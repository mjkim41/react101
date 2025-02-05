import './App.css';
import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import CourseList from "./components/CourseGoals/CourseList.jsx";

// 컴포넌트
const App = () => {

    return (
        <div>
            <section id={'goal-form'}>
                <CourseInput/>
            </section>
            <section id='goals'>
                <CourseList />
            </section>
        </div>
    );
}

export default App;