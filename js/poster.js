(function() {
  var $layer, $poster, $shine;

  $poster = $('.poster');

  $shine = $('.shine');

  $layer = $('div[class*="layer-"]');

  $(window).on('mousemove', function(e) {
    var angle, dx, dy, h, offsetPoster, offsetX, offsetY, theta, transformPoster, w;
    w = $(window).width();
    h = $(window).height();
    offsetX = 0.5 - e.pageX / w;
    offsetY = 0.5 - e.pageY / h;
    offsetPoster = $poster.data('offset');
    transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';
    dy = e.pageY - h / 2;
    dx = e.pageX - w / 2;
    theta = Math.atan2(dy, dx);
    angle = theta * 180 / Math.PI;
    if (angle < 0) {
      angle = angle + 360;
    }
    $poster.css('transform', transformPoster);
    $shine.css('background', 'linear-gradient(' + (angle - 90) + 'deg, rgba(255,255,255,' + e.pageY / h + ') 0%,rgba(255,255,255,0) 80%)');
    return $layer.each(function() {
      var $this, offsetLayer, transformLayer;
      $this = $(this);
      offsetLayer = $this.data('offset') || 0;
      transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';
      return $this.css('transform', transformLayer);
    });
  });

}).call(this);