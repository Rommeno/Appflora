const P={out:'M9 4H5v16h4M16 8l4 4-4 4M20 12H9',img:'M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4',home:'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',box:'M3 4h18v4H3zM5 8v12h14V8M10 12h4',plant:'M4 4h16v16H4zM12 17v-6M12 11c0-3 2-4 4-4 0 3-2 4-4 4zM12 13c0-2-1.500-3-3.500-3 0 2.500 1.500 3 3.500 3z',sl:'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6',scan:'M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M8 8h3v3H8zM13 13h3v3h-3z',bell:'M6 16V11a6 6 0 1112 0v5l2 2H4zM10 21h4',drop:'M12 3s6 6.500 6 11a6 6 0 01-12 0c0-4.500 6-11 6-11z',ok:'M5 12l5 5 9-10',clock:'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2',sun:'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.500 1.500M17.500 17.500L19 19M5 19l1.500-1.500M17.500 6.500L19 5',wind:'M3 8h11a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h7',th:'M10 4a2 2 0 014 0v9a4 4 0 11-4 0zM12 9v6',cam:'M4 8h3l2-3h6l2 3h3v11H4zM12 11a3.500 3.500 0 100 7 3.500 3.500 0 000-7z',back:'M19 12H5M11 6l-6 6 6 6',heart:'M12 20s-8-5-8-11a4.500 4.500 0 018-2.500A4.500 4.500 0 0120 9c0 6-8 11-8 11z',gear:'M12 9a3 3 0 100 6 3 3 0 000-6zM19 12l2-1-1.500-3-2 .5-1.500-1.500.5-2-3-1.500L12 5 10 3.500 7 5l.5 2L6 8.500l-2-.5L2.500 11l2 1v1l-2 1L4 17l2-.5L7.500 18l-.5 2 3 1.500L12 20l2 1.500 3-1.500-.5-2 1.500-1.500 2 .5L21 14l-2-1z',plus:'M12 5v14M5 12h14',hist:'M3 12a9 9 0 109-9 9 9 0 00-7 3.500L3 8M3 3v5h5M12 8v4l3 2',refresh:'M20 11a8 8 0 10-2.5 5.6M20 4v7h-7',leaf:'M5 19C5 10 10 5 20 4c0 10-5 15-14 15zM5 19l8-8',flask:'M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3',up:'M12 19V5M6 11l6-6 6 6',dn:'M12 5v14M6 13l6 6 6-6',lay:'M4 5h16v14H4zM9 5v14M15 5v14',fan:'M12 12m-1 0a1 1 0 102 0 1 1 0 10-2 0M12 11C9 6 11 3 14 4c2 1 1 5-2 7zM13 12c5-3 8-1 7 2-1 2-5 1-7-2zM12 13c3 5 1 8-2 7-2-1-1-5 2-7zM11 12C6 15 3 13 4 10c1-2 5-1 7 2z',bm:'M6 3h12v18l-6-4-6 4zM12 8v4M10 10h4',tag:'M12 3l1.500 5 5 1.500-5 1.500L12 16l-1.500-5-5-1.500 5-1.500z',bad:'M5 19L19 5M7 5l12 12-2 2L5 7z'};
const ic=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n]}"/></svg>`;
const LEAF='<svg class="leaf" viewBox="0 0 100 120"><path d="M50 8C20 20 8 55 30 85c8 10 14 14 20 25 6-11 12-15 20-25C92 55 80 20 50 8z" fill="#3f8a5c"/><path d="M50 8C38 25 30 50 38 80c6 8 10 12 12 30z" fill="#f2efc9" opacity=".85"/><path d="M50 14v96M50 40l-20 14M50 40l20 14M50 62l-22 14M50 62l22 14" stroke="#e9f4d8" stroke-width="2" fill="none"/></svg>';
const REAL_PLANT='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80';

