import Image from 'next/image'
import logo from '@public/woong/kmong.gif'
import magnifying from '@public/woong/magnifying.svg'
import Link from 'next/link'
import ModalInput from './modal/HeaderInputModal'
import { useState } from 'react'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  return (
    <header className="mt-2 ">
      <div className="justify-center flex items-center gap-5">
        <Link href={'/woong/kmong'} className="mr-6">
          <Image src={logo} alt="New Year Logo" width={100} height={52} />
        </Link>

        <form className="relative flex w-[626px] border border-[#303441] justify-between gap-3 rounded-full px-2 hover:bg-gray-200 duration-200  ">
          <input
            type="text"
            id="search-input"
            autoComplete="off"
            onFocus={toggleModal}
            onBlur={toggleModal}
            className="p-2 outline-none bg-transparent w-full rounded-full hover:bg-gray-200 duration-200 "
          />

          <Image
            src={magnifying}
            alt="New Year Logo"
            width={0}
            height={0}
            className="w-[24px] relative right-6"
          />
          {modalOpen && <ModalInput />}
        </form>

        <div className="flex text-[#212224] font-medium text-[14px] ml-5 items-center  gap-6">
          <a href="#" className="flex items-center ">
            <p>엔터프라이즈</p>
            <span className="bg-[#ebf4ff] text-[#4b94fa] rounded-full p-1 ml-1">
              <p className="text-[10px] font-bold">기업용</p>
            </span>
          </a>

          <a href="#">전문가 등록</a>
          <a href="#">로그인</a>
          <a
            href="#"
            className="rounded-md bg-[#ffd400] font-bold py-2 px-3 hover:bg-[#ecb745] duration-300">
            회원가입
          </a>
        </div>
        <div></div>
      </div>
    </header>
  )
}
