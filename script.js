/* ==============================
   REIS FOOD — script.js
   Lógica completa: cardápio, modal,
   carrinho, WhatsApp, animações
   ============================== */

/* ============================
   DADOS DO CARDÁPIO
   (Edite aqui para atualizar produtos)
   ============================ */
const cardapio = {
  burguers: [
    {
      id: 'b1', nome: 'Misto Quente', preco: 15.00, emoji: '🥪',
      desc: 'Pão, presunto e queijo.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Presunto extra', preco: 2.00 },
      ]
    },
    {
      id: 'b2', nome: 'X Burguer', preco: 18.00, emoji: '🍔',
      desc: 'Pão, hamburguer artesanal, presunto e queijo.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Presunto extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Alface e tomate', preco: 1.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
    {
      id: 'b3', nome: 'X Salada', preco: 22.00, emoji: '🥗',
      desc: 'Pão, hamburguer artesanal, presunto, queijo, alface e tomate.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
    {
      id: 'b4', nome: 'X Bacon', preco: 27.00, emoji: '🥓',
      desc: 'Pão, hamburguer artesanal, presunto, queijo, alface, tomate e bacon.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
    {
      id: 'b5', nome: 'X Calabresa', preco: 25.00, emoji: '🌶️',
      desc: 'Pão, hamburguer artesanal, presunto, queijo, alface, tomate e calabresa.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
    {
      id: 'b6', nome: 'X Egg', preco: 25.00, emoji: '🍳',
      desc: 'Pão, hamburguer artesanal, presunto, queijo, alface, tomate e ovo.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
    {
      id: 'b7', nome: 'X Frango', preco: 25.00, emoji: '🍗',
      desc: 'Pão, frango grelhado, queijo, catupiry, alface e tomate.',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry extra', preco: 2.00 },
        { nome: 'Alface e tomate extra', preco: 1.00 },
      ]
    },
    {
      id: 'b8', nome: 'X Tudo', preco: 35.00, emoji: '👑',
      desc: 'Pão, hamburguer artesanal, presunto, queijo, alface, tomate, salsicha, calabresa, bacon, frango grelhado e ovo. O rei dos lanches!',
      adicionais: [
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Ovo extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Hamburguer extra', preco: 5.00 },
      ]
    },
  ],

  dogs: [
    {
      id: 'd1', nome: 'Dog Tradicional', preco: 16.00, emoji: '🌭',
      desc: 'Pão, uma salsicha partida ao meio, tomate, milho, maionese caseira, ketchup, mostarda, batata palha e queijo.',
      adicionais: [
        { nome: 'Salsicha extra', preco: 3.00 },
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Batata palha extra', preco: 1.00 },
        { nome: 'Milho extra', preco: 1.00 },
      ]
    },
    {
      id: 'd2', nome: 'Dog Bacon', preco: 22.00, emoji: '🥓',
      desc: 'Pão, uma salsicha partida ao meio, tomate, milho, maionese caseira, ketchup, mostarda, batata palha, queijo e bacon.',
      adicionais: [
        { nome: 'Salsicha extra', preco: 3.00 },
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Batata palha extra', preco: 1.00 },
        { nome: 'Milho extra', preco: 1.00 },
      ]
    },
    {
      id: 'd3', nome: 'Dog Frango', preco: 21.00, emoji: '🍗',
      desc: 'Pão, uma salsicha partida ao meio, tomate, milho, maionese caseira, ketchup, mostarda, batata palha, queijo, catupiry e frango desfiado.',
      adicionais: [
        { nome: 'Salsicha extra', preco: 3.00 },
        { nome: 'Frango desfiado extra', preco: 3.00 },
        { nome: 'Catupiry extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Batata palha extra', preco: 1.00 },
      ]
    },
    {
      id: 'd4', nome: 'Dog Calabresa', preco: 21.00, emoji: '🌶️',
      desc: 'Pão, uma salsicha partida ao meio, tomate, milho, maionese caseira, ketchup, mostarda, batata palha, queijo e calabresa.',
      adicionais: [
        { nome: 'Salsicha extra', preco: 3.00 },
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Batata palha extra', preco: 1.00 },
      ]
    },
    {
      id: 'd5', nome: 'Dog Bacon/Frango', preco: 24.00, emoji: '🔥',
      desc: 'Pão, uma salsicha partida ao meio, tomate, milho, maionese caseira, ketchup, mostarda, batata palha, queijo, catupiry, bacon e frango desfiado.',
      adicionais: [
        { nome: 'Salsicha extra', preco: 3.00 },
        { nome: 'Bacon extra', preco: 3.00 },
        { nome: 'Frango desfiado extra', preco: 3.00 },
        { nome: 'Catupiry extra', preco: 2.00 },
        { nome: 'Queijo extra', preco: 2.00 },
        { nome: 'Batata palha extra', preco: 1.00 },
      ]
    },
  ],

  pasteis: [
    {
      id: 'p1', nome: 'Pastel de Carne', preco: 12.00, emoji: '🥟',
      desc: 'Massa crocante recheada com carne temperada.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p2', nome: 'Pastel de Frango', preco: 12.00, emoji: '🥟',
      desc: 'Massa crocante recheada com frango temperado.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p3', nome: 'Pastel de Queijo', preco: 12.00, emoji: '🧀',
      desc: 'Massa crocante recheada com queijo derretido.',
      adicionais: [
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p4', nome: 'Pastel Pizza', preco: 12.00, emoji: '🍕',
      desc: 'Massa crocante com sabor pizza: queijo, tomate e orégano.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p5', nome: 'Pastel Carne Queijo', preco: 14.00, emoji: '🥟',
      desc: 'Massa crocante com carne temperada e queijo derretido.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p6', nome: 'Pastel Frango Catupiry', preco: 14.00, emoji: '🥟',
      desc: 'Frango desfiado com catupiry cremoso. Irresistível!',
      adicionais: [
        { nome: 'Catupiry extra', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p7', nome: 'Pastel Frango Bacon', preco: 14.00, emoji: '🥟',
      desc: 'Frango desfiado com pedaços crocantes de bacon.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
    {
      id: 'p8', nome: 'Pastel Queijo Bacon', preco: 14.00, emoji: '🥟',
      desc: 'Queijo derretido com pedaços crocantes de bacon.',
      adicionais: [
        { nome: 'Catupiry', preco: 2.00 },
        { nome: 'Bacon extra', preco: 2.00 },
      ]
    },
  ],

  churros: [
    {
      id: 'c1', nome: 'Churros Granulado de Chocolate', preco: 7.00, emoji: '🍡',
      desc: 'Churros fresquinhos com recheio à escolha e granulado de chocolate.',
      tipo: 'churros',
      coberturaPreco: 7.00,
      coberturaNome: 'Granulado de Chocolate',
      adicionais: []
    },
    {
      id: 'c2', nome: 'Churros Granulado Colorido', preco: 7.00, emoji: '🍡',
      desc: 'Churros fresquinhos com recheio à escolha e granulado colorido.',
      tipo: 'churros',
      coberturaPreco: 7.00,
      coberturaNome: 'Granulado Colorido',
      adicionais: []
    },
    {
      id: 'c3', nome: 'Churros com Amendoim', preco: 7.00, emoji: '🥜',
      desc: 'Churros fresquinhos com recheio à escolha e amendoim triturado.',
      tipo: 'churros',
      coberturaPreco: 7.00,
      coberturaNome: 'Amendoim',
      adicionais: []
    },
    {
      id: 'c4', nome: 'Churros Sonho de Valsa', preco: 12.00, emoji: '🍫',
      desc: 'Churros especial com cobertura de Sonho de Valsa. Puro indulgência!',
      tipo: 'churros',
      coberturaPreco: 12.00,
      coberturaNome: 'Sonho de Valsa',
      adicionais: []
    },
    {
      id: 'c5', nome: 'Churros Ouro Branco', preco: 12.00, emoji: '🍬',
      desc: 'Churros especial com cobertura de Ouro Branco.',
      tipo: 'churros',
      coberturaPreco: 12.00,
      coberturaNome: 'Ouro Branco',
      adicionais: []
    },
    {
      id: 'c6', nome: 'Churros Prestígio', preco: 12.00, emoji: '🥥',
      desc: 'Churros especial com cobertura de Prestígio. Chocolate e coco!',
      tipo: 'churros',
      coberturaPreco: 12.00,
      coberturaNome: 'Prestígio',
      adicionais: []
    },
    {
      id: 'c7', nome: 'Churros Kitkat', preco: 12.00, emoji: '🍫',
      desc: 'Churros especial com cobertura de Kitkat.',
      tipo: 'churros',
      coberturaPreco: 12.00,
      coberturaNome: 'Kitkat',
      adicionais: []
    },
    {
      id: 'c8', nome: 'Churros Kinder Bueno', preco: 15.00, emoji: '⭐',
      desc: 'Churros premium com cobertura de Kinder Bueno. O mais especial!',
      tipo: 'churros',
      coberturaPreco: 15.00,
      coberturaNome: 'Kinder Bueno',
      adicionais: []
    },
  ],

  bebidas: [
    {
      id: 'bv1', nome: 'Refri 600 mL', preco: 9.00, emoji: '🥤',
      desc: 'Refrigerante gelado 600 mL. Perfeito para acompanhar seu lanche!',
      adicionais: []
    },
    {
      id: 'bv2', nome: 'Refri Lata', preco: 6.00, emoji: '🧃',
      desc: 'Refrigerante em lata geladinho.',
      adicionais: []
    },
    {
      id: 'bv3', nome: 'Coca-Cola 1L', preco: 10.00, emoji: '🥤',
      desc: 'Coca-Cola 1 litro. Para compartilhar!',
      adicionais: []
    },
    {
      id: 'bv4', nome: 'Coca-Cola 2L', preco: 15.00, emoji: '🥤',
      desc: 'Coca-Cola 2 litros. Ideal para toda a família!',
      adicionais: []
    },
    {
      id: 'bv5', nome: 'Conquista 2L', preco: 12.00, emoji: '🥤',
      desc: 'Refrigerante Conquista 2 litros.',
      adicionais: []
    },
    {
      id: 'bv6', nome: 'Suco 300 mL', preco: 8.00, emoji: '🍹',
      desc: 'Suco natural ou de caixinha 300 mL.',
      adicionais: []
    },
    {
      id: 'bv7', nome: 'Suco 1L', preco: 15.00, emoji: '🍹',
      desc: 'Suco 1 litro. Refrescante!',
      adicionais: []
    },
    {
      id: 'bv8', nome: 'Água', preco: 3.00, emoji: '💧',
      desc: 'Água mineral gelada.',
      adicionais: []
    },
  ]
};

/* Coberturas dos churros para o modal */
const coberturas = [
  { nome: 'Granulado de Chocolate', preco: 7.00 },
  { nome: 'Granulado Colorido', preco: 7.00 },
  { nome: 'Amendoim', preco: 7.00 },
  { nome: 'Sonho de Valsa', preco: 12.00 },
  { nome: 'Ouro Branco', preco: 12.00 },
  { nome: 'Prestígio', preco: 12.00 },
  { nome: 'Kitkat', preco: 12.00 },
  { nome: 'Kinder Bueno', preco: 15.00 },
];

/* Horários de funcionamento */
const horarios = {
  0: { aberto: true, inicio: 17, fim: 23 },  // Domingo
  1: { aberto: true, inicio: 17, fim: 23 },  // Segunda
  2: { aberto: true, inicio: 17, fim: 23 },  // Terça
  3: { aberto: true, inicio: 17, fim: 23 },  // Quarta
  4: { aberto: true, inicio: 17, fim: 23 },  // Quinta
  5: { aberto: true, inicio: 17, fim: 24 },  // Sexta
  6: { aberto: true, inicio: 17, fim: 24 },  // Sábado
};

/* ============================
   ESTADO DA APLICAÇÃO
   ============================ */
let carrinho = JSON.parse(sessionStorage.getItem('reis-food-cart') || '[]');
let produtoAtual = null;
let qtdAtual = 1;
let adicionaisSelecionados = [];

/* ============================
   LOADING SCREEN
   ============================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading-screen');
    if (loading) loading.classList.add('hidden');
  }, 1600);
});

/* ============================
   STATUS ABERTO/FECHADO
   ============================ */
function verificarStatus() {
  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours();
  const h = horarios[dia];
  const badge = document.getElementById('status-badge');
  const texto = badge ? badge.querySelector('.status-text') : null;

  if (!badge || !texto) return;

  const estaAberto = h && h.aberto && hora >= h.inicio && hora < h.fim;

  if (estaAberto) {
    badge.classList.add('aberto');
    badge.classList.remove('fechado');
    texto.textContent = '🟢 Aberto agora';
  } else {
    badge.classList.add('fechado');
    badge.classList.remove('aberto');
    const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
    // Encontrar próxima abertura
    let proximoDia = null;
    for (let i = 1; i <= 7; i++) {
      const d = (dia + i) % 7;
      if (horarios[d] && horarios[d].aberto) { proximoDia = dias[d]; break; }
    }
    texto.textContent = proximoDia ? `🔴 Fechado · Abre ${proximoDia}` : '🔴 Fechado hoje';
  }
}
verificarStatus();
setInterval(verificarStatus, 60000);

/* ============================
   NAVBAR SCROLL
   ============================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
});

/* ============================
   MENU MOBILE
   ============================ */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Fechar ao clicar em link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ============================
   RENDERIZAR CARDÁPIO
   ============================ */
function formatarPreco(v) {
  return `R$ ${v.toFixed(2).replace('.', ',')}`;
}

function criarCard(produto) {
  const card = document.createElement('div');
  card.className = 'produto-card';
  card.setAttribute('data-id', produto.id);
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${produto.nome} — ${formatarPreco(produto.preco)}`);

  const precoDisplay = produto.tipo === 'churros' ? `a partir de R$ 7,00` : formatarPreco(produto.preco);

  card.innerHTML = `
    <span class="card-emoji" aria-hidden="true">${produto.emoji}</span>
    <div class="card-nome">${produto.nome}</div>
    <div class="card-desc">${produto.desc}</div>
    <div class="card-footer">
      <span class="card-preco">${precoDisplay}</span>
      <button class="card-add-btn" aria-label="Ver detalhes e adicionar">Ver +</button>
    </div>
  `;

  card.addEventListener('click', () => abrirModal(produto));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') abrirModal(produto); });
  return card;
}

function renderizarCardapio() {
  const categorias = ['burguers', 'dogs', 'pasteis', 'churros', 'bebidas'];
  categorias.forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    cardapio[cat].forEach((produto, idx) => {
      const card = criarCard(produto);
      card.style.transitionDelay = `${idx * 60}ms`;
      grid.appendChild(card);
    });
  });
  observarCards();
}

/* ============================
   INTERSECTION OBSERVER (ANIMAÇÕES)
   ============================ */
function observarCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.produto-card').forEach(card => observer.observe(card));
}

/* ============================
   FILTROS DE CATEGORIA
   ============================ */
const filtros = document.querySelectorAll('.filtro-btn');
filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const cat = btn.getAttribute('data-cat');
    const secoes = document.querySelectorAll('.cat-section');
    secoes.forEach(s => {
      if (cat === 'todos' || s.getAttribute('data-cat') === cat) {
        s.classList.remove('hidden');
      } else {
        s.classList.add('hidden');
      }
    });

    // Scroll suave para a seção
    if (cat !== 'todos') {
      const sec = document.getElementById(cat);
      if (sec) setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  });
});

/* ============================
   MODAL DE PRODUTO
   ============================ */
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function abrirModal(produto) {
  produtoAtual = produto;
  qtdAtual = 1;
  adicionaisSelecionados = [];

  // Preencher dados
  document.getElementById('modal-emoji').textContent = produto.emoji;
  document.getElementById('modal-title').textContent = produto.nome;
  document.getElementById('modal-desc').textContent = produto.desc;
  document.getElementById('qtd-num').textContent = '1';

  const isChurros = produto.tipo === 'churros';
  const precoBaseEl = document.getElementById('modal-preco-base');
  precoBaseEl.innerHTML = `Preço base: <span>${isChurros ? 'depende da cobertura' : formatarPreco(produto.preco)}</span>`;

  // Adicionais comuns
  const adicionaisDiv = document.getElementById('modal-adicionais');
  const adicionaisList = document.getElementById('adicionais-list');
  adicionaisList.innerHTML = '';

  if (produto.adicionais && produto.adicionais.length > 0) {
    adicionaisDiv.style.display = 'block';
    produto.adicionais.forEach((ad, i) => {
      const item = document.createElement('label');
      item.className = 'adicional-item';
      item.innerHTML = `
        <input type="checkbox" id="ad-${i}" data-preco="${ad.preco}" data-nome="${ad.nome}">
        <span>${ad.nome}</span>
        <span class="adicional-preco">+${formatarPreco(ad.preco)}</span>
      `;
      item.querySelector('input').addEventListener('change', calcularTotal);
      adicionaisList.appendChild(item);
    });
  } else {
    adicionaisDiv.style.display = 'none';
  }

  // Churros
  const churrosDiv = document.getElementById('modal-churros');
  if (isChurros) {
    churrosDiv.style.display = 'block';
    const coberturaGroup = document.getElementById('churros-cobertura');
    coberturaGroup.innerHTML = '';
    coberturas.forEach((cob, i) => {
      const lbl = document.createElement('label');
      lbl.innerHTML = `
        <input type="radio" name="cobertura" value="${cob.preco}" data-nome="${cob.nome}" ${i === 0 ? 'checked' : ''}>
        ${cob.nome}
        <span class="cobertura-preco">${formatarPreco(cob.preco)}</span>
      `;
      lbl.querySelector('input').addEventListener('change', calcularTotal);
      coberturaGroup.appendChild(lbl);
    });
    // Selecionar a cobertura do produto por padrão
    const radios = coberturaGroup.querySelectorAll('input[type="radio"]');
    radios.forEach(r => {
      if (r.dataset.nome === produto.coberturaNome) r.checked = true;
    });
  } else {
    churrosDiv.style.display = 'none';
  }

  calcularTotal();

  // Exibir modal
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modalClose.focus(), 300);
}

function fecharModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  produtoAtual = null;
}

function calcularTotal() {
  if (!produtoAtual) return;
  const isChurros = produtoAtual.tipo === 'churros';
  let base = produtoAtual.preco;

  if (isChurros) {
    const cobSel = document.querySelector('input[name="cobertura"]:checked');
    if (cobSel) base = parseFloat(cobSel.value);
  }

  let extras = 0;
  document.querySelectorAll('#adicionais-list input:checked').forEach(cb => {
    extras += parseFloat(cb.getAttribute('data-preco'));
  });

  const total = (base + extras) * qtdAtual;
  document.getElementById('modal-total').textContent = formatarPreco(total);
}

// Quantidade
document.getElementById('qtd-menos').addEventListener('click', () => {
  if (qtdAtual > 1) { qtdAtual--; document.getElementById('qtd-num').textContent = qtdAtual; calcularTotal(); }
});
document.getElementById('qtd-mais').addEventListener('click', () => {
  qtdAtual++;
  document.getElementById('qtd-num').textContent = qtdAtual;
  calcularTotal();
});

// Fechar modal
modalClose.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) fecharModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOverlay.classList.contains('active')) fecharModal(); });

// Adicionar ao carrinho
document.getElementById('modal-add-btn').addEventListener('click', () => {
  if (!produtoAtual) return;
  const isChurros = produtoAtual.tipo === 'churros';
  let precoBase = produtoAtual.preco;
  let detalhes = [];

  if (isChurros) {
    const cobSel = document.querySelector('input[name="cobertura"]:checked');
    const recheioSel = document.querySelector('input[name="recheio"]:checked');
    if (cobSel) { precoBase = parseFloat(cobSel.value); detalhes.push(`Cobertura: ${cobSel.dataset.nome}`); }
    if (recheioSel) detalhes.push(`Recheio: ${recheioSel.value}`);
  }

  let extrasTotal = 0;
  document.querySelectorAll('#adicionais-list input:checked').forEach(cb => {
    const p = parseFloat(cb.getAttribute('data-preco'));
    extrasTotal += p;
    detalhes.push(`+ ${cb.dataset.nome} (+${formatarPreco(p)})`);
  });

  const total = (precoBase + extrasTotal) * qtdAtual;

  const item = {
    id: Date.now(),
    produtoId: produtoAtual.id,
    nome: produtoAtual.nome,
    emoji: produtoAtual.emoji,
    preco: precoBase + extrasTotal,
    quantidade: qtdAtual,
    total: total,
    detalhes: detalhes,
  };

  carrinho.push(item);
  salvarCarrinho();
  atualizarBadge();
  fecharModal();
  mostrarToast(`${produtoAtual.emoji} ${produtoAtual.nome} adicionado ao pedido!`);
});

/* ============================
   CARRINHO
   ============================ */
const cartBtn = document.getElementById('cart-btn');
const cartClose = document.getElementById('cart-close');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');

function abrirCarrinho() {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderizarCarrinho();
}

function fecharCarrinho() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', abrirCarrinho);
cartClose.addEventListener('click', fecharCarrinho);
cartOverlay.addEventListener('click', fecharCarrinho);

function salvarCarrinho() {
  try { sessionStorage.setItem('reis-food-cart', JSON.stringify(carrinho)); } catch(e) {}
}

function atualizarBadge() {
  const badge = document.getElementById('cart-badge');
  const total = carrinho.reduce((s, i) => s + i.quantidade, 0);
  badge.textContent = total;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

function calcularTotalCarrinho() {
  return carrinho.reduce((s, i) => s + i.total, 0);
}

function renderizarCarrinho() {
  const itemsDiv = document.getElementById('cart-items');
  const summaryDiv = document.getElementById('cart-summary');
  const emptyDiv = document.getElementById('cart-empty');
  const totalDisplay = document.getElementById('cart-total-display');

  if (carrinho.length === 0) {
    emptyDiv.style.display = 'block';
    summaryDiv.style.display = 'none';
    // Limpar itens exceto o vazio
    const itens = itemsDiv.querySelectorAll('.cart-item');
    itens.forEach(i => i.remove());
    return;
  }

  emptyDiv.style.display = 'none';
  summaryDiv.style.display = 'block';

  // Limpar itens anteriores
  itemsDiv.querySelectorAll('.cart-item').forEach(i => i.remove());

  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-nome">${item.nome} ${item.quantidade > 1 ? `×${item.quantidade}` : ''}</div>
        ${item.detalhes.length ? `<div class="cart-item-extras">${item.detalhes.join(' · ')}</div>` : ''}
        <div class="cart-item-preco">${formatarPreco(item.total)}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Remover ${item.nome}">Remover</button>
    `;
    div.querySelector('.cart-item-remove').addEventListener('click', () => {
      carrinho = carrinho.filter(i => i.id !== item.id);
      salvarCarrinho();
      atualizarBadge();
      renderizarCarrinho();
    });
    itemsDiv.insertBefore(div, summaryDiv);
  });

  if (totalDisplay) totalDisplay.textContent = formatarPreco(calcularTotalCarrinho());
}

// Limpar carrinho
document.getElementById('limpar-cart-btn').addEventListener('click', () => {
  if (confirm('Limpar todo o pedido?')) {
    carrinho = [];
    salvarCarrinho();
    atualizarBadge();
    renderizarCarrinho();
  }
});

/* ============================
   ENVIO VIA WHATSAPP
   ============================ */
document.getElementById('enviar-wa-btn').addEventListener('click', () => {
  const nome = document.getElementById('cliente-nome').value.trim();
  const entrega = document.getElementById('cliente-entrega').value.trim();
  const obs = document.getElementById('cliente-obs').value.trim();

  if (!nome) {
    document.getElementById('cliente-nome').focus();
    mostrarToast('⚠️ Por favor, informe seu nome!');
    return;
  }
  if (carrinho.length === 0) {
    mostrarToast('🛒 Adicione itens ao pedido primeiro!');
    return;
  }

  const emojisCategoria = { b: '🍔', d: '🌭', p: '🥟', c: '🍡', bv: '🥤' };

  let linhas = [];
  linhas.push('Olá, Reis Food! 👑');
  linhas.push('Gostaria de fazer um pedido:\n');

  carrinho.forEach(item => {
    linhas.push(`${item.emoji} *${item.nome}*${item.quantidade > 1 ? ` ×${item.quantidade}` : ''} — ${formatarPreco(item.total)}`);
    if (item.detalhes.length) {
      item.detalhes.forEach(d => linhas.push(`   ${d}`));
    }
  });

  linhas.push('');
  linhas.push(`💰 *Total: ${formatarPreco(calcularTotalCarrinho())}*`);
  linhas.push('');
  linhas.push(`👤 Nome: ${nome}`);
  linhas.push(`📍 Entrega: ${entrega || 'Retirada no trailer'}`);
  if (obs) linhas.push(`📝 Obs: ${obs}`);
  linhas.push('');
  linhas.push('Aguardo confirmação! 😊');

  const mensagem = encodeURIComponent(linhas.join('\n'));
  const url = `https://wa.me/5543998318057?text=${mensagem}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

/* ============================
   TOAST
   ============================ */
let toastTimer = null;
function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================
   INICIALIZAÇÃO
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
  renderizarCardapio();
  atualizarBadge();
});
