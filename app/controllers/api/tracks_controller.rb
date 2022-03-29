class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        # render :index
        render 'api/tracks/index'
    end

    def show
        @track = Track.find_by(id: params[:id])
        render :show
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            render :show
            # render 'api/tracks/show'
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        @track = Track.find_by(id: params[:id])
        if @track.update(track_params)
            render :show
            # render 'api/tracks/show'
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find_by(id: params[:id])
        @track.destroy
        render json: {}
    end

    private

    def track_params
        params.require(:track).permit(:title, :uploader_id, :genre, :audio_file, :image_file)
    end

end