const ART={1:'alocasia',2:'monstera',3:'philo',4:'monstera'};
const SRC={1:'img/alocasia-frydek.jpg',2:'https://commons.wikimedia.org/wiki/Special:FilePath/Monstera_deliciosa2.jpg?width=700',3:'https://commons.wikimedia.org/wiki/Special:FilePath/Philodendron_melanochrysum_10zz.jpg?width=700',4:'img/monstera-thai-constellation.jpg'};
const SVG={
 monstera:'<path d="M50 92C18 82 6 54 20 30 28 17 42 12 50 15c8-3 22 2 30 15 14 24 2 52-30 62z" fill="#3f8a5c"/><path d="M50 92V22M50 42l-20 7M50 42l20 7M50 60l-22 8M50 60l22 8" stroke="#e6f2e8" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
 alocasia:'<path d="M50 8C72 30 82 62 50 94 18 62 28 30 50 8z" fill="#2f5d45"/><path d="M50 14V90M50 40l-15 14M50 40l15 14M50 62l-10 10M50 62l10 10" stroke="#d3e5d7" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
 philo:'<path d="M50 92C20 72 6 50 18 30c10-14 26-8 32 6 6-14 22-20 32-6 12 20-2 42-32 62z" fill="#4d8f5f"/><path d="M50 92V38M50 58l-15-11M50 58l15-11" stroke="#e1efdc" stroke-width="3" fill="none" stroke-linecap="round"/>'};
const ph=(p,c='')=>{const k=ART[p.id]||'monstera',u=(S.photos&&S.photos[p.id])||SRC[p.id];
 return `<div class="ph ${c}"><svg viewBox="0 0 100 100" aria-hidden="true">${SVG[k]}</svg>${u?`<img src="${u}" alt="${p.n}" loading="lazy" onerror="this.remove()">`:''}</div>`};
const D={tab:'home',plant:null,fav:true,lights:true,lightPct:85,hum:true,humTarget:75,fan:'Média',res:80,profile:0,adding:false,hist:false,photo:null,loggedIn:false,sessionUser:null,authView:'login',profiles:['Tropical','Estaquia / Mudas','Noite / Repouso'],shelves:[{n:'Prateleira 1 - Superior',d:'4 plantas: Monsteras & Filodendros',t:24,h:78,i:'up'},{n:'Prateleira 2 - Central',d:'5 plantas: Alocasias & Begónias',t:23.5,h:81,i:'lay'},{n:'Prateleira 3 - Inferior',d:'3 plantas: Propagações & Musgos',t:22,h:85,i:'dn'}],rules:[{i:'sun',t:'Ciclo de Iluminação',d:'Ligar às 07:00, desligar às 21:00',tag:'Espectro Vegetativo',m:'14h fotoperíodo',on:true},{i:'drop',t:'Manter Humidade',d:'Ligar nebulizador se < 68%',tag:'Sensor Superior',m:'Atualmente 72%',on:true},{i:'wind',t:'Circulação de Ar',d:'Ventilar 10 min a cada hora',tag:'Ventoinha Dupla',m:'Próximo em 18m',on:true},{i:'th',t:'Alerta de Temperatura',d:'Avisar se > 28°C',tag:'Push & Exaustor',m:'Atualmente 24.2°C',on:true}],plants:[{id:1,n:'Alocasia Frydek',shelf:'Prateleira Superior',how:'150ml',days:0,note:'Substrato seco à superfície'},{id:2,n:'Monstera Deliciosa',shelf:'Prateleira Central',how:'250ml',days:2},{id:3,n:'Philodendron Melanochrysum',shelf:'Base & Propagação',how:'Borrifar',days:3},{id:4,n:'Monstera Thai Constellation',shelf:'Prateleira Superior',how:'150ml',days:3,soil:58,hum:76,temp:24,detail:1,h:[{i:'drop',t:'Rega leve (150ml)',d:'Água desmineralizada + pH 6.2',w:'Ontem'},{i:'leaf',t:'Nova folha detetada',d:'Comprovada fenestração precoce',w:'Há 5 dias'},{i:'flask',t:'Fertilização suave',d:'Solução NPK 10-10-10 a 25%',w:'Há 12 dias'}]}],scan:null,scans:[]};
const AUTH_KEY='fc_accounts';
const normalizeEmail=v=>String(v||'').trim().toLowerCase();
function readAccounts(){try{return JSON.parse(localStorage.getItem(AUTH_KEY)||'[]')}catch{return[]}}
function writeAccounts(rows){try{localStorage.setItem(AUTH_KEY,JSON.stringify(rows))}catch(e){}}
function demoAccount(){const rows=readAccounts();if(rows.length)return rows[0];const seed={name:'Sofia Silva',email:'sofia@flora.com',password:'flora123'};writeAccounts([seed]);return seed}
let S=Object.assign({},D);
try{const s=JSON.parse(localStorage.getItem('fc')||'null');if(s)S=Object.assign({},D,s,{tab:'home',plant:null,adding:false,hist:false,photo:null})}catch(e){}
S.photos=S.photos||{};
if(!S.sessionUser && !readAccounts().length) demoAccount();
const save=()=>{try{const{photo,...r}=S;localStorage.setItem('fc',JSON.stringify(r))}catch(e){}};
const $=s=>document.querySelector(s);
let tt;function toast(m){const t=$('#toast');if(!t)return; t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}

