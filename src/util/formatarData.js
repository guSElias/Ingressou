const formatarDataEvento = (data, aberturaEvento) => {
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const diaSemana = diasSemana[data.getUTCDay()];
  const dia = String(data.getUTCDate()).padStart(2, '0');
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
  return `${diaSemana}, ${dia}/${mes} - ${aberturaEvento}`;
};
export default formatarDataEvento