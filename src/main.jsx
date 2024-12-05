import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import AddressAdd from './components/AddressAdd.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProfileBodyInput from './components/ProfileBodyInput.jsx'
import EditPayment from './components/EditPayment.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/SignUp' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/CheckOut' element={<CheckOutPage/>}/>



      <Route path='/Payment' element={<PaymentPage/>}/>
      


      <Route path='/AdddressAdd' element={<AddressAdd/>}/>


      <Route path='/Profile' element={<ProfilePage/>}/>

      <Route path='/ProfileBodyInput' element={<ProfileBodyInput/>}/>


      <Route path='/EditPay' element={<EditPayment/>}/>










    </Routes>

    </BrowserRouter>
    
  </StrictMode>,
)
