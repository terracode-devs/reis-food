/* ==============================
   REIS FOOD — script.js v3
   ============================== */

// ============================================================
// 1. DADOS
// ============================================================
var CARDAPIO = {
  burguers: [
    { id:'b1', nome:'Misto Quente',   preco:15, emoji:'🥪', desc:'Pão, presunto e queijo.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Queijo extra',p:2},{n:'Presunto extra',p:2}] },
    { id:'b2', nome:'X Burguer',      preco:18, emoji:'🍔', desc:'Pão, hamburguer artesanal, presunto e queijo.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Presunto extra',p:2},{n:'Catupiry',p:2},{n:'Alface e tomate',p:1},{n:'Hamburguer extra',p:5}] },
    { id:'b3', nome:'X Salada',       preco:22, emoji:'🥗', desc:'Pão, hamburguer, presunto, queijo, alface e tomate.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Catupiry',p:2},{n:'Hamburguer extra',p:5}] },
    { id:'b4', nome:'X Bacon',        preco:27, emoji:'🥓', desc:'Pão, hamburguer, presunto, queijo, alface, tomate e bacon.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Catupiry',p:2},{n:'Hamburguer extra',p:5}] },
    { id:'b5', nome:'X Calabresa',    preco:25, emoji:'🌶️', desc:'Pão, hamburguer, presunto, queijo, alface, tomate e calabresa.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Catupiry',p:2},{n:'Hamburguer extra',p:5}] },
    { id:'b6', nome:'X Egg',          preco:25, emoji:'🍳', desc:'Pão, hamburguer, presunto, queijo, alface, tomate e ovo.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Catupiry',p:2},{n:'Hamburguer extra',p:5}] },
    { id:'b7', nome:'X Frango',       preco:25, emoji:'🍗', desc:'Pão, frango grelhado, queijo, catupiry, alface e tomate.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Queijo extra',p:2},{n:'Catupiry extra',p:2},{n:'Alface e tomate extra',p:1}] },
    { id:'b8', nome:'X Tudo',         preco:35, emoji:'👑', desc:'O rei dos lanches! Tudo dentro.',
      adicionais:[{n:'Bacon extra',p:3},{n:'Ovo extra',p:2},{n:'Queijo extra',p:2},{n:'Catupiry',p:2},{n:'Hamburguer extra',p:5}] },
  ],
  dogs: [
    { id:'d1', nome:'Dog Tradicional',  preco:16, emoji:'🌭', desc:'Salsicha, tomate, milho, maionese, ketchup, mostarda, batata palha e queijo.',
      adicionais:[{n:'Salsicha extra',p:3},{n:'Bacon extra',p:3},{n:'Queijo extra',p:2},{n:'Batata palha extra',p:1},{n:'Milho extra',p:1}] },
    { id:'d2', nome:'Dog Bacon',        preco:22, emoji:'🥓', desc:'Salsicha, tomate, milho, maionese, ketchup, mostarda, batata palha, queijo e bacon.',
      adicionais:[{n:'Salsicha extra',p:3},{n:'Bacon extra',p:3},{n:'Queijo extra',p:2},{n:'Batata palha extra',p:1},{n:'Milho extra',p:1}] },
    { id:'d3', nome:'Dog Frango',       preco:21, emoji:'🍗', desc:'Salsicha, tomate, milho, maionese, ketchup, mostarda, batata palha, queijo, catupiry e frango desfiado.',
      adicionais:[{n:'Salsicha extra',p:3},{n:'Frango desfiado extra',p:3},{n:'Catupiry extra',p:2},{n:'Queijo extra',p:2},{n:'Batata palha extra',p:1}] },
    { id:'d4', nome:'Dog Calabresa',    preco:21, emoji:'🌶️', desc:'Salsicha, tomate, milho, maionese, ketchup, mostarda, batata palha, queijo e calabresa.',
      adicionais:[{n:'Salsicha extra',p:3},{n:'Bacon extra',p:3},{n:'Queijo extra',p:2},{n:'Batata palha extra',p:1}] },
    { id:'d5', nome:'Dog Bacon/Frango', preco:24, emoji:'🔥', desc:'Salsicha, tomate, milho, maionese, ketchup, mostarda, batata palha, queijo, catupiry, bacon e frango desfiado.',
      adicionais:[{n:'Salsicha extra',p:3},{n:'Bacon extra',p:3},{n:'Frango desfiado extra',p:3},{n:'Catupiry extra',p:2},{n:'Queijo extra',p:2},{n:'Batata palha extra',p:1}] },
  ],
  pasteis: [
    { id:'p1', nome:'Pastel de Carne',        preco:12, emoji:'🥟', desc:'Massa crocante com carne temperada.',           adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
    { id:'p2', nome:'Pastel de Frango',       preco:12, emoji:'🥟', desc:'Massa crocante com frango temperado.',          adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
    { id:'p3', nome:'Pastel de Queijo',       preco:12, emoji:'🧀', desc:'Massa crocante com queijo derretido.',          adicionais:[{n:'Bacon extra',p:2}] },
    { id:'p4', nome:'Pastel Pizza',           preco:12, emoji:'🍕', desc:'Massa com sabor pizza: queijo, tomate e orégano.', adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
    { id:'p5', nome:'Pastel Carne Queijo',    preco:14, emoji:'🥟', desc:'Carne temperada com queijo derretido.',         adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
    { id:'p6', nome:'Pastel Frango Catupiry', preco:14, emoji:'🥟', desc:'Frango desfiado com catupiry cremoso.',         adicionais:[{n:'Catupiry extra',p:2},{n:'Bacon extra',p:2}] },
    { id:'p7', nome:'Pastel Frango Bacon',    preco:14, emoji:'🥟', desc:'Frango desfiado com bacon crocante.',           adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
    { id:'p8', nome:'Pastel Queijo Bacon',    preco:14, emoji:'🥟', desc:'Queijo derretido com bacon crocante.',          adicionais:[{n:'Catupiry',p:2},{n:'Bacon extra',p:2}] },
  ],
  churros: [
    { id:'c1', nome:'Churros Doce de Leite', preco:7, emoji:'🍡',
      desc:'Churros fresquinhos com recheio de doce de leite. Escolha a cobertura!',
      tipo:'churros', recheioFixo:'Doce de Leite', adicionais:[] },
    { id:'c2', nome:'Churros de Chocolate', preco:7, emoji:'🍫',
      desc:'Churros fresquinhos com recheio de chocolate. Escolha a cobertura!',
      tipo:'churros', recheioFixo:'Chocolate', adicionais:[] },
  ],
  bebidas: [
    { id:'bv1', nome:'Refri 600 mL',  preco:9,  emoji:'🥤', desc:'Refrigerante gelado 600 mL.',           adicionais:[] },
    { id:'bv2', nome:'Refri Lata',    preco:6,  emoji:'🧃', desc:'Refrigerante em lata geladinho.',       adicionais:[] },
    { id:'bv3', nome:'Coca-Cola 1L',  preco:10, emoji:'🥤', desc:'Coca-Cola 1 litro.',                   adicionais:[] },
    { id:'bv4', nome:'Coca-Cola 2L',  preco:15, emoji:'🥤', desc:'Coca-Cola 2 litros.',                  adicionais:[] },
    { id:'bv5', nome:'Conquista 2L',  preco:12, emoji:'🥤', desc:'Refrigerante Conquista 2 litros.',      adicionais:[] },
    { id:'bv6', nome:'Suco 300 mL',   preco:8,  emoji:'🍹', desc:'Suco natural ou de caixinha 300 mL.',  adicionais:[] },
    { id:'bv7', nome:'Suco 1L',       preco:15, emoji:'🍹', desc:'Suco 1 litro.',                        adicionais:[] },
    { id:'bv8', nome:'Água',          preco:3,  emoji:'💧', desc:'Água mineral gelada.',                 adicionais:[] },
  ]
};

// Coberturas dos churros — o que muda o preço
var COBERTURAS = [
  { nome:'Granulado de Chocolate', preco:7  },
  { nome:'Granulado Colorido',     preco:7  },
  { nome:'Amendoim',               preco:7  },
  { nome:'Sonho de Valsa',         preco:12 },
  { nome:'Ouro Branco',            preco:12 },
  { nome:'Prestígio',              preco:12 },
  { nome:'Kitkat',                 preco:12 },
  { nome:'Kinder Bueno',           preco:15 },
];

// Dias que abrem (0=Dom,1=Seg,...,6=Sáb) — quarta(3) fechado
var DIAS_ABERTOS = { 0:true, 1:true, 2:true, 3:false, 4:true, 5:true, 6:true };

// ============================================================
// 2. ESTADO GLOBAL
// ============================================================
var carrinho = [];
try { carrinho = JSON.parse(sessionStorage.getItem('rf-cart') || '[]'); } catch(e) { carrinho = []; }

var modalProduto = null;
var modalQtd = 1;

// ============================================================
// 3. UTILIDADES
// ============================================================
function R(v) {
  return 'R$ ' + Number(v || 0).toFixed(2).replace('.', ',');
}

function save() {
  try { sessionStorage.setItem('rf-cart', JSON.stringify(carrinho)); } catch(e) {}
}

function toast(msg) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show';
  setTimeout(function() { el.className = 'toast'; }, 3000);
}

// ============================================================
// 4. LOADING
// ============================================================
window.addEventListener('load', function() {
  var el = document.getElementById('loading-screen');
  if (el) setTimeout(function() { el.classList.add('hidden'); }, 1400);
});

// ============================================================
// 5. STATUS ABERTO / FECHADO  (horário Brasília = UTC-3)
// ============================================================
function atualizarStatus() {
  var badge = document.getElementById('status-badge');
  var texto = badge && badge.querySelector('.status-text');
  if (!badge || !texto) return;

  // hora atual em Brasília
  var agora   = new Date();
  var utcMs   = agora.getTime() + agora.getTimezoneOffset() * 60000;
  var br      = new Date(utcMs - 3 * 3600000);
  var dia     = br.getDay();
  var hhmm    = br.getHours() * 60 + br.getMinutes(); // minutos desde meia-noite

  badge.className = 'hero-badge'; // limpa classes anteriores

  // faixas em minutos
  var A_INI  = 18 * 60;        // 18:00 — abre
  var A_PREV = 17 * 60 + 1;   // 17:01 — abre em breve
  var F_PREV = 23 * 60 + 1;   // 23:01 — fecha em breve
  // 24:00 em minutos = 1440, mas hhmm nunca chega lá; 00:00 = 0

  var NOMES = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

  // dia fechado (quarta)
  if (!DIAS_ABERTOS[dia]) {
    badge.classList.add('status-fechado');
    var prox = null;
    for (var i = 1; i <= 7; i++) {
      var d = (dia + i) % 7;
      if (DIAS_ABERTOS[d]) { prox = NOMES[d]; break; }
    }
    texto.textContent = '🔴 Fechado — Abre ' + (prox || 'em breve') + ' às 18h';
    return;
  }

  if (hhmm >= A_INI && hhmm < F_PREV) {
    // ABERTO: 18:00 até 23:00
    badge.classList.add('status-aberto');
    texto.textContent = '🟢 Aberto — Das 18h às 00h';
  } else if (hhmm >= F_PREV) {
    // FECHA EM BREVE: 23:01 – 23:59
    badge.classList.add('status-alerta');
    texto.textContent = '🟡 Fecha em Breve — Encerra às 00h';
  } else if (hhmm >= A_PREV && hhmm < A_INI) {
    // ABRE EM BREVE: 17:01 – 17:59
    badge.classList.add('status-alerta');
    texto.textContent = '🟡 Abre em Breve — Às 18h';
  } else {
    // FECHADO: 00:00 – 17:00
    badge.classList.add('status-fechado');
    texto.textContent = '🔴 Fechado — Abre hoje às 18h';
  }
}
atualizarStatus();
setInterval(atualizarStatus, 30000);

// ============================================================
// 6. NAVBAR SCROLL
// ============================================================
var _navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (_navbar) _navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================================
// 7. MENU MOBILE
// Menu desliza da direita (82% da tela).
// Os 18% à esquerda ficam visíveis e fecham o menu ao clicar.
// A página permanece rolável enquanto o menu está aberto.
// ============================================================
(function() {
  var toggle  = document.getElementById('nav-toggle');
  var links   = document.getElementById('nav-links');
  var overlay = document.getElementById('nav-overlay');
  if (!toggle || !links) return;

  var menuAberto = false;

  function abrirMenu() {
    menuAberto = true;
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    // Muda ícone para ✕
    toggle.querySelectorAll('span').forEach(function(s, i) {
      if (i === 0) { s.style.transform = 'translateY(8px) rotate(45deg)'; }
      if (i === 1) { s.style.opacity = '0'; }
      if (i === 2) { s.style.transform = 'translateY(-8px) rotate(-45deg)'; }
    });
    // Mostra a área de clique (os 18% à esquerda)
    if (overlay) overlay.classList.add('ativo');
    // NÃO bloqueia o scroll da página
  }

  function fecharMenu() {
    menuAberto = false;
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    // Restaura ícone para ☰
    toggle.querySelectorAll('span').forEach(function(s) {
      s.style.transform = '';
      s.style.opacity = '';
    });
    if (overlay) overlay.classList.remove('ativo');
  }

  // Botão hamburguer abre/fecha
  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menuAberto ? fecharMenu() : abrirMenu();
  });

  // Clicar num link fecha o menu
  links.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', fecharMenu);
  });

  // Clicar nos 18% visíveis (overlay) fecha o menu
  // Apenas evento 'click' — touchmove/scroll não fecham
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      e.stopPropagation();
      fecharMenu();
    });
  }

  // Fechar com Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuAberto) fecharMenu();
  });
})();

