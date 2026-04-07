export type MemberType = "member" | "mentor";

export interface MemberProfile {
  id: string;
  name: string;
  roleId: string;
  roleEn: string;
  type: MemberType;
  imagePlaceholder: string;
}

export const members: MemberProfile[] = [
  {
    id: "t-01",
    name: "Rizkiyah Ananda",
    roleId: "President",
    roleEn: "President",
    type: "member",
    imagePlaceholder: "/images/members/Rizkiyah Ananda President.jpeg",
  },
  {
    id: "t-02",
    name: "Andi Putri",
    roleId: "Head of Media",
    roleEn: "Head of Media",
    type: "member",
    imagePlaceholder: "/images/members/Andi Putri_Head of Media.JPG",
  },
  {
    id: "t-03",
    name: "Andi Shifa Salsabillah",
    roleId: "Head Of HRD",
    roleEn: "Head Of HRD",
    type: "member",
    imagePlaceholder: "/images/members/Andi Shifa Salsabillah_Head Of HRD.JPG",
  },
  {
    id: "t-04",
    name: "Fathinah N Jannah",
    roleId: "Head Of R&E",
    roleEn: "Head Of R&E",
    type: "member",
    imagePlaceholder: "/images/members/Fathinah N Jannah_Head Of R&E.JPG",
  },
  {
    id: "m-01",
    name: "Annisa A Maharani",
    roleId: "Secretary",
    roleEn: "Secretary",
    type: "member",
    imagePlaceholder: "/images/members/Annisa A Maharani_Secretary.JPG",
  },
  {
    id: "m-02",
    name: "Nur Qalby Salsabila",
    roleId: "Bendahara",
    roleEn: "Treasurer",
    type: "member",
    imagePlaceholder: "/images/members/Nur Qalby Salsabila_Bendahara.JPG",
  },
  {
    id: "m-03",
    name: "Angel E.Th Manuputty",
    roleId: "Staff HRD",
    roleEn: "Staff HRD",
    type: "member",
    imagePlaceholder: "/images/members/Angel E.Th Manuputty_Staff HRD.JPG",
  },
  {
    id: "m-04",
    name: "Safrina Inayah",
    roleId: "Staff HRD",
    roleEn: "Staff HRD",
    type: "member",
    imagePlaceholder: "/images/members/Safrina Inayah_Staff HRD.JPG",
  },
  {
    id: "m-05",
    name: "Aulia Khairunnisa Isman",
    roleId: "Staff Media",
    roleEn: "Staff Media",
    type: "member",
    imagePlaceholder: "/images/members/Aulia K Isman_Staff Media.JPG",
  },
  {
    id: "m-06",
    name: "Najwa P Larasati",
    roleId: "Staff Media",
    roleEn: "Staff Media",
    type: "member",
    imagePlaceholder: "/images/members/Najwa P Larasati_Staff Media.JPG",
  },
  {
    id: "m-07",
    name: "Nasywa E Apsari",
    roleId: "Staff Media",
    roleEn: "Staff Media",
    type: "member",
    imagePlaceholder: "/images/members/Nasywa E Apsari_Staff Media.JPG",
  },
  {
    id: "m-08",
    name: "Nur F S Jaga",
    roleId: "Staff Media",
    roleEn: "Staff Media",
    type: "member",
    imagePlaceholder: "/images/members/Nur F S Jaga_Staff Media.JPG",
  },
  {
    id: "m-09",
    name: "Dhiska D Hermalia H",
    roleId: "Staff Program",
    roleEn: "Staff Program",
    type: "member",
    imagePlaceholder: "/images/members/Dhiska D Hermalia H_Staff Program.JPG",
  },
  {
    id: "m-10",
    name: "Mevie Heatubun",
    roleId: "Staff Program",
    roleEn: "Staff Program",
    type: "member",
    imagePlaceholder: "/images/members/Mevie Heatubun_Staff program.jpg",
  },
  {
    id: "m-11",
    name: "Putri Atiqah Rana",
    roleId: "Staff Program",
    roleEn: "Staff Program",
    type: "member",
    imagePlaceholder: "/images/members/Putri Atiqah Rana_Staff Program.jpeg",
  },
  {
    id: "m-12",
    name: "Shafiyyah N F Salandra",
    roleId: "Staff Program",
    roleEn: "Staff Program",
    type: "member",
    imagePlaceholder: "/images/members/Shafiyyah N F Salandra_Staff Program.JPG",
  },
  {
    id: "m-13",
    name: "Nurul Marasabessy",
    roleId: "Staff RE",
    roleEn: "Staff RE",
    type: "member",
    imagePlaceholder: "/images/members/Nurul Marasabessy_Staff RE.JPG",
  },
  {
    id: "m-14",
    name: "Sabina J. Tutupoho",
    roleId: "Staff R&E",
    roleEn: "Staff R&E",
    type: "member",
    imagePlaceholder: "/images/members/Sabina J. Tutupoho_Staff R&E.JPG",
  },
];
