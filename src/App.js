import './App.css';
import TimetablePage from './pages/timetablepage/TimetablePage';
import SideBar from './components/common/sidebar/SideBar';
import Attendance from './pages/attendance/Attendance';
import ExamPage from './pages/exams/ExamPage';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom'
import Assignments from './pages/assignments/Assignments';

function App() {
  return (
    <div className="App">
      {/* Background Overlay */}
      <div className='bg-overlay'>
        <div className='bg-gradient'/>
        <div className='bg-empty'/>
      </div>

      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exams' element={<ExamPage/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/assignments' element={<Assignments/>}/>
        <Route path='/timetablepage' element={<TimetablePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
