## Dev
```zsh
// gpt-assistant
pnpm i && pnpm run build-exts
// output: dist folder
```
到 Chrome 或 Chromium 核心的瀏覽器，找到 `chrome://extensions/` -> 開啟 Developer mode -> 選取 Load unpacked -> 選取剛才 build 出來的 dist

之後就能看到 Extension 在瀏覽器運行的狀況，以便測試

## Survey
[doc](./Survey.md)