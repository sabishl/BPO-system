import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NewProjects from './pages/NewProjects';
import SingleProject from './pages/SingleProject';
import OngoingProjects from './pages/OngoingProject';
import CompletedProjects from './pages/CompletedProjects';
import CreateAccount from './pages/CreateAccount';
import OngoingSingleProject from './pages/OngoingSingleProject';
import CompletedSingleProject from './pages/CompletedSingleProject';
import Login from './pages/Login';
import ClientLogin from './pages/ClientLogin';
import EmployeeLogin from './pages/EmployeeLogin';
import ClientHeader from './components/ClientHeader';
import EmployeeHeader from './components/EmployeeHeader';
import YourProjects from './pages/YourProjects';

import CreateProject from './pages/CreateProject';
import ClientSingleProject from './pages/ClientSingleProject';
import EmployeeProjects from './pages/EmployeeProjects';
import EmployeeProject from './pages/EmployeeProject';
import EmployeeHomePage from './pages/EmployeeHomePage';
import ClientHomePage from './pages/ClientHomePage';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />

        <Route path="/employee-home" element={<EmployeeHome />} />  
        <Route path="/emp-projects" element={<EmployeeYourProjects/>} />
        <Route path="/emp-projects/:id" element={<EmployeeSingleProjects/>} />  

        <Route path="/client-home" element={<ClientHome />} />  
        <Route path="/your-projects" element={<ClientYourProjects/>} />
        <Route path="/your-projects/:id" element={<ClientSingleProjects/>} />        
        <Route path="/project-requests" element={<ClientProjectRequest/>} />

        <Route path="/home" element={<AdminHome />} /> 
        <Route path="/create-account" element={<AdminCreateAccount />} />
        <Route path="/projects" element={<AdminNewProjects />} />
        <Route path="/projects/:id" element={<AdminNewSingleProjects />} />
        <Route path="/ongoing-projects" element={<AdminOngoingProjects />} />
        <Route path="/ongoing-projects/:id" element={<AdminOngoingSingleProjects />} />
        <Route path="/completed-projects" element={<AdminCompletedProjects />} />
        <Route path="/completed-projects/:id" element={<AdminCompletedSingleProjects />} />

      </Routes>
    </Router>
  );
};

const AdminHome = () => { 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminCreateAccount = () => { 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminNewProjects = () => { 
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<NewProjects />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminNewSingleProjects = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<SingleProject />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminOngoingProjects = () => { 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<OngoingProjects />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminOngoingSingleProjects = () => { 
  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<OngoingSingleProject />} />
      </Routes>
      <Footer />
    </>
  );
};

const AdminCompletedProjects = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<CompletedProjects />} />

      </Routes>
      <Footer />
    </>
  );
};

const AdminCompletedSingleProjects = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<CompletedSingleProject />} />
      </Routes>
      <Footer />
    </>
  );
};



const ClientHome = () => { 
  return (
    <>
      <ClientHeader/>
      <Routes>
      <Route path="/" element={<ClientHomePage/>} />
      </Routes>
      <Footer />
    </>
  );
};

const ClientYourProjects = () => { 
  return (
    <>
      <ClientHeader/>
      <Routes>
      <Route path="/" element={<YourProjects />} />
      </Routes>
      <Footer />
    </>
  );
};

const ClientSingleProjects = () => { 
  return (
    <>
      <ClientHeader/>
      <Routes>
      <Route path="/" element={<ClientSingleProject />} />
      </Routes>
      <Footer />
    </>
  );
};

const ClientProjectRequest = () => { 
  return (
    <>
      <ClientHeader/>
      <Routes>
      <Route path="/" element={<CreateProject />} />
      </Routes>
      <Footer />
    </>
  );
};

const EmployeeHome = () => { 
  return (
    <>
      <EmployeeHeader/>
      <Routes>
        <Route path="/" element={<EmployeeHomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

const EmployeeYourProjects = () => { 
  return (
    <>
      <EmployeeHeader/>
      <Routes>
      <Route path="/" element={<EmployeeProjects/>} />
      </Routes>
      <Footer />
    </>
  );
};

const EmployeeSingleProjects = () => {
  return (
    <>
      <EmployeeHeader/>
      <Routes>
      <Route path="/" element={<EmployeeProject />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;
