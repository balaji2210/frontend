import { Button, InputAdornment, TextField } from "@mui/material";
import { Card, Typography } from "../utils";
import {
  FormWrapper,
  TabItem,
  TabLine,
  TabWrapper,
  TextWrapper,
  Wrapper,
} from "./LoginCard.styles";
import { useState } from "react";
import { sendOTP } from "@/api/sendOTP";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginCard = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const handleData = async () => {
    if (!phone) {
      toast?.error("Mobile Number is Required*", {
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }

    const response = await sendOTP({
      phone,
    });
    localStorage?.setItem("phone", phone);
    if (response?.success) {
      toast?.success("OTP Sent", {
        autoClose: 2000,
        theme: "dark",
      });
      router?.push("/verify-otp");
    } else {
      toast?.error("Error Generating OTP", {
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <Wrapper>
      <Card>
        <Typography
          textColor="neutral700"
          textAlign="center"
          size="Paragraph1"
          fontWeight="semiBold"
        >
          Select an option to continue
        </Typography>
        <TabWrapper>
          <TabItem>
            <Typography fontWeight="semiBold" size="Paragraph3">
              Mobile Number
            </Typography>
            <TabLine show />
          </TabItem>
          <TabItem>
            <Typography
              fontWeight="semiBold"
              textColor="neutral300"
              size="Paragraph3"
            >
              Email Id
            </Typography>
            <TabLine />
          </TabItem>
          <TabItem>
            <Typography
              fontWeight="semiBold"
              textColor="neutral300"
              size="Paragraph3"
            >
              User Id
            </Typography>
            <TabLine />
          </TabItem>
        </TabWrapper>
        <FormWrapper>
          <TextWrapper>
            <Typography
              textColor="neutral700"
              size="Paragraph2"
              fontWeight="semiBold"
            >
              Mobile Number
            </Typography>
            <TextField
              type="number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />
          </TextWrapper>
          <Button
            onClick={handleData}
            disableElevation
            size="large"
            variant="contained"
          >
            {" "}
            Get OTP
          </Button>
        </FormWrapper>
        <Typography size="Caption" textColor="primary800" fontWeight="semiBold">
          Terms and Conditions
        </Typography>
      </Card>
    </Wrapper>
  );
};

export default LoginCard;
