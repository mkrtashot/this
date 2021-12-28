"use strict";

function Song(songTitle, artist) {
  this.songTitle = songTitle;
  this.artist = artist;
  let songArr = [];
  songArr.push(songTitle);
  songArr.push(artist);
  return songArr;
}

function Playlist() {
  this.songArr = [];
  this.artistArr = [];
  this.currentSong = 0;
  this.isPlaying = false;
}

Playlist.prototype.add = function (song) {
  this.songArr.push(song[0]);
  this.artistArr.push(song[1]);
};

Playlist.prototype.play = function () {
  if (this.isPlaying) {
    return `Currently playing ${this.songArr[this.currentSong]} by ${
      this.artistArr[this.currentSong]
    }`;
  } else {
    this.isPlaying = true;
    return `${this.songArr[this.currentSong]} by ${
      this.artistArr[this.currentSong]
    } started`;
  }
};

Playlist.prototype.next = function () {
  if (this.isPlaying) {
    this.currentSong++;
    if (this.songArr.length > this.currentSong) {
      return `${this.songArr[this.currentSong - 1]} by ${
        this.artistArr[this.currentSong - 1]
      } stopped, ${this.songArr[this.currentSong]} by ${
        this.artistArr[this.currentSong]
      } started`;
    } else {
      this.currentSong = 0;
      return `${this.songArr[this.songArr.length - 1]} by ${
        this.artistArr[this.songArr.length - 1]
      } stopped, ${this.songArr[0]} by ${this.artistArr[0]} started`;
    }
  } else {
    return "Please, press play so after that I can play the next song";
  }
};

Playlist.prototype.stop = function () {
  this.isPlaying = false;
  return `${this.songArr[this.currentSong]} by ${
    this.artistArr[this.currentSong]
  } stopped`;
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const allTooWell = new Song("All Too Well", "Taylor Swift");

playlist.add(heyJude);
playlist.add(jaded);
playlist.add(allTooWell);

console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());
