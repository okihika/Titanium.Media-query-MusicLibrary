var player      = Titanium.Media.systemMusicPlayer;
var query       = {};
var artistName  = 'サカナクション';

// find Songs by Artist Name
query['artist'] = {value:artistName, exact:true};
var result = Titanium.Media.queryMusicLibrary(query);

if (result.length == 0) {
	alert(':-P');
	return;
}

// play Songs
var queue = {'items':result}
player.setQueue(queue);
player.play();


// api doc
// http://developer.appcelerator.com/apidoc/mobile/1.8.1/Titanium.Media.queryMusicLibrary-method.html
// http://developer.appcelerator.com/apidoc/mobile/1.8.1/Titanium.Media.Item-object.html
// http://developer.appcelerator.com/apidoc/mobile/1.8.1/Titanium.Media.MusicPlayer.setQueue-method.html