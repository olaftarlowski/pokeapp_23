import { PokeListProvider } from './store/AppContext';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import { Home, SingleItem, RootLayout, PokeSingle, Overview } from './pages'
import { ErrorPage } from './components'
import './App.css'

import { fetchRegionKanto as Rootloader } from "./utils/api";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
      loader={Rootloader}
    >
      <Route path="/" element={<Navigate to="kanto" />} />
      <Route path="kanto" element={<Home />} />
      <Route path="overview" element={<Overview />} />
      <Route path="single" element={<SingleItem />} />
      <Route path="/:page/:pokeNameCode" element={<PokeSingle />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

const App = () => {

  return (
    <PokeListProvider>
      <RouterProvider router={router} />
    </PokeListProvider>
  );
}

export default App;
