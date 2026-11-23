
function renderMoradorCondominio(state) {
  const d = DATA.moradorCondominio;
  const areaSel = state.ui.moradorAreaSel || d.areas[0];
  return `
    ${sectionHead('Condomínio', `${DATA.condominio.nome}`)}

    <div class="two-col">
      <div class="stack">
        <div class="card" style="background:linear-gradient(135deg,var(--blue-800),var(--blue-600));color:#fff">
          <span class="badge" style="background:rgba(230,207,160,.25);color:var(--beige-200)">${d.assembleia.horario}</span>
          <div style="font-size:19px;font-weight:800;margin-top:10px">${d.assembleia.titulo}</div>
          <p class="small" style="color:var(--blue-100);margin-top:8px;line-height:1.5">${d.assembleia.sub}</p>
          <div class="small" style="margin-top:10px;color:var(--beige-200)">${d.assembleia.confirmadas}</div>
          <div class="row gap-sm" style="margin-top:16px">
            <button class="btn btn-primary">${icon('video')} Entrar na sala</button>
            <button class="btn btn-outline" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff">Atas</button>
          </div>
        </div>

        <div class="card">
          <strong style="font-size:14px">Reservar área comum</strong>
          <div class="chip-row" style="margin:12px 0">
            ${d.areas.map(a => `<button class="chip ${a === areaSel ? 'active' : ''}" data-area="${a}">${a}</button>`).join('')}
          </div>
          ${weekStrip(d.semana)}
          <button class="btn btn-primary btn-block" style="margin-top:14px">Reservar ${areaSel.toLowerCase()} · sáb 24/10</button>
        </div>
      </div>

      <div class="stack">
        <div class="card">
          <div class="row between" style="margin-bottom:4px">
            <strong style="font-size:14px">Manutenções programadas</strong>
            <a href="#" class="small text-blue semibold">Calendário</a>
          </div>
          ${d.manutencoes.map(m => `
            <div class="list-item">
              <div style="width:40px;height:40px;border-radius:10px;background:var(--blue-50);color:var(--blue-700);display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:10px;font-weight:800;flex-shrink:0">${m.data}</div>
              <div class="grow"><div class="title">${m.titulo}</div><div class="sub">${m.sub}</div></div>
            </div>`).join('')}
        </div>

        <div class="card">
          <div class="row between">
            <strong style="font-size:14px">Achados e perdidos</strong>
            <a href="#" class="small text-blue semibold">Registrar item</a>
          </div>
          <div class="grid grid-2" style="margin-top:12px">
            <div style="aspect-ratio:1;border-radius:12px;background:var(--blue-50);display:flex;align-items:center;justify-content:center;color:var(--blue-300)">${icon('camera')}</div>
            <div style="aspect-ratio:1;border-radius:12px;background:var(--blue-50);display:flex;align-items:center;justify-content:center;color:var(--blue-300)">${icon('camera')}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindMoradorCondominio(root, { update, state }) {
  root.querySelectorAll('[data-area]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.moradorAreaSel = btn.dataset.area; update(); });
  });
}
