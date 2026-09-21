import { Save, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";

export default function Configuracoes(){
 const [saved,setSaved]=useState(false); const [headless,setHeadless]=useState(false);
 function save(){localStorage.setItem("settings",JSON.stringify({headless}));setSaved(true);setTimeout(()=>setSaved(false),2000)}
 return <><Header title="Configurações" subtitle="Ajuste o comportamento da interface"/>
 <div className="settings-grid"><div className="panel"><h2>Geral</h2><p>Informações básicas do sistema.</p><label>Nome do sistema<input value="DETRAN-MT CNH Checker" readOnly/></label><label>URL do portal<input value="https://www.detran.mt.gov.br/consulte-sua-habilitacao" readOnly/></label></div>
 <div className="panel"><h2>Processamento</h2><p>Preferências para a futura integração.</p><label>Intervalo mínimo (ms)<input type="number" defaultValue="1500"/></label><label>Intervalo máximo (ms)<input type="number" defaultValue="4000"/></label><label>Limite por execução<input type="number" defaultValue="600"/></label><div className="toggle-row"><span><b>Mostrar navegador</b><small>Permitir visualização da automação quando integrada.</small></span><button className={headless?"toggle":"toggle on"} onClick={()=>setHeadless(!headless)}><i/></button></div></div>
 <div className="panel"><h2><SlidersHorizontal size={19}/> Interface</h2><p>Preferências visuais são salvas neste navegador.</p><label>Tema<select onChange={e=>{document.documentElement.classList.toggle("dark",e.target.value==="dark");localStorage.setItem("theme",e.target.value)}}><option value="light">Claro</option><option value="dark">Escuro</option></select></label><label>Densidade<select><option>Confortável</option><option>Compacta</option></select></label></div></div>
 <div className="settings-save"><button className="primary" onClick={save}><Save size={18}/> {saved?"Salvo!":"Salvar configurações"}</button></div></>
}