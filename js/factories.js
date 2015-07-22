angular.module('starter.factories', [])
  .factory("Fire", function($firebaseAuth) {
    var usersRef = new Firebase("https://ionic-auth-starter.firebaseio.com");
    return usersRef;
  })
  .factory("Auth", function($firebaseAuth) {
    var usersRef = new Firebase("https://ionic-auth-starter.firebaseio.com");
    return $firebaseAuth(usersRef);
  })
  .factory("Playlists", function($firebaseArray) {
    var playlistsRef = new Firebase("https://ionic-auth-starter.firebaseio.com/playlists");
    return $firebaseArray(playlistsRef);
  })
  .factory("Playlist", function($firebaseObject) {
    return {
      get: function(id) {
        var playlistRef = new Firebase("https://ionic-auth-starter.firebaseio.com/playlists/" + id);
        return $firebaseObject(playlistRef);
      }
    }
  });
