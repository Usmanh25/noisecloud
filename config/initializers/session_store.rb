# Rails.application.config.session_store :cookie_store,
#   key: '_songcloud_session',
#   domain: Rails.env.production? ? 'songcloud-e382.onrender.com' : nil,
#   same_site: Rails.env.production? ? :none : :lax,
#   secure: Rails.env.production?

Rails.application.config.session_store :cookie_store,
  key: '_songcloud_session',
  domain: 'songcloud-e382.onrender.com',  # Explicitly your backend domain
  same_site: :none,
  secure: true