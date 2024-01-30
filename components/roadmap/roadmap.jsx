import Page from "../subcomponents/containers/page";

const Roadmap = () => {
  const milestones = [
    [
      {
        title: "Bitmemoir Mainnet Launch",
        desc: "The Bitmemoir platform will officially go live. People will be able to use it to issue, store, and share their sensitive documents and credentials. ",
      },
      {
        title: "Bitmemoir Integration Framework",
        desc: "Integration into other systems or platforms will be enabled, making the platform more versatile and accessible.",
      },
      {
        title: "Bitwallet Beta Launch",
        desc: "The beta version of Bitwallet will be released which will allow users to store and manage their digital assets securely.",
      },
      {
        title: "BitBhoomi MVP Launch",
        desc: "A basic version of BitBhoomi, will be launched, showcasing the core features and functionality of the platform.",
      },
      {
        title: "BitBhoomi Beta Launch",
        desc: "The beta version of BitBhoomi will be released, allowing users to test and provide feedback on the platform before its official launch.",
      },
    ],
    [
      {
        title: "Digital Product Passport (DPP) MVP Launch",
        desc: "This illustrates the launch of the minimum viable product of DPP.",
      },
      {
        title: "IDO Token Launch (Community Sale)",
        desc: "The projects token will be offered for sale to the community through a decentralized exchange. This will allow community members to participate in the projects growth",
      },
      {
        title: "Token Listing on Decentralized Exchange",
        desc: "After the IDO, the projects token will be listed on a decentralized exchange, making it available for trading among users.",
      },
      {
        title: "BitBhoomi Mainnet Launch",
        desc: "This is the official launch of the BitBhoomi platform on the mainnet, meaning it will be fully operational and accessible to users.",
      },
    ],
    [
      {
        title: "BitWallet Mainnet Launch",
        desc: "Similar to the BitBhoomi Mainnet Launch, this refers to the official launch of the BitWallet platform on the mainnet.",
      },
      {
        title: "Digital Product Passport (DPP) Beta Launch",
        desc: "The beta version of DPP will be released, allowing users to test and provide feedback on the system before its official launch.",
      },
      {
        title: "Token Listing on Centralized Exchanges",
        desc: "The projects token will be listed on centralized exchanges, providing more opportunities for users to trade and access the token.",
      },
    ],
    [
      {
        title: "BitBhoomi Full Launch",
        desc: "This is the official launch of the complete and fully functional BitBhoomi platform. Users will be able to utilize all the features and benefits of this revolutionary platform.",
      },
      {
        title: "Bitmemoir Enhancements",
        desc: "During this quarter, Bitmemoir will undergo enhancements and improvements based on user feedback and market demands. This will make the platform even more robust and user-friendly.",
      },
      {
        title: "BitWallet Enhancements",
        desc: "Similar to Bitmemoir, BitWallet will also receive enhancements and updates to improve its functionality and user experience",
      },
      {
        title: "DPP Mainnet Launch",
        desc: "The official launch of the Digital Product Passport (DPP) on the mainnet. Users will be able to utilize the full capabilities of DPP for verifying the authenticity and ownership of digital products",
      },
      {
        title: "Community Engagement and Partnerships",
        desc: "In Quarter 4, there will be a focus on engaging with the community and forming partnerships to further strengthen the BIT’s ecosystem and reach.",
      },
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
        flexDirection: "column",
        gap: "var(--padding-light)",
        background: "rgba(0,0,0,0.9)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
        width: "100%",
        // maxWidth: "var(--max-width-content)",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "var(--border-radius-light)",
          background: "var(--pinkish-purple)",
          background: "var(--purpleGreenGradient)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "var(--text-bright)",
          textAlign: "center",
          padding: "var(--padding-main)",
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
            key={"mile-text-" + index + texts[0]["title"]}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--padding-light)",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: "700",
                  color: "var(--text-bright)",
                  display: "flex",
                  gap: "var(--padding-light)",
                  alignItems: "center",
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
                {text.title}
              </div>
              <div
                style={{
                  textAlign: "justify",
                }}
              >
                {text.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
