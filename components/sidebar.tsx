'use client'

import Link from "next/link"

import { chapterSidebarItem, dashboardSidebarItem, docsSidebarItem } from "@/types/sidebar"

// import { SearchDialog } from "@/components/search"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { Link as TargetLink } from 'react-scroll'

import parse from "html-react-parser"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

interface dashboardSidebarInterface {
  items?: dashboardSidebarItem[]
}

interface docsSidebarInterface {
  items?: docsSidebarItem[]
}

interface chapterSidebarInterface {
  items?: chapterSidebarItem[]
}

export function DashboardSidebar({ items }: dashboardSidebarInterface) {

  const pathName = usePathname()

  library.add(fas, far, fab)

  return (
    <>
      <Command className="h-[80vh] rounded-none border-r">
        <CommandList>
          <Accordion type="multiple" className="font-TheJamsil5Bold w-full">
            {items?.length ? (
              <>
                {items?.map(
                  (item, index) => (
                    <>
                      {item.content?.length ? (
                        <AccordionItem key={index} value={item.title}>
                          <AccordionTrigger className="m-1 rounded-md px-2 py-1.5 font-normal hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <CommandGroup>
                              <>
                                {item.content?.map(
                                  (contentItem, contentIndex) => (
                                    <Link href={contentItem.href} key={`${index} ${contentIndex}`}>
                                      <CommandItem>
                                        {contentItem.icon ? (
                                          <FontAwesomeIcon icon={contentItem.icon} size="lg" />
                                        ) : null}
                                        <span className="text-md">{parse(contentItem.title)}</span>
                                        <CommandShortcut>{contentItem.shortcut}</CommandShortcut>
                                      </CommandItem>
                                    </Link>
                                  )
                                )}
                              </>
                            </CommandGroup>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link href={`${item.href}`} key={index}>
                          <CommandItem className="m-1 data-[here=true]:bg-primary data-[here=true]:text-primary-foreground" data-here={`${pathName == item.href}`}>
                            {item.icon ? (
                              <FontAwesomeIcon icon={item.icon} />
                            ) : null}
                            <span className="text-md">{item.title}</span>
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          </CommandItem>
                        </Link>
                      )}
                    </>
                  )
                )}
              </>
            ) : null}
          </Accordion>
        </CommandList>
      </Command>
    </>
  )
}

export function DocsSidebar({ items }: docsSidebarInterface) {

  const pathName = usePathname()

  return (
    <>
      <ScrollArea className="h-[80vh] w-48">
        <div className="m-8">
          <div className="py-2">
            <Link href="/docs" className={`font-KBO-Dia-Gothic_bold my-3 block text-lg ${(decodeURI(pathName) == "/docs") ? "underline underline-offset-4" : "font-bold"}`}>소개</Link>
          </div>
          {items?.length ? (
            items.map(
              (item, index) => (
                <div key={index} className="py-2">
                  <Link href={`${item.isDoc ? (item.id ? `/docs/${item.id}` : `/docs/${item.title}`) : "#"}`} className={`font-KBO-Dia-Gothic_bold my-3 block text-lg ${(decodeURI(pathName) == `/docs/${item.id}` || decodeURI(pathName) == `/docs/${item.title}`) ? "underline underline-offset-4" : "font-bold"}`}>{item.title}</Link>
                  {item.subDocList?.length ? (
                    item.subDocList.map(
                      (subDocItem, subDocIndex) => (
                        <Link key={subDocIndex} href={`${item.id ? `/docs/${item.id}/${subDocItem.title}` : `/docs/${item.title}/${subDocItem.title}`}`} className={`font-SUITE-Regular text-md my-1 block ${(decodeURI(pathName) == `/docs/${item.id}/${subDocItem.title}` || decodeURI(pathName) == `/docs/${item.title}/${subDocItem.title}`) ? "font-bold text-foreground underline underline-offset-4" : "text-muted-foreground"}`}>{subDocItem.title}</Link>
                      )
                    )
                  ) : null}
                </div>
              )
            )
          ) : null}
        </div>
      </ScrollArea>
    </>
  )
}

export function ChapterSidebar({ items }: chapterSidebarInterface) {

  const [selectedChapter, selectChapter] = useState("")

  return (
    <div className="w-32">
      <div className="fixed w-full p-6">
        <h1 className="font-KBO-Dia-Gothic_bold font-bold">Chapter</h1>
        <div className="flex flex-col">
          {items?.length ? (
            items.map(
              (item, index) => (
                <TargetLink
                  activeClass="font-bold"
                  key={index}
                  spy
                  smooth
                  isDynamic
                  to={`chapter-${item.title}`}
                  offset={-55}
                  className="font-SUITE-Regular cursor-pointer"
                  duration={700}
                >{item.title}</TargetLink>
              )
            )
          ) : null}
        </div>
      </div>
    </div>
  )
}
