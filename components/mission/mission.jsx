import Page from "../subcomponents/containers/page";
import Image from "next/image";

const Mission = () => {
  return (
    <Page
      id="mission"
      style={{
        background: "var(--bg-dark)",
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
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          color: "var(--text-bright)",
        }}
      >
        Our Vision
      </div>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "auto",
        }}
      >
        Our vision is to pioneer the next frontier of technological evolution by
        designing revolutionary blockchain-based products. We are committed to
        crafting solutions that transcend imagination, addressing real-world
        challenges with innovation, transparency, and a commitment to creating
        lasting positive impact.
      </div>
      <Image
        src={"/bg2.jpg"}
        height={400}
        width={400}
        alt="Vision"
        style={{ margin: "auto", maxWidth: "100%" }}
      />
    </Page>
  );
};

export default Mission;
