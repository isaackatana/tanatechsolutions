import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import Courses from './pages/Courses.jsx'
import Portfolio from './pages/Projects.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import EnrollmentPage from './pages/EnrollmentPage.jsx'
import PaymentConfirmation from './pages/PaymentConfirmation.jsx'
import Projects from './pages/Projects.jsx'
import BookingPage from './pages/BookingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '', element: <Home /> }, 
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/courses', element: <Courses /> },
      { path: '/course/:courseId', element: <CourseDetails /> },
      { path: '/enroll/:courseId', element: <EnrollmentPage /> },
      {path:"/payment-confirmation", element: <PaymentConfirmation />},
      
  { path: '/book', element: <BookingPage/> },    
    ],
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> }, // 404 fallback
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)