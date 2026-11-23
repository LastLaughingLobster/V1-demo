
function renderAdminFaturas() {
  return `
    ${sectionHead('Faturas e boletos', 'Novembro de 2026 · 96 boletos emitidos')}
    <div class="row between" style="margin-bottom:14px">
      <span class="badge badge-warning">Inadimplência: 4,8% · 5 unidades</span>
      <button class="btn btn-primary btn-sm">${icon('plus')} Emitir novo lote</button>
    </div>
    <div class="card">
      ${dataTable({
        headers: ['Unidade', 'Morador', 'Valor', 'Vencimento', 'Status'],
        rows: [
          ['1204 · Torre B', 'Marina Souza', 'R$ 842,50', '10/11', badge('Em aberto', 'warning')],
          ['803', 'Paulo Ramos', 'R$ 842,50', '10/11', badge('Pago', 'success')],
          ['402', 'Fernanda Dias', 'R$ 842,50', '10/11', badge('Pago', 'success')],
          ['1501', 'João Pedro', 'R$ 842,50', '10/11', badge('Vencido', 'danger')],
          ['201', 'Rosa Silva', 'R$ 842,50', '10/11', badge('Vencido', 'danger')],
          ['1102', 'Carlos Dias', 'R$ 842,50', '10/11', badge('Em aberto', 'warning')],
        ],
      })}
    </div>
  `;
}
