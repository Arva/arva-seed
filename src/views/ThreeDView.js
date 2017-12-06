import Surface                  from 'famous/core/Surface.js';
import Easing                   from 'famous/transitions/Easing.js';
import {View}                   from 'arva-js/core/View.js';
import {layout,
    event,
    bindings, flow, dynamic}    from  'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';

@bindings.setup({
    welcomeName: 'noName',
    rotation: 0
})
export class ThreeDView extends View {

    @layout
        .size(500, 100)
        .stick.center()
        .translate(0, 0, 0)
    @flow.stateStep('rotating', {transition: {curve: Easing.inOutCubic, duration: 3000}}, layout.translateFrom(0, -100, 0).rotateFrom(0, Math.PI, 0))
    @flow.stateStep('rotating', {transition: {curve: Easing.inOutCubic, duration: 5000}},
        layout.translateFrom(0, 100, 0))
    @flow.stateStep('rotating', {transition: {curve: Easing.inCubic, duration: 500}}, layout.rotate(0,0,0))
    @event.on('click', function () {
        this.setRenderableFlowState(this.textButton, 'rotating');
    })
    textButton = new TextButton({content: 'Press me!'});



}
