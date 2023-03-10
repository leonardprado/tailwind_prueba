
//import DataTableUsers from './view/DataTableUsers'
//import DataTable from './view/DataTable'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Layout from './layout'
import Carrusel from './components/Carrusel'
import Footer from './components/Footer'
import Users from './components/Users'
import Promotion from './assets/Promotion'
import Cards from './components/Cards'




export default function App() {
  return (
    <Layout>
      <Cards />
     {/*  
     
     <Navbar />
     <Promotion />
     <Users />
     <Carrusel />
     <Login />
     <DataTable />
       <DataTableUsers /> */ }
    <Footer />
    </Layout>

  )
}
