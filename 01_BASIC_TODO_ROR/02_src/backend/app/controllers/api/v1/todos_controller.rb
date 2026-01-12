# frozen_string_literal: true

module Api
  module V1
    # ToDo 項目的 API Controller
    class TodosController < ApplicationController
      before_action :set_todo, only: %i[show update destroy]

      # GET /api/v1/todos
      # GET /api/v1/todos?q=keyword
      def index
        @todos = Todo.search(params[:q]).ordered
        render json: { todos: @todos }
      end

      # GET /api/v1/todos/:id
      def show
        # TODO: 實作單一項目顯示
      end

      # POST /api/v1/todos
      def create
        # TODO: 實作新增功能
      end

      # PATCH/PUT /api/v1/todos/:id
      def update
        # TODO: 實作更新功能
      end

      # DELETE /api/v1/todos/:id
      def destroy
        # TODO: 實作刪除功能
      end

      private

      def set_todo
        @todo = Todo.find(params.expect(:id))
      end

      def todo_params
        params.expect(todo: %i[title description completed])
      end
    end
  end
end
