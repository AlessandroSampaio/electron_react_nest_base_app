import { ReactNode } from "react"

export interface IFormValues {
  username?: string
  password?: string
  databaseName?: string
  hostName?: string
  dbVersion?: string
}

export interface IListFilesCSV {
    title: string;
    fileName: string
  }
  
export interface IListMenu {
    title: string;
    desc: string;
    icon: ReactNode,
    page: string
  }
  
