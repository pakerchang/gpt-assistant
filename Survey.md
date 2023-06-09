## Chrome extension research 紀錄

因為自己使用的 [第三方套件](https://github.com/JiaHongL/Chat-GPT-Custom-Prompt-Extension) 出現 bug ，源自於套件所抓取的 html element name 變更了，同時我並不需要原作者提供的的大部分功能加上使用量比較大，所以決定自己寫一版陽春點的自用，至少修 bug 不用等

## Question

- [ ] 解決 manifest.json entry point 問題，如何將 React 渲染的東西植入
- [ ] 解決渲染頁面導入問題，可能會有 z-index 狀況需要處理，必須先確認作法
- [x] 解決網域啟用問題 (ChatGPT only)

## 需要內容拆解:

### Sidebar

- 負責顯示定義好的 prompt template:
  1. 需要確定怎麼跟 ChatGPT 頁面的 Message box 嫁接，例如串接上下文，將內容一併傳送到 GPT message box
  - 呼叫時展開一個 Modal 輸入框，並在點擊送出後抓取 ChatGPT message box 並將內容植入
  2.  Split feature type (需要決定 sidebar 到底要放幾種類型的按鈕)
      1. Prompt
      2. Quick response
      3. Setting

### Template Prompt setting (Modal)

- Prompt question:
  1. 處理 Template 儲存問題，參照套件存放於 local storage，需要評估一下是否會有潛在問題
  - 得知 Chrome 有提供屬於瀏覽器版本的 chrome.storage, chrome.localStorage，同時具備將資料綁定在 Google account 上的好處、儲存量也比 localStorage 大
  2. Template Editor 資料流梳理 (CRUD)
  - 透過 useContext, useReducer 處理整體 CRUD 的問題
- Quick response: (Ex: continue)
  - 預先設定的定式回覆

### 可以延伸的

1. Shortcuts and display
2. Page download
3. Wrapper size

---

## UI:

### 已確定：

1. Popover
2. Drawer
3. Button

## Tech stack:

1. Chakra-UI

- Popover
- Drawer
- Button
- Modal
- Form Control

## Wire frame

[Link](https://whimsical.com/chatgpt-assistant-KgPJc77uSy8UtyDuRmmi67)
