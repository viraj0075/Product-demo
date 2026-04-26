import { FaRobot, FaBolt, FaProjectDiagram } from 'react-icons/fa';
import feature1 from '../assets/Features/featuregif_1.mp4';
import feature2 from '../assets/Features/featuregif_2.mp4';
import feature3 from '../assets/Features/featuregif_3.mp4';


export const futuristicFeatures = [
    {
        title: "AI Analytics & Predictive Intelligence",
        desc: "Instantly process millions of data points to uncover hidden trends. Leverage machine learning to forecast future revenue and customer behavior with pinpoint accuracy.",
        icon: <FaRobot />,
        img: feature1,
        reverse: false
    },
    {
        title: "Real-Time Sync & Automated Reporting",
        desc: "Monitor your KPIs live with ultra-low latency updates. Schedule and generate boardroom-ready reports automatically, saving your team hours of manual work.",
        icon: <FaBolt />,
        img: feature2,
        reverse: true
    },
    {
        title: "Deep Integrations & Smart Alerts",
        desc: "Connect seamlessly with CRM, Stripe, Google Analytics, and 50+ enterprise tools. Get notified of critical data anomalies instantly to take immediate action.",
        icon: <FaProjectDiagram />,
        img: feature3,
        reverse: false
    }
];
