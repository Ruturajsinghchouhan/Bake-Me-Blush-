import './App.css';


import Banner from './Componets/BannerComponets/Banner';
import Nav from './Componets/NavComponets/Nav';
import Menu from './Componets/MenuComponets/Menu';
import About from './Componets/AboutComponets/About';
import Contact from './Componets/ContactUsComponents/Contact';
import Footer from './Componets/FooterComponets/Footer';
import Login from './Componets/LoginComponets/login';
import Register from './Componets/RegistrationComponets/Register';
import Choko from './Componets/chocolateCake/chocolateCake';
import Regular from './Componets/RegularCakecomponent/Recake';
import Fusion from './Componets/Fusioncakecomponent/Fecake';
import Open from './Componets/OpenComponest/Open';
import AddCategory from './Componets/AddCategoryComponent/AddCategory'
import AddSubCategory from './Componets/AddSubCategoryComponent/AddSubCategory'
import ManageUsers from './Componets/ManageUserComponent/ManageUser'
import AdminHome from './Componets/AdminHomeComponent/AdminHome';
import Logout from './Componets/LogoutComponent/Logout';
import Payment from './Componets/PaymentOption/PaymentOption';
import ManageOrders from './Componets/ManageOders/ManageOders';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from './Componets/RegularCakecomponent/Recake';
import ManageContacts from './Componets/ManageContacts/ManageContacts';
import MyOrders from './Componets/MyOrders/MyOrders';

function App() {
  return (
    <>
      <Nav />
      <Banner />

      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

        <Route path="/chocolateCake" element={<Choko />} />
        <Route path="/Recake" element={<CategoryPage />} />
        <Route path="/Fecake" element={<Fusion />} />
        <Route path="/product" element={<Open />} />

        <Route path="/category/:catnm" element={<Regular />} /> {/* ✅ Add this */}

        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-subcategory" element={<AddSubCategory />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/manage-oders" element={<ManageOrders />} />
        <Route path="/admin/contacts" element={<ManageContacts />} />
        <Route path="/orders" element={<MyOrders />} />
        


        

      </Routes>

      <Footer />
    </>
  );
}

export default App;
