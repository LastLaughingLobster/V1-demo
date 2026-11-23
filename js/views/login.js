
function renderLogin(state) {
  const role = state.loginRole || 'morador';
  const tabs = [
    { id: 'morador', label: 'Morador' },
    { id: 'portaria', label: 'Portaria' },
    { id: 'admin', label: 'Admin' },
  ];
  const placeholders = {
    morador: 'marina@email.com',
    portaria: 'carlos@v1conecta.com',
    admin: 'patricia@v1conecta.com',
  };
  return `
  <div class="login-screen">
    <div class="login-hero">
      <div class="logo-mark">V1</div>
      <h1>Praticidade para quem mora.<br/>Produtividade para quem administra.</h1>
      <p>O V1 Conecta reúne portaria, financeiro, reservas, manutenções e comunicação do seu condomínio em um só lugar.</p>
      <div class="hero-feats">
        <div class="feat"><span class="ic">${icon('shield')}</span> Acessos e portaria digital, sem complicação</div>
        <div class="feat"><span class="ic">${icon('wallet')}</span> Financeiro transparente para toda a comunidade</div>
        <div class="feat"><span class="ic">${icon('chat')}</span> Comunicação direta com portaria e administração</div>
        <div class="feat"><span class="ic">${icon('book')}</span> Tutorial completo para você aprender em minutos</div>
      </div>
    </div>
    <div class="login-form-wrap">
      <div class="login-card">
        <div class="brand-mobile-only">
          <div class="logo-mark" style="width:38px;height:38px;border-radius:11px;background:linear-gradient(145deg,var(--beige-300),var(--beige-500));color:var(--blue-900);display:flex;align-items:center;justify-content:center;font-weight:800">V1</div>
          <strong style="font-size:17px;color:var(--blue-900)">Conecta</strong>
        </div>

        <div class="role-tabs">
          ${tabs.map(t => `<button data-login-role="${t.id}" class="${role === t.id ? 'active' : ''}">${t.label}</button>`).join('')}
        </div>

        <form class="stack" data-login-form>
          <div class="field">
            <label>${role === 'admin' ? 'E-mail' : 'E-mail ou CPF'}</label>
            <input class="input" type="text" placeholder="${placeholders[role]}" />
          </div>
          <div class="field">
            <label>Senha</label>
            <div class="input-wrap">
              <input class="input" type="password" placeholder="Sua senha" />
              <button type="button" class="icon-toggle">${icon('search2')}</button>
            </div>
          </div>
          <div class="row between">
            <label class="checkbox-row"><input type="checkbox" checked /> Gravar login e senha</label>
            <a class="small text-blue semibold" href="#">Esqueci a senha</a>
          </div>
          <button type="submit" class="btn btn-primary btn-block" data-login-submit="${role}">Entrar como ${role === 'morador' ? 'morador' : role === 'portaria' ? 'portaria' : 'admin'}</button>
          <button type="button" class="btn btn-outline btn-block" data-login-submit="${role}">${icon('fingerprint')} Entrar com Face ID ou digital</button>
        </form>
        <p class="small muted" style="text-align:center;margin-top:18px">Disponível para iPhone, Android e web</p>
      </div>
    </div>
  </div>`;
}

function bindLogin(root, { setLoginRole, doLogin }) {
  root.querySelectorAll('[data-login-role]').forEach(btn => {
    btn.addEventListener('click', () => setLoginRole(btn.dataset.loginRole));
  });
  root.querySelectorAll('[data-login-submit]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      doLogin(btn.dataset.loginSubmit);
    });
  });
  const form = root.querySelector('[data-login-form]');
  if (form) form.addEventListener('submit', (e) => { e.preventDefault(); doLogin(root.querySelector('[data-login-submit]').dataset.loginSubmit); });
}
