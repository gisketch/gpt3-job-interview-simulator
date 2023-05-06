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
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={false}>
            <AppPage />
          </ProtectedRoute>
        }
      >
        <Route path="/i/:id" element={<Interview />} />
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
