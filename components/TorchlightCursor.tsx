import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

const TorchlightCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const cursorProps = useSpring({
    from: { x: 0, y: 0, scale: 0.1 },
    to: async (next) => {
      while (true) {
        await next({
          x: cursorPosition.x,
          y: cursorPosition.y,
          scale: 1,
          config: config.wobbly,
        });
        await next({
          x: cursorPosition.x,
          y: cursorPosition.y,
          scale: 0.1,
          config: config.wobbly,
        });
        await new Promise((resolve) => setTimeout(resolve, 20000)); // Wait for 5 seconds before bouncing again
      }
    },
  });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsMouseActive(true);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const handleMouseInactive = () => {
      setIsMouseActive(false);
    };

    window.addEventListener("mouseleave", handleMouseInactive);

    return () => {
      window.removeEventListener("mouseleave", handleMouseInactive);
    };
  }, []);

  const handleLinkHover = () => {
    setIsHoveringLink(true);
  };

  const handleLinkLeave = () => {
    setIsHoveringLink(false);
  };

  const handleLinkClick = () => {
    console.log("Link clicked!");
  };

  const torchlightClasses = isMouseActive
    ? isHoveringLink
      ? "fixed w-16 h-16 bg-gradient-to-tr from-blue-300 to-transparent rounded-full pointer-events-none mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2"
      : "fixed w-16 h-16 bg-gradient-to-tr from-yellow-100 to-transparent rounded-full pointer-events-none mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2"
    : "fixed w-16 h-16 bg-gradient-to-tr from-yellow-100 to-transparent rounded-full pointer-events-none mix-blend-lighten transform -translate-x-1/2 -translate-y-1/2";

  return (
    <animated.div
      className={torchlightClasses}
      style={{
        left: cursorProps.x.to((x) => `calc(${x}px - 25px)`),
        top: cursorProps.y.to((y) => `calc(${y}px - 35px)`),
        scale: cursorProps.scale,
      }}
    >
      {/* <button
        className="absolute w-full h-full cursor-pointer"
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
        onClick={handleLinkClick}
      /> */}
    </animated.div>
  );
};

export default TorchlightCursor;
