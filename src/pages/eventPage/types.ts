export default interface EventPageProps {
  id: number,
  descricao: string,
  data: Date,
  nome: string,
  local: string,
  faixaEtaria: number,
  imagemEventoURL: string,
  horaAbertura: string,
  horaInicio: string,
  capacidade: number,
  qtdIngressos: number
}