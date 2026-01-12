# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Todo.find_or_create_by!(title: "買牛奶") do |todo|
  todo.description = "去全聯買兩瓶全脂牛奶"
  todo.completed = false
end

Todo.find_or_create_by!(title: "洗衣服") do |todo|
  todo.description = "記得深淺色分開洗"
  todo.completed = true
end

Todo.find_or_create_by!(title: "準備 GKE 教材") do |todo|
  todo.description = "整理 Kubernetes 基礎觀念與 GKE 操作步驟"
  todo.completed = false
end
