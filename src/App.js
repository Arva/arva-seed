import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css';
import './fonts.css';



/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';
import {NavigationDrawer}           from 'arva-kit/menus/navigationDrawer/NavigationDrawer.js';
import {ImageSideMenuView}          from 'arva-kit/menus/navigationDrawer/sideMenus/ImageSideMenuView.js';
import {AccountIcon}                from 'arva-kit/icons/AccountIcon.js';




export class App extends ArvaApp {


    /* The controllers that will be used in the app. */
    static controllers = [HomeController];

    /**
     *  Called before the App is constructed and before the basic components (Router, Famous Context, Controllers,
     *  DataSource) have loaded.
     */
    static initialize(){
        /* Change initial route, view animation or something needed before we start */
        this.start();
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded(){

        /* Instantiate things you need before the router is executed here. For example:
         *
         * this.references.menu = Injection.get(Menu); */
        Injection.provide(NavigationDrawer, new NavigationDrawer({
            topMenuOptions: { defaultTitle: 'Arva Application' },
            sideMenu: {
                viewClass: ImageSideMenuView,
                image: 'http://arva.io/img/hub.png',
                menuItems: [{
                    icon: AccountIcon,
                    text: 'Menu item 1'
                }]
            }
        }));
        let menu = Injection.get(NavigationDrawer);

        menu.setNavigationDrawerEnabled(true);
    }

    /**
     * Called by super class after all components (routing, controllers, views, etc.) have been loaded and the
     * app is up and running.
     */
    static done(){
    }
}

document.addEventListener('deviceready', App.initialize.bind(App));