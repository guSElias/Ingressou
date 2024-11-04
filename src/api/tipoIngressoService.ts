import http from './index';

export async function listarTiposDeIngresso(eventoId: number) {
  try {
    // Chama o endpoint correto usando o ID do evento
    const response = await http.get(`/api/tipo-ingresso/evento/${eventoId}`);
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('Erro ao buscar tipos de ingresso:', error);
    throw error; // Lança o erro para tratamento posterior
  }
}
