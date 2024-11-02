export default interface Evento {
  id: number;
  nome: string;
  descricao: string;
  dataEvento: string;
  localEvento: string;
  faixaEtaria: number;
  horaAbertura: string;
  horaInicio: string;
  capacidade: number;
  imagemUrl: string;
  quantidadeIngressos: number;
}
