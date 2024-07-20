'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ComingSoon() {
  return (
    <div className="flex min-h-[calc(100dvh-218px)] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Coming Soon</h1>
        <p className="mt-4 text-muted-foreground">
          Stay tuned for our exciting new product or service. We'll be launching soon!
        </p>
      </div>
    </div>
  )
}