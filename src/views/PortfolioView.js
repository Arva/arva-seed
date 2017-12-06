import Surface                  from 'famous/core/Surface.js';
import {ImageSurface}             from 'arva-js/surfaces/ImageSurface.js';
import {View}                   from 'arva-js/core/View.js';
import {layout, event, flow, bindings}    from 'arva-js/layout/Decorators.js';

import Easing                   from 'famous/transitions/Easing.js';
import {MenuOptionsView}        from './Portfolio/MenuOptionsView.js';

@flow.viewStates({
    initial: [{text: 'hidden'}, {bf: 'hidden'}, {button: 'initial'}],
    arvaLoaded: [{button: 'big'}, {bf: 'shown'}, {text: 'shown'}, {cta: 'shown'}],
    menuActivated: [ {text: 'active', bf: 'active', subview: 'enabled'}],
    optionActivated: [{ menu: 'shown'} ]
    //activated: [{button: 'big'}, {text: 'active', bf: 'active'} ]
})
@bindings.setup({
  viewState: 'initial'
})
export class JumpieView extends View {

    constructor() {
      super(...arguments);

      setTimeout(() => {this.options.viewState = 'arvaLoaded'}, 1000);
    }


    @bindings.preprocess()
    onViewStateChange() {
      // by inspecting the viewState property, we subscribe to all
      // future changes of this property. Therefore we can use this function
      // as a state machine.
      //
      // we enable developers to write their own state machine, for maximum
      // flexibility.
      switch (this.options.viewState) {
        case 'initial':
          this.setViewFlowState('initial');
          return;
        case 'arvaLoaded':
          this.setViewFlowState('arvaLoaded');
          return;
        case "menuActivated":
          // make sure our nested view receives instructions to change it's state
          this.buttons.setViewFlowState('menuActivated');
          return;
        case "optionActivated":
          this.buttons.setViewFlowState('menuActivated');
          return;
        default:
          return;

      }
    }

    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: '#000A0A'}})

    @flow.defaultState('initial', {},
        layout.translate(0, 50, 0),
        layout.stick.bottom(),
        layout.size(100, 100))
    @event.on('click', function () {
        if (this.options.viewState !== 'initial')
          this.options.viewState = 'initial';
        else
          this.options.viewState = 'arvaLoaded';
    })
    @flow.stateStep('big', {transition: {duration: 200}}, layout.stick.center())
    @flow.stateStep('big', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    },
        layout.size((width, height) => width * 2, (width, height) => height * 2),
        layout.rotateFrom(0, 0, 2*Math.PI)
    )
    button = new Surface({

      properties: {
          backgroundColor: '#17CDB0',
          borderRadius: '30%'
      }
    });


    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(90, 90),
        layout.stick.center())
    @flow.stateStep('shown', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('shown', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.size(200, 200))
    @flow.stateStep('active', {transition: {duration: 200}}, layout.size(100, 100))
    bf = new Surface({
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 20),
        layout.opacity(0),
        layout.size(150, 150),
        layout.stick.center())
    @flow.stateStep('shown', {transition: {duration: 700}}, layout.opacity(1), layout.size(150, 150))
    @flow.stateStep('active', {transition: {duration: 200}}, layout.size(80, 80))
    @event.on('click', function () {
      if (this.getViewFlowState() !== "activated") {
        this.setViewFlowState('activated');
        this.options.isActive = true;
      }
      else
        this.setViewFlowState('enabled');
    })
    logo = new ImageSurface({content: 'arva_on_black.jpg'});

    @layout.stick.center()
    menu = MenuOptionsView.with({ viewState: this.ioState.viewState });


    @flow.defaultState('initial', {},
      layout.stick.bottom(),
      layout.size(~300, ~50),
      layout.translate(0,-50,20),
      layout.opacity(0))
    @flow.stateStep('shown', {transition: {duration: 200}}, layout.opacity(1))
    callToAction = new Surface({content: 'http://arva.io', properties: { fontSize: '16pt'} });





    /*@layout.stick.center()
    buttons = this.options.buttonPositions.map((buttonPosition) =>
      layout.
        translate(...(this.options.isActive ? (buttonPosition) : [0, 0]), 10)
        .opacity(this.options.isActive ? 1 : 0)
      (
        Surface.with({
          content: '',
          properties: {
              backgroundColor: '#000101',
              borderRadius: '30%',
              color: 'white'
          }
        })
      )
    )*/

}
