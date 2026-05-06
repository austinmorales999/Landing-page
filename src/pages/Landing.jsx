import React from 'react'
import StickyNav from "../components/landing/StickyNav";
import HeroMonolith from "../components/landing/HeroMonolith";
import LogicCascade from "../components/landing/LogicCascade";
import SocialProofMatrix from "../components/landing/SocialProofMatrix";
import FinalAssertion from "../components/landing/FinalAssertion";

export default function Landing() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <StickyNav />
      <HeroMonolith />
      <div className="h-[12vh] md:h-[20vh]" />
      <LogicCascade />
      <div className="h-[12vh] md:h-[20vh]" />
      <SocialProofMatrix />
      <div className="h-[8vh] md:h-[12vh]" />
      <FinalAssertion />
    </main>
  )
}
