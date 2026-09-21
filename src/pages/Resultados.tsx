import { Download, FileCheck2, AlertTriangle, XCircle } from "lucide-react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import MotoristaTable from "../components/MotoristaTable";
import { mockMotoristas } from "../data/mockMotoristas";

export default function Resultados() {
  return <><Header title="Resultados" subtitle="Resultados da conferência atual"/>
    <div className="stats-grid three"><StatCard title="Total" value="347" info="Processados" icon={<FileCheck2/>} tone="blue"/><StatCard title="Atenção" value="18" info="Revisão manual" icon={<AlertTriangle/>} tone="yellow"/><StatCard title="Erros" value="9" info="Necessitam revisão" icon={<XCircle/>} tone="red"/></div>
    <div className="panel"><div className="section-head"><div><h2>Resultados</h2><p>Filtre e exporte a conferência.</p></div><div className="actions"><button className="primary"><Download size={17}/> Exportar Excel</button><button><Download size={17}/> CSV</button></div></div><MotoristaTable data={mockMotoristas.filter(m=>m.status!=="PENDENTE").slice(0,15)} onView={()=>{}}/></div>
  </>;
}