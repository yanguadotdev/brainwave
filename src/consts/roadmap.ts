import loading1 from '../assets/loading-01.svg'
import check2 from '../assets/check-02.svg'
import grid from '../assets/grid.png'

import roadmap1 from '../assets/roadmap/image-1.png'
import roadmap2 from '../assets/roadmap/image-2.png'
import roadmap3 from '../assets/roadmap/image-3.png'
import roadmap4 from '../assets/roadmap/image-4.png'

import gradient from '../assets/gradient.png'

const roadmapCopy = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1.src,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2.src,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3.src,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4.src,
    },
  ]


export {
    loading1,
    check2,
    grid,
    gradient,
    roadmapCopy
}