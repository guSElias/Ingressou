import Evento from '../types';

const eventoExemplo: Evento = {
  cdevento: 1,
  tipoEvento: 'Concerto',
  descricao: 'Lorem',
  dtEvento: new Date('2024-12-01'),
  nomeEvento: 'Concerto de Verão',
  localEvento: 'Parque Central',
  faixaEtaria: 0,
  imagemURL:
    'https://me-gestao-imagens.s3.amazonaws.com/minhaentrada/gestao/fotos/24166_banner6.jpg',
  aberturaEvento: '16:00',
  inicioEvento: '19:00',
  capacidade: 5000,
  qtdIngressos: 3000,
};

export default eventoExemplo;
