import { tossData } from '../../types/types'

export default function IntroCard({ data }: { data: tossData }) {
  return (
    <div
      className="px-10 py-[59px] mx-6 my-[calc(59px + 20px)] w-full h-full rounded-3xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data.bgImage}')` }}>
      <div className="text-[22.4px] text-left text-white leading-relaxed">
        <h4 className="font-bold">{data.title}</h4>
        <p className="font-medium whitespace-pre-line">{data.content}</p>
      </div>
    </div>
  )
}
