import { useContext } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import ProtectedRoute from './routes/ProtectedRoute'

//Pages
import AppPage from './pages/AppPage'
import LandingPage from './pages/LandingPage'

//Elements
import Interview from './components/AppPage/Interview'

//ContextProviders
import { ThemeContext } from './contexts/ThemeContext'
import Settings from './components/AppPage/Settings'
import About from './components/AppPage/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<Interview />} />
        <Route path="/i/:id" element={<Interview />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element={<LandingPage />} />
    </>
  )
)

function App() {
  const { isLightMode } = useContext(ThemeContext)

  return (
    <div className={isLightMode ? '' : 'dark'}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
