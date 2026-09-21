import { ArrowRight, CheckCircle2, FileSpreadsheet, UploadCloud } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import UploadArea from "../components/UploadArea";

export default function Importar() {
  const [file,setFile]=useState<{name:string;size:string}|null>(null);
  const [step,setStep]=useState(1);
  return <><Header title="Importar Excel" subtitle="Adicione a lista de motoristas para conferência"/>
    <div className="steps"><span className="done">1. Arquivo</span><span className={step>=2?"done":""}>2. Mapeamento</span><span className={step>=3?"done":""}>3. Prévia</span></div>
    {!file ? <div className="panel"><UploadArea onFile={(name,size)=>setFile({name,size})}/></div> :
      <div className="panel">
        <div className="file-card"><div className="file-icon"><FileSpreadsheet/></div><div><b>{file.name}</b><span>{file.size} · 600 registros encontrados</span></div><CheckCircle2 className="green-icon"/></div>
        <div className="mapping"><h2>Mapear colunas</h2><p>Confirme quais colunas representam cada informação.</p><label>Nome do motorista<select><option>Nome</option><option>Nome completo</option></select></label><label>CPF<select><option>CPF</option></select></label><label>RENACH<select><option>RENACH</option></select></label></div>
        <div className="preview"><h2>Prévia dos dados</h2><div className="preview-grid"><b>Nome</b><b>CPF</b><b>RENACH</b>{["João da Silva","Maria Souza","Carlos Oliveira","Ana Santos","Pedro Almeida"].map((n,i)=><div className="preview-row" key={n}><span>{n}</span><span>***.***.***-{i+10}</span><span>MT{10000000+i}</span></div>)}</div></div>
        <button className="primary continue" onClick={()=>setStep(3)}>Confirmar importação <ArrowRight size={18}/></button>
      </div>}
  </>;
}