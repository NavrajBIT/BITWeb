import Page from "../subcomponents/containers/page";
import Image from "next/image";

const Partners = () => {
  const partnerArray = Array.from(Array(15), (_, index) => index + 1);
  return (
    <Page
      id="partners"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "var(--bg-light)",
      }}
      innerStyle={{
        width: "100%",
        gap: "var(--padding-light)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
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
        Our Partners
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {partnerArray.map((file, index) => (
          <div key={"partner-" + index}>
            <Image
              src={`/logos/${file}.png`}
              height={200}
              width={200}
              style={{
                borderRadius: "var(--border-radius)",
              }}
            />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Partners;
