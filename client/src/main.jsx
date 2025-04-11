import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BookingPage from './pages/BookingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '', element: <Home /> }, 
      { path: '/courses', element: <Courses /> },
      { path: '/course/:courseId', element: <CourseDetails /> },
      { path: '/enroll/:courseId', element: <EnrollmentPage /> },
      {path:"/payment-confirmation", element: <PaymentConfirmation />},
      
      { path: '/book', element: <BookingPage/> },
      { path: '/about', element: <AboutPage/> },     
      { path: '/services', element: <ServicesPage/> },    
      { path: '/portfolio', element: <PortfolioPage/> },
      { path: '/blog', element: <BlogPage/> },
      { path: '/contact', element: <ContactPage/> },
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