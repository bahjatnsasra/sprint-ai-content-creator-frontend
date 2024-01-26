import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ChooseSubject from './pages/chooseSubject/chooseSubject';
import GenaratedSubjects from './pages/genaratedSubjects/genaratedSubjects';
import LoadingPage from './pages/loadingPage1/loadingPage';
import ChooseSubjectEnd from './pages/chooseSubjectEnd/chooseSubjectEnd';
import HomePageCreatePath from './pages/homePageCreatePath/homePageCreatePath';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chooseSubject" element={<ChooseSubject/>} />
        <Route path="/genaratedSubjects" element={<GenaratedSubjects/>} />
        <Route path="/loadingPage" element={<LoadingPage/>} />
        <Route path="/chooseSubjectEnd" element={<ChooseSubjectEnd/>} />
        <Route path="/homePageCreatePath" element={<HomePageCreatePath/>} />
      </Routes>
    </Router>
  );
}

export default App;
