import { X, Clock3, UserRound, FileText, History } from "lucide-react";
import type { Motorista } from "../types/motorista";
import StatusBadge from "./StatusBadge";

function maskCpf(cpf: string) {
  return `***.***.***-${cpf.slice(-2)}`;
}

export default function MotoristaModal({ motorista, onClose }: { motorista: Motorista; onClose: () => void }) {
  return <div className="modal-backdrop" onMouseDown={onClose}>
    <div className="modal" onMouseDown={e => e.stopPropagation()}>
      <div className="modal-head"><div><h2>Detalhes do motorista</h2><p>Informações da conferência</p></div><button className="icon-btn" onClick={onClose}><X/></button></div>
      <div className="detail-grid">
        <div><span>Nome</span><strong>{motorista.nome}</strong></div>
        <div><span>CPF</span><strong>{maskCpf(motorista.cpf)}</strong></div>
        <div><span>RENACH</span><strong>{motorista.renach}</strong></div>
        <div><span>Status</span><StatusBadge status={motorista.status}/></div>
        <div><span>Resultado</span><strong>{motorista.resultado}</strong></div>
        <div><span>Data</span><strong>{motorista.dataConsulta}</strong></div>
        <div><span>Tempo</span><strong>{motorista.tempoConsulta}</strong></div>
        <div><span>Tentativas</span><strong>{motorista.tentativas}</strong></div>
      </div>
      <div className="history"><h3><History size={17}/> Histórico</h3>
        <p><b>14:30</b> <span>Consulta iniciada</span></p>
        <p><b>14:31</b> <span>Dados enviados</span></p>
        <p><b>14:31</b> <span>Resultado recebido</span></p>
      </div>
      {motorista.mensagem && <div className="alert warning"><FileText size={18}/><div><b>Mensagem</b><p>{motorista.mensagem}</p></div></div>}
      <button className="primary wide" onClick={onClose}>Fechar</button>
    </div>
  </div>;
}