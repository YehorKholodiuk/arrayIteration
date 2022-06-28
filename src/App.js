import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";

function App() {
    const courses = [
        {
            id: 'jkjij87',
            title: 'React',
            price: 235,
        },
        {
            id: 'jk8787j87',
            title: 'JS',
            price: 835,

        },
        {
            id: 'jkjij87',
            title: 'HTML',
            price: 2035,

        },
    ]
    return (
        <div>
            <Menu courses={courses}/>
        </div>
    );
}

export default App;
