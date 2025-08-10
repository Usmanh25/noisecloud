Rails.application.config.session_store :cookie_store,
  key: '_songcloud_session',
  domain: Rails.env.production? ? :all : nil, # <--- explicitly allow all subdomains / cross site in prod
  same_site: Rails.env.production? ? :none : :lax,
  secure: Rails.env.production?
