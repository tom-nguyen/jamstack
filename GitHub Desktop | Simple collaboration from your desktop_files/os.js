if (navigator.userAgent.match(/(Mac|iPhone|iPod|iPad)/i)) {
  $('html').get(0).className = 'mac';
}

$(function() {
  $(document).on('click', "[data-action=switch-os]", function(e) {
    e.preventDefault();
    $('html').get(0).className = $(e.currentTarget).attr('data-os');
  })
});
