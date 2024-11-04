import axios from 'axios';

const API_URL = 'http://localhost:8080/api/eventos/selecionar'; // URL base da API

// Função para listar eventos
export const listarEventos = async (): Promise<Evento[]> => {
  const response = await axios.get<Evento[]>(API_URL);
  return response.data;
};

// Função para buscar evento por ID
export const buscarEventoPorId = async (id: number): Promise<Evento> => {
  const response = await axios.get<Evento>(`${API_URL}/${id}`); // Concatenando o ID à URL
  return response.data;
};

// Definição de tipos (ajustado conforme a estrutura de dados retornada pela API)
export interface Evento {
  id: number;
  nome: string;
  descricao: string;
  imagemUrl: string;
  dataEvento: string; // O formato da data pode ser string, ajuste se necessário
  localEvento: string;
  faixaEtaria: number;
  horaAbertura: string;
  horaInicio: string;
  capacidade: number;
  quantidadeIngressos: number;
}
