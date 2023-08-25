import OTPCard from "@/components/otpCard/OTPCard";
import { OTPImage } from "@/components/utils/images";

import {
  VerifyOTPWrapper,
  VerifyOTPCardContainer,
  VerifyOTPContainer,
  VerifyOTPImageContainer,
} from "./VerifyOTP.styles";

const VerifyOTP = () => {
  return (
    <VerifyOTPWrapper>
      <VerifyOTPContainer>
        <VerifyOTPImageContainer>
          <img src={OTPImage?.src} />
        </VerifyOTPImageContainer>
      </VerifyOTPContainer>
      <VerifyOTPCardContainer>
        <OTPCard />
      </VerifyOTPCardContainer>
    </VerifyOTPWrapper>
  );
};

export default VerifyOTP;
