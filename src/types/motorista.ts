export type StatusMotorista =
  | "PENDENTE"
  | "PROCESSANDO"
  | "SUCESSO"
  | "ATENCAO"
  | "ERRO"
  | "CAPTCHA"
  | "BLOQUEADO";

export interface Motorista {
  id: number;
  nome: string;
  cpf: string;
  renach: string;
  status: StatusMotorista;
  resultado: string;
  mensagem: string;
  dataConsulta: string;
  tempoConsulta: string;
  tentativas: number;
}