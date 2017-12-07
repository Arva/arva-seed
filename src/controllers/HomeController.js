import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';
import {View}                       from 'arva-js/core/View.js';
import {
    layout,
    event,
    bindings, flow, dynamic
}                                   from 'arva-js/layout/Decorators.js';
import {Surface}                    from 'arva-js/surfaces/Surface.js';

export class HomeController extends Controller {
    Index(){
        if(!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.on('escapeScreen', () => {
                this.router.go(this, 'Index2');
            })
        }
        return this.homeView;
    }

    Index2(){
        if(!this.homeView2) {
            this.homeView2 = new FirstView();
        }
        return this.homeView2;
    }

    Index3(){
        if(!this.homeView3) {
            this.homeView3 = new SecondView();
        }
        return this.homeView3;
    }

}


class FirstView extends View {
    @layout.fullSize()
    bg = Surface.with({
        properties: {
            backgroundColor: 'red',
            border: '10px solid black'
        }
    });

    @layout.stick.center().size(100, 100).translate(0, 0, 10)
    center = Surface.with({
        properties: {
            border: '10px solid black'
        }
    })
}

class SecondView extends View {
    @layout.fullSize()
    bg = Surface.with({
        properties: {
            backgroundColor: 'green',
            border: '10px solid black'
        }
    });



    @layout.stick.center().size(100, 100).translate(0, 0, 10)
    center = Surface.with({
        properties: {
            border: '10px solid black'
        }
    })
}