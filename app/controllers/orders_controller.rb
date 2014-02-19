class OrdersController < ApplicationController

  def create
      @order = Order.new(params[:order])
      if @order.save
        flash[:success] = "Ваш заказ оформлен!"
        redirect_to root_url
      else
        render page_slug_path("order")
      end
    end
end
