import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';
import {ThreeDView}                   from '../views/ThreeDView.js';
import {PortfolioView}                   from '../views/PortfolioView.js';


export class HomeController extends Controller {
    Index(){
        if(!this.homeView) {
            this.homeView = new HomeView({welcomeName: 'world'});
        }
        return this.homeView;
    }

    Portfolio(){
        if(!this.portfolioView) {
            this.portfolioView = new PortfolioView({welcomeName: 'world'});
        }
        return this.portfolioView;
    }

    ThreeD(){
        if(!this.threeDView) {
            this.threeDView = new ThreeDView({welcomeName: 'world'});
        }
        return this.threeDView;
    }
}
