class Api::CommentsController < ApplicationController
  # ApplicationController's before_action :authenticate_request is called automatically

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      @comment = Comment.includes(:track, :commenter).find(@comment.id)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    if params[:track_id]
      @comments = Comment.includes(:commenter).where(track_id: params[:track_id])
    else
      @comments = Comment.includes(:commenter).all
    end
    render 'api/comments/index'
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy if @comment
    render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
