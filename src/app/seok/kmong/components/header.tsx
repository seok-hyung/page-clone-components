import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export const Header = () => {
  return (
    <div>
      <div className="w-full h-12 bg-black flex items-center justify-center">
        <div className="text-white">
          신규 가입하면{" "}
          <span className="text-[#f5c126] font-bold">10만원 쿠폰</span> 드려요
          &gt;
        </div>
      </div>
      <div className="py-4 w-[1200px] m-auto flex items-center">
        <Image
          src={"/kmong-main-logo.gif"}
          width={100}
          height={60}
          alt="main-logo"
        />
        <div className="mx-10 w-[50%] py-2 border-solid border-[1px] border-black rounded-full">
          <div className="flex justify-between gap-4 mx-4">
            <input type="text" className="w-full focus:outline-none" />
            <Search className="cursor-pointer" />
          </div>
        </div>

        <div className="flex w-[40%] justify-evenly">
          <div>
            <Link href={"/#"}>
              엔터프라이즈{" "}
              <span className="rounded-xl bg-[#ebf4ff] px-1 py-1 text-blue-500 text-xs font-extrabold">
                기업용
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/#"}>전문가등록</Link>
          </div>

          <div>
            <Link href={"/#"}>로그인</Link>
          </div>
          <div>
            <Link href={"/#"} className="bg-yellow-400 px-4 py-2 rounded-md ">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
