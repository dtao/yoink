# yoink

A simple CLI for calling APIs.

Simple example:

    $ yoink https://api.bitbucket.org/2.0/users/dtao
    {
      "username": "dtao",
      "website": "http://philosopherdeveloper.com/",
      "display_name": "Dan Tao",
      "uuid": "{cb4f92d3-0bc3-4a49-aaca-4271e3e6ef5a}",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/dtao"
        },
        "repositories": {
          "href": "https://api.bitbucket.org/2.0/repositories/dtao"
        },
        "html": {
          "href": "https://bitbucket.org/dtao"
        },
        "followers": {
          "href": "https://api.bitbucket.org/2.0/users/dtao/followers"
        },
        "avatar": {
          "href": "https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2014/Nov/18/1181180486-4-dtao-avatar_avatar.png"
        },
        "following": {
          "href": "https://api.bitbucket.org/2.0/users/dtao/following"
        }
      },
      "created_on": "2010-07-19T12:26:10+00:00",
      "location": "San Francisco, CA",
      "type": "user"
    }

Example w/ a query:

    $ yoink -q links.html https://api.bitbucket.org/2.0/users/dtao
    {
      "href": "https://bitbucket.org/dtao"
    }
