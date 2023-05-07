import {
  // Routes,
  Route,
  // Navigate
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Home, SingleItem, RootLayout } from './pages'
import {
  ErrorPage, Sidebar
} from './components'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/single" element={<SingleItem />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Route>
  )
);

const App = () => {

  return (
      <RouterProvider router={router} />
  )
}

export default App
