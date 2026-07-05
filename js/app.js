const state = {
  view: 'home',
  selectedPattern: null,
  query: '',
  category: 'Todas',
  level: 'Todos',
  favorites: JSON.parse(localStorage.getItem('lad_favorites_v3') || '[]'),
  checklist: JSON.parse(localStorage.getItem('lad_project_checklist_v3') || '{}'),
  sim: { motor: false, emergency: true, fault: false }
};

const $ = s => document.querySelector(s);
const view = $('#appView');
const pageTitle = $('#pageTitle');
const toast = $('#toast');

const titles = {
  home: 'LAD Pocket Pro Siemens', patterns: 'Padrões LAD Siemens', newProject: 'Projeto Novo no TIA Portal',
  tags: 'Banco de Tags Siemens', tia: 'Guia TIA Portal', hmi: 'IHM Siemens', drive: 'Inversor Siemens',
  simulator: 'Simulador Didático', assistant: 'Assistente Siemens Pro', favorites: 'Favoritos', about: 'Sobre o Projeto'
};

function setView(name, extra = {}) {
  state.view = name;
  if (extra.pattern) state.selectedPattern = extra.pattern;
  pageTitle.textContent = titles[name] || 'LAD Pocket Pro Siemens';
  document.querySelectorAll('#mainNav button').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  $('#sidebar').classList.remove('open');
  render();
}

