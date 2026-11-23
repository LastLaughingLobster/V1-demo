
const CONTENT = {
  morador: {
    titulo: 'Bem-vindo(a) ao V1 Conecta',
    sub: 'Em poucos minutos você aprende a usar todas as funções do app como morador.',
    passos: [
      { t: 'Acompanhe tudo pela Início', d: 'Veja avisos importantes, encomendas pendentes, a próxima fatura e a agenda do condomínio assim que abrir o app.' },
      { t: 'Libere visitas em Acessos', d: 'Cadastre convidados, funcionários ou terceirizados, gere um código de acesso e envie por WhatsApp ou mostre o QR Code na portaria.' },
      { t: 'Pague e acompanhe o financeiro', d: 'Em Finanças, copie o Pix ou baixe o boleto, acompanhe o patrimônio do condomínio e veja o detalhamento das despesas do mês.' },
      { t: 'Participe do condomínio', d: 'Em Condomínio você entra em assembleias online, reserva áreas comuns, acompanha manutenções programadas e consulta achados e perdidos.' },
      { t: 'Fale com portaria e administração', d: 'Use Mensagens para falar direto com a portaria, a administração ou a assistente de IA, disponível 24h para dúvidas rápidas.' },
    ],
    faq: [
      { q: 'Como gero um código de acesso para visitantes?', r: 'Acesse a aba Acessos, selecione o convidado (ou cadastre um novo) e toque em "Gerar código". O código pode ser enviado por mensagem ou mostrado como QR Code na portaria.' },
      { q: 'Como aviso que estou chegando de app de corrida?', r: 'Na Início ou em Acessos, toque em "Estou chegando" e compartilhe o horário previsto. A portaria recebe apenas o horário, sem acesso à sua localização exata.' },
      { q: 'Onde vejo minhas faturas antigas?', r: 'Em Finanças, role até "Faturas anteriores" ou toque em "Ver prestação de contas completa" para o histórico detalhado.' },
      { q: 'Como reservo uma área comum?', r: 'Em Condomínio, escolha a área desejada, selecione o dia na semana exibida e toque em "Reservar".' },
    ],
  },
  portaria: {
    titulo: 'Guia rápido para a equipe de portaria',
    sub: 'Siga este passo a passo para atender moradores e visitantes com agilidade.',
    passos: [
      { t: 'Veja o resumo do turno na Início', d: 'Acompanhe encomendas pendentes, visitas com código liberado e placas lidas pelas câmeras em tempo real.' },
      { t: 'Valide acessos com código ou QR', d: 'Em Acessos, digite o código informado pelo visitante ou use "Ler QR Code" para liberar a entrada rapidamente.' },
      { t: 'Registre encomendas em segundos', d: 'Em Encomendas, fotografe a etiqueta — o app sugere a unidade automaticamente — selecione a origem e toque em "Registrar e notificar morador".' },
      { t: 'Fale com moradores e administração', d: 'Use Mensagens para confirmar liberações, avisar sobre encomendas perecíveis ou repassar informações da administração.' },
    ],
    faq: [
      { q: 'O que fazer quando uma placa não está cadastrada?', r: 'O sistema mostra o alerta "Placa não cadastrada". Confirme com o morador pelo chat ou interfone antes de tocar em "Liberar entrada".' },
      { q: 'Como marco uma encomenda como entregue?', r: 'Na lista "Aguardando retirada", toque em "Entregar" ao lado do item correspondente.' },
      { q: 'O morador pode acompanhar a chegada de uma corrida?', r: 'Sim. Quando o morador compartilha "Estou chegando", você vê o tempo estimado e uma barra de progresso na tela Início.' },
    ],
  },
  admin: {
    titulo: 'Tutorial da administração',
    sub: 'Entenda como configurar e acompanhar a gestão completa do condomínio.',
    passos: [
      { t: 'Visão geral do condomínio', d: 'A tela inicial reúne patrimônio, receitas x despesas, equipe do dia, portaria em tempo real, avisos ativos e faturas do mês — tudo em um painel.' },
      { t: 'Gerencie a equipe e as escalas', d: 'Em "Equipe e escalas", monte os turnos da semana, acompanhe tarefas delegadas e crie novas demandas para zeladoria e portaria.' },
      { t: 'Organize o calendário de manutenções', d: 'Cadastre manutenções recorrentes (mensal, trimestral, semestral ou anual) e elas aparecem automaticamente para moradores e portaria.' },
      { t: 'Acompanhe o financeiro e patrimônio', d: 'Consulte receitas, despesas, fundo de reserva e emita faturas e boletos diretamente pelo painel, sincronizado com o sistema contábil.' },
      { t: 'Centralize comunicação e assembleias', d: 'Publique avisos, conduza assembleias com votação pelo app e gere atas automaticamente com IA ao final da reunião.' },
    ],
    faq: [
      { q: 'Como credencio um novo morador?', r: 'Acesse "Moradores" no menu Pessoas, toque em "Novo morador" e preencha unidade, contato e documentos.' },
      { q: 'Como crio uma manutenção recorrente?', r: 'Vá em "Manutenções" ou no calendário, toque em "Nova manutenção recorrente" e escolha a frequência: mensal, trimestral, semestral ou anual.' },
      { q: 'Como os moradores recebem avisos urgentes?', r: 'Use "Novo aviso" na Visão geral e marque a severidade (Crítico ou Geral). O aviso aparece na Início de todos os moradores.' },
      { q: 'A ata da assembleia é gerada automaticamente?', r: 'Sim. Ao encerrar a sala de assembleia, a IA do V1 Conecta gera um rascunho de ata com os pontos discutidos para revisão da administração.' },
    ],
  },
};

