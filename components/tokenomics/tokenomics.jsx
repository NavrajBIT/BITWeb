import Page from "../subcomponents/containers/page";
import Image from "next/image";

const dist = {
  "Community Sale": 10,
  Team: 15,
  Development: 15,
  "Sales and Marketing": 10,
  Advisors: 5,
  "Liquidity & Airdrops": 10,
  "Future Fund Raise": 25,
  "Foundation Endowment": 10,
  "Total Supply": 100,
};
const Tokenomics = () => {
  return (
    <Page
      id="tokenomics"
      style={{
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
        Tokenomics
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-main)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "var(--text-bright)",
            }}
          >
            Token Distribution
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "3fr 2fr 1fr",
              gap: "var(--padding-light)",
              color: "var(--text-bright)",
            }}
          >
            <div></div>
            <div style={{ textAlign: "center" }}>Amount</div>
            <div style={{ textAlign: "center" }}>Percentage</div>
          </div>
          {Object.keys(dist).map((data, index) => (
            <Datadisplay data={data} key={"tokenomics-" + index} />
          ))}
        </div>
        <Image
          src={"/token.png"}
          width={300}
          height={250}
          style={{ maxWidth: "100%", borderRadius: "var(--border-radius)" }}
          alt="token distribution"
        />
      </div>
    </Page>
  );
};

export default Tokenomics;

const Datadisplay = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "3fr 2fr 1fr",
        gap: "var(--padding-light)",
        borderBottom: "1px solid var(--lightSteelBlue)",
        padding: "var(--padding-light)",
      }}
    >
      <div>{data}</div>
      <div style={{ textAlign: "center" }}>{dist[data]} million</div>
      <div style={{ textAlign: "right" }}>{dist[data]} %</div>
    </div>
  );
};
