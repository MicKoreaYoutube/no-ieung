import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface dashboardSidebarItem {
  icon?: IconProp
  title: string
  href?: string
  shortcut?: string
  content?: Array<{
    icon?: IconProp
    title: string
    href: string
    shortcut?: string
    disabled?: boolean
  }>
}

export interface docsSidebarItem {
  title: string
  isDoc?: boolean
  id?: string
  description?: string
  chapterList: Array<{
    title: string
    content: string
    subChapterList?: Array<{
      title: string
      content: string
    }>
  }>
  subDocList?: Array<{
    title: string
    description: string
    chapterList: Array<{
      title: string
      content: string
      subChapterList?: Array<{
        title: string
        content: string
      }>
    }>
  }>
}

export interface chapterSidebarItem {
  title: string
  content: string
}