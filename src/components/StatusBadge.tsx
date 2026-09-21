import type { StatusMotorista } from "../types/motorista";

const labels: Record<StatusMotorista, string> = {
  PENDENTE: "Pendente",
  PROCESSANDO: "Processando",
  SUCESSO: "Sucesso",
  ATENCAO: "Atenção",
  ERRO: "Erro",
  CAPTCHA: "CAPTCHA",
  BLOQUEADO: "Bloqueado"
};

export default function StatusBadge({ status }: { status: StatusMotorista }) {
  return <span className={`badge badge-${status.toLowerCase()}`}>{labels[status]}</span>;
}