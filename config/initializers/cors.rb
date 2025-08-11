Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://songcloud-v3.vercel.app'  # your frontend origin

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true  # must be true to allow cookies
  end
end
