# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Track.delete_all

# Create Users

guest = User.create!(email: "Guest@gmail.com", password: "123456")
user1 = User.create!(email: "User123@gmail.com", password: "123456")
user2 = User.create!(email: "User234@gmail.com", password: "123456")
user3 = User.create!(email: "User345@gmail.com", password: "123456")
user4 = User.create!(email: "User456@gmail.com", password: "123456")
user5 = User.create!(email: "User567@gmail.com", password: "123456")

# Create Tracks

track1 = Track.create!(title: 'Ultima Cancion', uploader_id: user1.id, genre: 'Latin')
track2 = Track.create!(title: 'La Romana', uploader_id: user1.id, genre: 'Latin')
track3 = Track.create!(title: 'La Cartera', uploader_id: user1.id, genre: 'Latin')
track4 = Track.create!(title: 'La Cancion', uploader_id: user1.id, genre: 'Latin')
track5 = Track.create!(title: 'Sejodioto', uploader_id: user1.id, genre: 'Latin')
track6 = Track.create!(title: 'Subete', uploader_id: user1.id, genre: 'Latin')

track7 = Track.create!(title: 'Publicity Stunt', uploader_id: user2.id, genre: 'Rap')
track8 = Track.create!(title: 'Pushin P', uploader_id: user2.id, genre: 'Rap')
track9 = Track.create!(title: 'Super Gremlin', uploader_id: user2.id, genre: 'Rap')
track10 = Track.create!(title: 'Real As It Gets', uploader_id: user2.id, genre: 'Rap')
track11 = Track.create!(title: 'No Interviews', uploader_id: user2.id, genre: 'Rap')
track12 = Track.create!(title: 'It Feel Different', uploader_id: user2.id, genre: 'Rap')

track13 = Track.create!(title: 'Bam Bam', uploader_id: user3.id, genre: 'Pop')
track14 = Track.create!(title: 'Kiss Me More', uploader_id: user3.id, genre: 'Pop')
track15 = Track.create!(title: 'Love Again', uploader_id: user3.id, genre: 'Pop')
track16 = Track.create!(title: 'Peaches', uploader_id: user3.id, genre: 'Pop')
track17 = Track.create!(title: 'Dancing Feet', uploader_id: user3.id, genre: 'Pop')
track18 = Track.create!(title: 'Telepatia', uploader_id: user3.id, genre: 'Pop')

track19 = Track.create!(title: 'Sometimes', uploader_id: user4.id, genre: 'R&B')
track20 = Track.create!(title: 'In The Bible', uploader_id: user4.id, genre: 'R&B')
track21 = Track.create!(title: 'Self Care', uploader_id: user4.id, genre: 'R&B')
track22 = Track.create!(title: 'Unloyal', uploader_id: user4.id, genre: 'R&B')
track23 = Track.create!(title: 'I Hate U', uploader_id: user4.id, genre: 'R&B')
track24 = Track.create!(title: 'Out Of Time', uploader_id: user4.id, genre: 'R&B')

track25 = Track.create!(title: 'Follow', uploader_id: user5.id, genre: 'EDM')
track26 = Track.create!(title: 'Ill Take You High', uploader_id: user5.id, genre: 'EDM')
track27 = Track.create!(title: 'Out Of My Head', uploader_id: user5.id, genre: 'EDM')
track28 = Track.create!(title: 'Overthinker', uploader_id: user5.id, genre: 'EDM')
track29 = Track.create!(title: 'Sideways', uploader_id: user5.id, genre: 'EDM')
track30 = Track.create!(title: 'All You Need To Know', uploader_id: user5.id, genre: 'EDM')


# AWS Seeds

track1_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Anuel_AA.png')
track1.image.attach(io: track1_image, filename: 'Anuel_AA.png')
track1_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Anuel_AA_Ultima_Cancion.mp3')
track1.audio.attach(io: track1_audio, filename: 'Anuel_AA_Ultima_Cancion.mp3')

