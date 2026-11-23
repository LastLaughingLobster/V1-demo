
function renderAdminReservas() {
  return `
    ${sectionHead('Reservas de áreas comuns', 'Agenda de reservas do Edifício Mirante')}
    <div class="card" style="margin-bottom:16px">
      ${weekStrip(DATA.moradorCondominio.semana)}
    </div>
    <div class="card">
      ${dataTable({
        headers: ['Área', 'Unidade', 'Data', 'Horário', 'Status'],
        rows: [
          ['Salão de festas', '1204 · Marina Souza', 'Sáb 24/10', '14h às 22h', badge('Confirmada', 'success')],
          ['Churrasqueira', '803 · Paulo Ramos', 'Dom 25/10', '12h às 17h', badge('Confirmada', 'success')],
          ['Quadra', '402 · Fernanda Dias', 'Ter 27/10', '18h às 19h', badge('Pendente', 'warning')],
          ['Espaço gourmet', '1102 · Carlos Dias', 'Qui 29/10', '19h às 23h', badge('Confirmada', 'success')],
        ],
      })}
    </div>
  `;
}
