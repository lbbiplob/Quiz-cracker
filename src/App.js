
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layouts from './Layouts/Layouts';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quizes from './components/Quizes/Quizes';
import StartQuiz from './components/StartQuiz/StartQuiz';

function App() {
  const router = createBrowserRouter([
        {
      path: '/',
      loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
      element: <Layouts></Layouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'quiz',
          element: <Quizes></Quizes>
        },
        {
          path: 'quiz/:quizId',
          element: <StartQuiz></StartQuiz>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blogs></Blogs>
        }
      ]
    }
  ])
    
  
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
