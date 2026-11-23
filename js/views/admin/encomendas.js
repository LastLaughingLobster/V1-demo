
function renderAdminEncomendas() {
  const d = DATA.portariaEncomendas;
  return `
    ${sectionHead('Encomendas', 'Visão geral das encomendas recebidas pela portaria')}
    <div class="card">
      ${dataTable({
        headers: ['Unidade', 'Descrição', 'Recebido', 'Status'],
        rows: d.aguardando.map(e => [e.unidade, e.titulo, e.sub, badge(e.alerta ? 'Urgente' : 'Aguardando retirada', e.alerta ? 'danger' : 'warning')]),
      })}
    </div>
  `;
}
