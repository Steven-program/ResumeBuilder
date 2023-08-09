import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App2.css'
import ResumeRender from './resume_placeholder'
import resumeWriter from './resume_write'


export default function App() {
  return (
    <>
    {ResumeRender()}
    </>
  );
}

