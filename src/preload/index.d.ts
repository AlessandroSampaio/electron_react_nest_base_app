declare global {
  interface Window {
    electron: {
      sendMsg(msg: string): Promise<string>
      onReplyMsg(cb: (msg: string) => string): void
    }
  }
}

export { };
