
function card({ title, value, sub, variant = '', right = '', body = '', className = '' } = {}) {
  const cls = `card ${variant === 'dark' ? 'card-dark' : ''} ${variant === 'beige' ? 'card-beige' : ''} ${className}`;
  return `
    <div class="${cls}">
      ${title || right ? `<div class="row between"><div class="card-title">${title || ''}</div>${right}</div>` : ''}
      ${value ? `<div class="card-value">${value}</div>` : ''}
      ${sub ? `<div class="small muted" style="margin-top:4px">${sub}</div>` : ''}
      ${body}
    </div>`;
}

function badge(text, kind = 'blue', withDot = false) {
  return `<span class="badge badge-${kind}${withDot ? ' badge-dot' : ''}">${text}</span>`;
}

function chip(text, active = false, attrs = '') {
  return `<button class="chip ${active ? 'active' : ''}" ${attrs}>${text}</button>`;
}

function progress(pct, beige = false, thin = false) {
  return `<div class="progress ${beige ? 'beige' : ''} ${thin ? 'thin' : ''}"><span style="width:${pct}%"></span></div>`;
}

function listItem({ title, sub, right = '', beige = false }) {
  return `
    <div class="list-item">
      <div class="dot ${beige ? 'beige' : ''}"></div>
      <div class="grow">
        <div class="title">${title}</div>
        ${sub ? `<div class="sub">${sub}</div>` : ''}
      </div>
      ${right}
    </div>`;
}

function avatar(initials, cls = '') {
  return `<div class="avatar ${cls}">${initials}</div>`;
}

function weekStrip(days) {
  return `<div class="week-strip">${days.map(d => `
    <div class="day ${d.active ? 'active' : ''}">
      <span class="dow">${d.dow}</span>
      <span class="num">${d.num}</span>
    </div>`).join('')}</div>`;
}

function sectionHead(title, sub) {
  return `<div class="page-head"><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div>`;
}

function emptyState(text, iconName = 'search2') {
  return `<div class="empty-state">${icon(iconName)}<div>${text}</div></div>`;
}

function accordionItem(id, title, bodyHtml, open = false) {
  return `
    <div class="accordion-item ${open ? 'open' : ''}" data-accordion="${id}">
      <button class="accordion-head" data-toggle-accordion="${id}">
        <span>${title}</span>
        ${icon('chevronDown')}
      </button>
      <div class="accordion-body">${bodyHtml}</div>
    </div>`;
}

function dataTable({ headers, rows }) {
  return `
    <div style="overflow-x:auto">
      <table class="table">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function chatView({ tabs, activeTab, threads, placeholder = 'Escreva uma mensagem' }) {
  const msgs = threads[activeTab] || [];
  return `
    <div class="chat-wrap">
      <div class="chat-tabs">
        ${tabs.map(t => `<button data-chat-tab="${t.id}" class="${activeTab === t.id ? 'active' : ''}">${t.label}</button>`).join('')}
      </div>
      <div class="chat-messages">
        ${msgs.map(m => `
          <div class="msg ${m.from === 'out' ? 'out' : 'in'}">
            ${m.texto}
            <span class="time">${m.time}</span>
          </div>`).join('') || emptyState('Nenhuma mensagem ainda', 'chat')}
      </div>
      <div class="chat-input-row">
        <input class="input" placeholder="${placeholder}" />
        <button class="icon-btn" style="background:var(--blue-600);color:#fff;border:none">${icon('arrowRight')}</button>
      </div>
    </div>`;
}

function monthGrid({ monthLabel, marks = [], selected, onCellAttr = 'data-day' }) {
  const dows = ['D','S','T','Q','Q','S','S'];
  // Simplificado: grade fixa de 31 dias começando numa quinta (apenas ilustrativo, igual ao mockup)
  const startOffset = 4;
  const daysInMonth = 31;
  let cells = '';
  for (let i = 0; i < startOffset; i++) cells += `<div class="cell muted-day"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const isMark = marks.includes(d);
    const isSelected = d === selected;
    cells += `<div class="cell ${isSelected ? 'selected' : ''}" ${onCellAttr}="${d}">${d}${isMark && !isSelected ? '<span class="mark"></span>' : ''}</div>`;
  }
  return `
    <div class="row between" style="margin-bottom:10px">
      <strong style="color:var(--blue-900)">${monthLabel}</strong>
      <div class="row gap-xs">
        <button class="icon-btn btn-sm" style="width:30px;height:30px">${icon('chevronRight', '')}</button>
      </div>
    </div>
    <div class="month-grid">
      ${dows.map(d => `<div class="dow">${d}</div>`).join('')}
      ${cells}
    </div>`;
}
