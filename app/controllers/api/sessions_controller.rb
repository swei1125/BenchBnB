class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render @user
    else
      render ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if current_user
      logout(current_user)
      render {}
    else
      render ['no user logged in'], status: 404
    end
  end
end
