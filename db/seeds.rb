require 'open-uri'
require 'faker'

# Clean up existing data
User.delete_all
Track.delete_all
Comment.delete_all

# Create Users
guest1 = User.create!(email: "Guest@gmail.com", password: "123456")
guest2 = User.create!(email: "Guest@yahoo.com", password: "123456")

user1 = User.create!(email: "SZA@gmail.com", password: "123456")
user2 = User.create!(email: "BEilish@gmail.com", password: "123456")
user3 = User.create!(email: "LaryOver@gmail.com", password: "123456")
user4 = User.create!(email: "SWalker@gmail.com", password: "123456")
user5 = User.create!(email: "BadBunny@gmail.com", password: "123456")
user6 = User.create!(email: "Zedd@gmail.com", password: "123456")
user7 = User.create!(email: "KarolG@gmail.com", password: "123456")
user8 = User.create!(email: "DojaCat@gmail.com", password: "123456")
user9 = User.create!(email: "JBeiber@gmail.com", password: "123456")
user10 = User.create!(email: "Rezz@gmail.com", password: "123456")
user11 = User.create!(email: "Weeknd@gmail.com", password: "123456")
user12 = User.create!(email: "Inzo@gmail.com", password: "123456")
user13 = User.create!(email: "JBalvin@gmail.com", password: "123456")
user14 = User.create!(email: "DuaLipa@gmail.com", password: "123456")
user15 = User.create!(email: "Tiesto@gmail.com", password: "123456")
user16 = User.create!(email: "KaliUchis@gmail.com", password: "123456")
user17 = User.create!(email: "Gryffin@gmail.com", password: "123456")
user18 = User.create!(email: "AnuelAA@gmail.com", password: "123456")
user19 = User.create!(email: "Kodak@gmail.com", password: "123456")
user20 = User.create!(email: "Blxst@gmail.com", password: "123456")
user21 = User.create!(email: "JBieber@gmail.com", password: "123456")
user22 = User.create!(email: "Illenium@gmail.com", password: "123456")
user23 = User.create!(email: "MacMiller@gmail.com", password: "123456")
user24 = User.create!(email: "CCabello@gmail.com", password: "123456")
user25 = User.create!(email: "Farruko@gmail.com", password: "123456")
user26 = User.create!(email: "KLamar@gmail.com", password: "123456")
user27 = User.create!(email: "LilDurk@gmail.com", password: "123456")
user28 = User.create!(email: "Drake@gmail.com", password: "123456")

# Separate users for comments
commenters = []
5.times do
  random_number = rand(0..9999).to_s.rjust(4, "0")
  commenters << User.create!(
    email: "user#{random_number}@example.com",
    password: "123456"
  )
end

# Helper method
def seed_track(title:, artist:, uploader:, genre:, image_filename:, audio_filename:)
  s3_base_url = "https://noisecloud-seeds.s3.us-west-1.amazonaws.com"

  track = Track.new(
    title: title,
    artist: artist,
    uploader_id: uploader.id,
    genre: genre
  )

  image_url = "#{s3_base_url}/#{image_filename}"
  audio_url = "#{s3_base_url}/#{audio_filename}"

  begin
    track.image.attach(
      io: URI.open(image_url),
      filename: image_filename
    )
    track.track.attach(
      io: URI.open(audio_url),
      filename: audio_filename
    )
    track.save!
    puts "Seeded track: #{track.title} by #{track.artist}"
  rescue OpenURI::HTTPError => e
    puts "Failed to seed #{title} – error accessing S3: #{e.message}"
  end
end

# ---------------- R&B ----------------
seed_track(title: 'Enjoy the Show', artist: 'The Weeknd', uploader: user11, genre: 'R&B', image_filename: 'The_Weeknd_Hurry_Up_Tomorrow.png', audio_filename: 'The_Weeknd_Enjoy_The_Show.mp3')
seed_track(title: 'Saturn', artist: 'SZA', uploader: user1, genre: 'R&B', image_filename: 'SZA2.png', audio_filename: 'SZA_Saturn.mp3')
seed_track(title: 'Take Me Back to LA', artist: 'The Weeknd', uploader: user11, genre: 'R&B', image_filename: 'The_Weeknd_Hurry_Up_Tomorrow.png', audio_filename: 'The_Weeknd_Take_Me_Back_To_LA.mp3')
seed_track(title: 'Dasies', artist: 'Justin Bieber', uploader: user21, genre: 'R&B', image_filename: 'Bieber_Swag.jpg', audio_filename: 'Justin_Bieber_Dasies.mp3')
seed_track(title: 'Sometimes', artist: 'Blxst', uploader: user20, genre: 'R&B', image_filename: 'Blxst.png', audio_filename: 'Blxst_Sometimes.mp3')

