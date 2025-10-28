import { type ReactNode } from 'react'

interface DashboardLayoutProps {
  leftSidebar?: ReactNode
  mainContent?: ReactNode
}

const DashboardLayout = ({ leftSidebar, mainContent }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Sidebar - Components inserted here */}
      <aside className="w-64 bg-white border-r border-slate-200 shadow-sm">
        {leftSidebar}
      </aside>

      {/* Main Content Area - Components inserted here */}
      <main className="flex-1">
        {mainContent}
      </main>
    </div>
  )
}

export default DashboardLayout
