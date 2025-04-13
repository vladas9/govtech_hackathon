"use client";

import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from "@tanstack/react-query";
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

// Interface for requirement in the response
export interface GrantRequirement {
  is_suitable: boolean;
  requirement: string;
  requirement_id: number;
}

// Extended grant interface with criteria
export interface GrantWithCriteria extends Grant {
  criteria: GrantCriteria[];
  eligibilityScore?: number;
  isEligible?: boolean;
}

// API response grant format
export interface APIGrant {
  grant_id: number;
  grant_name: string;
  is_eligible: boolean;
  requirements: GrantRequirement[];
  score: number;
}

// Response type from the API
export interface GrantsResponse {
  grants?: APIGrant[];
  grant_elegibility?: APIGrant[];
  totalCount?: number;
}

// Request payload interface
export interface GrantsRequest {
  type: string;
  idn_value: string;
}

/**
 * Fetches grants and their criteria for a specific IDNU/IDNP
 */
const fetchGrants = async (requestData: GrantsRequest): Promise<GrantsResponse> => {
  if (!requestData.idn_value || !requestData.type) {
    throw new Error("No IDNU/IDNP provided");
  }

  try {
    const response = await fetch(
      `http://localhost:1169/api/person/grants`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      }
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
 * Custom hook to fetch grants using mutation
 * Can be used with the identity data from useUserIdentity hook or with custom values
 */
export function useGrantsMutation(
  options?: Omit<UseMutationOptions<GrantsResponse, Error, GrantsRequest>, "mutationFn">
) {
  return useMutation({
    mutationFn: fetchGrants,
    ...options,
  });
}

/**
 * For backward compatibility - uses the mutation internally but presents a query-like interface
 * @deprecated Use useGrantsMutation for better control
 */
export function useGrantsQuery(
  overrideIdValue?: string,
  overrideIdType?: string,
  options?: Omit<UseQueryOptions<GrantsResponse, Error>, "queryKey" | "queryFn">
) {
  // Get user identity data from useUserIdentity hook
  const { identity } = useUserIdentity();

  // Use the override values if provided, otherwise use the values from user identity
  const idValue = overrideIdValue || identity?.idn_value;
  const idType = overrideIdType || identity?.type || "IDNP";

  return useQuery({
    queryKey: ["grants", idType, idValue],
    queryFn: () => fetchGrants({ type: idType, idn_value: idValue || "" }),
    // Only enable the query if we have a valid ID value
    enabled: !!idValue && options?.enabled !== false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}
