# Panvas - Research Paper Prediction Platform


<p align="center">
  <img src="public/web_icon.png" alt="Panvas Logo" width="200"/>
</p>

## About
Panvas (Paper + Canvas) is an innovative platform where researchers and enthusiasts can predict the acceptance outcomes of academic papers under review. By combining academic insight with engaging prediction mechanics, we create a unique space for the research community to interact with upcoming publications.

> A project that is made by nearly 100% AI

## Features
- **Paper Predictions**: Make informed predictions on paper acceptance/rejection outcomes
- **DialCoin System**: Earn and spend our virtual currency (represented by our mascot goose)
- **Research Categories**: Browse papers from multiple domains:
  - Computer Vision (CV)
  - Natural Language Processing (NLP)
  - Large Language Models (LLM)
  - Machine Learning (ML)
  - Artificial Intelligence (AI)
- **Conference Tracking**: Follow papers from major conferences:
  - CVPR
  - ICCV
  - NeurIPS
  - ICML
  - ACL
  - AAAI
- **User Profiles**: Track your prediction history and DialCoin balance
- **Community Features**: Connect with other researchers and share insights

## Tech Stack
- React 18
- React Router v6
- React Icons
- Modern CSS with Flexbox/Grid
- Responsive Design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/tigerlcl/panvas.git
cd panvas
```


2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run build #only once
npm start
```

## Project Structure
src/
├── components/ # Reusable UI components
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── CERTSection.jsx
│ ├── PaperBidCard.jsx
│ └── CoinIcon.jsx
├── pages/ # Page components
│ ├── Home.jsx
│ ├── Rules.jsx
│ ├── PaperArena.jsx
│ ├── Profile.jsx
│ └── FAQ.jsx
├── styles/ # CSS modules
│ ├── global.css
│ ├── Header.css
│ ├── Hero.css
│ └── ...
├── App.jsx # Main app component
└── index.jsx # Entry point

## Key Features Implementation

### Paper Arena
- Filter papers by research domain
- View detailed paper information
- Place predictions with DialCoins
- Track submission deadlines

### Profile System
- Personal prediction history
- DialCoin balance tracking
- Social media integration
- Performance statistics

### DialCoin Economy
- Initial balance: 1000 DialCoins
- Earn through accurate predictions
- Higher rewards for riskier predictions
- Upcoming gift card redemption system

## Contributing
This is a prototype design. Contributions are welcome! Please feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## Development Roadmap
- [ ] User authentication system
- [ ] Real-time paper updates
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Integration with academic APIs
- [ ] Community discussion forums

## License
MIT License - see LICENSE file for details

## Acknowledgments
- Design inspiration from modern research platforms
- Created with love by DIAL
- Special thanks to the academic community for inspiration

## Contact
<!-- For any inquiries, please reach out to:
- Email: your.email@example.com
- Twitter: @YourTwitterHandle
- GitHub: @YourGitHubHandle -->

## Disclaimer
This is a prototype design for demonstration purposes only. No commercial use is permitted without explicit permission.

---
Made with ❤️ by DIAL