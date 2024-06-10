import React from 'react';
import EaseLogo from '../assets/images/ease-logo.svg';

const PageHeader = () => {
    return (
        <header className='e-header e-header-fixed e-d-flex e-justify-between e-align-center'>
            <div className="e-container">
                <div className="e-offset-12 e-offset-md-3 e-offset-lg-2">
                    <nav className="e-header__nav e-d-flex e-justify-between e-align-center">
                        <div className="e-header__left e-d-flex a-align-center e-mg-r-10 e-mg-r-0-md">
                            <div className="e-header__mobile e-mg-r 10 e-d-none-md">
                                <button type='button' className="e-icon-btn e-header__mobile--trigger" data-menu-target="main-menu">
                                    <i className="ri-menu-2-line e-fs-16"></i>
                                </button>
                            </div>
                            <div className="e-header__form">
                                <form action="" className="e-form">
                                    <div className="e-form__group">
                                        <i className="ri-search-line e-from__icon"></i>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <ul className="e-header__navitems e-header__sidebar-md-3 e-header__sidebar-lg-2 e-pd-y-20" id="main-menu">
                            <li className="e-header__list">
                                <a href="#" className="e-header__link--logo e-pd-20 e-d-flex e-align_center e-justify-center">
                                    <img src={EaseLogo} alt="Ease Dashboard logo" />
                                </a>
                            </li>

                            <li className="e-header__list e-dropdown">
                                <a href="#" className="e-header__link e-active e-pd-20 e-d-flex e-align-center e-justify-between" data-dropdown-target="submenu">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-dashboard-line e-mg-r-10"></i>Dashboard</span>
                                </a>
                                <ul className="e-dropdown__menu">
                                    <li><a href="#" className="e-header__sublink e-d-block e-pd-x-20 e-pd-y-10 e-active">Project</a></li>
                                    <li><a href="#" className="e-header__sublink e-d-block e-pd-x-20 e-pd-y-10">eCommerce</a></li>
                                </ul>                                
                            </li>


                            <li className="e-header__list e-header__list--title e-fw-bld e-tt-uppercase e-pd-x-20 e-pd-y-10">Applications</li>

                            <li className="e-header__list">
                                <a href="#" className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-message-2-line e-mg-r10"></i>Messages</span>
                                    <span className="e-bdg e-bdg-danger">12</span>
                                </a>
                            </li>
                            
                            <li className="e-header__list">
                                <a href="#" className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-inbox-line e-mg-r-10"></i>Inbox</span>
                                    <span className="e-bdg e-bdg-danger">6</span>
                                </a>
                            </li>

                            <li className="e-header__list">
                                <a href="#" className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-calendar-2-line e-mg-r-10"></i>Calendar</span>
                                </a>
                            </li>



                            <li className="e-header__list e-header__list--title e-fw-bld e-tt-uppercase e-pd-x-20 e-pd-y-10">System</li>

                            
                            <li className="e-header__list">
                                <a href="#" className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-equalizer-line e-mg-r-10"></i>Settings</span>
                                </a>
                            </li>

                            <li className="e-header__list">
                                <a href="#" className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                    <span className="e-fs-14 e-d-flex e-align-center"><i className="ri-user-star-line e-mg-r-10"></i>Profile</span>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
     
        </header>
    );
}

export default PageHeader;
