import type { Motorista } from "../types/motorista";

const nomes = [
  "João da Silva", "Maria Souza", "Carlos Oliveira", "Ana Santos", "Pedro Almeida",
  "Lucas Ferreira", "Juliana Costa", "Marcos Pereira", "Fernanda Lima", "Rafael Gomes",
  "Bruna Martins", "Diego Rodrigues", "Camila Barbosa", "André Carvalho", "Larissa Rocha",
  "Gustavo Mendes", "Patrícia Nunes", "Eduardo Castro", "Renata Alves", "Thiago Ribeiro",
  "Aline Moreira", "Bruno Teixeira", "Letícia Correia", "Felipe Dias", "Mariana Freitas",
  "Rodrigo Vieira", "Beatriz Cardoso", "Vinícius Monteiro", "Carolina Ramos", "Matheus Lopes"
];

const statusList: Motorista["status"][] = [
  "SUCESSO", "SUCESSO", "SUCESSO", "SUCESSO", "ATENCAO", "ERRO", "PENDENTE"
];

export const mockMotoristas: Motorista[] = Array.from({ length: 120 }, (_, i) => {
  const status = i < 47 ? statusList[i % statusList.length] : "PENDENTE";
  const cpfEnd = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    nome: nomes[i % nomes.length],
    cpf: `123456789${cpfEnd}`,
    renach: `MT${String(10000000 + i)}`,
    status,
    resultado: status === "SUCESSO" ? "CNH encontrada" :
      status === "ATENCAO" ? "Conferência necessária" :
      status === "ERRO" ? "Erro na consulta" : "Aguardando processamento",
    mensagem: status === "ERRO" ? "Não foi possível concluir a consulta." : "",
    dataConsulta: status === "PENDENTE" ? "-" : "21/09/2026 14:3" + (i % 10),
    tempoConsulta: status === "PENDENTE" ? "-" : `${2 + (i % 5)}s`,
    tentativas: status === "ERRO" ? 2 : 1
  };
});