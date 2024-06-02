'use client'

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"

import { InView } from "react-intersection-observer"

import { siteConfig } from "@/config/site"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { combineHangul, divideHangul } from "hangul-util"
import eojjeolminkkyu from "public/eojjeolminkkyu.png"

export default function Page() {

  const classToAdd = "animate__fadeInUp"

  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold animate__animated text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣㅡ금지바 채티바ㅣ ㅣㅆ다고???
                </h1>
              )}
            </InView>
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <p className={`font-SUITE-Regular animate__animated pb-6 text-lg text-muted-foreground ${inView ? classToAdd : 'invisible'}`} ref={ref}>
                  ㅣㅡ 금지바 채티바ㅔ 참ㅕㅗㅏ고 싶나ㅛ?
                </p>
              )}
            </InView>
            <hr className="h-4 w-full" />
            <div className="my-6 w-full space-y-10 md:my-24">
              <InView triggerOnce threshold={1}>
                {({ inView, ref }) => (
                  <div className={`animate__animated mx-auto flex flex-col justify-center space-y-3 md:flex-row ${inView ? classToAdd : 'invisible'}`} ref={ref}>
                    <Image className="h-72 w-72 rounded-full" src={eojjeolminkkyu} alt="ㅓ쩔민뀨" />
                    <div className="flex flex-col justify-center">
                      <span className="font-KBO-Dia-Gothic_bold text-center text-4xl md:text-start md:text-7xl">ㅓ쩔민뀨</span>
                      <span className="font-SUITE-Regular text-center text-2xl md:text-4xl">수행+수행+수행+수행...</span>
                    </div>
                  </div>
                )}
              </InView>
              <InView triggerOnce threshold={1}>
                {({ inView, ref }) => (
                  <h1 className={`font-KBO-Dia-Gothic_bold animate__animated text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                    ref={ref}>
                    ㅓ쩔민뀨ㅔ게 ㅢ뢰ㅗㅏ세ㅛ
                  </h1>
                )}
              </InView>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}