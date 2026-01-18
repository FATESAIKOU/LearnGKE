# ToDo Application - API Interface 定義

## 1. 概要

本文件定義前後端之間的 REST API 介面規格。

### 1.1 通訊協定
- **Protocol**: HTTP
- **Format**: JSON
- **Base URL**: `http://localhost/api/v1` (透過 Nginx 統一入口)
- **Nginx Port**: 80

### 1.2 共通 Headers
```
Content-Type: application/json
Accept: application/json
```

### 1.3 共通錯誤回應格式
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "錯誤描述訊息"
  }
}
```

### 1.4 HTTP 狀態碼
| 狀態碼 | 說明 |
|--------|------|
| 200 | 成功 |
| 201 | 建立成功 |
| 204 | 刪除成功（無內容） |
| 400 | 請求格式錯誤 |
| 404 | 資源不存在 |
| 422 | 驗證失敗 |
| 500 | 伺服器內部錯誤 |

---

## 2. API Endpoints

### 2.1 取得待辦事項列表 (List / Search)

**Endpoint**: `GET /api/v1/todos`

**Query Parameters**:
| 參數名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| q | string | 否 | 搜尋關鍵字（標題模糊搜尋） |

**Request Example**:
```
GET /api/v1/todos
GET /api/v1/todos?q=買菜
```

**Response** (200 OK):
```json
{
  "todos": [
    {
      "id": 1,
      "title": "買菜",
      "description": "去超市買蔬菜和水果",
      "completed": false,
      "created_at": "2026-01-11T10:00:00.000Z",
      "updated_at": "2026-01-11T10:00:00.000Z"
    },
    {
      "id": 2,
      "title": "寫報告",
      "description": null,
      "completed": true,
      "created_at": "2026-01-10T09:00:00.000Z",
      "updated_at": "2026-01-11T08:00:00.000Z"
    }
  ]
}
```

---

### 2.2 取得單一待辦事項 (Show)

**Endpoint**: `GET /api/v1/todos/:id`

**Path Parameters**:
| 參數名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| id | integer | 是 | 待辦事項 ID |

**Request Example**:
```
GET /api/v1/todos/1
```

**Response** (200 OK):
```json
{
  "todo": {
    "id": 1,
    "title": "買菜",
    "description": "去超市買蔬菜和水果",
    "completed": false,
    "created_at": "2026-01-11T10:00:00.000Z",
    "updated_at": "2026-01-11T10:00:00.000Z"
  }
}
```

**Response** (404 Not Found):
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "待辦事項不存在"
  }
}
```

---

### 2.3 新增待辦事項 (Create)

**Endpoint**: `POST /api/v1/todos`

**Request Body**:
| 欄位名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| title | string | 是 | 待辦事項標題（最大255字） |
| description | string | 否 | 待辦事項描述 |

**Request Example**:
```json
{
  "todo": {
    "title": "買菜",
    "description": "去超市買蔬菜和水果"
  }
}
```

**Response** (201 Created):
```json
{
  "todo": {
    "id": 1,
    "title": "買菜",
    "description": "去超市買蔬菜和水果",
    "completed": false,
    "created_at": "2026-01-11T10:00:00.000Z",
    "updated_at": "2026-01-11T10:00:00.000Z"
  }
}
```

**Response** (422 Unprocessable Entity):
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "驗證失敗",
    "details": {
      "title": ["標題不能為空"]
    }
  }
}
```

---

### 2.4 更新待辦事項 (Update)

**Endpoint**: `PATCH /api/v1/todos/:id`

**Path Parameters**:
| 參數名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| id | integer | 是 | 待辦事項 ID |

**Request Body**:
| 欄位名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| title | string | 否 | 待辦事項標題 |
| description | string | 否 | 待辦事項描述 |
| completed | boolean | 否 | 完成狀態 |

**Request Example**:
```json
{
  "todo": {
    "title": "買菜和水果",
    "completed": true
  }
}
```

**Response** (200 OK):
```json
{
  "todo": {
    "id": 1,
    "title": "買菜和水果",
    "description": "去超市買蔬菜和水果",
    "completed": true,
    "created_at": "2026-01-11T10:00:00.000Z",
    "updated_at": "2026-01-11T11:00:00.000Z"
  }
}
```

**Response** (404 Not Found):
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "待辦事項不存在"
  }
}
```

**Response** (422 Unprocessable Entity):
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "驗證失敗",
    "details": {
      "title": ["標題不能為空"]
    }
  }
}
```

---

### 2.5 刪除待辦事項 (Delete)

**Endpoint**: `DELETE /api/v1/todos/:id`

**Path Parameters**:
| 參數名稱 | 類型 | 必填 | 說明 |
|----------|------|------|------|
| id | integer | 是 | 待辦事項 ID |

**Request Example**:
```
DELETE /api/v1/todos/1
```

**Response** (204 No Content):
```
(無回應內容)
```

**Response** (404 Not Found):
```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "待辦事項不存在"
  }
}
```

---

## 3. Nginx Reverse Proxy

透過 Nginx 統一入口，前後端共用同一個 origin，無需 CORS 設定。

### 路由規則
| 路徑 | 轉發目標 | 說明 |
|------|----------|------|
| `/api/*` | `http://backend:3001` | Rails API |
| `/*` | `http://frontend:3000` | Next.js 前端 |

### 優點
- 統一入口點 (Port 80)
- 無 CORS 問題
- 接近生產環境架構
- 方便日後部署到 GKE

---

## 4. API 端點總覽

| 方法 | 端點 | 說明 | 對應 Use Case |
|------|------|------|---------------|
| GET | /api/v1/todos | 取得列表/搜尋 | UC-01, UC-02 |
| GET | /api/v1/todos/:id | 取得單一項目 | UC-03 |
| POST | /api/v1/todos | 新增項目 | UC-04 |
| PATCH | /api/v1/todos/:id | 更新項目 | UC-05, UC-07 |
| DELETE | /api/v1/todos/:id | 刪除項目 | UC-06 |
