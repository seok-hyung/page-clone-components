import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">클론 코딩</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Min</h2>
          <ul className="list-disc ml-5">
            <li>
              <Link href="/min/kmong" className="text-blue-500 hover:underline">
                Kmong
              </Link>
            </li>
            {/* 추가 프로젝트가 있으면 여기에 추가 */}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Seok</h2>
          <ul className="list-disc ml-5">
            <li>
              <Link
                href="/seok/kmong"
                className="text-blue-500 hover:underline">
                Kmong
              </Link>
            </li>
            {/* 추가 프로젝트가 있으면 여기에 추가 */}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Woong</h2>
          <ul className="list-disc ml-5">
            <li>
              <Link
                href="/woong/kmong"
                className="text-blue-500 hover:underline">
                Kmong
              </Link>
            </li>
            {/* 추가 프로젝트가 있으면 여기에 추가 */}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Yeo</h2>
          <ul className="list-disc ml-5">
            <li>
              <Link href="/yeo/kmong" className="text-blue-500 hover:underline">
                Kmong
              </Link>
            </li>
            {/* 추가 프로젝트가 있으면 여기에 추가 */}
          </ul>
        </div>
      </div>
    </div>
  )
}
