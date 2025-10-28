import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Company Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Experience Software Development in{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
              Real-Time
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-700 mb-4 max-w-3xl mx-auto font-semibold">
            Simulated Software Company
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Where Business Meets Technology
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 mb-6">
              Watch how a software company operates through continuous development, real projects, and actual deployments. 
              Every decision, every line of code, every business interaction produces something tangible.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Live Operations</h3>
                <p className="text-slate-600 text-sm">
                  Watch our continuous development cycle unfold with real projects,
                  timelines, and business decisions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Dynamics</h3>
                <p className="text-slate-600 text-sm">
                  Experience how engineering, product, finance, and operations teams
                  collaborate on complex initiatives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Real Technology</h3>
                <p className="text-slate-600 text-sm">
                  Every feature you see is built with production-quality code,
                  deployed systems, and documented processes.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Enter Operations Portal
            </Link>

            <Link
              to="/news"
              className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View Live Dashboard
            </Link>
          </div>

          {/* Status Indicator */}
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Company Operations: Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
