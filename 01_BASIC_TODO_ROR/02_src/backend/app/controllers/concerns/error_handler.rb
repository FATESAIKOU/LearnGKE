# frozen_string_literal: true

# 統一錯誤處理模組
module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity
    rescue_from ActionController::ParameterMissing, with: :handle_bad_request
  end

  private

  def handle_not_found(exception)
    render json: {
      error: {
        code: "NOT_FOUND",
        message: exception.message
      }
    }, status: :not_found
  end

  def handle_unprocessable_entity(exception)
    render json: {
      error: {
        code: "VALIDATION_ERROR",
        message: exception.record.errors.full_messages.join(", ")
      }
    }, status: :unprocessable_entity
  end

  def handle_bad_request(exception)
    render json: {
      error: {
        code: "BAD_REQUEST",
        message: exception.message
      }
    }, status: :bad_request
  end
end
