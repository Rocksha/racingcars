$(function(){
    $('#start').click(function(){
        var time1 = Math.floor(Math.random()*5000 + 1);
        var time2 = Math.floor(Math.random()*5000 + 1);
        var width1 = $('#racingtrack').width() - $('#car1').width() + 5;
        var width2 = $('#racingtrack').width() - $('#car2').width() + 5;
        var carresult1 = (time1<time2)?"Won":"Lost";
        var carresult2 = (time2<time1)?"Won":"Lost";
        $('#car1').animate({
            'left':width1
        }, time1, function(){
            $('#car1result').html("<strong>"+carresult1+":</strong><em> Silver streak</em> took "+time1/1000+" seconds.").slideDown(1000);
        });
        $('#car2').animate({
            'left':width2
        }, time2, function(){
            $('#car2result').html("<strong>"+carresult2+":</strong><em> Blue Haven</em> took "+time2/1000+" seconds.").slideDown(1000);
        });
    });
    
    
    $('#reset').click(function(){
        $('.cars').css({
            'left':'0'
        });
        $('.carresult').text("");
    });
    
    
    
});