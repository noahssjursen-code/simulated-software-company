import { type ReactNode } from 'react'

interface MainContentProps {
  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}

const MainContent = ({ header, content, footer }: MainContentProps) => {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Header Section - Components inserted here */}
      {header && (
        <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm flex-shrink-0">
          {header}
        </header>
      )}

      {/* Main Content Area - Components inserted here */}
      <div className="flex-1 p-6 overflow-auto">
        {content}
      </div>

      {/* Footer Section - Components inserted here */}
      {footer && (
        <footer className="bg-white border-t border-slate-200 px-6 py-4 flex-shrink-0">
          {footer}
        </footer>
      )}
    </div>
  )
}

export default MainContent
