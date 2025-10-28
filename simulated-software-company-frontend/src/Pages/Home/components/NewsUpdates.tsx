const NewsUpdates = () => {
  const announcements = [
    {
      title: 'Q4 Expansion Initiative Launched',
      date: 'October 2025',
      category: 'Company News',
      excerpt: 'Simulated Software Company announces major expansion of operations, including new projects and enhanced capabilities.',
    },
    {
      title: 'Portal Dashboard v1.0 Released',
      date: 'October 2025',
      category: 'Product Launch',
      excerpt: 'Our new operations dashboard provides real-time visibility into company projects, timelines, and team activities.',
    },
    {
      title: 'Development Process Documentation',
      date: 'September 2025',
      category: 'Process Improvement',
      excerpt: 'We\'ve published comprehensive documentation of our development workflow, from planning to deployment.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Company News & Updates
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed about our latest developments, launches, and company milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {announcement.category}
                </span>
                <span className="text-sm text-slate-500">{announcement.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {announcement.title}
              </h3>
              <p className="text-slate-600 mb-4">{announcement.excerpt}</p>
              <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center">
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates

