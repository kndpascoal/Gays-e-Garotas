// Links de pagamento (Mercado Pago, só para os ingressos do evento). Vazio ('') = o botão mostra "Em breve".
// Baile Místico: PIX R$ 240 | Cartão em até 3x R$ 265
const LINK_PIX = 'https://mpago.li/2nY2zYL';
const LINK_CARTAO = 'https://mpago.la/22gDmAh';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.link-pagamento-global').forEach(el => {
    el.href = '#ingressos';
  });
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const CONFIG = {
  // Com dataInicio vazio (''), o contador mostra "--".
  // Para voltar, use o formato 'DD/MM/AAAA - HH:MM:SS'. Data anterior (Halloween): '31/10/2026 - 14:00:00'
  dataInicio: '12/12/2026 - 14:00:00',
  textoDatas: '12 de dezembro · A partir das 14h',
  programacao: [
    { horario: '14:00', titulo: 'Chegada, Dinâmicas de quebra gelo e Empreenda LGBT+.' },
    { horario: '15:30', titulo: 'Painel participativo sobre empreendedorismo, saúde mental e finanças.' },
    { horario: '17:00', titulo: 'Dinâmica em grupo e Open Food.' },
    { horario: '18:00', titulo: 'Painel participativo sobre Linkedin, Instagram e TikTok.' },
    { horario: '19:00', titulo: 'Dinâmica surpresa.' },
    { horario: '20:00', titulo: 'Sorteios da noite.' },
    { horario: '20:30', titulo: 'Hora do Networking.' },
    { horario: '22:00', titulo: 'Encerramento.' }
  ],
  ambientes: [
    { nome: 'Rooftop', desc: 'Espaço principal para interações e networking', foto: '/img/espaços/img1.jpg' },
    { nome: 'Jardim', desc: 'Ambiente aconchegante para conversas e trocas', foto: '/img/espaços/img2.jpg' },
    { nome: 'Auditório', desc: 'Área reservada para experiências com marcas parceiras', foto: '/img/espaços/img3.jpg' },
    { nome: 'Vista', desc: 'Ponto de encontro do Baile Místico, Casa da Diversidade', foto: '/img/espaços/img4.jpg' }
  ],
  feedbacks: [
    { autor: 'Carolina Queiroz', cargo: 'Videomaker', foto: '/img/feedbacks/carolina.jpeg', texto: 'Eu já fui em tanto evento grande e esse foi o que tive mais insights que realmente fizeram diferença, sabe?' },
    { autor: 'Gunther', cargo: 'Publicitário e Diretor Criativo', foto: '/img/feedbacks/gunther.jpeg', texto: 'Eles arrasam demais! Foi um dos melhores encontros que já participei. O Julio entrega muito! Vale demais fazer parte!' },
    { autor: 'Dr. Matheus Willin', cargo: 'Biomédico', foto: '/img/feedbacks/matheus.jpeg', texto: 'Você não imagina o quanto esse evento me incentivou e o quanto as conversas e as trocas enriqueceram a minha visão. Voltei para casa com a mente fervilhando de ideias e muito motivado.' },
    { autor: 'Eloá Sgrignoli', cargo: 'Estrategista de Vendas', foto: '/img/feedbacks/eloa.jpeg', texto: 'Fechei dois contratos logo na primeira edição do Gays e Garotas. É um público diverso e pronto para fazer conexões que realmente vão além do dia do evento.' }
  ],
  ingressos: [
    { 
      nome: 'Ingresso Baile Místico', 
      pix: 'R$ 240',
      precoAntigo: 'R$ 265', 
      cartao: 'R$ 265', 
      linkPix: LINK_PIX,
      linkCartao: LINK_CARTAO,
      destaque: false, 
      esgotado: false, 
      beneficios: [
        'Acesso completo ao evento 8h de duração',
        'Open Food incluso',
        'Opção no PIX com 9% OFF ou Cartão em até 3x sem juros'
      ] 
    }
  ],
  faq: [
    {
      p: 'Posso entrar e sair do evento?',
      r: 'Sim, a circulação é totalmente livre! Você pode entrar e sair do espaço quando desejar durante todo o evento.'
    },
    {
      p: 'O evento é apenas para criadores de conteúdo?',
      r: 'De forma alguma! O G&G é o ponto de encontro ideal para empreendedores, criadores e profissionais LGBTQIAPN+ que desejam expandir sua rede de contatos, fechar parcerias estratégicas e trocar experiências.'
    },
    {
      p: 'Onde comprar ingresso?',
      r: 'Aqui no site, na seção Ingressos: no Pix por R$ 240 ou no cartão por R$ 265, em até 3x sem juros. O pagamento é feito pelo Mercado Pago.'
    },
    {
      p: 'Qual horário e duração?',
      r: 'O evento começará às 14 horas e tem duração de 8 horas, ou seja, o horário previsto para término é às 22 horas.'
    }
  ]
};

