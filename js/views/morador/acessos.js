
function renderMoradorAcessos(state) {
  const d = DATA.moradorAcessos;
  const tab = state.ui.moradorAcessosTab || 'convidados';
  const tabs = [
    { id: 'convidados', label: 'Convidados' },
    { id: 'funcionarios', label: 'Funcionários' },
    { id: 'terceirizados', label: 'Terceirizados' },
  ];
  return `
    ${sectionHead('Acessos', 'Cadastre quem vem e gere um código da unidade para a portaria.')}

    <div class="chip-row" style="margin-bottom:16px">
      ${tabs.map(t => `<button class="chip ${tab === t.id ? 'active' : ''}" data-acessos-tab="${t.id}">${t.label}</button>`).join('')}
    </div>

    <div class="two-col">
      <div class="stack">
        <div class="card" style="background:var(--blue-900);color:var(--white)">
          <div class="row between">
            <span class="small" style="color:var(--blue-200);font-weight:700;letter-spacing:.04em">CÓDIGO ATIVO · APTO 1204</span>
            <span class="badge badge-success">${d.codigoAtivo.valido ? 'Válido' : 'Expirado'}</span>
          </div>
          <div style="font-size:32px;font-weight:800;letter-spacing:4px;margin:14px 0 6px">${d.codigoAtivo.codigo}</div>
          <div class="small" style="color:var(--blue-100)">${d.codigoAtivo.convidado} · ${d.codigoAtivo.quando}</div>
          <div class="row gap-sm" style="margin-top:16px">
            <button class="btn btn-primary">${icon('arrowRight')} Enviar código</button>
            <button class="btn btn-outline" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff">${icon('qr')} QR Code</button>
          </div>
        </div>

        <div class="card">
          <div class="row between" style="margin-bottom:4px">
            <strong style="font-size:14px">Cadastros salvos</strong>
            <span class="small muted">Ficam guardados para a próxima visita</span>
          </div>
          ${d.cadastrosSalvos.map(p => `
            <div class="list-item">
              <div class="avatar" style="background:var(--blue-100);color:var(--blue-700)">${p.iniciais}</div>
              <div class="grow">
                <div class="title">${p.nome} ${p.recorrente ? '<span class="badge badge-beige" style="margin-left:6px">Recorrente</span>' : ''}</div>
                <div class="sub">${p.sub}</div>
              </div>
              <button class="btn btn-outline btn-sm">Gerar código</button>
            </div>`).join('')}
        </div>
      </div>

      <div class="stack">
        <div class="grid grid-2">
          <button class="card" style="text-align:left;border:1px solid var(--line)">
            <span class="text-blue">${icon('user')}</span>
            <div class="semibold" style="margin-top:10px;font-size:13px">Liberar visita</div>
          </button>
          <button class="card" style="text-align:left;border:1px solid var(--line)">
            <span class="text-blue">${icon('mapPin')}</span>
            <div class="semibold" style="margin-top:10px;font-size:13px">Estou chegando</div>
          </button>
          <button class="card" style="text-align:left;border:1px solid var(--line)">
            <span class="text-blue">${icon('calendar')}</span>
            <div class="semibold" style="margin-top:10px;font-size:13px">Reservar espaço</div>
          </button>
          <button class="card" style="text-align:left;border:1px solid var(--line)">
            <span class="text-blue">${icon('chat')}</span>
            <div class="semibold" style="margin-top:10px;font-size:13px">Falar com portaria</div>
          </button>
        </div>

        <div class="card" style="background:var(--beige-100);border-color:var(--beige-300)">
          <div class="row gap-sm">
            <span style="color:var(--beige-600)">${icon('mapPin')}</span>
            <strong style="font-size:13px">Estou chegando</strong>
          </div>
          <p class="small muted" style="margin-top:6px">${d.chegando.sub}</p>
          <div class="progress beige" style="margin:12px 0 8px"><span style="width:65%"></span></div>
          <div class="small semibold" style="color:var(--beige-600)">${d.chegando.eta}</div>
        </div>
      </div>
    </div>
  `;
}

function bindMoradorAcessos(root, { update, state }) {
  root.querySelectorAll('[data-acessos-tab]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.moradorAcessosTab = btn.dataset.acessosTab; update(); });
  });
}
