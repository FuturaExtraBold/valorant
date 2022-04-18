import React from 'react';

import Agents from '../components/Agents/Agents';
import GiantOutline from '../components/GiantOutline/GiantOutline';
import GiantText from '../components/GiantText/GiantText';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ScrambleText from '../components/ScrambleText/ScrambleText';

import '../stylesheets/all.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <Agents />
        <div className="page">
          <div className="container">
            <GiantText text={['Where precise', <br />, 'gunplay matters...']} />
          </div>
          <GiantOutline />
        </div>
        <div className="page">
          <GiantText text={['Where precise', <br />, 'gunplay matters...']} />
          <ScrambleText />
        </div>
        <div className="page">
          <GiantText
            text={['...But creativity is', <br />, 'your greatest weapon']}
          />
        </div>
        <div className="page">
          <GiantText text={['Stay connected', <br />, 'to us']} />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