function authScreen(){
 const views={login:{label:'Entrar',icon:'home',title:'Bem-vindo de volta',subtitle:'Acesse a sua conta para acompanhar o armário e o cuidado das plantas.'},signup:{label:'Criar conta',icon:'plant',title:'Criar conta',subtitle:'Configure o seu perfil e começa a vigiar o teu ecossistema.'},recover:{label:'Recuperar palavra-passe',icon:'drop',title:'Recuperar palavra-passe',subtitle:'Recebe um link de redefinição para o teu e-mail.'}};
 const active=views[S.authView]||views.login;
 return `<div class="auth-shell"><div class="auth-backdrop"></div><div class="auth-card"><div class="auth-brand"><div class="brand-mark">${ic('plant')}</div><div><div class="lbl auth-kicker">FloraCabinet</div><div class="auth-title">${active.title}</div></div></div><p class="auth-subtitle">${active.subtitle}</p>
 <div class="auth-tabs">${Object.entries(views).map(([key,v])=>`<button class="auth-tab ${S.authView===key?'active':''}" data-a="auth-mode" data-v="${key}">${v.label}</button>`).join('')}</div>
 <div class="demo-box">Conta demo: sofia@flora.com / flora123</div>
 ${S.authView==='login' ? `<form class="auth-form" id="login-form"><label class="field"><span>E-mail</span><input id="login-email" type="email" placeholder="nome@email.com" autocomplete="email" required></label><label class="field"><span>Palavra-passe</span><input id="login-password" type="password" placeholder="••••••••" autocomplete="current-password" required></label><button class="btn w auth-btn" type="submit" data-a="auth-login">${ic('ok')}Entrar</button></form>` : ''}
 ${S.authView==='signup' ? `<form class="auth-form" id="signup-form"><label class="field"><span>Nome</span><input id="signup-name" type="text" placeholder="Sofia Silva" autocomplete="name" required></label><label class="field"><span>E-mail</span><input id="signup-email" type="email" placeholder="nome@email.com" autocomplete="email" required></label><label class="field"><span>Palavra-passe</span><input id="signup-password" type="password" placeholder="Mín. 6 caracteres" minlength="6" autocomplete="new-password" required></label><button class="btn w auth-btn" type="submit" data-a="auth-signup">${ic('plant')}Criar conta</button></form>` : ''}
 ${S.authView==='recover' ? `<form class="auth-form" id="recover-form"><label class="field"><span>E-mail</span><input id="recover-email" type="email" placeholder="nome@email.com" autocomplete="email" required></label><button class="btn soft w auth-btn" type="submit" data-a="auth-recover">${ic('drop')}Enviar link de recuperação</button></form>` : ''}
 <div class="auth-foot"><span>${S.authView==='login'?'Ainda não tens conta?':'Já tens conta?'}</span><button class="inline-action" data-a="auth-mode" data-v="${S.authView==='login'?'signup':'login'}">${S.authView==='login'?'Criar conta':'Entrar agora'}</button></div>
 </div></div>`;
}

const hdr=(l)=>`<div class="top"><div class="brand">${ic('plant')}${l||'FloraCabinet'}</div><div class="row" style="gap:2px"><button class="ib" data-a="bell" aria-label="Notificações">${ic('bell')}</button><button class="ib" data-a="logout" aria-label="Sair">${ic('out')}</button></div></div>`;
const tog=(a,v,l)=>`<button class="tog" role="switch" aria-checked="${v}" aria-label="${l}" data-a="${a}"></button>`;
const when=d=>d===0?'Hoje':d===1?'Amanhã':`Em ${d} dias`;

