"use client"

import { useState, useEffect } from "react"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"

// Type definition
export interface UserIdentity {
  type: "IDNP" | "IDNO";
  value: string; // Contains the actual IDNP or IDNO
  name: string;
  picture: string;
  email: string;
  phone: string;
}

// Storage key for localStorage
const STORAGE_KEY = "user_identity"

/**
 * Get user data from localStorage
 */
export const getStoredUserIdentity = (): UserIdentity | null => {
  if (typeof window === 'undefined') return null
  
  try {
    const storedData = localStorage.getItem(STORAGE_KEY)
    return storedData ? JSON.parse(storedData) : null
  } catch (error) {
    console.error("Error getting data from localStorage:", error)
    return null
  }
}

/**
 * Store user data in localStorage
 */
export const storeUserIdentity = (userData: UserIdentity): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
  } catch (error) {
    console.error("Error storing data in localStorage:", error)
  }
}

/**
 * Clear user data from localStorage
 */
export const clearUserIdentity = (): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error("Error clearing data from localStorage:", error)
  }
}

/**
 * Mock function to simulate API call for user authentication
 * Returns user identity based on the phone number
 */
const mockFetchUserIdentity = async (phoneNumber: string): Promise<UserIdentity> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock logic to determine if it's IDNP or IDNO based on phone number
  // For demo purposes: even-ending numbers get IDNP, odd-ending get IDNO
  const lastDigit = parseInt(phoneNumber.slice(-1));
  
  if (isNaN(lastDigit)) {
    throw new Error("Invalid phone number format");
  }
  
  if (lastDigit % 2 === 0) {
    // Even phone numbers return IDNP (individual)
    // Generate a 13-digit IDNP number
    const idnpValue = `${Math.floor(1000000000000 + Math.random() * 9000000000000)}`;
    
    return {
      type: "IDNP",
      value: idnpValue,
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "john.doe@example.com",
      phone: phoneNumber
    };
  } else {
    // Odd phone numbers return IDNO (company)
    // Generate a 8-digit IDNO number
    const idnoValue = `${Math.floor(10000000 + Math.random() * 90000000)}`;
    
    return {
      type: "IDNO",
      value: idnoValue,
      name: "Company LLC",
      picture: "https://randomuser.me/api/portraits/lego/6.jpg",
      email: "contact@company.md",
      phone: phoneNumber
    };
  }
};

/**
 * Hook for getting user identity based on phone number
 * - If phoneNumber is provided, it fetches data from API (unless data exists in localStorage)
 * - If phoneNumber is not provided, it only uses data from localStorage
 */
export function useUserIdentity(
  phoneNumber?: string, 
  options?: Omit<UseQueryOptions<UserIdentity, Error>, 'queryKey' | 'queryFn'>
) {
  const [localData, setLocalData] = useState<UserIdentity | null>(null)
  
  // Check localStorage when the hook is initialized
  useEffect(() => {
    const storedData = getStoredUserIdentity()
    if (storedData) {
      setLocalData(storedData)
    }
  }, [])
  
  // Use React Query for the API call - only if phoneNumber is provided
  const queryResult = useQuery({
    queryKey: ["userIdentity", phoneNumber || "localStorage"],
    queryFn: () => {
      // If no phoneNumber is provided or we already have data in localStorage,
      // don't make the API call
      if (!phoneNumber) {
        // If no data in localStorage and no phoneNumber, throw an error
        const data = getStoredUserIdentity()
        if (!data) {
          throw new Error("No user data found in localStorage")
        }
        return data
      }
      
      return mockFetchUserIdentity(phoneNumber)
    },
    enabled: (options?.enabled ?? true) && !!phoneNumber && !localData, 
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  })
  
  // Store successful query results in localStorage
  useEffect(() => {
    if (queryResult.data && !localData) {
      storeUserIdentity(queryResult.data)
      setLocalData(queryResult.data)
    }
  }, [queryResult.data, localData])
  
  // Combine localStorage data with query results
  return {
    ...queryResult,
    data: localData || queryResult.data, // Prefer localStorage data
    isLoading: !localData && queryResult.isLoading, // Not loading if we have localStorage data
  }
} 