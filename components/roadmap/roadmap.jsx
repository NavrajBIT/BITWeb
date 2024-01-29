import Page from "../subcomponents/containers/page";

const Roadmap = () => {
  const milestones = [
    [
      "Bitmemoir Mainnet Launch",
      "Bitmemoir Integration Framework",
      "Bitwallet Beta Launch",
      "BitBhoomi MVP Launch",
      "BitBhoomi Beta Launch",
    ],

    [
      "Digital Product PassPort(DPP) MVP launch",
      "IDO Token Launch - Community Sale",
      "Token Listing on Decentralized Exchange",
      "BitBhoomi Mainnet Launch",
    ],

    [
      "BitWallet Mainnet Launch",
      "Digital Product PassPort(DPP) Beta launch",
      "Token listing on Centralized Exchanges",
    ],

    [
      "Digital Product PassPort(DPP) Mainnet launch",
      "NFT Trading Platform Launch for BitBhoomi",
      "Token listing on Centralized Exchanges",
    ],
  ];
  return (
    <Page
      id="roadmap"
      style={{
        backgroundImage: "url('/bg3.avif')",
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
        Roadmap - 2024
      </div>

      {milestones.map((texts, index) => (
        <Milestone texts={texts} key={"milestone-" + index} index={index} />
      ))}
    </Page>
  );
};

export default Roadmap;

const Milestone = ({ texts, index }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--padding-light)",
        background: "rgba(0,0,0,0.9)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
        width: "100%",
        // maxWidth: "var(--max-width-content)",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "100px",
          background: "var(--pinkish-purple)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "var(--text-bright)",
          textAlign: "center",
        }}
      >
        Quarter {index + 1}
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          flexDirection: "column",
        }}
      >
        {texts.map((text, index) => (
          <div
            key={"mile-text-" + index + texts[0]}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--padding-light)",
            }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "20px",
                background: "var(--lightSteelBlue)",
              }}
            />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
