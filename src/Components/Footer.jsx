import Container from "./Container";

const FooterLink = ({ children }) => {
  return (
    <li
      className="font-primary font-normal text-sm/[35px]"
      style={{ color: "#0F2137" }}
    >
      <a>{children}</a>
    </li>
  );
};

const FooterHeading = ({ children }) => {
  return (
    <h2 className="text-slate-800 font-primary text-lg/[30px] font-medium mb-7">
      {children}
    </h2>
  );
};

const footerLinks = {
  "About Us": [
    "Support Center",
    " Customer Support",
    " Customer Support",
    "Copyright",
    "Popular Campaign",
  ],
  "Our Information": [
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
    "Site Map",
    " Store Hourss",
  ],
  "My Account": [
    "Press inquiries",
    "Social media",
    " directories",
    " Images & B-roll",
    "Permissions",
  ],
  Policy: [
    "Application security",
    "Software principles",
    " Unwanted software policy",
    " Responsible supply chain",
  ],
};

const Footer = () => {
  return (
    <div className="pt-12">
      <Container>
        <div className="flex justify-between py-10  border-t-2">
          {Object.entries(footerLinks).map((el, i) => (
            <div key={i}>
              <FooterHeading>{el[0]}</FooterHeading>
              <ul>
                {el[1].map((linkText, i) => (
                  <FooterLink key={i}>{linkText}</FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
