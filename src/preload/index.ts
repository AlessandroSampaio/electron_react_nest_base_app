import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld(
  'electron',
  {
    sendMsg: (msg: string): Promise<string> => ipcRenderer.invoke('msg', msg),
    onReplyMsg: (cb: (msg: string) => string) => ipcRenderer.on('reply-msg', (e, msg: string) => {
      cb(msg);
    }),
  },
);
