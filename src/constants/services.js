import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Smart Contracts",
    text: `I write Smart Contract backed decentralized applications (DApps) on the Blockchain.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Fullstack applications",
    text: `I create full-stack Blockchain applications by connecting Smart Contracts with a frontend using React.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Web design",
    text: `With every piece of code I write, I strive to design beautiful and interactive web pages.`,
  },
]

export default services
