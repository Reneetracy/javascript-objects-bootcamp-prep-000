var playlist = {
  Radiohead: 'Weird Fishes/Arpeggi',
  Bonobo: 'El Toro',
  Shigeto: 'Detroit Part 1',
  'Flying Lotus': 'Coronus, the Terminator'
}

function updatePlaylist(artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}
