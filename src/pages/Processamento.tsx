import { AlertTriangle, Play, RotateCcw, ShieldAlert } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import CaptchaModal from "../components/CaptchaModal";

export default function Processamento() {
  const [paused,setPaused]=useState(false); const [captcha,setCaptcha]=useState(false);
  return <><Header title="Processamento" subtitle="Acompanhe a conferência em tempo real"/>
    <ProgressCard processed={347} total={600} paused={paused} onPause={()=>setPaused(true)} onContinue={()=>setPaused(false)} onCancel={()=>setPaused(true)}/>
    <div className="process-grid"><div className="panel current"><div className="eyebrow">MOTORISTA ATUAL</div><h2>João da Silva</h2><div className="current-fields"><span>CPF <b>***.***.***-00</b></span><span>RENACH <b>MT10000001</b></span></div><div className="processing-line"><span className="spinner"/> Consultando dados...</div></div>
    <div className="panel"><div className="eyebrow">AÇÕES</div><button className="primary wide" onClick={()=>setCaptcha(true)}><ShieldAlert size={18}/> Simular CAPTCHA</button><button className="wide"><RotateCcw size={18}/> Reiniciar pendentes</button></div></div>
    <div className="alert info"><AlertTriangle size={20}/><p>Se o portal solicitar verificação humana, o processamento deve ser pausado e o operador deverá realizar a intervenção no navegador.</p></div>
    {captcha&&<CaptchaModal onContinue={()=>setCaptcha(false)} onCancel={()=>setCaptcha(false)}/>}
  </>;
}