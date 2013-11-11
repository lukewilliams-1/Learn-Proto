$(document).ready(function(){
    
    $('.checkbtn1').click(function(){
        
        if ($('.answer1').val() == $('.ans1').text()){
            $('.correct').fadeIn('slow');
            $('.incorrect').css('display', 'none')
        }
        else{
            $('.incorrect').fadeIn('slow');
            $('.correct').css('display', 'none')
        }
        
    });
    
    $('.next1').click(function(){
            $('.q2').css('display', 'inherit')
            $('.q1').css('display', 'none')
            $('.correct').css('display', 'none')
    });
    
    $('.checkbtn2').click(function(){
        
        if ($('.answer2').val() == $('.ans2').text()){
            $('.correct').fadeIn('slow');
            $('.incorrect').css('display', 'none')
        }
        else{
            $('.incorrect').fadeIn('slow');
            $('.correct').css('display', 'none')
        }
        
    $('.next2').click(function(){
            $('.q3').css('display', 'inherit')
            $('.q2').css('display', 'none')
            $('.correct').css('display', 'none')
    });
        
    });
    
}); 