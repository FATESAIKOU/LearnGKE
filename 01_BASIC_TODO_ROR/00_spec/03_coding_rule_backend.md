# Backend Coding Rules

## 1. 架構規則

### 1.1 API 設計
- RESTful API 設計
- 統一使用 `/api/v1` 前綴
- JSON 格式回應

### 1.2 Controller 規則
- 保持 Controller 簡潔
- 商業邏輯放在 Model 或 Service
- 使用 Strong Parameters

---

## 2. 命名規則

### 2.1 檔案命名
- Controller：snake_case（`todos_controller.rb`）
- Model：snake_case 單數（`todo.rb`）
- Migration：snake_case 含時間戳

### 2.2 方法命名
- 方法：snake_case
- 類別：PascalCase
- 常數：UPPER_SNAKE_CASE

---

## 3. 資料庫規則

- 資料表名稱：複數 snake_case（`todos`）
- 欄位名稱：snake_case
- 必須有 `created_at`, `updated_at`

---

## 4. 錯誤處理

- 統一錯誤回應格式
- 適當的 HTTP 狀態碼
- 驗證錯誤回傳 422

```ruby
# 錯誤回應格式
{
  error: {
    code: "ERROR_CODE",
    message: "錯誤訊息"
  }
}
```

---

## 5. 測試規則

- Model 必須有單元測試
- API 必須有整合測試
