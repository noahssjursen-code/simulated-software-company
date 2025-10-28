const LiveOperations = () => {
  const recentActivity = [
    { type: 'deployment', message: 'Deployed v2.4.1 to production', time: '2 hours ago' },
    { type: 'feature', message: 'Completed user authentication system', time: '5 hours ago' },
    { type: 'update', message: 'Updated API documentation', time: '8 hours ago' },
    { type: 'meeting', message: 'Sprint planning completed', time: '12 hours ago' },
  ]

  const activeProjects = [
    { name: 'Portal Dashboard', status: 'In Progress', progress: 75 },
    { name: 'Authentication System', status: 'Deployed', progress: 100 },
    { name: 'API Gateway', status: 'Planning', progress: 30 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Deployed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-blue-500'
      case 'Planning':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Live Operations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See our company in action. Real projects, real deployments, real progress happening right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Recent Activity</h3>
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">LIVE</span>
              </div>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-slate-100 last:border-b-0">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-medium">{activity.message}</p>
                    <p className="text-sm text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Active Projects</h3>
            <div className="space-y-6">
              {activeProjects.map((project, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{project.name}</h4>
                    <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{project.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all hover:shadow-xl">
            View Full Dashboard
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveOperations

