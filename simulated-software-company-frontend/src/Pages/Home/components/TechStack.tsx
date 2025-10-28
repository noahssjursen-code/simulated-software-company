const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-500' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-600' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-600' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-500' },
    { name: 'Vite', category: 'Build Tool', color: 'bg-purple-500' },
    { name: 'Git', category: 'Version Control', color: 'bg-orange-500' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We build with industry-leading technologies and best practices. 
            Every system is production-ready and follows modern development standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                  {tech.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <p className="text-sm text-slate-400">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-slate-300">Production Ready</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">Open</div>
              <div className="text-sm text-slate-300">Source First</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-slate-300">Live Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