// ============================================================
// 8. CARRINHO — badge e renderização
// ============================================================
function totalGeral() {
  var t = 0;
  for (var i = 0; i < carrinho.length; i++) t += Number(carrinho[i].total) || 0;
  return t;
}

function atualizarBadge() {
  var badge = document.getElementById('cart-badge');
  if (!badge) return;
  var n = 0;
  for (var i = 0; i < carrinho.length; i++) n += Number(carrinho[i].qtd) || 0;
  badge.textContent = n;
}

function renderCarrinho() {
  var wrap     = document.getElementById('cart-items');
  var summary  = document.getElementById('cart-summary');
  var vazio    = document.getElementById('cart-empty');
  var totalEl  = document.getElementById('cart-total-display');
  if (!wrap) return;

  // apaga itens antigos (não apaga #cart-empty e #cart-summary)
  var itens = wrap.querySelectorAll('.cart-item');
  for (var i = 0; i < itens.length; i++) itens[i].parentNode.removeChild(itens[i]);

  if (carrinho.length === 0) {
    if (vazio)   vazio.style.display   = '';
    if (summary) summary.style.display = 'none';
    return;
  }

  if (vazio)   vazio.style.display   = 'none';
  if (summary) summary.style.display = 'block';

  // monta cada linha
  for (var k = 0; k < carrinho.length; k++) {
    (function(item) {
      var div = document.createElement('div');
      div.className = 'cart-item';

      var extras = (item.detalhes && item.detalhes.length)
        ? '<div class="cart-item-extras">' + item.detalhes.join(' · ') + '</div>'
        : '';

      div.innerHTML =
        '<span class="cart-item-emoji">' + item.emoji + '</span>' +
        '<div class="cart-item-info">' +
          '<div class="cart-item-nome">' + item.nome +
            (item.qtd > 1 ? ' <em>×' + item.qtd + '</em>' : '') +
          '</div>' +
          extras +
          '<div class="cart-item-preco">' + R(item.total) + '</div>' +
        '</div>' +
        '<button class="cart-item-rm" title="Remover">🗑️</button>';

      div.querySelector('.cart-item-rm').addEventListener('click', function() {
        carrinho = carrinho.filter(function(c) { return c.id !== item.id; });
        save();
        atualizarBadge();
        renderCarrinho();
      });

      // insere ANTES do summary para que fique na área scrollável
      wrap.appendChild(div);
    })(carrinho[k]);
  }

  if (totalEl) totalEl.textContent = R(totalGeral());
}

