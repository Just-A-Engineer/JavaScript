const config = {
  timeout: 1000000,
  expect: {timeout:1000000},
  use: {
    headless: false,
    viewport: { width: 1080, height: 720 },
    globalTimeout: 1000000
  },
};
  
module.exports = config;