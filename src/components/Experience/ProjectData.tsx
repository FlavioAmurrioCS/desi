// IMAGES FROM PROJECTS
import suite401_1 from "../../img/projects/suite_401/suite_401-1.jpg";
import suite401_2 from "../../img/projects/suite_401/suite_401-2.jpg";
import suite401_3 from "../../img/projects/suite_401/suite_401-3.jpg";
const suite401 = [suite401_1, suite401_2, suite401_3];
import suite1020_1 from "../../img/projects/suite_1020/img1.jpeg";
import suite1020_2 from "../../img/projects/suite_1020/img2.jpeg";
const suite1020 = [suite1020_1, suite1020_2];
import suite1050_1 from "../../img/projects/suite_1050/img1.jpeg";
import suite1050_2 from "../../img/projects/suite_1050/img2.jpg";
const suite1050 = [suite1050_1, suite1050_2];
import suite1730_1 from "../../img/projects/suite_1730/img1.jpeg";
import suite1730_2 from "../../img/projects/suite_1730/img2.jpg";
const suite1730 = [suite1730_1, suite1730_2];
import suite1425_1 from "../../img/projects/suite_1425/img1.jpeg";
import suite1425_2 from "../../img/projects/suite_1425/img2.jpeg";
import suite1425_3 from "../../img/projects/suite_1425/img3.jpg";
const suite1425 = [suite1425_1, suite1425_2, suite1425_3];
import suite2100_1 from "../../img/projects/suite_2100/img1.jpeg";
import suite2100_2 from "../../img/projects/suite_2100/img2.jpeg";
import suite2100_3 from "../../img/projects/suite_2100/img3.jpg";
const suite2100 = [suite2100_1, suite2100_2, suite2100_3];
import suite1100_1 from "../../img/projects/suite_1100/img1.jpg";
const suite1100 = [suite1100_1];
import suite1800_1 from "../../img/projects/suite_1800/img1.jpg";
import suite1800_2 from "../../img/projects/suite_1800/img2.jpg";
import suite1800_3 from "../../img/projects/suite_1800/img3.jpg";
const suite1800 = [suite1800_1, suite1800_2, suite1800_3];

interface ConstructionProject {
  locationTitle: string;
  locationFull: string;
  requestedBy: string;
  dateSpanded: string;
  details: string;
  images: string[];
}

const projects: ConstructionProject[] = [
  {
    locationTitle: "1025 CONNECTICUT AVENUE",
    locationFull: "1025 CONNECTICUT AVENUE, NW suite 401 Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite401,
  },
  {
    locationTitle: "1020 CONNECTICUT AVENUE",
    locationFull: "1020 CONNECTICUT AVENUE, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite1020,
  },
  {
    locationTitle: "1050 CONNECTICUT AVENUE",
    locationFull: "1050 CONNECTICUT AVENUE, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite1050,
  },
  {
    locationTitle: "1730 RHODE ISLAND AVENUE",
    locationFull: "1730 RHODE ISLAND AVENUE, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of
        work.`,
    images: suite1730,
  },
  {
    locationTitle: "1425 K STREET",
    locationFull: "1425 K STREET, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite1425,
  },
  {
    locationTitle: "2100 K STREET",
    locationFull: "2100 K STREET, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite2100,
  },
  {
    locationTitle: "1100 L STREET",
    locationFull: "1100 L STREET, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite1100,
  },
  {
    locationTitle: "1800 G STREET",
    locationFull: "1800 G STREET, NW Washington DC",
    requestedBy: "Department of Agriculture",
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was May 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed
        a week ahead of schedule. Neyer acquired and managed the contract from start to finish. The
        execution team lead by Roger installed, programmed, and tested all electrical devices to
        ensure the highest quality of work.`,
    images: suite1800,
  },
];

export default projects;
