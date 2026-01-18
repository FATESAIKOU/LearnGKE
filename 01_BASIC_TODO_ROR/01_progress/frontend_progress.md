# Frontend 實現進度管理

## 技術棧
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: fetch API

---

## 實現步驟規劃

### Phase 1: 基礎框架建立
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F1-1 | 建立 Next.js 專案 | 使用 create-next-app 建立專案雛形 | ✅ 完成 |
| F1-2 | 設定 ESLint | 依據 coding rule 設定 linter（禁止 use client 呼叫 API） | ✅ 完成 |
| F1-3 | 設定專案結構 | 建立 components, lib, types 目錄 | ✅ 完成 |
| F1-4 | 測試基礎啟動 | 確認 Next.js dev server 可正常運作 | ✅ 完成 |

### Phase 2: API 連接層
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F2-1 | 定義 TypeScript 型別 | 建立 Todo interface | ✅ 完成 |
| F2-2 | 建立 API Client | 封裝 fetch 呼叫後端 API | ✅ 完成 |
| F2-3 | 測試 API 連接 | 使用 mock 或實際後端測試 | ✅ 完成 |

### Phase 3: 列表頁面 (List/Search)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F3-1 | 建立列表頁面 | app/page.tsx 顯示 Todo 列表 | ✅ 完成 |
| F3-2 | 建立 TodoItem 元件 | 單一 Todo 項目顯示元件 | ✅ 完成 |
| F3-3 | 實作搜尋功能 | 搜尋框與過濾邏輯 | ✅ 完成 |
| F3-4 | 執行 ESLint | 檢查程式碼風格 | ✅ 完成 |
| F3-5 | 測試列表功能 | 確認列表顯示與搜尋正常 | ✅ 完成 |

### Phase 4: 詳情頁面 (Show)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F4-1 | 建立詳情頁面 | app/todos/[id]/page.tsx | ✅ 完成 |
| F4-2 | 執行 ESLint | 檢查程式碼風格 | ✅ 完成 |
| F4-3 | 測試詳情頁面 | 確認可正確顯示單一 Todo | ✅ 完成 |

### Phase 5: 新增功能 (Create)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F5-1 | 建立新增頁面 | app/todos/new/page.tsx | ✅ 完成 |
| F5-2 | 建立表單元件 | TodoForm 元件（可重用於編輯） | ✅ 完成 |
| F5-3 | 實作表單驗證 | 標題必填驗證 | ✅ 完成 |
| F5-4 | 執行 ESLint | 檢查程式碼風格 | ✅ 完成 |
| F5-5 | 測試新增功能 | 確認可成功新增 Todo | ✅ 完成 |

### Phase 6: 編輯功能 (Update)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F6-1 | 建立編輯頁面 | app/todos/[id]/edit/page.tsx | ✅ 完成 |
| F6-2 | 重用 TodoForm 元件 | 傳入現有資料進行編輯 | ✅ 完成 |
| F6-3 | 執行 ESLint | 檢查程式碼風格 | ✅ 完成 |
| F6-4 | 測試編輯功能 | 確認可成功更新 Todo | ✅ 完成 |

### Phase 7: 刪除功能 (Delete)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F7-1 | 實作刪除按鈕 | 在列表/詳情頁加入刪除按鈕 | ✅ 完成 |
| F7-2 | 實作確認對話框 | 刪除前確認 | ✅ 完成 |
| F7-3 | 執行 ESLint | 檢查程式碼風格 | ✅ 完成 |
| F7-4 | 測試刪除功能 | 確認可成功刪除 Todo | ✅ 完成 |

### Phase 8: 完成狀態切換 (Toggle Complete)
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F8-1 | 實作 Checkbox | 在 TodoItem 加入完成狀態切換 | ✅ 完成 |
| F8-2 | 執行 ESLsint | 檢查程式碼風格 | ✅ 完成 |
| F8-3 | 測試切換功能 | 確認可即時切換完成狀態 | ✅ 完成 |

### Phase 9: Docker 化
| 步驟 | 項目 | 說明 | 狀態 |
|------|------|------|------|
| F9-1 | 建立 Dockerfile | Frontend Dockerfile (production) | ✅ 完成 |
| F9-2 | 測試容器啟動 | 確認容器內可正常運作 | ✅ 完成 |

---

## 專案結構規劃

```
frontend/
├── app/
│   ├── layout.tsx          # 共用 Layout
│   ├── page.tsx            # 首頁（列表頁）
│   ├── globals.css         # 全域樣式
│   └── todos/
│       ├── new/
│       │   └── page.tsx    # 新增頁面
│       └── [id]/
│           ├── page.tsx    # 詳情頁面
│           └── edit/
│               └── page.tsx # 編輯頁面
├── components/
│   ├── TodoItem.tsx        # Todo 項目元件
│   ├── TodoForm.tsx        # Todo 表單元件
│   ├── TodoList.tsx        # Todo 列表元件
│   ├── SearchBar.tsx       # 搜尋框元件
│   └── ConfirmDialog.tsx   # 確認對話框
├── lib/
│   └── api.ts              # API Client
├── types/
│   └── todo.ts             # TypeScript 型別定義
├── Dockerfile
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## ESLint 檢查清單

每次修改程式碼後必須執行：
```bash
npm run lint
```

### 重要規則
- ⚠️ **禁止 `"use client"` 元件呼叫後端 API**
- 所有 API 呼叫必須在 Server Component 或 Server Action 中執行

---

## 變更記錄

| 日期 | 變更內容 |
|------|----------|
| 2026-01-11 | 初始規劃建立 |
| 2026-01-18 | 全部 Phase 完成，Docker 化測試通過 |
