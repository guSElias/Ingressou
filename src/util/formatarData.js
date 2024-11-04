const formatarDataEvento = (data, aberturaEvento) => {
  // Verifica se a data está no formato de string "YYYY-MM-DD" e tenta criar um objeto Date
  if (typeof data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data)) {
    data = new Date(data); // Converte a string em um objeto Date
  }

  // Verifica se a data é válida
  if (!(data instanceof Date) || isNaN(data)) {
    console.error('Data inválida:', data);
    return 'Data inválida'; // Retorna uma mensagem padrão ou outro tratamento
  }

  // Arrays para formatar a data e os dias da semana
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const diaSemana = diasSemana[data.getUTCDay()];
  const dia = String(data.getUTCDate()).padStart(2, '0');
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0');

  return `${diaSemana}, ${dia}/${mes} - ${aberturaEvento}`;
};

export default formatarDataEvento;
