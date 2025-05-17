import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Pandey Portfolio",
    short_name: "AP Portfolio",
    description: "Portfolio website of Aditya Pandey, Full Stack Developer & B.Tech CSE Student",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e40af",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon"
      },
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
} 