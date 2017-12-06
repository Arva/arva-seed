import Surface                  from 'famous/core/Surface.js';
import {AudioSurface}           from 'arva-js/surfaces/AudioSurface.js';
import {EqualizerSurface}       from '../components/EqualizerSurface.js';
import {View}                   from 'arva-js/core/View.js';
import {layout,
    event,
    bindings, flow}             from  'arva-js/layout/Decorators.js';

@bindings.setup({
    welcomeName: 'noName'
})

export class HomeView extends View {

  @layout.fullSize()
  background = new Surface({properties: {backgroundColor: '#000A0A'}})


    @event.on('click', function () {
      this.options.welcomeName = 'you clicked me...';
      this._startAudio();
    })
    @flow.auto()
    @layout
        .size(~100, ~25)
        .stick.center()

    message = new Surface({content: `Hello ${this.options.welcomeName}`, properties: {textAlign: 'center'}});

    @layout
        .size(~100, ~25)
        .stick.top()
    audio = new AudioSurface({properties: {url: 'http://webaudioapi.com/samples/audio-tag/chrono.mp3'}});

    @layout
        .size(true, ~400)
        .stick.bottom()
    visualizer = new EqualizerSurface();

    @bindings.preprocess()
    _someTrigger() {
      debugger;
      //console.log(this.options.welcomeName);
      let x = this.options.welcomeName2;
      x + x + " yo";
    }


    _startAudio() {
      this.audio.startAnalyser();
      this.audio.on('frequencydata', (streamData) => {
        this.visualizer._draw(this.audio.bufferLength, streamData);
      });

      this.audio.play();
    }


}
