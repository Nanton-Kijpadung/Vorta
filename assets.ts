/**
 * ASSET CONFIGURATION
 * We import assets as modules so Vite includes them in the build process.
 */

// Logos
import vortaLogo from './vorta-logo.png';
import geooseLogo from './geoose-logo.png';

// Robots
import robotMain from './robot-image.png';
import surveyorRobot from './surveyor-robot.png';
import optimizerRobot from './optimizer-robot.png';

// Sections
import homeAbout from './home-about.png';
import homeMonitoring from './home-monitoring.jpg';
import homeIntelligent from './home-intelligent.png';
import homeEco from './home-eco.jpg';

// Team
import allMembers from './all-members.JPG';
import member1 from './member1.jpg';
import member2 from './member2.jpg';
import member3 from './member3.jpg';
import member4 from './member4.jpg';
import member5 from './member5.jpg';

// How It Works
import ecosystemOverview from './overview-ecosystem.png';
import dockingStation from './docking-station.png';

// Impact
import pollutedWater from './impact-water.png';

export const ASSETS = {
  logos: {
    vorta: vortaLogo,
    geoose: geooseLogo,
  },
  robot: {
    main: robotMain 
  },
  home: {
    aboutSection: homeAbout,
    monitoring: homeMonitoring,
    intelligent: homeIntelligent,
    ecoConscious: homeEco
  },
  about: {
    teamCollab: allMembers,
    member1: member1,
    member2: member2,
    member3: member3,
    member4: member4,
    member5: member5
  },
  howItWorks: {
    ecosystem: ecosystemOverview,
    surveyor: surveyorRobot,
    optimizer: optimizerRobot,
    dockingStation: dockingStation
  },
  impact: {
    pollutedWater: pollutedWater
  }
};