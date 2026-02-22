# WaitWise – Intelligent Queue Insight System

WaitWise is a frontend prototype of a queue congestion prediction system designed for ration shops and public distribution centers.

It allows users to:
- Predict crowd levels for specific time slots
- Adjust predictions based on group size
- Identify peak and low traffic periods
- Get best-time-to-visit recommendations

This project focuses on clean architecture, UI/UX refinement, and deployable production readiness.


## Live Demo

https://waitwise-omega.vercel.app


## Problem Statement

Public service centers often experience unpredictable crowd surges.  
Visitors waste time standing in long queues without visibility into congestion levels.

WaitWise aims to provide structured, time-based insights to help users plan visits more efficiently.


## Features (v1.0)

- Time-slot based crowd prediction
- Multi-shop simulation model
- Group-size adjusted congestion calculation
- Calm / Average / Crowded status classification
- Best-time recommendation engine
- Smart insights summary panel
- Responsive layout (desktop + mobile)
- Production deployment via Vercel


## Tech Stack

Frontend:
- React (Create React App)
- Component-based architecture
- Modular CSS styling

Architecture:
- `components/` for reusable UI modules
- `utils/` for business logic (crowd status calculation)
- `data/` for structured simulation dataset

Deployment:
- Vercel (CI/CD integrated with GitHub)


## Project Structure

src/
│
├── components/
│ ├── Header
│ ├── HeroBlock
│ ├── StatsGrid
│ ├── VisitAdvisor
│ ├── InsightsPanel
│ ├── InfoCard
│ └── SectionContainer
│
├── data/
│ └── crowdData.js
│
├── utils/
│ └── crowdUtils.js
│
└── pages/
└── Dashboard.js


src/
│
├── components/
│ ├── Header
│ ├── HeroBlock
│ ├── StatsGrid
│ ├── VisitAdvisor
│ ├── InsightsPanel
│ ├── InfoCard
│ └── SectionContainer
│
├── data/
│ └── crowdData.js
│
├── utils/
│ └── crowdUtils.js
│
└── pages/
└── Dashboard.js


## Version

v1.0 – Portfolio Prototype Stable

This version focuses on:
- UI stability
- Core prediction logic
- Structured component architecture
- Clean production deployment


## Future Scope (v2)

- Backend integration (Django REST API)
- Real-time crowd tracking
- Authentication and role-based access
- Admin dashboard for shop managers
- ML-based demand forecasting
- Historical analytics visualization


## Author

Advait Rathish  
B.Tech Computer Science Engineering  
Kerala, India  

GitHub: https://github.com/advaitrathish  
LinkedIn: https://www.linkedin.com/in/advaitrathish/


## License

This project is built for portfolio and demonstration purposes.