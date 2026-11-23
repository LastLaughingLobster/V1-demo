
function renderAdminEquipe(state) {
  const d = DATA.equipeEscalas;
  const tarefas = state.ui.adminTarefas || d.tarefas;
  return `
    ${sectionHead('Equipe e escalas', d.edificio)}
    <div class="two-col">
      <div class="stack">
        <div class="card">
          ${weekStrip(d.semana)}
          <div class="row between" style="margin-top:16px">
            <strong style="font-size:14px">Turnos de hoje</strong>
            <a href="#" class="small text-blue semibold">Editar escala</a>
          </div>
          ${d.turnosHoje.map(t => `
            <div class="list-item">
              <div class="dot"></div>
              <div class="grow"><div class="title">${t.nome}</div><div class="sub">${t.funcao}</div></div>
              <span class="small semibold">${t.horario}</span>
            </div>`).join('')}
        </div>
      </div>
      <div class="stack">
        <div class="card">
          <div class="row between">
            <strong style="font-size:14px">Tarefas delegadas</strong>
            <span class="small muted">${tarefas.filter(t => t.feito).length} de ${tarefas.length} concluídas</span>
          </div>
          <div style="margin-top:8px">
            ${tarefas.map((t, i) => `
              <label class="list-item" style="cursor:pointer">
                <input type="checkbox" data-task-idx="${i}" ${t.feito ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--blue-600)" />
                <div class="grow">
                  <div class="title" style="${t.feito ? 'text-decoration:line-through;color:var(--ink-400)' : ''}">${t.titulo}</div>
                  <div class="sub">${t.sub}</div>
                </div>
              </label>`).join('')}
          </div>
          <button class="btn btn-dark btn-block" style="margin-top:12px">+ Delegar nova tarefa</button>
        </div>
      </div>
    </div>
  `;
}

function bindAdminEquipe(root, { update, state }) {
  root.querySelectorAll('[data-task-idx]').forEach(cb => {
    cb.addEventListener('change', () => {
      const idx = Number(cb.dataset.taskIdx);
      const tarefas = state.ui.adminTarefas || [...DATA.equipeEscalas.tarefas];
      tarefas[idx] = { ...tarefas[idx], feito: cb.checked };
      state.ui.adminTarefas = tarefas;
      update();
    });
  });
}
