import Link from 'next/link'

interface ProjectLink {
  href: string
  label: string
}

interface ProjectSectionProps {
  title: string
  links: ProjectLink[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, links }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <ul className="list-disc ml-5">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-blue-500 hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Home: React.FC = () => {
  const projects: { name: string; links: ProjectLink[] }[] = [
    { name: 'Min', links: [{ href: '/min/kmong', label: 'Kmong' }] },
    { name: 'Seok', links: [{ href: '/seok/kmong', label: 'Kmong' }] },
    { name: 'Woong', links: [{ href: '/woong/kmong', label: 'Kmong' }] },
    { name: 'Yeo', links: [{ href: '/yeo/kmong', label: 'Kmong' }] },
  ]

  const dashboards: { name: string; links: ProjectLink[] }[] = [
    { name: 'Min', links: [{ href: '/min/dashboard', label: 'Dashboard' }] },
    { name: 'Seok', links: [{ href: '/seok/dashboard', label: 'Dashboard' }] },
    // { name: 'Woong', links: [{ href: '/woong/dashboard', label: 'Dashboard' }] },
    { name: 'Yeo', links: [{ href: '/yeo/dashboard', label: 'Dashboard' }] },
  ]
  const tossScrollPage: { name: string; links: ProjectLink[] }[] = [
    { name: 'Min', links: [{ href: '/min/toss', label: 'Toss' }] },
    { name: 'Seok', links: [{ href: '/seok/toss', label: 'Toss' }] },
    // { name: 'Woong', links: [{ href: '/woong/toss', label: 'Toss' }] },
    { name: 'Yeo', links: [{ href: '/yeo/toss', label: 'Toss' }] },
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">클론 코딩</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <ProjectSection key={idx} title={project.name} links={project.links} />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 mt-12">대시 보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboards.map((dashboard, idx) => (
          <ProjectSection key={idx} title={dashboard.name} links={dashboard.links} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center mb-6 mt-12">토스 스크롤</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tossScrollPage.map((tossScroll, idx) => (
          <ProjectSection key={idx} title={tossScroll.name} links={tossScroll.links} />
        ))}
      </div>
    </div>
  )
}

export default Home
