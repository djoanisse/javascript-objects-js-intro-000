var playlist = new Object({ Beatles: "Let it be" });
  function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song;
//  Object.assign({}, {playlist});
    return playlist;
}
  function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}
