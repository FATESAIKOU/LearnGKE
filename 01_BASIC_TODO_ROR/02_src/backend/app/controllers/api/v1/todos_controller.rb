# frozen_string_literal: true

module Api
  module V1
    # ToDo 項目的 API Controller
    class TodosController < ApplicationController
      before_action :set_todo, only: %i[show update destroy]

      # GET /api/v1/todos
      # GET /api/v1/todos?q=keyword
      def index
        @todos = Todo.all
        @todos = @todos.search(params[:q]) if params[:q].present?
        @todos = @todos.ordered

        render json: { todos: @todos }
      end

      # GET /api/v1/todos/:id
      def show
        render json: { todo: @todo }
      end

      # POST /api/v1/todos
      def create
        @todo = Todo.new(todo_params)

        if @todo.save
          render json: { todo: @todo }, status: :created
        else
          render json: {
            error: {
              code: "VALIDATION_ERROR",
              message: @todo.errors.full_messages.join(", ")
            }
          }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/todos/:id
      def update
        if @todo.update(todo_params)
          render json: { todo: @todo }
        else
          render json: {
            error: {
              code: "VALIDATION_ERROR",
              message: @todo.errors.full_messages.join(", ")
            }
          }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/todos/:id
      def destroy
        @todo.destroy
        head :no_content
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
