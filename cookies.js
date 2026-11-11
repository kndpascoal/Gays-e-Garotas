// Aviso de cookies (LGPD): as páginas do evento usam o Google Analytics e o Google Tag Manager para medir as visitas.
// Esses serviços gravam cookies no navegador, então só são carregados DEPOIS que a pessoa aceita. Recusou: nada do
// Google é carregado e a página funciona igual. A escolha fica guardada neste navegador e pode ser mudada a qualquer
// hora pelo link "Preferências de cookies" do rodapé (qualquer elemento com data-cookies).
(function () {
  var KEY = 'gg-cookies'; // 'sim' | 'nao'
  var GTM = 'GTM-5L49PL7L';
  var GA = 'G-MP4EDX1VMT';
  var loaded = false;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* navegação privada: vale só nesta visita */ } }

  function loadGoogle() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var a = document.createElement('script'); a.async = true; a.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM;
    var b = document.createElement('script'); b.async = true; b.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA;
    document.head.appendChild(a); document.head.appendChild(b);
    window.gtag('js', new Date());
    window.gtag('config', GA);
  }

  function close() { var el = document.getElementById('gg-cookies'); if (el) el.parentNode.removeChild(el); }

  function open() {
    if (document.getElementById('gg-cookies')) return;
    var box = document.createElement('div');
    box.id = 'gg-cookies';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Aviso de cookies');
    box.innerHTML = '<style>'
      + '#gg-cookies{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:99999;max-width:560px;margin:0 auto;'
      + 'background:rgba(22,22,30,.96);color:#f4f4f7;border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:16px 18px;'
      + 'font:400 14px/1.5 Inter,system-ui,-apple-system,Arial,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)}'
      + '#gg-cookies p{margin:0 0 12px}#gg-cookies a{color:#f4f4f7;text-decoration:underline}'
      + '#gg-cookies .gg-row{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}'
      + '#gg-cookies button{font:600 14px/1 Inter,system-ui,-apple-system,Arial,sans-serif;border-radius:999px;padding:11px 20px;cursor:pointer;min-width:112px}'
      + '#gg-cookies .gg-no{background:transparent;color:#f4f4f7;border:1px solid rgba(255,255,255,.4)}'
      + '#gg-cookies .gg-yes{background:#f4f4f7;color:#0a0a0f;border:1px solid #f4f4f7}'
      + '</style>'
      + '<p>Usamos cookies do Google para contar as visitas e entender como esta página é usada. Você pode aceitar ou recusar: a página funciona do mesmo jeito. '
      + '<a href="/privacidade/">Política de Privacidade</a></p>'
      + '<div class="gg-row"><button type="button" class="gg-no">Recusar</button><button type="button" class="gg-yes">Aceitar</button></div>';
    document.body.appendChild(box);
    // os dois botões com o mesmo tamanho e destaque: recusar é tão fácil quanto aceitar
    box.querySelector('.gg-no').addEventListener('click', function () { write('nao'); close(); });
    box.querySelector('.gg-yes').addEventListener('click', function () { write('sim'); close(); loadGoogle(); });
  }

  function start() {
    var v = read();
    if (v === 'sim') loadGoogle();
    else if (v !== 'nao') open();
    // "Preferências de cookies" no rodapé: mostra o aviso de novo para a pessoa mudar a escolha
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-cookies]') : null;
      if (!t) return;
      e.preventDefault();
      open();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
