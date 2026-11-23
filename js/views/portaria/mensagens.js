
const PORTARIA_CHAT_TABS = [
  { id: 'portaria', label: 'Moradores' },
  { id: 'admin', label: 'Administração' },
];

function renderPortariaMensagens(state) {
  const active = state.ui.portariaChatTab || 'portaria';
  return `
    ${sectionHead('Mensagens', 'Fale com moradores e administração')}
    ${chatView({ tabs: PORTARIA_CHAT_TABS, activeTab: active, threads: DATA.mensagensThreads })}
  `;
}

function bindPortariaMensagens(root, { update, state }) {
  root.querySelectorAll('[data-chat-tab]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.portariaChatTab = btn.dataset.chatTab; update(); });
  });
}
