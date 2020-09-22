import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('shoul return the normalized forecast from the StromGlass service', async () => {
     const lat = -33.792726;
     const lng = 151.289824;
     
     const stormGlass = new StormGlass();
     const response = await stormGlass.fetchPoints(lat, lng);
     expect(response).toEqual({});
  });
});