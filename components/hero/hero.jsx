import Page from "../subcomponents/containers/page";
import Pbutton from "../subcomponents/buttons/primarybutton";

const Hero = () => {
  return (
    <Page
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
          maxWidth: "var(--max-width-content)",
          fontSize: "4rem",
          fontWeight: "700",
          color: "var(--text-bright)",
        }}
      >
        Web3 for the Real World
      </div>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
        }}
      >
        Welcome to Beyond Imagination Tech, where innovation meets limitless
        possibilities. Explore a world of cutting-edge solutions and
        transformative technologies. From pioneering blockchain applications to
        revolutionary environmental platforms, we are redefining the future.
        Join us on a journey beyond boundaries, where imagination knows no
        limits. Discover, innovate, and shape the future with Beyond Imagination
        Tech.
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          flexWrap: "wrap",
        }}
      >
        <Pbutton title={"Contact Us"} variant={"primary"} target="contact" />
        <Pbutton
          title={"Learn More"}
          variant={"secondary"}
          target={"mission"}
        />
      </div>
    </Page>
  );
};

export default Hero;
