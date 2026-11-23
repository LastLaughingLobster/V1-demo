
function renderPortariaInicio() {
  const d = DATA.portariaInicio;
  return `
    ${sectionHead(`Portaria`, `${DATA.condominio.nome} · ${DATA.portaria.turno} · ${DATA.portaria.nome}`)}

    <div class="grid grid-3" style="margin-bottom:16px">
      ${card({ title: 'Encomendas pendentes', value: d.stats.encomendas, right: `<span class="text-blue">${icon('package')}</span>` })}
      ${card({ title: 'Visitas com código hoje', value: d.stats.visitas, right: `<span class="text-blue">${icon('key')}</span>` })}
      ${card({ title: 'Placas lidas hoje', value: d.stats.placas, right: `<span class="text-blue">${icon('target')}</span>` })}
    </div>

    <div class="two-col">
      <div class="stack">
        <div class="card">
          <div class="row between">
            <strong style="font-size:14px">Reconhecimento de placa</strong>
            <span class="badge badge-danger badge-dot">AO VIVO</span>
          </div>
          <div class="small muted" style="margin-top:6px">${d.reconhecimento.camera}</div>
          <div style="background:var(--blue-900);border-radius:12px;height:120px;display:flex;align-items:center;justify-content:center;margin:12px 0;color:var(--blue-200)">
            ${icon('camera')}
          </div>
          <div style="text-align:center;font-size:22px;font-weight:800;letter-spacing:3px;color:var(--blue-900);margin-bottom:12px">${d.reconhecimento.placa}</div>
          <div class="card" style="background:var(--warning-bg);border-color:var(--beige-300);padding:12px">
            <div class="small" style="color:var(--warning);font-weight:700">Placa não cadastrada</div>
            <div class="small muted" style="margin-top:4px">${d.reconhecimento.status}</div>
            <div class="row gap-sm" style="margin-top:10px">
              <button class="btn btn-primary btn-sm">Liberar entrada</button>
              <button class="btn btn-outline btn-sm">Recusar</button>
            </div>
          </div>
          ${d.codigosRecentes.map(c => `
            <div class="list-item">
              <div class="dot"></div>
              <div class="grow"><div class="title">${c.placa} <span class="small muted">· ${c.sub}</span></div></div>
              <span class="small muted">${c.tag}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="stack">
        <div class="card">
          <strong style="font-size:14px">Chegadas previstas</strong>
          <span class="small muted" style="display:block;margin-bottom:10px">Corridas compartilhadas pelos moradores</span>
          ${d.chegadas.map(c => `
            <div style="margin-bottom:14px">
              <div class="row between small"><span class="semibold">${c.nome}</span><span class="text-blue bold">${c.eta}</span></div>
              <div class="small muted" style="margin:4px 0 6px">${c.sub}</div>
              <div class="progress thin"><span style="width:${c.pct}%"></span></div>
            </div>`).join('')}
        </div>

        <div class="card" style="background:var(--danger-bg);border-color:#ecc; border-color: var(--beige-300)">
          <div class="row gap-sm">
            <span class="text-warning">${icon('alertTriangle')}</span>
            <strong style="font-size:13px">Não pode falhar</strong>
          </div>
          <p class="small muted" style="margin-top:6px">${d.alerta}</p>
        </div>
      </div>
    </div>
  `;
}
