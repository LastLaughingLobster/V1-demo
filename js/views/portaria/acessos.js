
function renderPortariaAcessos(state) {
  const value = state.ui.portariaCode || '';
  const cells = Array.from({ length: 6 }, (_, i) => value[i] || '');
  return `
    ${sectionHead('Validar acesso', 'Digite o código da unidade ou leia o QR Code do visitante.')}

    <div class="card" style="max-width:420px;margin:0 auto">
      <div class="keypad-display">
        ${cells.map(c => `<div class="cell">${c}</div>`).join('')}
      </div>
      <div class="small muted" style="text-align:center;margin-bottom:18px">Dica: no esboço, o código de teste é 482716</div>
      <div class="keypad">
        ${[1,2,3,4,5,6,7,8,9].map(n => `<button data-key="${n}">${n}</button>`).join('')}
        <button class="accent" data-key="C">C</button>
        <button data-key="0">0</button>
        <button class="accent" data-key="back">⌫</button>
      </div>
      <button class="btn btn-outline btn-block" style="margin-top:18px" data-key="qr">${icon('qr')} Ler QR Code</button>
    </div>
  `;
}

function bindPortariaAcessos(root, { update, state }) {
  root.querySelectorAll('[data-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.key;
      let v = state.ui.portariaCode || '';
      if (k === 'C') v = '';
      else if (k === 'back') v = v.slice(0, -1);
      else if (k === 'qr') { /* simula leitura de QR */ v = '482716'; }
      else if (v.length < 6) v += k;
      state.ui.portariaCode = v;
      update();
    });
  });
}
