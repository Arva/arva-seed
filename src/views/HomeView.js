import {Surface}        from 'arva-js/surfaces/Surface.js';
import {View}           from 'arva-js/core/View.js';
import {
    layout,
    event,
    bindings, flow, dynamic
}                       from 'arva-js/layout/Decorators.js';
import Easing           from 'famous/transitions/Easing.js';

/* These are the available options for the HomeView and their defaults */
@bindings.setup({
    showContent: false,
    showIcons: false,
})
export class HomeView extends View {


    /* When we are about to show content, show icons after the flow is completed*/
    @bindings.trigger()
    async expandAppIcons() {
        if(this.options.showContent){
            await Promise.all(this.list.map((listItem) => this.whenFlowFinished(listItem)));
            this.options.showIcons = true;
        }
    }

    /* Whenever we shouldn't show content, hide the icons*/
    @bindings.trigger()
    collapseAppIcons() {
        if(!this.options.showContent){
            this.options.showIcons = false;
        }
    }

    /* The first renderable we define is our background */
    @layout.fullSize().translate(0, 0, -10)
    background = Surface.with({properties: {backgroundColor: '#2C2C2C' }});

    /*  All the app-shaped items go here */
    @dynamic(({showContent}) =>
        flow.transition({duration: 200, queuePriority: 2})(
            layout.scale(showContent ? 1 : 0, showContent ? 1 : 0, 1)
        )
    )
    @layout.stick.center().size(120, 120)
    list = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ].map((translation) =>
        layout.translate(...translation.map((offset) => offset * 130), 10)(
            Thumbnail.with({isExpanded: this.options.showIcons})
        ));

    /* The item in the middle goes here */
    @layout
        .stick.center()
        .translate(0, 0, 20)
        .size(120, 120)
    @dynamic(({showContent}) =>
        flow.transition({duration: 200, curve: Easing.inCubic, queuePriority: 1})(
            layout
                .scale(showContent ? 1 : 0, showContent ? 1 : 0, 1)
        )
    )
    midButton = Thumbnail.with({isExpanded: this.options.showIcons});

    /* This will be the object that flies up to act as an expandable background */
    @dynamic(({showContent}) =>
        showContent ?
            flow.transition({duration: 300, curve: Easing.inCubic, queuePriority: 0})(
                layout.stick.center()
                    .scale(2, 2, 1)
                    .translate(0, 0, 0)
                    .rotate(0, 0, Math.PI)
            ).transition({duration: 300, curve: Easing.inCubic})(
                layout
                    .scale(10, 10, 1)
                    .rotate(0, 0, 2 * Math.PI)
            )
            :
            flow.transition({duration: 600, curve: Easing.inCubic, queuePriority: 2})(
                layout
                    .origin(0.5, 0.5)
                    .align(0.5, 1)
                    .size(100, 100)
                    .scale(1, 1, 1)
                    .rotate(0, 0, 0)
            )
    )
    @event.on('mouseover', function () {
        this.options.showContent = true;
    })
    @event.on('click', function () {
        this.options.showContent = false;
    })
    buttonAndBackground = Surface.with({
        properties: {
            backgroundColor: '#18D3B9',
            borderRadius: '25%'
        }
    });

}

@bindings.setup({
    isExpanded: false,
    clickCount: 0
})
export class Thumbnail extends View {
    @event.on('click', function () {
        this.options.clickCount++;
    })
    @layout
        .stick.center()
        .size(70, true)
        /* Add a bit of extra translation in order for the text to be able to rotate all the way */
        .translate(0, 0, 30)
    @dynamic(({isExpanded, clickCount}) =>
        flow.transition({duration: 300})(
            layout.scale(isExpanded ? 1 : 0, isExpanded ? 1 : 0, 1).
            rotate(0, clickCount * Math.PI, 0)
        )
    )
    text = Surface.with({content: 'Flip me', properties: {color: 'white'}});


    @event.pipe('text')
    @layout.fullSize()
    background = Surface.with({properties: {
        backgroundColor: '#2C2C2C',
        borderRadius: '25%'
    }});
}

