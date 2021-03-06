<?php $first_name = 'Костя'; ?>
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
          <div class="col-lg-12">
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <div class="col-lg-2"></div>
              <div class="col-lg-10">
                <p><?php echo "{$first_name} {$last_name}"; ?></p>
                <p><?php echo "{$email}"; ?></p>
                <p><?php echo "{$mobil_number}"; ?></p>
              </div>
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
