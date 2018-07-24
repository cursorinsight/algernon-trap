var delay = 1000 / 15; // 15fps
var timeout;

class WindowSizeHandler {
  constructor (window, state, buffer) {
    this.window = window;
    this.state = state;
    this.buffer = buffer;

    this.throttler = this.throttler.bind(this);
  }

  handler (event) {
    var w = this.window.innerWidth;
    var h = this.window.innerHeight;
    var dT = this.state.getDT(event, 20);

    // type = 0b1000
    this.buffer.push([8, dT, w, h],
      [4, 20, 15, 15]);
  };

  throttler (event) {
    if (timeout) {
      this.window.clearTimeout(this.timeout());
    }

    timeout = () => {
      var self = this;
      window.setTimeout(function () {
        timeout = null;
        self.handler(event);
      }, delay);
    };
  };

  start () {
    this.state.wW = this.window.innerWidth;
    this.state.wH = this.window.innerHeight;
    this.window.addEventListener('resize', this.throttler, false);
  };

  stop () {
    this.window.removeEventListener('resize', this.throttler, false);
  };
};

export default WindowSizeHandler;
