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
      title: "시작하기",
      isDoc: true,
      id: "get-started",
      description: "기본 문서 페이지입니다.",
      chapterList: [
        {
          title: "시작하기 1",
          content: "시작하기 1입니다."
        },
        {
          title: "시작하기 2",
          content: "시작하기 2입니다."
        },
        {
          title: "시작하기 3",
          content: "시작하기 3입니다."
        },
      ],
      subDocList: [
        {
          title: "시작하기 하위 페이지 1",
          description: "시작하기 하위 페이지 1입니다.",
          chapterList: [
            {
              title: "챕터1-1",
              content: "챕터1-1의 내용"
            },
            {
              title: "챕터1-2",
              content: "챕터1-2의 내용",
              subChapterList: [
                {
                  title: "챕터1-2-1",
                  content: "챕터1-2-1의 내용"
                },
                {
                  title: "챕터1-2-2",
                  content: "챕터1-2-2의 내용"
                },
                {
                  title: "챕터1-2-3",
                  content: "챕터1-2-3의 내용"
                },
              ]
            },
            {
              title: "챕터1-3",
              content: "챕터1-3의 내용"
            },
          ]
        },
        {
          title: "시작하기 하위 페이지 2",
          description: "시작하기 하위 페이지 2입니다.",
          chapterList: [
            {
              title: "챕터2-1",
              content: "챕터2-1의 내용"
            },
            {
              title: "챕터2-2",
              content: "챕터2-2의 내용",
              subChapterList: [
                {
                  title: "챕터2-2-1",
                  content: "챕터2-2-1의 내용"
                },
                {
                  title: "챕터2-2-2",
                  content: "챕터2-2-2의 내용"
                },
                {
                  title: "챕터2-2-3",
                  content: "챕터2-2-3의 내용"
                },
              ]
            },
            {
              title: "챕터2-3",
              content: "챕터2-3의 내용"
            },
          ]
        },
        {
          title: "시작하기 하위 페이지 3",
          description: "시작하기 하위 페이지 3입니다.",
          chapterList: [
            {
              title: "챕터3-1",
              content: "챕터3-1의 내용"
            },
            {
              title: "챕터3-2",
              content: "챕터3-2의 내용",
              subChapterList: [
                {
                  title: "챕터3-2-1",
                  content: "챕터3-2-1의 내용"
                },
                {
                  title: "챕터3-2-2",
                  content: "챕터3-2-2의 내용"
                },
                {
                  title: "챕터3-2-3",
                  content: "챕터3-2-3의 내용"
                },
              ]
            },
            {
              title: "챕터3-3",
              content: "챕터3-3의 내용"
            },
          ]
        }
      ]
    }
  ],
}

if (siteConfig.mainNav[0].mainLink) {
  siteConfig.mainNav[0].mainLink.title = siteConfig.name
  siteConfig.mainNav[0].mainLink.description = siteConfig.description
}

export { siteConfig }