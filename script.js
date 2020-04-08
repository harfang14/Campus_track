window.onload = function() {
  $(function () {
      $('[data-toggle="popover"]').popover()
  })

  $('.move').on('click', function() {
    $('#clickMe').fadeOut();
    anime.timeline()
    .add({targets: '.move', translateX: 610, translateY: 50, duration: 2500, easing: 'linear'})
    .add({targets: '.move', translateX: 610, translateY: -145, duration: 1500, easing: 'linear',delay: 1000 })
    .add({targets: '.move', translateX: 948, translateY: -148, duration: 2000, easing: 'linear',delay: 1000 })
    .add({targets: '.move', translateX: 1100, translateY: -35, duration: 1500, easing: 'linear',delay: 1000 })
    .add({targets: '.move', translateX: 300, translateY: 200, duration: 3500, easing: 'linear',delay: 1000 })
    .add({targets: '.move', translateX: 0, translateY: 0, duration: 2000, easing: 'linear',delay: 1000 })
    
  })
}
