class CraftsController < ApplicationController
  before_action :set_craft, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_craft, only: [:update, :destroy]

  # GET /crafts
  def index
    @crafts = Craft.all

    render json: @crafts
  end

  # GET /crafts/1
  def show
    render json: @craft
  end

  # POST /crafts
  def create
    @craft = Craft.new(craft_params)
    @craft.user = @current_user

    if @craft.save
      render json: @craft, status: :created
    else
      render json: @craft.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crafts/1
  def update
    if @craft.update(craft_params)
      render json: @craft
    else
      render json: @craft.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crafts/1
  def destroy
    @craft.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_craft
      @craft = Craft.find(params[:id])
    end
    def set_user_craft
      @craft = @current_user.crafts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def craft_params
      params.require(:craft).permit(:title, :name, :description, :email, :image, :posted_date, :user_id)
    end
end
