import { useState } from 'react'
import DashboardLayout from './components/DashboardLayout'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const Dashboard = () => {
  const [activeView, setActiveView] = useState('Overview')

  const renderContent = () => {
    switch (activeView) {
      case 'Overview':
        return <div>Overview Components Go Here</div>
      case 'Projects':
        return <div>Projects Components Go Here</div>
      case 'Teams':
        return <div>Teams Components Go Here</div>
      case 'Finance':
        return <div>Finance Components Go Here</div>
      case 'News':
        return <div>News Components Go Here</div>
      case 'Settings':
        return <div>Settings Components Go Here</div>
      default:
        return <div>Select a menu item</div>
    }
  }

  return (
    <DashboardLayout
      leftSidebar={<Sidebar activeView={activeView} onViewChange={setActiveView} />}
      mainContent={
        <MainContent
          header={<h1 className="text-2xl font-bold text-slate-900">{activeView}</h1>}
          content={renderContent()}
        />
      }
    />
  )
}

export default Dashboard
