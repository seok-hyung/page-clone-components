interface HistorySectionData {
  image: string
  title: string
  content: string
  textStyle: string
}

export const imageContainer: HistorySectionData[] = [
  {
    image: '/toss/history1.png',
    title: '불편함이\n당연했던 일상',
    content:
      '불과 7년 전만 해도, 송금은 복잡하고 오래 걸리는 일이었어요.\n공인인증서와 보안카드, 그리고 무한 로딩을 견뎌낼 인내심까지 필요했죠.',
    textStyle: 'text-white',
  },
  {
    image: '/toss/history2.png',
    title: '메시지 보내듯\n쉬운 송금',
    content:
      '2015년 2월, 토스는 공인인증서가 필요없는 간편 송금 서비스를 선보입니다.\n문자 메시지 보내듯 쉽고 편한 송금. 토스가 첫 번째로 해결한 금융의 불편함이에요.',
    textStyle: 'text-black',
  },
  {
    image: '/toss/history3.png',
    title: '금융, 더 쉽고\n간편할 순 없을까?',
    content:
      '토스는 송금을 시작으로 금융 구석구석, 더 많은 불편함을 찾기 시작했어요.\n대출이라도 받으려면 연차를 내고 전전긍긍, 누군가는 간단한 은행 업무를 보기 위해 먼 길을 나서야 했죠.',
    textStyle: 'text-black',
  },
  {
    image: '/toss/history4.png',
    title: '공 던지듯\n 쉽고 간편한 금융',
    content:
      '2019년 2월, 송금부터 계좌, 대출, 보험, 투자까지.\n토스는 삶에서 꼭 필요한 금융경험을 공 던지듯 쉽고 간편하게 만들기 시작했어요.',
    textStyle: 'text-white',
  },
]
