import { getUsers } from '../../data/fetch/fetchUsers'
import UserHeightChart from './UserHeightChart'

export default async function DashboardCharts() {
  const userData = await getUsers()

  return (
    <section>
      <UserHeightChart users={userData.users} />
    </section>
  )
}
