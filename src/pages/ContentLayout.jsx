// import { Header } from '../components/Header';
import Header from '../components/Header';
import './ContentLayout.css'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';


export function ContentLayout() {
  return (
    <div className='layout'>
      
        <Header />
    
      <main>
        <Outlet />
      </main>
      
        <Footer />
      </div>
    
  );
}