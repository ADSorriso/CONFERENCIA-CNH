import { Search } from "lucide-react";
import Header from "../components/Header";

const logs=[
 ["14:32:10","João Silva","Consulta iniciada","INFO","Processamento iniciado"],
 ["14:32:13","João Silva","Resultado recebido","SUCCESS","CNH encontrada"],
 ["14:33:01","Maria Souza","Erro","ERROR","Não foi possível concluir a consulta"],
 ["14:33:25","Carlos Oliveira","Consulta concluída","SUCCESS","Resultado salvo"],
 ["14:34:02","Ana Santos","Atenção","WARNING","Necessária conferência manual"]
];

export default function Logs(){return <><Header title="Logs" subtitle="Histórico das atividades do sistema"/><div className="toolbar"><div className="search"><Search size={18}/><input placeholder="Buscar nos logs..."/></div><select className="filter-select"><option>Todos</option><option>Informação</option><option>Sucesso</option><option>Atenção</option><option>Erro</option></select></div><div className="panel"><div className="table-wrap"><table><thead><tr><th>Horário</th><th>Motorista</th><th>Ação</th><th>Status</th><th>Mensagem</th></tr></thead><tbody>{logs.map((l,i)=><tr key={i}><td>{l[0]}</td><td><b>{l[1]}</b></td><td>{l[2]}</td><td><span className={`log-dot ${l[3].toLowerCase()}`}>{l[3]}</span></td><td>{l[4]}</td></tr>)}</tbody></table></div></div></> }