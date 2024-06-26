'use client'

import Link from "next/link"
import { useState } from "react"

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
import { formatText } from "../ts/excludeIeung-util"

export default function Page() {

  const classToAdd = "animate__fadeInUp"

  const [result, setResult] = useState("ㅏㄴ녀ㅗㅏ세ㅛ! ㅣㅡ제거를 지금 바로 시도ㅗㅐ보세ㅛ!")

  const excludeIeungSchema = z.object({
    text: z.string({
      required_error: "필수 입력란입니다."
    })
  })

  const form = useForm<z.infer<typeof excludeIeungSchema>>({
    resolver: zodResolver(excludeIeungSchema),
    defaultValues: {
      text: "안녕하세요! 이응 제거를 바로 시도해보세요!"
    }
  })

  function excludeIeung(originalText: string) {
    let encryptedText: string[] | string = originalText.split("").join("​")
    encryptedText = encryptedText.replaceAll(/ㅇ/g, "ㅣㅡ").replaceAll(/ㅎ/g, "ㅗㅣㅡㅗ")
    encryptedText = divideHangul(encryptedText, false)
    encryptedText = encryptedText.join("")
    encryptedText = encryptedText.replaceAll(/ㅇ/g, "").replaceAll(/ㅎ/g, "ㅗ").replaceAll(/ㅀ/g, "ㄹ​ㅗ").replaceAll(/ㄶ/g, "ㄴ​ㅗ")
    encryptedText = combineHangul(encryptedText).replaceAll(/​/g, "")
    setResult(encryptedText)
  }

  const how_to_excludeIeung = `ㅣㅡㅡㄹ 제거ㅗㅏ는 바법!
                  
  1)기본적ㅣㄴ 바법
  우와-> ㅜㅘ
  
  2)종성
  안녕 -> ㅏㄴ녀
  
  3)ㅎㅡㄴ?
  하이! -> ㅗㅏㅣ(ㅎㅡㄹ ㅗ로 쓰면 됨. 그러나 해가 ㅗㅐㅣ듯ㅣ ㅣ "ㅗ"는 독립ㅗㅐ서 적ㅓㅑ ㅗㅏㅁ)
  
  4)ㅇ, ㅎ 초서 독립 사ㅛㅡㄴ?
  ㅇㅇ -> ㅣㅡㅣㅡ
  ㅎㅎ -> ㅗㅣㅡㅗㅗㅣㅡㅗ`

  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold animate__animated text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣ 사ㅣ트를 사ㅛㅗㅏ면 도그라미를<br />
                  ㅗㅛ과적ㅡ로 제거ㅗㅏㄹ 수 ㅣㅆ습니다!
                </h1>
              )}
            </InView>
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <p className={`font-SUITE-Regular animate__animated text-lg text-muted-foreground ${inView ? classToAdd : 'invisible'}`} ref={ref}>
                  지금 바로 시도ㅗㅐ보세ㅛ!
                </p>
              )}
            </InView>
          </div>
        </section>
      </div>
      <div className="bg-foreground">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold animate__animated text-2xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣㅡ를 ㅙ 제거ㅗㅏ냐고ㅛ? 저도 잘 모르겠ㅓㅛ!<br />
                </h1>
              )}
            </InView>
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <p className={`font-SUITE-Regular animate__animated text-lg text-muted-foreground ${inView ? classToAdd : 'invisible'}`} ref={ref}>
                  ㅗㅏ지만 재밌죠?
                </p>
              )}
            </InView>
          </div>
          <div className="mt-3 flex flex-col space-y-6 md:mt-6 md:grid md:grid-cols-2 md:space-y-0">
            <InView triggerOnce={true} threshold={0.6}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold animate__animated text-xl font-extrabold leading-tight tracking-tighter text-background md:text-2xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  {formatText(how_to_excludeIeung)}
                </h1>
              )}
            </InView>
            <InView triggerOnce threshold={0.6}>
              {({ inView, ref }) => (
                <Tabs defaultValue="ㅏㅁㅗㅗㅗㅘ" className={`animate__animated block w-full md:ml-auto md:w-[400px] ${inView ? 'animate__bounceIn' : 'invisible'}`} ref={ref}>
                  <TabsList className="font-SUITE-Regular grid w-full grid-cols-1">
                    <TabsTrigger value="ㅏㅁㅗㅗㅗㅘ">ㅏㅁㅗㅗㅗㅘ</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ㅏㅁㅗㅗㅗㅘ">
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-KBO-Dia-Gothic_bold">ㅏㅁㅗㅗㅗㅘ</CardTitle>
                        <CardDescription className="font-SUITE-Regular">
                          ㅣㅡ를 제거ㅗㅏㅂ니다.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-2">
                          <Label className="font-SUITE-Regular">ㅣㅂ력</Label>
                          <Textarea defaultValue="안녕하세요! ㅇ제거를 지금 바로 시도해보세요!" className="font-SUITE-Regular" onChange={(e) => {
                            excludeIeung(e.target.value)
                          }} />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-SUITE-Regular">출력</Label>
                          <Textarea value={result} className="font-SUITE-Regular" disabled />
                          <Button className="font-TheJamsil5Bold" onClick={() => {
                            navigator.clipboard.writeText(result)
                          }}>복사</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              )}
            </InView>
          </div>
        </section>
      </div>
    </>
  )
}
