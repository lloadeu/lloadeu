# Music Streaming Platform for RCCeE 🎶

Welcome to the Music Streaming Platform for RCCeE! This is a volunteer-driven project designed to provide a custom music streaming experience for RCCeE's music group, with a focus on easy access and seamless discovery for both RCCeE members and the public. 🎧

## Overview

The Music Streaming Platform for RCCeE is built to showcase and stream music with an emphasis on ease of use and efficient content management. Inspired by popular platforms like Spotify, this platform is available to the public and comes with a responsive design optimized for mobile users. 📱

## How It Works 🔄

Admins update the music catalog using **Decap CMS**, and every change triggers an automatic redeploy. Because the platform features a limited number of songs and updates occur infrequently, I opted for a static site architecture. This approach ensures fast performance and a simplified maintenance process without the overhead of a fully dynamic system.

## Features ✨

### Music Playback

- Stream individual songs and playlists using the native HTML Audio API.
- Effortlessly navigate between tracks with next/previous song functionality.
- Inspired by **Spotify** and **Midudev's Spotify Clone Tutorial**.

### Content Management

- Admins manage all music content through **Decap CMS**.
- Secure admin authentication is handled by **Netlify Identity** (public users do not need to authenticate).
- Music metadata is stored statically, and updates trigger automatic redeployment of the site.

### Responsive Design

- Fully responsive design with a custom mobile view tailored for a great user experience on all devices.

## Technology Stack ⚙️

### Frontend

- **Astro**: For fast static site generation.
- **React**: For dynamic UI components.
- **TypeScript**: For type safety and enhanced developer experience.
- **Tailwind CSS**: For a sleek, customizable UI.

### CMS & Deployment

- **Decap CMS**: Manages music content via Git-based CMS integration.
- **Netlify Identity**: Provides secure admin authentication for managing content.
- **Automatic Redeployment**: The site automatically redeploys with every content update, ensuring the latest music is always available.

### Audio Streaming

- Powered by the native **HTML Audio API** and enhanced by **Astro's View Transitions** for state persistence, ensuring smooth and uninterrupted music playback.

## Deployment 🚀

The site is publicly deployed in production and automatically redeploys whenever changes are made via Decap CMS. This static deployment strategy was chosen specifically because the music catalog is small and updates are rare, making it both practical and efficient.

## License 📝

This project is open source and available under the **MIT License**.

## Acknowledgments 🙏

- **Spotify**: For its inspiration in music streaming and design.
- **Midudev**: For providing the foundation through the Spotify clone tutorial.
