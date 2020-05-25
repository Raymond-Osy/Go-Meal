import React from "react";

const SocialButton = ({bgColor, hoverColor, socialIcon, socialPlatform}) => (
    <div className="flex flex-col justify-center">
        <a className={`${bgColor} ${hoverColor} flex justify-center text-center rounded-md py-2 mb-5 text-white`} href="#"><img src={socialIcon} className="w-12 px-3"/>Continue with {socialPlatform}</a>
    </div>
);

export default SocialButton;