# ---------------- Rap ----------------
seed_track(title: 'Monitoring Me', artist: 'Lil Durk', uploader: user27, genre: 'Rap', image_filename: 'Lil_Durk.jpg', audio_filename: 'Lil_Durk_Monitoring_Me.mp3')
seed_track(title: 'Peekaboo', artist: 'Kendrick Lamar', uploader: user26, genre: 'Rap', image_filename: 'Kendrick_Lamar.jpg', audio_filename: 'Kendrick_Lamar_Peekaboo.mp3')
seed_track(title: 'What Did I Miss', artist: 'Drake', uploader: user28, genre: 'Rap', image_filename: 'Drake.png', audio_filename: 'Drake_What_Did_I_Miss.mp3')
seed_track(title: 'Luther', artist: 'Kendrick Lamar', uploader: user26, genre: 'Rap', image_filename: 'Kendrick_Lamar.jpg', audio_filename: 'Kendrick_Lamar_Luther.mp3')
seed_track(title: 'Lemme See', artist: 'Kodak Black', uploader: user19, genre: 'Rap', image_filename: 'Kodak_Black2.jpg', audio_filename: 'Kodak_Black_Lemme_See.mp3')

# ---------------- Other Genres ----------------
seed_track(title: 'Birds Of A Feather', artist: 'Billie Eilish', uploader: user2, genre: 'Pop', image_filename: 'Billie_Eilish.png', audio_filename: 'Billie_Eilish_Birds_Of_A_Feather.mp3')
seed_track(title: 'Love Again', artist: 'Dua Lipa', uploader: user14, genre: 'Pop', image_filename: 'Dua_Lipa.png', audio_filename: 'Dua_Lipa_Love_Again.mp3')
seed_track(title: 'Agora Hills', artist: 'Doja Cat', uploader: user8, genre: 'Pop', image_filename: 'Doja_Cat2.png', audio_filename: 'Doja_Cat_Agora_Hills.mp3')
seed_track(title: 'Kiss Me More', artist: 'Doja Cat', uploader: user8, genre: 'Pop', image_filename: 'Doja_Cat.png', audio_filename: 'Doja_Cat_Kiss_Me_More.mp3')
seed_track(title: 'Bam Bam', artist: 'Camila Cabello', uploader: user24, genre: 'Pop', image_filename: 'Camilla_Cabello.jpg', audio_filename: 'Camila_Cabello_Bam_Bam.mp3')

seed_track(title: 'Telepatia', artist: 'Kali Uchis', uploader: user16, genre: 'Latin', image_filename: 'Kali_Uchis.png', audio_filename: 'Kali_Uchis_Telepatia.mp3')
seed_track(title: 'Ultima Cancion', artist: 'Anuel AA', uploader: user18, genre: 'Latin', image_filename: 'Anuel_AA.png', audio_filename: 'Anuel_AA_Ultima_Cancion.mp3')
seed_track(title: 'La Romana', artist: 'Bad Bunny', uploader: user5, genre: 'Latin', image_filename: 'Bad_Bunny.jpg', audio_filename: 'Bad_Bunny_La_Romana.mp3')
seed_track(title: 'La Cancion', artist: 'J Balvin', uploader: user13, genre: 'Latin', image_filename: 'J_Balvin.png', audio_filename: 'J_Balvin_La_Cancion.mp3')
seed_track(title: 'Sejodioto', artist: 'Karol G', uploader: user7, genre: 'Latin', image_filename: 'Karol_G.jpg', audio_filename: 'Karol_G_Sejodioto.mp3')

seed_track(title: 'Ill Take You High', artist: 'Tiesto', uploader: user15, genre: 'EDM', image_filename: 'Tiesto.jpg', audio_filename: 'Tiesto_Ill_Take_You_High.mp3')
seed_track(title: 'All You Need To Know', artist: 'Gryffin', uploader: user17, genre: 'EDM', image_filename: 'Gryffin.png', audio_filename: 'Gryffin_All_You_Need_To_Know.mp3')
seed_track(title: 'Sideways', artist: 'Illenium', uploader: user22, genre: 'EDM', image_filename: 'Illenium.jpg', audio_filename: 'Illenium_Sideways.mp3')
seed_track(title: 'Overthinker', artist: 'Inzo', uploader: user12, genre: 'EDM', image_filename: 'Inzo.jpg', audio_filename: 'Inzo_Overthinker.mp3')
seed_track(title: 'Out Of My Head', artist: 'Rezz', uploader: user10, genre: 'EDM', image_filename: 'Rezz.jpg', audio_filename: 'Rezz_Out_Of_My_Head.mp3')

# ---------------- Dummy Comments ----------------
# Custom curated comment pool
comments_pool = [
  "This track is fire",
  "This track is soo good",
  "This song is soo good",
  "This song is fire",
  "This is a banger",
  "banger",
  "Got this on repeat",
  "Can’t stop listening to this",
  "Can’t stop listening",
  "I love listening",
  "I love listening to this",
  "Love this song",
  "good vibes song",
  "Vibes",
  "Song of the year",
  "best song this year",
  "This song hits different",
  "such a good song",
  "On repeat",
  "repeat all week",
  "on repeat all day",
  "So chill",
  "The beat is nice",
  "Wowwww fire",
  "Man this doesn't dissapoint",  
]

# Generate 2–5 comments per track
Track.all.each do |track|
  rand(2..5).times do
    Comment.create!(
      body: comments_pool.sample,
      commenter_id: commenters.sample.id,
      track_id: track.id
    )
  end
end

puts '✅✅✅✅✅✅✅ All data seeded'
