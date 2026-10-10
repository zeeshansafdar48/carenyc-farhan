import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import Home from '@/pages/Home/Home'
import Services from '@/pages/Services/Services'
import Work from '@/pages/Work/Work'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/work', element: <Work /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
