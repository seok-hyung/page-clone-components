import Image from "next/image"
import logo from "@public/kmong.gif"
import magnifying from "@public/magnifying.svg"
import Link from "next/link"
import ModalInput from "./ModalInput"

export default function Header({
  modalOpen,
  toggleModal,
}: {
  modalOpen: boolean
  toggleModal: () => void
}) {
  return (
    <header className="mt-2 ">
      <div className="flex m-auto items-center max-w-[1200px] gap-5 flex-wrap">
        <Link href={"/woong/kmong"}>
          <Image src={logo} alt="New Year Logo" width={100} height={52} />
        </Link>
        <label htmlFor="search-input">
          <form className="flex w-[626px] border border-[#303441] justify-between gap-3 rounded-full ml-6 px-3 relative">
            <input
              type="text"
              id="search-input"
              autoComplete="off"
              onFocus={toggleModal}
              onBlur={toggleModal}
              className="grow-[1] p-2 outline-none rounded-full "
            />

            <Image
              src={magnifying}
              alt="New Year Logo"
              width={24}
              height={24}
            />
            {modalOpen && <ModalInput />}
          </form>
        </label>
        <div className="flex text-[#212224] font-medium text-[14px] ml-5 items-center  gap-6">
          <a href="#" className="flex items-center ">
            <p>엔터프라이즈</p>
            <span className="bg-[#ebf4ff] text-[#4b94fa] rounded-full p-1 ml-1">
              <p className="text-[10px] font-bold">기업용</p>
            </span>
          </a>

          <a href="#">전문가 등록</a>
          <a href="#">로그인</a>
          <a href="#" className="rounded-md bg-[#ffd400] font-bold py-2 px-3">
            회원가입
          </a>
        </div>
      </div>
    </header>
  )
}
