import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rodape from './components/rodape';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './pages/pagina-produto';
import Sacola from './pages/sacola';
import Loginadm from './pages/admlogin';

import Cadastrocliente from './pages/cadastrocliente';
import LoginCliente from './pages/logincliente';
import Homepage from './pages/pagina-inicio';
import RelatoriosAdm from './pages/relatoriosadm';
import ConsultaProdutos from './pages/consultapedidos';
import Detalhespedido from './pages/detalhespedido';
import Pagamento from './pages/pagamento';
import Painel from './pages/paineladm';
import Menu from './pages/menu';
import Cadastroproduto from './pages/cadastroproduto/cadastroproduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>
        <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
        <Route path='/login/cliente' element={<LoginCliente/>}/>
        <Route path='/adm/relatorios' element={<RelatoriosAdm/>}/>
        <Route path='/adm/consulta/pedidos' element={<ConsultaProdutos/>}/>
        <Route path='/detalhespedido' element={<Detalhespedido/>}/>
        <Route path='/pagamento' element={<Pagamento/>}/>
        <Route path='/paineladm' element={<Painel/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

