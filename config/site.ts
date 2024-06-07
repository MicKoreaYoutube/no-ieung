import { Description } from "@radix-ui/react-dialog"

export type SiteConfig = typeof siteConfig

const siteConfig = {
  name: "도그라미 제거",
  description:
    "ㅣ 사ㅣ트를 사ㅛㅗㅏ면 도그라미를 ㅗㅛ과적ㅡ로 제거ㅗㅏㄹ 수 ㅣㅆ습니다!",
  mainNav: [
    {
      title: "Home",
      mainLink: {
        logo: true,
        title: "",
        description: "",
        href: "/"
      },
      linkList: [
        {
          title: "ㅏ니 ㅅㅂ ㅣㅡ제거 ㅓ케 ㅗㅏ는거냐",
          description: "ㅣㅡㅡㄹ 제거ㅗㅏ는 바법",
          href: "/how-to-exclude-ieung"
        },
        {
          title: "ㅅㅂ ㅣ런거를 ㅙㅗㅐ?",
          description: "ㅣㅡ 제거ㅢ ㅕㄱ사",
          href: "/why-exclude-ieung"
        },
        {
          title: "ㅣㅡ 제거 채티바ㅣ ㅣㅆ다고??",
          description: "채티바 참ㅕ 바법",
          href: "/exclude-ieung-chat"
        }
      ]
    },
    {
      title: "documenation",
      href: "/docs"
    }
  ],
  footerContent: [
    {
      title: "ㅣㅡ제거",
      content: [
        {
          title: "법전 - 9차 개저",
          href: "/law"
        },
        {
          title: "쉬ㅜㄴ 설며",
          href: "/docs"
        },
        {
          title: "ㅙㅗㅐ",
          href: "/why-exclude-ieung"
        }
      ]
    },
    {
      title: "개발",
      content: [
        {
          title: "릴리스 노트",
          href: "/releaseNote"
        },
        {
          title: "깃ㅗㅓ브",
          href: "https://github.com/MicKoreaYoutube/no-ieung"
        }
      ]
    },
    {
      title: "더 재밌게 즐기기",
      content: [
        {
          title: "채티바",
          href: "/exclude-ieung-chat"
        }
      ]
    },
  ],
  FamilySurvice: [
    {
      name: "ㅓㄴㅓ 제작팀 모집 주 만ㅗ.관.부!",
      href: "/1s"
    },
    {
      name: "국가 제작팀 모집 주 만ㅗ.관.부!",
      href: "/2s"
    },
  ],
  links: {
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui",
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    micGithub: "https://github.com/MicKoreaYoutube/no-ieung"
  },
  docsSidebarContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "11번 내용",
          doc: "<p className='text-2xl p-20' id='chapter-test1'>시발</p><p className='text-2xl p-20' id='chapter-test2'>시발</p>",
          chapter: ["test1", "test2", "test3"]
        },
        {
          title: "12번 내용",
        },
        {
          title: "13번 내용",
        }
      ]
    },
    {
      title: "2번줄",
      href: true,
      content: [
        {
          title: "21번 내용",
        },
        {
          title: "22번 내용",
        },
        {
          title: "23번 내용",
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "31번 내용",
        },
        {
          title: "32번 내용",
        },
        {
          title: "33번 내용",
          doc: "와 개 좆같다 ㄹㅇ"
        }
      ]
    },
    {
      title: "4번줄",
      href: true,
      doc: "<div className='h-full bg-red-500 text-2xl font-KBO-Dia-Gothic_bold' id='chapter-test1'>무적 LG!</div>",
      chapter: ["test1", "test2", "test3"]
    },
    {
      title: "5번줄",
      content: [
        {
          title: "51번 내용",
        },
        {
          title: "52번 내용",
        },
        {
          title: "53번 내용",
        }
      ]
    },
  ],
}

if (siteConfig.mainNav[0].mainLink) {
  siteConfig.mainNav[0].mainLink.title = siteConfig.name
  siteConfig.mainNav[0].mainLink.description = siteConfig.description
}

export { siteConfig }

const doc = [
  {
    title: "소개",
    isDoc: true,
    href: "/docs",
    description: "기본 문서 페이지입니다.",
    chapterList: [
      
    ]
  }, 
  {

  }, 
  {

  }, 
  {

  }
]