// ============================================================
// 9. ABRIR / FECHAR CARRINHO
// ============================================================
(function() {
  var btn     = document.getElementById('cart-btn');
  var drawer  = document.getElementById('cart-drawer');
  var overlay = document.getElementById('cart-overlay');
  var closeBtn= document.getElementById('cart-close');

  function abre() {
    renderCarrinho();
    drawer  && drawer.classList.add('open');
    overlay && overlay.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  }
  function fecha() {
    drawer  && drawer.classList.remove('open');
    overlay && overlay.classList.remove('active');
    document.documentElement.style.overflow = '';
  }

  btn     && btn.addEventListener('click', abre);
  closeBtn && closeBtn.addEventListener('click', fecha);
  overlay  && overlay.addEventListener('click', fecha);

  // Modal de confirmação personalizado para limpar carrinho
  var limpar        = document.getElementById('limpar-cart-btn');
  var confirmOvl    = document.getElementById('confirm-overlay');
  var confirmOk     = document.getElementById('confirm-ok');
  var confirmCancel = document.getElementById('confirm-cancel');
  var confirmX      = document.getElementById('confirm-x');

  function abrirConfirm() {
    if (!confirmOvl) return;
    confirmOvl.classList.add('active');
    confirmOvl.setAttribute('aria-hidden', 'false');
    // Foco no botão "Cancelar" (ação segura por padrão)
    setTimeout(function() { if (confirmCancel) confirmCancel.focus(); }, 50);
  }

  function fecharConfirm() {
    if (!confirmOvl) return;
    confirmOvl.classList.remove('active');
    confirmOvl.setAttribute('aria-hidden', 'true');
  }

  function executarLimpar() {
    fecharConfirm();
    carrinho = [];
    save();
    atualizarBadge();
    renderCarrinho();
  }

  limpar        && limpar.addEventListener('click', abrirConfirm);
  confirmOk     && confirmOk.addEventListener('click', executarLimpar);
  confirmCancel && confirmCancel.addEventListener('click', fecharConfirm);
  confirmX      && confirmX.addEventListener('click', fecharConfirm);

  // Fechar ao clicar no fundo (fora da caixa)
  confirmOvl && confirmOvl.addEventListener('click', function(e) {
    if (e.target === confirmOvl) fecharConfirm();
  });

  // Fechar com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && confirmOvl && confirmOvl.classList.contains('active')) {
      fecharConfirm();
    }
  });
})();

