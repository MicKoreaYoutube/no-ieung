'use client'

import { siteConfig } from "@/config/site"

import parse from "html-react-parser"

import { notFound } from "next/navigation"

import { useEffect } from "react"

import { ChapterSidebar } from "@/components/sidebar"

export default function DocsTitlePage({ params }: { params: { subject: string, title: string } }) {

  const foundSubject = siteConfig.docsSidebarContent.find(obj => obj.id == decodeURI(params.subject) || obj.title == decodeURI(params.subject))
  const foundDoc = foundSubject?.subDocList?.find(obj => obj.title == decodeURI(params.title))

  useEffect(() => {
    if (foundDoc == undefined || foundDoc == null) {
      notFound()
    }
  }, [foundDoc])

  return (
    <div className="flex flex-row justify-between">
      <div className="w-full justify-self-stretch p-12">
        <div id="top" className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">{foundDoc?.title}</h1>
          <span className="font-SUITE-Regular text-2xl">{foundDoc?.description}</span>
          <hr />
        </div>
        {foundDoc?.chapterList.length ? (
          foundDoc.chapterList.map((chapterItem, chapterIndex) => (
            <div key={chapterIndex} id={`chapter-${chapterItem.title}`} className="grid gap-2 py-4">
              <h1 className="font-KBO-Dia-Gothic_bold text-4xl">{chapterItem.title}</h1>
              <span className="font-SUITE-Regular text-lg">{chapterItem.content}</span>
            </div>
          ))
        ) : null}
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={foundDoc?.chapterList} />
      </div>
    </div>
  )
}
