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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { combineHangul, divideHangul } from "hangul-util"

export default function Page() {

  const classToAdd = "animate__fadeInUp"

  const [result, setResult] = useState("")

  const excludeIeungSchema = z.object({
    text: z.string({
      required_error: "필수 입력란입니다."
    })
  })

  const form = useForm<z.infer<typeof excludeIeungSchema>>({
    resolver: zodResolver(excludeIeungSchema),
    defaultValues: {
      text: "원정의쌤 너무 예뻐요! 사랑해요♥"
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

  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold content animate__animated text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl ${inView ? classToAdd : 'invisible'}`}
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
                <h1 className={`font-KBO-Dia-Gothic_bold content animate__animated text-2xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl ${inView ? classToAdd : 'invisible'}`}
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
          <div className="mt-6 flex flex-col space-y-3 md:grid md:grid-cols-2">
            <InView triggerOnce={true} threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold content animate__animated text-xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣㅡㅡㄹ 제거ㅗㅏ는 바법!<br />
                  <br />
                  1{")"}기본적ㅣㄴ 바법<br />
                  예뻐요♥ -{">"} ㅖ뻐ㅛ♥<br />
                  <br />
                  2{")"}종성<br />
                  원정의쌤♥ -{">"} ㅝㄴ저ㅢ쌤♥<br />
                  <br />
                  3{")"}ㅎㅡㄴ?<br />
                  ㅎ -{">"} ㅗ(ㅎㅔ서 도그라미를 뺀 모ㅑㅣㅁ)
                </h1>
              )}
            </InView>
            <InView triggerOnce threshold={1}>
              {({ inView, ref }) => (
                <Tabs defaultValue="ㅏㅁㅗㅗㅗㅘ" className={`animate__animated block max-w-[400px] md:ml-auto md:w-[400px] ${inView ? 'animate__bounceIn' : 'invisible'}`} ref={ref}>
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
                          <Textarea id="username" defaultValue="원정의쌤 너무 예뻐요! 사랑해요♥" className="font-SUITE-Regular" onChange={(e) => {
                            excludeIeung(e.target.value)
                          }} />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-SUITE-Regular">출력</Label>
                          <Textarea id="username" defaultValue="ㅝㄴ저ㅢ쌤 너무 ㅖ뻐ㅛ! 사라ㅗㅐㅛ♥" value={result} className="font-SUITE-Regular" disabled />
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
