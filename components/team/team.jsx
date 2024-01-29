import Page from "../subcomponents/containers/page";
import Image from "next/image";

export const teamData = [
  {
    name: "Nikhil Goyal",
    designation: {
      en: "Founder and CEO",
      es: "Fundador y CEO",
      ar: "Founder and CEO",
    },
    img: "/about/team/nikhil.png",
  },
  {
    name: "Alejandro Giuffrida",
    designation: {
      en: "Latam Team Head",
      es: "Jefe de equipo de latam",
      ar: "Latam Team Head",
    },
    img: "/about/team/ale.jpg",
  },
  {
    name: "Kavya GN",
    designation: {
      en: "Human Resource",
      es: "Recursos Humanos",
      ar: "Human Resource",
    },
    img: "/about/team/kavya.png",
  },
  {
    name: "Radhika Mahajan",
    designation: {
      en: "BD Executive",
      es: "Ejecutiva en BD",
      ar: "BD Executive",
    },
    img: "/about/team/radhika.png",
  },
  // {
  //   name: "Ankita Rai",
  //   designation: {
  //     es: "Ejecutiva en Marketing",
  //     en: "Marketing Executive",
  //     ar: "Marketing Executive",
  //   },
  //   img: "/about/team/ankita.png",
  // },

  // {
  //   name: "R.K Kedia",
  //   designation: {
  //     en: "HR Consultant",
  //     es: "Consultor en RRHH",
  //     ar: "HR Consultant",
  //   },
  //   img: "/about/team/rk.png",
  // },
  {
    name: "Navraj Sharma",
    designation: {
      en: "Blockchain Developer",
      es: "Desarrollador Blockchain",
      ar: "Blockchain Developer",
    },
    img: "/about/team/navraj.png",
  },
  {
    name: "Shubham Jaiswal",
    designation: {
      en: "Blockchain Developer",
      es: "Desarrollador Blockchain",
      ar: "Blockchain Developer",
    },
    img: "/about/team/shubham.png",
  },
  {
    name: "Hemant Kumar",
    designation: {
      en: "Blockchain Developer",
      es: "Desarrollador Blockchain",
      ar: "Blockchain Developer",
    },
    img: "/about/team/hemant.png",
  },
  // {
  //   name: "Vivek Tyagi",
  //   designation: {
  //     en: "Blockchain Developer",
  //     es: "Desarrollador Blockchain",
  //     ar: "Blockchain Developer",
  //   },
  //   img: "/about/team/vivek.png",
  // },
  {
    name: "Rishab Dhar",
    designation: {
      en: "Flutter Developer",
      es: "Desarrollador Flutter",
      ar: "Flutter Developer",
    },
    img: "/about/team/rishab.jpg",
  },
  {
    name: "Tanuj Srivastava",
    designation: {
      en: "Blockchain Developer",
      es: "Desarrollador Blockchain",
      ar: "Blockchain Developer",
    },
    img: "/about/team/tanuj.jpg",
  },
  {
    name: "Gitanjali Sharma",
    designation: {
      en: "Climate Change Executive",
      es: "Desarrollador Blockchain",
      ar: "Blockchain Developer",
    },
    img: "/about/team/gitanjali.jpg",
  },
];

const Team = () => {
  return (
    <Page
      id="team"
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
        Our Team
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {teamData.map((teamMember, index) => {
          return (
            <TeamCard
              key={index + teamMember}
              name={teamMember.name}
              designation={teamMember.designation["en"]}
              img={teamMember.img}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default Team;

const TeamCard = (props) => {
  return (
    <div
      style={{
        background: "var(--primary-90)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <Image
        src={props.img}
        alt={props.name}
        width={200}
        height={200}
        style={{ objectFit: "fill" }}
      />

      <div
        style={{
          padding: "var(--padding-light)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
        }}
      >
        <div>{props.designation}</div>
        <div
          style={{
            color: "var(--primary-50)",
            fontWeight: "600",
            fontSize: "1.25rem",
          }}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
};
