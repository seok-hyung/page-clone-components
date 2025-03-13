import { IntroData } from '../../constants/data'
import IntroCard from './IntroCard'

export default function IntroList() {
  const introDataList = IntroData
  return (
    <div className="h-[200vh] pt-[100vh]">
      <div
        className="flex justify-center items-center mx-auto mt-[59px] mb-10 max-w-[1400px] max-h-[600px] break-keep"
        style={{ height: 'calc(80% - 59px)' }}>
        {introDataList.map((data) => (
          <IntroCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}