// ============================================================
// 10. WHATSAPP
// ============================================================
(function() {
  var btn = document.getElementById('enviar-wa-btn');
  if (!btn) return;
  btn.addEventListener('click', function() {
    var nome    = (document.getElementById('cliente-nome')    || {}).value || '';
    var entrega = (document.getElementById('cliente-entrega') || {}).value || '';
    var obs     = (document.getElementById('cliente-obs')     || {}).value || '';

    nome = nome.trim();
    if (!nome)            { toast('⚠️ Informe seu nome!'); return; }
    if (!carrinho.length) { toast('🛒 Carrinho vazio!');   return; }

    var linhas = ['Olá, Reis Food! 👑', 'Pedido:\n'];
    for (var i = 0; i < carrinho.length; i++) {
      var it = carrinho[i];
      linhas.push(it.emoji + ' *' + it.nome + '*' + (it.qtd > 1 ? ' ×' + it.qtd : '') + ' — ' + R(it.total));
      if (it.detalhes && it.detalhes.length) {
        for (var j = 0; j < it.detalhes.length; j++) linhas.push('   ' + it.detalhes[j]);
      }
    }
    linhas.push('', '💰 *Total: ' + R(totalGeral()) + '*', '');
    linhas.push('👤 Nome: ' + nome);
    linhas.push('📍 Entrega: ' + (entrega.trim() || 'Retirada no trailer'));
    if (obs.trim()) linhas.push('📝 Obs: ' + obs.trim());
    linhas.push('', 'Aguardo confirmação! 😊');

    window.open('https://wa.me/5543998318057?text=' + encodeURIComponent(linhas.join('\n')), '_blank');
  });
})();

