import React from "react";
import AgentSetupForm from "./AgentSetupForm";
import AgentSetupContent from "./AgentSetupContent";

const AgentSetup = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      <div className="flex-auto">
        <AgentSetupForm />
      </div>

      <AgentSetupContent />
    </div>
  );
};

export default AgentSetup;
