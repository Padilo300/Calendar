<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#0284A8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/reporter.png" type="image/x-icon">
    <title>Календарь</title>
    <link rel="stylesheet" href="css/libs.min.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
           <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav myNav animated slideInLeft">
                  <li class="active"><a href="#">Репортер</a></li>
                  <li><a href="#">Coast</a></li>
                  <li><a href="#">Artist</a></li>
                  <li class="subbuttons"><a href="#">Информация</a></li>
                  <li class="subbuttons"><a href="#">База сотрудников</a></li>
                  <li class="subbuttons"><a href="#">Для новичков</a></li>
                  <li class="subbuttons"><a href="#">Новости<sup style='color: green; font-weight: bold;'>+3</sup></a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Мой аккаунт <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="userPage.html">Моя анкета</a></li>
                      <li><a href="#">Сообщения</a></li>
                      <li><a href="#">Настройки</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Выйти</a></li>
                    </ul>
                  </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->  
        </nav> <!--end nav-->
        </div><!--end row-->
        <div class="row">
          <style>
          body{background: #000;}
             #abc {
  padding: 40px;
  font-size: 75px;
  font-family: 'Monoton', cursive;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  color: red;
}
div p { margin:0; }
#error:hover { text-shadow: 0 0 200px #ffffff,0 0 80px #008000,0 0 6px #0000ff; }
#code:hover { text-shadow: 0 0 100px red,0 0 40px FireBrick,0 0 8px DarkRed; }
#error {
  color: #fff;
  text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
}
#error span {
  animation: upper 11s linear infinite;
}
#code span:nth-of-type(2) {
  animation: lower 10s linear infinite;
}
#code span:nth-of-type(1) {
  text-shadow: none;
  opacity:.4;
}
@keyframes upper {
  0%,19.999%,22%,62.999%,64%, 64.999%,70%,100% {
    opacity:.99; text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
  }
  20%,21.999%,63%,63.999%,65%,69.999% {
    opacity:0.4; text-shadow: none; 
  }
}
@keyframes lower {
  0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% { 
    opacity:0.4; text-shadow: none; 
  }
}
          </style>
          <div class="col-lg-12">
            <link href='https://fonts.googleapis.com/css?family=Monoton' rel='stylesheet' type='text/css'>
              <div id="abc">
                <p id="error">E<span>r</span>ror</p>
                <p id="code">4<span>0</span><span>4</span></p>
              </div>
          </div>
        </div>
      </div><!--end container-fluid-->
    </div><!--end wrap-->
    <script src="js/jquery-1.11.0.min.js" ></script>
    <script src="js/bootstrap.min.js" ></script>
    <script src='js/libs.min.js' ></script>        
    <!-- <script src="libs/calendar.js" ></script> -->
  </body>
</html>
