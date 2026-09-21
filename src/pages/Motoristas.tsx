import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import MotoristaTable from "../components/MotoristaTable";
import MotoristaModal from "../components/MotoristaModal";
import { mockMotoristas } from "../data/mockMotoristas";
import type { Motorista, StatusMotorista } from "../types/motorista";

export default function Motoristas() {
  const [query,setQuery]=useState(""); const [filter,setFilter]=useState("TODOS"); const [selected,setSelected]=useState<Motorista|null>(null);
  const data=useMemo(()=>mockMotoristas.filter(m=>(filter==="TODOS"||m.status===filter)&&`${m.nome} ${m.cpf} ${m.renach}`.toLowerCase().includes(query.toLowerCase())),[query,filter]);
  return <><Header title="Motoristas" subtitle="Todos os motoristas importados"/>
    <div className="toolbar"><div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar por nome, CPF ou RENACH..."/></div><div className="filter"><SlidersHorizontal size={17}/><select value={filter} onChange={e=>setFilter(e.target.value)}><option value="TODOS">Todos</option>{(["PENDENTE","PROCESSANDO","SUCESSO","ATENCAO","ERRO"] as StatusMotorista[]).map(s=><option key={s}>{s}</option>)}</select></div></div>
    <div className="panel"><div className="table-top"><b>{data.length} motoristas</b><span>20 por página</span></div><MotoristaTable data={data.slice(0,20)} onView={setSelected}/><div className="pagination"><button>‹</button><span>1</span><button>2</button><button>3</button><button>›</button></div></div>
    {selected&&<MotoristaModal motorista={selected} onClose={()=>setSelected(null)}/>}
  </>;
}