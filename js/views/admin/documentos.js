
const DOCS = [
  { nome: 'Convenção do condomínio', sub: 'Atualizado em 12/02/2026' },
  { nome: 'Regimento interno', sub: 'Atualizado em 12/02/2026' },
  { nome: 'Balancete · outubro 2026', sub: 'Publicado em 05/11/2026' },
  { nome: 'Ata da assembleia · setembro 2026', sub: 'Gerada por IA em 30/09/2026' },
  { nome: 'Apólice de seguro predial', sub: 'Vigência até 03/2027' },
];

function renderAdminDocumentos() {
  return `
    ${sectionHead('Documentos', 'Arquivos oficiais disponíveis para moradores e administração')}
    <div class="card">
      ${DOCS.map(d => `
        <div class="list-item">
          <div style="width:40px;height:40px;border-radius:10px;background:var(--blue-50);color:var(--blue-700);display:flex;align-items:center;justify-content:center;flex-shrink:0">${icon('file')}</div>
          <div class="grow"><div class="title">${d.nome}</div><div class="sub">${d.sub}</div></div>
          <button class="btn btn-outline btn-sm">${icon('download')} Baixar</button>
        </div>`).join('')}
    </div>
  `;
}
