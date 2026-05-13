/** @format */

import React from "react";
import { Program } from "./programData";

export default function ProgramDetails({ program }: { program: Program }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1296px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Core Targets */}
          <div className="bg-bg-grey p-8 rounded-[24px] shadow-[0px_0px_50px_0px_#5757561F]">
            <p className="text-[22px] font-bricolage font-semibold text-primary mb-6 uppercase">
              Core Targets
            </p>
            <ul className="space-y-4">
              {program.coreTargets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[18px] font-montserrat text-slate"
                >
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-slate shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="bg-bg-grey p-8 rounded-[24px] shadow-[0px_0px_50px_0px_#5757561F]">
            <p className="text-[22px] font-bricolage font-semibold text-primary mb-6 uppercase">
              Ideal For
            </p>
            <p className="text-[18px] font-montserrat text-slate leading-relaxed">
              {program.idealFor}
            </p>
          </div>

          {/* Expected Outcome */}
          <div className="bg-bg-grey p-8 rounded-[24px] shadow-[0px_0px_50px_0px_#5757561F]">
            <p className="text-[22px] font-bricolage font-semibold text-primary mb-6 uppercase">
              Expected Outcome
            </p>
            <p className="text-[18px] font-montserrat text-slate leading-relaxed">
              {program.expectedOutcome}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
