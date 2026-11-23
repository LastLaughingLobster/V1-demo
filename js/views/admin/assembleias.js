
function renderAdminAssembleias() {
  const d = DATA.adminDashboard.assembleia;
  return `
    ${sectionHead('Assembleias e atas', 'Convoque, conduza e documente as assembleias do condomínio')}
    <div class="two-col">
      <div class="card" style="background:linear-gradient(135deg,var(--blue-800),var(--blue-600));color:#fff">
        <span class="badge" style="background:rgba(230,207,160,.25);color:var(--beige-200)">HOJE ÀS 19h30</span>
        <div style="font-size:19px;font-weight:800;margin-top:10px">${d.titulo} ordinária</div>
        <div class="small" style="color:var(--blue-100);margin-top:8px">${d.confirmadas} de ${d.total} unidades confirmadas</div>
        <div class="row gap-sm" style="margin-top:16px">
          <button class="btn btn-primary" style="background:var(--beige-300);color:var(--blue-900)">${icon('video')} Abrir sala</button>
          <button class="btn btn-outline" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff">Pauta</button>
        </div>
      </div>
      <div class="card">
        <strong style="font-size:14px">Histórico de atas</strong>
        <div style="margin-top:6px">
          ${[
            { t: 'Assembleia geral ordinária', s: 'Setembro 2026 · ata gerada por IA' },
            { t: 'Assembleia extraordinária · obra da fachada', s: 'Julho 2026' },
            { t: 'Assembleia geral ordinária', s: 'Abril 2026' },
          ].map(a => `
            <div class="list-item">
              <div style="width:38px;height:38px;border-radius:10px;background:var(--blue-50);color:var(--blue-700);display:flex;align-items:center;justify-content:center;flex-shrink:0">${icon('file')}</div>
              <div class="grow"><div class="title">${a.t}</div><div class="sub">${a.s}</div></div>
              <button class="btn btn-outline btn-sm">${icon('download')}</button>
            </div>`).join('')}
        </div>
        <button class="btn btn-dark btn-block" style="margin-top:12px">${icon('plus')} Agendar nova assembleia</button>
      </div>
    </div>
  `;
}
