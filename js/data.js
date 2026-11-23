// Dados mockados — refletem o conteúdo original dos protótipos do V1 Conecta.
const DATA = {
  condominio: {
    nome: 'Edifício Mirante',
    unidades: 96,
  },
  admin: {
    nome: 'Patrícia Costa',
    cargo: 'Administradora',
    iniciais: 'PC',
  },
  morador: {
    nome: 'Marina Souza',
    unidade: 'Torre B · Apto 1204',
    iniciais: 'MS',
  },
  portaria: {
    nome: 'Carlos',
    turno: 'Turno noite',
    iniciais: 'C',
  },

  // ---------- ADMIN ----------
  adminDashboard: {
    patrimonio: { valor: 'R$ 1.284.600', variacao: '+4,2% no ano' },
    receitasDespesas: { meses: ['Mai','Jun','Jul','Ago','Set','Out'] },
    calendarioEventos: [
      { dia: 22, texto: 'Limpeza caixa d\u2019água', freq: 'Semestral' },
      { dia: 28, texto: 'Revisão elevadores', freq: 'Mensal' },
    ],
    despesasOutubro: {
      total: 'R$ 98.420',
      itens: [
        { nome: 'Folha e encargos', pct: 48 },
        { nome: 'Energia', pct: 17 },
        { nome: 'Manutenção', pct: 14 },
        { nome: 'Água', pct: 12 },
      ],
    },
    equipeHoje: [
      { nome: 'José A.', funcao: 'Portaria', horario: '06h às 14h' },
      { nome: 'Lúcia M.', funcao: 'Portaria', horario: '14h às 22h' },
      { nome: 'Ronaldo F.', funcao: 'Zeladoria', horario: '2 tarefas' },
      { nome: 'Sandra P.', funcao: 'Limpeza', horario: '08h às 17h' },
    ],
    portariaAgora: { encomendas: 14, visitas: 22, placasLidas: 187, alerta: '1 placa não cadastrada aguardando decisão da portaria' },
    assembleia: { titulo: 'Assembleia geral', horario: 'hoje 19h30', confirmadas: 48, total: 96 },
    avisos: [
      { nivel: 'Crítico', texto: 'Elevador social Torre B · manutenção 14h às 17h' },
      { nivel: 'Geral', texto: 'Água suspensa dia 22, das 8h às 12h' },
    ],
    faturasNovembro: { emitidos: 96, inadimplencia: '4,8%', unidades: 5 },
  },
  equipeEscalas: {
    edificio: 'Edifício Mirante · 7 funcionários',
    semana: [
      { dow: 'Seg', num: 19 }, { dow: 'Ter', num: 20, active: true }, { dow: 'Qua', num: 21 },
      { dow: 'Qui', num: 22 }, { dow: 'Sex', num: 23 }, { dow: 'Sáb', num: 24 }, { dow: 'Dom', num: 25 },
    ],
    turnosHoje: [
      { nome: 'José A.', funcao: 'Portaria · manhã', horario: '06h às 14h' },
      { nome: 'Lúcia M.', funcao: 'Portaria · tarde', horario: '14h às 22h' },
      { nome: 'Carlos D.', funcao: 'Portaria · noite', horario: '22h às 06h' },
      { nome: 'Ronaldo F.', funcao: 'Zeladoria', horario: '07h às 16h' },
      { nome: 'Sandra P.', funcao: 'Limpeza', horario: '08h às 17h' },
    ],
    tarefas: [
      { titulo: 'Trocar lâmpadas do hall da Torre A', sub: 'Ronaldo F. · até 12h', feito: false },
      { titulo: 'Acompanhar técnico dos elevadores', sub: 'Zeladoria · 14h', feito: false },
      { titulo: 'Lavar garagem G1', sub: 'Sandra P. · até 17h', feito: true },
    ],
  },
  calendarioCondominio: {
    mesAno: 'Outubro 2026',
    diasComEvento: [6, 15, 22, 28],
    diaSelecionado: 22,
    detalheDia: 'Limpeza da caixa d\u2019água, 8h às 12h',
    recorrentes: [
      { nome: 'Limpeza da caixa d\u2019água', proxima: 'Próxima 22/10 · Ronaldo F.', freq: 'Semestral' },
      { nome: 'Revisão dos elevadores', proxima: 'Próxima 28/10 · empresa contratada', freq: 'Mensal' },
      { nome: 'Dedetização', proxima: 'Próxima 05/11', freq: 'Trimestral' },
      { nome: 'Recarga dos extintores', proxima: 'Próxima mar/2027', freq: 'Anual' },
    ],
  },
  adminMenu: [
    { section: 'GERAL', items: [
      { id: 'visao-geral', label: 'Visão geral', icon: 'grid' },
      { id: 'financeiro', label: 'Financeiro e patrimônio', icon: 'wallet' },
      { id: 'faturas', label: 'Faturas e boletos', icon: 'file' },
      { id: 'documentos', label: 'Documentos', icon: 'file' },
    ]},
    { section: 'OPERAÇÃO', items: [
      { id: 'portaria-acessos', label: 'Portaria e acessos', icon: 'shield' },
      { id: 'encomendas', label: 'Encomendas', icon: 'package' },
      { id: 'manutencoes', label: 'Manutenções', icon: 'wrench' },
      { id: 'reservas', label: 'Reservas', icon: 'calendar' },
      { id: 'achados', label: 'Achados e perdidos', icon: 'search2' },
    ]},
    { section: 'PESSOAS', items: [
      { id: 'equipe', label: 'Equipe e escalas', icon: 'users' },
      { id: 'moradores', label: 'Moradores', icon: 'user' },
      { id: 'mensagens', label: 'Mensagens', icon: 'chat' },
      { id: 'assembleias', label: 'Assembleias e atas', icon: 'building' },
    ]},
  ],

  // ---------- PORTARIA ----------
  portariaInicio: {
    stats: { encomendas: 14, visitas: 22, placas: 187 },
    reconhecimento: { camera: 'Câmera 02 · Garagem G1 · 21h14', placa: 'RTY7U89', status: 'Placa não cadastrada. Nenhum código vinculado. Confirmar com o morador antes de abrir.' },
    codigosRecentes: [
      { placa: 'QWE4R56', sub: 'Apto 1204', tag: 'Morador · 18h42' },
      { placa: 'ABC1D23', sub: 'convidada 1204', tag: 'Código · 18h20' },
    ],
    chegadas: [
      { nome: 'Marina S. · 1204', sub: 'Corrida por app · chega 21h21', eta: '6 min', pct: 85 },
      { nome: 'Paulo R. · 803', sub: 'Localização em tempo real · chega 21h29', eta: '14 min', pct: 35 },
    ],
    alerta: 'Elevador social Torre B em manutenção amanhã, 14h às 17h. Orientar moradores para o de serviço.',
  },
  portariaEncomendas: {
    origens: ['Mercado Livre', 'Amazon', 'iFood', 'Shopee', 'Correios', 'Outros'],
    aguardando: [
      { unidade: '1204', titulo: 'Mercado Livre · caixa média', sub: '21h02 · morador notificado' },
      { unidade: '803', titulo: 'iFood · pedido de mercado', sub: '20h47 · perecível, avisar de novo', alerta: true },
      { unidade: '402', titulo: 'Amazon · envelope', sub: '16h15 · morador notificado' },
      { unidade: '1501', titulo: 'Correios · caixa pequena', sub: '11h30 · morador notificado' },
    ],
  },

  // ---------- MORADOR ----------
  moradorInicio: {
    aviso: 'Elevador social da Torre B em manutenção amanhã, das 14h às 17h. Use o elevador de serviço.',
    encomendasPendentes: 2,
    proximaFatura: { valor: 'R$ 842,50', sub: 'Vence em 10/11 · boleto e Pix' },
    agenda: [
      { titulo: 'Assembleia geral online', sub: '19h30 · ata automaticamente', action: 'Entrar' },
      { titulo: 'Limpeza da caixa d\u2019água', sub: 'Manutenção programada · água suspensa das 8h às 12h' },
      { titulo: 'Novo item em achados e perdidos', sub: 'Chave com chaveiro azul · hall da Torre B' },
    ],
  },
  moradorAcessos: {
    codigoAtivo: { codigo: '482716', valido: true, convidado: 'Ana Lima · convidada', quando: 'Hoje, das 18h às 23h · veículo ABC1D23' },
    cadastrosSalvos: [
      { nome: 'Ana Lima', sub: 'Convidada · carro ABC1D23', iniciais: 'AL' },
      { nome: 'Rosa Silva', sub: 'Diarista · terças e quintas, 8h às 16h', iniciais: 'RS', recorrente: true },
      { nome: 'João', sub: 'Eletricista · terceirizado liberado até 25/10', iniciais: 'J' },
    ],
    chegando: { sub: 'Compartilhe a corrida de app ou sua localização. A portaria vê só o horário previsto, sem mapa.', eta: 'Chegada prevista 21h21 · em 6 min' },
  },
  moradorFinancas: {
    fatura: { valor: 'R$ 842,50', venc: 'Vencimento 10/11/2026 · taxa ordinária + fundo de obras' },
    patrimonio: { valor: 'R$ 1.284.600', variacao: '+4,2% no ano' },
    despesasOutubro: {
      total: 'R$ 98.420',
      itens: [
        { nome: 'Folha e encargos', pct: 48 },
        { nome: 'Energia', pct: 17 },
        { nome: 'Manutenção', pct: 14 },
        { nome: 'Água', pct: 12 },
        { nome: 'Outros', pct: 9 },
      ],
    },
    anteriores: [{ mes: 'Outubro', valor: 'R$ 842,50', status: 'Pago' }],
  },
  moradorCondominio: {
    assembleia: { titulo: 'Assembleia geral ordinária', sub: 'Pauta: previsão orçamentária 2027 e obra da fachada. Votação pelo app e ata gerada por IA ao final.', horario: 'HOJE ÀS 19h30', confirmadas: '48 unidades confirmadas' },
    areas: ['Salão de festas', 'Churrasqueira', 'Quadra', 'Espaço gourmet'],
    semana: [
      { dow: 'Qua', num: 21 }, { dow: 'Qui', num: 22 }, { dow: 'Sex', num: 23 },
      { dow: 'Sáb', num: 24, active: true }, { dow: 'Dom', num: 25 }, { dow: 'Seg', num: 26 }, { dow: 'Ter', num: 27 },
    ],
    manutencoes: [
      { data: 'OUT 22', titulo: 'Limpeza da caixa d\u2019água', sub: 'Semestral · 8h às 12h' },
      { data: 'OUT 28', titulo: 'Revisão dos elevadores', sub: 'Mensal · um elevador por vez' },
      { data: 'NOV 05', titulo: 'Dedetização das áreas comuns', sub: 'Trimestral · manter janelas fechadas' },
    ],
  },
  mensagensThreads: {
    portaria: [
      { from: 'in', texto: 'Boa noite, Marina! Chegou uma encomenda do Mercado Livre para o 1204.', time: '21h03' },
      { from: 'out', texto: 'Obrigada! Desço em 10 minutos para buscar.', time: '21h05' },
      { from: 'in', texto: 'Combinado. Sua convidada Ana já foi liberada pelo código 482716.', time: '21h12' },
    ],
    ia: [
      { from: 'in', texto: 'Olá! Sou a assistente do V1 Conecta. Posso te ajudar a reservar áreas, consultar faturas ou abrir chamados. O que você precisa?', time: '20h40' },
    ],
    admin: [
      { from: 'in', texto: 'Olá Marina, a assembleia de hoje às 19h30 vai tratar da obra da fachada. Conta com sua presença!', time: '09h15' },
    ],
  },
};
