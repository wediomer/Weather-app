# Weather Forecast App

A modern, portfolio-ready weather application built with React. Features a beautiful, responsive UI with real-time weather data and forecast information from OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Modern UI Design**: Beautiful, polished interface with gradient backgrounds and smooth animations
- **Real-time Weather Data**: Current weather conditions and 4-day forecast
- **Search Functionality**: Search for any city worldwide
- **Search History**: Quick access to recently searched cities (persisted in localStorage)
- **Loading States**: Elegant loading indicators while fetching data
- **Error Handling**: User-friendly error messages with retry functionality
- **Empty States**: Helpful placeholder when no city is selected
- **Responsive Design**: Fully responsive layout that works on all devices
- **Accessibility**: Built with accessibility best practices
- **Optimized Performance**: Single API call with efficient data processing

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key ([Get one free here](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd weather-app-final-version/weather-app-final-version
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Open `.env` and add your OpenWeatherMap API key:
   ```
   REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder. You can serve it with any static file server:

```bash
# Install serve globally (if not already installed)
npm install -g serve

# Serve the production build
serve -s build
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables** in the Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `REACT_APP_WEATHER_API_KEY` with your API key

4. **Redeploy** to apply the environment variables

**Or use Vercel's GitHub integration:**
- Push your code to GitHub
- Import the repository in Vercel
- Add the environment variable in project settings
- Deploy automatically on every push

### Option 2: Netlify

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir=build
   ```

3. **Or use Netlify's web interface:**
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Add environment variable `REACT_APP_WEATHER_API_KEY` in Site settings → Environment variables

**Or use Netlify's GitHub integration:**
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `build`
- Add environment variable in Site settings

### Option 3: GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Add homepage field** to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/weather-app"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

   Note: You'll need to configure the API key differently for GitHub Pages (consider using a backend proxy or Netlify Functions).

### Option 4: Other Platforms

- **AWS S3 + CloudFront**: Upload `build` folder to S3 bucket and configure CloudFront
- **Firebase Hosting**: Use `firebase deploy`
- **Surge.sh**: `surge build`
- **Heroku**: Add a static buildpack

**Important**: Remember to set the `REACT_APP_WEATHER_API_KEY` environment variable on your hosting platform!

## 🛠️ Technologies Used

- **React 18.2.0**: UI library
- **React Hooks**: Custom hooks for data fetching and state management
- **Axios**: HTTP client for API requests
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **OpenWeatherMap API**: Weather data source

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchForm.js          # City search input and history
│   ├── SearchForm.css
│   ├── WeatherCard.js         # Weather forecast card
│   ├── WeatherCard.css
│   ├── LoadingState.js        # Loading indicator
│   ├── LoadingState.css
│   ├── ErrorState.js          # Error display
│   ├── ErrorState.css
│   ├── EmptyState.js          # Empty state placeholder
│   └── EmptyState.css
├── hooks/
│   ├── useWeather.js          # Custom hook for weather data
│   └── useSearchHistory.js    # Custom hook for search history
├── utils/
│   └── dateUtils.js           # Date formatting utilities
├── App.js                     # Main app component
├── App.css                    # App styles
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## 🎨 Design Features

- **Gradient Background**: Beautiful purple gradient background
- **Glass Morphism**: Frosted glass effect on cards
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Modern Typography**: Clean, readable font hierarchy
- **Consistent Spacing**: Well-structured spacing system
- **Icon Integration**: SVG icons for better scalability

## 🔧 Configuration

### API Key Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Add it to `.env` file as `REACT_APP_WEATHER_API_KEY`

### Customization

- **Colors**: Modify CSS variables in `index.css` or component CSS files
- **Forecast Days**: Change the number of forecast days in `useWeather.js`
- **History Limit**: Adjust `MAX_HISTORY_ITEMS` in `useSearchHistory.js`

## 📝 Available Scripts

- `npm start`: Start development server
- `npm run build`: Create production build
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App (one-way operation)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons from [Feather Icons](https://feathericons.com) (conceptual reference)
- Built with [Create React App](https://create-react-app.dev)

## 🐛 Troubleshooting

### API Key Issues
- Ensure your API key is correctly set in `.env`
- Verify the key is active in your OpenWeatherMap account
- Check that `REACT_APP_` prefix is included

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility

### CORS Issues
- OpenWeatherMap API should work without CORS issues for client-side requests
- If you encounter issues, consider using a backend proxy

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Made with ❤️ using React
