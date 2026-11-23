
function renderAdminMoradores() {
  return `
    ${sectionHead('Moradores', '96 unidades cadastradas no Edifício Mirante')}
    <div class="row between" style="margin-bottom:14px">
      <div class="field" style="max-width:320px;width:100%">
        <div class="input-wrap">
          <span class="leading-icon">${icon('search2')}</span>
          <input class="input search-input" placeholder="Buscar unidade ou morador" />
        </div>
      </div>
      <button class="btn btn-primary btn-sm">${icon('plus')} Novo morador</button>
    </div>
    <div class="card">
      ${dataTable({
        headers: ['Unidade', 'Morador', 'Contato', 'Situação'],
        rows: [
          ['1204 · Torre B', 'Marina Souza', '(11) 98888-1204', badge('Em dia', 'success')],
          ['803', 'Paulo Ramos', '(11) 98888-0803', badge('Em dia', 'success')],
          ['402', 'Fernanda Dias', '(11) 98888-0402', badge('Em dia', 'success')],
          ['1501', 'João Pedro', '(11) 98888-1501', badge('Inadimplente', 'danger')],
          ['201', 'Rosa Silva', '(11) 98888-0201', badge('Inadimplente', 'danger')],
        ],
      })}
    </div>
  `;
}
