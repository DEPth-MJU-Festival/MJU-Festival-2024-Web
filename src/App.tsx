import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import Router from './Router';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <Router />
        </Suspense>
      </QueryClientProvider>
    </>
  );
};

export default App;
