$( document ).ready(function() {

	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function f(x) { return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x); }//узнаем кол-во дней в месяц не работает с высокостным годом
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function countMoney(dayWork){ return Math.floor(7000/dayWork)}
    function calculateMoney(){
        var workingDayR1 = $('#calendarMainWrap .row1 .black').length;
        var workingDayR2 = $('#calendarMainWrap .row2 .black').length;
        var workingDayR3 = $('#calendarMainWrap .row3 .black').length;
        var workingDayR4 = $('#calendarMainWrap .row4 .black').length;

        $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
        $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
        $('.payment').text('Оплата: ' + count + 'грн');

        $('#calendarMainWrap .row1 .dayGrid').click(function(){
            if ($(this).hasClass('black') || $(this).hasClass('addBlack') === true) { //проверям на рабочий день

                    $(this).removeClass('black addBlack'); //eсли рабочий то снять класс (черный)
                    count-= countMoney(workingDayR1); //отнять с оплаты цену за выход на работу

                    $('.workingDay').text('Количество смен по графику: ' + workingDayR1);  
                    $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + '</span>');

            }else{ //если класс не стоит (выходной) тогда добавить класс (вырабрать рабочую смену)

                $(this).addClass('addBlack');

                count+= countMoney(workingDayR1); // добавить к оплате цену за выход на работу

                $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
                $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + ' ' + '<i class="fa fa-arrow-up" aria-hidden="true"></i>' + '</span>');
            }

            if (count<7000) {

                $('.payment span').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
                $('.payment span').addClass('lostMoney');
            }

            if (count>7000) {
                $('.payment span').addClass('addMoney');

            }
        });// end click
    }//end function calculateMoney
    function reverseEachWorkDay(){
        for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
            $('.wrapDay').append(
            '<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
            };

            $($(".row1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($(".row2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($(".row3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($(".row4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                
                }});//end reverse.each
    }

    function cycleWorkDay() {

        $.each($('.row1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                }
        });//end R1

            $.each($('.row2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                }
        }); //end R2

        $.each($('.row3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                }
        }); //end R3

        $.each($('.row4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                }
        });//end R4 
    }//end cycleWorkDay
	
	/*------------------------------------установки календаря------------------------------------------------------*/
	var
		nameMonth	=	['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		nameDayW	=	['вс','пн','вт','ср','чт','пт','сб'],
		tempDay		=	new	Date(2018,0,1), //получаем  дату с которой ведем отсчет
		Month 		=	tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
		Year 		= 	tempDay.getFullYear(),// получаем год
		Day 		=	tempDay.getDate(), //получаем число
		heightGD	=	$('.grid_days').height(),
		widthWD		=	$('.grid_days').width(),
		daysInMonth	=	dInMonth(Month-1,Year),//Количество дней в месяц
		scoreR1		=	1,
		scoreR2		=	4,	
		scoreR3		=	3,	
		scoreR4		=	2,
        count       =   7000;

	$('.month p').append(nameMonth[Month-1]);//имя месяца

	for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
		$('.wrapDay').append(
			'<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div id="one" class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
	};//печатаем ячейки \день недели\число месяца\смены
	
	cycleWorkDay();//вызываем циклы расчета рабочих дней

    calculateMoney();//вызываем расчет зароботной платы

	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/
    $("#nextMonth").click(function(e){
    	
    	if (Month==12) {
    		Year++
    		Month = 0;
    	}//eсли наступил довый год то добавить год и перейти на январь

    	var preLastArr 				= 	$('body .row1 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement			=	preLastArr[preLastArr.length-2];//выберем предпоследний HTML элемент

		var preLastArr2 			= 	$('body .row2 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement2			=	preLastArr2[preLastArr2.length-2];//выберем предпоследний HTML элемент

		var preLastArr3 			= 	$('body .row3 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement3			=	preLastArr3[preLastArr3.length-2];//выберем предпоследний HTML элемент

		var preLastArr4 			= 	$('body .row4 .dayGrid'); //узнаем сколько элементов есть
		var preLastElement4			=	preLastArr4[preLastArr4.length-2];//выберем предпоследний HTML элемент

		/*------------------------------------условия для работы графика --------------------------------------------------------*/

    	if ($('body .collum:last-child .row1 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement).hasClass('black')=== false) {
    		scoreR1 = 2;
    	}
    	if ($('body .collum:last-child .row1 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement).hasClass('balck')=== false) {
    		scoreR1 = 3;
    	}
    	if ($('body .collum:last-child .row1 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement).hasClass('black')=== true) {
    		scoreR1 = 0;
    	}
    	if ($('body .collum:last-child .row1 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement).hasClass('black')=== true) {
    		scoreR1 = 1;
    	}

    	/*------------------------------------end row1--------------------------------------------*/


       	if ($('body .collum:last-child .row2 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement2).hasClass('black')=== false) {
    		scoreR2 = 2;
    	}
    	if ($('body .collum:last-child .row2 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement2).hasClass('balck')=== false) {
    		scoreR2 = 3;
    	}
    	if ($('body .collum:last-child .row2 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement2).hasClass('black')=== true) {
    		scoreR2 = 0;
    	}
    	if ($('body .collum:last-child .row2 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement2).hasClass('black')=== true) {
    		scoreR2 = 1;
    	}

    	/*------------------------------------end row2--------------------------------------------*/

	   	if ($('body .collum:last-child .row3 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement3).hasClass('black')=== false) {
    		scoreR3 = 2;
    	}
    	if ($('body .collum:last-child .row3 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement3).hasClass('balck')=== false) {
    		scoreR3 = 3;
    	}
    	if ($('body .collum:last-child .row3 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement3).hasClass('black')=== true) {
    		scoreR3 = 0;
    	}
    	if ($('body .collum:last-child .row3 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement3).hasClass('black')=== true) {
    		scoreR3 = 1;
    	}

    	/*------------------------------------end row3--------------------------------------------*/


      	if ($('body .collum:last-child .row4 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement4).hasClass('black')=== false) {
    		scoreR4 = 2;
    	}
    	if ($('body .collum:last-child .row4 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement4).hasClass('balck')=== false) {
    		scoreR4 = 3;
    	}
    	if ($('body .collum:last-child .row4 .dayGrid').hasClass('black')=== true	&&	
    		$(preLastElement4).hasClass('black')=== true) {
    		scoreR4 = 0;
    	}
    	if ($('body .collum:last-child .row4 .dayGrid').hasClass('black')=== false	&&	
    		$(preLastElement4).hasClass('black')=== true) {
    		scoreR4 = 1;
    	}

    	/*------------------------------------end row4--------------------------------------------*/


    	e.preventDefault();//отмеа перехода
    	Month++; // переход на следующий месяц
    	$('.month p').text(nameMonth[Month-1]);//Печать названия нового месяца
       	$('.wrapDay .collum').remove();//удалить старый месяц

       	for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
			$('.wrapDay').append(
			'<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
		};//печатаем новый месяц
		//end for

		cycleWorkDay();//циклы для расписания наступившего нового месяца
        calculateMoney();//Рабоота калькулятора оплаты труда
    });//end click	
	
    	
    $("#backMonth").click(function(e){
    	if (Month==1) {
    		Year--
    		Month = 13;
    	}
    	if ($('body .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false) {

    		scoreR1 = 2;
   		}

    	if ($('body .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false) {

    		scoreR1 = 3;
    	}

    	if ($('body .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true) {

    		scoreR1 = 0;
    	}

    	if ($('body .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true) {

    		scoreR1 = 1	;
    	}


    	/*------------------------------------end row1--------------------------------------------*/


    	if ($('body .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false) {

    		scoreR2 = 2;
   		}

    	if ($('body .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false) {

    		scoreR2 = 3;
    	}

    	if ($('body .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true) {

    		scoreR2 = 0;
    	}

    	if ($('body .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true) {

    		scoreR2 = 1	;
    	}

		/*------------------------------------end row2--------------------------------------------*/    	


    	if ($('body .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false) {

    		scoreR3 = 2;
   		}

    	if ($('body .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false) {

    		scoreR3 = 3;
    	}

    	if ($('body .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true) {

    		scoreR3 = 0;
    	}

    	if ($('body .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true) {

    		scoreR3 = 1	;
    	}

    	/*------------------------------------end row3--------------------------------------------*/


    	if ($('body .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false) {

    		scoreR4 = 2;
   		}

    	if ($('body .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false) {

    		scoreR4 = 3;
    	}

    	if ($('body .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true	&&	
    		$('body .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true) {

    		scoreR4 = 0;
    	}

    	if ($('body .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false	&&	
    		$('body .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true) {

    		scoreR4 = 1	;
    	}
    	/*------------------------------------end row4--------------------------------------------*/
    	e.preventDefault();//отмена перехода
    	Month--;

    	$('.month p').text(nameMonth[Month-1]);//Печать названия нового месяца
       	$('.wrapDay .collum').remove();

        reverseEachWorkDay();//печатаем раочие дни
        calculateMoney();//расчет оплаты заработной платы
    });//end click	

	// var	nowDate		=	new Date(),
 //        newYear     =   nowDate.getFullYear(),
 //        Year        =   newYear,
	// 	nowMonth	=	nowDate.getMonth();
	// for (var i = 0; i < nowMonth; i++) {$('#nextMonth').trigger('click'); console.log(Year + ' ' + newYear)}
	
	// widthWD		=	(Math.floor((widthWD / daysInMonth)))-1;/*ширину сетики делим на кол-во дней месяца	что-бы заполнить*/
	// $('.collum').height(heightGD).width(widthWD);
});