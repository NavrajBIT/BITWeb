import Page from "../subcomponents/containers/page";

const Roadmap = () => {
  const milestones = [
    [
      "Bitmemoir Beta Launch",
      "Bitmemoir Integration Framework",
      "Bitwallet Beta Launch",
      "BitBhoomi MVP Launch",
    ],

    [
      "Bitmemoir Mainnet Launch",
      "BitBhoomi Beta Launch",
      "Digital Product PassPort(DPP) MVP launch",
      "IDO Token Launch - Community Sale",
      "Token Listing on Decentralized Exchange",
    ],

    [
      "BitBhoomi Mainnet Launch",
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
        Roadmap
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--text-bright)",
        }}
      >
        Quarter 2024
      </div>
      {milestones.map((texts, index) => (
        <Milestone texts={texts} key={"milestone-" + index} />
      ))}
    </Page>
  );
};

export default Roadmap;

const Milestone = ({ texts }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--padding-light)",
        background: "rgba(0,0,0,0.9)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
        width: "100%",
        maxWidth: "var(--max-width-content)",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minHeight: "100px",
          width: "30px",
          borderRadius: "20px",
          background: "var(--lightSteelBlue)",
        }}
      />
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
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                background: "var(--pinkish-purple)",
              }}
            />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