function renderTutorial(role, state) {
  const c = CONTENT[role] || CONTENT.morador;
  const openId = state.ui.tutorialOpenFaq ?? -1;
  return `
    ${sectionHead('Tutorial', 'Aprenda a usar o V1 Conecta com um passo a passo rápido')}

    <div class="tutorial-hero" style="margin-bottom:18px">
      <div class="row gap-sm" style="position:relative;z-index:1">
        <span style="background:rgba(255,255,255,.15);width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center">${icon('book')}</span>
        <div>
          <div style="font-size:18px;font-weight:800">${c.titulo}</div>
          <div class="small" style="color:var(--blue-100);margin-top:4px;max-width:520px">${c.sub}</div>
        </div>
      </div>
      <button class="btn btn-primary" style="margin-top:18px;background:var(--beige-300);color:var(--blue-900);position:relative;z-index:1">${icon('play')} Assistir vídeo de introdução</button>
    </div>

    <div class="two-col">
      <div class="card">
        <strong style="font-size:14px">Passo a passo</strong>
        <div style="margin-top:6px">
          ${c.passos.map((p, i) => `
            <div class="tutorial-step">
              <div class="num">${i + 1}</div>
              <div>
                <div class="semibold" style="font-size:13.5px">${p.t}</div>
                <div class="small muted" style="margin-top:3px;line-height:1.55">${p.d}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <div class="stack">
        <div class="card">
          <strong style="font-size:14px">Perguntas frequentes</strong>
          <div style="margin-top:6px">
            ${c.faq.map((f, i) => accordionItem(`faq-${i}`, f.q, f.r, openId === i)).join('')}
          </div>
        </div>
        <div class="card" style="background:var(--beige-100);border-color:var(--beige-300)">
          <div class="row gap-sm">
            <span style="color:var(--beige-600)">${icon('chat')}</span>
            <strong style="font-size:13.5px">Ainda com dúvidas?</strong>
          </div>
          <p class="small muted" style="margin-top:6px">Fale com a assistente de IA pela aba Mensagens — ela responde na hora, 24 horas por dia.</p>
          <button class="btn btn-beige btn-sm" style="margin-top:8px">Abrir assistente IA</button>
        </div>
      </div>
    </div>
  `;
}

function bindTutorial(root, { update, state }) {
  root.querySelectorAll('[data-toggle-accordion]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.toggleAccordion;
      const idx = Number(id.split('-')[1]);
      state.ui.tutorialOpenFaq = state.ui.tutorialOpenFaq === idx ? -1 : idx;
      update();
    });
  });
}
