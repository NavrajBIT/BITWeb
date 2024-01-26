import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div style={{ width: "100%", background: "var(--bg-dark)" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          margin: "auto",
          padding: "var(--padding-main)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "var(--padding-main)",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src={"/logo.png"}
            height={60}
            width={120}
            alt="Beyond Imagination Technologies"
          />
          <div style={{ display: "flex", gap: "var(--padding-light)" }}>
            <Social
              title={"instagram"}
              link={"https://www.instagram.com/bitindiaofficial/"}
            />
            <Social
              title={"linkedin"}
              link={
                "https://www.linkedin.com/company/beyond-imagination-technlogies-pvt-ltd"
              }
            />
            <Social title={"twitter"} link={"https://twitter.com/BitIndia_"} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          © 2023 Beyond Imagination Technologies Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Social = ({ title, link }) => (
  <Link href={link} target="blank">
    <Image
      src={`/socials/${title}.svg`}
      height={30}
      width={30}
      alt={title}
      style={{ fill: "white" }}
    />
  </Link>
);
