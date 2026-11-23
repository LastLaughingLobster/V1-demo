
function renderAdminPortariaAcessos() {
  const d = DATA.portariaInicio;
  return `
    ${sectionHead('Portaria e acessos', 'Monitoramento de entradas, códigos e reconhecimento de placas')}
    <div class="grid grid-3" style="margin-bottom:16px">
      <div class="card"><span class="card-title">Encomendas pendentes</span><div class="card-value">${d.stats.encomendas}</div></div>
      <div class="card"><span class="card-title">Visitas com código hoje</span><div class="card-value">${d.stats.visitas}</div></div>
      <div class="card"><span class="card-title">Placas lidas hoje</span><div class="card-value">${d.stats.placas}</div></div>
    </div>
    <div class="card">
      <strong style="font-size:14px">Últimos acessos</strong>
      ${dataTable({
        headers: ['Placa / código', 'Unidade', 'Tipo', 'Horário', 'Status'],
        rows: [
          ['RTY7U89', 'Garagem G1', 'Reconhecimento de placa', '21h14', badge('Pendente', 'warning')],
          ['QWE4R56', '1204', 'Morador', '18h42', badge('Liberado', 'success')],
          ['ABC1D23', '1204 · convidada', 'Código de visitante', '18h20', badge('Liberado', 'success')],
          ['482716', '1204', 'Código Ana Lima', 'válido até 23h', badge('Ativo', 'blue')],
        ],
      })}
    </div>
  `;
}
