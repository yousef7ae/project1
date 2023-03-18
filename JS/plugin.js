$(document).ready(function(){

	/*nicescroll*/
	$("html").niceScroll({

        cursorcolor:'#f7600e',
        cursorwidth:'10px',
        cursorborder:'1px solid #f7600e'
    })

	/*change header height*/
	$(".header").height($(window).height())

	
    /*scroll features*/
  
    $('.header .sahem .arrow i').on('click' ,function(){

    	$('html ,body').animate({

    		scrollTop:$('.features').offset().top
    	},500)
    })

     $('.hire').on('click' ,function(){

        $('html ,body').animate({

            scrollTop:$('.our_team').offset().top
        },500)
    })

      $('.work').on('click' ,function(){

        $('html ,body').animate({

            scrollTop:$('.our-work').offset().top
        },500)
    })

     /*show more project*/
     
    $('.show-more').click(function(){
 
        $('.hidden').fadeIn(1000)
        $(this).css({

            'background-color':'transparent',
            'color':'#555',
            'border':'1px solid #CCC'
        })
    })

    var right = $('.testim .fa-chevron-right'),    
        left =$('.testim .fa-chevron-left');

        function CheckClients(){

            $('.client:first').hasClass('active') ? left.fadeOut(200) : left.fadeIn();

            $('.client:last').hasClass('active') ? right.fadeOut(200) : right.fadeIn();

        }
        
        CheckClients();

        $('.testim i').click(function(){

            if($(this).hasClass('fa-chevron-right')){

                $('.testim .active').fadeOut(100,function(){

                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                    
                    CheckClients();
                });


            } else{

                 $('.testim .active').fadeOut(100,function(){

                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                    
                    CheckClients();
                });

            }

            
        })

       

})

