import { Route, Routes } from "react-router-dom";
import { path } from "./utils/constant";
import { REGISTER, HOME, LOGIN } from "./containers/publics";

function App() {
  return (
    <div className="h-screen w-sreen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<HOME />}>
          <Route path={path.LOGIN} element={<LOGIN />} />
          <Route path={path.REGISTER} element={<REGISTER />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
