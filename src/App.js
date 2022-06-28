import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import Logo from "./Logo";

function App() {
    const siteName = 'PASV coding school'
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
            <Logo siteName={siteName}/>
            <Menu courses={courses} siteName={siteName}/>
        </div>
    );
}

export default App;
