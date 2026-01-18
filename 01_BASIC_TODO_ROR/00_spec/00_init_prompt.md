我現在需要建立一個基本 ToDo Application
用途是來部署上 GCP 的 GKE，來學習 GKE
※ 但你這次先不用考慮 GKE, 先寫到能夠在 local端(ubuntu) 用 docker-compose 啟動即可


## 目標
- 完成一個基本 ToDo Application, 包含功能

## 詳細需求 
- 功能性需求
    - List/Search ToDo
    - Show ToDo
    - Create ToDo
    - Update ToDo
    - Delete ToDo
    - ※ 不需登入
- Tech Stack
    - Backend: Ruby on Rails
    - Frontend: React(Nuxt.js)
    - Database: Mysql
    - Launch Method: Docker/DockerCompose

## 執行方式
- 調查目前環境 確認是否符合需求
- 根據前一步驟執行環境建構
- 定義 user usecase & 前後端的溝通 interface 與方式(輸出到 00_spec)
    - 作為全體的基本設計書
- 規劃前端實現方案與步驟(輸出到 01_progress)
    - 作為之後實現的進度管理
    - 注意一定要按照 1.生成整體框架->2.測試->3.加功能->4.測試->回到(3) 的步驟實現, 慢慢驗證後疊加上去
- 規劃後端實現方案與步驟(輸出到 01_progress)
    - 作為之後實現的進度管理
    - 注意一定要按照 1.生成整體框架->2.測試->3.加功能->4.測試->回到(3) 的步驟實現, 慢慢驗證後疊加上去
- 最基本 DockerFile/DockerComposeFile 啟動 DB & 建立 Frontend/Backend 雛形(輸出到 02_src)
- 實現後端(一但做了改動請同時更新 01_progress 中的執行規劃)(輸出到 02_src)
- 實現前端(一但做了改動請同時更新 01_progress 中的執行規劃)(輸出到 02_src)
- 撰寫 DockerFile, DockerComposeFile, 整合前後端啟動(docker-compose) 進行聯通測試(輸出到 02_src)
- 等待我驗證程式內容

※ 每一步都需要經過我Review, 否則不准進下一步
※ 你不准同時執行多步(前端或後端的每個功能都是為不同步驟 你不可以同時寫)
※ 我會在每一「步」完成後幫你 commit, 你不用管 git 的狀態。
