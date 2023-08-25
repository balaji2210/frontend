import PropTypes from "prop-types";
import styled from "styled-components";

const getFontWeight = (weight) => {
  switch (weight) {
    case "extraBold":
      return 800;
    case "bold":
      return 700;
    case "semiBold":
      return 600;
    default:
      return 400;
  }
};

const getColor = (theme, textColor) => {
  return textColor ? theme?.colors?.[textColor] : "inherit";
};

const getFontStyle = (style) => {
  return style === "italic" ? "italic" : "normal";
};

const getTextDecoration = (decoration) => {
  return decoration || "auto";
};

const CommonStyle = styled.span`
  display: ${({ noWrap, display }) =>
    noWrap ? " -webkit-box" : display || "unset"};
  -webkit-line-clamp: ${({ noWrap, noWrapLinesLimit }) =>
    noWrap ? noWrapLinesLimit : "unset"};
  -webkit-box-orient: ${({ noWrap }) => (noWrap ? "vertical" : "unset")};
  overflow: ${({ noWrap }) => (noWrap ? "hidden" : "unset")};
  text-align: ${({ textAlign }) => textAlign};

  white-space: pre-line;

  color: ${({ theme, textColor }) => getColor(theme, textColor)};
  background-color: ${({ theme, backgroundColor }) =>
    getColor(theme, backgroundColor)};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
  font-style: ${({ fontStyle }) => getFontStyle(fontStyle)};
  text-decoration: ${({ textDecoration }) => getTextDecoration(textDecoration)};
`;

const Heading1 = styled(CommonStyle)`
  font-size: 4.5rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${({ theme }) => theme?.breakpoints?.md} {
    font-size: 3rem;
  }
`;

const Heading2 = styled(CommonStyle)`
  font-size: 3.75rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.13rem;
  }
`;

const Heading3 = styled(CommonStyle)`
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.75rem;
  }
`;

const Heading4 = styled(CommonStyle)`
  font-size: 2.25rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
`;

const Heading5 = styled(CommonStyle)`
  font-size: 1.88rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.13rem;
  }
`;

const Heading6 = styled(CommonStyle)`
  font-size: 1.5rem;
  line-height: 110%;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.1rem;
  }
`;

const Subheading = styled(CommonStyle)`
  font-size: 1.25rem;
  line-height: 140%;
`;

const Caption = styled(CommonStyle)`
  font-size: 0.75rem;
  line-height: 140%;
`;

const Paragraph1 = styled(CommonStyle)`
  font-size: 1.13rem;
  line-height: 160%;
`;

const Paragraph2 = styled(CommonStyle)`
  font-size: 1rem;
  line-height: 150%;
`;

const Paragraph3 = styled(CommonStyle)`
  font-size: 0.88rem;
  line-height: 160%;
`;

const Highlighter = styled(CommonStyle)`
  font-weight: ${({ fontWeight }) =>
    fontWeight ? getFontWeight(fontWeight) : "inherit"};
`;

const Typography = ({
  size = "",
  fontWeight = "",
  fontStyle = "",
  textDecoration = "",
  textColor = "",
  textAlign = "",
  backgroundColor = "",
  noWrap = false,
  noWrapLinesLimit = "",
  children,
  wsLeft = false,
  wsRight = false,
  display = "",
}) => {
  switch (size) {
    case "Heading1":
      return (
        <Heading1
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading1>
      );
    case "Heading2":
      return (
        <Heading2
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading2>
      );
    case "Heading3":
      return (
        <Heading3
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading3>
      );
    case "Heading4":
      return (
        <Heading4
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading4>
      );
    case "Heading5":
      return (
        <Heading5
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading5>
      );
    case "Heading6":
      return (
        <Heading6
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Heading6>
      );

    case "Subheading":
      return (
        <Subheading
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Subheading>
      );
    case "Caption":
      return (
        <Caption
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Caption>
      );

    case "Paragraph1":
      return (
        <Paragraph1
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Paragraph1>
      );
    case "Paragraph2":
      return (
        <Paragraph2
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Paragraph2>
      );
    case "Paragraph3":
      return (
        <Paragraph3
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {children}
        </Paragraph3>
      );

    default:
      return (
        <Highlighter
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
          noWrap={noWrap}
          noWrapLinesLimit={noWrapLinesLimit}
          textAlign={textAlign}
          display={display}
        >
          {wsLeft && " "}
          {children}
          {wsRight && " "}
        </Highlighter>
      );
  }
};

export default Typography;
