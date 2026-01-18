# Backend 實現進度管理

## 技術棧
- **Framework**: Ruby on Rails 8.1 (API Mode)
- **Language**: Ruby 3.4
- **Database**: MySQL 8.0
- **Linter**: RuboCop

---

## 實現步驟規劃

### Phase 1: 基礎框架建立
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B1-1 | 建立 Rails API 專案 | rails new --api | ✅ 完成 |
| B1-2 | 設定 RuboCop | 依據 coding rule 設定 linter | ✅ 完成 |
| B1-3 | 設定資料庫連線 | database.yml 設定 MySQL | ✅ 完成 |
| B1-4 | 測試基礎啟動 | 確認 Rails server 可正常運作 | ✅ 完成 |

### Phase 2: 資料模型建立
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B2-1 | 建立 Todo Model | 含 title, description, completed | ✅ 完成 |
| B2-2 | 建立 Migration | 建立 todos 資料表 | ✅ 完成 |
| B2-3 | 加入 Validation | title 必填驗證 | ✅ 完成 |
| B2-4 | 執行 Migration | 建立資料表 | ✅ 完成 |
| B2-5 | 測試 Model | 驗證 Model 運作正常 | ✅ 完成 |

### Phase 3: API Controller 基礎
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B3-1 | 設定 API 路由 | /api/v1/todos | ✅ 完成 |
| B3-2 | 建立 TodosController | 空的 Controller 骨架 | ✅ 完成 |
| B3-3 | 設定錯誤處理 | 統一錯誤回應格式 | ✅ 完成 |
| B3-4 | 測試路由設定 | 確認路由正確 | ✅ 完成 |

### Phase 4: 列表 API (GET /todos)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B4-1 | 實作 index action | 列出所有 Todos | ✅ 完成 |
| B4-2 | 實作搜尋功能 | 支援 ?q= 查詢參數 | ✅ 完成 |
| B4-3 | 執行 RuboCop | 檢查程式碼風格 | ✅ 完成 |
| B4-4 | 測試列表 API | curl 或 RSpec 測試 | ✅ 完成 |

### Phase 5: 詳情 API (GET /todos/:id)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B5-1 | 實作 show action | 取得單一 Todo | ✅ 完成 |
| B5-2 | 處理 404 錯誤 | 找不到時回傳錯誤 | ✅ 完成 |
| B5-3 | 執行 RuboCop | 檢查程式碼風格 | ✅ 完成 |
| B5-4 | 測試詳情 API | curl 或 RSpec 測試 | ✅ 完成 |

### Phase 6: 新增 API (POST /todos)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B6-1 | 實作 create action | 新增 Todo | ✅ 完成 |
| B6-2 | 實作 Strong Parameters | 白名單參數過濾 | ✅ 完成 |
| B6-3 | 處理驗證錯誤 | 回傳 422 錯誤 | ✅ 完成 |
| B6-4 | 執行 RuboCop | 檢查程式碼風格 | ✅ 完成 |
| B6-5 | 測試新增 API | curl 或 RSpec 測試 | ✅ 完成 |

### Phase 7: 更新 API (PATCH /todos/:id)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B7-1 | 實作 update action | 更新 Todo | ✅ 完成 |
| B7-2 | 處理 404/422 錯誤 | 找不到或驗證失敗 | ✅ 完成 |
| B7-3 | 執行 RuboCop | 檢查程式碼風格 | ✅ 完成 |
| B7-4 | 測試更新 API | curl 或 RSpec 測試 | ✅ 完成 |

### Phase 8: 刪除 API (DELETE /todos/:id)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B8-1 | 實作 destroy action | 刪除 Todo | ✅ 完成 |
| B8-2 | 處理 404 錯誤 | 找不到時回傳錯誤 | ✅ 完成 |
| B8-3 | 執行 RuboCop | 檢查程式碼風格 | ✅ 完成 |
| B8-4 | 測試刪除 API | curl 或 RSpec 測試 | ✅ 完成 |

### Phase 9: Docker 化
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| B9-1 | 建立 Dockerfile | Backend Dockerfile | ✅ 完成 |
| B9-2 | 測試容器啟動 | 確認容器內可正常運作 | ✅ 完成 |

---

## 專案結構規劃

```
backend/
├── app/
│   ├── controllers/
│   │   ├── application_controller.rb
│   │   └── api/
│   │       └── v1/
│   │           └── todos_controller.rb
│   └── models/
│       └── todo.rb
├── config/
│   ├── database.yml
│   └── routes.rb
├── db/
│   └── migrate/
│       └── xxx_create_todos.rb
├── spec/                    # RSpec 測試
│   ├── models/
│   │   └── todo_spec.rb
│   └── requests/
│       └── api/
│           └── v1/
│               └── todos_spec.rb
├── .rubocop.yml            # RuboCop 設定
├── Dockerfile
├── Gemfile
└── Gemfile.lock
```

---

## RuboCop 檢查清單

每次修改程式碼後必須執行：
```bash
bundle exec rubocop
```

---

## 變更記錄

| 日期 | 變更內容 |
|------|----------|
| 2026-01-11 | 初始規劃建立 |
| 2026-01-18 | 全部 Phase 完成，Docker 化測試通過 |
