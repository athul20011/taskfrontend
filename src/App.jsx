import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Admin from './component/Admin'
import Add from './component/Add'
import Edit from './component/Edit'
import View from './component/View'
import PageNotFound from './component/PageNotView'

function App() {
  return (
    <div className="App">
      <header>
      <Header/>

      </header>

      <section>
        <Routes>
          <Route path='/' element={<Admin/>} />
          <Route path='add' element={<Add/>}/>
          <Route path='edit/:id' element={<Edit/>}/>
          <Route path='view/:id' element={<View/> }/>
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>


      </section>
      
      <footer>
      <Footer/>

      </footer>

    </div>
  );
}

export default App;