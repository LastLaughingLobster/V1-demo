
function renderMoradorFinancas() {
  const d = DATA.moradorFinancas;
  return `
    ${sectionHead('Finanças', `${DATA.morador.unidade} · ${DATA.condominio.nome}`)}
    <div class="row gap-xs" style="margin:-10px 0 16px">
      <span class="badge badge-success badge-dot">Sincronizado com o contábil</span>
    </div>

    <div class="two-col">
      <div class="stack">
        <div class="card" style="background:var(--blue-900);color:#fff">
          <div class="row between">
            <span class="small" style="color:var(--blue-200);font-weight:700">FATURA DE NOVEMBRO</span>
            <span class="badge" style="background:rgba(230,207,160,.2);color:var(--beige-300)">Em aberto</span>
          </div>
          <div style="font-size:30px;font-weight:800;margin:10px 0 6px">${d.fatura.valor}</div>
          <div class="small" style="color:var(--blue-100)">${d.fatura.venc}</div>
          <div class="row gap-sm" style="margin-top:16px">
            <button class="btn btn-primary">${icon('copy')} Copiar Pix</button>
            <button class="btn btn-outline" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff">${icon('download')} Baixar boleto</button>
          </div>
        </div>

        <div class="card">
          <div class="row between">
            <strong style="font-size:14px">Patrimônio do condomínio</strong>
            <span class="badge badge-success">${d.patrimonio.variacao}</span>
          </div>
          <div class="card-value" style="margin-top:6px">${d.patrimonio.valor}</div>
          <div style="height:70px;margin-top:14px;background:linear-gradient(180deg,var(--blue-50),transparent);border-radius:10px;position:relative;overflow:hidden">
            <svg viewBox="0 0 300 70" width="100%" height="100%" preserveAspectRatio="none">
              <polyline points="0,50 50,45 100,40 150,20 200,35 250,15 300,22" fill="none" stroke="#2B6FAE" stroke-width="3"/>
            </svg>
          </div>
        </div>

        <div class="card">
          <strong style="font-size:14px">Faturas anteriores</strong>
          ${d.anteriores.map(f => `
            <div class="list-item">
              <div class="dot"></div>
              <div class="grow"><div class="title">${f.mes} · ${f.valor}</div></div>
              <span class="badge badge-success">${f.status}</span>
            </div>`).join('')}
          <a href="#" class="small text-blue semibold" style="display:block;margin-top:10px">Ver prestação de contas completa</a>
        </div>
      </div>

      <div class="stack">
        <div class="card">
          <div class="row between" style="margin-bottom:10px">
            <strong style="font-size:14px">Despesas de outubro</strong>
            <span class="small muted">${d.despesasOutubro.total}</span>
          </div>
          <div class="stack" style="gap:12px">
            ${d.despesasOutubro.itens.map(i => `
              <div>
                <div class="row between small" style="margin-bottom:5px"><span>${i.nome}</span><span class="semibold">${i.pct}%</span></div>
                ${progress(i.pct)}
              </div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="row gap-sm">
            <span class="text-blue">${icon('file')}</span>
            <strong style="font-size:14px">Documentos</strong>
          </div>
          <p class="small muted" style="margin-top:6px">Balancetes, convenção, regimento interno e atas disponíveis para consulta.</p>
          <button class="btn btn-outline btn-sm" style="margin-top:10px">Acessar documentos</button>
        </div>
      </div>
    </div>
  `;
}
