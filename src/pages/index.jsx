import React from 'react';

import Agents from 'components/index/Agents';
import Episode from 'components/index/Episode';
import Hero from 'components/index/Hero';
import News from 'components/index/News';

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
        <Agents />
      </main>
    </>
  );
};

export default IndexPage;
