import Surface                  from 'famous/core/Surface.js';
import {View}                   from 'arva-js/core/View.js';
import {layout,
    event,
    bindings, flow}             from  'arva-js/layout/Decorators.js';

@bindings.setup({
    welcomeName: 'noName'
})

export class HomeView extends View {
    @event.on('click', function () {
        this.options.welcomeName = 'you clicked me...';
    })
    @flow.auto()
    @layout
        .size(~100, ~25)
        .stick.center()
    message = new Surface({content: `Hello ${this.options.welcomeName}`, properties: {textAlign: 'center'}});

}
