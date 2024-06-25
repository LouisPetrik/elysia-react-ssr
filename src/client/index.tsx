// src/react/index.tsx
// Make sure to include the following two lines:
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.js'

hydrateRoot(document, <App />)
