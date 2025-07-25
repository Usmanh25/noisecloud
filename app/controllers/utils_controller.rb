class UtilsController < ApplicationController
  def migrate
    if Rails.env.production?
      migrations_paths = ActiveRecord::Migrator.migrations_paths
      ActiveRecord::MigrationContext.new(migrations_paths, ActiveRecord::SchemaMigration).migrate
      render plain: "DB migrated!"
    else
      render plain: "Not allowed"
    end
  end

  def seed
    if Rails.env.production?
      load Rails.root.join('db/seeds.rb')
      render plain: "DB seeded!"
    else
      render plain: "Not allowed"
    end
  end
end