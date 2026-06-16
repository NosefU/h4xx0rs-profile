/* ============================================================
   fx.js -- мелкие "хакерские" спецэффекты для главной.
   Всё необязательное: без JS страница остаётся читаемой
   (graceful degradation).
     1) typewriter на главном "понте"
     2) бегущий фейковый "статус взлома" в #hackbar
   ============================================================ */

(function () {
    /* --- 1. эффект печатной машинки на #typed --- */
    function typewriter() {
        var el = document.getElementById('typed');
        if (!el) return;
        var full = el.textContent;
        el.textContent = '';
        var i = 0;
        (function tick() {
            if (i <= full.length) {
                el.textContent = full.slice(0, i) + (i % 2 ? '_' : '');
                i++;
                setTimeout(tick, 45);
            } else {
                el.textContent = full;
            }
        })();
    }

    /* --- 2. фейковый "статус взлома" в #hackbar --- */
    function hackbar() {
        var el = document.getElementById('hackbar');
        if (!el) return;
        var lines = [
            '[ sys: r34dy ]',
            '> connecting 2 m41nfr4m3...',
            '> bypassing f1r3w4ll... [OK]',
            '> downloading teh internet... 99%',
            '> h4ck1ng t1m3: 0x1337 ms',
            '> ACC3SS GR4NT3D!!! >:)',
            '> jk i just made this site lol =P'
        ];
        var n = 0;
        function next() {
            el.innerHTML = lines[n % lines.length] + '&nbsp;<span class="blink">_</span>';
            n++;
            setTimeout(next, 1600);
        }
        next();
    }

    function run() { typewriter(); hackbar(); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
