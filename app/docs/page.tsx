'use client'

import { formatText } from "@/ts/excludeIeung-util"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function DocsPage() {

  const docs_introduce = `2023년, ㅗㅜ반기 쯤 ㅓ쩔민뀨ㅘ ㅣ준ㅕㅢ 대ㅗㅘ 주 ㅓ쩔민뀨가 "ㅓ"를 습관적ㅡ로 "ㅓ"로 적ㅓㅆ다가 ㅣ준ㅕㅣ ㅗㅏㄴ번 모든 ㅣㅡㅡㄹ 텍스트ㅔ서 빼보자는 제ㅢ를 ㅗㅏㅕㅆ고 ㅣㅗㅜ ㅓ쩔민뀨ㅢ ㅕ러 제ㅏㄴ들로 ㅗㅣㅡㅗㅡㄴ ㅗ로 ㅣㅡ 단독ㅡㄴ ㅣㅡ로 쓰는 드 다ㅑㅗㅏㄴ 법칙ㅡㄹ 만들ㅓ ㅗ늘날ㅔ ㅣ르게 되ㅓㅆ다.
  2024년, 5ㅝㄹ 겨 ㅓ쩔민뀨는 ㅣㅡ 제거를 널리 ㅏㄹ리고자 ㅣㅡ 제거 채티바ㅡㄹ 만들ㅓㅆ고 ㅗㅕㄴ재 만ㅗㅡㄴ 사람들ㅔ게 ㅣㅡ 제거가 퍼지게 되ㅓㅆ다.`

  return (
    <div className="p-6 md:p-12">
      <div className="grid gap-2 py-4">
        <h1 className="font-KBO-Dia-Gothic_bold text-6xl">소개</h1>
        <span className="font-SUITE-Regular text-2xl">ㅏㄴ녀ㅗㅏ세ㅛ! ㅣㅡ제거ㅔ 대ㅗㅏㄴ 모든 구금즈ㅡㄹ ㅗㅐ결ㅗㅏ고 가세ㅛ!</span>
        <hr />
        <div id="chapter-간단한 소개" className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-4xl">ㅣㅡ 제거ㅢ ㅕㄱ사</h1>
          <p className="font-SUITE-Regular text-lg">{formatText(docs_introduce)}</p>
        </div>
        <div id="chapter-FAQ" className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-4xl">FAQ</h1>
          <p className="font-SUITE-Regular text-lg">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </p>
        </div>
      </div>
    </div>
  )
}