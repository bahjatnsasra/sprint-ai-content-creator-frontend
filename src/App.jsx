import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ChooseSubject from './pages/chooseSubject/chooseSubject';
import GenaratedSubjects from './pages/genaratedSubjects/genaratedSubjects';
import LoadingPage from './pages/loadingPage1/loadingPage';
import LoadingPage2 from './pages/loadingPage2/loadingPage';
import ChooseSubjectEnd from './pages/chooseSubjectEnd/chooseSubjectEnd';
import HomePageCreatePath from './pages/homePageCreatePath/homePageCreatePath';
import StructurePage from './pages/structurePage/structurePage';
import Day1 from './pages/days/day1';
import Day2 from './pages/days/day2';
import Day3 from './pages/days/day3';
import Day4 from './pages/days/day4';
import Day5 from './pages/days/day5';
import WatchPath from './pages/watchPath/watchPath';


function App() {
  const [mainObj, setMainObj] = useState({sub1: '' , sub2: ''})

  function updateMainObj(sub1, sub2) {
    const newMainObj = {...mainObj}
    if(sub1) {newMainObj.sub1 = sub1}
    if(sub2) {newMainObj.sub2 = sub2}
    setMainObj(newMainObj)
  }

  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chooseSubject" element={<ChooseSubject updateMainObj = {updateMainObj}/>} />
        <Route path="/genaratedSubjects" element={<GenaratedSubjects updateMainObj = {updateMainObj}/> } />
        <Route path="/loadingPage" element={<LoadingPage mainObj = {mainObj} />} />
        <Route path="/loadingPage2" element={<LoadingPage2 mainObj = {mainObj} />} />
        <Route path="/chooseSubjectEnd" element={<ChooseSubjectEnd mainObj = {mainObj} updateMainObj = {updateMainObj}/>} />
        <Route path="/homePageCreatePath" element={<HomePageCreatePath mainObj = {mainObj}/>} />
        <Route path="/structurePage" element={<StructurePage/>} />

        <Route path="/day1" element={<Day1/>} />
        <Route path="/day2" element={<Day2/>} />
        <Route path="/day3" element={<Day3/>} />
        <Route path="/day4" element={<Day4/>} />
        <Route path="/day5" element={<Day5/>} />

        <Route path="/watchPath" element={<WatchPath/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
