'use strict';

angular.module('queueCastApp')
  .service('EpisodesService', EpisodesService);

function EpisodesService() {
	this.toView = [];

  // index of the currently playing episode
  this.epIndex = 0;

	// this.episodeQueue = [];
  this.episodeQueue = getFakeEpisodes();

  this.likedEpisodes = [];

  this.audioDecks = [new p5AudioElt(), new p5AudioElt()];


	//TODO: add lodash for this
	// this.likeEpisode = function (id) {
	// 	//remove from toView list
	// 	//send to API as liked
	// 	//deal with API response (maybe)
	// 	//add to episodeQueue maybe
	// };

  this.uiTriggerNext = function(like) {
    // if it was liked, add to the likedEpisodes
    if (like) {
      this.likedEpisodes.push(this.episodeQueue[this.epIndex]);
    }
    this.playNext();
  }

	this.getNextEpisodes = function () {
		return getFakeEpisodes();
	};

	this.getEpisodeQueue = function () {
		return getFakeEpisodes();
	};

  this.resetQueue = function() {
    this.epIndex = 0;
    this.cueIndex = 0;
  };

  this.clearAudioDecks = function() {
    for (var i = 0; i < this.audioDecks.length; i++) {
      this.audioDecks[i].stop();
    }
    this.loadDeck(this.epIndex);
    this.loadDeck(this.epIndex + 1);
  };

  this.startPlaying = function() {
    this.isPlaying = true;
  };

  this.stopPlaying = function() {
    this.isPlaying = false;
    this.clearAudioDecks();
  };

  this.loadDeck = function(_index) {
    var q = this.episodeQueue;

    if (_index >= q.length) {
      console.log('no more to load');
      return null;
    } else {
      // which deck to use
      var i = _index % this.audioDecks.length;
      var deck = this.audioDecks[i];

      // which episode to load
      var episode = q[_index];

      // TO DO: how do we load mp3 and start/end time
      var mp3URL = episode.episode.audio_files[0].url[0];
      var startTime = episode.episode.audio_files[0].start_time || 200;
      var endTime = startTime + 15;
      deck.src(mp3URL);
      deck.load();
      deck.time(startTime);
    }
  },

  this.timeIsUp = function() {
    swipeLeftAnimation();
    this.playNext().bind(this);
  };

  this.playNext = function() {
    var epQueue = this.episodeQueue;
    var audioElt = this.audioDecks[this.epIndex % 2];

    // just play the first cue (TO DO: remove this)
    var cueIndex = 0;
    clearAudioElementCues(this.audioDecks);

    // if there is another episode to play... play it!
    if (this.epIndex < epQueue.length - 1) {
      audioElt.stop();
      this.epIndex++;

      // prepare the next deck...
      this.loadDeck(this.epIndex + 1);

      // reset the deck and play it
      audioElt = this.audioDecks[this.epIndex % 2];
      audioElt.play();
      window.audioElt = audioElt;
      var ep = this.episodeQueue[this.epIndex];
      var startTime = ep.episode.audio_files[0].start_time || 200;
      var endTime = startTime + 15;

      audioElt.time(startTime);
      audioElt.addCue(endTime, this.timeIsUp.bind(this));
    }
    // otherwise, ...load more?
    else {
      audioElt.stop();
      // TO DO: scope.epService.loadMore();
    }
  }

}


function clearAudioElementCues(decks) {
  for (var i = 0; i < decks.length; i++) {
    decks[i].clearCues();
  }
}