// ============================================================
// 11. MODAL
// ============================================================
var _modalOverlay = document.getElementById('modal-overlay');
var _modalClose   = document.getElementById('modal-close');

function calcModalTotal() {
  if (!modalProduto) return;
  var base = modalProduto.preco;
  if (modalProduto.tipo === 'churros') {
    var cobEl = document.querySelector('#churros-cobertura input:checked');
    if (cobEl) base = Number(cobEl.value);
  }
  var extras = 0;
  var checkboxes = document.querySelectorAll('#adicionais-list input:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    extras += Number(checkboxes[i].getAttribute('data-p')) || 0;
  }
  var el = document.getElementById('modal-total');
  if (el) el.textContent = R((base + extras) * modalQtd);
}

function abrirModal(prod) {
  modalProduto = prod;
  modalQtd = 1;

  document.getElementById('modal-emoji').textContent = prod.emoji;
  document.getElementById('modal-title').textContent = prod.nome;
  document.getElementById('modal-desc').textContent  = prod.desc;
  document.getElementById('qtd-num').textContent = '1';

  var isChurros = prod.tipo === 'churros';

  // preço base
  var pbEl = document.getElementById('modal-preco-base');
  if (pbEl) pbEl.innerHTML = isChurros
    ? '<span>Preço varia conforme a cobertura escolhida</span>'
    : 'Preço base: <span>' + R(prod.preco) + '</span>';

  // adicionais
  var adDiv  = document.getElementById('modal-adicionais');
  var adList = document.getElementById('adicionais-list');
  if (adList) adList.innerHTML = '';
  if (!isChurros && prod.adicionais && prod.adicionais.length) {
    if (adDiv) adDiv.style.display = 'block';
    prod.adicionais.forEach(function(ad) {
      var lbl = document.createElement('label');
      lbl.className = 'adicional-item';
      lbl.innerHTML =
        '<input type="checkbox" data-p="' + ad.p + '" data-n="' + ad.n + '">' +
        '<span>' + ad.n + '</span>' +
        '<span class="adicional-preco">+' + R(ad.p) + '</span>';
      lbl.querySelector('input').addEventListener('change', calcModalTotal);
      adList.appendChild(lbl);
    });
  } else {
    if (adDiv) adDiv.style.display = 'none';
  }

  // churros
  var churrosDiv = document.getElementById('modal-churros');
  if (isChurros) {
    churrosDiv.style.display = 'block';

    // coberturas — define o preço (recheio já está no nome do produto)
    var cg = document.getElementById('churros-cobertura');
    if (cg) {
      cg.innerHTML = '';
      COBERTURAS.forEach(function(c, i) {
        var lbl = document.createElement('label');
        lbl.className = 'c-chip c-chip--cob';
        lbl.innerHTML =
          '<input type="radio" name="rf-cobertura" value="' + c.preco + '" data-n="' + c.nome + '"' + (i === 0 ? ' checked' : '') + '>' +
          '<span class="c-nome">' + c.nome + '</span>' +
          '<span class="c-preco">' + R(c.preco) + '</span>';
        lbl.querySelector('input').addEventListener('change', calcModalTotal);
        cg.appendChild(lbl);
      });
    }
  } else {
    if (churrosDiv) churrosDiv.style.display = 'none';
  }

  calcModalTotal();
  _modalOverlay.classList.add('active');
  document.documentElement.style.overflow = 'hidden';
}

