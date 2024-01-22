import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ChooseSubject from './pages/chooseSubject/chooseSubject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chooseSubject" element={<ChooseSubject/>} />
      </Routes>
    </Router>
  );
}

export default App;
