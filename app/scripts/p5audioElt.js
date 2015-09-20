// modifying part of the p5sjs p5sdom addon library
// https://github.com/processing/p5sjs/blob/master/lib/addons/p5sdom.js

  var p5AudioElt = function(src, callback) {
    var elt = document.createElement('audio');
    if (typeof src === 'string') {
      src = [src];
    }
    if (typeof (src) !== 'undefined') {
      for (var i=0; i<src.length; i++) {
        var source = document.createElement('source');
        source.src = src[i];
        elt.appendChild(source);
      }
    }
    if (typeof callback !== 'undefined') {
      elt.addEventListener('canplaythrough', function() {
        callback();
      });
    }

    elt.preload = 'auto';
    this.elt = elt;
    this._prevTime = 0;
    this._cueIDCounter = 0;
    this._cues = [];

    return this;
  };

  p5AudioElt.prototype.load = function() {
    this.elt.load()
  };

  /**
   *  reset the audio source
   */
  p5AudioElt.prototype.src = function(src) {
    this.elt.src = src;
  };

  /**
   * Play an HTML5 media element.
   *
   * @method play
   * @return {Object/p5s.Element}
   */
  p5AudioElt.prototype.play = function() {
    if (this.elt.currentTime === this.elt.duration) {
      this.elt.currentTime = 0;
    }

    if (this.elt.readyState > 1) {
      this.elt.play();
    } else {
      // in Chrome, playback cannot resume after being stopped and must reload
      this.elt.load();
      this.elt.play();
    }
    return this;
  };

  /**
   * Stops an HTML5 media element (sets current time to zero).
   *
   * @method stop
   * @return {Object/p5sElement}
   */
  p5AudioElt.prototype.stop = function() {
    if (this.elt) {
      this.elt.currentTime = 0;
      this.elt.pause();
    }
    return this;
  };

  /**
   * Pauses an HTML5 media element.
   *
   * @method pause
   * @return {Object/p5sElement}
   */
  p5AudioElt.prototype.pause = function() {
    this.elt.pause();
    return this;
  };

  /**
   * Set 'loop' to true for an HTML5 media element, and starts playing.
   *
   * @method loop
   * @return {Object/p5sElement}
   */
  p5AudioElt.prototype.loop = function() {
    this.elt.setAttribute('loop', true);
    this.play();
    return this;
  };
  /**
   * Set 'loop' to false for an HTML5 media element. Element will stop
   * when it reaches the end.
   *
   * @method noLoop
   * @return {Object/p5sElement}
   */
  p5AudioElt.prototype.noLoop = function() {
    this.elt.setAttribute('loop', false);
    return this;
  };


  /**
   * Set HTML5 media element to autoplay or not.
   *
   * @method autoplay
   * @param {Boolean} autoplay whether the element should autoplay
   * @return {Object/p5sElement}
   */
  p5AudioElt.prototype.autoplay = function(val) {
    this.elt.setAttribute('autoplay', val);
    return this;
  };

  /**
   * Sets volume for this HTML5 media element. If no argument is given,
   * returns the current volume.
   *
   * @param {Number}            [val] volume between 0.0 and 1.0
   * @return {Number|p5AudioElt} current volume or p5AudioElt
   * @method volume
   */
  p5AudioElt.prototype.volume = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.volume;
    } else {
      this.elt.volume = val;
    }
  };

  /**
   * If no arguments are given, returns the current time of the elmeent.
   * If an argument is given the current time of the element is set to it.
   *
   * @method time
   * @param {Number} [time] time to jump to (in seconds)
   * @return {Number|Object/p5AudioElt} current time (in seconds)
   *                                  or p5AudioElt
   */
  p5AudioElt.prototype.time = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.currentTime;
    } else {
      try {
        this.elt.currentTime = val;
      } catch(e) {
        console.log(e);
        console.log(this.elt);
      }
    }
  };

  /**
   * Returns the duration of the HTML5 media element.
   *
   * @method duration
   * @return {Number} duration
   */
  p5AudioElt.prototype.duration = function() {
    return this.elt.duration;
  };

  /*** CONNECT TO WEB AUDIO API / p5ssound.js ***/

  /**
   *  Send the audio output of this element to a specified audioNode or
   *  p5ssound object. If no element is provided, connects to p5ss master
   *  output. That connection is established when this method is first called.
   *  All connections are removed by the .disconnect() method.
   *  
   *  This method is meant to be used with the p5ssound.js addon library.
   *
   *  @method  connect
   *  @param  {AudioNode|p5ssound object} audioNode AudioNode from the Web Audio API,
   *  or an object from the p5ssound library
   */
  p5AudioElt.prototype.connect = function(obj) {
    var audioContext, masterOutput;

    // if p5ssound exists, same audio context
    if (p5 && typeof p5.prototype.getAudioContext === 'function') {
      audioContext = p5sprototype.getAudioContext(); 
      masterOutput = p5ssoundOut.input;
    } else {
      try {
        audioContext = obj.context;
        masterOutput = audioContext.destination
      } catch(e) {
        throw 'connect() is meant to be used with Web Audio API or p5ssound.js'
      }
    }

    // create a Web Audio MediaElementAudioSourceNode if none already exists
    if (!this.audioSourceNode) {
      this.audioSourceNode = audioContext.createMediaElementSource(this.elt);

      // connect to master output when this method is first called
      this.audioSourceNode.connect(masterOutput);
    }

    // connect to object if provided
    if (obj) {
      if (obj.input) {
        this.audioSourceNode.connect(obj.input);
      } else {
        this.audioSourceNode.connect(obj);
      }
    }

    // otherwise connect to master output of p5ssound / AudioContext
    else {
      this.audioSourceNode.connect(masterOutput);
    }

  };

  /**
   *  Disconnect all Web Audio routing, including to master output.
   *  This is useful if you want to re-route the output through
   *  audio effects, for example.
   *  
   *  @method  disconnect
   */
  p5AudioElt.prototype.disconnect = function() {
    if (this.audioSourceNode) {
      this.audioSourceNode.disconnect();
    } else {
      throw 'nothing to disconnect';
    }
  };


  /*** SHOW / HIDE CONTROLS ***/

  /**
   *  Show the default MediaElement controls, as determined by the web browser.
   *
   *  @method  showControls
   */
  p5AudioElt.prototype.showControls = function() {
    // must set style for the element to show on the page
    this.elt.style['text-align'] = 'inherit';
    this.elt.controls = true;
  };

  /**
   *  Hide the default mediaElement controls.
   *  
   *  @method hideControls
   */
  p5AudioElt.prototype.hideControls = function() {
    this.elt.controls = false;
  };

  /*** SCHEDULE EVENTS ***/

  /**
   *  Schedule events to trigger every time a MediaElement
   *  (audio/video) reaches a playback cue point.
   *
   *  Accepts a callback function, a time (in seconds) at which to trigger
   *  the callback, and an optional parameter for the callback.
   *
   *  Time will be passed as the first parameter to the callback function,
   *  and param will be the second parameter.
   *
   *
   *  @method  addCue
   *  @param {Number}   time     Time in seconds, relative to this media
   *                             element's playback. For example, to trigger
   *                             an event every time playback reaches two
   *                             seconds, pass in the number 2. This will be
   *                             passed as the first parameter to
   *                             the callback function.
   *  @param {Function} callback Name of a function that will be
   *                             called at the given time. The callback will
   *                             receive time and (optionally) param as its
   *                             two parameters.
   *  @param {Object} [value]    An object to be passed as the
   *                             second parameter to the
   *                             callback function.
   *  @return {Number} id ID of this cue,
   *                      useful for removeCue(id)
   *  @example
   *  <div><code>
   *  function setup() {
   *    background(255,255,255);
   *    
   *    audioEl = createAudio('assets/beat.mp3');
   *    audioEl.showControls();
   *
   *    // schedule three calls to changeBackground
   *    audioEl.addCue(0.5, changeBackground, color(255,0,0) );
   *    audioEl.addCue(1.0, changeBackground, color(0,255,0) );
   *    audioEl.addCue(2.5, changeBackground, color(0,0,255) );
   *    audioEl.addCue(3.0, changeBackground, color(0,255,255) );
   *    audioEl.addCue(4.2, changeBackground, color(255,255,0) );
   *    audioEl.addCue(5.0, changeBackground, color(255,255,0) );
   *  }
   *
   *  function changeBackground(val) {
   *    background(val);
   *  }
   *  </code></div>
   */
  p5AudioElt.prototype.addCue = function(time, callback, val) {
    var id = this._cueIDCounter++;

    var cue = new Cue(callback, time, id, val);
    this._cues.push(cue);

    if (!this.elt.ontimeupdate) {
      this.elt.ontimeupdate = this._onTimeUpdate.bind(this);
    }

    return id;
  };

  /**
   *  Remove a callback based on its ID. The ID is returned by the
   *  addCue method.
   *
   *  @method removeCue
   *  @param  {Number} id ID of the cue, as returned by addCue
   */
  p5AudioElt.prototype.removeCue = function(id) {
    for (var i = 0; i < this._cues.length; i++) {
      var cue = this._cues[i];
      if (cue.id === id) {
        this.cues.splice(i, 1);
      }
    }

    if (this._cues.length === 0) {
      this.elt.ontimeupdate = null
    }
  };

  /**
   *  Remove all of the callbacks that had originally been scheduled
   *  via the addCue method.
   *
   *  @method  clearCues
   */
  p5AudioElt.prototype.clearCues = function() {
    this._cues = [];
    this.elt.ontimeupdate = null;
  };

  // private method that checks for cues to be fired if events
  // have been scheduled using addCue(callback, time).
  p5AudioElt.prototype._onTimeUpdate = function() {
    var playbackTime = this.time();

    for (var i = 0 ; i < this._cues.length; i++) {
      var callbackTime = this._cues[i].time;
      var val = this._cues[i].val;


      if (this._prevTime < callbackTime && callbackTime <= playbackTime) {

        // pass the scheduled callbackTime as parameter to the callback
        this._cues[i].callback(val);
      }

    }

    this._prevTime = playbackTime;
  };


  // Cue inspired by JavaScript setTimeout, and the
  // Tone.js Transport Timeline Event, MIT License Yotam Mann 2015 tonejs.org
  var Cue = function(callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  };