## Chrome extension research 紀錄

## 因為自己使用的 [第三方套件](https://github.com/JiaHongL/Chat-GPT-Custom-Prompt-Extension) 出現 bug ，源自於套件所抓取的 html element name 變更了，同時我並不需要原作者提供的的大部分功能加上使用量比較大，所以決定自己寫一版陽春點的自用，至少修 bug 不用等

## 需要內容拆解:

### Prompt sidebar

- 負責顯示定義好的 prompt template:
  1.  需要確定怎麼跟 ChatGPT 頁面的 Message box 嫁接，例如串接上下文，將內容一併傳送到 GPT message box
  2.  Split feature type

### Template Prompt setting (Dialog)

- Prompt question:
  1.  處理 Template 儲存問題，參照套件存放於 local storage，需要評估一下是否會有潛在問題
  2.  Template Editor 資料流梳理 (CRUD)
- Quick response:
  - Ex: continue
  - Custom.

### OpenAI secret key setting

### 可以延伸的

1. Shortcuts and display
2. Page download

---

## UI:

### 已確定：

1. Dialog
2. Navbar/Sidebar
3. Custom Button

## Tech stack:

1. Tailwindcss
