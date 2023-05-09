import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Home, SingleItem, RootLayout, PokeSingle, Overview } from './pages'
import { ErrorPage } from './components'
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/single" element={<SingleItem />} />
      <Route path="/:pokeNameCode" element={<PokeSingle />} />
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
