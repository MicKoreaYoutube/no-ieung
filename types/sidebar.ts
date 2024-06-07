import dynamicIconImports from 'lucide-react/dynamicIconImports'
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
  href?: string
  description?: string
  chapterList: Array<{
    title: string
    content: string
    subChapter?: Array<{
      title: string
      content: string
    }>
  }>
  subDocList?: Array<{
    title: string
    description: string
    href?: string
    chapterList: Array<{
      title: string
      content: string
      subChapter?: Array<{
        title: string
        content: string
      }>
    }>
  }>
}