document.getElementById('heroDates').textContent = CONFIG.textoDatas;

function tickCountdown() {
  if (!CONFIG.dataInicio) {
    ['cd-dias', 'cd-horas', 'cd-min', 'cd-seg', 'nav-cd-dias', 'nav-cd-horas', 'nav-cd-min', 'nav-cd-seg']
      .forEach(id => { document.getElementById(id).textContent = '--'; });
    return;
  }
  const [data, hora] = CONFIG.dataInicio.split(' - ');
  const [dia, mes, ano] = data.split('/');
  const alvo = new Date(`${ano}-${mes}-${dia}T${hora}`).getTime();
  const diff = Math.max(0, alvo - Date.now());
  const dias = String(Math.floor(diff / 86400000)).padStart(2, '0');
  const horas = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const segs = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  document.getElementById('cd-dias').textContent = dias;
  document.getElementById('cd-horas').textContent = horas;
  document.getElementById('cd-min').textContent = mins;
  document.getElementById('cd-seg').textContent = segs;
  document.getElementById('nav-cd-dias').textContent = dias;
  document.getElementById('nav-cd-horas').textContent = horas;
  document.getElementById('nav-cd-min').textContent = mins;
  document.getElementById('nav-cd-seg').textContent = segs;
}
tickCountdown();
setInterval(tickCountdown, 1000);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: .12 });

// Com "grupo" (carrossel): os cartões aparecem todos juntos quando o carrossel entra na tela e não somem mais.
// Acender e apagar cartão durante o arrasto fazia o Safari do iPhone voltar para o primeiro cartão.
function observeElements(selector, grupo) {
  const itens = document.querySelectorAll(selector);
  const caixa = grupo && document.querySelector(grupo);
  if (caixa) {
    const io = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      itens.forEach(el => el.classList.add('visible'));
      io.disconnect();
    }, { threshold: .12 });
    io.observe(caixa);
  }
  itens.forEach((el, index) => {
    const isProg = el.classList.contains('prog-item');
    if (!isProg && !el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
    const delayStep = isProg ? 0.06 : 0.08;
    const modulo = isProg ? 8 : 4;
    el.style.transitionDelay = `${(index % modulo) * delayStep}s`;
    if (!caixa) revealObserver.observe(el);
  });
}

(function renderMarquee() {
  const nomesBase = ['Julio Tuschi', 'Eloá Sgrignoli', 'Manuela Freitas', 'Lyra Libero', 'Vitor Manon', 'Kerodrama'];
  const nomes = Array(6).fill(nomesBase).flat();
  const grupo = nomes.map(nome => `<span>${nome}<svg viewBox="-10 -10 20 20" aria-hidden="true"><path d="M0-9L2-2L9 0L2 2L0 9L-2 2L-9 0L-2-2Z"/></svg></span>`).join('');
  document.getElementById('marqueeTrack').innerHTML = `<div class="marquee-group">${grupo}</div><div class="marquee-group">${grupo}</div>`;
})();

(function renderProgramacao() {
  const container = document.getElementById('progList');
  container.innerHTML = CONFIG.programacao.map((item, index) => `
    <div class="prog-item" data-index="${index}">
      <div class="prog-header-left">
        <span class="prog-time">${item.horario}</span>
        <h3 class="prog-title">${item.titulo}</h3>
      </div>
    </div>
  `).join('');

  observeElements('#progList .prog-item', '#progList');
})();

