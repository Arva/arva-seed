import Surface                  from 'famous/core/Surface.js';
import {ImageSurface}             from 'arva-js/surfaces/ImageSurface.js';
import {View}                   from 'arva-js/core/View.js';
import {layout, event, flow}    from 'arva-js/layout/Decorators.js';

import Easing                   from 'famous/transitions/Easing.js';


@flow.viewStates({
    enabled: [{button1: 'hidden', button2: 'hidden', button3: 'hidden', button4: 'hidden', button5: 'hidden', button6: 'hidden', button7: 'hidden', button8: 'hidden'}, {button: 'big'}, {bf: 'shown'}, {text: 'shown'}],
    passive: [{text: 'hidden', button1: 'hidden', button2: 'hidden', button3: 'hidden', button4: 'hidden', button5: 'hidden', button6: 'hidden', button7: 'hidden', button8: 'hidden'}, {bf: 'hidden'}, {button: 'initial'}],
    activated: [ {text: 'active', bf: 'active'}, {button1: 'active', button2: 'active', button3: 'active', button4: 'active', button5: 'active', button6: 'active', button7: 'active', button8: 'active'}]
    //activated: [{button: 'big'}, {text: 'active', bf: 'active'} ]
}, behaviour.propagate)
export class JumpieView extends View {

    constructor() {
      super(...arguments);
    }


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
      if (this.getViewFlowState() !== "activated")
        this.setViewFlowState('activated');
      else
        this.setViewFlowState('enabled');
    })
    text = new ImageSurface({content: 'arva_on_black.jpg'})



    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(-110, -110, 10))
    button1 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(0, -110, 10))
    button2 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(110, -110, 10))
    button3 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(-110, 0, 10))
    button4 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(110, 0, 10))
    button5 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(-110, 110, 10))
    button6 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(0, 110, 10))
    button7 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })

    @flow.defaultState('hidden', {},
        layout.translate(0, 0, 10),
        layout.opacity(0),
        layout.size(100, 100),
        layout.stick.center())
    @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    @flow.stateStep('active', {
        transition: {
            curve: Easing.inCubic,
            duration: 500
        }
    }, layout.translateFrom(110, 110, 10))
    button8 = new Surface({
      content: '',
      properties: {
          backgroundColor: '#000101',
          borderRadius: '30%',
          color: 'white'
      }
    })
}
