import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Card, Typography } from "../utils";
import {
  FormWrapper,
  SubTextWrapper,
  TextContainer,
  TextWrapper,
  VerticalLine,
  Wrapper,
} from "./OTPCard.styles";
import OtpInput from "@igloo_cloud/mui-otp-input";
import { verifyOTP } from "@/api/verifyOTP";
import { useRouter } from "next/router";
import { resendOTP } from "@/api/resendOTP";
import { checkAuth } from "@/api/checkAuth";
import { toast } from "react-toastify";

const OTPCard = () => {
  const router = useRouter();

  const [phone, setPhone] = useState();
  const [otp, setOTP] = useState([]);

  const handleChange = (value) => {
    setOTP(value);
  };

  const handleVerify = async () => {
    const response = await verifyOTP({
      phone: Number(phone),
      otp: Number(otp?.join("")),
    });

    if (response?.success) {
      typeof window !== "undefined" &&
        localStorage?.setItem("token", response?.data?.token);
      const authResponse = await checkAuth(response?.data?.token);
      if (authResponse?.status === 200) {
        router?.push("/profile");
      }
    } else {
      toast?.error("Invalid OTP", {
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const handleResend = async () => {
    const phone =
      typeof window !== "undefined" && localStorage?.getItem("phone");
    const response = await resendOTP({
      phone: Number(phone),
    });

    if (response?.success) {
      toast?.success("OTP Resent", {
        theme: "dark",
        autoClose: 2000,
      });
    } else {
      toast?.error("Error", {
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const phoneNumber =
        typeof window !== "undefined" && localStorage?.getItem("phone");
      setPhone(phoneNumber);
    }
  }, []);

  return (
    <Wrapper>
      <Card>
        <Typography
          textAlign="center"
          textColor="neutral800"
          size="Paragraph1"
          fontWeight="semiBold"
        >
          Enter OTP
        </Typography>
        <TextContainer>
          <Typography
            size="Paragraph3"
            fontWeight="semiBold"
            textColor="neutral500"
          >
            OTP sent to
          </Typography>
          <Typography
            size="Paragraph3"
            fontWeight="semiBold"
            textColor="primary700"
          >
            {phone}
          </Typography>
        </TextContainer>
        <FormWrapper>
          <TextWrapper>
            <OtpInput value={otp} onChange={handleChange} />
          </TextWrapper>
          <Button
            onClick={handleVerify}
            disableElevation
            size="large"
            variant="contained"
          >
            {" "}
            Verify OTP
          </Button>
        </FormWrapper>
        <Button aria-label="btn" onClick={handleResend}>
          Resend OTP
        </Button>
        <SubTextWrapper>
          <Typography size="Caption" fontWeight="semiBold">
            Continue with{" "}
          </Typography>
          <Typography
            fontWeight="semiBold"
            size="Caption"
            textColor="primary500"
          >
            EmailId
          </Typography>
          <VerticalLine />
          <Typography
            fontWeight="semiBold"
            size="Caption"
            textColor="primary500"
          >
            UserId
          </Typography>
        </SubTextWrapper>
        <Typography size="Caption" textColor="primary800" fontWeight="semiBold">
          Terms and Conditions
        </Typography>
      </Card>
    </Wrapper>
  );
};

export default OTPCard;
