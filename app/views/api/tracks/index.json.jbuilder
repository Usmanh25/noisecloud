@tracks.each do |track|
    json.set! track.id do 
        json.partial! 'api/tracks/track', track: track
    end
end

# @tracks.each do |track|
#     json.set! track.id do 
#         json.partial! 'track', track: track
#     end
# end

# json.tracks do 
#     @tracks.each do |track|
#         json.set! track.id do 
#             json.partial! 'track', track: track
#         end
#     end
# end