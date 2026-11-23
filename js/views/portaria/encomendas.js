
function renderPortariaEncomendas(state) {
  const d = DATA.portariaEncomendas;
  const origem = state.ui.portariaOrigem || d.origens[0];
  return `
    ${sectionHead('Encomendas', 'Registre a chegada e o morador recebe a notificação na hora.')}

    <div class="two-col">
      <div class="card">
        <div style="border:1.5px dashed var(--blue-200);border-radius:14px;padding:24px;text-align:center;color:var(--blue-600);margin-bottom:16px">
          ${icon('camera')}
          <div class="semibold" style="margin-top:8px">Fotografar etiqueta</div>
          <div class="small muted">O app lê o nome e sugere a unidade</div>
        </div>
        <div class="field" style="margin-bottom:14px">
          <label>Unidade</label>
          <input class="input" placeholder="Ex.: 1204 Torre B" />
        </div>
        <div class="field" style="margin-bottom:16px">
          <label>Origem</label>
          <div class="chip-row">
            ${d.origens.map(o => `<button class="chip ${o === origem ? 'active' : ''}" data-origem="${o}">${o}</button>`).join('')}
          </div>
        </div>
        <button class="btn btn-primary btn-block">Registrar e notificar morador</button>
      </div>

      <div class="card">
        <div class="row between" style="margin-bottom:6px">
          <strong style="font-size:14px">Aguardando retirada</strong>
          <span class="small muted">${d.aguardando.length} itens</span>
        </div>
        ${d.aguardando.map(e => `
          <div class="list-item">
            <div style="width:42px;height:42px;border-radius:10px;background:var(--blue-50);color:var(--blue-700);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">${e.unidade}</div>
            <div class="grow">
              <div class="title">${e.titulo}</div>
              <div class="sub" style="${e.alerta ? 'color:var(--warning);font-weight:600' : ''}">${e.sub}</div>
            </div>
            <button class="btn btn-outline btn-sm">Entregar</button>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function bindPortariaEncomendas(root, { update, state }) {
  root.querySelectorAll('[data-origem]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.portariaOrigem = btn.dataset.origem; update(); });
  });
}
