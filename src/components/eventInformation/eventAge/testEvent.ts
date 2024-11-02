import Evento from 'src/router/interfaces/Evento';

const eventoExemplo: Evento = {
  id: 1,
  nome: 'Festa',
  descricao: 'Uma festa incrível!',
  dataEvento: new Date(2024-12-25),
  localEvento: 'Senai',
  faixaEtaria: 18,
  horaAbertura: '17:00',
  horaInicio: '18:00',
  capacidade: 500,
  imagemUrl: 'https://me-gestao-imagens.s3.amazonaws.com/minhaentrada/gestao/fotos/24508_banner6.jpg',
  quantidadeIngressos: 499,
};

export default eventoExemplo;