function home(){
 const pend=S.plants.filter(p=>p.days===0),next=S.plants.filter(p=>p.days>0).sort((a,b)=>a.days-b.days);
 return hdr()+`<h1>Olá, ${S.sessionUser?.name||'Sofia'}</h1><p class="sub">${pend.length?'Tudo calmo no armário. '+(pend.length==1?'Uma planta precisa':pend.length+' plantas precisam')+' da tua atenção.':'Tudo calmo no armário. Nenhuma planta precisa de rega hoje.'}</p>
 <div class="pill"><span class="dot"></span>Armário saudável · 23.5°C · 72% humidade</div>
 <div class="sec"><h2>Foco do Dia: Rega</h2><span class="tag">${pend.length} pendente${pend.length==1?'':'s'}</span></div>
 ${pend.map(p=>`<div class="card feat">${ph(p,'wide')}<div class="fb"><div class="lbl">${p.shelf}</div><div class="name big">${p.n}</div><p class="sub">${p.note||'Rega programada'} · ${p.how} recomendados</p><div class="row sp fo"><span class="sub row">${ic('clock')}Hoje, de manhã</span><button class="btn" data-a="water" data-id="${p.id}">${ic('ok')}Marcar regada</button></div></div></div>`).join('')||`<div class="card empty">Tudo regado. Volta amanhã.</div>`}
 <div class="sec"><h2>A seguir nos próximos dias</h2></div>
 <div class="card list">${next.map(p=>`<button class="it" data-a="open" data-id="${p.id}">${ph(p,'thumb')}<span class="grow"><div class="name">${p.n}</div><div class="sub sm">${p.shelf} · ${p.how}</div></span><span class="chip">${when(p.days)}</span></button>`).join('')}</div>`}

function cab(){
 const key=['Superior','Central','Base'];
 return hdr()+`<h1>Armário Principal</h1><p class="sub row" style="gap:8px"><span class="dot"></span>Online · Ecossistema M1 · Estufa de Vidro & Carvalho</p>
 <div class="sec"><h2>Prateleiras</h2><span class="sub sm">3 níveis</span></div>
 ${S.shelves.map((s,i)=>{const ps=S.plants.filter(p=>p.shelf.includes(key[i]));return `<div class="card"><div class="row"><span class="circ ct">${ic(s.i)}</span><span class="grow"><div class="name">${s.n}</div><div class="sub sm">${s.d}</div></span></div>${ps.length?`<div class="row" style="gap:10px;margin-top:16px;flex-wrap:wrap">${ps.map(p=>`<button data-a="open" data-id="${p.id}" aria-label="${p.n}">${ph(p,'thumb')}</button>`).join('')}</div>`:''}</div>`}).join('')}`}

function plants(){
 if(S.plant){const p=S.plants.find(x=>x.id==S.plant);return detail(p)}
 return hdr()+`<h1>Plantas</h1><p class="sub">${S.plants.length} plantas no armário</p><div class="grid">${S.plants.map(p=>`<button class="pc" data-a="open" data-id="${p.id}">${ph(p,'sq')}<div class="name">${p.n}</div><div class="sub sm">${p.shelf} · ${when(p.days)}</div></button>`).join('')}</div>`}

function detail(p){
 p.h=p.h||[];const soil=p.soil||60;
 return `<div class="top"><button class="ib" data-a="back" aria-label="Voltar">${ic('back')}</button><div class="name" style="font-size:17px;text-align:center">${p.n}</div><button class="ib" data-a="fav" aria-label="Favorito" aria-pressed="${S.fav}" style="color:${S.fav?'var(--pr)':'var(--mu)'}">${ic('heart')}</button></div>
 ${ph(p,'hero')}
 <div class="row" style="gap:10px;margin-top:12px"><button class="btn soft grow sm" data-a="photo" data-src="cam" data-for="${p.id}">${ic('cam')}Tirar foto</button><button class="btn ghost grow sm" data-a="photo" data-for="${p.id}">${ic('img')}Galeria</button></div>
 <div class="sec"><h2>Métricas vitais</h2><span class="sub sm">Atualizado há 4m</span></div>
 <div class="m"><div class="card"><small>Humidade</small><b>${p.hum||76}%</b><div class="bar"><i style="width:${p.hum||76}%"></i></div><span>Ideal 70–85%</span></div>
 <div class="card"><small>Temperatura</small><b>${p.temp||24}°C</b><div class="bar"><i style="width:60%"></i></div><span>Ideal 22–26°C</span></div>
 <div class="card"><small>Luz</small><b>12h</b><div class="bar"><i style="width:50%"></i></div><span>Fotoperíodo</span></div>
 <div class="card"><small>Próx. rega</small><b>${p.days===0?'hoje':'em '+p.days+'d'}</b><div class="bar"><i style="width:${Math.max(10,100-p.days*20)}%"></i></div><span>Solo ${soil}%</span></div></div>
 <div class="sec"><h2>Histórico recente</h2></div>
 <div class="card list">${p.h.map(h=>`<div class="it"><span class="circ">${ic(h.i)}</span><span class="grow"><div class="name" style="font-size:16px">${h.t}</div><div class="sub sm">${h.d}</div></span><span class="chip">${h.w}</span></div>`).join('')||'<div class="empty">Sem registos ainda.</div>'}</div>
 ${S.adding?`<div class="sheet"><select id="ct"><option value="drop|Rega leve (150ml)|Água desmineralizada">Rega</option><option value="flask|Fertilização suave|NPK 10-10-10 a 25%">Fertilização</option><option value="leaf|Nova folha detetada|Observação manual">Nova folha</option></select><button class="btn" data-a="logsave" data-id="${p.id}">Guardar registo</button></div>`:''}
 <button class="btn w" data-a="log">${ic('ok')}Registar cuidado</button>`}

