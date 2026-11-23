



const MORADOR_NAV = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'acessos', label: 'Acessos', icon: 'lock' },
  { id: 'financas', label: 'Finanças', icon: 'wallet' },
  { id: 'condominio', label: 'Condomínio', icon: 'building' },
  { id: 'mensagens', label: 'Mensagens', icon: 'chat' },
];
const PORTARIA_NAV = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'acessos', label: 'Acessos', icon: 'lock' },
  { id: 'encomendas', label: 'Encomendas', icon: 'box' },
  { id: 'mensagens', label: 'Mensagens', icon: 'chat' },
];

const state = {
  role: null,
  view: null,
  loginRole: 'morador',
  drawerOpen: false,
  ui: {},
};

const PAGE_LABELS = {
  'inicio': 'Início', 'acessos': 'Acessos', 'financas': 'Finanças', 'condominio': 'Condomínio',
  'mensagens': 'Mensagens', 'encomendas': 'Encomendas', 'tutorial': 'Tutorial',
  'visao-geral': 'Visão geral', 'financeiro': 'Financeiro e patrimônio', 'faturas': 'Faturas e boletos',
  'documentos': 'Documentos', 'portaria-acessos': 'Portaria e acessos', 'manutencoes': 'Manutenções',
  'reservas': 'Reservas', 'achados': 'Achados e perdidos', 'equipe': 'Equipe e escalas',
  'moradores': 'Moradores', 'assembleias': 'Assembleias e atas',
};

function getContent() {
  const { role, view } = state;
  if (role === 'morador') {
    switch (view) {
      case 'acessos': return { html: renderMoradorAcessos(state), bind: bindMoradorAcessos };
      case 'financas': return { html: renderMoradorFinancas() };
      case 'condominio': return { html: renderMoradorCondominio(state), bind: bindMoradorCondominio };
      case 'mensagens': return { html: renderMoradorMensagens(state), bind: bindMoradorMensagens };
      case 'tutorial': return { html: renderTutorial('morador', state), bind: bindTutorial };
      default: return { html: renderMoradorInicio() };
    }
  }
  if (role === 'portaria') {
    switch (view) {
      case 'acessos': return { html: renderPortariaAcessos(state), bind: bindPortariaAcessos };
      case 'encomendas': return { html: renderPortariaEncomendas(state), bind: bindPortariaEncomendas };
      case 'mensagens': return { html: renderPortariaMensagens(state), bind: bindPortariaMensagens };
      case 'tutorial': return { html: renderTutorial('portaria', state), bind: bindTutorial };
      default: return { html: renderPortariaInicio() };
    }
  }
  if (role === 'admin') {
    switch (view) {
      case 'financeiro': return { html: renderAdminFinanceiro() };
      case 'faturas': return { html: renderAdminFaturas() };
      case 'documentos': return { html: renderAdminDocumentos() };
      case 'portaria-acessos': return { html: renderAdminPortariaAcessos() };
      case 'encomendas': return { html: renderAdminEncomendas() };
      case 'manutencoes': return { html: renderAdminManutencoes(state), bind: bindAdminManutencoes };
      case 'reservas': return { html: renderAdminReservas() };
      case 'achados': return { html: renderAdminAchados() };
      case 'equipe': return { html: renderAdminEquipe(state), bind: bindAdminEquipe };
      case 'moradores': return { html: renderAdminMoradores() };
      case 'mensagens': return { html: renderAdminMensagens(state), bind: bindAdminMensagens };
      case 'assembleias': return { html: renderAdminAssembleias() };
      case 'tutorial': return { html: renderTutorial('admin', state), bind: bindTutorial };
      default: return { html: renderAdminVisaoGeral() };
    }
  }
  return { html: '' };
}

function sidebarLink(item, active) {
  return `<a href="#" class="sidebar-link ${active ? 'active' : ''}" data-nav="${item.id}">${icon(item.icon)}<span>${item.label}</span></a>`;
}

