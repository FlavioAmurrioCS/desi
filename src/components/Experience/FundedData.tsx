import acore from "../../img/projects/funded/acore.png";
import acore1 from "../../img/projects/suite_1800/img1.jpg";
import acore2 from "../../img/projects/suite_1800/img2.jpg";
import acore3 from "../../img/projects/suite_1800/img3.jpg";
const acoreProject = [acore1, acore2, acore3];

type FundedWork = {
  projectTitle: string;
  locationFull: string;
  personnel: string;
  dateSpanded: string;
  details: string;
  amountFunded: string;
  images: string[];
  btnImage: string;
  locationTitle?: string;
  requestedBy?: string;
};

const fundedWork: FundedWork[] = [
  {
    projectTitle: "ACORE",
    locationFull: "1150 Connecticut Avenue NW Suite 401, Washington, DC 20036.",
    personnel: `Neyer acquired and managed the contract from start to finish. The execution team lead
        by Roger installed, programmed, and tested all electrical devices to ensure the highest quality of
        work.`,
    dateSpanded: "May 25th, 2018 - Aug 14th, 2018",
    details: `The project start date was Jan 2018 and was scheduled for eight weeks. The
        inspector approved the electrical work the first time and the electrical work was completed a week
        ahead of schedule.`,
    amountFunded: "$35k - $85k",
    images: acoreProject,
    btnImage: acore,
  },
];

export default fundedWork;