function fecharModal() {
  _modalOverlay.classList.remove('active');
  document.documentElement.style.overflow = '';
  modalProduto = null;
}

_modalClose   && _modalClose.addEventListener('click', fecharModal);
_modalOverlay && _modalOverlay.addEventListener('click', function(e) {
  if (e.target === _modalOverlay) fecharModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharModal();
});

// qtd
document.getElementById('qtd-menos') && document.getElementById('qtd-menos').addEventListener('click', function() {
  if (modalQtd > 1) { modalQtd--; document.getElementById('qtd-num').textContent = modalQtd; calcModalTotal(); }
});
document.getElementById('qtd-mais') && document.getElementById('qtd-mais').addEventListener('click', function() {
  modalQtd++; document.getElementById('qtd-num').textContent = modalQtd; calcModalTotal();
});

// adicionar ao carrinho pelo modal
document.getElementById('modal-add-btn') && document.getElementById('modal-add-btn').addEventListener('click', function() {
  if (!modalProduto) return;
  adicionarAoCarrinho(modalProduto, modalQtd, true);
  fecharModal();
});

// ============================================================
// 12. ADICIONAR AO CARRINHO
// ============================================================
function adicionarAoCarrinho(prod, qtd, viaModal) {
  var base = prod.preco;
  var detalhes = [];

  if (prod.tipo === 'churros' && viaModal) {
    var cobEl = document.querySelector('#churros-cobertura input:checked');
    if (cobEl) { base = Number(cobEl.value); detalhes.push('Cobertura: ' + cobEl.getAttribute('data-n')); }
    // recheio vem fixo do produto (não do DOM — seção removida do modal)
    if (prod.recheioFixo) { detalhes.push('Recheio: ' + prod.recheioFixo); }
  }

  var extras = 0;
  if (viaModal) {
    var cbs = document.querySelectorAll('#adicionais-list input:checked');
    for (var i = 0; i < cbs.length; i++) {
      var p = Number(cbs[i].getAttribute('data-p')) || 0;
      extras += p;
      detalhes.push('+ ' + cbs[i].getAttribute('data-n') + ' (+' + R(p) + ')');
    }
  }

  var total = (base + extras) * qtd;

  var item = {
    id:       Date.now() + Math.random(),
    produtoId: prod.id,
    nome:     prod.nome,
    emoji:    prod.emoji,
    qtd:      qtd,
    total:    total,
    detalhes: detalhes,
  };

  carrinho.push(item);
  save();
  atualizarBadge();
  renderCarrinho(); // <— atualiza total imediatamente, mesmo com drawer fechado
  toast(prod.emoji + ' ' + prod.nome + ' adicionado!');
}

