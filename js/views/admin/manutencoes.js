
function renderAdminManutencoes(state) {
  const d = DATA.calendarioCondominio;
  const freq = state.ui.adminFreqSel || 'Mensal';
  const selected = state.ui.adminDiaSelecionado || d.diaSelecionado;
  return `
    ${sectionHead('Manutenções · Calendário do condomínio', 'Manutenções recorrentes aparecem para moradores e portaria.')}
    <div class="two-col">
      <div class="card">
        ${monthGrid({ monthLabel: d.mesAno, marks: d.diasComEvento, selected })}
        <div class="card" style="background:var(--danger-bg);border-color:var(--beige-300);margin-top:14px;padding:12px">
          <span class="small" style="color:var(--danger);font-weight:700">${selected} de outubro</span>
          <div class="small muted" style="margin-top:2px">${d.detalheDia}</div>
        </div>
      </div>
      <div class="stack">
        <div class="card">
          <strong style="font-size:14px">Recorrentes no ano</strong>
          ${d.recorrentes.map(r => `
            <div class="list-item">
              <div class="dot beige"></div>
              <div class="grow"><div class="title">${r.nome}</div><div class="sub">${r.proxima}</div></div>
              <span class="badge badge-beige">${r.freq}</span>
            </div>`).join('')}
        </div>
        <div class="card" style="background:var(--blue-900);color:#fff">
          <strong style="font-size:14px">Nova manutenção recorrente</strong>
          <div class="chip-row" style="margin-top:12px">
            ${['Mensal','Trimestral','Semestral','Anual'].map(f => `
              <button class="chip ${f === freq ? 'active' : ''}" style="${f === freq ? '' : 'background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.2)'}" data-freq="${f}">${f}</button>`).join('')}
          </div>
          <button class="btn btn-primary btn-block" style="margin-top:14px;background:var(--beige-300);color:var(--blue-900)">Criar manutenção ${freq.toLowerCase()}</button>
        </div>
      </div>
    </div>
  `;
}

function bindAdminManutencoes(root, { update, state }) {
  root.querySelectorAll('[data-freq]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.adminFreqSel = btn.dataset.freq; update(); });
  });
  root.querySelectorAll('[data-day]').forEach(cell => {
    cell.addEventListener('click', () => { state.ui.adminDiaSelecionado = Number(cell.dataset.day); update(); });
  });
}
