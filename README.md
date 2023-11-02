# Metacord

<img width="1440" alt="Screenshot 2023-11-02 at 12 57 59 PM" src="https://github.com/dannweeeee/metacord/assets/42776950/7c605088-19d9-431d-820b-0e828be5da9e">

## Overview

Metacord is an Instant Messaging and VoIP Discord Clone built with Next.js 13, React, Socket.io, Prisma, TailwindCSS and MySQL. <br>
<br>
**Visit the Deployed Railway Website at:** https://metacord.up.railway.app/

## Features

- **Real-time Messaging:** Utilizing Socket.io for seamless real-time communication among users.
- **Multimedia Support:** Send attachments as messages using UploadThing.
- **Editing and Deleting:** Real-time editing and deleting of messages visible to all users.
- **Voice and Video Channels:** Create text, audio, and video call channels for engaging conversations.
- **1:1 Conversations:** Enable private one-on-one messaging between members.
- **Video Calls:** Facilitate one-on-one video calls between members.
- **Member Management:** Kick, change roles (Guest/Moderator), and manage members effectively.
- **Invite System:** Generate unique invite links and implement a fully functional invite system.
- **Infinite Loading:** Display messages in batches of 10 using @tanstack/query for smooth scrolling.
- **Server Customization:** Allow users to create and customize their servers.
- **UI Design:** Beautiful user interface using TailwindCSS and ShadcnUI.
- **Responsivity:** Ensure a responsive design with full mobile UI support.
- **Light/Dark Mode:** Implement a toggleable light and dark mode for user preference.
- **Websocket Fallback:** Implement WebSocket fallback using polling with alerts.
- **ORM with Prisma:** Utilize Prisma for Object-Relational Mapping for a seamless database experience.
- **MySQL Database:** Store data in a MySQL database, leveraging Planetscale for efficient scaling.
- **Authentication:** Secure user authentication with Clerk.

## Technologies

- **Next.js 13:** A React framework for building server-rendered applications.
- **React:** A JavaScript library for building user interfaces.
- **Socket.io:** Enables real-time, bidirectional, and event-based communication.
- **Prisma:** A modern database toolkit that simplifies database access with type-safe queries.
- **TailwindCSS:** A utility-first CSS framework for rapidly building custom designs.
- **MySQL:** A popular relational database management system for data storage.
- **Planetscale:** Provides a scalable and highly available database platform for MySQL.

## Tools

Tools that I used:

- [**Clerk**](https://clerk.com/) - For Authentication, User Management and Webhooks
- [**Shadcn**](https://ui.shadcn.com/) - For Accessible, Open Source User Interface Components
- [**Uploadthing**](https://uploadthing.com/) - For File Uploads (Mainly Image)
- [**LiveKit**](https://livekit.io/) - For Audio and Video Calls
- [**Zod**](https://zod.dev/) - For schema declaration and validation library (Avoided Duplicates especially for Multithreading Feature)

## Installation

Clone the repository

```
git clone https://github.com/dannweeeee/metacord.git
```

## Deployment

First install the dependencies with the following command:

```
npm install
```

Thereafter run the following command to run Metacord locally:

```
npm run dev
```
