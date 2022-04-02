import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()
  const root = document.getElementById("root");

  window.getState = store.getState
  window.dispatch = store.dispatch


  ReactDOM.render(<Root store={store} />, root);
});

// require 'open-uri'

// User.delete_all
// Track.delete_all

// # Create Users

// guest = User.create!(email: "Guest@gmail.com", password: "123456")
// user1 = User.create!(email: "User123@gmail.com", password: "123456")
// user2 = User.create!(email: "User234@gmail.com", password: "123456")
// user3 = User.create!(email: "User345@gmail.com", password: "123456")
// user4 = User.create!(email: "User456@gmail.com", password: "123456")
// user5 = User.create!(email: "User567@gmail.com", password: "123456")

// # Create Tracks

// track1 = Track.create!(title: 'La Romana', uploader_id: user1.id, genre: 'Latin')
// track2 = Track.create!(title: 'You Right', uploader_id: user2.id, genre: 'R&B')
// track3 = Track.create!(title: 'All You Need To Know', uploader_id: user3.id, genre: 'EDM')
// track4 = Track.create!(title: 'Telepatia', uploader_id: user4.id, genre: 'Pop')
// track5 = Track.create!(title: 'No Interviews', uploader_id: user5.id, genre: 'Rap')

// # AWS

// track1_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Bad_Bunny.jpg')
// track1.image.attach(io: track1_image, filename: 'Bad_Bunny.jpg')
// track1_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Bad_Bunny_La_Romana.mp3')
// track1.audio.attach(io: track1_audio, filename: 'Bad_Bunny_La_Romana.mp3')

// track2_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Doja_Cat.png')
// track2.image.attach(io: track2_image, filename: 'Doja_Cat.png')
// track2_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Doja_Cat_You_Right.mp3')
// track2.audio.attach(io: track2_audio, filename: 'Doja_Cat_You_Right.mp3')

// track3_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gryffin.png')
// track3.image.attach(io: track3_image, filename: 'Gryffin.png')
// track3_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gryffin_All_You_Need_To_Know.mp3')
// track3.audio.attach(io: track3_audio, filename: 'Gryffin_All_You_Need_To_Know.mp3')

// track4_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kali_Uchis.png')
// track4.image.attach(io: track4_image, filename: 'Kali_Uchis.png')
// track4_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kali_Uchis_Telepatia.mp3')
// track4.audio.attach(io: track4_audio, filename: 'Kali_Uchis_Telepatia.mp3')

// track5_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Durk.png')
// track5.image.attach(io: track5_image, filename: 'Lil_Durk.png')
// track5_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Durk_No_Interviews.mp3')
// track5.audio.attach(io: track5_audio, filename: 'Lil_Durk_No_Interviews.mp3')

// puts "Data Has Been Seeded"
