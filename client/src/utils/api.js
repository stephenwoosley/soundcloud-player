import axios from "axios";
// import SC from "soundcloud";
// const SoundCloudAudio = require('soundcloud-audio');
// const player = new SoundCloudAudio('95f22ed54a5c297b1c41f72d713623ef');

export default {
  get: function(resource) {
    axios.get('https://api.soundcloud.com/oembed&url='+ resource)
    .then(function (response) {
      // handle success
      console.log(response);
    })
  }
  
  // Gets all books
  
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};