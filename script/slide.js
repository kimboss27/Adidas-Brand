$(document).ready(function(){
    let slide=$('.visual')
    let txt=$('.txt');
    let page=$('.pagenate > a');
    let currentIndex = 0;
    let slideNum=slide.length;
    let timer=0;
    let menuBtn=$('button');

    /* -- slide 실행 -- */
    txt.eq(0).addClass('on');
  

    function goSlide(index){
        slide.css({'opacity':0, 'z-index':-1});
        txt.removeClass('on');
        
        slide.eq(index).stop().animate({'opacity':1},1500,'easeOutExpo');
        slide.eq(index).css({'z-index':1});

        if(index==0){
            txt.eq(index).addClass('on');
        }else if(index==1){
            txt.eq(index).addClass('on');
        }else if(index==2){
            txt.eq(index).addClass('on');
        }else if(index==3){
            txt.eq(index).addClass('on');   
        }
        currentIndex=index;
        page.removeClass('active');
        //console.log(currentIndex, index)
        page.eq(currentIndex).addClass('active');
    }
    function nextSlide(){
        currentIndex++;
        if(currentIndex>=slideNum){
            currentIndex=0;
        }
        goSlide(currentIndex);
    }
    timer=setInterval(nextSlide,3000);

    /* -- pagenate 클릭 해당 페이지로 이동 -- */  
    page.click(function(e){
        e.preventDefault();
        let pageNum=$(this).index();
        goSlide(pageNum);
        clearInterval(timer);
        timer=setInterval(nextSlide,5000);
    });
       
    /* -- 메뉴 -- */
    $('.sub').css({'display':'none'});
    $('.originals').css({'display':'flex'});
    menuBtn.click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('on');
    });

    $('.menu > .menu_wrap > ul > li > a').click(function(){
        $(this).parent().find('.sub').show();
        $(this).parent().siblings().find('.sub').hide();
    })

    $('a').click(function(e){
        e.preventDefault()
    })
});