import { useState } from 'react';
import './App.css';
import Images from './components/Images';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  const [ selected, setSelected ] = useState(null)
  return (
    <div className="App" style={{backgroundColor : 'black'}}>
      <Title />
      <UploadForm/>
      <Images setSelected={setSelected} />
     { selected &&  <Modal selected={selected} setSelected={setSelected} /> }
    </div>
  );
}

export default App;
