import { historyData } from '../types/types'

export default function HistoryCard({ data }: { data: historyData }) {
  return (
    <li
      className="absoulte flex justify-end items-center p-10 w-4/5 h-[70%] max-w-[1440px] max-h-[720px] rounded-3xl bg-cover bg-center bg-no-repeat"
      style={{ top: 'calc(-35% + 50vh)', left: 'calc(-40% + 50vw)', backgroundImage: `url('${data.bgImage}')` }}>
      <div className="w-[36%] text-left">
        <h2
          className={`mb-[18px] text-5xl font-bold leading-[1.3] ${
            data.id === 2 || data.id === 3 ? 'text-gray-800' : 'text-white'
          }`}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <span
          className={`m-3 text-xl font-semibold leading-[1.6] ${
            data.id === 2 || data.id === 3 ? 'text-gray-800' : 'text-white'
          } text-white`}>
          {data.content}
        </span>
      </div>
    </li>
  )
}
