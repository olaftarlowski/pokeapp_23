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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    >
      <Route path="/" element={<Navigate to="pokedex" />} />
      <Route path="pokedex" element={<Home />} />
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
