import Surface                  from 'famous/core/Surface.js';
import {ImageSurface}             from 'arva-js/surfaces/ImageSurface.js';
import {View}                   from 'arva-js/core/View.js';
import {layout, event, flow, bindings}    from 'arva-js/layout/Decorators.js';

import Easing                   from 'famous/transitions/Easing.js';


@flow.viewStates({
    enabled: [{button: 'big'}, {bf: 'shown'}, {text: 'shown'}, {cta: 'shown'}],
    start: [{text: 'hidden'}, {bf: 'hidden'}, {button: 'initial'}],
    activated: [ {text: 'active', bf: 'active', subview: 'enabled'}],
    illagal: [ {checkbox: {isChecked: false}}],
    illigal: () => { now do weird shit}
    //activated: [{button: 'big'}, {text: 'active', bf: 'active'} ]
})
@bindings.setup({
  viewState: 'initial'
})
export class MenuOptionsView extends View {

    constructor() {
      super(...arguments);

      setTimeout(() => {this.setViewFlowState('enabled')}, 1000);


    }

    @bindings.preprocess()
    onViewStateChange() {
      this.setViewFlowState(this.options.viewState);
    }

    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(-110, -110, 10))
    // button1 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(0, -110, 10))
    // button2 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(110, -110, 10))
    // button3 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(-110, 0, 10))
    // button4 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(110, 0, 10))
    // button5 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(-110, 110, 10))
    // button6 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(0, 110, 10))
    // button7 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
    //
    // @flow.defaultState('hidden', {},
    //     layout.translate(0, 0, 10),
    //     layout.opacity(0),
    //     layout.size(100, 100),
    //     layout.stick.center())
    // @flow.stateStep('active', {transition: {duration: 200}}, layout.opacity(1))
    // @flow.stateStep('active', {
    //     transition: {
    //         curve: Easing.inCubic,
    //         duration: 500
    //     }
    // }, layout.translateFrom(110, 110, 10))
    // button8 = new Surface({
    //   content: '',
    //   properties: {
    //       backgroundColor: '#000101',
    //       borderRadius: '30%',
    //       color: 'white'
    //   }
    // })
}
