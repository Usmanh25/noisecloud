puts "Starting test..."

require 'logger'
puts "Logger loaded? #{defined?(Logger)}"

require 'active_support/logger_thread_safe_level'
puts "ActiveSupport::LoggerThreadSafeLevel loaded? #{defined?(ActiveSupport::LoggerThreadSafeLevel)}"

puts "Test complete."