(function renderStages() {
  document.getElementById('ambienteGrid').innerHTML = CONFIG.ambientes.map(p => `
    <div class="ambiente-card reveal">
      <img class="ambiente-foto" src="${p.foto}" alt="${p.nome}">
      <div class="ambiente-info">
        <h3>${p.nome}</h3>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('#ambienteGrid .ambiente-card').forEach(el => {
    revealObserver.observe(el);
  });
})();

/* ============================================================
   LÓGICA DO CARROSSEL EMPREENDA LGBT+
   ============================================================ */
(function initEmpreendaSlider() {
  const slider = document.getElementById('empreendaSlider');
  const prevBtn = document.getElementById('empreendaPrev');
  const nextBtn = document.getElementById('empreendaNext');
  const dotsContainer = document.getElementById('empreendaDots');
  if (!slider || !prevBtn || !nextBtn || !dotsContainer) return;

  const slides = slider.querySelectorAll('.empreenda-slide');
  const totalSlides = slides.length;

  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ir para foto ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function updateDots(index) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function goToSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    updateDots(index);
  }

  prevBtn.addEventListener('click', () => {
    const slideWidth = slider.clientWidth;
    let currentIndex = Math.round(slider.scrollLeft / slideWidth);
    let newIndex = currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const slideWidth = slider.clientWidth;
    let currentIndex = Math.round(slider.scrollLeft / slideWidth);
    let newIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  });

  slider.addEventListener('scroll', () => {
    const slideWidth = slider.clientWidth;
    if (slideWidth > 0) {
      const currentIndex = Math.round(slider.scrollLeft / slideWidth);
      updateDots(currentIndex);
    }
  });
})();

/* ============================================================
   RENDERIZAÇÃO REFORMULADA DO CARD DE INGRESSOS
   ============================================================ */
(function renderTicketCompra() {
  const compraEl = document.getElementById('ticketCompraGrid');
  const checkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  
  compraEl.innerHTML = CONFIG.ingressos.map(t => `
    <div class="ticket-card-spooky reveal">
      ${t.destaque ? `<span class="ticket-tag-spooky">OFERTA LIMITADA</span>` : ''}
      <h3 class="ticket-title-spooky">${t.nome}</h3>
      
      <div class="ticket-prices-container">
        <!-- Opção PIX -->
        <div class="ticket-price-row">
          <div class="ticket-price-info">
            <span class="ticket-price-label">Pagamento via PIX <span class="badge-desconto-spooky">9% OFF</span></span>
            <div class="ticket-price-val">${t.pix}</div>
          </div>
          ${t.linkPix
            ? `<a href="${t.linkPix}" target="_blank" rel="noopener noreferrer" class="btn bootzy btn-spooky-pix">Comprar no PIX</a>`
            : `<a class="btn bootzy btn-spooky-pix" aria-disabled="true" style="pointer-events:none;">Em breve</a>`}
        </div>
        
        <hr style="border: 0; border-top: 1px dashed rgba(255,255,255,0.12);">

        <!-- Opção Cartão -->
        <div class="ticket-price-row">
          <div class="ticket-price-info">
            <span class="ticket-price-label">Cartão de Crédito</span>
            <div class="ticket-price-val">${t.cartao} <small>até 3x sem juros</small></div>
          </div>
          ${t.linkCartao
            ? `<a href="${t.linkCartao}" target="_blank" rel="noopener noreferrer" class="btn outline bootzy btn-spooky-card">Comprar no Cartão</a>`
            : `<a class="btn outline bootzy btn-spooky-card" aria-disabled="true" style="pointer-events:none;">Em breve</a>`}
        </div>
      </div>

      <ul class="ticket-benefits-list">
        ${t.beneficios.map(b => `<li>${checkIcon} <span>${b}</span></li>`).join('')}
      </ul>
    </div>
  `).join('');
  observeElements('#ticketCompraGrid .ticket-card-spooky');
})();

(function renderFeedbacks() {
  const feedbackEl = document.getElementById('feedbacksGrid');
  feedbackEl.innerHTML = CONFIG.feedbacks.map(f => `
    <div class="ticket-card reveal feedback-card">
      <p class="feedback-texto">"${f.texto}"</p>
      <button type="button" class="feedback-toggle">
        <span class="toggle-label">Ver mais</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="feedback-footer">
        <div>
          <strong style="display: block; font-size: 15px; color: var(--text);">${f.autor}</strong>
          <small style="color: var(--muted); font-size: 13px;">${f.cargo}</small>
        </div>
        <img src="${f.foto}" alt="${f.autor}" class="feedback-avatar">
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#feedbacksGrid .ticket-card').forEach(el => {
    revealObserver.observe(el);
  });

  function setupExpandableFeedbacks() {
    const textos = Array.from(feedbackEl.querySelectorAll('.feedback-texto'));
    if (!textos.length) return;

    textos.forEach(texto => {
      const card = texto.closest('.feedback-card');
      const toggle = card.querySelector('.feedback-toggle');
      const label = toggle.querySelector('.toggle-label');

      texto.style.maxHeight = 'none';
      const fullHeight = texto.scrollHeight;
      const lineHeightPx = parseFloat(getComputedStyle(texto).lineHeight);
      const refHeight = Math.ceil(lineHeightPx * 4);
      texto.style.maxHeight = '';

      if (fullHeight > refHeight + 4) {
        card.classList.remove('expanded');
        toggle.classList.remove('open');
        label.textContent = 'Ver mais';
        toggle.classList.add('show');

        if (!toggle.dataset.bound) {
          toggle.dataset.bound = '1';

          const doToggle = () => {
            const isOpen = card.classList.toggle('expanded');
            toggle.classList.toggle('open', isOpen);
            label.textContent = isOpen ? 'Ver menos' : 'Ver mais';
          };

          let lastTrigger = 0;
          const triggerOnce = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const now = Date.now();
            if (now - lastTrigger < 300) return;
            lastTrigger = now;
            doToggle();
          };

          toggle.addEventListener('pointerup', triggerOnce);
          toggle.addEventListener('click', triggerOnce);

          card.addEventListener('pointerup', (e) => {
            if (e.target.closest('.feedback-toggle')) return;
            if (e.target.closest('a')) return;
            const now = Date.now();
            if (now - lastTrigger < 300) return;
            lastTrigger = now;
            doToggle();
          });
          card.style.cursor = 'pointer';
        }
      } else {
        toggle.classList.remove('show');
      }
    });
  }

  requestAnimationFrame(() => requestAnimationFrame(setupExpandableFeedbacks));
  window.addEventListener('resize', () => {
    clearTimeout(window.__fbResizeTimer);
    window.__fbResizeTimer = setTimeout(setupExpandableFeedbacks, 200);
  });
})();

