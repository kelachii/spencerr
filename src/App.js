import './App.scss';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomeComp from './component/pages/Home';
import ReactDOM from "react-dom/client";
import SharedComp from './component/pages/SharedComp';
import ServicesComp from './component/pages/Services';
import ProductComp from './component/pages/Product';
import SingleBlogPage from './component/pages/SingleBlogPage';
import UpdateForm from './component/UpdateForm';
import Form from './component/Form'
import Blogs from './component/pages/Blogs';
import ErrorComp from './component/pages/Error';
import LoginComp from './component/pages/Login';
import SignupComp from './component/pages/Signup'

export default function App() {
  return (
    < div className="App">
      <Routes>

        <Route path='/' element={<SharedComp />}>
          <Route index element={<HomeComp />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='new' element={<Form />} />
          <Route path='edit' element={<UpdateForm />} />
          <Route path='Blogs/:BlogId' element={<SingleBlogPage />} />
          <Route path='/Product' element={<ProductComp />} />
          <Route path='/Services' element={<ServicesComp />} />


        </Route>

        <Route path='/Login' element={<LoginComp />} />
        <Route path='*' element={<ErrorComp />} />
        <Route path='/Signup' element={<SignupComp />} />

      </Routes>

      <Outlet />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
