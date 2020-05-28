import React from "react";

const SocialButton = ({
  bgColor,
  hoverColor,
  socialIcon,
  socialPlatform,
  ...otherProps
}) => (
  <div className="flex flex-col justify-center">
    <button
      className={`${bgColor} ${hoverColor} flex justify-center text-center rounded-md py-2 mb-5 text-white`}
      {...otherProps}
    >
      <img src={socialIcon} className="w-12 px-3" />
      Continue with {socialPlatform}
    </button>
  </div>
);

export default SocialButton;