function getFakeEpisodes() {
	return [
  {
    "id": 1598,
    "source": "@JesseThorn",
    "tastemaker": null,
    "text": "RT @Bullseye: \"...I wasn’t existentially prepared for this question.\" Hear Jesse Eisenberg talk about acting, anxiety &amp; his book https://t.…",
    "published": "2015-09-19T18:16:38.000Z",
    "episode": {
      "id": 18244,
      "title": "Jesse Eisenberg & Brian Regan",
      "show_id": 24,
      "show_title": "Bullseye",
      "tags": [],
      "network": "Maximum Fun",
      "audio_files": [
        {
          "id": 18035,
          "filename": "npr_440480617.mp3",
          "duration": 4239,
          "current_status": "Premium transcript complete",
          "url": [
            "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/510309/440480617/npr_440480617.mp3?orgId=1&d=4226&p=510309&story=440480617&t=podcast&e=440480617&ft=pod&f=510309"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://i1.sndcdn.com/avatars-000008686540-t8984i-large.jpg",
        "full": "https://i1.sndcdn.com/avatars-000008686540-t8984i-t500x500.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/18244",
        "ui": "https://www.audiosear.ch/a/4744/jesse-eisenberg--brian-regan"
      }
    }
  },
  {
    "id": 1593,
    "source": "@pjvogt",
    "tastemaker": null,
    "text": "RT @torixoxx: Guys throwback to when I was interviewed in a Larry podcast https://t.co/j2uZ1PpIIS @PJVogt",
    "published": "2015-09-18T22:18:35.000Z",
    "episode": {
      "id": 266,
      "title": "#6 This Proves Everything",
      "show_id": 42,
      "show_title": "Reply All",
      "tags": [
        "larryshipper",
        "onedirection",
        "larry stylinson",
        "louis",
        "harry",
        "one direction",
        "keith calder",
        "eleanor calder",
        "reply all",
        "gimlet",
        "Podcast"
      ],
      "network": "Gimlet Media",
      "audio_files": [
        {
          "id": 265,
          "filename": "stream",
          "duration": 1121,
          "current_status": "Premium transcript complete",
          "url": [
            "https://api.soundcloud.com/tracks/183060239/stream?client_id=df968aa6d731e453a4a867495d1cdb4c"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://i1.sndcdn.com/artworks-000101289831-ynnme0-large.jpg",
        "full": "https://i1.sndcdn.com/artworks-000101289831-ynnme0-t500x500.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/266",
        "ui": "https://www.audiosear.ch/a/10a/6-this-proves-everything"
      }
    }
  },
  {
    "id": 1582,
    "source": "@nuncaduermo",
    "tastemaker": null,
    "text": "RT @Oyerista: Increíble esta historia by @RadioAmbulante on #SoundCloud\nhttps://t.co/8PevYtymYI",
    "published": "2015-09-18T10:33:12.000Z",
    "episode": {
      "id": 18214,
      "title": "Crónica de una muerte mal anunciada / Chronicle of a Death Wrongly Foretold",
      "show_id": 523,
      "show_title": "Radio Ambulante",
      "tags": [],
      "network": "Radio Ambulante",
      "audio_files": [
        {
          "id": 18006,
          "filename": "223925725-radioambulante-muerte-mal-anunciada.mp3",
          "duration": 1077,
          "current_status": "Premium transcript complete",
          "url": [
            "http://www.podtrac.com/pts/redirect.mp3/feeds.soundcloud.com/stream/223925725-radioambulante-muerte-mal-anunciada.mp3"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://www.audiosear.ch/media/5cb47e72ba068e9ba61ca58e3569ddba/0/thumb/image_file/14421/mza_9122813481217228261-600x600-75.jpg",
        "full": "https://www.audiosear.ch/media/23bc3f029db1a7d8be8d68a191633df3/0/public/image_file/14421/mza_9122813481217228261-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/18214",
        "ui": "https://www.audiosear.ch/a/4726/cr-nica-de-una-muerte-mal-anunciada--chronicle-of-a-death-wrongly-foretold"
      }
    }
  },
  {
    "id": 1552,
    "source": "@iexplorer",
    "tastemaker": null,
    "text": "RT @katienotopoulos: Twitter is been deleting those shitty parody accounts. Read this: http://t.co/8MguQLAJfq\n\nAnd listen to this: https://…",
    "published": "2015-09-16T18:19:49.000Z",
    "episode": {
      "id": 18887,
      "title": "How Does A Twitter Parody Account Work And Why Are They Vanishing?",
      "show_id": 317,
      "show_title": "Internet Explorer",
      "tags": [],
      "network": "Buzzfeed",
      "audio_files": [
        {
          "id": 18677,
          "filename": "224094701-iexplorer-who-is-deleting-all-of-the-twitter-parody-accounts.mp3",
          "duration": 1839,
          "current_status": "Premium transcript complete",
          "url": [
            "http://www.Podtrac.com/pts/redirect.mp3/http://feeds.soundcloud.com/stream/224094701-iexplorer-who-is-deleting-all-of-the-twitter-parody-accounts.mp3"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://i1.sndcdn.com/avatars-000136452961-j4nztq-large.jpg",
        "full": "https://i1.sndcdn.com/avatars-000136452961-j4nztq-t500x500.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/18887",
        "ui": "https://www.audiosear.ch/a/49c7/how-does-a-twitter-parody-account-work-and-why-are-they-vanishing"
      }
    }
  },
  {
    "id": 1528,
    "source": "@audiosearchbot",
    "tastemaker": {
      "id": 2,
      "name": "The Audio Signal",
      "type_of": "newsletter",
      "identifier": "#audiosignal",
      "description": "The Audio Signal by Dana Gerber-Margie is a weekly digest about audio: 'I am an audio archivist, which means I organize, preserve, digitize, and manage sound recordings for a large historical institution. I listen to a lot archival material, podcasts, radio shows, and audiobooks, and then curate it all for you into this little thing.'",
      "link": "http://tinyletter.com/theaudiosignal/archive",
      "img_asset": "audiosignal500.png",
      "categories": [
        "71",
        "10",
        "5"
      ],
      "created_at": "2015-08-14T20:14:17.936Z",
      "updated_at": "2015-08-14T20:14:18.388Z",
      "extra": {}
    },
    "text": "https://t.co/bxb4xV72MU #audiosignal This episode takes 6 TED talks focused on our relationship to screens...",
    "published": "2015-09-16T04:18:39.000Z",
    "episode": {
      "id": 17934,
      "title": "Screen Time - Part I",
      "show_id": 355,
      "show_title": "TED Radio Hour",
      "tags": [],
      "network": "NPROne",
      "audio_files": [
        {
          "id": 17737,
          "filename": "20150910_ted_tedpodb.mp3",
          "duration": 3726,
          "current_status": "Premium transcript complete",
          "url": [
            "http://podcastdownload.npr.org/anon.npr-mp3/npr/ted/2015/09/20150910_ted_tedpodb.mp3?orgId=1&d=3713&p=510298&story=439233253&t=podcast&e=439233253&ft=pod&f=510298"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://www.audiosear.ch/media/0054de9dd48917483a13d982b90bec58/0/thumb/image_file/5025/mza_4056289010954687262-600x600-75.jpg",
        "full": "https://www.audiosear.ch/media/62b1ebccdd4a5e7907cbc229dd9c5bd1/0/public/image_file/5025/mza_4056289010954687262-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/17934",
        "ui": "https://www.audiosear.ch/a/460e/screen-time--part-i"
      }
    }
  },
  {
    "id": 1529,
    "source": "@audiosearchbot",
    "tastemaker": {
      "id": 2,
      "name": "The Audio Signal",
      "type_of": "newsletter",
      "identifier": "#audiosignal",
      "description": "The Audio Signal by Dana Gerber-Margie is a weekly digest about audio: 'I am an audio archivist, which means I organize, preserve, digitize, and manage sound recordings for a large historical institution. I listen to a lot archival material, podcasts, radio shows, and audiobooks, and then curate it all for you into this little thing.'",
      "link": "http://tinyletter.com/theaudiosignal/archive",
      "img_asset": "audiosignal500.png",
      "categories": [
        "71",
        "10",
        "5"
      ],
      "created_at": "2015-08-14T20:14:17.936Z",
      "updated_at": "2015-08-14T20:14:18.388Z",
      "extra": {}
    },
    "text": "https://t.co/pvRLCOqjGv #audiosignal [About] Wordset, a collaborative online dictionary attempting to document every version of English ever",
    "published": "2015-09-16T04:18:33.000Z",
    "episode": {
      "id": 17931,
      "title": "18. Fix part II",
      "show_id": 321,
      "show_title": "The Allusionist",
      "tags": [],
      "network": "Radiotopia",
      "audio_files": [
        {
          "id": 17734,
          "filename": "Allusionist-18-Fix-part-II.mp3",
          "duration": 891,
          "current_status": "Premium transcript complete",
          "url": [
            "http://www.podtrac.com/pts/redirect.mp3/media.blubrry.com/allusionist/cdn.allusionist.prx.org/wp-content/uploads/Allusionist-18-Fix-part-II.mp3"
          ]
        }
      ],
      "image_urls": {
        "thumb": "https://i1.sndcdn.com/avatars-000123965826-q9zyz9-large.jpg",
        "full": "https://i1.sndcdn.com/avatars-000123965826-q9zyz9-t500x500.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/17931",
        "ui": "https://www.audiosear.ch/a/460b/18-fix-part-ii"
      }
    }
  }
  ];
}