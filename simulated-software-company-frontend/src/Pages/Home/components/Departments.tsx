const Departments = () => {
  const departments = [
    {
      name: 'Engineering',
      description: 'Software development, architecture, and technical implementation',
      icon: '💻',
      metrics: ['DevOps', 'CI/CD', 'Code Review'],
    },
    {
      name: 'Product Management',
      description: 'Feature planning, strategy, and roadmap development',
      icon: '📊',
      metrics: ['Roadmaps', 'Analytics', 'User Stories'],
    },
    {
      name: 'Operations',
      description: 'Infrastructure management, deployment, and monitoring',
      icon: '🚀',
      metrics: ['Deployment', 'Monitoring', 'Scaling'],
    },
    {
      name: 'Quality Assurance',
      description: 'Testing, validation, and quality control processes',
      icon: '✅',
      metrics: ['Unit Tests', 'Integration', 'QA'],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Departments
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every department collaborates seamlessly to deliver real software solutions. 
            See how we operate just like a real company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{dept.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{dept.name}</h3>
              <p className="text-slate-600 mb-6">{dept.description}</p>
              <div className="space-y-2">
                {dept.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Interdepartmental Collaboration</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Our departments work together in real-time, sharing updates, coordinating deployments, 
              and making decisions just like a real software company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Departments

