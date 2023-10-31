<html>



<!-- Font Awesome -->





<head>

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!------------------------ Data table css For pdf,export-------------------------------->



    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css" >

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.0.1/css/buttons.dataTables.min.css" >

    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" >

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
     



    <title>MARHABA Tour Transport And Logistic Services</title>

    <?php

        $current_url = url()->full();

        $contains = Str::contains($current_url, ['edit','pending','active','update','shop_products','restaurant_product','view_user','unactive_drivers','view_bus_roots']);

        if($contains)$path = "../img/favicon-32x32.png";else $path = "img/favicon-32x32.png";

    ?>

    <link rel="icon" href="{{$path}}" type="image/gif" sizes="16x16">

    <!-- Tell the browser to be responsive to screen width -->

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- Bootstrap 3.3.7 -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">

    <!-- Font Awesome -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/bower_components/font-awesome/css/font-awesome.min.css') }}"

        href="">

    <!-- Ionicons -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/bower_components/Ionicons/css/ionicons.min.css') }}" href="">

    <!-- Theme style -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/dist/css/AdminLTE.min.css') }}" href="">

    <!-- AdminLTE Skins. Choose a skin from the css/skins

             folder instead of downloading all of them to reduce the load. -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/dist/css/skins/_all-skins.min.css') }}" href="">

    <!-- Morris chart -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/bower_components/morris.js/morris.css') }}" href="">

    <!-- jvectormap -->

    <link rel="stylesheet" href="{{ URL::asset('admin2/bower_components/jvectormap/jquery-jvectormap.css') }}" href="">

    <!-- Date Picker -->

    <link rel="stylesheet"

        href="{{ URL::asset('admin2/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css') }}"

        href="">

    <!-- Daterange picker -->

    <link rel="stylesheet"

        href="{{ URL::asset('admin2/bower_components/bootstrap-daterangepicker/daterangepicker.css') }}" href="">

    <!-- bootstrap wysihtml5 - text editor -->

    <link rel="stylesheet" href="admin2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->

    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>

        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>

        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

        <![endif]-->







    <!-- Google Font -->

    <link rel="stylesheet"

        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <link rel="stylesheet" type="text/css" href="{{asset('vendor/css/jquery.ccpicker.css')}}">

    <style>

        body{

            background: linear-gradient(90deg, #2C2F88 0%, #258A7E 100%);

        }

        section.content-header {

            color: #FFF !important;

        }

        .content-header>.breadcrumb>li>a {

            color: #FFFFFF !important;

        }

        .breadcrumb>.active {

            color: #FFFFFF;

        }



        .small-box {

            color: #fff !important;

        }

        .small-box {

            background-color: rgba(255, 255, 255, 0.15) !important;

        }

        .skin-blue .main-header li.user-header {

            background-color: rgba(0, 0, 0, 0.5);

        }

        .navbar-nav>.user-menu>.dropdown-menu>.user-footer {

            background-color: rgba(0, 0, 0, 0.5);

            padding: 10px;

        }

        .navbar-custom-menu>.navbar-nav>li>.dropdown-menu {

            background: transparent;

        }

        .dropdown-menu {

            box-shadow: none;

            border-color: rgba(0, 0, 0, 0.5);

        }

        .skin-blue .wrapper,

        .skin-blue .main-sidebar,

        .skin-blue .left-side {

            background-color: rgba(0, 0, 0, 0.2) !important;

        }



        .skin-blue .sidebar-menu>li.header {

            color: #fff !important;

            background: transparent !important;

            font-size: 13px;

            letter-spacing: 2px;

            padding: 5px 10px 5px 25px;

        }



        .skin-blue .sidebar-menu>li:hover>a,

        .skin-blue .sidebar-menu>li.active>a,

        .skin-blue .sidebar-menu>li.menu-open>a {

            color: #fff;

            background: rgba(255, 255, 255, 0.15) !important;

        }



        .skin-blue .main-header .navbar {

            background-color: rgba(0, 0, 0, 0.2) !important;

        }



        .skin-blue .main-header .logo {

            background-color: rgba(0, 0, 0, 0.2) !important;

        }



        .box-header {

            color: #fff;

            /*background: #002D62;*/

        }



        .box-title {

            text-transform: uppercase;

            letter-spacing: 1.5px;

            font-weight: 600;

        }

        .content-wrapper {

            background-color: transparent !important;

        }



        .content button.btn.btn-primary {

            background: transparent;

            color: #002D62;

            border: 1px solid #002D62;

            font-size: 15px;

            font-weight: 600;

            padding: 5px 20px;

            margin-bottom: 15px;

        }



        .content button.btn.btn-primary i {

            margin-right: 5px;

        }



        .box.box-primary {

            border-top-color: #002D62;

        }



        footer.main-footer a {

            color: #002D62;

        }



        .text-success {

            color: #ffffff;

        }



        table#example {

            margin: 15px auto;

            display: inline-block;

            width: 100%;

            overflow: auto;

            max-height: 500px;

        }



        table#example th {

            font-size: 16px;

        }



        table#example td {

            font-size: 14px;

        }



        table#example thead {

            position: sticky;

            top: 0;

            z-index: 9;

            background: #fff;

        }



        table#example td img {

            border-radius: 50%;

            width: 60px !important;

            height: 60px !important;

        }



        .skin-blue .main-header .navbar .sidebar-toggle:hover {

            background-color: rgba(255, 255, 255, 0.15);

        }





        .small-box .icon {

            -webkit-transition: all .3s linear;

            -o-transition: all .3s linear;

            transition: all .3s linear;

            position: absolute;

            top: 7px;

            right: 10px;

            z-index: 0;

            font-size: 90px;

            color: rgba(0,0,0,0.15);



    </style>

<meta name="csrf-token" content="{{ csrf_token() }}">

<style>

    table{

        display: block;

        overflow: scroll;

    }

    .verify_modal_popup .modal-dialog {

        display: flex;

        justify-content: center;

        align-items: center;

        height: 100%;

        margin: auto;

    }

    .verify_modal_popup .modal-content {

        min-height: 180px;

        width: 300px;

        display: block;

        justify-content: center;

        align-items: center;

        flex-flow: column;

        font-size: 16px;

        font-weight: 600;

        color: #3c8dbc;

        border: 6px double #3c8dbc;

        background: #e8ece8;

        box-shadow: inset 0 0 10px 0 rgb(0 0 0 / 50%);

        padding: 15px;

    }

    .verify_ok_btn, .verify_ok_btn1 {

        margin: 25px auto;

        background: #3c8dbc;

        color: #fff;

        font-size: 20px;

        padding: 4px 35px;

        border-radius: 0;

    }

    .verify_ok_btn1{

        float: right;

    }

    .verify_popup,.btn_action_s {

        background: #fff;

        color: #3c8dbc !important;

        border: 1px solid #3c8dbc;

        border-radius: 25px;

        /* padding: 2px; */

        width: 100%;

        display: inline-block;

        margin: 7px auto;

        text-align: center;

        font-size: 12px !important;

    }

    .btn_action_d{

        background: #fff;

        color: #ff0000 !important;

        border: 1px solid #ff0000;

        border-radius: 25px;

        /* padding: 2px; */

        width: 100%;

        display: inline-block;

        margin: 7px auto;

        text-align: center;

        font-size: 12px !important;

    }

    .email {

        /* Adjust the maximum width to your preference */

        text-wrap:wrap;

        width: 150px;

        /* Add the following to allow word wrapping */

        word-wrap: break-word;

    }



</style>



</head>



<body class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">



        <header class="main-header">

            <!-- Logo -->

            <a href="#" class="logo">

                <!-- mini logo for sidebar mini 50x50 pixels -->

                <span class="logo-mini"><b>M</b>ARHABA</span>

                <!-- logo for regular state and mobile devices -->

                <span class="logo-lg"><b>MARHABA</b>-Admin</span>

            </a>

            <!-- Header Navbar: style can be found in header.less -->

            <nav class="navbar navbar-static-top">

                <!-- Sidebar toggle button-->

                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">

                    <span class="sr-only">Toggle navigation</span>

                </a>



                <div class="navbar-custom-menu">

                    <ul class="nav navbar-nav">

                        <!-- Messages: style can be found in dropdown.less-->



                        <!-- User Account: style can be found in dropdown.less -->

                        <li class="dropdown user user-menu">

                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">

                                <img src="{{ url('img/1-01.png') }}" class="user-image"

                                    alt="User Image">

                                <span class="hidden-xs">MARHABA Tour Transport And Logistic Services</span>

                            </a>

                            <ul class="dropdown-menu">

                                <!-- User image -->

                                <li class="user-header">

                                    <img src="{{ url('img/1-01.png') }}" 

                                        alt="User Image">



                                    <p>

                                        {{ Session::get('email') }}



                                    </p>

                                </li>

                                <!-- Menu Body -->



                                <!-- Menu Footer-->

                                <li class="user-footer">



                                    <div class="pull-right">

                                        <a href="{{ url('sign_out') }}" class="btn btn-default btn-flat">Sign out</a>

                                    </div>

                                </li>

                            </ul>

                        </li>

                        <!-- Control Sidebar Toggle Button -->

                        {{-- <li>

                            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>

                        </li> --}}

                    </ul>

                </div>

            </nav>

        </header>

        <!-- Left side column. contains the logo and sidebar -->

        <aside class="main-sidebar">

            <!-- sidebar: style can be found in sidebar.less -->

            <section class="sidebar">

                <!-- Sidebar user panel -->

                <div class="user-panel">

                    <div class="pull-left image">

                        <img src="{{ url('img/1-01.png') }}" class="img-circle"

                            alt="User Image">

                    </div>

                    <div class="pull-left info">

                   <p class="email">{{ Session::get('email') }}</p>

                        <!-- <p>{{ Session::get('role') }}</p> -->

                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>

                    </div>

                </div>



       <?php



            $user_id = Session::get('user_id');



            $users=DB::table('admins')->where('id',$user_id)->first();



            $checked_array = explode(',',$users->role);



          //dd($checked_array);

        ?>



                <!-- search form -->



                <!-- /.search form -->

                <!-- sidebar menu: : style can be found in sidebar.less -->

                <ul class="sidebar-menu">



                    <li class="header">MAIN NAVIGATION</li>



                    <li class="treeview">

                        <a href="{{ url('/dashboard') }}">

                            <i class="fa fa-user-plus"></i> <span>Dashboard</span>



                        </a>



                    </li>



                    <!--<?php if(in_array("6", $checked_array)) {?>-->

                    <!--<li class="treeview">-->

                    <!--    <a href="{{ url('/add_user') }}">-->

                    <!--        <i class="fa fa-user-plus"></i> <span>Add Customer</span>-->



                    <!--    </a>-->



                    <!--</li>-->

                     <?php }if(in_array("6", $checked_array) || in_array("7", $checked_array) || in_array("8", $checked_array) || in_array("9", $checked_array) || in_array("10", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_users') }}">

                            <!--<i class="fa fa-th-list"></i> <span>Passengers List</span>-->

                             <i class="fa fa-th-list"></i> <span>Customers List</span>



                        </a>



                    </li>

                    <?php }if(in_array("11", $checked_array) || in_array("12", $checked_array) || in_array("13", $checked_array) || in_array("14", $checked_array) || in_array("15", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_pusers') }}">

                            <i class="fa fa-list"></i> <span>Drivers List</span>



                        </a>



                    </li>









                    <?php }if(in_array("17", $checked_array) || in_array("18", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_ride') }}">

                            <i class="fa fa-car"></i> <span>All Rides List</span>



                        </a>



                    </li>



                     <li>

                    <?php }if(in_array("17", $checked_array) || in_array("18", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_parcel') }}">

                            <i class="fa fa-car"></i> <span>All Parcel List</span>



                        </a>



                    </li>



                     <li>



                    <?php }if(in_array("30", $checked_array) || in_array("31", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_bus') }}">

                            <i class="fa fa-bus"></i> <span>Bus List</span>

                        </a>



                    </li>


                    <?php }if(in_array("30", $checked_array) || in_array("31", $checked_array)) {?>

                        <li class="treeview">

                            <a href="{{ url('/all_bus_booking_list') }}">

                                <i class="fa fa-bus"></i> <span>All Bus Booking List</span>

                            </a>



                        </li>




                      <li>

                    <?php }if(in_array("31", $checked_array) || in_array("32", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_restaurant') }}">

                        <i class="fa fa-cutlery" aria-hidden="true"></i> <span>Restaurant List</span>



                        </a>



                 </li>



                   <li>

                    <?php }if(in_array("31", $checked_array) || in_array("32", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_shop') }}">

                        <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Shop List</span>



                        </a>



                 </li>



                 <li>

                    <?php }if(in_array("31", $checked_array) || in_array("32", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_restaurant_order') }}">

                        <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Restaurant Order List</span>



                        </a>



                 </li>



                 <li>

                    <?php }if(in_array("31", $checked_array) || in_array("32", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/all_shop_order') }}">

                        <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Shop Order List</span>

                        </a>
                 </li>


                <li>
                 <?php }if(in_array("31", $checked_array) || in_array("30", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ route('addCategory') }}">

                            <i class="fa fa-list-alt" aria-hidden="true"></i><span>Add Product Categories</span>

                        </a>
                    </li>

            
            <li>
                 <?php }if(in_array("31", $checked_array) || in_array("30", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/insert_city') }}">

                            <i class="fa fa-list-alt" aria-hidden="true"></i><span>Add City</span>

                        </a>

                    </li>

                    <!--  <li class="treeview">

                <a href="{{ url('/shared_rides') }}">

                    <i class="fa fa-dashboard"></i> <span>All Shared Rides</span>



                </a>



            </li> -->
                    <?php }if(in_array("19", $checked_array) || in_array("20", $checked_array) || in_array("21", $checked_array) || in_array("22", $checked_array)) {?>

                   {{--  <li class="treeview">

                        <a href="{{ url('/unactive_drivers') }}">

                            <i class="fa fa-clock-o"></i> <span>New Driver Requests</span>



                        </a>



                    </li> --}}

                    <?php }if(in_array("23", $checked_array) || in_array("24", $checked_array) || in_array("25", $checked_array) || in_array("26", $checked_array)) {?>



                    <li class="treeview">

                        <a href="{{ url('/driver_payment') }}">

                            <i class="fa fa-credit-card-alt"></i> <span> Driver Payment Details</span>



                        </a>



                    </li>

                    <?php }if(in_array("23", $checked_array) || in_array("24", $checked_array) || in_array("25", $checked_array) || in_array("26", $checked_array)) {?>



                        <li class="treeview">

                            <a href="{{ url('/merchant_payment') }}">

                                <i class="fa fa-credit-card-alt"></i> <span> Merchant Payment Details</span>



                            </a>



                        </li>



                    <?php }if(in_array("27", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/set_price') }}">

                            <i class="fa fa-money"></i> <span>Set Pricing</span>



                        </a>



                    </li>

                    <?php }if(in_array("28", $checked_array)) {?>

                    <li class="treeview">

                        <a href="{{ url('/communication') }}">

                            <i class="fa fa-headphones"></i> <span>Communication</span>



                        </a>



                    </li>

                    <?php }if(in_array("29", $checked_array) || in_array("30", $checked_array)) {?>



                    <li class="treeview">



                        <a href="{{ url('/ride_report') }}">

                            <i class="fa fa-files-o"></i> <span>Reports</span>



                        </a>



                    </li>


                    <?php }if(in_array("29", $checked_array) || in_array("30", $checked_array)) {?>



                        <li class="treeview">



                            <a href="{{ url('/gas_cylinder_enquiry') }}">

                                <i class="fa fa-files-o"></i> <span>Gas Cylinder Reports</span>



                            </a>



                        </li>


                    

                    <?php }if(in_array("2", $checked_array)) {?>

                    <li class="treeview">



                        <a href="{{ url('/role_access') }}">

                            <i class="fa fa-files-o"></i> <span>Role and Access</span>



                        </a>



                    </li>



                    <?php }?>



                    <li class="treeview">



                        <a href="{{ url('/application_setting') }}">

                        <i class="fa fa-cog" aria-hidden="true"></i><span>Application Settings



                            </span>



                        </a>



                    </li>

                </ul>

            </section>

            <!-- /.sidebar -->

        </aside>



        <!-- Content Wrapper. Contains page content -->

        <div class="content-wrapper">

            <!-- Content Header (Page header) -->

            <section class="content-header">

                <h1>

                    <?php echo $title;?>

                </h1>

                <ol class="breadcrumb">

                    <li><a href="{{ url('/dashboard') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>

                    <li class="active">

                        <?php echo $title;?>

                    </li>

                </ol>

            </section>



            <!-- Main content -->

            <section class="content">

                <!-- Small boxes (Stat box) -->



                <!-- Main row -->

                <div class="row">

                    <!-- Left col -->



                    <!-- /.Left col -->

                    <!-- right col (We are only adding the ID to make the widgets sortable)-->



                    <!-- right col -->

                    @yield('middle')

                </div>

                <!-- /.row (main row) -->







            </section>

            <!-- /.content -->



        </div>

        <!-- /.content-wrapper -->

        <footer class="main-footer">

            <div class="pull-right hidden-xs">

                <b>Version</b> 1.0

            </div>

            <strong>Copyright &copy; 2023 <a href="https://thernd.tech/admin/dashboard">MARHABA Tour Transport And Logistic Services</a>.</strong> All rights

            reserved.

        </footer>



        <!-- Control Sidebar -->

        <aside class="control-sidebar control-sidebar-dark">

            <!-- Create the tabs -->

            <ul class="nav nav-tabs nav-justified control-sidebar-tabs">

                <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>

                <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>

            </ul>

            <!-- Tab panes -->

            <div class="tab-content">

                <!-- Home tab content -->

                <div class="tab-pane" id="control-sidebar-home-tab">

                    <h3 class="control-sidebar-heading">Recent Activity</h3>

                    <ul class="control-sidebar-menu">

                        <li>

                            <a href="javascript:void(0)">

                                <i class="menu-icon fa fa-birthday-cake bg-red"></i>



                                <div class="menu-info">

                                    <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>



                                    <p>Will be 23 on April 24th</p>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <i class="menu-icon fa fa-user bg-yellow"></i>



                                <div class="menu-info">

                                    <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>



                                    <p>New phone +1(800)555-1234</p>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>



                                <div class="menu-info">

                                    <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>



                                    <p>nora@example.com</p>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <i class="menu-icon fa fa-file-code-o bg-green"></i>



                                <div class="menu-info">

                                    <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>



                                    <p>Execution time 5 seconds</p>

                                </div>

                            </a>

                        </li>

                    </ul>

                    <!-- /.control-sidebar-menu -->



                    <h3 class="control-sidebar-heading">Tasks Progress</h3>

                    <ul class="control-sidebar-menu">

                        <li>

                            <a href="javascript:void(0)">

                                <h4 class="control-sidebar-subheading">

                                    Custom Template Design

                                    <span class="label label-danger pull-right">70%</span>

                                </h4>



                                <div class="progress progress-xxs">

                                    <div class="progress-bar progress-bar-danger" style="width: 70%"></div>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <h4 class="control-sidebar-subheading">

                                    Update Resume

                                    <span class="label label-success pull-right">95%</span>

                                </h4>



                                <div class="progress progress-xxs">

                                    <div class="progress-bar progress-bar-success" style="width: 95%"></div>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <h4 class="control-sidebar-subheading">

                                    Laravel Integration

                                    <span class="label label-warning pull-right">50%</span>

                                </h4>



                                <div class="progress progress-xxs">

                                    <div class="progress-bar progress-bar-warning" style="width: 50%"></div>

                                </div>

                            </a>

                        </li>

                        <li>

                            <a href="javascript:void(0)">

                                <h4 class="control-sidebar-subheading">

                                    Back End Framework

                                    <span class="label label-primary pull-right">68%</span>

                                </h4>



                                <div class="progress progress-xxs">

                                    <div class="progress-bar progress-bar-primary" style="width: 68%"></div>

                                </div>

                            </a>

                        </li>

                    </ul>

                    <!-- /.control-sidebar-menu -->



                </div>

                <!-- /.tab-pane -->

                <!-- Stats tab content -->

                <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>

                <!-- /.tab-pane -->

                <!-- Settings tab content -->

                <div class="tab-pane" id="control-sidebar-settings-tab">

                    <form method="post">

                        <h3 class="control-sidebar-heading">General Settings</h3>



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Report panel usage

                                <input type="checkbox" class="pull-right" checked>

                            </label>



                            <p>

                                Some information about this general settings option

                            </p>

                        </div>

                        <!-- /.form-group -->



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Allow mail redirect

                                <input type="checkbox" class="pull-right" checked>

                            </label>



                            <p>

                                Other sets of options are available

                            </p>

                        </div>

                        <!-- /.form-group -->



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Expose author name in posts

                                <input type="checkbox" class="pull-right" checked>

                            </label>



                            <p>

                                Allow the user to show his name in blog posts

                            </p>

                        </div>

                        <!-- /.form-group -->



                        <h3 class="control-sidebar-heading">Chat Settings</h3>



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Show me as online

                                <input type="checkbox" class="pull-right" checked>

                            </label>

                        </div>

                        <!-- /.form-group -->



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Turn off notifications

                                <input type="checkbox" class="pull-right">

                            </label>

                        </div>

                        <!-- /.form-group -->



                        <div class="form-group">

                            <label class="control-sidebar-subheading">

                                Delete chat history

                                <a href="javascript:void(0)" class="text-red pull-right"><i

                                        class="fa fa-trash-o"></i></a>

                            </label>

                        </div>

                        <!-- /.form-group -->

                    </form>

                </div>

                <!-- /.tab-pane -->

            </div>

        </aside>

        <!-- /.control-sidebar -->

        <!-- Add the sidebar's background. This div must be placed

     immediately after the control sidebar -->

        <div class="control-sidebar-bg"></div>

    </div>

    <!-- ./wrapper -->







    <!-- jQuery 3 -->

    <script src="{{  URL::asset('admin2/bower_components/jquery/dist/jquery.min.js')  }}" src=""></script>

    <!-- jQuery UI 1.11.4 -->

    <script src="{{  URL::asset('admin2/bower_components/jquery-ui/jquery-ui.min.js')  }}" src=""></script>

    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->

    <script>

        $.widget.bridge('uibutton', $.ui.button);

    </script>

    <!-- Bootstrap 3.3.7 -->

    <script src="{{  URL::asset('admin2/bower_components/bootstrap/dist/js/bootstrap.min.js')  }}" src=""></script>

    <!-- Morris.js charts -->

    <script src="{{  URL::asset('admin2/bower_components/raphael/raphael.min.js')  }}" src=""></script>

    <script src="{{  URL::asset('admin2/bower_components/morris.js/morris.min.js')  }}" src=""></script>

    <!-- Sparkline -->

    <script src="{{  URL::asset('admin2/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js')  }}" src="">

    </script>

    <!-- jvectormap -->

    <script src="{{  URL::asset('admin2/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')  }}" src=""></script>

    <script src="{{  URL::asset('admin2/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')  }}" src=""></script>

    <!-- jQuery Knob Chart -->

    <script src="{{  URL::asset('admin2/bower_components/jquery-knob/dist/jquery.knob.min.js')  }}" src=""></script>

    <!-- daterangepicker -->

    <script src="{{  URL::asset('admin2/bower_components/moment/min/moment.min.js')  }}" src=""></script>

    <script src="{{  URL::asset('admin2/bower_components/bootstrap-daterangepicker/daterangepicker.js')  }}" src="">

    </script>

    <!-- datepicker -->

    <script src="{{  URL::asset('admin2/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')  }}"

        src=""></script>

    <!-- Bootstrap WYSIHTML5 -->

    <script src="{{  URL::asset('admin2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js')  }}" src="">

    </script>

    <!-- Slimscroll -->

    <script src="{{  URL::asset('admin2/bower_components/jquery-slimscroll/jquery.slimscroll.min.js')  }}" src="">

    </script>

    <!-- FastClick -->

    <script src="{{  URL::asset('admin2/bower_components/fastclick/lib/fastclick.js')  }}" src=""></script>

    <!-- AdminLTE App -->

    <script src="{{  URL::asset('admin2/dist/js/adminlte.min.js')  }}" src=""></script>

    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->

    <script src="{{  URL::asset('admin2/dist/js/pages/dashboard.js')  }}" src="s"></script>

    <!-- AdminLTE for demo purposes -->

    <script src="{{  URL::asset('admin2/dist/js/demo.js')  }}" src=""></script>



    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>



    <script type="text/javascript" src="{{asset('vendor/js/jquery.ccpicker.js')}}"></script>

    <script type="text/javascript" src="{{asset('resources/assets/js/parsley.min.js')}}"></script>



    <!------------------------ Data table js For pdf,export-------------------------------->

    <script src="https://cdn.datatables.net/select/1.3.0/js/dataTables.select.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>

    <script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.flash.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js"></script>

    <script>

        $(document).ready(function(){

        $.get('{{ url("count_all_users") }}',function(response){



            $('#all_users').append(response);

        });



        $.get('{{ url("count_active_users") }}',function(response){



            $('#active_users').append(response);

        });



        $.get('{{ url("count_unactive_users") }}',function(response){



            $('#unactive_users').append(response);

        });



         $.get('{{ url("count_pending_users") }}',function(response){



            $('#pending_users').append(response);

        });



        $.get('{{ url("company_earning") }}',function(response){



            $('#company_earning').append(response);

        });





        $.get('{{ url("count_all_drivers") }}',function(response){



            $('#all_drivers').append(response);

        });



         $.get('{{ url("count_active_drivers") }}',function(response){



            $('#active_drivers').append(response);

        });



         $.get('{{ url("count_unactive_drivers") }}',function(response){



            $('#unactive_drivers').append(response);

        });



          $.get('{{ url("count_pending_drivers") }}',function(response){



            $('#pending_drivers').append(response);

        });





        $.get('{{ url("count_all_rides") }}',function(response){



            $('#all_rides').append(response);

        });



        $.get('{{ url("count_ongoing_rides") }}',function(response){



            $('#ongoing_rides').append(response);

        });



         $.get('{{ url("count_completed_rides") }}',function(response){



            $('#completed_rides').append(response);

        });



        $.get('{{ url("count_cancelled_rides") }}',function(response){



            $('#cancelled_rides').append(response);

        });



        $.get('{{ url("count_all_parcel") }}',function(response){



            $('#all_parcel').append(response);

        });

        $.get('{{ url("count_ongoing_parcel") }}',function(response){



            $('#ongoing_parcel').append(response);

        });

        $.get('{{ url("count_completed_parcel") }}',function(response){



            $('#completed_parcel').append(response);

        });

        $.get('{{ url("count_cancelled_parcel") }}',function(response){



            $('#cancelled_parcel').append(response);

        });

        //  $.get('{{ url("count_all_request_rides") }}',function(response){



        //     $('#all_request_rides').append(response);

        // });



        //  $.get('{{ url("count_all_booking_rides") }}',function(response){



        //     $('#all_booking_rides').append(response);

        // });









        /* jQuery("#phoneField1").CcPicker();

                $("#phoneField1").CcPicker("setCountryByCode","us");

                $("#phoneField1").CcPicker();

                $("#phoneField1").on("countrySelect", function(e, i){



                                                    }); */



    });

    </script>

    <script type="text/javascript">

        //  $(document).ready(function() {

            //     $('#example').DataTable( {

            //         dom: 'Bfrtip',

            //         buttons: [

            //                 {

            //                     extend: 'pdfHtml5',

            //                     orientation: 'landscape',

            //                     pageSize: 'LEGAL',

            //                     columns: ':visible',

            //                     exportOptions: {

            //                         columns: [0,1]

            //                     },



            //                 },

            //                 {

            //                     extend: 'excel',

            //                     orientation: 'landscape',

            //                     pageSize: 'LEGAL',

            //                     columns: ':visible',

            //                      exportOptions: {

            //                         columns: [0,1]

            //                     },

            //                  },

            //                 {

            //                     extend: 'print',

            //                     orientation: 'landscape',

            //                     pageSize: 'LEGAL',

            //                     columns: ':visible',

            //                      exportOptions: {

            //                         columns: [0,1]

            //                     },

            //                  },



            //             ],

            //     });

            // });



//              $(document).ready( function () {

//     $('#example').DataTable();

// } );

</script>

<script type="text/javascript">

$(document).ready(function () {

   var table =  $('#example').DataTable({

    //columnDefs: [{ width: 50, targets: 0 }],

       dom: 'Bfrtip',

        buttons: [{

            extend: "collection",

              text: "Actions",

            /* extend: 'copyHtml5', */

                split: ['copyHtml5', 'excelHtml5', 'csvHtml5','pdfHtml5'],

                orientation: 'landscape',

                pageSize: 'LEGAL',

                

        }





            /* {

                extend: 'pdfHtml5',

                orientation: 'landscape',

                pageSize: 'LEGAL'



            } */



        ],



        //paging: true, // Enable pagination

        // lengthMenu: [10, 25, 50, 100], // Customize the number of records per page

        // pageLength: 10 // Set the initial number of records per page



    });





    table

    .order( [ 0, 'asc' ] )

    .draw();



});

</script>

<!-- ================== Js code For driver view preview image =========================== -->

<script>

    $(document).ready(function() {

        $('.image-popup').magnificPopup({

            type: 'image'

        });

    });

</script>

<script>

    // form validation

    $(document).ready(function() {

        $("#driverForm").validate({

            rules: {

                name: {

                    required: true,

                    minlength: 3

                },

                father_name: {

                    required: true,

                    minlength: 3

                },

                email: {

                    required: true,

                    email: true

                },

                password: {

                    required: true,

                    minlength: 6

                },

                mobile_number: {

                    required: true,

                    digits: true

                },

                city: "required",

                car_model: "required",

                car_number: "required",

                car_color: "required",

                license_number: "required",

                address: "required",

                profile_pic: "required",

                document_1: "required",

                document_2: "required",

                license_pic: "required",

                nic_1: "required",

                nic_2: "required",

                status: "required",

                verify_user: "required"

            },

            messages: {

                name: {

                    required: "Please enter your name",

                    minlength: "Name must be at least 3 characters long"

                },

                father_name: {

                    required: "Please enter your father's name",

                    minlength: "Father's name must be at least 3 characters long"

                },

                email: {

                    required: "Please enter your email address",

                    email: "Please enter a valid email address"

                },

                password: {

                    required: "Please enter a password",

                    minlength: "Password must be at least 6 characters long"

                },

                mobile_number: {

                    required: "Please enter your mobile number",

                    digits: "Mobile number must contain only digits"

                },

                city: "Please enter your city",

                car_model: "Please enter your car model",

                car_number: "Please enter your car number",

                car_color: "Please enter your car color",

                license_number: "Please enter your license number",

                address: "Please enter your complete address",

                profile_pic: "Please upload your profile picture",

                document_1: "Please upload your car document front picture",

                document_2: "Please upload your car document back picture",

                license_pic: "Please upload your license card picture",

                nic_1: "Please upload your NIC front picture",

                nic_2: "Please upload your NIC back picture",

                status: "Please select a status",

                verify_user: "Please select a verification status"

            }

            submitHandler: function(form) {

                    // Handle the form submission programmatically

                    // Perform AJAX submission or any other action here

                    form.submit();

                }

        });

        $("#submitBtn").click(function() {

                $("#driverForm").submit();

            });

    });

</script>

    <!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>-->



    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

    <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>

    <!-- ================== new added link =========================== -->

    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.0.1/js/dataTables.buttons.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>

    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.0.1/js/buttons.html5.min.js"></script>
 
    <script>

     ( function ( $ ) {

    $(document).ready(function() {

        // Function to hide the response message after 5 seconds

        function hideResponseMessage() {

            setTimeout(function() {

                $('#response-message').fadeOut('slow');

            }, 5000); // 5000 milliseconds = 5 seconds

        }



        // Call the hideResponseMessage function when the page is ready

        hideResponseMessage();

    });

}( jQuery ) );

</script>



</body>



</html>

