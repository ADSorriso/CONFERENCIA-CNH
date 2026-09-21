import { AlertTriangle, CheckCircle2, Clock3, FileCheck2, Users, XCircle } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ProgressCard from "../components/ProgressCard";
import MotoristaTable from "../components/MotoristaTable";
import MotoristaModal from "../components/MotoristaModal";
import { mockMotoristas } from "../data/mockMotoristas";
import type { Motorista } from "../types/motorista";

export default function Dashboard() {
  const [selected, setSelected] = useState<Motorista | null>(null);
  const [paused, setPaused] = useState(false);
  return <><Header title="Dashboard" subtitle="Visão geral da conferência de motoristas"/>
    <div className="stats-grid">
      <StatCard title="Total de motoristas" value="600" info="Arquivo atual" icon={<Users/>} tone="blue"/>
      <StatCard title="Processados" value="347" info="58% do total" icon={<FileCheck2/>} tone="purple"/>
      <StatCard title="Conferidos" value="320" info="92% dos processados" icon={<CheckCircle2/>} tone="green"/>
      <StatCard title="Pendentes" value="253" info="Aguardando" icon={<Clock3/>} tone="gray"/>
      <StatCard title="Atenção" value="18" info="Revisão manual" icon={<AlertTriangle/>} tone="yellow"/>
      <StatCard title="Erros" value="9" info="Necessitam revisão" icon={<XCircle/>} tone="red"/>
    </div>
    <ProgressCard processed={347} total={600} paused={paused} onPause={() => setPaused(true)} onContinue={() => setPaused(false)} onCancel={() => setPaused(true)}/>
    <div className="panel"><div className="section-head"><div><h2>Últimas consultas</h2><p>Atividade recente do processamento.</p></div></div><MotoristaTable data={mockMotoristas.slice(0,8)} onView={setSelected}/></div>
    {selected && <MotoristaModal motorista={selected} onClose={() => setSelected(null)}/>}
  </>;
}