function showToast(msg) {
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function copyText(text, msg='Copiado') {
  navigator.clipboard?.writeText(text).then(() => showToast(msg)).catch(() => showToast('Não foi possível copiar'));
}

function saveFavs() { localStorage.setItem('lad_favorites_v3', JSON.stringify(state.favorites)); }
function isFav(id) { return state.favorites.includes(id); }
function toggleFav(id) { isFav(id) ? state.favorites = state.favorites.filter(x => x !== id) : state.favorites.push(id); saveFavs(); render(); }

function categories() { return ['Todas', ...new Set(APP_DATA.patterns.map(p => p.category))]; }
function levels() { return ['Todos', 'Básico', 'Intermediário', 'Avançado']; }

function filteredPatterns(source = APP_DATA.patterns) {
  const q = state.query.toLowerCase().trim();
  return source.filter(p =>
    (!q || `${p.title} ${p.category} ${p.objective} ${p.application}`.toLowerCase().includes(q)) &&
    (state.category === 'Todas' || p.category === state.category) &&
    (state.level === 'Todos' || p.level === state.level)
  );
}

function render() {
  const routes = { home, patterns, newProject, tags, tia, hmi, drive, simulator, assistant, favorites, about, detail: detailPattern };
  view.innerHTML = (routes[state.view] || home)();
  bindViewEvents();
}

function home() {
  const modules = [
    ['patterns','▦','Padrões LAD','100 padrões Siemens com tags, explicação e Ladder visual.'],
    ['newProject','▣','Projeto Novo','Checklist para criar projeto, CLP, tags, blocos, IHM e inversor.'],
    ['assistant','◈','Assistente Siemens Pro','Pesquisa profunda guiada para dúvidas reais de bancada e indústria.'],
    ['tags','⌗','Banco de Tags','Modelo de tags Siemens para copiar e exportar.'],
    ['tia','⚙','TIA Portal','Boas práticas de organização de projeto.'],
    ['hmi','▤','IHM Siemens','Telas, alarmes, setpoints e diagnóstico.'],
    ['drive','≈','Inversor Siemens','SINAMICS, Profinet, setpoint e falhas.'],
    ['simulator','▶','Simulador','Teste didático de partida, emergência e falha.']
  ];
  return `
    <div class="hero">
      <div class="glass-card">
        <span class="badge orange">V3 · Menu funcional + Ladder real + tecnologia aplicada</span>
        <h2 class="hero-title"><span class="gradient-text">LAD Pocket Pro Siemens</span></h2>
        <p>Biblioteca prática para CLP Siemens S7-1200/S7-1500 no TIA Portal, com 100 padrões LAD, passo a passo de projeto novo, banco de tags, assistente técnico e simulação didática.</p>
        <div class="quick-actions">
          <button class="primary-btn" data-go="patterns">Ver padrões LAD</button>
          <button class="ghost-btn" data-go="newProject">Iniciar projeto novo</button>
          <button class="ghost-btn" data-go="assistant">Pesquisar dúvida técnica</button>
        </div>
      </div>
      <div class="glass-card">
        <div class="stats-grid">
          <div class="stat"><strong>100</strong><span>Padrões Siemens</span></div>
          <div class="stat"><strong>9</strong><span>Módulos técnicos</span></div>
          <div class="stat"><strong>PWA</strong><span>Instalável e offline</span></div>
          <div class="stat"><strong>LAD</strong><span>Esquemas visuais</span></div>
        </div>
      </div>
    </div>
    <div class="section-title"><h2>Módulos do app</h2><span class="muted">Toque em um card para abrir</span></div>
    <div class="modules-grid">${modules.map(m => `
      <div class="card module-card" data-go="${m[0]}"><div class="module-icon">${m[1]}</div><h3>${m[2]}</h3><p class="muted">${m[3]}</p></div>`).join('')}
    </div>`;
}

function patterns() {
  const items = filteredPatterns();
  return `
    ${patternControls()}
    <div class="section-title"><h2>${items.length} padrões encontrados</h2><span class="muted">Clique em um padrão para abrir</span></div>
    <div class="pattern-grid">${items.map(patternCard).join('')}</div>`;
}

function patternControls() {
  return `<div class="controls">
    <input class="input" id="searchInput" placeholder="Pesquisar: partida, inversor, Profinet, IHM..." value="${state.query}">
    <select id="categoryFilter">${categories().map(c => `<option ${c===state.category?'selected':''}>${c}</option>`).join('')}</select>
    <select id="levelFilter">${levels().map(l => `<option ${l===state.level?'selected':''}>${l}</option>`).join('')}</select>
  </div>`;
}

function patternCard(p) {
  return `<div class="pattern-card" data-pattern="${p.id}">
    <span class="badge">${String(p.id).padStart(2,'0')}</span> <span class="badge orange">${p.level}</span>
    <h3>${p.title}</h3><p class="muted">${p.category}</p>
    <div class="ladder-box">${miniLadder(p.ladderType)}</div>
  </div>`;
}

function detailPattern() {
  const p = state.selectedPattern || APP_DATA.patterns[0];
  const tagsText = p.tags.map(t => `${t.name};${t.address};${t.type};${t.description}`).join('\n');
  const logic = ladderAscii(p);
  return `<div class="detail-layout">
    <div class="panel">
      <button class="ghost-btn" data-go="patterns">← Voltar</button>
      <h2>${String(p.id).padStart(2,'0')} · ${p.title}</h2>
      <p><span class="badge">${p.category}</span> <span class="badge orange">${p.level}</span> <span class="badge green">${p.clp}</span></p>
      <div class="kv"><strong>Objetivo</strong><span>${p.objective}</span></div>
      <div class="kv"><strong>Aplicação</strong><span>${p.application}</span></div>
      <div class="ladder-box"><p class="network-title">Network 1 — ${p.title}</p>${renderLadder(p)}</div>
      <h3>Explicação técnica</h3><p class="muted">${p.explanation}</p>
      <h3>Passo a passo no TIA Portal</h3><div class="steps">${p.tiaSteps.map((s,i)=>`<div class="step"><span class="badge">${i+1}</span><span>${s}</span></div>`).join('')}</div>
    </div>
    <div class="panel">
      <h3>Tags Siemens</h3>${tagTable(p.tags)}
      <div class="quick-actions">
        <button class="small-btn" data-copy="${encodeURIComponent(tagsText)}">Copiar tags</button>
        <button class="small-btn" data-copy="${encodeURIComponent(logic)}">Copiar lógica LAD</button>
        <button class="small-btn" data-fav="${p.id}">${isFav(p.id)?'Remover favorito':'Adicionar favorito'}</button>
        <button class="small-btn" onclick="window.print()">Exportar/Imprimir PDF</button>
      </div>
      <h3>Erros comuns</h3><ul>${p.commonErrors.map(e=>`<li>${e}</li>`).join('')}</ul>
      <h3>Lógica em texto</h3><div class="ladder-box"><pre class="lad-ascii">${logic}</pre></div>
    </div>
  </div>`;
}

function tagTable(tags) { return `<table class="tag-table"><thead><tr><th>Tag</th><th>Endereço</th><th>Tipo</th><th>Descrição</th></tr></thead><tbody>${tags.map(t=>`<tr><td>${t.name}</td><td>${t.address}</td><td>${t.type}</td><td>${t.description}</td></tr>`).join('')}</tbody></table>`; }

function newProject() {
  const checked = Object.values(state.checklist).filter(Boolean).length;
  const total = APP_DATA.newProjectSteps.length;
  const percent = Math.round((checked/total)*100);
  return `<div class="panel">
    <span class="badge orange">Checklist interativo</span>
    <h2>Criar projeto Siemens do zero no TIA Portal</h2>
    <p class="muted">Siga a sequência para reduzir erro de configuração, tag duplicada, IP incorreto ou falha de download.</p>
    <div class="progress-bar"><span style="width:${percent}%"></span></div><p>${percent}% concluído</p>
    <div class="steps">${APP_DATA.newProjectSteps.map((s,i)=>`<label class="step"><input type="checkbox" data-check="${i}" ${state.checklist[i]?'checked':''}><span><strong>Etapa ${i+1}</strong><br>${s}</span></label>`).join('')}</div>
    <div class="quick-actions">
      <button class="primary-btn" data-copy="${encodeURIComponent(baseTagsCSV())}">Copiar modelo de tags</button>
      <button class="ghost-btn" data-go="tags">Abrir banco de tags</button>
      <button class="ghost-btn" data-go="assistant">Tirar dúvida técnica</button>
      <button class="ghost-btn" onclick="window.print()">Exportar/Imprimir PDF</button>
    </div>
  </div>
  <div class="panel" style="margin-top:18px"><h3>Estrutura recomendada de blocos</h3><pre class="lad-ascii">OB1
 ├── FC_Comandos_Gerais
 ├── FC_Seguranca
 ├── FB_Motor_01 + Instance DB
 ├── FB_Inversor_01 + Instance DB
 ├── FC_Alarmes
 └── FC_Diagnostico_IO</pre></div>`;
}

function tags() {
  return `<div class="panel"><h2>Banco de Tags Siemens</h2><p class="muted">Modelo inicial para projetos de bancada, IHM, inversor e simuladores.</p>${tagTable(APP_DATA.baseTags)}<div class="quick-actions"><button class="primary-btn" data-copy="${encodeURIComponent(baseTagsCSV())}">Copiar CSV</button><button class="ghost-btn" id="downloadTags">Baixar CSV</button></div></div>`;
}
function baseTagsCSV(){ return 'Nome;Endereço;Tipo;Descrição\n' + APP_DATA.baseTags.map(t=>`${t.name};${t.address};${t.type};${t.description}`).join('\n'); }

function tia() { return `<div class="panel"><h2>Guia TIA Portal</h2><div class="steps">${['Criar projeto e selecionar CPU correta','Configurar rede PROFINET e nomes de dispositivos','Criar PLC Tags simbólicas e comentários','Organizar OB1, FC, FB, DB e UDT','Programar em LAD por networks comentadas','Compilar hardware e software','Fazer download para o CLP','Monitorar online e validar diagnóstico'].map((s,i)=>`<div class="step"><span class="badge">${i+1}</span>${s}</div>`).join('')}</div></div>`; }
function hmi() { return `<div class="panel"><h2>IHM Siemens</h2><div class="pattern-grid">${['Tela inicial da máquina','Tela manual/automático','Tela de alarmes','Tela de setpoints','Tela de manutenção','Tela de diagnóstico','Tela do inversor','Tela de produção'].map(x=>`<div class="card"><h3>${x}</h3><p class="muted">Crie botões, campos, lâmpadas, mensagens e vincule com PLC Tags do CLP.</p></div>`).join('')}</div></div>`; }
function drive() { return `<div class="panel"><h2>Inversor Siemens</h2><p class="muted">Módulo para SINAMICS V20/G120, bornes, analógico e Profinet.</p><div class="steps">${['Definir tipo de controle: bornes, analógico ou Profinet','Configurar IP/nome do dispositivo quando usar Profinet','Criar tags de comando, status, setpoint e falha','Validar enable, start, direction e reset','Testar velocidade pela IHM e monitorar status'].map((s,i)=>`<div class="step"><span class="badge">${i+1}</span>${s}</div>`).join('')}</div></div>`; }

function simulator() {
  return `<div class="sim-panel"><div class="panel"><h2>Simulação didática — partida de motor</h2><p class="muted">Teste a lógica de liga, desliga, emergência e falha térmica.</p><div class="quick-actions"><button class="primary-btn" id="simStart">Liga</button><button class="ghost-btn" id="simStop">Desliga</button><button class="ghost-btn" id="simEmerg">${state.sim.emergency?'Acionar emergência':'Liberar emergência'}</button><button class="ghost-btn" id="simFault">${state.sim.fault?'Reset falha':'Gerar falha'}</button></div><p>Status: <strong>${simStatus()}</strong></p><div class="ladder-box">${renderLadder({ladderType:'emergency',title:'Simulação de motor'})}</div></div><div class="machine"><div class="motor ${state.sim.motor?'on':''}">MOTOR</div></div></div>`;
}
function simStatus(){ if(!state.sim.emergency) return 'EMERGÊNCIA ACIONADA'; if(state.sim.fault) return 'FALHA TÉRMICA'; return state.sim.motor?'MOTOR LIGADO':'MOTOR DESLIGADO'; }

function assistant() {
  const suggestions = ['Como integrar CLP Siemens com Factory I/O?','Como configurar IP do S7-1200?','Como criar PLC Tags no TIA Portal?','Como conectar IHM Siemens ao CLP?','Como controlar inversor Siemens via Profinet?'];
  return `<div class="assistant-layout"><div class="panel"><h2>Pesquisa profunda guiada</h2><p class="muted">Digite uma dúvida técnica. A V3 responde offline com base em conteúdo Siemens cadastrado.</p><textarea id="assistantQuestion" placeholder="Ex.: Como integrar o CLP Siemens com o Factory I/O?"></textarea><div class="chips">${suggestions.map(s=>`<button class="chip" data-question="${s}">${s}</button>`).join('')}</div><button class="primary-btn" id="askBtn">Pesquisar agora</button></div><div class="panel"><h2>Resposta técnica</h2><div id="assistantAnswer" class="answer muted">A resposta aparecerá aqui com passo a passo, checklist, tags e erros comuns.</div><div class="quick-actions"><button class="ghost-btn" id="copyAnswer">Copiar resposta</button><button class="ghost-btn" onclick="window.print()">Exportar/Imprimir PDF</button></div></div></div>`;
}
function searchAssistant(q){
  const text = q.toLowerCase();
  const hit = APP_DATA.assistantKB.find(k => k.key.split(' ').some(w => text.includes(w)) || text.includes(k.title.toLowerCase().slice(0,10)));
  if(hit) return `# ${hit.title}\n\n${hit.answer}\n\nChecklist final:\n[ ] IPs na mesma faixa\n[ ] Tags criadas e comentadas\n[ ] CLP em RUN\n[ ] Comunicação testada online\n[ ] Entradas e saídas validadas`;
  return `# Orientação Siemens\n\nNão encontrei uma resposta exata no banco offline, mas siga este método:\n\n1. Identifique os dispositivos envolvidos: CLP, IHM, inversor, simulador ou sensores.\n2. Confirme tensão, rede, IP, protocolo e endereçamento.\n3. Crie PLC Tags simbólicas no TIA Portal.\n4. Organize a lógica em Networks comentadas.\n5. Compile, transfira e monitore online.\n6. Teste primeiro em bancada ou simulação antes de energizar a carga real.\n\nSugestão: pesquise por IP, Factory I/O, IHM, inversor, Profinet ou PLC Tags.`;
}

function favorites() {
  const favs = APP_DATA.patterns.filter(p => isFav(p.id));
  return `<div class="section-title"><h2>${favs.length} favoritos</h2><span class="muted">Salvos neste navegador</span></div>${favs.length?`<div class="pattern-grid">${favs.map(patternCard).join('')}</div>`:'<div class="panel"><p class="muted">Nenhum favorito salvo ainda.</p></div>'}`;
}
function about() { return `<div class="panel"><img src="assets/logo_senai_hub.webp" class="brand-logo" alt="SENAI HUB"><h2>LAD Pocket Pro Siemens V3</h2><p class="muted">PWA/App Web educacional para consulta técnica, treinamento e apoio em projetos Siemens com TIA Portal. Desenvolvido para uso didático em comandos elétricos, CLP, IHM, inversor e integração com simuladores.</p><p><strong>Desenvolvido por Joelson M. Mendes.</strong></p></div>`; }

function miniLadder(type){ return `<div class="ladder"><div class="rung"><div class="rail"></div><div class="wire"></div><div class="contact ${type==='safety'?'nc':''}">I0.0</div><div class="wire"></div><div class="coil">Q0.0</div><div class="wire"></div><div class="rail"></div></div></div>`; }
function renderLadder(p){
  const type = typeof p === 'string' ? p : p.ladderType;
  if(['timer','deadtime'].includes(type)) return `<div class="ladder"><div class="rung"><div class="rail"></div><div class="wire"></div><div class="contact">Start<br>%I0.0</div><div class="wire"></div><div class="block">TON<br>T#5s</div><div class="wire"></div><div class="coil">Motor<br>%Q0.0</div><div class="wire"></div><div class="rail"></div></div></div>`;
  if(['counter'].includes(type)) return `<div class="ladder"><div class="rung"><div class="rail"></div><div class="wire"></div><div class="contact">Sensor<br>%I0.3</div><div class="wire"></div><div class="block">CTU<br>PV=10</div><div class="wire"></div><div class="coil">Limite<br>%M0.2</div><div class="wire"></div><div class="rail"></div></div></div>`;
  if(['drive'].includes(type)) return `<div class="ladder"><div class="rung"><div class="rail"></div><div class="wire"></div><div class="contact nc">Falha<br>%M0.0</div><div class="wire"></div><div class="contact">Enable<br>%M0.1</div><div class="wire"></div><div class="coil">RUN INV<br>%Q0.0</div><div class="wire"></div><div class="rail"></div></div></div>`;
  return `<div class="ladder"><div class="rung"><div class="rail"></div><div class="wire"></div><div class="contact nc">Stop<br>%I0.1</div><div class="wire"></div><div class="contact">Start<br>%I0.0</div><div class="wire"></div><div class="coil">Motor<br>%Q0.0</div><div class="wire"></div><div class="rail"></div></div><div class="branch"><div class="rung"><div class="wire"></div><div class="contact">Selo<br>%Q0.0</div><div class="wire" style="max-width:220px"></div></div></div></div>`;
}
function ladderAscii(p){
  const t = p.ladderType;
  if(t==='timer') return `Network 1 — Timer TON\n|----[ %I0.0 Start ]--------[ TON T1 PT=T#5s ]--------( %Q0.0 Saida )----|`;
  if(t==='counter') return `Network 1 — Contador CTU\n|----[ %I0.3 Sensor ]--------[ CTU C1 PV=10 ]--------( %M0.2 Limite )----|`;
  if(t==='drive') return `Network 1 — Comando inversor\n|----[/ %M0.0 Falha ]----[ %M0.1 Enable ]------------( %Q0.0 RUN_INV )----|`;
  return `Network 1 — Partida com selo\n|----[/ %I0.1 BTN_Desliga ]----+----[ %I0.0 BTN_Liga ]----( %Q0.0 K1_Motor )----|\n|                              |\n|                              +----[ %Q0.0 K1_Motor ]--------------------------|`;
}

function bindViewEvents() {
  document.querySelectorAll('[data-go]').forEach(el => el.onclick = () => setView(el.dataset.go));
  document.querySelectorAll('[data-pattern]').forEach(el => el.onclick = () => setView('detail', { pattern: APP_DATA.patterns.find(p => p.id == el.dataset.pattern) }));
  document.querySelectorAll('[data-copy]').forEach(el => el.onclick = () => copyText(decodeURIComponent(el.dataset.copy), 'Conteúdo copiado'));
  document.querySelectorAll('[data-fav]').forEach(el => el.onclick = () => toggleFav(Number(el.dataset.fav)));
  const si = $('#searchInput'); if (si) si.oninput = e => { state.query=e.target.value; render(); };
  const cf = $('#categoryFilter'); if (cf) cf.onchange = e => { state.category=e.target.value; render(); };
  const lf = $('#levelFilter'); if (lf) lf.onchange = e => { state.level=e.target.value; render(); };
  document.querySelectorAll('[data-check]').forEach(el => el.onchange = () => { state.checklist[el.dataset.check]=el.checked; localStorage.setItem('lad_project_checklist_v3', JSON.stringify(state.checklist)); render(); });
  const dl = $('#downloadTags'); if(dl) dl.onclick = () => { const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([baseTagsCSV()],{type:'text/csv'})); a.download='tags_siemens_lad_pocket_pro.csv'; a.click(); };
  const ask = $('#askBtn'); if(ask) ask.onclick = () => { const q=$('#assistantQuestion').value.trim(); $('#assistantAnswer').textContent = q ? searchAssistant(q) : 'Digite uma dúvida técnica para pesquisar.'; $('#assistantAnswer').classList.remove('muted'); };
  document.querySelectorAll('[data-question]').forEach(el => el.onclick = () => { $('#assistantQuestion').value=el.dataset.question; $('#assistantAnswer').textContent=searchAssistant(el.dataset.question); $('#assistantAnswer').classList.remove('muted'); });
  const copyAns = $('#copyAnswer'); if(copyAns) copyAns.onclick = () => copyText($('#assistantAnswer').textContent, 'Resposta copiada');
  const st=$('#simStart'); if(st) st.onclick=()=>{ if(state.sim.emergency && !state.sim.fault) state.sim.motor=true; render(); };
  const sp=$('#simStop'); if(sp) sp.onclick=()=>{ state.sim.motor=false; render(); };
  const se=$('#simEmerg'); if(se) se.onclick=()=>{ state.sim.emergency=!state.sim.emergency; if(!state.sim.emergency) state.sim.motor=false; render(); };
  const sf=$('#simFault'); if(sf) sf.onclick=()=>{ state.sim.fault=!state.sim.fault; if(state.sim.fault) state.sim.motor=false; render(); };
}

$('#mainNav').addEventListener('click', e => { if(e.target.matches('button[data-view]')) setView(e.target.dataset.view); });
$('#menuToggle').onclick = () => $('#sidebar').classList.toggle('open');
render();
