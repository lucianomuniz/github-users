import React, { useState, useEffect } from 'react';
import axios from 'axios';

import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GitHubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  );
};

export default { GithubContext, GitHubProvider };