track2_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Bad_Bunny.jpg')
track2.image.attach(io: track2_image, filename: 'Bad_Bunny.jpg')
track2_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Bad_Bunny_La_Romana.mp3')
track2.audio.attach(io: track2_audio, filename: 'Bad_Bunny_La_Romana.mp3')

track3_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Farruko.jpg')
track3.image.attach(io: track3_image, filename: 'Farruko.jpg')
track3_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Farruko_La_Cartera.mp3')
track3.audio.attach(io: track3_audio, filename: 'Farruko_La_Cartera.mp3')

track4_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/J_Balvin.png')
track4.image.attach(io: track4_image, filename: 'J_Balvin.png')
track4_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/J_Balvin_La_Cancion.mp3')
track4.audio.attach(io: track4_audio, filename: 'J_Balvin_La_Cancion.mp3')

track5_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Karol_G.jpg')
track5.image.attach(io: track5_image, filename: 'Karol_G.jpg')
track5_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Karol_G_Sejodioto.mp3')
track5.audio.attach(io: track5_audio, filename: 'Karol_G_Sejodioto.mp3')

track6_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lary_Over.jpg')
track6.image.attach(io: track6_image, filename: 'Lary_Over.jpg')
track6_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lary_Over_Subete.mp3')
track6.audio.attach(io: track6_audio, filename: 'Lary_Over_Subete.mp3')

track7_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gucci_Mane.png')
track7.image.attach(io: track7_image, filename: 'Gucci_Mane.png')
track7_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gucci_Mane_Publicity_Stunt.mp3')
track7.audio.attach(io: track7_audio, filename: 'Gucci_Mane_Publicity_Stunt.mp3')

track8_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gunna.png')
track8.image.attach(io: track8_image, filename: 'Gunna.png')
track8_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gunna_Pushin_P.mp3')
track8.audio.attach(io: track8_audio, filename: 'Gunna_Pushin_P.mp3')

track9_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kodak_Black.png')
track9.image.attach(io: track9_image, filename: 'Kodak_Black.png')
track9_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kodak_Black_Super_Gremlin.mp3')
track9.audio.attach(io: track9_audio, filename: 'Kodak_Black_Super_Gremlin.mp3')

track10_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Baby.png')
track10.image.attach(io: track10_image, filename: 'Lil_Baby.png')
track10_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Baby_Real_As_It_Gets.mp3')
track10.audio.attach(io: track10_audio, filename: 'Lil_Baby_Real_As_It_Gets.mp3')

track11_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Durk.png')
track11.image.attach(io: track11_image, filename: 'Lil_Durk.png')
track11_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Lil_Durk_No_Interviews.mp3')
track11.audio.attach(io: track11_audio, filename: 'Lil_Durk_No_Interviews.mp3')

track12_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Young_Dolph.png')
track12.image.attach(io: track12_image, filename: 'Young_Dolph.png')
track12_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Young_Dolph_It_Feel_Different.mp3')
track12.audio.attach(io: track12_audio, filename: 'Young_Dolph_It_Feel_Different.mp3')

track13_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Camilla_Cabello.jpg')
track13.image.attach(io: track13_image, filename: 'Camilla_Cabello.jpg')
track13_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Camila_Cabello_Bam_Bam.mp3')
track13.audio.attach(io: track13_audio, filename: 'Camila_Cabello_Bam_Bam.mp3')

track14_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Doja_Cat.png')
track14.image.attach(io: track14_image, filename: 'Doja_Cat.png')
track14_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Doja_Cat_Kiss_Me_More.mp3')
track14.audio.attach(io: track14_audio, filename: 'Doja_Cat_Kiss_Me_More.mp3')

track15_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Dua_Lipa.png')
track15.image.attach(io: track15_image, filename: 'Dua_Lipa.png')
track15_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Dua_Lipa_Love_Again.mp3')
track15.audio.attach(io: track15_audio, filename: 'Dua_Lipa_Love_Again.mp3')

