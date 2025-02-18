import DashboardCharts from './components/userChart/DashboardCharts'

export default function Page() {
  return (
    <>
      <header className="py-3 shadow shadow-slate-200">
        <h1 className="text-3xl font-semibold text-center text-gray-600">Dashboard</h1>
      </header>
      <main className="mx-auto my-10 max-w-[1200px]">
        <DashboardCharts />
      </main>
    </>
  )
}
