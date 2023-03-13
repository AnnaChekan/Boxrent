jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        //'href': $(this).attr('src'),
                    });
                };
            };
        });
    };
    
    if($('.post-item iframe').length){
        $('.post-item iframe').closest('p').addClass('iframe-box')
    }


        /*range*/
    const rangeInputs = document.querySelectorAll('input[type="range"]')
    const numberInput = document.querySelector('input[type="number"]')
    
    function handleInputChange(e) {
      let target = e.target
      if (e.target.type !== 'range') {
        target = document.getElementById('range')
      } 
      const min = target.min
      const max = target.max
      const val = target.value
      
      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }    
    rangeInputs.forEach(input => {
      input.addEventListener('input', handleInputChange)
    })    
   // numberInput.addEventListener('input', handleInputChange);

    /*popover*/
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    /*const popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
        trigger: 'focus'
    })*/
})
