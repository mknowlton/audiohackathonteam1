'use strict';

angular.module('queueCastApp')
  .service('EpisodesService', EpisodesService);

function EpisodesService() {
	this.toView = [];

  // index of the currently playing episode
  this.epIndex = 0;

	// this.episodeQueue = [];
  this.episodeQueue = getFakeEpisodes().results;

  this.likedEpisodes = [];

  this.audioDecks = [new p5AudioElt(), new p5AudioElt()];


	//TODO: add lodash for this
	this.likeEpisode = function (id) {
		//remove from toView list
		//send to API as liked
		//deal with API response (maybe)
		//add to episodeQueue maybe
	};

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
      deck.src(episode.mp3src);
      deck.load();
      deck.time(episode.cues[0].start_time);
    }
  },

  this.playNext = function() {
    var epQueue = this.episodeQueue;
    var audioElt = this.audioDecks[epIndex % 2];

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
      var ep = this.epService.episodeQueue[this.epIndex];
      var startTime = ep.cues[cueIndex].start_time;
      var endTime = ep.cues[cueIndex].end_time;
      audioElt.time(startTime);
      audioElt.addCue(endTime, this.playNext.bind(this));
    }
    // otherwise, ...load more?
    else {
      audioElt.stop();
      alert('there are no more episodes to play');
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
	return {'results': [
      {
          "id": 17784,
          "title": "'Negroland' Author / The Subtle Things that Win Baseball Games",
          "description": "Pulitzer Prize winning cultural critic Margo Jefferson calls the region she's from, 'Negroland.'  She describes it as a 'small region of Negro America where residents were sheltered by a certain amount of privilege and plenty.'  'Negroland' is also the title of Jefferson's new memoir.  And, sportswriter Lonnie Wheeler talks about his new book 'Intangiball.'  It's about the intangible ways baseball players help their teams win.    ",
          "date_created": "2015-09-08",
          "date_added": "2015-09-09T10:16:26.382Z",
          "identifier": "3857f076-eadc-49f8-ad1d-34f5eb42a852",
          "show_id": 14,
          "show_title": "Fresh Air",
          "digital_location": "http://freshairnpr.npr.libsynfusion.com/negroland-author-the-subtle-things-that-win-baseball-games",
          "physical_location": "rss",
          "duration": 2890,
          "updated_at": "2015-09-09T20:04:25.656Z",
          "network": "WHYY",
          "categories": [
              {
                  "id": 5,
                  "parent_id": null,
                  "name": "Society & Culture",
                  "name_lc": "society & culture"
              }
          ],
          "audio_files": [
              {
                  "id": 17591,
                  "mp3": "https://www.audiosear.ch/media/dd62e55caa058546ee8d47fda65daba7/0/public/audio_file/17591/npr_438642157.mp3",
                  "ogg": "https://www.audiosear.ch/media/4a8a2e5feae7f79b66fa9046a20667dd/0/public/audio_file/17591/npr_438642157.ogg",
                  "duration": "00:48:10",
                  "url_title": "negroland-author--the-subtle-things-that-win-baseball-games",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "Moneyball",
                  "category": "entity",
                  "score": 1,
                  "type": "Movie"
              },
              {
                  "entity": "Cincinnati Reds",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "executive producer",
                  "category": "entity",
                  "score": 1,
                  "type": "Industry Term"
              },
              {
                  "entity": "cultural critic",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "FRESH AIR",
                  "category": "entity",
                  "score": 1,
                  "type": "Radio Station"
              },
              {
                  "entity": "Margo Jefferson",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Dave Davies",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Providence Hospital",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "author",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Sparky Anderson",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Jackie Robinson",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "executive producer",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Adam Dunn",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Scott Rolen",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "The New York Times",
                  "category": "entity",
                  "score": 1,
                  "type": "Company"
              },
              {
                  "entity": "Black Power",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "Marian Anderson",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Mary Evans",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "James Baldwin",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Johnny Bench",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Joe Morgan",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Providence Hospital",
                  "category": "entity",
                  "score": 1,
                  "type": "Facility"
              },
              {
                  "entity": "professor",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "The New York Times",
                  "category": "entity",
                  "score": 1,
                  "type": "Published Medium"
              },
              {
                  "entity": "Tony La Russa",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Danny Miller",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "energy",
                  "category": "entity",
                  "score": 1,
                  "type": "Industry Term"
              },
              {
                  "entity": "second baseman",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "the Times",
                  "category": "entity",
                  "score": 1,
                  "type": "Company"
              },
              {
                  "entity": "Major League Baseball",
                  "category": "entity",
                  "score": 1,
                  "type": "Sports League"
              },
              {
                  "entity": "outfielder",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Jack Clark",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "technical director",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "critic",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "America",
                  "category": "location",
                  "score": 0.936921070344715,
                  "type": "Continent"
              },
              {
                  "entity": "Africa",
                  "category": "location",
                  "score": 0.719437399704394,
                  "type": "Continent"
              },
              {
                  "entity": "Cincinnati",
                  "category": "location",
                  "score": 0.673238708390818,
                  "type": "City"
              },
              {
                  "entity": "Chicago",
                  "category": "location",
                  "score": 0.380093766715934,
                  "type": "City"
              },
              {
                  "entity": "Terry Gross",
                  "category": "entity",
                  "score": 0.380093766715934,
                  "type": "Person"
              }
          ],
          "locations": [
              {
                  "id": 400777,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/03ff2f32-7d79-3042-a299-2010505bc8fc",
                  "name": "Chicago",
                  "score": 0.380093766715934,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 17784,
                  "extra": "---\nlatitude: '41.85'\nlongitude: '-87.65'\ncountry: United States\nstate: Illinois\nrentities:\n- Populated places in the United States with African American plurality populations\n- Cities in Illinois\n- Populated places in DuPage County, Illinois\n- Port settlements in the United States\n- County seats in Illinois\n- Populated places established in 1833\n- Populated places in Cook County, Illinois\n- Irish-American culture\n- Chicago metropolitan area\n- Communities on U.S. Route 66\n- Populated places on the Great Lakes\n- Italian-American culture\n- Chicago, Illinois\n- United States places with Orthodox Jewish communities\n- Polish American history\n",
                  "created_at": "2015-09-09T18:09:27.410Z",
                  "updated_at": "2015-09-09T20:04:21.740Z"
              },
              {
                  "id": 400775,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/3584764a-2f64-3a0f-9499-208b3ce7bd6e",
                  "name": "Cincinnati",
                  "score": 0.673238708390818,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 17784,
                  "extra": "---\nlatitude: '39.1619'\nlongitude: '-84.4569'\ncountry: United States\nstate: Ohio\nrentities:\n- Populated places in the United States with African American plurality populations\n- County seats in Ohio\n- Populated places in Hamilton County, Ohio\n- Cincinnati, Ohio\n- Municipalities of Greater Cincinnati\n- Ohio populated places on the Ohio River\n- Populated places established in 1788\n- Cities in Ohio\n- German-American history\n",
                  "created_at": "2015-09-09T18:09:26.123Z",
                  "updated_at": "2015-09-09T20:04:15.059Z"
              },
              {
                  "id": 400776,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/19cc1d3f-0865-39b0-b3d6-b3739cf3e66a",
                  "name": "Africa",
                  "score": 0.719437399704394,
                  "category": "location",
                  "entity_type": "Continent",
                  "item_id": 17784,
                  "extra": "---\nrentities:\n- Continents\n- Africa\n",
                  "created_at": "2015-09-09T18:09:26.746Z",
                  "updated_at": "2015-09-09T20:04:19.258Z"
              },
              {
                  "id": 400773,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
                  "name": "America",
                  "score": 0.936921070344715,
                  "category": "location",
                  "entity_type": "Continent",
                  "item_id": 17784,
                  "extra": "---\nrentities:\n- Northern American countries\n- United States\n- 1776 establishments in the United States\n- Countries bordering the Atlantic Ocean\n- States and territories established in 1776\n- Countries bordering the Arctic Ocean\n- English-speaking countries and territories\n- Former confederations\n- Member states of the United Nations\n- Member states of NATO\n- G20 nations\n- Countries bordering the Pacific Ocean\n- Liberal democracies\n- Superpowers\n- Bicontinental countries\n- Federal countries\n- G8 nations\n",
                  "created_at": "2015-09-09T18:09:25.462Z",
                  "updated_at": "2015-09-09T20:04:12.467Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/avatars-000074965321-v9uq47-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/avatars-000074965321-v9uq47-large.jpg"
          },
          "contributors": "[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]& Marian Anderson& undefined",
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/17784",
              "ui": "https://www.audiosear.ch/a/4578/negroland-author--the-subtle-things-that-win-baseball-games"
          },
          "highlights": [
              {
                  "url": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/381444908/438642157/npr_438642157.mp3?orgId=1&d=2872&p=381444908&story=438642157&t=podcast&e=438642157&ft=pod&f=381444908",
                  "id": 17591,
                  "transcript": [
                      {
                          "text": "civil rights uproar. <em>Tumult</em> context was all",
                          "start_time": "883.826",
                          "end_time": "889.037"
                      },
                      {
                          "text": "but also whites who were part of you know the sixty's and the <em>tumult</em> and the",
                          "start_time": "1124.096",
                          "end_time": "1129.136"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "878.377",
                      "end_time": "883.797",
                      "text": "view well me feeling at the time when I first read Baldwin again in this"
                  },
                  {
                      "start_time": "883.826",
                      "end_time": "889.037",
                      "text": "civil rights uproar. Tumult context was all"
                  },
                  {
                      "start_time": "889.037",
                      "end_time": "894.426",
                      "text": "MY GOD SO many things can be said you know about what royals"
                  }
              ],
              [
                  {
                      "start_time": "1118.387",
                      "end_time": "1124.096",
                      "text": "I don't regret any of it I feel and I think many people blacks"
                  },
                  {
                      "start_time": "1124.096",
                      "end_time": "1129.136",
                      "text": "but also whites who were part of you know the sixty's and the tumult and the"
                  },
                  {
                      "start_time": "1129.137",
                      "end_time": "1134.396",
                      "text": "uproar and the multiple of is we now have around they'd say the same thing it"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/dd62e55caa058546ee8d47fda65daba7/0/public/audio_file/17591/npr_438642157.mp3",
          "cues": [
              {
                  "text": "civil rights uproar. <em>Tumult</em> context was all",
                  "start_time": "883.826",
                  "end_time": "889.037"
              },
              {
                  "text": "but also whites who were part of you know the sixty's and the <em>tumult</em> and the",
                  "start_time": "1124.096",
                  "end_time": "1129.136"
              }
          ]
      },
      {
          "id": 7117,
          "title": "The Growing Market For Organs",
          "description": "Do we know our bodiesâ€™ true value? Northeastern's Kara Swanson says the massive gap between organ supply and demand makes it much higher than we might think. \n\nFor more innovative content, follow us:\ntwitter.com/IHubRadio\nwww.facebook.com/InnovationHubradio",
          "date_created": "2015-06-18",
          "date_added": "2015-06-21T09:07:54.781Z",
          "identifier": "https://api.soundcloud.com/tracks/210888997",
          "show_id": 218,
          "show_title": "Innovation Hub",
          "tags": [
              "Kara Swanson",
              "Kidneys",
              "Organ Donation",
              "Organs",
              "PRI",
              "Transplant"
          ],
          "digital_location": "http://soundcloud.com/innovationhub/the-growing-market-for-organs",
          "physical_location": "soundcloud",
          "duration": 1016,
          "updated_at": "2015-07-27T16:28:34.244Z",
          "network": "WGBH",
          "categories": [
              {
                  "id": 8,
                  "parent_id": null,
                  "name": "Technology",
                  "name_lc": "technology"
              }
          ],
          "audio_files": [
              {
                  "id": 7116,
                  "mp3": "https://www.audiosear.ch/media/60fd0e48491f0c0e0226a80abdac7630/0/public/audio_file/7116/stream.mp3",
                  "ogg": "https://www.audiosear.ch/media/8999131c59c121f53cb38f3b8f73c587/0/public/audio_file/7116/stream.ogg",
                  "duration": "00:16:54",
                  "url_title": "the-growing-market-for-organs",
                  "listenlen": "medium"
              }
          ],
          "entities": [
              {
                  "entity": "dialysis",
                  "category": "entity",
                  "score": 1,
                  "type": "Technology"
              },
              {
                  "entity": "Health and Medical and Pharma",
                  "category": "topic",
                  "score": 1,
                  "type": null
              },
              {
                  "entity": "author",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Northeastern University",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "dialysis",
                  "category": "entity",
                  "score": 1,
                  "type": "Medical Treatment"
              },
              {
                  "entity": "surgeon",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Health",
                  "category": "topic",
                  "score": 0.913793,
                  "type": null
              },
              {
                  "entity": "Northeastern University",
                  "category": "entity",
                  "score": 0.8745,
                  "type": "Facility"
              },
              {
                  "entity": "medicine",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "kidney transplantation",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "kidney",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "organ transplantation",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "organ donation",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              }
          ],
          "topics": [
              {
                  "id": 204821,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Health",
                  "score": 0.913793,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7117,
                  "extra": "{\"original\"=>\"Health\"}",
                  "created_at": "2015-06-21T09:10:23.666Z",
                  "updated_at": "2015-06-21T09:10:23.666Z"
              },
              {
                  "id": 204820,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Health and Medical and Pharma",
                  "score": 1,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7117,
                  "extra": "{\"original\"=>\"Health_Medical_Pharma\"}",
                  "created_at": "2015-06-21T09:10:23.301Z",
                  "updated_at": "2015-06-21T09:10:23.301Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/artworks-000120616792-9wa0w9-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/artworks-000120616792-9wa0w9-large.jpg"
          },
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/7117",
              "ui": "https://www.audiosear.ch/a/1bcd/the-growing-market-for-organs"
          },
          "highlights": [
              {
                  "url": "https://api.soundcloud.com/tracks/210888997/stream?client_id=df968aa6d731e453a4a867495d1cdb4c",
                  "id": 7116,
                  "transcript": [
                      {
                          "text": "in a lot of <em>tumult</em> and controversy in that area of the market because",
                          "start_time": "640.0",
                          "end_time": "645.5"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "635.0",
                      "end_time": "640.5",
                      "text": "broken last year by several companies that are offering women money for their breast milk as an infant"
                  },
                  {
                      "start_time": "640.0",
                      "end_time": "645.5",
                      "text": "in a lot of tumult and controversy in that area of the market because"
                  },
                  {
                      "start_time": "645.0",
                      "end_time": "650.5",
                      "text": "because the market is shifting sperm donation is considered a part time job"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/60fd0e48491f0c0e0226a80abdac7630/0/public/audio_file/7116/stream.mp3",
          "cues": [
              {
                  "text": "in a lot of <em>tumult</em> and controversy in that area of the market because",
                  "start_time": "640.0",
                  "end_time": "645.5"
              }
          ]
      },
      {
          "id": 1412,
          "title": "The California Report Magazine",
          "description": "As the standoff continues in Washington, we talk about those feeling the impact of the federal government shutdown. We also discuss hunger in the Central Valley, as produce rots in the fields.",
          "date_created": "2013-10-12",
          "date_added": "2015-02-07T03:46:53.629Z",
          "identifier": "popuparchive-6128",
          "show_id": 33,
          "show_title": "The California Report",
          "digital_location": "https://www.popuparchive.com/collections/800/items/6128",
          "physical_location": "popuparchive",
          "duration": 1755,
          "updated_at": "2015-07-22T15:04:02.189Z",
          "network": "KQED",
          "categories": [
              {
                  "id": 5,
                  "parent_id": null,
                  "name": "Society & Culture",
                  "name_lc": "society & culture"
              },
              {
                  "id": 7,
                  "parent_id": null,
                  "name": "News & Politics",
                  "name_lc": "news & politics"
              }
          ],
          "audio_files": [
              {
                  "id": 1411,
                  "mp3": "https://www.audiosear.ch/media/cf83057bbdbb6709dc7f6c5dff803447/0/public/audio_file/1411/KQED_232377271.mp3",
                  "ogg": "https://www.audiosear.ch/media/13b0930b680b611016a552a7d95816c5/0/public/audio_file/1411/KQED_232377271.ogg",
                  "duration": "00:29:15",
                  "url_title": "the-california-report-magazine",
                  "listenlen": "medium"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/avatars-000115527416-oudwal-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/avatars-000115527416-oudwal-large.jpg"
          },
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/1412",
              "ui": "https://www.audiosear.ch/a/584/the-california-report-magazine"
          },
          "highlights": [
              {
                  "url": "https://www.popuparchive.com/media/audio_file/22d7/KQED_232377271.mp3",
                  "id": 1411,
                  "transcript": [
                      {
                          "text": "information. The <em>tumult</em> in Washington has also rattled investors.",
                          "start_time": "302.29",
                          "end_time": "307.19"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "297.74",
                      "end_time": "302.29",
                      "text": "aren't being issued although some banks are waiving or delaying the need for that tax"
                  },
                  {
                      "start_time": "302.29",
                      "end_time": "307.19",
                      "text": "information. The tumult in Washington has also rattled investors."
                  },
                  {
                      "start_time": "307.19",
                      "end_time": "311.73",
                      "text": "Some worry what would happen if the government gets even close to running out of money on November"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/cf83057bbdbb6709dc7f6c5dff803447/0/public/audio_file/1411/KQED_232377271.mp3",
          "cues": [
              {
                  "text": "information. The <em>tumult</em> in Washington has also rattled investors.",
                  "start_time": "302.29",
                  "end_time": "307.19"
              }
          ]
      },
      {
          "id": 18822,
          "title": "#42: Get Over It!",
          "description": "Three stories of people trying to forget the past and move on.  ",
          "date_created": "1996-11-17",
          "date_added": "2015-09-16T21:13:11.831Z",
          "identifier": "2629 at http://www.thisamericanlife.org",
          "show_id": 27,
          "show_title": "This American Life",
          "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/42/get-over-it",
          "physical_location": "rss",
          "duration": 3548,
          "updated_at": "2015-09-16T22:49:03.063Z",
          "network": "WBEZ",
          "categories": [
              {
                  "id": 71,
                  "parent_id": 6,
                  "name": "Storytelling",
                  "name_lc": "storytelling"
              }
          ],
          "audio_files": [
              {
                  "id": 18612,
                  "mp3": "https://www.audiosear.ch/media/90fe54f31df980e2c7fa13ae2b2d4a69/0/public/audio_file/18612/42.mp3",
                  "ogg": "https://www.audiosear.ch/media/6e1806fae0f809eeadaeb7793c900104/0/public/audio_file/18612/42.ogg",
                  "duration": "00:59:08",
                  "url_title": "42-get-over-it",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "forgetting the girl",
                  "category": "tag",
                  "score": 0.9,
                  "type": null
              },
              {
                  "entity": "Business & Finance",
                  "category": "topic",
                  "score": 0.655,
                  "type": null
              }
          ],
          "topics": [
              {
                  "id": 408540,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Business & Finance",
                  "score": 0.655,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 18822,
                  "extra": "---\noriginal: Business_Finance\nrentities:\n- Irish magazines\n- Publications established in 1964\n- Business magazines\n",
                  "created_at": "2015-09-16T22:42:02.217Z",
                  "updated_at": "2015-09-16T22:49:02.911Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-large.jpg"
          },
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/18822",
              "ui": "https://www.audiosear.ch/a/4986/42-get-over-it"
          },
          "highlights": [
              {
                  "url": "http://hackathon-audio.thisamericanlife.org/audio/42/42.mp3",
                  "id": 18612,
                  "transcript": [
                      {
                          "text": "I haul my stuff over to her place and take what I need. I edit out her mastectomy, Ken Schwartz's midlife crisis and resulting trip to Florida, and her constant drinking in his absence. I stick to her walking past a protest and counseling a skinny girl on acid to stay in school. It's not great, but I've got a deadline. I call it America in <em>Tumult</em>, The Older Generation Looks On in Dismay. I have it couriered over to Briff, dreading her response.",
                          "start_time": "2197.92",
                          "end_time": "2222.4"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "2174.5",
                      "end_time": "2197.92",
                      "text": "Two weeks later, Briff's on my tail for more modules, and Wei's on my tail for her pay. I tell Mrs. Ken Schwartz all during one of her 15-minute windows of lucidity. When lucid, she's shrewd and bright. She understands her predicament. She understands the limitations of my gear. She understands that I can't borrow her memories, only take them away forever. She says she can live without the '60s."
                  },
                  {
                      "start_time": "2197.92",
                      "end_time": "2222.4",
                      "text": "I haul my stuff over to her place and take what I need. I edit out her mastectomy, Ken Schwartz's midlife crisis and resulting trip to Florida, and her constant drinking in his absence. I stick to her walking past a protest and counseling a skinny girl on acid to stay in school. It's not great, but I've got a deadline. I call it America in Tumult, The Older Generation Looks On in Dismay. I have it couriered over to Briff, dreading her response."
                  },
                  {
                      "start_time": "2222.4",
                      "end_time": "2237.44",
                      "text": "But to my amazement, she sends a cash bonus. she reports astounding increases in grandparental bonding. She reports kids identifying a Mercury Cougar with no prompting and disgustedly calling each other Nixon whenever a trust is betrayed."
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/90fe54f31df980e2c7fa13ae2b2d4a69/0/public/audio_file/18612/42.mp3",
          "cues": [
              {
                  "text": "I haul my stuff over to her place and take what I need. I edit out her mastectomy, Ken Schwartz's midlife crisis and resulting trip to Florida, and her constant drinking in his absence. I stick to her walking past a protest and counseling a skinny girl on acid to stay in school. It's not great, but I've got a deadline. I call it America in <em>Tumult</em>, The Older Generation Looks On in Dismay. I have it couriered over to Briff, dreading her response.",
                  "start_time": "2197.92",
                  "end_time": "2222.4"
              }
          ]
      },
      {
          "id": 18619,
          "title": "#245: Allure of the Mean Friend",
          "description": "What is it about them, our mean friends? They treat us badly, they don't call us back, they cancel plans at the last minute, and yet we come back for more. Popular bullies exist in business, politics, everywhere. How do they stay so popular?  ",
          "date_created": "2003-09-07",
          "date_added": "2015-09-16T21:11:28.099Z",
          "identifier": "2819 at http://www.thisamericanlife.org",
          "show_id": 27,
          "show_title": "This American Life",
          "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/245/allure-of-the-mean-friend",
          "physical_location": "rss",
          "duration": 3540,
          "updated_at": "2015-09-16T22:48:14.771Z",
          "network": "WBEZ",
          "categories": [
              {
                  "id": 71,
                  "parent_id": 6,
                  "name": "Storytelling",
                  "name_lc": "storytelling"
              }
          ],
          "audio_files": [
              {
                  "id": 18409,
                  "mp3": "https://www.audiosear.ch/media/8a87fed4bf7efb38230dece203f1abb0/0/public/audio_file/18409/245.mp3",
                  "ogg": "https://www.audiosear.ch/media/fa09bb8c9564444f0520b231adca0e0a/0/public/audio_file/18409/245.ogg",
                  "duration": "00:59:00",
                  "url_title": "245-allure-of-the-mean-friend",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "Social Issues",
                  "category": "topic",
                  "score": 0.997,
                  "type": null
              }
          ],
          "topics": [
              {
                  "id": 408289,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Social Issues",
                  "score": 0.997,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 18619,
                  "extra": "---\noriginal: Social Issues\nrentities:\n- Conservatism-related lists\n- Social philosophy\n- Conservatism\n- Social policy\n- Political science terms\n",
                  "created_at": "2015-09-16T22:41:20.209Z",
                  "updated_at": "2015-09-16T22:48:14.626Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-large.jpg"
          },
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/18619",
              "ui": "https://www.audiosear.ch/a/48bb/245-allure-of-the-mean-friend"
          },
          "highlights": [
              {
                  "url": "http://hackathon-audio.thisamericanlife.org/audio/245/245.mp3",
                  "id": 18409,
                  "transcript": [
                      {
                          "text": "The total was somewhere in the neighborhood of $2 million, an especially hefty sum in 1978. I remember being impressed by the amount. What an expensive life I'd lived. I was shocked and insulted too, of course, not only because my father had made such a calculation but because my life could be added up or reduced to a single figure. To see your existence in the form of a bill gives all your loves and fears and struggles, the cumulative <em>tumult</em> of being human, about as much poignancy as a check for a cup of coffee.",
                          "start_time": "2389.07",
                          "end_time": "2425.23"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "2352.49",
                      "end_time": "2389.07",
                      "text": " When I was 28 years old, my father sent me a bill for his paternal services. Typed on his law firm's onion-skin stationery, the bill itemized the money he'd spent on me over my lifetime. Since he hadn't kept tabs on the exact amounts he'd doled out over the years, expenditures were rounded off to the nearest dollar and labeled &quot;Food,&quot; &quot;Clothing,&quot; &quot;Tuition,&quot; and &quot;Incidentals.&quot; Beneath the tally, in the firm but detached language common to his profession, he demanded that I pay him back."
                  },
                  {
                      "start_time": "2389.07",
                      "end_time": "2425.23",
                      "text": "The total was somewhere in the neighborhood of $2 million, an especially hefty sum in 1978. I remember being impressed by the amount. What an expensive life I'd lived. I was shocked and insulted too, of course, not only because my father had made such a calculation but because my life could be added up or reduced to a single figure. To see your existence in the form of a bill gives all your loves and fears and struggles, the cumulative tumult of being human, about as much poignancy as a check for a cup of coffee."
                  },
                  {
                      "start_time": "2425.23",
                      "end_time": "2459.78",
                      "text": "It read, &quot;Your obligations to your father, the party of the first part, are considerable. And the only way to impress upon you, the party of the second part, the necessity of compensating him for the fiscal burdens he bore in your behalf is to make his sacrifices evident in the form of the following, recorded herein as a legal and binding document. Should you fail to make payment in full, this matter will result in actions for which I advise you to hire counsel.&quot; I double-checked his signature. It was his, all right. The letters rich with loops and convolutions."
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/8a87fed4bf7efb38230dece203f1abb0/0/public/audio_file/18409/245.mp3",
          "cues": [
              {
                  "text": "The total was somewhere in the neighborhood of $2 million, an especially hefty sum in 1978. I remember being impressed by the amount. What an expensive life I'd lived. I was shocked and insulted too, of course, not only because my father had made such a calculation but because my life could be added up or reduced to a single figure. To see your existence in the form of a bill gives all your loves and fears and struggles, the cumulative <em>tumult</em> of being human, about as much poignancy as a check for a cup of coffee.",
                  "start_time": "2389.07",
                  "end_time": "2425.23"
              }
          ]
      },
      {
          "id": 7092,
          "title": "6.20.15 It's Complicated",
          "description": "This week, our guests shun simple explanations. Film and media studies professor Jason Mittell reveals why we can actually handle more complexity in our television shows than ever before, despite our shorter attention spans. Planetary scientist Jim Bell predicts the possibility of everyman space travel. And, finally, Northeastern's Kara Swanson makes the case for one of the most controversial markets yet â€” the free buying and selling of human organs. For a fresh take on what you thought you knew, tune into our show on complexity. \n\nFor more innovative content, follow us:\ntwitter.com/IHubRadio\nwww.facebook.com/InnovationHubradio",
          "date_created": "2015-06-19",
          "date_added": "2015-06-20T09:08:28.791Z",
          "identifier": "https://api.soundcloud.com/tracks/211044813",
          "show_id": 218,
          "show_title": "Innovation Hub",
          "tags": [
              "It's Complicated",
              "Jason Mittell",
              "Jim Bell",
              "Kara Swanson",
              "Organs",
              "PRI",
              "Remote Control",
              "Space",
              "Television"
          ],
          "digital_location": "http://soundcloud.com/innovationhub/62015-its-complicated",
          "physical_location": "soundcloud",
          "duration": 2891,
          "updated_at": "2015-07-27T16:28:30.150Z",
          "network": "WGBH",
          "categories": [
              {
                  "id": 8,
                  "parent_id": null,
                  "name": "Technology",
                  "name_lc": "technology"
              }
          ],
          "audio_files": [
              {
                  "id": 7091,
                  "mp3": "https://www.audiosear.ch/media/9bff003301a8cc0e0b4180ae34f37d47/0/public/audio_file/7091/stream.mp3",
                  "ogg": "https://www.audiosear.ch/media/8b8aadc70d94fd64f49cb8e2957f3c0e/0/public/audio_file/7091/stream.ogg",
                  "duration": "00:48:10",
                  "url_title": "6-20-15-it-s-complicated",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "author",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Entertainment and Culture",
                  "category": "topic",
                  "score": 1,
                  "type": null
              },
              {
                  "entity": "WGBH",
                  "category": "entity",
                  "score": 1,
                  "type": "Radio Station"
              },
              {
                  "entity": "College Board",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "The Andy Griffith Show",
                  "category": "entity",
                  "score": 1,
                  "type": "Tv Show"
              },
              {
                  "entity": "professor",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "WGBH",
                  "category": "entity",
                  "score": 1,
                  "type": "Tv Station"
              },
              {
                  "entity": "animation",
                  "category": "entity",
                  "score": 1,
                  "type": "Technology"
              },
              {
                  "entity": "College Board",
                  "category": "entity",
                  "score": 1,
                  "type": "Facility"
              },
              {
                  "entity": "Middlebury College",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "Television",
                  "category": "topic",
                  "score": 0.991643,
                  "type": null
              },
              {
                  "entity": "Arts and Entertainment",
                  "category": "topic",
                  "score": 0.987952,
                  "type": null
              },
              {
                  "entity": "Jason Mittell",
                  "category": "entity",
                  "score": 0.9715,
                  "type": "Person"
              },
              {
                  "entity": "Media",
                  "category": "topic",
                  "score": 0.967901,
                  "type": null
              },
              {
                  "entity": "Jim Bell",
                  "category": "entity",
                  "score": 0.8215,
                  "type": "Person"
              },
              {
                  "entity": "complexity",
                  "category": "entity",
                  "score": 0.62,
                  "type": null
              },
              {
                  "entity": "television",
                  "category": "entity",
                  "score": 0.596,
                  "type": null
              },
              {
                  "entity": "film",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "fiction",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "fitbit",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "jason mittell",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              },
              {
                  "entity": "technology",
                  "category": "tag",
                  "score": 0.5,
                  "type": null
              }
          ],
          "topics": [
              {
                  "id": 204553,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Media",
                  "score": 0.967901,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7092,
                  "extra": "{\"original\"=>\"Media\"}",
                  "created_at": "2015-06-20T09:56:57.387Z",
                  "updated_at": "2015-06-20T09:56:57.387Z"
              },
              {
                  "id": 204551,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Arts and Entertainment",
                  "score": 0.987952,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7092,
                  "extra": "{\"original\"=>\"Arts & Entertainment\"}",
                  "created_at": "2015-06-20T09:56:57.048Z",
                  "updated_at": "2015-06-20T09:56:57.048Z"
              },
              {
                  "id": 204549,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Television",
                  "score": 0.991643,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7092,
                  "extra": "{\"original\"=>\"Television\"}",
                  "created_at": "2015-06-20T09:56:56.704Z",
                  "updated_at": "2015-06-20T09:56:56.704Z"
              },
              {
                  "id": 204548,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Entertainment and Culture",
                  "score": 1,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7092,
                  "extra": "{\"original\"=>\"Entertainment_Culture\"}",
                  "created_at": "2015-06-20T09:56:56.357Z",
                  "updated_at": "2015-06-20T09:56:56.357Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/artworks-000120723323-apwi6o-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/artworks-000120723323-apwi6o-large.jpg"
          },
          "contributors": [
              {
                  "role": "mentioned",
                  "slug": "jasonmittell",
                  "name": "Jason Mittell",
                  "person_id": 10895,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/10895",
                      "ui": "https://www.audiosear.ch/people/j#jasonmittell"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "jimbell",
                  "name": "Jim Bell",
                  "person_id": 10948,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/10948",
                      "ui": "https://www.audiosear.ch/people/j#jimbell"
                  }
              }
          ],
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/7092",
              "ui": "https://www.audiosear.ch/a/1bb4/6-20-15-it-s-complicated"
          },
          "highlights": [
              {
                  "url": "https://api.soundcloud.com/tracks/211044813/stream?client_id=df968aa6d731e453a4a867495d1cdb4c",
                  "id": 7091,
                  "transcript": [
                      {
                          "text": "are there breast milk acidic than a lot of <em>tumult</em> and controversy in that area of",
                          "start_time": "2475.0",
                          "end_time": "2480.5"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "2470.0",
                      "end_time": "2475.5",
                      "text": "but that enormous being broken in the last year by several companies that are offering women money for their breath"
                  },
                  {
                      "start_time": "2475.0",
                      "end_time": "2480.5",
                      "text": "are there breast milk acidic than a lot of tumult and controversy in that area of"
                  },
                  {
                      "start_time": "2480.0",
                      "end_time": "2485.5",
                      "text": "the market because the market is shifting sperm donation is considered"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/9bff003301a8cc0e0b4180ae34f37d47/0/public/audio_file/7091/stream.mp3",
          "cues": [
              {
                  "text": "are there breast milk acidic than a lot of <em>tumult</em> and controversy in that area of",
                  "start_time": "2475.0",
                  "end_time": "2480.5"
              }
          ]
      },
      {
          "id": 7740,
          "title": "Key & Peele And Pop Culture Critters",
          "description": "This week on Pop Culture Happy Hour, NPR Monkey See's Linda Holmes, Glen Weldon, Stephen Thompson and Code Switch's Gene Demby talk about the sketch comedy show Key &amp; Peele. Plus, Minions opens this weekend, so the gang decides to talk about pop culture critters, including Ewoks, Gremlins, and and more. All that, plus What's Making Us Happy.",
          "date_created": "2015-07-10",
          "date_added": "2015-07-10T10:01:15.007Z",
          "identifier": "de0fa9ce-256e-4c22-9a56-ac381f7ac233",
          "show_id": 382,
          "show_title": "Pop Culture Happy Hour",
          "digital_location": "http://podcastdownload.npr.org/anon.npr-mp3/npr/pchh/2015/07/20150710_pchh_251.mp3?orgId=1&d=2477&p=510282&story=421578337&t=podcast&e=421578337&ft=pod&f=510282",
          "physical_location": "rss",
          "duration": 2477,
          "updated_at": "2015-09-04T04:32:29.349Z",
          "network": "NPR",
          "categories": [
              {
                  "id": 26,
                  "parent_id": 6,
                  "name": "TV & Film",
                  "name_lc": "tv & film"
              },
              {
                  "id": 11,
                  "parent_id": 6,
                  "name": "Arts",
                  "name_lc": "arts"
              },
              {
                  "id": 16,
                  "parent_id": 6,
                  "name": "Music",
                  "name_lc": "music"
              },
              {
                  "id": 5,
                  "parent_id": null,
                  "name": "Society & Culture",
                  "name_lc": "society & culture"
              }
          ],
          "audio_files": [
              {
                  "id": 7736,
                  "mp3": "https://www.audiosear.ch/media/7effc01785a2ab8a7e12c2435df6fd5e/0/public/audio_file/7736/20150710_pchh_251.mp3",
                  "ogg": "https://www.audiosear.ch/media/74fd26c88458c69fa21d9bfa68603a34/0/public/audio_file/7736/20150710_pchh_251.ogg",
                  "duration": "00:41:17",
                  "url_title": "key--peele-and-pop-culture-critters",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "the New York Times",
                  "category": "entity",
                  "score": 1,
                  "type": "Company"
              },
              {
                  "entity": "Mira Nair",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "N.B.A.",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "Jean Grey",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Magic Johnson",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Detective",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Pepsi",
                  "category": "entity",
                  "score": 1,
                  "type": "Company"
              },
              {
                  "entity": "Kristen Schaal",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "traffic reporter",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Entertainment & Culture",
                  "category": "topic",
                  "score": 1,
                  "type": null
              },
              {
                  "entity": "Linda Holmes",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Morton Downey Jr",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Malcolm Barrett",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Monica Lewinsky",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "first lady",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Rat",
                  "category": "entity",
                  "score": 1,
                  "type": "Music Group"
              },
              {
                  "entity": "rapper",
                  "category": "entity",
                  "score": 1,
                  "type": "Position"
              },
              {
                  "entity": "Central Intelligence Agency",
                  "category": "entity",
                  "score": 1,
                  "type": "Organization"
              },
              {
                  "entity": "the New York Times",
                  "category": "entity",
                  "score": 1,
                  "type": "Published Medium"
              },
              {
                  "entity": "Mike Katz",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "Michael Jordan",
                  "category": "entity",
                  "score": 1,
                  "type": "Person"
              },
              {
                  "entity": "True Detective",
                  "category": "entity",
                  "score": 1,
                  "type": "Published Medium"
              },
              {
                  "entity": "Arts and Entertainment",
                  "category": "topic",
                  "score": 0.987952,
                  "type": null
              },
              {
                  "entity": "Media",
                  "category": "topic",
                  "score": 0.967901,
                  "type": null
              },
              {
                  "entity": "Jordan Peele",
                  "category": "entity",
                  "score": 0.94,
                  "type": "Person"
              },
              {
                  "entity": "sketch comedy show",
                  "category": "entity",
                  "score": 0.772,
                  "type": null
              },
              {
                  "entity": "Michigan",
                  "category": "location",
                  "score": 0.373114300021637,
                  "type": "Province Or State"
              },
              {
                  "entity": "Detroit",
                  "category": "location",
                  "score": 0.235408913366638,
                  "type": "City"
              },
              {
                  "entity": "America",
                  "category": "location",
                  "score": 0.235408913366638,
                  "type": "Continent"
              },
              {
                  "entity": "Chicago",
                  "category": "location",
                  "score": 0.235408913366638,
                  "type": "City"
              }
          ],
          "locations": [
              {
                  "id": 215511,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/03ff2f32-7d79-3042-a299-2010505bc8fc",
                  "name": "Chicago",
                  "score": 0.235408913366638,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 7740,
                  "extra": "{\"latitude\"=>\"41.85\", \"longitude\"=>\"-87.65\", \"country\"=>\"United States\", \"state\"=>\"Illinois\"}",
                  "created_at": "2015-07-10T10:43:01.974Z",
                  "updated_at": "2015-07-10T10:43:01.974Z"
              },
              {
                  "id": 215510,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/257faf86-7647-35aa-8e3b-267ccc0e8857",
                  "name": "Detroit",
                  "score": 0.235408913366638,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 7740,
                  "extra": "{\"latitude\"=>\"42.3314\", \"longitude\"=>\"-83.0458\", \"country\"=>\"United States\", \"state\"=>\"Michigan\"}",
                  "created_at": "2015-07-10T10:43:01.515Z",
                  "updated_at": "2015-07-10T10:43:01.515Z"
              },
              {
                  "id": 215509,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/de9fa9e7-565a-3d76-beab-7e6363548235",
                  "name": "Michigan",
                  "score": 0.373114300021637,
                  "category": "location",
                  "entity_type": "Province Or State",
                  "item_id": 7740,
                  "extra": "{\"latitude\"=>\"43.6867450175\", \"longitude\"=>\"-85.0101500936\", \"country\"=>\"United States\"}",
                  "created_at": "2015-07-10T10:43:01.122Z",
                  "updated_at": "2015-07-10T10:43:01.122Z"
              },
              {
                  "id": 215508,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
                  "name": "America",
                  "score": 0.235408913366638,
                  "category": "location",
                  "entity_type": "Continent",
                  "item_id": 7740,
                  "extra": "{}",
                  "created_at": "2015-07-10T10:43:00.719Z",
                  "updated_at": "2015-07-10T10:43:00.719Z"
              }
          ],
          "topics": [
              {
                  "id": 215517,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Media",
                  "score": 0.967901,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7740,
                  "extra": "{\"original\"=>\"Media\"}",
                  "created_at": "2015-07-10T10:43:04.520Z",
                  "updated_at": "2015-07-10T10:43:04.520Z"
              },
              {
                  "id": 215516,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Arts and Entertainment",
                  "score": 0.987952,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7740,
                  "extra": "{\"original\"=>\"Arts & Entertainment\"}",
                  "created_at": "2015-07-10T10:43:04.198Z",
                  "updated_at": "2015-07-10T10:43:04.198Z"
              },
              {
                  "id": 215514,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Entertainment & Culture",
                  "score": 1,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 7740,
                  "extra": "{\"original\"=>\"Entertainment_Culture\"}",
                  "created_at": "2015-07-10T10:43:03.875Z",
                  "updated_at": "2015-07-10T10:43:03.875Z"
              }
          ],
          "image_urls": {
              "full": "https://www.audiosear.ch/media/0c78e61003a1be1ab83b4d7d72509d73/0/public/image_file/5079/mza_3388377711187959654-600x600-75.jpg",
              "thumb": "https://www.audiosear.ch/media/e8f424b048998f82528d47f0758c294b/0/thumb/image_file/5079/mza_3388377711187959654-600x600-75.jpg"
          },
          "contributors": [
              {
                  "role": "mentioned",
                  "slug": "jeangrey",
                  "name": "Jean Grey",
                  "person_id": 5894,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/5894",
                      "ui": "https://www.audiosear.ch/people/j#jeangrey"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "kristenschaal",
                  "name": "Kristen Schaal",
                  "person_id": 4959,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/4959",
                      "ui": "https://www.audiosear.ch/people/k#kristenschaal"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "monicalewinsky",
                  "name": "Monica Lewinsky",
                  "person_id": 2342,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/2342",
                      "ui": "https://www.audiosear.ch/people/m#monicalewinsky"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "michaeljordan",
                  "name": "Michael Jordan",
                  "person_id": 787,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/787",
                      "ui": "https://www.audiosear.ch/people/m#michaeljordan"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "lindaholmes",
                  "name": "Linda Holmes",
                  "person_id": 528,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/528",
                      "ui": "https://www.audiosear.ch/people/l#lindaholmes"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "malcolmbarrett",
                  "name": "Malcolm Barrett",
                  "person_id": 11806,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/11806",
                      "ui": "https://www.audiosear.ch/people/m#malcolmbarrett"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "mortondowneyjr",
                  "name": "Morton Downey Jr",
                  "person_id": 11805,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/11805",
                      "ui": "https://www.audiosear.ch/people/m#mortondowneyjr"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "jordanpeele",
                  "name": "Jordan Peele",
                  "person_id": 11804,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/11804",
                      "ui": "https://www.audiosear.ch/people/j#jordanpeele"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "mikekatz",
                  "name": "Mike Katz",
                  "person_id": 11085,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/11085",
                      "ui": "https://www.audiosear.ch/people/m#mikekatz"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "miranair",
                  "name": "Mira Nair",
                  "person_id": 9075,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/9075",
                      "ui": "https://www.audiosear.ch/people/m#miranair"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "magicjohnson",
                  "name": "Magic Johnson",
                  "person_id": 2973,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/2973",
                      "ui": "https://www.audiosear.ch/people/m#magicjohnson"
                  }
              }
          ],
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/7740",
              "ui": "https://www.audiosear.ch/a/1e3c/key--peele-and-pop-culture-critters"
          },
          "highlights": [
              {
                  "url": "http://podcastdownload.npr.org/anon.npr-mp3/npr/pchh/2015/07/20150710_pchh_251.mp3?orgId=1&d=2477&p=510282&story=421578337&t=podcast&e=421578337&ft=pod&f=510282",
                  "id": 7736,
                  "transcript": [
                      {
                          "text": "moments of quite <em>tumult</em> and I think it really works yeah",
                          "start_time": "613.778",
                          "end_time": "617.668"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "608.867",
                      "end_time": "613.778",
                      "text": "scripted but they're also improbable bit and it's quiet it's"
                  },
                  {
                      "start_time": "613.778",
                      "end_time": "617.668",
                      "text": "moments of quite tumult and I think it really works yeah"
                  },
                  {
                      "start_time": "617.668",
                      "end_time": "622.348",
                      "text": ". I think for me one of the sketches in the early going of the season that I really like involves a"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/7effc01785a2ab8a7e12c2435df6fd5e/0/public/audio_file/7736/20150710_pchh_251.mp3",
          "cues": [
              {
                  "text": "moments of quite <em>tumult</em> and I think it really works yeah",
                  "start_time": "613.778",
                  "end_time": "617.668"
              }
          ]
      },
      {
          "id": 6491,
          "title": "Pico Iyer â€” The Art of Stillness",
          "description": "Journalist, novelist and travel writer Pico Iyer has become one of our most eloquent explorers of what he calls the \"inner world\" â€” in himself and in the 21st Century world at large. He travels the globe from Ethiopia to North Korea and lives in Japan. But he also experiences a remote Benedictine hermitage as his second home, retreating there many times each year. In this intimate conversation, we explore the discoveries he's making and his practice of \"the art of stillness.â€\n\nSee more at www.onbeing.org/program/pico-iyer-the-art-of-stillness/7615\n",
          "date_created": "2015-06-03",
          "date_added": "2015-06-04T09:11:39.354Z",
          "identifier": "https://api.soundcloud.com/tracks/208681873",
          "show_id": 339,
          "show_title": "On Being",
          "tags": [
              "Dalai Lama",
              "Happiness",
              "Public Radio",
              "business",
              "kindness",
              "stillness",
              "technology",
              "travel",
              "writing"
          ],
          "digital_location": "http://soundcloud.com/onbeing/pico-iyer-the-art-of-stillness",
          "physical_location": "soundcloud",
          "duration": 3061,
          "updated_at": "2015-09-04T06:12:21.462Z",
          "network": "APM",
          "categories": [
              {
                  "id": 71,
                  "parent_id": 6,
                  "name": "Storytelling",
                  "name_lc": "storytelling"
              },
              {
                  "id": 5,
                  "parent_id": null,
                  "name": "Society & Culture",
                  "name_lc": "society & culture"
              }
          ],
          "audio_files": [
              {
                  "id": 6490,
                  "mp3": "https://www.audiosear.ch/media/ee5b06da1e7aea85a086bf8bf03bc475/0/public/audio_file/6490/stream.mp3",
                  "ogg": "https://www.audiosear.ch/media/b84946bab5ad4cfe2765e6f1d7a8cdff/0/public/audio_file/6490/stream.ogg",
                  "duration": "00:51:00",
                  "url_title": "pico-iyer--the-art-of-stillness",
                  "listenlen": "long"
              }
          ],
          "entities": [
              {
                  "entity": "Religion and Beliefs",
                  "category": "topic",
                  "score": 0.903846,
                  "type": null
              },
              {
                  "entity": "Japan",
                  "category": "location",
                  "score": 0.863675712538263,
                  "type": "Country"
              },
              {
                  "entity": "Society and Culture",
                  "category": "topic",
                  "score": 0.837302,
                  "type": null
              },
              {
                  "entity": "New York",
                  "category": "location",
                  "score": 0.734361135573556,
                  "type": "City"
              },
              {
                  "entity": "writer",
                  "category": "entity",
                  "score": 0.620607156335856,
                  "type": "Position"
              },
              {
                  "entity": "Books and Publishing",
                  "category": "topic",
                  "score": 0.616162,
                  "type": null
              },
              {
                  "entity": "Japan",
                  "category": "entity",
                  "score": 0.608027701626937,
                  "type": "Place"
              },
              {
                  "entity": "Dalai Lama",
                  "category": "entity",
                  "score": 0.606856958723269,
                  "type": "Person"
              },
              {
                  "entity": "Buddhism",
                  "category": "topic",
                  "score": 0.6,
                  "type": null
              },
              {
                  "entity": "India",
                  "category": "location",
                  "score": 0.571444035879715,
                  "type": "Country"
              },
              {
                  "entity": "America",
                  "category": "location",
                  "score": 0.571444035879715,
                  "type": "Continent"
              },
              {
                  "entity": "Human Interest",
                  "category": "topic",
                  "score": 0.54,
                  "type": null
              },
              {
                  "entity": "Pico Iyer",
                  "category": "entity",
                  "score": 0.533871321639871,
                  "type": "Person"
              },
              {
                  "entity": "California",
                  "category": "location",
                  "score": 0.513296406116052,
                  "type": "Province Or State"
              },
              {
                  "entity": "Krista Tippett",
                  "category": "entity",
                  "score": 0.465046543941143,
                  "type": "Person"
              },
              {
                  "entity": "The New York Times",
                  "category": "entity",
                  "score": 0.442129458915007,
                  "type": "Company"
              },
              {
                  "entity": "New York City",
                  "category": "location",
                  "score": 0.442129458915007,
                  "type": "City"
              },
              {
                  "entity": "The New York Times",
                  "category": "entity",
                  "score": 0.442129458915007,
                  "type": "Published Medium"
              },
              {
                  "entity": "Kyoto",
                  "category": "location",
                  "score": 0.350379306422211,
                  "type": "City"
              },
              {
                  "entity": "Leonard Cohen",
                  "category": "entity",
                  "score": 0.350379306422211,
                  "type": "Person"
              },
              {
                  "entity": "journalist",
                  "category": "entity",
                  "score": 0.350379306422211,
                  "type": "Position"
              },
              {
                  "entity": "Tibet",
                  "category": "location",
                  "score": 0.350379306422211,
                  "type": "Country"
              },
              {
                  "entity": "teacher",
                  "category": "entity",
                  "score": 0.350379306422211,
                  "type": "Position"
              },
              {
                  "entity": "Thomas Merton",
                  "category": "entity",
                  "score": 0.221064729457504,
                  "type": "Person"
              },
              {
                  "entity": "Pacific Ocean",
                  "category": "location",
                  "score": 0.221064729457504,
                  "type": "Natural Feature"
              },
              {
                  "entity": "Graham Greene",
                  "category": "entity",
                  "score": 0.221064729457504,
                  "type": "Person"
              },
              {
                  "entity": "Los Angeles",
                  "category": "location",
                  "score": 0.221064729457504,
                  "type": "City"
              },
              {
                  "entity": "the Guardian",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Company"
              },
              {
                  "entity": "Fetzer Institute",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Organization"
              },
              {
                  "entity": "the Guardian",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Published Medium"
              },
              {
                  "entity": "American Public Media",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Company"
              },
              {
                  "entity": "the Global Times",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Published Medium"
              },
              {
                  "entity": "Rumi",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Person"
              },
              {
                  "entity": "energy",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Industry Term"
              },
              {
                  "entity": "New York Public Library",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Facility"
              },
              {
                  "entity": "electricity",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Industry Term"
              },
              {
                  "entity": "Henry David Thoreau",
                  "category": "entity",
                  "score": 0.0434782608695652,
                  "type": "Person"
              }
          ],
          "locations": [
              {
                  "id": 197059,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/69b2e356-c1e7-3f3b-bab3-676f21d08e4d",
                  "name": "India",
                  "score": 0.571444035879715,
                  "category": "location",
                  "entity_type": "Country",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '21.7678895778'\nlongitude: '78.8717605778'\n",
                  "created_at": "2015-06-04T09:42:23.566Z",
                  "updated_at": "2015-06-04T09:42:23.566Z"
              },
              {
                  "id": 197058,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/9679b237-33e8-3478-ba13-d9af3c4b943e",
                  "name": "California",
                  "score": 0.513296406116052,
                  "category": "location",
                  "entity_type": "Province Or State",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '36.4885198674'\nlongitude: '-119.701379437'\ncountry: United States\n",
                  "created_at": "2015-06-04T09:42:23.128Z",
                  "updated_at": "2015-06-04T09:42:23.128Z"
              },
              {
                  "id": 197057,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/7fa5cd67-87cb-3ac3-8eea-52049b2b17df",
                  "name": "Tibet",
                  "score": 0.350379306422211,
                  "category": "location",
                  "entity_type": "Country",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '29.65'\nlongitude: '91.116667'\n",
                  "created_at": "2015-06-04T09:42:22.723Z",
                  "updated_at": "2015-06-04T09:42:22.723Z"
              },
              {
                  "id": 197056,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/83519291-578e-3651-9517-b86e5d5df944",
                  "name": "New York City",
                  "score": 0.442129458915007,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '40.7142'\nlongitude: '-74.0064'\ncountry: United States\nstate: New York\n",
                  "created_at": "2015-06-04T09:42:22.235Z",
                  "updated_at": "2015-06-04T09:42:22.235Z"
              },
              {
                  "id": 197055,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/5c22d30d-9d2e-394b-ab56-dac9fc899ac9",
                  "name": "Pacific Ocean",
                  "score": 0.221064729457504,
                  "category": "location",
                  "entity_type": "Natural Feature",
                  "item_id": 6491,
                  "extra": "---\nmatches:\n- detection: |-\n    [and beyond just this great blue expanse of ]the Pacific Ocean[\n    and somehow almost immediately it was as if a]\n  prefix: 'and beyond just this great blue expanse of '\n  exact: the Pacific Ocean\n  suffix: |2-\n\n    and somehow almost immediately it was as if a\n  offset: 14558\n  length: 17\n- detection: |-\n    [feet and she enjoys a\n    beautiful view over ]the Pacific Ocean[ and to anybody looking at her house.\n    They would]\n  prefix: \"feet and she enjoys a\\nbeautiful view over \"\n  exact: the Pacific Ocean\n  suffix: |2-\n     and to anybody looking at her house.\n    They would\n  offset: 16040\n  length: 17\n",
                  "created_at": "2015-06-04T09:42:21.779Z",
                  "updated_at": "2015-06-04T09:42:21.779Z"
              },
              {
                  "id": 197054,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/874eaab9-7b66-36e3-9650-8de7a5001cf9",
                  "name": "Los Angeles",
                  "score": 0.221064729457504,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '34.0522'\nlongitude: '-118.2428'\ncountry: United States\nstate: California\n",
                  "created_at": "2015-06-04T09:42:21.375Z",
                  "updated_at": "2015-06-04T09:42:21.375Z"
              },
              {
                  "id": 197053,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/ed1c9b63-4b8e-311f-b8db-0f90ea812660",
                  "name": "Japan",
                  "score": 0.863675712538263,
                  "category": "location",
                  "entity_type": "Country",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '35.4111749285'\nlongitude: '135.833685568'\n",
                  "created_at": "2015-06-04T09:42:20.927Z",
                  "updated_at": "2015-06-04T09:42:20.927Z"
              },
              {
                  "id": 197052,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/b578a157-c8b9-3c50-80fa-551455bc0eb5",
                  "name": "Kyoto",
                  "score": 0.350379306422211,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 6491,
                  "extra": "---\nlatitude: '35.0'\nlongitude: '135.75'\ncountry: Japan\nstate: Kyoto Prefecture\n",
                  "created_at": "2015-06-04T09:42:20.478Z",
                  "updated_at": "2015-06-04T09:42:20.478Z"
              },
              {
                  "id": 197051,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/9f45e0f5-aa73-39b8-b39e-2a1546da820a",
                  "name": "New York",
                  "score": 0.734361135573556,
                  "category": "location",
                  "entity_type": "City",
                  "item_id": 6491,
                  "extra": "--- {}\n",
                  "created_at": "2015-06-04T09:42:20.031Z",
                  "updated_at": "2015-06-04T09:42:20.031Z"
              },
              {
                  "id": 197050,
                  "is_confirmed": false,
                  "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
                  "name": "America",
                  "score": 0.571444035879715,
                  "category": "location",
                  "entity_type": "Continent",
                  "item_id": 6491,
                  "extra": "--- {}\n",
                  "created_at": "2015-06-04T09:42:19.581Z",
                  "updated_at": "2015-06-04T09:42:19.581Z"
              }
          ],
          "topics": [
              {
                  "id": 197064,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Buddhism",
                  "score": 0.6,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 6491,
                  "extra": "---\noriginal: Buddhism\n",
                  "created_at": "2015-06-04T09:42:26.965Z",
                  "updated_at": "2015-06-04T09:42:26.965Z"
              },
              {
                  "id": 197063,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Books and Publishing",
                  "score": 0.616162,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 6491,
                  "extra": "---\noriginal: Books & Publishing\n",
                  "created_at": "2015-06-04T09:42:26.599Z",
                  "updated_at": "2015-06-04T09:42:26.599Z"
              },
              {
                  "id": 197062,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Society and Culture",
                  "score": 0.837302,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 6491,
                  "extra": "---\noriginal: Society & Culture\n",
                  "created_at": "2015-06-04T09:42:26.237Z",
                  "updated_at": "2015-06-04T09:42:26.237Z"
              },
              {
                  "id": 197061,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Religion and Beliefs",
                  "score": 0.903846,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 6491,
                  "extra": "---\noriginal: Religion & Beliefs\n",
                  "created_at": "2015-06-04T09:42:25.875Z",
                  "updated_at": "2015-06-04T09:42:25.875Z"
              },
              {
                  "id": 197060,
                  "is_confirmed": false,
                  "identifier": null,
                  "name": "Human Interest",
                  "score": 0.54,
                  "category": "topic",
                  "entity_type": null,
                  "item_id": 6491,
                  "extra": "---\noriginal: Human Interest\n",
                  "created_at": "2015-06-04T09:42:25.493Z",
                  "updated_at": "2015-06-04T09:42:25.493Z"
              }
          ],
          "image_urls": {
              "full": "https://i1.sndcdn.com/artworks-000119099603-8pmq7k-t500x500.jpg",
              "thumb": "https://i1.sndcdn.com/artworks-000119099603-8pmq7k-large.jpg"
          },
          "contributors": [
              {
                  "role": "host",
                  "slug": "kristatippett",
                  "name": "Krista Tippett",
                  "person_id": 8448,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/8448",
                      "ui": "https://www.audiosear.ch/people/k#kristatippett"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "rumi",
                  "name": "Rumi",
                  "person_id": 5183,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/5183",
                      "ui": "https://www.audiosear.ch/people/r#rumi"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "leonardcohen",
                  "name": "Leonard Cohen",
                  "person_id": 3974,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/3974",
                      "ui": "https://www.audiosear.ch/people/l#leonardcohen"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "picoiyer",
                  "name": "Pico Iyer",
                  "person_id": 10355,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/10355",
                      "ui": "https://www.audiosear.ch/people/p#picoiyer"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "thomasmerton",
                  "name": "Thomas Merton",
                  "person_id": 10354,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/10354",
                      "ui": "https://www.audiosear.ch/people/t#thomasmerton"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "grahamgreene",
                  "name": "Graham Greene",
                  "person_id": 6405,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/6405",
                      "ui": "https://www.audiosear.ch/people/g#grahamgreene"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "henrydavidthoreau",
                  "name": "Henry David Thoreau",
                  "person_id": 3483,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/3483",
                      "ui": "https://www.audiosear.ch/people/h#henrydavidthoreau"
                  }
              },
              {
                  "role": "mentioned",
                  "slug": "dalailama",
                  "name": "Dalai Lama",
                  "person_id": 2951,
                  "urls": {
                      "self": "https://www.audiosear.ch/api/people/2951",
                      "ui": "https://www.audiosear.ch/people/d#dalailama"
                  }
              }
          ],
          "urls": {
              "self": "https://www.audiosear.ch/api/episodes/6491",
              "ui": "https://www.audiosear.ch/a/195b/pico-iyer--the-art-of-stillness"
          },
          "highlights": [
              {
                  "url": "https://api.soundcloud.com/tracks/208681873/stream?client_id=df968aa6d731e453a4a867495d1cdb4c",
                  "id": 6490,
                  "transcript": [
                      {
                          "text": "me in the way I need to know in the world of <em>tumult</em> and I think that's such an",
                          "start_time": "1094.828",
                          "end_time": "1099.478"
                      }
                  ]
              }
          ],
          "excerpts": [
              [
                  {
                      "start_time": "1089.858",
                      "end_time": "1094.827",
                      "text": "Pacific below it in my head in the chapel there too and I feel that really studies and grounds"
                  },
                  {
                      "start_time": "1094.828",
                      "end_time": "1099.478",
                      "text": "me in the way I need to know in the world of tumult and I think that's such an"
                  },
                  {
                      "start_time": "1099.477",
                      "end_time": "1104.178",
                      "text": "important point because as you pursued that place of"
                  }
              ]
          ],
          "mp3src": "https://www.audiosear.ch/media/ee5b06da1e7aea85a086bf8bf03bc475/0/public/audio_file/6490/stream.mp3",
          "cues": [
              {
                  "text": "me in the way I need to know in the world of <em>tumult</em> and I think that's such an",
                  "start_time": "1094.828",
                  "end_time": "1099.478"
              }
          ]
      }
    ]
  };
}