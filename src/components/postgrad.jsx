import React from "react";

const PostGrad = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-screen overflow-y-auto overflow-x-hidden bg-[#FAFAFA]">
      <div className="flex w-[100%] px-4 py-9 flex-col justify-center items-center gap-[20px]">
        <div className="flex w-[100%] flex-col items-start gap-2">
          <div className="self-stretch text-[#323232] text-center font-inter text-[20px] font-bold leading-[30px]">
            After Study: Work & PR
          </div>
          <div className="self-stretch text-[#5B5B5B] text-center font-inter text-[16px] font-normal leading-[24px]">
            With generous post-study work permits and clear PR pathways, Canada gives you the chance to turn your education into long-term settlement and career growth.
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 self-stretch">
          <div className="flex flex-col items-start gap-4 p-4 self-stretch rounded-[16px] border-2 border-[var(--sea-green-gradient,#88D1D8)] bg-[linear-gradient(258deg,rgba(136,209,216,0.1)_1.01%,rgba(200,238,241,0.1)_99.36%)]">
            <div className="text-[#323232] font-gt-walsheim text-[24px] font-extrabold leading-[32px]">
              Post-Graduation Work Permit
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Duration:</span> Up to 3 yrs (2+ yr programs = 3 yrs)
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Eligibility:</span> DLI grad, 8+ months full-time study
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Benefits:</span> Full-time work, PR experience, dependents on work permits.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 self-stretch rounded-[16px] border-2 border-[#FFA585] bg-[linear-gradient(270deg,_rgba(255,165,133,0.10)_0%,_rgba(255,237,160,0.10)_99.35%)]">
            <div className="self-stretch text-right text-brand-grey-500 font-extrabold text-2xl leading-8 font-gt-walsheim">
              Permanent Residency (PR) Pathways
            </div>
            <div className="flex flex-col items-end gap-2 self-stretch">
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Express Entry:</span> CRS-based, education/work boost
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">PNPs:</span> Province-specific PR (e.g., OINP, BC PNP)
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">CEC:</span> PR for grads with 1+ yr Canadian work experience
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 p-4 self-stretch rounded-[16px] border-2 border-[#4557F6] bg-[linear-gradient(270deg,_rgba(69,87,246,0.10)_0%,_rgba(215,219,255,0.10)_99.54%)]">
            <div className="text-[#323232] font-gt-walsheim text-[24px] font-extrabold leading-[32px]">
              Job Market Highlights
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Demand:</span> High in IT, Data Analytics, Engineering, Finance, Healthcare
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Support:</span> University career services aid job placement
              </div>
              <div className="self-stretch text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]">
                <span className="font-semibold">Flexibility:</span> Work anywhere/any sector
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostGrad;
