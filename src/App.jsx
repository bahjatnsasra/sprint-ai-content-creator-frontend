import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ChooseSubject from './pages/chooseSubject/chooseSubject';
import GenaratedSubjects from './pages/genaratedSubjects/genaratedSubjects';
import LoadingPage from './pages/loadingPage1/loadingPage';
import ChooseSubjectEnd from './pages/chooseSubjectEnd/chooseSubjectEnd';
import HomePageCreatePath from './pages/homePageCreatePath/homePageCreatePath';
import { useState } from 'react';

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
        <Route path="/chooseSubjectEnd" element={<ChooseSubjectEnd mainObj = {mainObj} updateMainObj = {updateMainObj}/>} />
        <Route path="/homePageCreatePath" element={<HomePageCreatePath mainObj = {mainObj}/>} />
      </Routes>
    </Router>
  );
}

export default App;
