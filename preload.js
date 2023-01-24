document.addEventListener("DOMContentLoaded", () => {
    // 页面内容加载之后需要引入的一些操作
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const domName = e.target.localName;
      if (domName === "img") {
        if (e.target.id === "") {
          const date = new Date().valueOf();
          e.target.id = date;
        }
        // window.rightMenu.show(e.target.id);
        ipcRenderer.invoke("show-context-menu", {
          domId: e.target.id,
        });
      }
    });
  });
  const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
  
 