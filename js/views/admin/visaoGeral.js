
function renderAdminVisaoGeral() {
  const d = DATA.adminDashboard;
  return `
    <div class="page-head">
      <span class="small muted semibold">Geral / Visão geral</span>
      <h1 style="margin-top:4px">Bom dia, ${DATA.admin.nome.split(' ')[0]}</h1>
      <p>Hoje tem 2 manutenções programadas, 3 tarefas da equipe em aberto e a assembleia geral às 19h30. Os boletos de novembro já foram emitidos.</p>
    </div>

    <div class="grid grid-3" style="margin-bottom:16px">
      <div class="card card-dark">
        <div class="row between"><span class="card-title">Patrimônio do condomínio</span><span class="badge badge-success">${d.patrimonio.variacao}</span></div>
        <div class="card-value">${d.patrimonio.valor}</div>
        <div class="row gap-md small" style="margin-top:16px;color:var(--blue-100)">
          <div><div class="muted">Caixa</div><div class="semibold" style="color:#fff">R$ 186 mil</div></div>
          <div><div class="muted">Fundo reserva</div><div class="semibold" style="color:#fff">R$ 312 mil</div></div>
          <div><div class="muted">Bens e obras</div><div class="semibold" style="color:#fff">R$ 786 mil</div></div>
        </div>
      </div>

      <div class="card" style="background:var(--blue-900);color:#fff">
        <div class="row between"><span class="card-title">Receitas x despesas</span></div>
        <div style="height:92px;margin-top:10px">
          <svg viewBox="0 0 300 92" width="100%" height="100%" preserveAspectRatio="none">
            <polyline points="0,60 50,58 100,55 150,50 200,30 250,45 300,38" fill="none" stroke="#fff" stroke-width="2.5"/>
            <polyline points="0,70 50,68 100,66 150,60 200,55 250,40 300,48" fill="none" stroke="var(--beige-300)" stroke-width="2.5"/>
          </svg>
        </div>
        <div class="row between tiny" style="color:var(--blue-200);margin-top:4px">
          ${d.receitasDespesas.meses.map(m => `<span>${m}</span>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="row between"><span class="card-title">Outubro 2026</span><a href="#" class="small text-blue semibold">Abrir calendário</a></div>
        <div style="margin-top:10px">
          ${d.calendarioEventos.map(e => `
            <div class="list-item">
              <div class="dot beige"></div>
              <div class="grow"><div class="title">${e.dia} · ${e.texto}</div></div>
              <span class="badge badge-beige">${e.freq}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="grid grid-3" style="margin-bottom:16px">
      <div class="card">
        <div class="row between"><strong style="font-size:14px">Despesas de outubro</strong><span class="semibold">${d.despesasOutubro.total}</span></div>
        <div class="stack" style="gap:10px;margin-top:12px">
          ${d.despesasOutubro.itens.map(i => `
            <div>
              <div class="row between tiny" style="margin-bottom:4px"><span>${i.nome}</span><span class="semibold">${i.pct}%</span></div>
              ${progress(i.pct, false, true)}
            </div>`).join('')}
        </div>
        <div class="small muted" style="margin-top:10px">${icon('checkCircle')} Sincronizado com o sistema contábil às 07h00</div>
      </div>

      <div class="card">
        <div class="row between"><strong style="font-size:14px">Equipe hoje</strong><a href="#" class="small text-blue semibold">Escalas</a></div>
        ${d.equipeHoje.map(e => `
          <div class="list-item">
            <div class="avatar" style="width:30px;height:30px;font-size:11px;background:var(--blue-100);color:var(--blue-700)">${e.nome[0]}</div>
            <div class="grow"><div class="title" style="font-size:12.5px">${e.nome} · ${e.funcao}</div></div>
            <span class="small muted">${e.horario}</span>
          </div>`).join('')}
      </div>

      <div class="card">
        <strong style="font-size:14px">Portaria agora</strong>
        <div class="grid grid-3" style="margin-top:12px;gap:8px">
          <div><div class="card-value" style="font-size:20px">${d.portariaAgora.encomendas}</div><div class="tiny muted">encomendas</div></div>
          <div><div class="card-value" style="font-size:20px">${d.portariaAgora.visitas}</div><div class="tiny muted">visitas</div></div>
          <div><div class="card-value" style="font-size:20px">${d.portariaAgora.placasLidas}</div><div class="tiny muted">placas lidas</div></div>
        </div>
        <div class="card" style="background:var(--danger-bg);border-color:var(--beige-300);margin-top:12px;padding:10px">
          <span class="small" style="color:var(--danger)">${d.portariaAgora.alerta}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-3">
      <div class="card">
        <div class="row between"><strong style="font-size:14px">Assembleia geral · hoje 19h30</strong></div>
        <div class="card-value" style="font-size:20px;margin-top:6px">${d.assembleia.confirmadas} de ${d.assembleia.total} unidades confirmadas</div>
        ${progress(Math.round((d.assembleia.confirmadas / d.assembleia.total) * 100))}
        <div class="row gap-sm" style="margin-top:12px">
          <button class="btn btn-primary btn-sm">Abrir sala</button>
          <button class="btn btn-outline btn-sm">Atas geradas por IA</button>
        </div>
      </div>

      <div class="card">
        <strong style="font-size:14px">Avisos ativos</strong>
        <div style="margin-top:8px">
          ${d.avisos.map(a => `
            <div class="list-item">
              <div class="dot ${a.nivel === 'Crítico' ? '' : 'beige'}"></div>
              <div class="grow"><div class="title" style="font-size:12.5px">${a.texto}</div></div>
              <span class="badge ${a.nivel === 'Crítico' ? 'badge-danger' : 'badge-blue'}">${a.nivel}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="card">
        <strong style="font-size:14px">Faturas de novembro</strong>
        <div class="card-value">${d.faturasNovembro.emitidos} boletos emitidos</div>
        <div class="small muted" style="margin-top:6px">Inadimplência de outubro: ${d.faturasNovembro.inadimplencia} · ${d.faturasNovembro.unidades} unidades</div>
      </div>
    </div>
  `;
}
