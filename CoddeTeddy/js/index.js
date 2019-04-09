function update() {
  var size = parseInt(0, 10);
  if (!isNaN(size)) {
    $('.dyntextval').html($('#dyntext').val());
    $('.jtextfill').textfill({debug: true, maxFontPixels: size});
  }
}

$(function () {
  $('#maxsize').keyup(update);
  $('#dyntext').keyup(update);
  update()
});