track16_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Justin_Bieber.png')
track16.image.attach(io: track16_image, filename: 'Justin_Bieber.png')
track16_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Justin_Beiber_Peaches.mp3')
track16.audio.attach(io: track16_audio, filename: 'Justin_Beiber_Peaches.mp3')

track17_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kygo.jpg')
track17.image.attach(io: track17_image, filename: 'Kygo.jpg')
track17_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kygo_Dancing_Feet.mp3')
track17.audio.attach(io: track17_audio, filename: 'Kygo_Dancing_Feet.mp3')

track18_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kali_Uchis.png')
track18.image.attach(io: track18_image, filename: 'Kali_Uchis.png')
track18_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Kali_Uchis_Telepatia.mp3')
track18.audio.attach(io: track18_audio, filename: 'Kali_Uchis_Telepatia.mp3')

track19_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Blxst.png')
track19.image.attach(io: track19_image, filename: 'Blxst.png')
track19_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Blxst_Sometimes.mp3')
track19.audio.attach(io: track19_audio, filename: 'Blxst_Sometimes.mp3')

track20_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Drake.png')
track20.image.attach(io: track20_image, filename: 'Drake.png')
track20_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Drake_In_The_Bible.mp3')
track20.audio.attach(io: track20_audio, filename: 'Drake_In_The_Bible.mp3')

track21_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Mac_Miller.jpg')
track21.image.attach(io: track21_image, filename: 'Mac_Miller.jpg')
track21_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Mac_Miller_Self_Care.mp3')
track21.audio.attach(io: track21_audio, filename: 'Mac_Miller_Self_Care.mp3')

track22_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Summer_Walker.png')
track22.image.attach(io: track22_image, filename: 'Summer_Walker.png')
track22_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Summer_Walker_Unloyal.mp3')
track22.audio.attach(io: track22_audio, filename: 'Summer_Walker_Unloyal.mp3')

track23_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/SZA.png')
track23.image.attach(io: track23_image, filename: 'SZA.png')
track23_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/SZA_I_Hate_U.mp3')
track23.audio.attach(io: track23_audio, filename: 'SZA_I_Hate_U.mp3')

track24_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/The_Weeknd.png')
track24.image.attach(io: track24_image, filename: 'The_Weeknd.png')
track24_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/The_Weeknd_Out_Of_Time.mp3')
track24.audio.attach(io: track24_audio, filename: 'The_Weeknd_Out_Of_Time.mp3')

track25_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Zedd.jpg')
track25.image.attach(io: track25_image, filename: 'Zedd.jpg')
track25_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Zedd_Follow.mp3')
track25.audio.attach(io: track25_audio, filename: 'Zedd_Follow.mp3')

track26_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Tiesto.jpg')
track26.image.attach(io: track26_image, filename: 'Tiesto.jpg')
track26_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Tiesto_Ill_Take_You_High.mp3')
track26.audio.attach(io: track26_audio, filename: 'Tiesto_Ill_Take_You_High.mp3')

track27_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Rezz.jpg')
track27.image.attach(io: track27_image, filename: 'Rezz.jpg')
track27_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Rezz_Out_Of_My_Head.mp3')
track27.audio.attach(io: track27_audio, filename: 'Rezz_Out_Of_My_Head.mp3')

track28_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Inzo.jpg')
track28.image.attach(io: track28_image, filename: 'Inzo.jpg')
track28_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Inzo_Overthinker.mp3')
track28.audio.attach(io: track28_audio, filename: 'Inzo_Overthinker.mp3')

track29_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Illenium.jpg')
track29.image.attach(io: track29_image, filename: 'Illenium.jpg')
track29_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Illenium_Sideways.mp3')
track29.audio.attach(io: track29_audio, filename: 'Illenium_Sideways.mp3')

track30_image = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gryffin.png')
track30.image.attach(io: track30_image, filename: 'Gryffin.png')
track30_audio = open('https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Gryffin_All_You_Need_To_Know.mp3')
track30.audio.attach(io: track30_audio, filename: 'Gryffin_All_You_Need_To_Know.mp3')

puts "30 Tracks Have Been Seeded"
