
const MORADOR_CHAT_TABS = [
  { id: 'portaria', label: 'Portaria' },
  { id: 'ia', label: 'Assistente IA' },
  { id: 'admin', label: 'Administração' },
];

function renderMoradorMensagens(state) {
  const active = state.ui.moradorChatTab || 'portaria';
  return `
    ${sectionHead('Mensagens', 'Assembleias, reservas, agenda e achados')}
    ${chatView({ tabs: MORADOR_CHAT_TABS, activeTab: active, threads: DATA.mensagensThreads })}
  `;
}

function bindMoradorMensagens(root, { update, state }) {
  root.querySelectorAll('[data-chat-tab]').forEach(btn => {
    btn.addEventListener('click', () => { state.ui.moradorChatTab = btn.dataset.chatTab; update(); });
  });
}
