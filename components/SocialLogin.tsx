import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import FacebookIcon from "./CustomIcons/FacebookIcon";
import GoogleIcon from "./CustomIcons/GoogleIcon";

//google login url
const googleAuthUrl = `${process.env.COGNITO_DOMAIN}/oauth2/authorize?identity_provider=Google&redirect_uri=${process.env.COGNITO_CALLBACK_URL}&response_type=CODE&client_id=5dagpol4cliihgu5p9iis708s&scope=aws.cognito.signin.user.admin email openid phone profile`;
//facebook login url
const facebookAuthUrl = `${process.env.COGNITO_DOMAIN}/oauth2/authorize?identity_provider=Facebook&redirect_uri=${process.env.COGNITO_CALLBACK_URL}&response_type=CODE&client_id=5dagpol4cliihgu5p9iis708s&scope=aws.cognito.signin.user.admin email openid phone profile`;

const SocialLogin = () => {
  return (
    <div className="w-full flex-col flex gap-4 flex-auto">
      <button
        onClick={() => {
          window.location.href = googleAuthUrl;
        }}
        className="btn-primary rounded-full w-full font-medium flex items-center gap-4 justify-center"
      >
        <GoogleIcon />
        <span className="flex flex-shrink">Continue with Google</span>
      </button>
      <button
        onClick={() => {
          window.location.href = facebookAuthUrl;
        }}
        className="btn-primary rounded-full w-full font-medium flex items-center gap-4 justify-center"
      >
        <FacebookIcon />
        <span className="flex flex-shrink">Continue with Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogin;
