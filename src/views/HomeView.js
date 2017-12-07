import Surface from 'famous/core/Surface.js';
import {AudioSurface} from 'arva-js/surfaces/AudioSurface.js';
import {View} from 'arva-js/core/View.js';
import {
    layout,
    event,
    bindings, flow, dynamic
} from 'arva-js/layout/Decorators.js';
import Easing from 'famous/transitions/Easing.js';
import {TextButton}     from 'arva-kit/buttons/TextButton.js';

@bindings.setup({
    buttonIsFullScreen: false,
    rotateButton: false
})

export class HomeView extends View {

    @layout.fullSize()
    background = Surface.with({properties: {backgroundColor: '#000A0A'}});

    @layout
        .stick.center()
        .size(200, true)
        .translate(0, 0, 100)
    @dynamic(({buttonIsFullScreen}) =>
        flow.transition({duration: 1000, curve: Easing.inCubic})(
            layout
                .opacity(buttonIsFullScreen ? 1 : 0)
                .rotate(...(buttonIsFullScreen ? [0, 0, 0] : [Math.PI, Math.PI * 1.5, 0]))
        )
    )
    someButton = TextButton.with({content: 'Go!', clickEventName: 'escapeScreen'});

    @dynamic(({buttonIsFullScreen}) =>
        buttonIsFullScreen ?
            flow.transition({duration: 300, curve: Easing.inCubic})(
                layout.stick.center()
            ).transition({duration: 300, curve: Easing.inCubic})(
                layout
                    .size((width, height) => width * 2, (width, height) => height * 2)
                    .rotate(0, 0, 2 * Math.PI)
            )
            :
            flow.transition({duration: 300, curve: Easing.inCubic})(
                layout
                    .translate(0, 50, 10)
                    .stick.bottom()
                    .size(100, 100)
                    .rotate(0, 0, 0)
            )
    )
    @event.on('mouseover', function () {
        this.options.buttonIsFullScreen = true;
    })
    @event.on('click', function () {
        this.options.buttonIsFullScreen = false;
    })
    button = Surface.with({
        properties: {
            backgroundColor: 'antiquewhite',
            borderRadius: '30%'
        }
    });

}
