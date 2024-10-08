import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {  // Corrected function syntax
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);  // Added empty dependency array to run the effect only once

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
