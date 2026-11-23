
const ITENS = [
  { nome: 'Chave com chaveiro azul', local: 'Hall da Torre B', status: badge('Aguardando', 'warning') },
  { nome: 'Óculos de sol', local: 'Salão de festas', status: badge('Aguardando', 'warning') },
  { nome: 'Guarda-chuva preto', local: 'Portaria', status: badge('Retirado', 'success') },
  { nome: 'Fone de ouvido', local: 'Academia', status: badge('Aguardando', 'warning') },
];

function renderAdminAchados() {
  return `
    ${sectionHead('Achados e perdidos', 'Itens encontrados nas áreas comuns do condomínio')}
    <div class="grid grid-4">
      ${ITENS.map(i => `
        <div class="card">
          <div style="aspect-ratio:1;border-radius:12px;background:var(--blue-50);display:flex;align-items:center;justify-content:center;color:var(--blue-300);margin-bottom:10px">${icon('camera')}</div>
          <div class="semibold" style="font-size:13px">${i.nome}</div>
          <div class="small muted" style="margin:3px 0 8px">${i.local}</div>
          ${i.status}
        </div>`).join('')}
    </div>
  `;
}
