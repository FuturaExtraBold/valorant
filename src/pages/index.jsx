import React from 'react';

import Agents from 'components/index/Agents';
import Episode from 'components/index/Episode';
import Gameplay from 'components/index/Gameplay';
import Hero from 'components/index/Hero';
import Maps from 'components/index/Maps';
import News from 'components/index/News';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

import 'stylesheets/all.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <News />
        <Episode />
        <Gameplay />
        <Agents />
        <Maps />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
