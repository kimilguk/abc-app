import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouterMenu from './RouterMenu';
import { BrowserRouter, Routes, Route } from "react-router-dom";//npm install react-router-dom
import MovieListComponent from './components/MovieListComponent';
//import Dashboard from './dashboard/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterMenu />} />
        <Route path="/app" element={<App />} />
        <Route path="/movie" element={<MovieListComponent />} />
      </Routes>
  </BrowserRouter>
  /*
  <React.StrictMode>
    <Dashboard />
    <App />
  </React.StrictMode>
  */
);

/* var rootDiv = document.getElementById('root');
var firstDiv = document.createElement('div');
var img = document.createElement('img');
img.setAttribute('src', 'http://wwww.easyspub.co.kr/images/logo_footer.png');
firstDiv.append(img);
var subDiv = document.createElement('div');
subDiv.innerText = '자바스크립트 안에 HTML태그를 사용할 수 있다.';
firstDiv.append(subDiv);
rootDiv.append(firstDiv); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
