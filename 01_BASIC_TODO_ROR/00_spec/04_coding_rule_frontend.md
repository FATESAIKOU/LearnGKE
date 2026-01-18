# Frontend Coding Rules

## 1. 架構規則

### 1.1 API 呼叫規則 ⚠️ 重要
- **所有後端 API 呼叫必須在 Server Side 執行**
- `"use client"` 元件**禁止**直接呼叫後端 API
- 使用 Server Components 或 Server Actions 處理資料獲取

```
✅ 正確做法：
- Server Component 直接 fetch API
- Server Action 處理表單提交

❌ 錯誤做法：
- "use client" 元件內呼叫 fetch('/api/...')
- Client Component 直接存取後端
```

### 1.2 元件分類
| 類型 | 用途 | API 呼叫 |
|------|------|----------|
| Server Component | 資料獲取、頁面渲染 | ✅ 允許 |
| Client Component | 互動邏輯、狀態管理 | ❌ 禁止 |
| Server Action | 表單處理、資料變更 | ✅ 允許 |

---

## 2. 命名規則

### 2.1 檔案命名
- 元件：PascalCase（`TodoItem.tsx`）
- 工具/函式：camelCase（`api.ts`）
- 型別：camelCase（`todo.ts`）

### 2.2 變數命名
- 元件：PascalCase
- 函式/變數：camelCase
- 常數：UPPER_SNAKE_CASE
- 型別/介面：PascalCase

---

## 3. TypeScript 規則

- 所有 props 必須定義 interface
- 禁止使用 `any`
- 優先使用 `interface` 而非 `type`

---

## 4. 樣式規則

- 使用 Tailwind CSS
- 避免 inline style
- 共用樣式抽取為元件
