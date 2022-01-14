import { render, RenderResult } from '@testing-library/react';
import { renderHook, RenderHookResult, Renderer } from '@testing-library/react-hooks';
import React from 'react';
import { QueryClientProvider, QueryClient, UseQueryResult, UseMutationResult } from 'react-query';

const testUseQuery = (
  hook: any // eslint-disable-line
): RenderHookResult<Record<string, unknown>, UseQueryResult, Renderer<Record<string, unknown>>> => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return renderHook(() => hook(), { wrapper });
};

const testUseMutation = (
  hook: any // eslint-disable-line
): RenderHookResult<
  Record<string, unknown>,
  UseMutationResult,
  Renderer<Record<string, unknown>>
> => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return renderHook(() => hook(), { wrapper });
};

const renderWithQueryClient = (ui: JSX.Element): RenderResult => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return {
    ...render(ui, { wrapper }),
  };
};

export * from '@testing-library/react';
export { testUseQuery, testUseMutation, renderWithQueryClient as render };
