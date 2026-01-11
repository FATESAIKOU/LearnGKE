class Todo < ApplicationRecord
  # Validations
  validates :title, presence: true, length: { maximum: 255 }

  # Scopes
  scope :search, ->(query) { where("title LIKE ?", "%#{query}%") if query.present? }
  scope :ordered, -> { order(created_at: :desc) }
end
