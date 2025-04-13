"use client"

import { useState, useEffect } from "react"
import { useQuery, useMutation, UseQueryOptions } from "@tanstack/react-query"

// Type definition
export interface UserIdentity {
  type: "IDNP" | "IDNO";
  idn_value: string; // Contains the actual IDNP or IDNO
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
 * Fetch user identity from API based on phone number
 */
const fetchUserIdentity = async (phoneNumber: string): Promise<UserIdentity> => {
  try {
    const response = await fetch('http://localhost:1169/api/person/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: phoneNumber }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user identity:', error);
    throw error;
  }
};

/**
 * Hook for user authentication using phone number
 * - Returns a login mutation function and user identity data
 * - Handles localStorage caching
 */
export function useUserIdentity() {
  const [identity, setIdentity] = useState<UserIdentity | null>(null)
  
  // Check localStorage on mount
  useEffect(() => {
    const storedData = getStoredUserIdentity()
    if (storedData) {
      setIdentity(storedData)
    }
  }, [])

  // Login mutation
  const mutation = useMutation({
    mutationFn: (phoneNumber: string) => fetchUserIdentity(phoneNumber),
    onSuccess: (data) => {
      storeUserIdentity(data)
      setIdentity(data)
    }
  })

  // Logout function
  const logout = () => {
    clearUserIdentity()
    setIdentity(null)
  }
  
  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    logout,
    identity,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error
  }
} 