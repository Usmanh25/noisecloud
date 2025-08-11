# class Api::CommentsController < ApplicationController
#     def create

#         @comment = Comment.new(comment_params)
#         @comment.commenter_id = current_user.id

#         if @comment.save
#             @comment = Comment.includes(:track, :commenter).find(@comment.id) # 👈 preload associations
#             render :show
#         else
#             render json: @comment.errors.full_messages, status: 422
#         end
#     end

#     # def index
#     #     @comments = Comment.includes(:commenter).all
#     #     render 'api/comments/index'
#     # end
#     def index
#         if params[:track_id]
#             @comments = Comment.includes(:commenter).where(track_id: params[:track_id])
#         else
#             @comments = Comment.includes(:commenter).all
#         end
#         render 'api/comments/index'
#     end

#     def destroy
#         @comment = Comment.find_by(id: params[:id])
#         @comment.destroy
#         render json: {}
#     end

#     private
#     def comment_params
#         params.require(:comment).permit(:body, :commenter_id, :track_id)
#     end
# end

class Api::CommentsController < ApplicationController
  def create
    unless current_user
      return render json: { errors: ["You must be logged in to comment"] }, status: :unauthorized
    end

    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id  # safe now since current_user checked

    if @comment.save
      @comment = Comment.includes(:track, :commenter).find(@comment.id) # preload associations
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
    # Removed :commenter_id since it should always come from current_user
  end
end

