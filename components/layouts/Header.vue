<template>
    <div>
        <header id="page-topbar">
            <div class="navbar-header">
                <div class="d-flex">
                    <!-- LOGO -->
                    <div class="navbar-brand-box">
                        <a href="javascript:void(0)" class="logo">
                            <span class="logo-sm">
                                <img src="~/assets/images/logo.png" alt="" height="22">
                            </span>
                            <span class="logo-lg">
                                <img src="~/assets/images/logo.png" alt="" height="50">
                            </span>
                        </a>
                    </div>

                    <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                        <i class="fa fa-fw fa-bars"></i>
                    </button>
                </div>

                <div class="d-flex">

                    <div class="dropdown d-inline-block language-switch">
                        <button type="button" class="btn header-item waves-effect"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img class="" src="~/assets/images/flags/uk.png" alt="Header Language" height="16">
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <img src="~/assets/images/flags/indonesia.png" alt="user-image" class="mr-1" height="12"> <span class="align-middle">Indonesia</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <img src="~/assets/images/flags/russia.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">Russia</span>
                            </a>

                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="uil-bell"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div class="p-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="m-0 font-size-16"> Notifications </h5>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style="max-height: 230px;">
                                <a href="javascript:void(0)" class="text-reset notification-item">
                                    <div class="media">
                                        <div class="avatar-xs mr-3">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                <i class="uil-info-circle"></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mt-0 mb-1">Under Development</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">Lorem ipsum dolor sit amet...</p>
                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 2 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- <div class="p-2 border-top">
                                <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                    <i class="uil-arrow-circle-right mr-1"></i> View More..
                                </a>
                            </div> -->
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">Romadhan</span>
                            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <!-- item-->
                            <a class="dropdown-item d-block" href="javascript:void(0)"><i class="uil uil-cog font-size-18 align-middle mr-1 text-muted"></i> <span class="align-middle">Settings</span></a>
                            <a class="dropdown-item" href="javascript:void(0)"><i class="uil uil-sign-out-alt font-size-18 align-middle mr-1 text-muted"></i> <span class="align-middle">Sign out</span></a>
                        </div>
                    </div>
        
                </div>
            </div>
            <div class="container-fluid">
                <div class="topnav">

                    <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div class="collapse navbar-collapse" id="topnav-menu-content">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <nuxt-link :to="{ name: 'index' }" class="nav-link">
                                        <i class="uil-home-alt mr-2"></i> Home
                                    </nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link :to="{ name: 'app-chat' }" class="nav-link">
                                        <i class="uil-comments mr-2"></i> Chats
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
    .header-profile-user {
        background-color: transparent;
        padding: 0;
    }
</style>