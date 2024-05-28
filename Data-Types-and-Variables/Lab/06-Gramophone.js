function gramophone (nameBand, album, song) {
    let songDuration = (album.length * nameBand.length) * song.length / 2;
    const totalRotateForSong = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${totalRotateForSong} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')