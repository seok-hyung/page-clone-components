import { Noto_Sans_KR } from "next/font/google"
const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={notoSansKr.className}>{children}</div>
}
