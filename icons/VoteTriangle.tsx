import React from "react";

interface VoteTriangleProps {
  active: boolean;
}

const VoteTriangle: React.FC<VoteTriangleProps> = ({ active }) => {
  return (
    <>
      {!active && (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1280.000000pt"
          height="1130.000000pt"
          viewBox="0 0 1280.000000 1130.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1130.000000) scale(0.100000,-0.070000)"
            fill="lightgray"
            stroke="none"
          >
            <path
              d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
            />
          </g>
        </svg>
      )}
      {active && (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1280.000000pt"
          height="1130.000000pt"
          viewBox="0 0 1280.000000 1130.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1130.000000) scale(0.100000,-0.070000)"
            fill="orange"
            stroke="none"
          >
            <path
              d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
            />
          </g>
        </svg>
      )}
    </>
  );
};

export default VoteTriangle;
