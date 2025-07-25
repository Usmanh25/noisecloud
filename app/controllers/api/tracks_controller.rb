class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render 'api/tracks/index'
    end

    def show
        @track = Track.includes(comments: :commenter).find_by(id: params[:id])
        if @track
            render :show
        else
            render json: { error: "Track not found" }, status: 404
        end
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        @track = Track.find_by(id: params[:id])
        if @track&.update(track_params)
            render :show
        else
            render json: @track ? @track.errors.full_messages : ["Track not found"], status: 422
        end
    end

    def destroy
        @track = Track.find_by(id: params[:id])
        if @track
            @track.destroy
            render json: {}
        else
            render json: { error: "Track not found" }, status: 404
        end
    end

    private

    def track_params
        params.require(:track).permit(:title, :artist, :genre, :uploader_id, :track, :image)
    end

end
