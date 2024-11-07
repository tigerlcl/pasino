import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { extendTheme } from '@chakra-ui/react';
import Home from './pages/Home';
import Rules from './pages/Rules';
import PaperArena from './pages/PaperArena';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import './styles/global.css';

// Define the color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({ 
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Box: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
      }),
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
      }),
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/arena" element={<PaperArena />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Analytics />
      </Router>
    </ChakraProvider>
  );
}

export default App; 