(function renderFaq() {
  const el = document.getElementById('faqList');
  el.innerHTML = CONFIG.faq.map((item, i) => `
    <div class="faq-item reveal" data-i="${i}">
      <button class="faq-q" type="button">${item.p}<span class="plus">+</span></button>
      <div class="faq-a"><p>${item.r}</p></div>
    </div>
  `).join('');
  observeElements('#faqList .faq-item');
  el.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      el.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

(function renderSocial() {
  const redes = [
    {
      nome: 'Instagram',
      url: 'https://instagram.com/gaysegarotashub',
      svg: `<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>`
    },
    {
      nome: 'TikTok',
      url: 'https://tiktok.com/@gaysegarotashub',
      svg: `<path d="M14 3v10.5a3 3 0 11-2-2.8V3h2z"/><path d="M14 3a5 5 0 005 5"/>`
    },
    {
      nome: 'LinkedIn',
      url: 'https://www.linkedin.com/company/gaysegarotashub/',
      svg: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6"/><path d="M8 8v.01"/><path d="M12 17v-6"/><path d="M12 14a3 3 0 016 0v3"/>`
    }
  ];
  document.getElementById('socialRow').innerHTML = redes.map(r => `
    <a href="${r.url}" aria-label="${r.nome}" title="${r.nome}" target="_blank" rel="noopener noreferrer">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r.svg}</svg>
    </a>
  `).join('');
})();

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
document.getElementById('backToTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

observeElements('.reveal:not(.experiencia-card)');
observeElements('#experienciaCards .experiencia-card', '#experienciaCards');

const backToTopBtn = document.getElementById('backToTop');
const progSection = document.getElementById('programacao');

window.addEventListener('scroll', () => {
  const progTop = progSection.offsetTop;
  if (window.scrollY >= progTop - 100) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

(function initScrollFades() {
  const containers = [
    document.querySelector('.prog-scroll'),
    document.querySelector('.experiencia-scroll'),
    document.querySelector('.feedbacks-scroll'),
    document.querySelector('.ambiente-scroll'),
    document.querySelector('.sobre-scroll'),
    document.querySelector('.edicoes-scroll')
  ];

  containers.forEach(wrapper => {
    if (!wrapper) return;
    const scroller = wrapper.querySelector('#progList, .experiencia-cards, #feedbacksGrid, .ambiente-grid, .sobre-grid, .edicoes-grid');
    if (!scroller) return;

    function checkScroll() {
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      const currentScroll = scroller.scrollLeft;

      if (currentScroll >= maxScrollLeft - 5) {
        wrapper.classList.add('no-fade');
      } else {
        wrapper.classList.remove('no-fade');
      }
    }

    scroller.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
  });
})();

/* ============================================================
   EFITO PARALLAX SUAVE NAS ESTRELAS DO FUNDO AO ROLAR A PÁGINA
   ============================================================ */
(function initStarsParallax() {
  const heroSection = document.querySelector('.abertura');
  if (!heroSection || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Navegador com parallax pela rolagem no CSS (estilo.css, 7.1): ele mesmo move as estrelas.
  if (window.CSS && CSS.supports('animation-timeline: scroll()')) return;

  let ticking = false;

  function updateStarsPosition() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY <= heroHeight) {
      const offsetBefore = scrollY * 0.5;  
      const offsetAfter = scrollY * 0.25;  

      heroSection.style.setProperty('--stars-offset-before', `${offsetBefore}px`);
      heroSection.style.setProperty('--stars-offset-after', `${offsetAfter}px`);
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateStarsPosition);
      ticking = true;
    }
  }, { passive: true });

  updateStarsPosition();
})();
