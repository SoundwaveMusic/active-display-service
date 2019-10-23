import App from '../client/components/app.js';

describe('Test Test', () => {
  it('should be a test which actually runs', () => {
    expect(shallow(<App />).contains(<div id="play-pause-button"></div>)).toBe(true);
  });
});
