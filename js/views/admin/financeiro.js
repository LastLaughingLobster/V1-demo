
function renderAdminFinanceiro() {
  const d = DATA.adminDashboard;
  return `
    ${sectionHead('Financeiro e patrimônio', 'Visão consolidada do caixa, fundo de reserva e despesas do condomínio.')}
    <div class="grid grid-3" style="margin-bottom:16px">
      <div class="card card-dark">
        <span class="card-title">Patrimônio total</span>
        <div class="card-value">${d.patrimonio.valor}</div>
        <span class="badge badge-success" style="margin-top:8px">${d.patrimonio.variacao}</span>
      </div>
      <div class="card">
        <span class="card-title">Caixa disponível</span>
        <div class="card-value">R$ 186 mil</div>
        <span class="small muted">Movimentação livre para despesas correntes</span>
      </div>
      <div class="card">
        <span class="card-title">Fundo de reserva</span>
        <div class="card-value">R$ 312 mil</div>
        <span class="small muted">Reservado para emergências e melhorias</span>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <strong style="font-size:14px">Despesas de outubro · ${d.despesasOutubro.total}</strong>
        <div class="stack" style="gap:12px;margin-top:14px">
          ${d.despesasOutubro.itens.map(i => `
            <div>
              <div class="row between small" style="margin-bottom:5px"><span>${i.nome}</span><span class="semibold">${i.pct}%</span></div>
              ${progress(i.pct)}
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <strong style="font-size:14px">Contas a pagar</strong>
        ${dataTable({
          headers: ['Fornecedor', 'Vencimento', 'Valor', 'Status'],
          rows: [
            ['Elevadores Mirante Ltda', '28/10', 'R$ 2.400', badge('Em aberto', 'warning')],
            ['Energia · distribuidora', '30/10', 'R$ 16.740', badge('Em aberto', 'warning')],
            ['Folha e encargos', '05/11', 'R$ 47.300', badge('Agendado', 'blue')],
            ['Seguradora predial', '10/11', 'R$ 3.180', badge('Agendado', 'blue')],
          ],
        })}
      </div>
    </div>
  `;
}
