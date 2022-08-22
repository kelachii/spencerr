import './App.scss';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomeComp from './component/pages/Home';
import ReactDOM from "react-dom/client";
import SharedComp from './component/pages/SharedComp';
import ServicesComp from './component/pages/Services';
import ProductComp from './component/pages/Product';
import ErrorComp from './component/pages/Error';
import Login from './component/pages/Login';
import SignUp from './component/pages/Signup'

export default function App() {
  return (
    < div className="App">
      <Routes>

        <Route path='/' element={<SharedComp />}>
          <Route index element={<HomeComp />} />
          <Route path='/Product' element={<ProductComp />} />
          <Route path='/Services' element={<ServicesComp />} />
        </Route>

        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<ErrorComp />} />
        <Route path='/Signup' element={<SignUp />} />

      </Routes>

      <Outlet />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
