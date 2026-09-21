import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Motoristas from "./pages/Motoristas";
import Importar from "./pages/Importar";
import Processamento from "./pages/Processamento";
import Resultados from "./pages/Resultados";
import Logs from "./pages/Logs";
import Configuracoes from "./pages/Configuracoes";

export default function App(){
 const [,setReady]=useState(false);
 useEffect(()=>{document.documentElement.classList.toggle("dark",localStorage.getItem("theme")==="dark");setReady(true)},[]);
 return <div className="app-shell"><Sidebar/><main className="main-content"><Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/motoristas" element={<Motoristas/>}/>
  <Route path="/importar" element={<Importar/>}/>
  <Route path="/processamento" element={<Processamento/>}/>
  <Route path="/resultados" element={<Resultados/>}/>
  <Route path="/logs" element={<Logs/>}/>
  <Route path="/configuracoes" element={<Configuracoes/>}/>
 </Routes></main></div>
}