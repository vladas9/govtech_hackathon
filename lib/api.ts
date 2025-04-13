/**
 * Basic API utility functions for making HTTP requests
 */

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
};

/**
 * Generic fetch function for API calls
 */
export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { method = 'GET', headers = {}, body } = options;
  
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json();
} 