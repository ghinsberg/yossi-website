"use client";

import { useEffect } from "react";
import { captureAgentTag } from "@/lib/he/agentTag";

// Renders nothing. Keeps ?a=<agent> in sessionStorage so it survives navigation.
export default function AgentTagCapture() {
  useEffect(() => {
    captureAgentTag();
  }, []);
  return null;
}
