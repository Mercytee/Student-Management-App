import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { GlobalStyles } from '@mui/material';
export const global_theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
    },

    components: {
        MuiTextField: {
            
          styleOverrides: {
            
            root: {
              '--TextField-brandBorderColor': '#E0E3E7',
              '--TextField-brandBorderHoverColor': '#B2BAC2',
              '--TextField-brandBorderFocusedColor': '#6F7E8C',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        }},
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 12,
        fontFamily:"roboto",
        fontWeightLight:"bolder"
      },
        
  overrides: {
    
      MuiTypography: {

        h1: {
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color:'white',
          marginBottom: '1rem',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: '1rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
      },
  },
  },
  });