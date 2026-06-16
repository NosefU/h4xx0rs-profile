/* ============================================================
   dateutil.js -- расчёт стажа на текущей работе.
   Перенос со старого сайта, но БЕЗ CDN HumanizeDuration.js:
   считаем "X лет Y месяцев" на чистом JS с русскими склонениями.
   ============================================================ */

(function () {
    function plural(n, one, few, many) {
        var n10 = n % 10, n100 = n % 100;
        if (n10 === 1 && n100 !== 11) return one;
        if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return few;
        return many;
    }

    function run() {
        var node = document.getElementById('lastJobExperience');
        if (!node) return;

        var hire = new Date(node.getAttribute('data-hire-date'));
        var now = new Date();
        // считаем до начала текущего месяца (как в оригинале)
        var cur = new Date(now.getFullYear(), now.getMonth(), 1);

        var months = (cur.getFullYear() - hire.getFullYear()) * 12
                   + (cur.getMonth() - hire.getMonth());
        if (months < 0) months = 0;

        var years = Math.floor(months / 12);
        var mon = months % 12;

        var parts = [];
        if (years > 0) parts.push(years + ' ' + plural(years, 'год', 'года', 'лет'));
        if (mon > 0)   parts.push(mon + ' ' + plural(mon, 'месяц', 'месяца', 'месяцев'));
        if (parts.length === 0) parts.push('меньше месяца');

        node.innerHTML = parts.join(' ');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
