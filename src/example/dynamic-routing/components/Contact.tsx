import React from "react";

interface ContactProp {
  email: string;
  mobile: string;
}

const Contact = ({ email, mobile }: ContactProp) => {
  return (
    <div>
      Contact me - With Props
      <br />
      Email: {email} <br />
      Mobile: {mobile}
    </div>
  );
};
export default Contact;
