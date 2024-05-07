export function formatDate(isoDate) {
  const date = new Date(isoDate); // Converter a string para objeto Date
  const day = date.getDate().toString().padStart(2, "0"); // Dia
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Mês (+1 porque os meses começam do zero)
  const year = date.getFullYear(); // Ano

  return `${day}/${month}/${year}`; // Retornar a data no formato desejado
}

export function formatYear(date) {
  const year = new Date(date).getFullYear();

  return year;
}
