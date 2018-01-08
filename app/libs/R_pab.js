$( document ).ready(function() {

	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function countMoney(dayWork){ return Math.floor(7000/dayWork)}
    function prinMonthDayGrid(){
    		for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
				$('#WrapR_pab .wrapDay').append(
					'<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div id="one" class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div><div class="row5"><div class="dayGrid"></div></div></div>');
			};//печатаем ячейки \день недели\число месяца\смены
    }
    function calculateMoney(){
        var workingDayR1 = $('#WrapR_pab .row1 .black').length;// Кол-во выходов по графику
        var workingDayR2 = $('#WrapR_pab .row2 .black').length;// Кол-во выходов по графику
        var workingDayR3 = $('#WrapR_pab .row3 .black').length;// Кол-во выходов по графику
        var workingDayR4 = $('#WrapR_pab .row4 .black').length;// Кол-во выходов по графику

        var workingDayR1Fact = workingDayR1; //Кол-во выходов по факту

        $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
        $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
        $('.visits').text('Выходов по факту: ' + workingDayR1Fact);
        $('.payment').text('Оплата: ' + count + 'грн');

        $('#WrapR_pab .row1 .dayGrid').click(function(){
            if ($(this).hasClass('black') || $(this).hasClass('addBlack') === true) { //проверям на рабочий день

                    $(this).removeClass('black addBlack'); //eсли рабочий то снять класс (черный)
                    count-= countMoney(workingDayR1); //отнять с оплаты цену за выход на работу
                    workingDayR1Fact--;//Снять один выход по факту

                    $('.workingDay').text('Количество смен по графику: ' + workingDayR1);  
                    $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                    $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
                    $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + '</span>');

            }else{ //если класс не стоит (выходной) тогда добавить класс (вырабрать рабочую смену)

                $(this).addClass('addBlack');

                count+= countMoney(workingDayR1); // добавить к оплате цену за выход на работу
                workingDayR1Fact++;//Добавить один выход по факту

                $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
                $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
                $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + ' ' + '</span>');
            }

            if (count<7000) {

                $('.payment span').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
                $('.payment span').addClass('lostMoney');
            }

            if (count>7000) {
                $('.payment span').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
                $('.payment span').addClass('addMoney');

            }

            if (workingDayR1Fact > workingDayR1) {
                $('.visits span').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
                $('.visits span').addClass('addMoney');
            }
            if (workingDayR1Fact < workingDayR1) {
                $('.visits span').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
                $('.visits span').addClass('lostMoney');

            }
        });// end click
    }//end function calculateMoney
    function reverseEachWorkDay(){
    	prinMonthDayGrid();//Печатаем общую сетку графика

            $($("#WrapR_pab .row1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==8){scoreR1=1}
                if(scoreR1==5 || scoreR1==6 || scoreR1==7){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#WrapR_pab .row2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#WrapR_pab .row3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#WrapR_pab .row4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#WrapR_pab .row5 .dayGrid").get().reverse()).each(function() {
                scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).addClass('black');
                
                }});//end reverse.each
            
    }

    function cycleWorkDay() {

        $.each($('#WrapR_pab .row1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==8){scoreR1=1}
                if(scoreR1==5 || scoreR1==6 || scoreR1==7){
                    $(this).addClass('black');
                }
        });//end R1

        $.each($('#WrapR_pab .row2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                }
        }); //end R2

        $.each($('#WrapR_pab .row3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                }
        }); //end R3

        $.each($('#WrapR_pab .row4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                }
        });//end R4 

        $.each($('#WrapR_pab .row5 .dayGrid'), function() { 
            scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).addClass('black');
                }
        });//end R5
        console.log(scoreR1);
    }//end cycleWorkDay
	
	/*------------------------------------установки календаря------------------------------------------------------*/
	var
		nameMonth	=	['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		nameDayW	=	['вс','пн','вт','ср','чт','пт','сб'],
		tempDay		=	new	Date(2018,0,1), //получаем  дату с которой ведем отсчет
		Month 		=	tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
		Year 		= 	tempDay.getFullYear(),// получаем год
		Day 		=	tempDay.getDate(), //получаем число
		daysInMonth	=	dInMonth(Month-1,Year),//Количество дней в месяц
		scoreR1		=	1,
		scoreR2		=	2,	
		scoreR3		=	2,	
		scoreR4		=	0,
		scoreR5		=	0,
        count       =   7000;

	$('#WrapR_pab .month p').append(nameMonth[Month-1]);//имя месяца
    $('#WrapR_pab .month p').append('<br><sub>' + Year +'</sub>');
	
	prinMonthDayGrid();//Печатаем общую сетку графика
	cycleWorkDay();//вызываем циклы расчета рабочих дней
    calculateMoney();//вызываем расчет зароботной платы

	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/
    $("#WrapR_pab #nextMonth").click(function(e){
    	
    	if (Month==12) {
    		Year++
    		Month = 0;
    	}//eсли наступил довый год то добавить год и перейти на январь

    	var preLastArr 					= 	$('body #WrapR_pab .row1 .dayGrid'); //узнаем сколько элементов есть
		var preLastElementL2			=	preLastArr[preLastArr.length-2];//выберем предпоследний HTML элемент
		var preLastElementL3			=	preLastArr[preLastArr.length-3];//выберем третий с конца HTML элемент
		var preLastElementL4			=	preLastArr[preLastArr.length-4];//выберем четвертый с конца HTML элемент

		var preLastArr2 				= 	$('body #WrapR_pab .row2 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement2				=	preLastArr2[preLastArr2.length-2];//выберем предпоследний HTML элемент

		var preLastArr3	 				= 	$('body #WrapR_pab .row3 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement3				=	preLastArr3[preLastArr3.length-2];//выберем предпоследний HTML элемент

		var preLastArr4 				= 	$('body #WrapR_pab .row4 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement4				=	preLastArr4[preLastArr4.length-2];//выберем предпоследний HTML элемент

		/*------------------------------------условия для работы графика --------------------------------------------------------*/

        switch (1) {            
            case 
                $('body #WrapR_pab .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElementL2).hasClass('black')=== false &&
                $(preLastElementL3).hasClass('black')=== false &&
                $(preLastElementL4).hasClass('black')=== false:
                    scoreR1 = 4;
                    break;

            case
                $('body #WrapR_pab .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElementL2).hasClass('black')=== false &&
                $(preLastElementL3).hasClass('black')=== false &&
                $(preLastElementL4).hasClass('black')=== true:
                    scoreR1 = 3;
                    break;

            case
                $('body #WrapR_pab .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElementL2).hasClass('black')=== false &&
                $(preLastElementL3).hasClass('black')=== true &&
                $(preLastElementL4).hasClass('black')=== true:
                    scoreR1 = 2;
                    break;
            case
                $('body #WrapR_pab .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElementL2).hasClass('black')=== true &&
                $(preLastElementL3).hasClass('black')=== true &&
                $(preLastElementL4).hasClass('black')=== true:
                    scoreR1 = 1;
                    break;

        }
    	
    	/*------------------------------------end row1--------------------------------------------*/

        switch (2){
            case
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== false  &&  
                $(preLastElement2).hasClass('black')=== false:
                    scoreR2 = 2;
                    break;
            case    
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('balck')=== false:
                    scoreR2 = 3;
                    break;

            case
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR2 = 0;
                    break;

            case
                $('body #WrapR_pab .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR2 = 1;
                    break;

        }

    	/*------------------------------------end row2--------------------------------------------*/

        switch (3){
            case
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== false  &&  
                $(preLastElement2).hasClass('black')=== false:
                    scoreR3 = 2;
                    break;
            case    
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('balck')=== false:
                    scoreR3 = 3;
                    break;

            case
                $('body #WrapR_pab  .collum:last-child .row2 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR3 = 0;
                    break;

            case
                $('body #WrapR_pab .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR3 = 1;
                    break;

        }

    	/*------------------------------------end row3--------------------------------------------*/

        switch (4){
            case
                $('body #WrapR_pab  .collum:last-child .row4 .dayGrid').hasClass('black')=== false  &&  
                $(preLastElement2).hasClass('black')=== false:
                    scoreR4 = 2;
                    break;
            case    
                $('body #WrapR_pab  .collum:last-child .row4 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('balck')=== false:
                    scoreR4 = 3;
                    break;

            case
                $('body #WrapR_pab  .collum:last-child .row4 .dayGrid').hasClass('black')=== true   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR4 = 0;
                    break;

            case
                $('body #WrapR_pab .collum:last-child .row4 .dayGrid').hasClass('black')=== false   &&  
                $(preLastElement2).hasClass('black')=== true:
                    scoreR4 = 1;
                    break;

        }

    	/*------------------------------------end row4--------------------------------------------*/


    	e.preventDefault();//отмеа перехода
    	Month++; // переход на следующий месяц
    	$('#WrapR_pab .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
        $('#WrapR_pab .month p').append('<br><sub>' + Year +'</sub>');
       	$('#WrapR_pab .wrapDay .collum').remove();//удалить старый месяц

       	prinMonthDayGrid();//Печатаем общую сетку графика
		//end for

		cycleWorkDay();//циклы для расписания наступившего нового месяца
        calculateMoney();//Рабоота калькулятора оплаты труда
    });//end click	
	
    	
    $(" #WrapR_pab #backMonth").click(function(e){
    	if (Month==1) {
    		Year--;
    		Month = 13;
    	}

        switch (1) {
            case
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== false:
                    scoreR1 = 4;
                    break;

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== true:
                    scoreR1 = 3;
                    break;

            case    
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== true &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== true:
                    scoreR1 = 2;
                    break;
            case
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== true &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== true &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== true:
                    scoreR1 = 1;
                    break;

            case
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== true  &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== false:
                    scoreR1 = 5;
                    break;

            case
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== true  &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== true  &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== false &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== false:
                   scoreR1 = 6;
                   break;

            case
                $('body #WrapR_pab .collum:nth-child(1) .row1 .dayGrid').hasClass('black')=== true  &&  
                $('body #WrapR_pab .collum:nth-child(2) .row1 .dayGrid').hasClass('black')=== true  &&
                $('body #WrapR_pab .collum:nth-child(3) .row1 .dayGrid').hasClass('black')=== true  &&
                $('body #WrapR_pab .collum:nth-child(4) .row1 .dayGrid').hasClass('black')=== false:
                    scoreR1 = 0;
                    break;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        switch (2){
            case
                $('body #WrapR_pab .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false:
                    scoreR2 = 2;
                    break;

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false:
                    scoreR2 = 3;
                    break;
            case 
                $('body #WrapR_pab .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true:
                    scoreR2 = 0;    
                    break;
        

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true:
                    scoreR2 = 1;
                    break;
    	}

    	
		/*------------------------------------end row2--------------------------------------------*/    	

        switch (3){
            case
                $('body #WrapR_pab .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false:
                    scoreR3 = 2;
                    break;

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false:
                    scoreR3 = 3;
                    break;
            case 
                $('body #WrapR_pab .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true:
                    scoreR3 = 0;    
                    break;
        

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true:
                    scoreR3 = 1;
                    break;
        }
    	/*------------------------------------end row3--------------------------------------------*/

        switch (4){
            case
                $('body #WrapR_pab .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false:
                    scoreR4 = 2;
                    break;

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false:
                    scoreR4 = 3;
                    break;
            case 
                $('body #WrapR_pab .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true &&  
                $('body #WrapR_pab .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true:
                    scoreR4 = 0;    
                    break;
        

            case 
                $('body #WrapR_pab .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false &&  
                $('body #WrapR_pab .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true:
                    scoreR4 = 1;
                    break;
        }
    	/*------------------------------------end row4--------------------------------------------*/
    	e.preventDefault();//отмена перехода
    	Month--;

    	$('#WrapR_pab .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
        $('#WrapR_pab .month p').append('<br><sub>' + Year +'</sub>');
       	$('#WrapR_pab .wrapDay .collum').remove();

        reverseEachWorkDay();//печатаем раочие дни
        calculateMoney();//расчет оплаты заработной платы
    });//end click	

	// var	nowDate		=	new Date(),
 //        newYear     =   nowDate.getFullYear(),
 //        Year        =   newYear,
	// 	nowMonth	=	nowDate.getMonth();
	// for (var i = 0; i < nowMonth; i++) {$('#nextMonth').trigger('click'); console.log(Year + ' ' + newYear)}
});