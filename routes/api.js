/*
 * Serve JSON to our AngularJS client
 */

var data = {
	"songs": [
		{
			"title": "The Way",
			"artist": "Ariana Grande"
		},
		{
			"title": "Still Not a Player",
			"artist": "Big Pun"
		}
	]
};

exports.songs = function (req, res) {
	var songs = [];
	data.songs.forEach(function(song, i) {
		songs.push({
			id: i,
			title: song.title,
			artist: song.artist
		});
	});
	res.json({
		songs: songs
	});
};

exports.addSong = function(req, res) {
	data.songs.push(req.body);
	res.json(req.body);
};