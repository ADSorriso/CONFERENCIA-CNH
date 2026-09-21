import { Pause, Play, Square } from "lucide-react";

export default function ProgressCard({ processed, total, paused, onPause, onContinue, onCancel }: {
  processed: number; total: number; paused: boolean; onPause: () => void; onContinue: () => void; onCancel: () => void;
}) {
  const pct = total ? Math.round((processed / total) * 100) : 0;
  return <div className="panel">
    <div className="section-head"><div><h2>Processamento atual</h2><p>{paused ? "O processamento está pausado." : "Conferência em andamento."}</p></div>
      <span className={paused ? "badge badge-atencao" : "badge badge-processando"}>{paused ? "Pausado" : "Processando"}</span>
    </div>
    <div className="big-progress"><div style={{width: `${pct}%`}}/></div>
    <div className="progress-line"><strong>{processed} / {total}</strong><span>{pct}%</span></div>
    <div className="mini-stats"><div><span>Processados</span><b>{processed}</b></div><div><span>Sucesso</span><b className="green">320</b></div><div><span>Atenção</span><b className="yellow">18</b></div><div><span>Erros</span><b className="red">9</b></div><div><span>Pendentes</span><b>{Math.max(0,total-processed)}</b></div></div>
    <div className="actions"><button onClick={paused ? onContinue : onPause} className="primary">{paused ? <Play size={17}/> : <Pause size={17}/>} {paused ? "Continuar" : "Pausar"}</button><button onClick={onCancel} className="danger"><Square size={16}/> Cancelar</button></div>
  </div>;
}