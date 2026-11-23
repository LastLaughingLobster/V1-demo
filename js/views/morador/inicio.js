
function renderMoradorInicio() {
  const d = DATA.moradorInicio;
  return `
    ${sectionHead(`Boa noite, ${DATA.morador.nome.split(' ')[0]}`, `${DATA.condominio.nome} · ${DATA.morador.unidade}`)}

    <div class="card" style="background:var(--warning-bg);border-color:var(--beige-300);margin-bottom:16px">
      <div class="row gap-sm">
        <span style="color:var(--warning)">${icon('alertTriangle')}</span>
        <div><strong style="font-size:13px;color:var(--ink-900)">Aviso importante</strong>
          <div class="small muted" style="margin-top:2px">${d.aviso}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-bottom:16px">
      ${card({ title: 'Encomendas', right: `<span class="text-blue">${icon('package')}</span>`, value: d.encomendasPendentes, sub: 'na portaria aguardando retirada' })}
      ${card({ title: 'Próxima fatura', right: `<span class="text-blue">${icon('wallet')}</span>`, value: d.proximaFatura.valor, sub: d.proximaFatura.sub })}
    </div>

    <div class="card">
      <div class="row between" style="margin-bottom:6px">
        <strong style="font-size:14px">Hoje no condomínio</strong>
        <a href="#" class="small text-blue semibold">Ver agenda</a>
      </div>
      ${d.agenda.map(a => `
        <div class="list-item">
          <div class="dot"></div>
          <div class="grow">
            <div class="title">${a.titulo}</div>
            <div class="sub">${a.sub}</div>
          </div>
          ${a.action ? `<button class="btn btn-primary btn-sm">${a.action}</button>` : `${icon('chevronRight')}`}
        </div>`).join('')}
    </div>
  `;
}
