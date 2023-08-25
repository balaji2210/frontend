import NavBar from "@/components/navBar/NavBar";
import {
  Container,
  DetailsWrapper,
  Form,
  FormFieldWrapper,
  FormWrapper,
  ImageWrapper,
  ListItem,
  SideBar,
  SideWrapper,
  StudentCard,
  TextWrapper,
  Wrapper,
} from "./Profile.styles";
import Image from "next/image";
import { student } from "@/components/utils/images";
import { Typography } from "@/components/utils";
import {
  Button,
  Drawer,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React, { useEffect, useState } from "react";
import { getUser } from "@/api/getUser";
import { updateUser } from "@/api/updateUser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const classOptions = [
  {
    label: "Tenth",
    value: 10,
  },
  {
    label: "Eleventh",
    value: 10,
  },
  {
    label: "Twelfth",
    value: 12,
  },
];

const Profile = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [grade, setGrade] = useState("");
  const [board, setBoard] = useState("");
  const [medium, setMedium] = useState("");
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");

  const [open, setOpen] = useState(false);

  const logout = () => {
    router?.push("/");
    localStorage?.clear();
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setGrade(event.target.value);
  };

  const handleBoard = (e) => {
    setBoard(e.target.value);
  };

  const handleMedium = (e) => {
    setMedium(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const fetchData = async () => {
    const response = await getUser();
    setUserId(response?.data?._id);
    setFirstName(response?.data?.firstName || "");
    setLastName(response?.data?.lastName || "");
    setEmail(response?.data?.email || "");
    setMobile(response?.data?.phone || "");
    setBoard(response?.data?.board || "");
    setMedium(response?.data?.medium || "");
    setSchool(response?.data?.school || "");
    setCountry(response?.data?.country || "");
    setState(response?.data?.state || "");
    setGrade(response?.data?.grade || "");
  };

  useEffect(() => {
    fetchData();
  }, [open]);

  const handleData = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      mobile,
      grade,
      board,
      medium,
      school,
      country,
      state,
    };

    const response = await updateUser(data);

    if (response?.success) {
      toast?.success("Details Updated", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <Wrapper>
      <NavBar setClick={setOpen} />
      <Container>
        <StudentCard>
          <DetailsWrapper>
            <ImageWrapper>
              <Image src={student?.src} width="100" height="100" />
            </ImageWrapper>
            <TextWrapper>
              <Typography
                size="Paragraph2"
                fontWeight="semiBold"
                textColor="primary800"
                textAlign=""
              >
                {firstName || "Test"} {lastName || "Test"}
              </Typography>
              <Typography
                size="Paragraph3"
                fontWeight="semiBold"
                textColor="neutral600"
              >
                Student
              </Typography>
              <Typography
                size="Paragraph3"
                fontWeight="semiBold"
                textColor="neutral600"
              >
                UserId: {userId}
              </Typography>
            </TextWrapper>
          </DetailsWrapper>
        </StudentCard>
        <FormWrapper onSubmit={handleData}>
          <Form>
            <FormFieldWrapper>
              <Typography>First Name *</Typography>
              <TextField
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Last Name *</Typography>
              <TextField
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Email Id*</Typography>
              <TextField
                value={email}
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Mobile Number*</Typography>
              <TextField
                type="number"
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                  endAdornment: <Typography>verefied</Typography>,
                }}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Grade/Class*</Typography>
              <Select required value={grade} onChange={handleChange}>
                {classOptions?.map((item) => (
                  <MenuItem value={item?.value}>{item?.label}</MenuItem>
                ))}
              </Select>
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Board*</Typography>
              <Select required value={board} onChange={handleBoard}>
                <MenuItem value="State">State</MenuItem>
                <MenuItem value="CBSE">CBSE</MenuItem>
              </Select>
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Study Medium*</Typography>
              <Select required value={medium} onChange={handleMedium}>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </Select>
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>School Name</Typography>
              <TextField
                required
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>Country*</Typography>
              <Select required value={country} onChange={handleCountry}>
                <MenuItem value="India">India</MenuItem>
              </Select>
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Typography>State*</Typography>
              <Select required value={state} onChange={handleState}>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
              </Select>
            </FormFieldWrapper>
          </Form>
          <Button type="submit" disableElevation variant="contained">
            Update
          </Button>
        </FormWrapper>
      </Container>
      <SideWrapper>
        <Drawer anchor="left" open={open} onClose={onClose}>
          <SideBar>
            <Button onClick={() => setOpen(false)} variant="outlined">
              Profile
            </Button>
            <Button onClick={logout} variant="outlined">
              Logout
            </Button>
          </SideBar>
        </Drawer>
      </SideWrapper>
    </Wrapper>
  );
};

export default Profile;
