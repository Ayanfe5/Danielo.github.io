import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:pz-10 xl:px-4"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Daniel Oriazowan.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am web developer with 4+ years of experience in React. I have a strong
        foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.{" "}
        <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen  left-0 bottom-1  -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Projects
      </motion.button>
    </section>
  );
};

export default Banner;

// import { motion } from "framer-motion";
// import Image from "next/image"; // Import Image from Next.js
// import { logo } from "@/public/assets"; // Import your logo image

// const Banner = () => {
//   const logoVariants = {
//     hidden: {
//       opacity: 0,
//       x: "100%", // Start off-screen on the right
//       y: "5vh", // Move down slightly (adjust as needed)
//     },
//     visible: {
//       opacity: 0.055, // Adjust the opacity as needed (0.055 for slight transparency)
//       x: "50%", // Move halfway into the screen
//       y: "15vh", // Move down to 15% of the viewport height (adjust as needed)
//       transition: {
//         duration: 1, // Adjust the duration as needed
//         type: "spring", // You can choose different animation types
//         stiffness: 100, // Adjust the stiffness as needed
//       },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:pz-10 xl:px-4 relative overflow-hidden"
//     >
//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-lg font-titleFont tracking-wide text-textGreen"
//       >
//         Hi, my name is
//       </motion.h3>
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
//       >
//         Daniel Oriazowan.{" "}
//         <span className="text-textDark mt-2 lgl:mt-4">
//           I build things for the web.
//         </span>
//       </motion.h1>
//       <motion.p
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="text-base md:max-w-[650px] text-textDark font-medium"
//       >
//         I am a web developer with 4+ years of experience in React. I have a
//         strong foundation in front-end & back-end development and am skilled in
//         creating user-friendly and responsive web applications using React and
//         its ecosystem.{" "}
//         <a href="">
//           <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
//             Learn More
//             <span className="absolute w-full h-[1px] bg-textGreen  left-0 bottom-1  -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
//           </span>
//         </a>
//       </motion.p>
//       <motion.button
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.9 }}
//         className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
//       >
//         Check out my Projects
//       </motion.button>

//       {/* Logo Animation */}
//       <motion.div
//         className="w-2/5 h-[80vh] fixed right-0 top-0"
//         variants={logoVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           zIndex: 999, // Adjust the z-index as needed
//           opacity: 0.035, // Adjust the opacity as needed (0.055 for slight transparency)
//         }}
//       >
//         <Image
//           src={logo}
//           alt="Your Logo"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Banner;

// import { motion } from "framer-motion";
// import Image from "next/image"; // Import Image from Next.js
// import { logo } from "@/public/assets"; // Import your logo image
// import TorchlightCursor from "./TorchlightCursor"; // Import the TorchlightCursor component

// const Banner = () => {
//   const logoVariants = {
//     hidden: {
//       opacity: 0,
//       x: "100%", // Start off-screen on the right
//       y: "5vh", // Move down slightly (adjust as needed)
//     },
//     visible: {
//       opacity: 0.055, // Adjust the opacity as needed (0.055 for slight transparency)
//       x: "50%", // Move halfway into the screen
//       y: "15vh", // Move down to 15% of the viewport height (adjust as needed)
//       transition: {
//         duration: 1, // Adjust the duration as needed
//         type: "spring", // You can choose different animation types
//         stiffness: 100, // Adjust the stiffness as needed
//       },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:pz-10 xl:px-4 relative overflow-hidden"
//     >
//       {/* Torchlight cursor */}
//       <TorchlightCursor />

//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-lg font-titleFont tracking-wide text-textGreen"
//       >
//         Hi, my name is
//       </motion.h3>
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
//       >
//         Daniel Oriazowan.{" "}
//         <span className="text-textDark mt-2 lgl:mt-4">
//           I build things for the web.
//         </span>
//       </motion.h1>
//       <motion.p
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="text-base md:max-w-[650px] text-textDark font-medium"
//       >
//         I am a web developer with 4+ years of experience in React. I have a
//         strong foundation in front-end & back-end development and am skilled in
//         creating user-friendly and responsive web applications using React and
//         its ecosystem.{" "}
//         <a href="#">
//           {/* Add the hover effect to this link */}
//           <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
//             Learn More
//             <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
//           </span>
//         </a>
//       </motion.p>
//       <motion.button
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.9 }}
//         className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
//       >
//         Check out my Projects
//       </motion.button>

//       {/* Logo Animation */}
//       <motion.div
//         className="w-2/5 h-[80vh] fixed right-0 top-0"
//         variants={logoVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           zIndex: 999, // Adjust the z-index as needed
//           opacity: 0.035, // Adjust the opacity as needed (0.055 for slight transparency)
//         }}
//       >
//         <Image
//           src={logo}
//           alt="Your Logo"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Banner;

// import { motion } from "framer-motion";
// import Image from "next/image"; // Import Image from Next.js
// import { logo } from "@/public/assets"; // Import your logo image

// const Banner = () => {
//   const logoVariants = {
//     hidden: {
//       opacity: 0,
//       x: "-50%", // Move halfway off-screen to the left
//       y: "15vh", // Move down to 15% of the viewport height (adjust as needed)
//     },
//     visible: {
//       opacity: 0.055, // Adjust the opacity as needed (0.055 for slight transparency)
//       x: "50%", // Move halfway into the screen
//       y: "15vh", // Keep it at the same position (adjust as needed)
//       transition: {
//         duration: 1, // Adjust the duration as needed
//         type: "spring", // You can choose different animation types
//         stiffness: 100, // Adjust the stiffness as needed
//       },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:pz-10 xl:px-4 relative overflow-hidden"
//     >
//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-lg font-titleFont tracking-wide text-textGreen"
//       >
//         Hi, my name is
//       </motion.h3>
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col relative"
//       >
//         Daniel Oriazowan.{" "}
//         <span className="text-textDark mt-2 lgl:mt-4">
//           I build things for the web.
//         </span>
//       </motion.h1>
//       {/* Logo Animation */}
//       <motion.div
//         className="w-2/5 h-[80vh] fixed right-0 top-0"
//         variants={logoVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           zIndex: 999, // Set a higher z-index to make it sit on top
//           opacity: 0.055, // Adjust the opacity as needed (0.055 for slight transparency)
//         }}
//       >
//         <Image
//           src={logo}
//           alt="Your Logo"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>

//       <motion.p
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="text-base md:max-w-[650px] text-textDark font-medium"
//       >
//         I am a web developer with 4+ years of experience in React. I have a
//         strong foundation in front-end & back-end development and am skilled in
//         creating user-friendly and responsive web applications using React and
//         its ecosystem.{" "}
//         <a href="#">
//           {/* Add the hover effect to this link */}
//           <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
//             Learn More
//             <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
//           </span>
//         </a>
//       </motion.p>
//       <motion.button
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.9 }}
//         className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
//       >
//         Check out my Projects
//       </motion.button>
//     </section>
//   );
// };

// export default Banner;