function scanner(){
 const r=S.scan,u=S.photo&&S.photo.for==='scan'?S.photo.src:'';
 return hdr('Scanner')+`<h1>Diagnóstico por foto</h1><p class="sub">Identifica a espécie e recebe sugestões de cuidado.</p>
 <div class="scan" style="margin-top:18px"><svg viewBox="0 0 100 100" style="width:90px;height:90px;stroke:none;opacity:.8" aria-hidden="true">${SVG.alocasia}</svg>${u?`<img src="${u}" alt="Planta analisada">`:''}<span class="st" style="top:16px;left:16px">${r?'● Análise concluída':'Aguarda foto'}</span><span class="cr-1"></span><span class="cr-2"></span><span class="cr-3"></span><span class="cr-4"></span></div>
 <div class="row" style="gap:10px;margin-top:12px"><button class="btn soft grow sm" data-a="photo" data-src="cam" data-for="scan">${ic('cam')}Tirar foto</button><button class="btn ghost grow sm" data-a="photo" data-for="scan">${ic('img')}Galeria</button><button class="ib" data-a="hist" aria-label="Histórico" style="background:var(--ch)">${ic('hist')}</button></div>
 ${S.hist?`<div class="card list" style="margin-top:16px">${S.scans.map(x=>`<div class="it"><span class="circ">${ic('bm')}</span><span class="grow"><div class="name" style="font-size:16px">${x.sp}</div><div class="sub sm">${x.dx}</div></span><span class="chip">${x.w}</span></div>`).join('')||'<div class="empty">Ainda sem diagnósticos guardados.</div>'}</div>`:''}
 ${r?`<div class="card" style="margin-top:18px"><div class="row sp"><div><div class="lbl">Espécie identificada</div><div class="name big">${r.sp}</div></div><span class="tag">${r.c}%</span></div><div class="bar" style="margin:6px 0 16px"><i style="width:${r.c}%"></i></div>
 <div class="box" style="margin:0"><div class="sub sm">Diagnóstico</div><div class="name" style="font-size:17px">${r.dx}</div></div>
 <div class="box"><div class="sub sm">Sugestão</div>${r.tip}</div>
 <div class="dual"><div class="box"><small class="sub">Humidade atual</small><b>58%</b></div><div class="box goal"><small>Meta recomendada</small><b>${r.goal}%</b></div></div></div>
 <button class="btn w" data-a="apply" style="margin-bottom:10px">${ic('ok')}Aplicar ajuste no armário</button><button class="btn ghost w" data-a="saveScan">${ic('bm')}Guardar no histórico</button>`:`<div class="card empty" style="margin-top:18px">Tira ou carrega uma foto da planta para começar.</div>`}`}

const V={home,armario:cab,plantas:plants,scanner};
const N=[['home','home','Início'],['armario','box','Armário'],['plantas','plant','Plantas'],['scanner','scan','Scanner']];

function render(){
 if(!S.loggedIn){
  $('#app').innerHTML=authScreen();
  $('#nav').innerHTML='';
  save();
  return;
 }
 $('#app').innerHTML=(V[S.tab]||home)();
 $('#nav').innerHTML=N.map(n=>`<button data-a="tab" data-v="${n[0]}" ${S.tab==n[0]?'aria-current="page"':''}>${ic(n[1])}${n[2]}</button>`).join('');
 save();
}

