"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Grant } from "@/data/grants";
import { useUserIdentity } from "@/hooks/useUserIdentity";

// Interface for grant criteria response
export interface GrantCriteria {
  id: string;
  grantId: string;
  name: string;
  description: string;
  points: number;
  isMandatory: boolean;
}

// Extended grant interface with criteria
export interface GrantWithCriteria extends Grant {
  criteria: GrantCriteria[];
  eligibilityScore?: number;
  isEligible?: boolean;
}

// Response type from the API
export interface GrantsResponse {
  grants: GrantWithCriteria[];
  totalCount: number;
}

/**
 * Fetches grants and their criteria for a specific IDNU/IDNP
 */
const fetchGrants = async (idValue: string): Promise<GrantsResponse> => {
  if (!idValue) {
    throw new Error("No IDNU/IDNP provided");
  }

  try {
    const response = await fetch(
      `http://localhost:1169/api/person/grants/${idValue}`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching grants:", error);
    throw error;
  }
};

/**
 * Custom hook to fetch grants and their criteria
 * Automatically gets the IDNU/IDNP from the useUserIdentity hook
 * @param overrideIdValue - Optional override for the IDNU/IDNP value
 * @param options - React Query options
 */
export function useGrantsQuery(
  overrideIdValue?: string,
  options?: Omit<UseQueryOptions<GrantsResponse, Error>, "queryKey" | "queryFn">
) {
  // Get user identity data from useUserIdentity hook
  const { data: userData } = useUserIdentity();

  // Use the override value if provided, otherwise use the value from user identity
  //   const idValue = overrideIdValue || userData?.value;
  const idValue = "1002600519846";

  return useQuery({
    queryKey: ["grants", idValue],
    queryFn: () => fetchGrants(idValue || ""),
    // Only enable the query if we have a valid ID value
    enabled: !!idValue && options?.enabled !== false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}
