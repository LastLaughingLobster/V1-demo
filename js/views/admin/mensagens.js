
const ADMIN_CHAT_TABS = [
  { id: 'portaria', label: 'Portaria' },
  { id: 'admin', label: 'Moradores' },
];

function renderAdminMensagens(state) {
  const active = state.ui.adminChatTab || 'portaria';
  return `
    ${sectionHead('Mensagens', 'Canal direto com portaria e moradores')}
    ${chatView({ tabs: ADMIN_CHAT_TABS, activeTab: active, threads: DATA.mensagensThreads })}
  `;
}

function bindAdminMensagens(root, { update, state }) {
  root.querySelectorAll('[data-chat-tab]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.adminChatTab = btn.dataset.chatTab; update(); });
  });
}
