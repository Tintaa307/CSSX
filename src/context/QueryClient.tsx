"use client"

import { QueryClientProvider, QueryClient } from "react-query"

type QueryClientComponentProps = {
  children: React.ReactNode
}

export const QueryClientComponent = ({
  children,
}: QueryClientComponentProps) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
