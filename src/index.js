import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import About from './pages/about/about';
import Skill from './pages/skils/skil';
import TechStack from './pages/techStack.js/techStack';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header />,
    children:[
      {
        index:true,
        path:'/',
        element:<App />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/tech-stack',
        element:<TechStack />
      },
      {
        path:'/projects',
        element:<Project />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
