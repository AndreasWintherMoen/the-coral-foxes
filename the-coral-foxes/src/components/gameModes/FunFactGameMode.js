import { Button } from '@mui/material';
import React from 'react';

const FunFact = ({ funFact, onNextTask }) => (
  <div
    style={{
      display: 'flex',
      height: '90vh',
      // width: "100vw",
      color: '#ff9400',
    }}
  >
    {/* background image */}
    <div
      style={{
        zIndex: -1,
        backgroundImage: 'url(/background_empty_space.jpg)',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    ></div>
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifySelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: '1000px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2em', marginTop: 0, color: '#ff9400' }}>
        {funFact.title || 'Informasjon'}
      </h2>
      <div
        style={{
          width: '90%',
          maxHeight: '60vh',
          overflow: 'hidden',
          flexGrow: 1,
          position: 'relative',
          alignSelf: 'center',
          objectFit: 'contain',
        }}
      ></div>
      <img
        src={funFact.pic}
        alt='funfact'
        style={{
          width: '80%',
          alignSelf: 'center',
          justifySelf: 'center',
        }}
      />

      <div
        style={{
          display: 'flex',
          backgroundColor: '#F55900',
          flexDirection: 'column',
          border: '10px solid #6B0000',
          color: '#6B0000',
          // height: "15vh",
          marginTop: '15px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontSize: '1.2em' }}>{funFact.fact}</p>
        <Button
          variant='contained'
          onClick={onNextTask}
          style={{
            backgroundColor: '#EC839E',
            // width: '20vw',
            // height: '6vh',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5em',
            color: '#882F3E',
            display: 'flex',
          }}
        >
          Neste
        </Button>
      </div>
    </div>
  </div>
);

export default FunFact;
