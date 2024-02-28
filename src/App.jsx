import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ChooseSubject from './pages/chooseSubject/chooseSubject';
import GenaratedSubjects from './pages/genaratedSubjects/genaratedSubjects';
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
  const [programPlan, setProgramPlan] = useState({
    id: '',
    subject: '', 
    structure : 'none',
    goals: '', 
    contentType: false, 
    picture: ''
  })
  const [weekPlanId, setWeekPlanId] = useState()
  const [daysList, setDaysList] = useState([])

  function updateDaysList(index, object) {
    const daysListDup = [...daysList]
    daysListDup[index] = object
    setDaysList(daysListDup)
    console.log(daysListDup);
}


  
  function updateMainObj(sub1, sub2) {
    const newMainObj = {...mainObj}
    if(sub1) {newMainObj.sub1 = sub1}
    if(sub2) {newMainObj.sub2 = sub2}
    setMainObj(newMainObj)
  }
  function updateProgramPlanData(key, value) {
    const programPlanDataDup = {...programPlan}
    programPlanDataDup[key] = value
    setProgramPlan(programPlanDataDup)
}

console.log(programPlan);
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chooseSubject" element={<ChooseSubject updateProgramPlanData = {updateProgramPlanData} updateMainObj = {updateMainObj}/>} />
        <Route path="/genaratedSubjects" element={<GenaratedSubjects updateMainObj = {updateMainObj}/> } />
        <Route path="/chooseSubjectEnd" element={<ChooseSubjectEnd updateProgramPlanData = {updateProgramPlanData} mainObj = {mainObj}  updateMainObj = {updateMainObj}/>} />
        <Route path="/homePageCreatePath" element={<HomePageCreatePath updateProgramPlanData = {updateProgramPlanData}  programPlan = {programPlan} />} />
        <Route path="/structurePage" element={<StructurePage updateDaysList = {updateDaysList} weekPlanId = {weekPlanId} setWeekPlanId = {setWeekPlanId} updateProgramPlanData = {updateProgramPlanData} programPlan = {programPlan} />} />

        <Route path="/day1" element={<Day1 weekPlanId = {weekPlanId} updateDaysList = {updateDaysList} daysList = {daysList} programPlan = {programPlan} />} />
        <Route path="/day2" element={<Day2 weekPlanId = {weekPlanId} updateDaysList = {updateDaysList} daysList = {daysList} programPlan = {programPlan} />} />
        <Route path="/day3" element={<Day3 weekPlanId = {weekPlanId} updateDaysList = {updateDaysList} daysList = {daysList} programPlan = {programPlan} />} />
        <Route path="/day4" element={<Day4 weekPlanId = {weekPlanId} updateDaysList = {updateDaysList} daysList = {daysList} programPlan = {programPlan} />} />
        <Route path="/day5" element={<Day5 weekPlanId = {weekPlanId} updateDaysList = {updateDaysList} daysList = {daysList} programPlan = {programPlan} />} />

        <Route path="/watchPath" element={<WatchPath daysList = {daysList}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
