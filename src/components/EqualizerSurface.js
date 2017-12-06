import CanvasSurface              from 'famous/surfaces/CanvasSurface.js';

/*

Sources:
- https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount
- 

*/
export class EqualizerSurface extends CanvasSurface {


    constructor(options = {}) {
        super(options);
        this._positionLeft = options.positionLeft;
    }


    _draw(bufferLength, streamData) {


      if (!this._canvasContext) this._canvasContext = this.getContext('2d');

      let width = this._size[0];
      let height = this._size[1];

      this._canvasContext.fillStyle = 'rgb(0, 0, 0)';
      this._canvasContext.clearRect(0, 0, width, height);

      let barWidth = (width / bufferLength);
      let barHeight;

      if(this._positionLeft){
          var x = width;
      } else {
          var x = 0;
      }

      for(var i = 0; i < bufferLength; i++) {
        barHeight = streamData[i];

        this._canvasContext.shadowOffsetX = 5;
        this._canvasContext.shadowOffsetY = 5;
        this._canvasContext.shadowBlur = 10;

        //let color = this._audioSource.volume/56;
        //if(color < 20 || color > 255){color = 20} else { color = this._audioSource.volume/40}

        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+40) +',100,0.5)';
        this._canvasContext.fillRect(x,height/2-barHeight,barWidth,barHeight);
        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+60) +',100,0.5)';
        this._canvasContext.fillRect(x,height/2-barHeight/2,barWidth,barHeight/2);
        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+40) +',100, 0.25)';
        this._canvasContext.fillRect(x,height/2-barHeight*1.5,barWidth,barHeight*1.5);

        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+40) +',100,0.5)';
        this._canvasContext.fillRect(x,height/2+barHeight,barWidth,-barHeight);
        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+60) +',100,0.5)';
        this._canvasContext.fillRect(x,height/2+barHeight/2,barWidth,-barHeight/2);
        this._canvasContext.fillStyle = 'rgba(0,'+(barHeight+40) +',100, 0.25)';
        this._canvasContext.fillRect(x,height/2+barHeight*1.5,barWidth,-barHeight*1.5);

        if(this._positionLeft){
            x -= barWidth + 1;
        } else {
            x += barWidth + 1;
        }
      }
    }
}
