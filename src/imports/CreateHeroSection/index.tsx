import svgPaths from "./svg-iflhb09hmu";
import imgImageDubaiSkyline from "./8bcc424354f7b4115f0c2239c4a7bc1d1d5755ca.png";

function Container1() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[120.363px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-[transparent] top-[0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          ALANN.AE
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.113px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[0.8px] whitespace-nowrap">Features</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.162px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[0.8px] whitespace-nowrap">How It Works</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.638px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[0.8px] whitespace-nowrap">{`Trust & Safety`}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.713px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[0.8px] whitespace-nowrap">Roadmap</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[180.738px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[90.5px] not-italic text-[16px] text-center text-white top-[8.8px] whitespace-nowrap">Get Early Access</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(10,10,15,0.8)] content-stretch flex flex-col items-start left-[calc(50%+0.1px)] pb-[0.8px] top-[-683px] w-[1519.2px]" data-name="Navigation">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <ContainerMargin />
    </div>
  );
}

function Body() {
  return <div className="absolute h-[661px] left-0 top-[683px] w-[1519px]" data-name="Body" />;
}

function Text() {
  return (
    <div className="absolute h-[84px] left-[832.69px] top-[-12px] w-[217.925px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[109px] not-italic text-[60px] text-[transparent] text-center top-[15px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(239, 68, 68) 0%, rgb(237, 65, 65) 11.111%, rgb(235, 62, 62) 22.222%, rgb(233, 59, 59) 33.333%, rgb(231, 56, 55) 44.444%, rgb(228, 53, 52) 55.556%, rgb(226, 49, 49) 66.667%, rgb(224, 46, 45) 77.778%, rgb(222, 42, 42) 88.889%, rgb(220, 38, 38) 100%)" }}>
        Broken
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[531.89px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`UAE Classifieds Are `}</p>
        <Text />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 2.33333V25.6667" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a38c0} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.725px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">High Listing Fees</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[339.725px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Legacy platforms charge high fees that discourage budget sellers.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 p-[32.8px] rounded-[24px] top-0 w-[405.325px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container7 />
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p10ff480} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3cb09d00} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.737px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Lack of Trust</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[339.737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Unverified sellers and fraud reduce buyer confidence.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[437.32px] p-[32.8px] rounded-[24px] top-0 w-[405.337px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container9 />
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p18eadc00} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 21H14.0117" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.725px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Outdated Experience</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[339.725px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Desktop-first platforms create slow mobile experiences.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[874.66px] p-[32.8px] rounded-[24px] top-0 w-[405.325px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container11 />
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[245.588px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Heading1 />
      <ContainerMargin2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[24px] py-[96px] right-[-0.2px] top-[-476.36px]" style={{ backgroundImage: "linear-gradient(rgb(10, 10, 15) 0%, rgb(11, 11, 17) 14.286%, rgb(13, 13, 19) 28.571%, rgb(14, 14, 22) 42.857%, rgb(16, 16, 24) 57.143%, rgb(17, 17, 26) 71.429%, rgb(19, 19, 29) 85.714%, rgb(20, 20, 31) 100%)" }} data-name="Section">
      <ContainerMargin1 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#5633ac] blur-[200px] left-[459.6px] opacity-20 rounded-[26843500px] size-[600px] top-0" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[84px] left-[572.59px] top-[-12px] w-[300.9px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[150.5px] not-italic text-[60px] text-[transparent] text-center top-[15px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
        ALANN.AE
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[489.5px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`Meet `}</p>
        <Text1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p8c55480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1d2e9a60} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M6.66667 8V13.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M25.3333 18.6667V24" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 2.66667V5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M9.33333 10.6667H4" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M28 21.3333H22.6667" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M14.6667 4H12" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.725px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">{`AI Listing `}</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-[339.725px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Upload photos and create listings in under 30 seconds.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] items-start left-0 p-[32.8px] rounded-[24px] to-[rgba(255,255,255,0.05)] top-0 w-[405.325px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container17 />
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13bade00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.737px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">AI Trust Engine</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[339.737px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Real-time fraud detection and profile verification.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] items-start left-[437.32px] p-[32.8px] rounded-[24px] to-[rgba(255,255,255,0.05)] top-0 w-[405.337px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container19 />
      <Heading7 />
      <Paragraph4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p29ed4e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[339.725px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Smart Matching</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-[339.725px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[340px]">Intent-based discovery that finds the right buyers instantly.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] items-start left-[874.66px] p-[32.8px] rounded-[24px] to-[rgba(255,255,255,0.05)] top-0 w-[405.325px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container21 />
      <Heading8 />
      <Paragraph5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[253.588px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[119.6px] max-w-[1280px] top-[96px] w-[1280px]" data-name="Container">
      <Container14 />
      <ContainerMargin3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[627.188px] left-0 overflow-clip right-[-0.2px] top-[85px]" data-name="Section">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[84px] left-[697.75px] top-[-12px] w-[447.725px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[224px] not-italic text-[60px] text-[transparent] text-center top-[15px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
        3 Simple Steps
      </p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[417.02px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`Create a Listing in `}</p>
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[52px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#99a1af] text-[20px] text-center whitespace-nowrap">From upload to live in under 30 seconds</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[24.675px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[32px] left-[12.5px] not-italic text-[24px] text-center text-white top-[0.4px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[170.66px] rounded-[26843500px] size-[64px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <Text3 />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p18c007c0} id="Vector" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p9cf8f00} id="Vector_2" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[0.8px] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon6 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[56px] relative shrink-0 w-[405.325px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Upload Photos</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[42px] relative shrink-0 w-[405.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center whitespace-nowrap">AI detects make, model, condition, and details.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[405.325px]" data-name="Container">
      <InlineContent />
      <ContainerMargin6 />
      <Heading10 />
      <Paragraph7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[29.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[32px] left-[15px] not-italic text-[24px] text-center text-white top-[0.4px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[170.66px] rounded-[26843500px] size-[64px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <Text4 />
    </div>
  );
}

function InlineContent1() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3d2c8c70} id="Vector" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p37d13800} id="Vector_2" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M25 3.33333V6.66667" id="Vector_3" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M25 33.3333V36.6667" id="Vector_4" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 25H6.66667" id="Vector_5" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 15H6.66667" id="Vector_6" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M33.3333 25H36.6667" id="Vector_7" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M33.3333 15H36.6667" id="Vector_8" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M15 3.33333V6.66667" id="Vector_9" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M15 33.3333V36.6667" id="Vector_10" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[0.8px] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon7 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[56px] relative shrink-0 w-[405.337px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">AI Generates Content</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-[405.337px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center w-[406px]">Professional multilingual descriptions are created automatically.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[437.32px] top-0 w-[405.337px]" data-name="Container">
      <InlineContent1 />
      <ContainerMargin7 />
      <Heading11 />
      <Paragraph8 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[30.175px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[32px] left-[15.5px] not-italic text-[24px] text-center text-white top-[0.4px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[170.66px] rounded-[26843500px] size-[64px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <Text5 />
    </div>
  );
}

function InlineContent2() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p4d9e180} id="Vector" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1e9e8c70} id="Vector_2" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p17956900} id="Vector_3" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p25f11f80} id="Vector_4" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[0.8px] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon8 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[56px] relative shrink-0 w-[405.325px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Publish Instantly</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[42px] relative shrink-0 w-[405.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center whitespace-nowrap">AI validates pricing and launches the listing.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[874.66px] top-0 w-[405.325px]" data-name="Container">
      <InlineContent2 />
      <ContainerMargin8 />
      <Heading12 />
      <Paragraph9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[291.988px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container28 />
      <Container31 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container23 />
      <ContainerMargin5 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[24px] py-[96px] right-[-0.2px] top-[712.41px]" style={{ backgroundImage: "linear-gradient(rgb(20, 20, 31) 0%, rgb(19, 19, 29) 14.286%, rgb(17, 17, 26) 28.571%, rgb(16, 16, 24) 42.857%, rgb(14, 14, 22) 57.143%, rgb(13, 13, 19) 71.429%, rgb(11, 11, 17) 85.714%, rgb(10, 10, 15) 100%)" }} data-name="Section">
      <ContainerMargin4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[84px] left-[689.7px] top-[-12px] w-[265.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[133px] not-italic text-[60px] text-[transparent] text-center top-[15px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
        New UAE
      </p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[508.04px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`Built for the `}</p>
        <Text6 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[#5633ac] blur-[100px] left-[306.4px] opacity-20 rounded-[26843500px] size-[256px] top-0" data-name="Container" />;
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="mb-[-8px] relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(15, 182, 127) 8.3333%, rgb(14, 179, 125) 16.667%, rgb(13, 176, 123) 25%, rgb(12, 173, 121) 33.333%, rgb(11, 170, 119) 41.667%, rgb(10, 167, 117) 50%, rgb(9, 164, 115) 58.333%, rgb(8, 162, 113) 66.667%, rgb(7, 159, 111) 75%, rgb(7, 156, 109) 83.333%, rgb(6, 153, 107) 91.667%, rgb(5, 150, 105) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[60px] mb-[-8px] relative shrink-0 w-[498.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Affordability First</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-[498.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[#99a1af] text-[16px] w-[499px]">Free and low-cost listing experience designed for budget-conscious sellers and buyers.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] top-[32px] w-[498.4px]" data-name="Container">
      <Container39 />
      <Heading14 />
      <Paragraph10 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid h-[220px] left-[0.4px] overflow-clip rounded-[24px] top-[-0.4px] w-[564px]" style={{ backgroundImage: "linear-gradient(158.691deg, rgba(86, 51, 172, 0.2) 0%, rgba(157, 78, 221, 0.1) 100%)" }} data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3ff84700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M23.3333 3.5V8.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 5.83333H21" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M4.66667 19.8333V22.1667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M5.83333 21H3.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[56px] relative shrink-0 w-[498.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">AI Native</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[42px] relative shrink-0 w-[498.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">Built from the ground up with AI at the core of every feature.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[588px] p-[32.8px] rounded-[24px] top-0 w-[564px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container41 />
      <Heading15 />
      <Paragraph11 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p18eadc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 21H14.0117" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(57, 128, 245) 8.3333%, rgb(55, 125, 244) 16.667%, rgb(53, 122, 243) 25%, rgb(51, 120, 242) 33.333%, rgb(49, 117, 242) 41.667%, rgb(47, 115, 241) 50%, rgb(46, 112, 240) 58.333%, rgb(44, 110, 239) 66.667%, rgb(42, 107, 238) 75%, rgb(40, 104, 237) 83.333%, rgb(39, 102, 236) 91.667%, rgb(37, 99, 235) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[52px] relative shrink-0 w-[204.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Mobile First</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-[204.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[316px]">{`Designed for UAE's mobile-first users.`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[0.4px] p-[32.8px] rounded-[24px] top-[246.6px] w-[564px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container43 />
      <Heading16 />
      <Paragraph12 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1b228440} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p309e840} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(245, 158, 11) 0%, rgb(243, 155, 11) 7.1429%, rgb(241, 152, 10) 14.286%, rgb(239, 150, 10) 21.429%, rgb(237, 147, 9) 28.571%, rgb(235, 144, 9) 35.714%, rgb(233, 141, 9) 42.857%, rgb(231, 138, 8) 50%, rgb(229, 136, 8) 57.143%, rgb(227, 133, 8) 64.286%, rgb(225, 130, 7) 71.429%, rgb(223, 127, 7) 78.571%, rgb(221, 125, 7) 85.714%, rgb(219, 122, 6) 92.857%, rgb(217, 119, 6) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[52px] relative shrink-0 w-[204.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Trust by Default</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-[204.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[304px]">Verified identities and fraud detection.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[588.4px] p-[32.8px] rounded-[24px] top-[246.6px] w-[564px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container45 />
      <Heading17 />
      <Paragraph13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[494.2px] max-w-[1152px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container36 />
      <Container40 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[119.6px] max-w-[1280px] top-[96px] w-[1280px]" data-name="Container">
      <Heading13 />
      <ContainerMargin9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0a0a0f] h-[810.2px] left-0 overflow-clip right-[-0.2px] to-[#0a0a0f] top-[1372.4px] via-1/2 via-[rgba(86,51,172,0.05)]" data-name="Section">
      <Container34 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[84px] left-[718.95px] top-[-12px] w-[241.15px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[121px] not-italic text-[60px] text-[transparent] text-center top-[15px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(16, 185, 129) 0%, rgb(15, 182, 127) 8.3333%, rgb(14, 179, 125) 16.667%, rgb(13, 176, 123) 25%, rgb(12, 173, 121) 33.333%, rgb(11, 170, 119) 41.667%, rgb(10, 167, 117) 50%, rgb(9, 164, 115) 58.333%, rgb(8, 162, 113) 66.667%, rgb(7, 159, 111) 75%, rgb(7, 156, 109) 83.333%, rgb(6, 153, 107) 91.667%, rgb(5, 150, 105) 100%)" }}>
        Verified
      </p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[520.39px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`Every Listing `}</p>
        <Text7 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[52px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#99a1af] text-[20px] text-center whitespace-nowrap">Trust built into every transaction</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading18 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[44px] relative shrink-0 w-[252.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Emirates ID Verification</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-[252.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[253px]">Every seller verified with government-issued ID</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 p-[24.8px] rounded-[16px] top-0 w-[302px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container50 />
      <Heading19 />
      <Paragraph15 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27f53c00} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p16b88f0} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[44px] relative shrink-0 w-[252.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">AI Photo Validation</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-[252.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[253px]">Computer vision detects fake or manipulated images</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[326px] p-[24.8px] rounded-[16px] top-0 w-[302px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container52 />
      <Heading20 />
      <Paragraph16 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28b1aae0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[44px] relative shrink-0 w-[252.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Behavioral Fraud Detection</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-[252.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[253px]">ML models identify suspicious patterns in real-time</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[652px] p-[24.8px] rounded-[16px] top-0 w-[302px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container54 />
      <Heading21 />
      <Paragraph17 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[44px] relative shrink-0 w-[252.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Secure Messaging</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-[252.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[253px]">End-to-end encrypted communication platform</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[978px] p-[24.8px] rounded-[16px] top-0 w-[302px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container56 />
      <Heading22 />
      <Paragraph18 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[195.1px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container51 />
      <Container53 />
      <Container55 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[119.6px] max-w-[1280px] top-[96px] w-[1280px]" data-name="Container">
      <Container47 />
      <ContainerMargin10 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-gradient-to-b from-[#14141f] h-[563.1px] left-0 overflow-clip right-[-0.2px] to-[#14141f] top-[2155.6px] via-1/2 via-[rgba(86,51,172,0.1)]" data-name="Section">
      <Container46 />
    </div>
  );
}

function Text8() {
  return <div className="absolute h-[84px] left-[736.41px] top-[-12px] w-[145.625px]" data-name="Text" />;
}

function Heading23() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[566.95px] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`More Than `}</p>
        <Text8 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[870.4px] not-italic text-[60px] text-[transparent] text-center top-[3.3px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          Vehicle
        </p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[52px] relative shrink-0 w-[1280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#99a1af] text-[20px] text-center whitespace-nowrap">A complete marketplace ecosystem for the UAE</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading23 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p12679000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1e4cdec0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M18 34H30" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.paaa0380} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch drop-shadow-[0px_10px_7.5px_rgba(86,51,172,0.5),0px_4px_3px_rgba(86,51,172,0.5)] flex items-center justify-center relative rounded-[26843500px] shrink-0 size-[128px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Container">
      <Icon17 />
    </div>
  );
}

function ContainerMargin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[rgba(86,51,172,0.2)] border-[0.8px] border-[rgba(86,51,172,0.3)] border-solid h-[25.587px] left-[81.45px] rounded-[26843500px] top-[0.8px] w-[69.1px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[34px] not-italic text-[#9d4edd] text-[12px] text-center top-[4.2px] whitespace-nowrap">Phase 1</p>
    </div>
  );
}

function InlineContent3() {
  return (
    <div className="h-[34.387px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Vehicle</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[232px]" data-name="Container">
      <ContainerMargin13 />
      <InlineContent3 />
      <Heading24 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p17fa1d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1c296300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M10 36V40" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M38 36V40" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[26843500px] shrink-0 size-[128px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(86,51,172,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon18 />
    </div>
  );
}

function ContainerMargin14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <Container64 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[23.988px] left-[80.73px] rounded-[26843500px] top-[1.6px] w-[70.55px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[35.5px] not-italic text-[#6a7282] text-[12px] text-center top-[4.2px] whitespace-nowrap">Phase 2</p>
    </div>
  );
}

function InlineContent4() {
  return (
    <div className="h-[33.587px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Furniture</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[264px] top-0 w-[232px]" data-name="Container">
      <ContainerMargin14 />
      <InlineContent4 />
      <Heading25 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p77da900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[26843500px] shrink-0 size-[128px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(86,51,172,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon19 />
    </div>
  );
}

function ContainerMargin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <Container67 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[23.988px] left-[80.64px] rounded-[26843500px] top-[1.6px] w-[70.725px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[35.5px] not-italic text-[#6a7282] text-[12px] text-center top-[4.2px] whitespace-nowrap">Phase 3</p>
    </div>
  );
}

function InlineContent5() {
  return (
    <div className="h-[33.587px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function Heading26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Electronics</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[528px] top-0 w-[232px]" data-name="Container">
      <ContainerMargin15 />
      <InlineContent5 />
      <Heading26 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p30533c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M18 24L22 28L30 20" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[1.6px] relative rounded-[26843500px] shrink-0 size-[128px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.6px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon20 />
    </div>
  );
}

function ContainerMargin16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[23.988px] left-[80.4px] rounded-[26843500px] top-[1.6px] w-[71.2px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[36px] not-italic text-[#6a7282] text-[12px] text-center top-[4.2px] whitespace-nowrap">Phase 4</p>
    </div>
  );
}

function InlineContent6() {
  return (
    <div className="h-[33.587px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#6a7282] text-[20px] text-center whitespace-nowrap">{`Insurance & Services`}</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[792px] top-0 w-[232px]" data-name="Container">
      <ContainerMargin16 />
      <InlineContent6 />
      <Heading27 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[214.387px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <Container60 />
      <Container63 />
      <Container66 />
      <Container69 />
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container58 />
      <ContainerMargin12 />
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[24px] py-[96px] right-[-0.2px] top-[2718.7px]" style={{ backgroundImage: "linear-gradient(rgb(20, 20, 31) 0%, rgb(19, 19, 29) 14.286%, rgb(17, 17, 26) 28.571%, rgb(16, 16, 24) 42.857%, rgb(14, 14, 22) 57.143%, rgb(13, 13, 19) 71.429%, rgb(11, 11, 17) 85.714%, rgb(10, 10, 15) 100%)" }} data-name="Section">
      <ContainerMargin11 />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[#5633ac] blur-[150px] left-[379.8px] opacity-20 rounded-[26843500px] size-[384px] top-[190.8px]" data-name="Container" />;
}

function Container73() {
  return <div className="absolute bg-[#9d4edd] blur-[150px] left-[755.4px] opacity-20 rounded-[26843500px] size-[384px] top-[190.8px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          60%
        </p>
      </div>
    </div>
  );
}

function ContainerMargin17() {
  return (
    <div className="h-[40px] relative shrink-0 w-[230.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center whitespace-nowrap">Underserved Market</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[119.6px] p-[32.8px] rounded-[24px] top-[96px] w-[296px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container75 />
      <ContainerMargin17 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          98%
        </p>
      </div>
    </div>
  );
}

function ContainerMargin18() {
  return (
    <div className="h-[40px] relative shrink-0 w-[230.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center whitespace-nowrap">Mobile-First Users</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[447.6px] p-[32.8px] rounded-[24px] top-[96px] w-[296px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container77 />
      <ContainerMargin18 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          30s
        </p>
      </div>
    </div>
  );
}

function ContainerMargin19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[230.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center whitespace-nowrap">Listing Creation</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[775.6px] p-[32.8px] rounded-[24px] top-[96px] w-[296px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container79 />
      <ContainerMargin19 />
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          3X
        </p>
      </div>
    </div>
  );
}

function ContainerMargin20() {
  return (
    <div className="relative shrink-0 w-[230.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center w-[283px]">Higher Engagement Experience</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[1103.6px] p-[32.8px] rounded-[24px] top-[96px] w-[296px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container81 />
      <ContainerMargin20 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute h-[381.6px] left-0 overflow-clip right-[-0.2px] top-[3301.09px]" style={{ backgroundImage: "linear-gradient(rgb(10, 10, 15) 0%, rgb(11, 11, 17) 14.286%, rgb(13, 13, 19) 28.571%, rgb(14, 14, 22) 42.857%, rgb(16, 16, 24) 57.143%, rgb(17, 17, 26) 71.429%, rgb(19, 19, 29) 85.714%, rgb(20, 20, 31) 100%)" }} data-name="Section">
      <Container72 />
      <Container73 />
      <Container74 />
      <Container76 />
      <Container78 />
      <Container80 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute h-[120px] left-[0.4px] right-[-0.4px] top-[-21.49px]" data-name="Heading 2">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[calc(50%+0.4px)] not-italic text-[60px] text-center text-white top-[3px] whitespace-nowrap">{`Join the Future of `}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="-translate-x-1/2 absolute h-[144px] left-[calc(50%+0.02px)] top-[61.51px] w-[501.238px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[60px] left-[251px] not-italic text-[60px] text-[transparent] text-center top-[15px] w-[502px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
        UAE Classifieds
      </p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-center left-0 pt-[24px] top-[120px] w-[896px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#99a1af] text-[20px] text-center whitespace-nowrap">Be among the first users to experience AI-powered buying and selling.</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[149.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[28px] left-[75px] not-italic text-[18px] text-center text-white top-[0.8px] whitespace-nowrap">Get Early Access</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-full relative rounded-[14px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[20px] relative size-full">
          <Text10 />
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1716b080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14fc3200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1d27c680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pe244500} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 3.33333H9.16667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[225.85px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[28px] left-[113px] not-italic text-[18px] text-center text-white top-[0.8px] whitespace-nowrap">Become a Dealer Partner</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-full relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[32.8px] py-[20.8px] relative size-full">
          <Icon22 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin21() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[117.6px] items-start justify-center left-0 pt-[48px] top-[172px] w-[896px]" data-name="Container (margin)">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[289.6px] left-[311.6px] top-[96px] w-[896px]" data-name="Container">
      <Heading28 />
      <Text9 />
      <Paragraph20 />
      <ContainerMargin21 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-gradient-to-b from-[#14141f] h-[481.6px] left-0 overflow-clip right-[-0.2px] to-[#14141f] top-[3682.69px] via-1/2 via-[rgba(86,51,172,0.2)]" data-name="Section">
      <Container82 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          ALANN.AE
        </p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="relative shrink-0 w-[217.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[218px]">AI-powered classifieds platform revolutionizing how UAE buys and sells.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[217.6px]" data-name="Container">
      <Container86 />
      <Paragraph21 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">About ALANN</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Our Story</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Careers</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Press</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Blog</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[120px] relative shrink-0 w-[217.6px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[265.6px] top-0 w-[217.6px]" data-name="Container">
      <Heading29 />
      <List />
    </div>
  );
}

function Heading30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Features</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">AI Listing</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Smart Matching</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">{`Trust & Safety`}</p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Mobile App</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[120px] relative shrink-0 w-[217.6px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[531.2px] top-0 w-[217.6px]" data-name="Container">
      <Heading30 />
      <List1 />
    </div>
  );
}

function Heading31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{`Trust & Safety`}</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Verification</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Terms of Service</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Help Center</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[120px] relative shrink-0 w-[217.6px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem8 />
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[796.8px] top-0 w-[217.6px]" data-name="Container">
      <Heading31 />
      <List2 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Support</p>
      </div>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Partnerships</p>
      </div>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Dealers</p>
      </div>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">Feedback</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="h-[120px] relative shrink-0 w-[217.6px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem12 />
        <ListItem13 />
        <ListItem14 />
        <ListItem15 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1062.4px] top-0 w-[217.6px]" data-name="Container">
      <Heading32 />
      <List3 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
        <Container87 />
        <Container88 />
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[250.538px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 whitespace-nowrap">© 2026 ALANN.AE. All rights reserved.</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2dc84f00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28da7c00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ff1e900} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_578)" id="Icon">
          <path d={svgPaths.p33f4ac00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c2aa770} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5834 5.41699H14.5917" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_578">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f5ee7f0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph22 />
      <Container92 />
    </div>
  );
}

function ContainerMargin23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[48px] relative size-full">
        <Container91 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container84 />
      <ContainerMargin23 />
    </div>
  );
}

function ContainerMargin22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0a0a0f] content-stretch flex flex-col items-start left-[calc(50%+0.1px)] pb-[64px] pt-[64.8px] px-[24px] top-[4164.6px] w-[1519.2px]" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <ContainerMargin22 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#0a0a0f] h-[4757px] left-0 top-[1344px] w-[1519px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

function ImageDubaiSkyline() {
  return (
    <div className="absolute h-[2643.438px] left-0 opacity-20 top-[-0.2px] w-[1519.2px]" data-name="Image (Dubai skyline)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDubaiSkyline} />
    </div>
  );
}

function Container94() {
  return <div className="absolute bg-[#5633ac] blur-[128px] left-[379.8px] opacity-20 rounded-[26843500px] size-[384px] top-[660.65px]" data-name="Container" />;
}

function Container95() {
  return <div className="absolute bg-[#9d4edd] blur-[128px] left-[755.4px] opacity-20 rounded-[26843500px] size-[384px] top-[1598.39px]" data-name="Container" />;
}

function Container93() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0a0a0f] h-[913px] left-0 to-[#0a0a0f] top-0 via-1/2 via-[rgba(10,10,15,0.95)] w-[1519px]" data-name="Container">
      <ImageDubaiSkyline />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_596)" id="Icon">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #9D4EDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_596">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[226.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[113.5px] not-italic text-[#d1d5dc] text-[14px] text-center top-0 whitespace-nowrap">Powered by Artificial Intelligence</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center left-[474.18px] px-[16.8px] py-[8.8px] rounded-[26843500px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon27 />
      <Text12 />
    </div>
  );
}

function InlineContent7() {
  return (
    <div className="h-[69.6px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Poppins:Bold',sans-serif] from-white leading-[0] not-italic relative shrink-0 text-[70px] text-[transparent] text-center to-white via-1/2 via-[#e9d4ff] w-[1232px]">
          <p className="leading-[96px] mb-0">The Future of UAE</p>
          <p className="leading-[96px]">Classifieds, Powered by AI</p>
        </div>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.4px] pt-[23.6px] relative size-full">
        <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[24px] text-center w-[896px]">
          <p className="leading-[39px] mb-0">Buy, Sell, and Discover Budget Cars Faster with AI-Powered Listings,</p>
          <p className="leading-[39px]">Verified Trust, and Zero Listing Barriers.</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-full relative rounded-[14px] shrink-0 w-[196.738px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }} data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[98.5px] not-italic text-[16px] text-center text-white top-[17.6px] whitespace-nowrap">Get Early Access</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-full relative rounded-[14px] shrink-0 w-[203.813px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[102.3px] not-italic text-[16px] text-center text-white top-[17.6px] whitespace-nowrap">List Your Car Free</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[16px] h-[57.6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function ContainerMargin24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container98 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          30s
        </p>
      </div>
    </div>
  );
}

function ContainerMargin26() {
  return (
    <div className="h-[28px] relative shrink-0 w-[182.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">AI Listing</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 p-[24.8px] rounded-[16px] top-0 w-[232px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container101 />
      <ContainerMargin26 />
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          100%
        </p>
      </div>
    </div>
  );
}

function ContainerMargin27() {
  return (
    <div className="h-[28px] relative shrink-0 w-[182.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">Verified Listings</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[264px] p-[24.8px] rounded-[16px] top-0 w-[232px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container103 />
      <ContainerMargin27 />
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-[transparent] text-center w-[212px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          AED 20K–40K
        </p>
      </div>
    </div>
  );
}

function ContainerMargin28() {
  return (
    <div className="h-[28px] relative shrink-0 w-[182.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">Focus</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[114px] items-start left-[528.4px] p-[24.8px] rounded-[16px] top-0 w-[232px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container105 />
      <ContainerMargin28 />
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(86, 51, 172) 0%, rgb(91, 53, 175) 7.1429%, rgb(96, 55, 179) 14.286%, rgb(101, 57, 182) 21.429%, rgb(106, 59, 186) 28.571%, rgb(111, 61, 189) 35.714%, rgb(116, 63, 193) 42.857%, rgb(121, 65, 196) 50%, rgb(126, 67, 200) 57.143%, rgb(131, 69, 203) 64.286%, rgb(136, 71, 207) 71.429%, rgb(141, 73, 210) 78.571%, rgb(147, 74, 214) 85.714%, rgb(152, 76, 217) 92.857%, rgb(157, 78, 221) 100%)" }}>
          AI-Powered
        </p>
      </div>
    </div>
  );
}

function ContainerMargin29() {
  return (
    <div className="h-[28px] relative shrink-0 w-[182.4px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">Discovery</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-[792px] p-[24.8px] rounded-[16px] top-0 w-[232px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container107 />
      <ContainerMargin29 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[150px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <Container100 />
      <Container102 />
      <Container104 />
      <Container106 />
    </div>
  );
}

function ContainerMargin25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[80px] pt-[64px] relative size-full">
        <Container99 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[119.6px] max-w-[1280px] px-[24px] py-[96px] top-[-0.2px] w-[1280px]" data-name="Container">
      <InlineContent7 />
      <Heading />
      <ParagraphMargin />
      <ContainerMargin24 />
      <ContainerMargin25 />
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute h-[875px] left-0 overflow-clip top-0 w-[1519px]" data-name="Section">
      <Container93 />
      <Container96 />
    </div>
  );
}

export default function CreateHeroSection() {
  return (
    <div className="bg-white relative size-full" data-name="Create Hero Section">
      <Navigation />
      <Body />
      <Container3 />
      <Section8 />
    </div>
  );
}