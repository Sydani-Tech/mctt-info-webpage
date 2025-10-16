import population_icon from "../assets/content/population-icon.svg"
import population_image from "../assets/P-Targeting_img.png"
import data_viz_icon from "../assets/content/data-viz-icon.svg"
import data_viz_image from "../assets/content/data-viz-image.svg"
import micro_plan_icon from "../assets/content/micro-planning-icon.svg"
import micro_plan_image from "../assets/content/micro-planing-image.svg"
import rt_icon from "../assets/content/RT-update-icon.svg"
import rt_image from "../assets/content/RT-image.svg"
import monitoring_icon from "../assets/content/monitoring-icon.svg"
import monitoring_image from "../assets/content/monitoring-image.svg"
import DA_icon from "../assets/content/data-ana-icon.svg"
import DA_image from "../assets/content/data-ana-image.svg"
import PT from "../assets/content/P-Targeting-icon.svg"
import DT from "../assets/content/d-viz-icon.svg"
import MP from "../assets/content/micro-p-icon.svg"
import RT from "../assets/content/rt-icon.svg"
import MN from "../assets/content/mon-icon.svg"
import DA from "../assets/data_visualization.svg"
import MOH from "../assets/MOH.svg"
import NGO from "../assets/NGO.svg"
import LG from "../assets/LG.svg"
import dr_F from "../assets/dr_fatima.svg"
import dr_P from "../assets/Dr_Prince.svg"
import hon from "../assets/Hon.svg"

export const Suite = [
  { 
    name: "Population Targeting", 
    content: "Identify and segment target populations with precision using demographic data, geographic boundaries, and custom criteria.",  
    image: population_image,
    icon: population_icon
    },
    { 
    name: "Data Visualization", 
    content: "Transform complex data into intuitive charts, maps, and reports that drive informed decision-making.",  
    image: data_viz_image,
    icon: data_viz_icon
    },
    { 
    name: "Micro Planning", 
    content: "Visualize partner capabilities, resources, and coverage areas to optimize collaboration and avoid duplication.",  
    image: micro_plan_image,
    icon: micro_plan_icon
    },
    { 
    name: "Real-Time Update", 
    content: "Continue planning and data collection even in remote area with limited connectivity. Sync when back online",  
    image: rt_image,
    icon: rt_icon
    },
    { 
    name: "Monitoring", 
    content: "Track progress, monitor coverage, and receive alerts as operations unfold across multiple locations",  
    image: monitoring_image,
    icon: monitoring_icon
    },
    { 
    name: "Data Analysis", 
    content: "Overlay multiple data sources including demographics, infrastructure, and environmental factors for comprehensive insights.",  
    image: DA_image,
    icon: DA_icon
    },
];

export const BetterPlanning = [
  { 
    name: "Population Targeting", 
    content: "Identify and segment target populations using precise geographic and demographic datasets for better planning.",  
    icon: PT,
    bg: "bg-gradient-to-r from-gradient-end/10 to-gradient-end/20"
    },
    { 
    name: "Data Visualization", 
    content: "Transform complex datasets into intuitive charts, dashboards, and map visuals that drive clear, data-informed actions.",  
    icon:DT,
    bg: "bg-gradient-to-r from-purple-100/50 to-red-100/50"
    },
    { 
    name: "Micro Planning", 
    content: "Design and optimize localized plans by visualizing settlements, resources, and coverage areas for effective execution.",
    icon: MP,
    bg: "bg-gradient-to-r from-gradient-start/10 to-gradient-start/20"
    },
    { 
    name: "Real-Time Update", 
    content: "Collect and sync field data instantly, ensuring updates and decisions remain accurate even in low-connectivity regions.", 
    icon: RT,
    bg: "bg-gradient-to-r from-orange-700/10 to-orange-700/10"
    },
    { 
    name: "Monitoring", 
    content: "Track live operations, progress metrics, and field performance with smart alerts and detailed coverage visualization.", 
    icon: MN,
    bg: "bg-gradient-to-r from-purple-500/10 to-purple-500/10"
    },
    { 
    name: "Data Analysis", 
    content: "Compare, overlay, and interpret multiple data sources to reveal insights that enhance accuracy and strategic outcomes.",
    icon: DA,
    bg: "bg-gradient-to-r from-gradient-start/10 to-gradient-end/20"
    },
];

export const Ministries = [
   { 
    name: "For Ministries of Health", 
    content: "Plan vaccination campaigns, track immunization coverage, and coordinate with health partners for maxium population reach.",  
    icon: MOH,
    more: [
      "Campaign planning & execution",
      "Coverage gap analysis",
      "Resource optimization"
    ]
    },
    { 
    name: "For NGOs", 
    content: "Cordinate Humanitarian responses, map beneficiary populations, and ensure efficient program delivery in challenging environments.",  
    icon: NGO,
    more: [
      "Humanitarian response planning",
      "Beneficiary targeting",
      "Impact measurement"
    ]
    },
    { 
    name: "For Local Governments", 
    content: "Improve service delivery, plan infrastructure development, and engage communities through data-driven governance  .",
    icon: LG,
    more: [
      "Service delivery planning",
      "Infrastructure mapping",
      "Community engagement"
    ]
    },
]

export const Reviews = [
   { 
    name: "Dr. Fatima", 
    content: "“MCTT  helped us achieve 96% vaccination coverage during our measles campaign - the highest we’ve ever recorded. The real-time monitoring was game-changing.”",  
    position: "Ministry of Health, Sierra Leone",
    image: dr_F,
    bg: "bg-gradient-to-r from-gradient-start/10 to-gradient-end/10"
    
    },
    { 
    name: "Dr. Prince", 
    content: "“MCTT enabled our teams to plan and deploy vaccination sessions with pinpoint accuracy. Coverage improved by 40% in just one campaign.”",  
    position: "CEO, Impact Health",
    image: dr_P,
    bg: "bg-gradient-to-r from-gradient-end/10 to-gradient-end/10"
    },
    { 
    name: "Hon. Ben Tough", 
    content: "“With MCTT’s data insights, we reduced missed settlements and improved coordination across districts. It completely changed our workflow.”",
    position: "Head of Research, DIPTO",
    image: hon,
    bg: "bg-gradient-to-r from-gradient-start/10 to-gradient-start/10"
    },
]

