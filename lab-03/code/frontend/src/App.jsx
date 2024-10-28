// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import './App.css';

// PÁGINAS
import LoginPage from './pages/LoginPage';
import CadastroAluno from './pages/Cadastro-Aluno/CadastroAluno';
import HomePage from './pages/PaginaInicial/HomePage';
import EmpresaList from './pages/Empresas/EmpresaList';
import AlunoList from './pages/Alunos/AlunosList';
import EditarDadosAluno from './pages/Alunos/EditarDadosAluno';

// COMPONENTE
import Navbar from './components/NavBar';

// IMPORTANDO O UserProvider
import { UserProvider } from './hooks/UserContext'; // Ajuste o caminho conforme necessário
import CadastroEmpresa from './pages/Cadastro-Empresa/CadastroEmpresa';
import EditarDadosEmpresa from './pages/Empresas/EditarDadosEmpresa';

function App() {
  return (
    <UserProvider> {/* Envolvendo a aplicação com o UserProvider */}
      <div>
        <Navbar /> {/* Incluindo a Navbar */}
        <Routes>
          {/* Rota pública: Login */}
          <Route path="/" element={<LoginPage />} />
          <Route path='/cadastro-aluno' element={<CadastroAluno />} />
          <Route path='/cadastro-empresa' element={<CadastroEmpresa />} />
          <Route path='/pagina-inicial' element={<HomePage />} />
          <Route path='/listar-empresas' element={<EmpresaList />} />
          <Route path='/listar-alunos' element={<AlunoList />} />
          <Route path='/editar-alunos/:id' element={<EditarDadosAluno />} />
          <Route path='/editar-empresas/:id' element={<EditarDadosEmpresa />} />


        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;