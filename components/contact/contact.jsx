import Page from "../subcomponents/containers/page";
import style from "./contact.module.css";
import Button from "../subcomponents/buttons/primarybutton";

const Contact = () => {
  return (
    <Page
      id="contact"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      innerStyle={{
        width: "100%",
        gap: "var(--padding-light)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "var(--text-bright)",
        }}
      >
        Contact Us
      </div>
      <form className={style.contactform}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Surname" required />
        <input type="text" placeholder="Company/Organization" />
        <input type="email" placeholder="Email" required />
        <textarea type="text" placeholder="Message" rows={4} required />
        <Button title={"Submit"} variant="primary" />
      </form>
    </Page>
  );
};

export default Contact;
