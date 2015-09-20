'use strict';

angular.module('queueCastApp')
  .service('EpisodesService', EpisodesService);

function EpisodesService() {
	this.liked = [];
	this.disliked = [];
	this.toView = [];

	//TODO: add lodash for this
	this.likeEpisode = function (id) {

	};

	this.getNextEpisodes = function () {
		return getFakeEpisodes().results;
	};
 }


function getFakeEpisodes() {
	return {
  "query": "id:24 OR id:42 OR id:523 OR id:24 OR id:317 OR id:317 OR id:317 OR id:317 OR id:355 OR id:321 OR id:13 OR id:38 OR id:353 OR id:368 OR id:21 OR id:55 OR id:523 OR id:523 OR id:317 OR id:523 OR id:317 OR id:317 OR id:21 OR id:518 OR id:42 OR id:539 OR id:34 OR id:74 OR id:11 OR id:581 OR id:311 OR id:576 OR id:167 OR id:40 OR id:385 OR id:385 OR id:385 OR id:385 OR id:385 OR id:518 OR id:68 OR id:41 OR id:42 OR id:311 OR id:379 OR id:317 OR id:317 OR id:147 OR id:13 OR id:147 OR id:85 OR id:24 OR id:523 OR id:507 OR id:507 OR id:334 OR id:147 OR id:42 OR id:42 OR id:147 OR id:147 OR id:147 OR id:317 OR id:316 OR id:358 OR id:55 OR id:42 OR id:38 OR id:526 OR id:549 OR id:42 OR id:385 OR id:385 OR id:385 OR id:385 OR id:385 OR id:373 OR id:602 OR id:316 OR id:581 OR id:42 OR id:42 OR id:42 OR id:42 OR id:317 OR id:507 OR id:507 OR id:40 OR id:71 OR id:71 OR id:538 OR id:538 OR id:538 OR id:538 OR id:538 OR id:538 OR id:385 OR id:34 OR id:101 OR id:41 OR id:517 OR id:316 OR id:525 OR id:525 OR id:147 OR id:314 OR id:147 OR id:317 OR id:317 OR id:322 OR id:40 OR id:512 OR id:311 OR id:65 OR id:322 OR id:59 OR id:147 OR id:11 OR id:40 OR id:319 OR id:13 OR id:583 OR id:513 OR id:590 OR id:497 OR id:321 OR id:68 OR id:38 OR id:496 OR id:583 OR id:101 OR id:23 OR id:13 OR id:41 OR id:373 OR id:13 OR id:360 OR id:497 OR id:60 OR id:36 OR id:14 OR id:14 OR id:11 OR id:101 OR id:34 OR id:21 OR id:42 OR id:413 OR id:39 OR id:11 OR id:65 OR id:521 OR id:11 OR id:527 OR id:518 OR id:147 OR id:147 OR id:147 OR id:147 OR id:317 OR id:552 OR id:154 OR id:36 OR id:513 OR id:506 OR id:530 OR id:42 OR id:34 OR id:364 OR id:355 OR id:355 OR id:22 OR id:413 OR id:549 OR id:101 OR id:21 OR id:38 OR id:552 OR id:317 OR id:316 OR id:360 OR id:129 OR id:147 OR id:147 OR id:147 OR id:147 OR id:552 OR id:317 OR id:58 OR id:24 OR id:41 OR id:41 OR id:41 OR id:317 OR id:101 OR id:316 OR id:41 OR id:23 OR id:525 OR id:101 OR id:101 OR id:317 OR id:525 OR id:525 OR id:581 OR id:525 OR id:525 OR id:649 OR id:39 OR id:39 OR id:552 OR id:22 OR id:316 OR id:525 OR id:42 OR id:321 OR id:583 OR id:22 OR id:42 OR id:464 OR id:132 OR id:316 OR id:525 OR id:507 OR id:531 OR id:523 OR id:465 OR id:385 OR id:496 OR id:527 OR id:373 OR id:507 OR id:583 OR id:101 OR id:516 OR id:38 OR id:14 OR id:11 OR id:11 OR id:581 OR id:317 OR id:317 OR id:317 OR id:34 OR id:552 OR id:552 OR id:41 OR id:41 OR id:41 OR id:22 OR id:509 OR id:552 OR id:42 OR id:361 OR id:11 OR id:355 OR id:413 OR id:528 OR id:316 OR id:361 OR id:552 OR id:413 OR id:35 OR id:23 OR id:42 OR id:508 OR id:38 OR id:41 OR id:524 OR id:507 OR id:649 OR id:149 OR id:507 OR id:38 OR id:41 OR id:38 OR id:41 OR id:41 OR id:40 OR id:101 OR id:101 OR id:40 OR id:101 OR id:41 OR id:41 OR id:41 OR id:317 OR id:357 OR id:355 OR id:413 OR id:516 OR id:373 OR id:526 OR id:507 OR id:535 OR id:22 OR id:612 OR id:515 OR id:404 OR id:525 OR id:525 OR id:41 OR id:41 OR id:41 OR id:42 OR id:517 OR id:510 OR id:321 OR id:494 OR id:21 OR id:149 OR id:80 OR id:520 OR id:176 OR id:373 OR id:101 OR id:360 OR id:546 OR id:11 OR id:360 OR id:510 OR id:40 OR id:494 OR id:544 OR id:507 OR id:11 OR id:339 OR id:602 OR id:80 OR id:41 OR id:41 OR id:450 OR id:42 OR id:149 OR id:23 OR id:11 OR id:494 OR id:449 OR id:39 OR id:101 OR id:101 OR id:314 OR id:101 OR id:149 OR id:517 OR id:22 OR id:176 OR id:22 OR id:22 OR id:22 OR id:314 OR id:314 OR id:80 OR id:523 OR id:36 OR id:525 OR id:359 OR id:42 OR id:359 OR id:359 OR id:42 OR id:359 OR id:103 OR id:103 OR id:15 OR id:41 OR id:22 OR id:15 OR id:15",
  "total_results": 100,
  "page": 1,
  "results_per_page": 10,
  "results": [
    {
      "id": 41,
      "title": "Theory of Everything",
      "network": "Radiotopia",
      "categories": [
        {
          "id": "33",
          "parent_id": 6,
          "name": "Design",
          "name_lc": "design"
        },
        {
          "id": "71",
          "parent_id": 6,
          "name": "Storytelling",
          "name_lc": "storytelling"
        }
      ],
      "description": "Personally connecting the dots. All of them.  Proud member of PRX’s Radiotopia.",
      "hosts": [],
      "image_files": [
        {
          "id": 671,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-01-24T10:02:08.506Z",
          "updated_at": "2015-01-24T10:02:08.506Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000068762298-2lhk8f-large.jpg",
          "storage_id": 493,
          "imageable_id": 41,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/bwalker",
      "web_profiles": "{\"personal\":{\"url\":\"http://toe.prx.org\",\"username\":\"\"},\"twitter\":{\"url\":\"http://twitter.com/benjamenwalker\",\"username\":\"benjamenwalker\"},\"other\":{\"url\":\"http://wfmu.org/playlists/TI\",\"username\":\"\"},\"itunes_podcast\":{\"url\":\"https://itunes.apple.com/us/podcast/benjamen-walkers-theory-everything/id646537599?mt=2\\u0026uo=4\\u0026at=10l9zE\",\"username\":\"646537599?mt=2\\u0026amp;uo=4\\u0026amp;at=10l9zE\"}}"
    },
    {
      "id": 317,
      "title": "Internet Explorer",
      "network": "Buzzfeed",
      "categories": [
        {
          "id": "5",
          "parent_id": null,
          "name": "Society & Culture",
          "name_lc": "society & culture"
        },
        {
          "id": "8",
          "parent_id": null,
          "name": "Technology",
          "name_lc": "technology"
        }
      ],
      "description": "BuzzFeed editors Ryan Broderick and Katie Notopoulos explore the weirdest corners of the internet, so you don't have to.",
      "hosts": [
        {
          "id": 8087,
          "name": "Joe Bernstein"
        }
      ],
      "image_files": [
        {
          "id": 3955,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-04-07T02:21:19.011Z",
          "updated_at": "2015-04-07T02:21:19.011Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000136452961-j4nztq-large.jpg",
          "storage_id": 755,
          "imageable_id": 317,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/iexplorer",
      "web_profiles": "{\"personal\":{\"url\":\"http://www.buzzfeed.com/iexplorer\",\"username\":null}}"
    },
    {
      "id": 42,
      "title": "Reply All",
      "network": "Gimlet Media",
      "categories": [
        {
          "id": "71",
          "parent_id": 6,
          "name": "Storytelling",
          "name_lc": "storytelling"
        }
      ],
      "description": "A show about the internet, hosted by PJ Vogt and Alex Goldman.  From Gimlet.",
      "hosts": [],
      "image_files": [
        {
          "id": 672,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-01-24T10:02:10.876Z",
          "updated_at": "2015-01-24T10:02:10.876Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000116177580-6q9skc-large.jpg",
          "storage_id": 494,
          "imageable_id": 42,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/replyall",
      "web_profiles": "{\"twitter\":{\"url\":\"https://twitter.com/replyall\",\"username\":\"replyall\"},\"itunes_podcast\":{\"url\":\"https://itunes.apple.com/us/podcast/reply-all/id941907967?mt=2\",\"username\":\"941907967?mt=2\"},\"personal\":{\"url\":\"http://gimletmedia.com/shows/reply-all\",\"username\":null}}"
    },
    {
      "id": 147,
      "title": "Pitch",
      "network": "Independent",
      "categories": [
        {
          "id": "16",
          "parent_id": 6,
          "name": "Music",
          "name_lc": "music"
        },
        {
          "id": "71",
          "parent_id": 6,
          "name": "Storytelling",
          "name_lc": "storytelling"
        }
      ],
      "description": "Podcast by Pitch",
      "hosts": [],
      "image_files": [
        {
          "id": 1747,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-02-12T10:06:39.188Z",
          "updated_at": "2015-02-12T10:06:39.188Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000074341318-1tlccd-large.jpg",
          "storage_id": 594,
          "imageable_id": 147,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/hearpitch",
      "web_profiles": "{\"soundcloud\":{\"url\":\"http://soundcloud.com/pitch\",\"username\":\"pitch\"}}"
    },
    {
      "id": 101,
      "title": "Here Be Monsters",
      "network": "Independent",
      "categories": [
        {
          "id": "71",
          "parent_id": 6,
          "name": "Storytelling",
          "name_lc": "storytelling"
        },
        {
          "id": "4",
          "parent_id": null,
          "name": "Other",
          "name_lc": "other"
        }
      ],
      "description": "The Podcast about the Unknown",
      "hosts": [],
      "image_files": [
        {
          "id": 772,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-01-24T10:05:40.812Z",
          "updated_at": "2015-01-24T10:05:40.812Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000109451083-qijosq-large.jpg",
          "storage_id": 550,
          "imageable_id": 101,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/herebemonsters",
      "web_profiles": "{\"personal\":{\"url\":\"https://secure.squarespace.com/commerce/donate?donatePageId=5252eb7de4b00c64c3d50fb0\",\"username\":\"https://secure.squarespace.com/commerce/donate?donatePageId=5252eb7de4b00c64c3d50fb0\"},\"itunes_podcast\":{\"url\":\"https://itunes.apple.com/us/podcast/herebemonsters/id564425626\",\"username\":\"564425626\"},\"facebook\":{\"url\":\"http://facebook.com/Herebemonstersradio\",\"username\":\"Herebemonstersradio\"},\"twitter\":{\"url\":\"http://twitter.com/HBMpodcast.com\",\"username\":\"HBMpodcast.com\"}}"
    },
    {
      "id": 385,
      "title": "Death, Sex & Money",
      "network": "WNYC",
      "categories": [
        {
          "id": "5",
          "parent_id": null,
          "name": "Society & Culture",
          "name_lc": "society & culture"
        },
        {
          "id": "47",
          "parent_id": 5,
          "name": "Health",
          "name_lc": "health"
        },
        {
          "id": "50",
          "parent_id": 5,
          "name": "Sexuality",
          "name_lc": "sexuality"
        },
        {
          "id": "11",
          "parent_id": 6,
          "name": "Arts",
          "name_lc": "arts"
        },
        {
          "id": "24",
          "parent_id": 4,
          "name": "Self-Help",
          "name_lc": "self-help"
        }
      ],
      "description": "A podcast about the big questions and hard choices that are often left out of polite conversation. Host Anna Sale talks to celebrities and regular people about relationships, money, family, work and making it all count while we're here.",
      "hosts": [],
      "image_files": [
        {
          "id": 5085,
          "item_id": null,
          "file": {
            "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=8377bc0c5f02fa4b03258661d55a3e8701681b083dfa45a53c196119bc0fa369",
            "thumb": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/thumb_mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f1e841862ea2b4f276f936f56a349fbebba429a290053cbfe87debb45174ab6a"
            },
            "png": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/png_mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=fcddf11eea50110d774e1203986543a1bd8ab8c03538a05523ff39b6a91ba079"
            },
            "jpg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/jpg_mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=e02947d248f6841efaa39319299320000f8236c7f8438027fff615a76e8d9b45"
            },
            "jpeg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/jpeg_mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=9b9986d1eb3bb96315b05ded8d7e8f64f9a1243e2d0a7bc4e9493cba8cf6a5fd"
            },
            "gif": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/death-sex-money.f4kgBN.popuparchive.org/gif_mza_8940864353765400234.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=770348e77df1b622bb7627d7686599c0078a000a9eff67a4cb978ed40357ed8d"
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-05-15T23:11:25.759Z",
          "updated_at": "2015-05-28T20:49:51.769Z",
          "original_file_url": "http://is4.mzstatic.com/image/pf/us/r30/Podcasts4/v4/81/44/ac/8144ac7b-eeb7-ee61-3b7e-b5e9a81a4be8/mza_8940864353765400234.600x600-75.jpg",
          "storage_id": 818,
          "imageable_id": 385,
          "imageable_type": "Collection",
          "extra": {
            "type": "full"
          }
        }
      ],
      "sc_feed": null,
      "web_profiles": null
    },
    {
      "id": 525,
      "title": "Re:sound",
      "network": "Third Coast International Audio Festival",
      "categories": [
        {
          "id": "5",
          "parent_id": null,
          "name": "Society & Culture",
          "name_lc": "society & culture"
        },
        {
          "id": "11",
          "parent_id": 6,
          "name": "Arts",
          "name_lc": "arts"
        },
        {
          "id": "7",
          "parent_id": null,
          "name": "News & Politics",
          "name_lc": "news & politics"
        }
      ],
      "description": "The most compelling and creative audio documentaries and features produced worldwide, including episodes of the Third Coast Festival's \"Re:sound\" and audio treats such as producer profiles and more experimental work. In mp3 and updated Fridays.",
      "hosts": [
        {
          "id": 12949,
          "name": "Kurt Andersen"
        },
        {
          "id": 880,
          "name": "Benjamin Walker"
        }
      ],
      "image_files": [
        {
          "id": 14423,
          "item_id": null,
          "file": {
            "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=75a8fda65add880fa9261d9436eb9b9536c16855e896fc2aaa4d836b0c6b757f",
            "thumb": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/thumb_mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=9cf0d9dc273069ef57f2eace95dfaa6fefce36e38ff3c95eb41a9d5e773deddb"
            },
            "png": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/png_mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=37f9d6a09a4db63647877b8f68a94286d169cc05294e48e7ea8aff291d57c48a"
            },
            "jpg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/jpg_mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=51df50666c3fd85a38e5faa4f4af3bd03737184a7523fbef7b071a7b2ceaa20a"
            },
            "jpeg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/jpeg_mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=93ae706e7accde7962c3aa7a75824f3806c33318162970668c28bb88f24770f3"
            },
            "gif": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/re-sound.0pjpFQ.popuparchive.org/gif_mza_7406709561668203657.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012549Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=7823bb6df02761b46bce70d20f6a32b73eb39a1b863dc17d051d470af5dc31d2"
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-07-10T05:52:55.688Z",
          "updated_at": "2015-07-10T05:52:55.688Z",
          "original_file_url": "http://is1.mzstatic.com/image/pf/us/r30/Podcasts5/v4/52/7b/3e/527b3e5d-8feb-7018-6887-c1a1941f16e0/mza_7406709561668203657.600x600-75.jpg",
          "storage_id": 19105,
          "imageable_id": 525,
          "imageable_type": "Collection",
          "extra": {
            "type": "full"
          }
        }
      ],
      "sc_feed": null,
      "web_profiles": null
    },
    {
      "id": 11,
      "title": "99% Invisible",
      "network": "Radiotopia",
      "categories": [
        {
          "id": "71",
          "parent_id": 6,
          "name": "Storytelling",
          "name_lc": "storytelling"
        },
        {
          "id": "33",
          "parent_id": 6,
          "name": "Design",
          "name_lc": "design"
        }
      ],
      "description": "Design is everywhere in our lives, perhaps most importantly in the places where we’ve just stopped noticing. 99% Invisible (99 Percent Invisible) is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars, KALW in San Francisco, and Radiotopia from PRX. Learn more: http://99percentinvisible.org  Proud member of PRX’s Radiotopia.",
      "hosts": [
        {
          "id": 10049,
          "name": "John Rocker"
        },
        {
          "id": 15139,
          "name": "Roman Mars"
        }
      ],
      "image_files": [
        {
          "id": 625,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-01-24T10:00:20.062Z",
          "updated_at": "2015-01-24T10:00:20.062Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000004377536-9y0zpr-large.jpg",
          "storage_id": 468,
          "imageable_id": 11,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/roman-mars",
      "web_profiles": "{\"personal\":{\"url\":\"http://99percentinvisible.org\",\"username\":\"\"},\"facebook\":{\"url\":\"http://www.facebook.com/99percentinvisible\",\"username\":\"99percentinvisible\"},\"twitter\":{\"url\":\"http://twitter.com/romanmars\",\"username\":\"romanmars\"}}"
    },
    {
      "id": 22,
      "title": "StartUp",
      "network": "Gimlet Media",
      "categories": [
        {
          "id": "28",
          "parent_id": 3,
          "name": "Business",
          "name_lc": "business"
        }
      ],
      "description": "A series about what it's really like to start a business. ",
      "hosts": [
        {
          "id": 198,
          "name": "Alex Blumberg"
        }
      ],
      "image_files": [
        {
          "id": 637,
          "item_id": null,
          "file": {
            "url": null,
            "thumb": {
              "url": null
            },
            "png": {
              "url": null
            },
            "jpg": {
              "url": null
            },
            "jpeg": {
              "url": null
            },
            "gif": {
              "url": null
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-01-24T10:00:52.013Z",
          "updated_at": "2015-01-24T10:00:52.013Z",
          "original_file_url": "https://i1.sndcdn.com/avatars-000116508031-lllic3-large.jpg",
          "storage_id": 474,
          "imageable_id": 22,
          "imageable_type": "Collection",
          "extra": null
        }
      ],
      "sc_feed": "https://soundcloud.com/hearstartup",
      "web_profiles": "{\"twitter\":{\"url\":\"http://twitter.com/podcaststartup\",\"username\":\"podcaststartup\"},\"facebook\":{\"url\":\"https://www.facebook.com/hearstartup\",\"username\":\"hearstartup\"},\"itunes_podcast\":{\"url\":\"https://itunes.apple.com/us/podcast/startup-podcast/id913805339?mt=2\",\"username\":\"913805339?mt=2\"},\"personal\":{\"url\":\"http://gimletmedia.com\",\"username\":null}}"
    },
    {
      "id": 507,
      "title": "First Time Last Time",
      "network": "firstlasttime.com",
      "categories": [
        {
          "id": "18",
          "parent_id": 5,
          "name": "Personal Journals",
          "name_lc": "personal journals"
        },
        {
          "id": "5",
          "parent_id": null,
          "name": "Society & Culture",
          "name_lc": "society & culture"
        }
      ],
      "description": "Stories about first times and last times. By Ben Adair. Subscribe, connect and share your story at firstlasttime.com.",
      "hosts": [],
      "image_files": [
        {
          "id": 14398,
          "item_id": null,
          "file": {
            "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=57c69e953d4698fa3d37b5c935c249ced24878f4f0dec261991eb260eba8cbb9",
            "thumb": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/thumb_mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=351cc0a39de75da93a369c436cc8bcdb2df9b84b87f6364fef025f97d041d595"
            },
            "png": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/png_mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=0ae3f7bbde2831731e87ad155480ab8d7a6fcb5c982e2a152e985698dc438771"
            },
            "jpg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/jpg_mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f94152b09925cf315b83cca6da520512aac91f0502500b4dd303754ef313e246"
            },
            "jpeg": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/jpeg_mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=fadf1e95f03374ded126428afc331b8065a731ded3bf9e7b14c427e2af651d27"
            },
            "gif": {
              "url": "https://s3.amazonaws.com/www-prod-popuparchive/first-time-last-time.09ALLJ.popuparchive.org/gif_mza_8542487558893959823.600x600-75.jpg?X-Amz-Expires=600&X-Amz-Date=20150920T012550Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ6B3Q7DFQGUS2TXQ/20150920/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=afeafdcdaf638ce6cca76d73eee1e356535e7f7b89e0ea6bd541cbb0fcb660dc"
            }
          },
          "is_uploaded": null,
          "upload_id": null,
          "created_at": "2015-07-10T05:49:08.125Z",
          "updated_at": "2015-07-10T05:49:08.125Z",
          "original_file_url": "http://is2.mzstatic.com/image/pf/us/r30/Podcasts7/v4/c4/32/3b/c4323b7f-394d-e943-f05d-0fe68569f53f/mza_8542487558893959823.600x600-75.jpg",
          "storage_id": 19087,
          "imageable_id": 507,
          "imageable_type": "Collection",
          "extra": {
            "type": "full"
          }
        }
      ],
      "sc_feed": null,
      "web_profiles": null
    }
  ]
};
}