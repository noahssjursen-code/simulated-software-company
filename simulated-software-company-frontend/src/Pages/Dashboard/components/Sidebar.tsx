interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {

  const menuItems = [
    { id: 'Overview', label: 'Overview', icon: '📊' },
    { id: 'Projects', label: 'Projects', icon: '📁' },
    { id: 'Teams', label: 'Teams', icon: '👥' },
    { id: 'Finance', label: 'Finance', icon: '💰' },
    { id: 'News', label: 'News', icon: '📰' },
    { id: 'Settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Operations</h2>
        <p className="text-sm text-slate-600">Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                  activeView === item.id
                    ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Status Indicator */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-600">System Active</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
