import { useState } from "react";
import SectionTitle from "./SectionTitle";
import BWD from "./works/BWD";
import MA from "./works/MA";
import DGS from "./works/DGS";
import Afrizon from "./works/Afrizon";
import Youzone from "./works/Youzone";

const Experience = () => {
  const [workBwd, setWorkBwd] = useState(true);
  const [workMa, setWorkMa] = useState(false);
  const [workDgs, setWorkDgs] = useState(false);
  const [workAfrizon, setWorkAfrizon] = useState(false);
  const [workYouzone, setWorkYouzone] = useState(false);

  const handleDigital = () => {
    setWorkBwd(true);
    setWorkMa(false);
    setWorkDgs(false);
    setWorkAfrizon(false);
    setWorkYouzone(false);
  };
  const handleMichelle = () => {
    setWorkBwd(false);
    setWorkMa(true);
    setWorkDgs(false);
    setWorkAfrizon(false);
    setWorkYouzone(false);
  };
  const handleDannystrike = () => {
    setWorkBwd(false);
    setWorkMa(false);
    setWorkDgs(true);
    setWorkAfrizon(false);
    setWorkYouzone(false);
  };
  const handleAfrizon = () => {
    setWorkBwd(false);
    setWorkMa(false);
    setWorkDgs(false);
    setWorkAfrizon(true);
    setWorkYouzone(false);
  };
  const handleYouzone = () => {
    setWorkBwd(false);
    setWorkMa(false);
    setWorkDgs(false);
    setWorkAfrizon(false);
    setWorkYouzone(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title=" Where I have Worked" titleNo="02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleDigital}
            className={`${
              workBwd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            BWD
          </li>
          <li
            onClick={handleMichelle}
            className={`${
              workMa
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            M&A
          </li>
          <li
            onClick={handleDannystrike}
            className={`${
              workDgs
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            DGSolutions
          </li>
          <li
            onClick={handleAfrizon}
            className={`${
              workAfrizon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            Afrizon
          </li>
          <li
            onClick={handleYouzone}
            className={`${
              workYouzone
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            Youzone
          </li>
        </ul>
        {workBwd && <BWD />}
        {workMa && <MA />}
        {workDgs && <DGS />}
        {workAfrizon && <Afrizon />}
        {workYouzone && <Youzone />}
      </div>
    </section>
  );
};

export default Experience;
