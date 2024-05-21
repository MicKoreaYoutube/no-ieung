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

import { divideHangul } from "hangul-util"

export default function Page() {

  const classToAdd = "animate__fadeInUp"

  const [result, setResult] = useState("")

  console.log(divideHangul("안녕!"))

  const exclueIeungSchema = z.object({
    text: z.string({
      required_error: "필수 입력란입니다."
    })
  })

  const form = useForm<z.infer<typeof exclueIeungSchema>>({
    resolver: zodResolver(exclueIeungSchema),
    defaultValues: {
      text: "원정의쌤 너무 예뻐요! 사랑해요♥"
    }
  })

  function exclueIeung(data: z.infer<typeof exclueIeungSchema>) {
    let text: string[] | string = divideHangul(data.text, false)
    text = text.join("")
    text = text.replace(/ㅇ/g, ' ').replace(/ㅎ/g, 'ㅗ')
    setResult(text)
  }

  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce={true} threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold content animate__animated text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣ 사ㅣ트를 사ㅛㅗㅏ면 도그라미를<br />
                  ㅗㅛ과적ㅡ로 제거ㅗㅏㄹ 수 ㅣㅆ습니다!
                </h1>
              )}
            </InView>
            <p className=" font-SUITE-Regular text-lg text-muted-foreground">
              지금 바로 시도ㅗㅐ보세ㅛ!
            </p>
          </div>
        </section>
      </div>
      <div className="bg-foreground">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <InView triggerOnce={true} threshold={1}>
              {({ inView, ref }) => (
                <h1 className={`font-KBO-Dia-Gothic_bold content animate__animated text-3xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl ${inView ? classToAdd : 'invisible'}`}
                  ref={ref}>
                  ㅣㅡ를 ㅙ 제거ㅗㅏ냐고ㅛ? 저도 잘 모르겠ㅓㅛ!<br />
                </h1>
              )}
            </InView>
            <p className="font-SUITE-Regular text-lg text-muted-foreground">
              ㅗㅏ지만 재밌죠?
            </p>
          </div>
          <div className="font-TheJamsil5Bold flex gap-4">
            {/* <Link
              href={siteConfig.links.shadcnuiDocs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "defaultDark" })}
            >
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.micGithub}
              className={buttonVariants({ variant: "outlineDark" })}
            >
              GitHub
            </Link> */}
          </div>

          <InView triggerOnce={true} threshold={1}>
            {({ inView, ref }) => (
              <Tabs defaultValue="ㅏㅁㅗㅗㅗㅘ" className={`animate__animated mx-auto block max-w-[400px] md:w-[400px] ${inView ? classToAdd : 'invisible'}`} ref={ref}>
                <TabsList className="font-SUITE-Regular grid w-full grid-cols-1">
                  <TabsTrigger value="ㅏㅁㅗㅗㅗㅘ">ㅏㅁㅗㅗㅗㅘ</TabsTrigger>
                  {/*<TabsTrigger value="복ㅗㅗㅗ" className="pointer-events-auto hover:cursor-not-allowed" onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{
                    e.preventDefault()
                  }}>복ㅗㅗㅗ</TabsTrigger>*/}
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
                      <div>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(exclueIeung)} className="space-y-2">
                            <FormField
                              control={form.control}
                              name="text"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="font-SUITE-Regular">ㅣㅂ력*</FormLabel>
                                  <FormControl className="font-SUITE-Regular">
                                    <Input defaultValue="원정의쌤 너무 예뻐요! 사랑해요♥" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="submit" className="font-TheJamsil5Bold">ㅏㅁㅗㅗㅗㅘ</Button>
                          </form>
                        </Form>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">출력</Label>
                        <Input id="username" defaultValue="ㅝㄴ저ㅢ쌤 너무 ㅖ뻐ㅛ! 사라ㅗㅐㅛ♥" value={result} className="font-SUITE-Regular" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/*<TabsContent value="복ㅗㅗㅗ">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you&#39ll be logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>*/}
              </Tabs>
            )}
          </InView>
        </section>
      </div>
    </>
  )
}
