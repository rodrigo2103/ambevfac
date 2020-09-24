import React from 'react';
import history from './history';
import { Route, Router } from 'react-router-dom';

import "./style.sass";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home/';
import Login from './components/Login/';
import Cadastro from './components/Cadastro/Cadastro';
import Registerfactory from './components/Registerfactory/Registerfactory';
import Registerequipment from './components/Registerequipment/Registerequipment';
import Renamefactory from './components/Renamefactory/Renamefactory';
import Editfactory from './components/Editfactory/Editfactory';
import Alterfactory from './components/Alterfactory/Alterfactory';

import Factory from './components/Factory/Factory';





import Deletefactory from './components/Deletefactory/Deletefactory';
import Pool from './components/Itens/Pool';
import Software from './components/Itens/Software';
import Equipment from './components/Itens/Equipment';
//import Loc from './components/Map/Home';
import Loc from './components/Loc/Loc';
import ListaPessoas from './components/screens/pessoas';
import FormularioPessoa from './components/screens/pessoas/form';
//import Sidenav from './components/Sidenav/Sidenav';
import Sidenav2 from './components/Sidenav2/Sidenav2';
import Sidenav3 from './components/Sidenav3/Sidenav3';
//import Dashboard from './components/Dashboard/Dashboard'
//links...

function App() {
  return (
    
    <div class="scene">
      

      <Header></Header>

      <Router history={history}>

        <div class="body">
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/cadastro' component={Cadastro}></Route>
          <Route path='/factory' component={Factory}></Route>
          
          <Route path='/pool' component={Pool}></Route>
          <Route path='/software' component={Software}></Route>
          <Route path='/equipment' component={Equipment}></Route>
          <Route path='/registerfactory' component={Registerfactory}></Route>
          <Route path='/registerequipment' component={Registerequipment}></Route>
          <Route path='/renamefactory' component={Renamefactory}></Route>
          <Route path='/deletefactory' component={Deletefactory}></Route>
          <Route path='/alterfactory' component={Alterfactory}></Route>
          <Route path='/editfactory' component={Editfactory}></Route>

          

          <Route exact path="/home" render={props => <Home {...props} />} />
          <Route path='/map' component={Map}></Route>
          <Route path='/loc' component={Loc}></Route>
          <Route exact={true} path="/pessoas" component={ListaPessoas} />
          <Route path="/pessoa/nova" component={FormularioPessoa} />
          <Route path="/pessoa/:codigo" component={FormularioPessoa} />
          
          <Route path='/sidenav2' component={Sidenav2}></Route>
          <Route path='/sidenav3' component={Sidenav3}></Route>
            
        </div>

      </Router>
      <Footer></Footer>
    </div>
     
     
  );
}

export default App;