function buildSidebar() {
  const { role, view } = state;
  let nav = '';
  if (role === 'admin') {
    nav = DATA.adminMenu.map(sec => `
      <div class="sidebar-section-title">${sec.section}</div>
      ${sec.items.map(it => sidebarLink(it, view === it.id)).join('')}
    `).join('');
  } else {
    const items = role === 'morador' ? MORADOR_NAV : PORTARIA_NAV;
    nav = items.map(it => sidebarLink(it, view === it.id)).join('');
  }
  const person = role === 'admin'
    ? { name: DATA.admin.nome, role: DATA.admin.cargo, ini: DATA.admin.iniciais }
    : role === 'morador'
      ? { name: DATA.morador.nome, role: 'Morador', ini: DATA.morador.iniciais }
      : { name: DATA.portaria.nome, role: 'Portaria', ini: DATA.portaria.iniciais };

  return `
  <aside class="sidebar ${state.drawerOpen ? 'open' : ''}">
    <div class="row between">
      <div class="sidebar-brand"><div class="logo-mark">V1</div><span class="brand-name">Conecta</span></div>
      <button class="icon-btn hide-desktop" data-close-drawer style="background:transparent;border-color:rgba(255,255,255,.2);color:#fff">${icon('close')}</button>
    </div>
    ${role === 'admin' ? `<select class="sidebar-select"><option>${DATA.condominio.nome}</option></select>` : ''}
    <nav style="overflow-y:auto">${nav}</nav>
    <a href="#" class="sidebar-link tutorial ${view === 'tutorial' ? 'active' : ''}" data-nav="tutorial">${icon('book')}<span>Tutorial</span></a>
    <div class="sidebar-footer">
      <div class="avatar">${person.ini}</div>
      <div><div class="name">${person.name}</div><div class="role">${person.role}</div></div>
      <button class="logout icon-btn" data-logout style="background:transparent;border:none">${icon('logout')}</button>
    </div>
  </aside>`;
}

function buildBottomNav() {
  if (state.role === 'admin' || !state.role) return '';
  const base = state.role === 'morador' ? MORADOR_NAV : PORTARIA_NAV;
  const items = [...base, { id: 'tutorial', label: 'Tutorial', icon: 'book' }];
  return `<nav class="bottom-nav">
    ${items.map(it => `<a href="#" class="${state.view === it.id ? 'active' : ''} ${it.id === 'tutorial' ? 'tutorial' : ''}" data-nav="${it.id}">${icon(it.icon)}<span>${it.label}</span></a>`).join('')}
  </nav>`;
}

function buildTopbar() {
  if (state.role === 'admin') {
    return `
    <div class="topbar">
      <button class="icon-btn hide-desktop" data-toggle-drawer>${icon('menu')}</button>
      <div class="search-wrap hide-mobile">
        <div class="input-wrap"><span class="leading-icon">${icon('search2')}</span><input class="input search-input" placeholder="Buscar unidade, morador, placa" /></div>
      </div>
      <span class="breadcrumb hide-mobile">Geral / ${PAGE_LABELS[state.view] || ''}</span>
      <div class="grow"></div>
      <button class="btn btn-primary btn-sm hide-mobile">${icon('plus')} Novo aviso</button>
      <button class="icon-btn">${icon('bell')}</button>
    </div>`;
  }
  const person = state.role === 'morador'
    ? { name: DATA.morador.nome.split(' ')[0], ini: DATA.morador.iniciais }
    : { name: DATA.portaria.nome, ini: DATA.portaria.iniciais };
  return `
    <div class="topbar">
      <div class="brand-mobile hide-desktop"><div class="logo-mark">V1</div> Conecta</div>
      <span class="breadcrumb hide-mobile">${DATA.condominio.nome} · ${PAGE_LABELS[state.view] || ''}</span>
      <div class="grow"></div>
      <button class="icon-btn">${icon('bell')}</button>
      <div class="avatar" style="width:32px;height:32px;font-size:11px">${person.ini}</div>
    </div>`;
}

function doLogin(role) {
  state.role = role;
  state.view = role === 'admin' ? 'visao-geral' : 'inicio';
  state.ui = {};
  render();
}

function logout() {
  state.role = null;
  state.view = null;
  state.ui = {};
  render();
}

function render() {
  const app = document.getElementById('app');
  if (!state.role) {
    app.innerHTML = renderLogin(state);
    bindLogin(app, { setLoginRole: (r) => { state.loginRole = r; render(); }, doLogin });
    return;
  }

  const { html, bind } = getContent();
  app.innerHTML = `
    <div class="shell">
      ${buildSidebar()}
      <div class="drawer-overlay ${state.drawerOpen ? 'open' : ''}" data-close-drawer></div>
      <div class="main">
        ${buildTopbar()}
        <div class="content">${html}</div>
      </div>
    </div>
    ${buildBottomNav()}
  `;

  app.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    state.view = a.dataset.nav;
    state.drawerOpen = false;
    render();
    window.scrollTo(0, 0);
  }));
  app.querySelectorAll('[data-toggle-drawer]').forEach(b => b.addEventListener('click', () => { state.drawerOpen = true; render(); }));
  app.querySelectorAll('[data-close-drawer]').forEach(b => b.addEventListener('click', () => { state.drawerOpen = false; render(); }));
  app.querySelectorAll('[data-logout]').forEach(b => b.addEventListener('click', logout));

  if (bind) bind(app, { update: render, state });
}

render();
