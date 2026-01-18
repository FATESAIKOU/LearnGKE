class CreateTodos < ActiveRecord::Migration[8.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false, limit: 255
      t.text :description
      t.boolean :completed, null: false, default: false

      t.timestamps
    end

    add_index :todos, :created_at
  end
end
