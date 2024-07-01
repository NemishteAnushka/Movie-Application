import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SinglePageDetail from "./pages/SinglePageDetail";
//import loader
import { loader as MovieLoader } from "./pages/Home";
//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route path="/detail/:imdbID" element={<SinglePageDetail />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
