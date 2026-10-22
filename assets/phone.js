// Телефона нет в HTML: номер собирается из цифр только по нажатию кнопки,
// поэтому боты, которые читают код страницы, его не находят.
(function () {
  var d = [5, 2, 0, 8, 4, 3, 0, 5, 2, 9, 7];
  document.querySelectorAll('.phone').forEach(function (box) {
    var btn = box.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var n = d.slice().reverse().join('');
      var shown = '+' + n[0] + ' ' + n.slice(1, 4) + ' ' + n.slice(4, 7) + '-' + n.slice(7, 9) + '-' + n.slice(9);
      var links = [
        ['tel:+' + n, shown],
        ['https://wa.me/' + n, box.dataset.labelWa],
        ['https://t.me/+' + n, box.dataset.labelTg]
      ];
      box.textContent = '';
      links.forEach(function (x) {
        var a = document.createElement('a');
        a.href = x[0];
        a.textContent = x[1];
        box.appendChild(a);
      });
      box.querySelector('a').focus();
    });
  });
})();
