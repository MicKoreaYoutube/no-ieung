import { formatText } from "../../ts/excludeIeung-util"

export default function ReleaseNotePage() {

  const releaseNote = `2024-05-22 beta 1.0 출시
  2024-05-28 1.0 출시 - 법전, 실시간 번ㅕㄱ 기느 추가, 디자ㅣㄴ 변겨
  2024-06-02 1.0.1 ㅓㅂ데ㅣ트 - 채티바 참ㅕ 바법 서술 추가, 디자ㅣㄴ ㅗㅕㄴ대ㅗㅘ
  2024-06-?? 1.0.2 ㅓㅂ데ㅣ트 - 서술 누락, ㅓㅂ데ㅣ트 내ㅛ ㅏㄹ 수 ㅓㅄ음
  2024-06-23 1.0.3 ㅓㅂ데ㅣ트 - docs, 문서 개편`

  return (
    <>
      <section className="place-element-center container my-28 grid max-w-[800px] gap-6">
        <h1 className="font-KBO-Dia-Gothic_bold text-center text-4xl lg:text-7xl">릴리스 노트</h1>
        <p className="font-SUITE-Regular whitespace-pre-warp text-xl">
          {formatText(releaseNote)}
        </p>
      </section>
    </>
  )
}