document.addEventListener('click',e=>{
 const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=b.dataset.v,id=+b.dataset.id;
 const pl=i=>S.plants.find(p=>p.id==i);
 if(a==='auth-mode'){S.authView=v;render();return}
 else if(a==='auth-login'){const email=normalizeEmail($('#login-email').value),password=$('#login-password').value.trim();
  const accounts=readAccounts();const user=accounts.find(acc=>normalizeEmail(acc.email)===email && acc.password===password);
  if(!user){toast('E-mail ou palavra-passe inválidos');return}
  S.loggedIn=true;S.sessionUser={name:user.name,email:user.email};S.tab='home';S.authView='login';render();return
 }
 else if(a==='auth-signup'){const name=$('#signup-name').value.trim(),email=normalizeEmail($('#signup-email').value),password=$('#signup-password').value.trim();
  if(!name||!email||password.length<6){toast('Preenche todos os campos corretamente');return}
  const accounts=readAccounts();if(accounts.some(acc=>normalizeEmail(acc.email)===email)){toast('Este e-mail já está associado a outra conta');return}
  const newUser={name,email,password};accounts.push(newUser);writeAccounts(accounts);S.loggedIn=true;S.sessionUser={name,email};S.tab='home';S.authView='login';toast('Conta criada com sucesso');render();return
 }
 else if(a==='auth-recover'){const email=normalizeEmail($('#recover-email').value);if(!email){toast('Indica o e-mail para recuperar a palavra-passe');return}
  const user=readAccounts().find(acc=>normalizeEmail(acc.email)===email);if(!user){toast('Nenhuma conta encontrada com este e-mail');return}
  toast('Link de recuperação enviado para '+email);S.authView='login';render();return
 }
 else if(a==='logout'){S.loggedIn=false;S.sessionUser=null;S.authView='login';render();return}
 if(!S.loggedIn)return;
 if(a==='tab'){S.tab=v;S.plant=null;S.adding=false;scrollTo(0,0)}
 else if(a==='water'){const p=pl(id);p.days=5;(p.h=p.h||[]).unshift({i:'drop',t:'Rega ('+p.how+')',d:'Marcada na app',w:'Agora'});toast(p.n+' regada ✓')}
 else if(a==='open'){S.tab='plantas';S.plant=id;scrollTo(0,0)}
 else if(a==='back')S.plant=null;
 else if(a==='fav'){S.fav=!S.fav}
 else if(a==='bell')toast('Sem novas notificações');
 else if(a==='log')S.adding=!S.adding;
 else if(a==='logsave'){const[i,t,d]=$('#ct').value.split('|');const p=pl(id);p.h.unshift({i,t,d,w:'Agora'});if(i==='drop')p.days=5;S.adding=false;toast('Cuidado registado')}
 else if(a==='photo'){window._for=b.dataset.for;$(b.dataset.src==='cam'?'#cam':'#file').click();return}
 else if(a==='hist')S.hist=!S.hist;
 else if(a==='apply'){S.humTarget=S.scan.goal;S.hum=true;toast('Alvo do armário: '+S.scan.goal+'% RH')}
 else if(a==='saveScan'){S.scans.unshift({sp:S.scan.sp,dx:S.scan.dx,w:'Agora'});toast('Guardado no histórico')}
 render();
});

document.addEventListener('submit',e=>{
 const form=e.target;
 if(!form||!form.matches('.auth-form'))return;
 e.preventDefault();
 const btn=form.querySelector('[data-a]');
 if(!btn)return;
 btn.click();
});

function takeFile(e){
 const f=e.target.files[0];if(!f)return;const fr=new FileReader(),to=window._for;
 fr.onload=()=>{
  if(to==='scan'){S.photo={src:fr.result,for:'scan'};S.scan={sp:'Alocasia Polly',c:98,dx:'Leve ressecamento nas pontas',tip:'Aumentar a humidade na prateleira para 75% nos próximos dias e verificar substrato.',goal:75};toast('Análise concluída (demonstração)');render();return}
  const im=new Image();
  im.onload=()=>{const k=Math.min(1,900/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.photos[+to]=c.toDataURL('image/jpeg',.82);toast('Foto guardada');render()};
  im.src=fr.result};
 fr.readAsDataURL(f);e.target.value='';
}
$('#file').addEventListener('change',takeFile);
$('#cam').addEventListener('change',takeFile);
render();