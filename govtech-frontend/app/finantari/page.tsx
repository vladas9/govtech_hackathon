"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Sidebar } from "@/components/sidebar/sidebar";
import { PageHeader } from "@/components/finantari/page-header";
import { GrantCard } from "@/components/finantari/grant-card";
import { grants } from "@/data/grants";

import { useUserIdentity } from "@/hooks/useUserIdentity";
import { useGrantsMutation, APIGrant, GrantRequirement } from "@/hooks/useGrantsQuery";
import { useEffect, useState } from "react";
import { Grant } from "@/data/grants";

export default function FinantariPage() {
  const { identity } = useUserIdentity();
  const { mutate, data: grantsData, isPending } = useGrantsMutation();
  const [eligibleGrants, setEligibleGrants] = useState<Grant[]>([]);
  const [partiallyEligibleGrants, setPartiallyEligibleGrants] = useState<Grant[]>([]);
  const [ineligibleGrants, setIneligibleGrants] = useState<Grant[]>([]);

  // Fetch grants data when identity is available
  useEffect(() => {
    console.log("Identity data:", identity);
    if (identity?.idn_value) {
      console.log("Making API request with identity:", {
        type: identity.type || "IDNP",
        idn_value: identity.idn_value
      });
      
      mutate({
        type: identity.type || "IDNP",
        idn_value: identity.idn_value
      });
    } else {
      console.log("No identity data available to make request");
      // For testing only - trigger a mutation with a hardcoded value
      console.log("Using test identity value for debugging");
      mutate({
        type: "IDNP",
        idn_value: "1234567890123"
      });
    }
  }, [identity, mutate]);

  // Process grant data into categories based on eligibility
  useEffect(() => {
    console.log("API response received:", grantsData);
    
    // Check for the correct property in the API response
    const apiGrants: APIGrant[] = grantsData?.grant_elegibility || grantsData?.grants || [];
    
    if (apiGrants.length === 0) {
      console.log("No grants data in API response");
      return;
    }
    
    console.log("Found grants data in API response:", apiGrants);
    console.log("Local grants data:", grants);
    
    // Debug ID format issues
    console.log("ID FORMAT CHECK:");
    grants.forEach(grant => {
      console.log(`Local grant ID: ${grant.id} (${typeof grant.id})`);
    });
    
    apiGrants.forEach((apiGrant: APIGrant) => {
      console.log(`API grant ID: ${apiGrant.grant_id} (${typeof apiGrant.grant_id})`);
    });
    
    const eligible: Grant[] = [];
    const partiallyEligible: Grant[] = [];
    const ineligible: Grant[] = [];
    
    grants.forEach(grant => {
      // Debug log for each grant
      console.log(`Processing grant ID: ${grant.id}`);
      
      // Try multiple matching approaches
      let apiGrant = apiGrants.find(
        (apiGrant: APIGrant) => apiGrant.grant_id.toString() === grant.id
      );
      
      if (!apiGrant) {
        console.log(`Could not find exact match for grant ID ${grant.id}, trying number comparison`);
        apiGrant = apiGrants.find(
          (apiGrant: APIGrant) => Number(apiGrant.grant_id) === Number(grant.id)
        );
      }
      
      if (!apiGrant) {
        console.log(`No matching API grant found for ID: ${grant.id}`);
        return;
      }
      
      console.log(`Found matching API grant for ${grant.id}:`, apiGrant);
      
      // Count the number of requirements not met and get specific details
      const unmetRequirements = apiGrant.requirements.filter(
        (req: GrantRequirement) => !req.is_suitable
      );
      
      const unmetRequirementsCount = unmetRequirements.length;
      console.log(`Unmet requirements: ${unmetRequirementsCount}`);
      
      // Find the specific unmet requirement for partially eligible grants
      const specificUnmetRequirement = unmetRequirementsCount === 1 
        ? unmetRequirements[0].requirement 
        : null;
      
      // Create an enhanced grant object with eligibility information
      const enhancedGrant: Grant = {
        ...grant,
        isEligible: apiGrant.is_eligible,
        eligibilityScore: apiGrant.score,
        isDisabled: !apiGrant.is_eligible,
        warningMessage: !apiGrant.is_eligible 
          ? unmetRequirementsCount === 1
            ? `Criteriu neîndeplinit: "${specificUnmetRequirement}"`
            : "Nu ești eligibil"
          : undefined
      };
      
      // Categorize based on eligibility and unmet requirements
      if (apiGrant.is_eligible) {
        console.log(`Grant ${grant.id} is eligible`);
        eligible.push(enhancedGrant);
      } else if (unmetRequirementsCount === 1) {
        console.log(`Grant ${grant.id} is partially eligible, unmet requirement: ${specificUnmetRequirement}`);
        partiallyEligible.push(enhancedGrant);
      } else {
        console.log(`Grant ${grant.id} is ineligible with ${unmetRequirementsCount} unmet requirements`);
        ineligible.push(enhancedGrant);
      }
    });
    
    console.log("Categorized grants:", {
      eligible: eligible.length,
      partiallyEligible: partiallyEligible.length,
      ineligible: ineligible.length
    });
    
    setEligibleGrants(eligible);
    setPartiallyEligibleGrants(partiallyEligible);
    setIneligibleGrants(ineligible);
    
  }, [grantsData]);

  // Helper function to render a grant list
  const renderGrantList = (grantsList: Grant[], title: string, emptyMessage: string) => {
    console.log(`Rendering grant list: ${title}, items: ${grantsList.length}`);
    
    return (
      <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 mb-6">
        <h3 className="text-[20px] text-[#6b7280] font-medium mb-4">
          {title}
        </h3>
        <div className="border-t border-[#e0e4ea]"></div>
        
        {grantsList.length === 0 ? (
          <div className="py-6 text-center text-[#6b7280]">
            {emptyMessage}
          </div>
        ) : (
          grantsList.map((grant) => (
            <GrantCard
              key={grant.id}
              title={grant.title}
              subtitle={grant.subtitle}
              financing={grant.financing}
              contribution={grant.contribution}
              implementationPeriod={grant.implementationPeriod}
              imageSrc={grant.imageSrc}
              imageAlt={grant.imageAlt}
              isDisabled={grant.isDisabled}
              isEligible={grant.isEligible}
              eligibilityScore={grant.eligibilityScore}
              warningMessage={grant.warningMessage}
              applicationLink={`/application/${grant.id}`}
            />
          ))
        )}
      </div>
    );
  };

  // Debug log for the current state
  console.log("Current state:", {
    isPending,
    eligibleGrants: eligibleGrants.length,
    partiallyEligibleGrants: partiallyEligibleGrants.length,
    ineligibleGrants: ineligibleGrants.length
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafb]">
      <Header />
      <Navigation />

      <div className="flex-1 flex justify-center py-8">
        <Container className="flex">
          <Sidebar />
          <main className="flex-1 px-6">
            <PageHeader
              title="Support Antreprenorial"
              buttonLabel="Vezi Aplicările Tale"
            />

            {/* Grants section */}
            <div className="mb-8">
              {isPending ? (
                <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 mb-6">
                  <div className="py-6 text-center text-[#6b7280]">
                    Se încarcă granturile disponibile...
                  </div>
                </div>
              ) : (
                <>
                  {/* Eligible grants */}
                  {renderGrantList(
                    eligibleGrants, 
                    "Granturi la care poți aplica", 
                    "Nu există granturi pentru care sunteți eligibil în acest moment."
                  )}
                  
                  {/* Partially eligible grants */}
                  {renderGrantList(
                    partiallyEligibleGrants, 
                    "Granturi cu Condiții Parțial Îndeplinite", 
                    "Nu există granturi cu condiții parțial îndeplinite."
                  )}
                  
                  {/* Ineligible grants */}
                  {renderGrantList(
                    ineligibleGrants, 
                    "Granturi Neeligibile", 
                    "Nu există granturi neeligibile."
                  )}
                </>
              )}
            </div>
          </main>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
