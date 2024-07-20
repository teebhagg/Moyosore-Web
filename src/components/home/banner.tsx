import Link from "next/link"

export default function AnnouncementBanner() {
  return (
    <div className="bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="space-y-2 text-center sm:text-left mb-5 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-50 sm:text-3xl">New Feature</h2>
          <p className="text-sm text-gray-400">Send Prayer Requests</p>
        </div>
        <Link
          href="/prayer-request"
          className="inline-flex items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}