// ============================================================
// 13. RENDERIZAR CARDÁPIO
// ============================================================
function criarCard(prod) {
  var isChurros = prod.tipo === 'churros';

  var card = document.createElement('div');
  card.className = 'produto-card';

  var rodapeHtml;
  if (isChurros) {
    // "a partir de..." aparece acima do botão, em linha própria
    rodapeHtml =
      '<div class="card-footer card-footer--churros">' +
        '<span class="card-preco-apart">a partir de R$ 7,00</span>' +
        '<button class="btn-cobertura">🍫 Escolher Cobertura</button>' +
      '</div>';
  } else {
    rodapeHtml =
      '<div class="card-footer">' +
        '<span class="card-preco">' + R(prod.preco) + '</span>' +
        '<div class="card-acoes">' +
          '<button class="btn-ver">Ver +</button>' +
          '<button class="btn-add">＋</button>' +
        '</div>' +
      '</div>';
  }

  card.innerHTML =
    '<span class="card-emoji">' + prod.emoji + '</span>' +
    '<div class="card-nome">' + prod.nome + '</div>' +
    '<div class="card-desc">' + prod.desc + '</div>' +
    rodapeHtml;

  if (isChurros) {
    card.querySelector('.btn-cobertura').addEventListener('click', function(e) {
      e.stopPropagation();
      abrirModal(prod);
    });
  } else {
    card.querySelector('.btn-ver').addEventListener('click', function(e) {
      e.stopPropagation();
      abrirModal(prod);
    });
    card.querySelector('.btn-add').addEventListener('click', function(e) {
      e.stopPropagation();
      adicionarAoCarrinho(prod, 1, false);
    });
  }

  card.addEventListener('click', function() { abrirModal(prod); });
  return card;
}

function renderCardapio() {
  var cats = ['burguers','dogs','pasteis','churros','bebidas'];
  cats.forEach(function(cat) {
    var grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    var lista = CARDAPIO[cat] || [];
    lista.forEach(function(prod, idx) {
      var card = criarCard(prod);
      card.style.transitionDelay = (idx * 55) + 'ms';
      grid.appendChild(card);
    });
  });

  // IntersectionObserver para animação de entrada
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.produto-card').forEach(function(c) { obs.observe(c); });
}

// ============================================================
// 14. FILTROS
// ============================================================
(function() {
  var btns = document.querySelectorAll('.filtro-btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      var cat = btn.getAttribute('data-cat');
      document.querySelectorAll('.cat-section').forEach(function(s) {
        s.classList.toggle('hidden', cat !== 'todos' && s.getAttribute('data-cat') !== cat);
      });
      if (cat !== 'todos') {
        var sec = document.getElementById(cat);
        if (sec) setTimeout(function() { sec.scrollIntoView({ behavior:'smooth', block:'start' }); }, 80);
      }
    });
  });
})();

// ============================================================
// 15. INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  renderCardapio();
  atualizarBadge();
});
