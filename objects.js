var playlist= {'Slowdrive': 'Alison'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist,{'My Bloody Valentine': 'Sometimes'}, {'Phil Ochs': "Here's to the State of Mississippi"})
  }

function removeFromPlaylist(playlist, artistName){
  delete playlist['Alison']
  return playlist
  }
