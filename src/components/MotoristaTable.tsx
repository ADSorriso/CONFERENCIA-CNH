import { Eye } from "lucide-react";
import type { Motorista } from "../types/motorista";
import StatusBadge from "./StatusBadge";

function maskCpf(cpf: string) { return `***.***.***-${cpf.slice(-2)}`; }

export default function MotoristaTable({ data, onView }: { data: Motorista[]; onView: (m: Motorista) => void }) {
  return <div className="table-wrap"><table><thead><tr><th><input type="checkbox"/></th><th>Nome</th><th>CPF</th><th>RENACH</th><th>Status</th><th>Resultado</th><th>Consulta</th><th>Ações</th></tr></thead>
  <tbody>{data.map(m => <tr key={m.id}><td><input type="checkbox"/></td><td><b>{m.nome}</b></td><td>{maskCpf(m.cpf)}</td><td>{m.renach}</td><td><StatusBadge status={m.status}/></td><td>{m.resultado}</td><td>{m.dataConsulta}</td><td><button className="table-action" onClick={() => onView(m)}><Eye size={16}/> Ver</button></td></tr>)}</tbody></table></div>;
}