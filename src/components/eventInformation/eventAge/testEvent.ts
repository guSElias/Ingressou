import Evento from '../types';

const descricaoTeste = `Concerto de Verão - Parque Central
Prepare-se para uma experiência musical inesquecível no Concerto de Verão, que acontecerá no encantador Parque Central no dia 1º de dezembro de 2024. Este evento promete reunir amantes da música em um ambiente vibrante e acolhedor, rodeado pela natureza exuberante do parque.
A partir das 16:00, os portões se abrirão para que o público possa aproveitar diversas atividades de entretenimento, incluindo food trucks com delícias gastronômicas, barracas de artesanato local e apresentações de artistas emergentes. Este é o momento perfeito para relaxar, socializar e entrar no clima do concerto, enquanto saboreia pratos deliciosos e aprecia a arte local.
O espetáculo principal começará às 19:00, reunindo uma seleção de bandas e artistas renomados, que irão tocar uma variedade de gêneros musicais, desde pop e rock até música eletrônica e folk. Os destaques da noite incluem performances de bandas locais aclamadas e artistas convidados, todos prontos para fazer você dançar e cantar junto.
Com uma capacidade total de 5000 pessoas, o evento conta com 3000 ingressos disponíveis para garantir uma experiência mais íntima e acessível. É uma oportunidade única para compartilhar momentos especiais com amigos e familiares, enquanto desfruta da magia da música ao ar livre sob o céu estrelado.`;
const eventoExemplo: Evento = {
  cdevento: 1,
  tipoEvento: 'Concerto',
  descricao: descricaoTeste,
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
