# test_db_connection.rb
require 'pg'
require 'uri'

begin
  db_url = ENV['DATABASE_URL']
  raise "DATABASE_URL not set" unless db_url

  uri = URI.parse(db_url)
  conn = PG.connect(
    host: uri.host,
    port: uri.port || 5432,
    dbname: uri.path[1..-1], # remove leading '/'
    user: uri.user,
    password: uri.password,
    sslmode: 'require'
  )

  result = conn.exec("SELECT NOW();")
  puts "✅ Connected! Current DB time: #{result[0]['now']}"
  conn.close
rescue => e
  puts "❌ Connection failed: #{e.message}"
end
