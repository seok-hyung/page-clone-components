'use client'
import { historyData } from '../constants/historyData'
import HistoryCard from './HistoryCard'

export default function HistoryList() {
  const historyDataList = historyData

  return (
    <ul className="relative m-auto left-0 top-0 right-auto bottom-auto w-[1435px] h-screen">
      {historyDataList.map((data, index) => (
        <HistoryCard data={data} key={index} />
      ))}
    </ul>
  )
}
