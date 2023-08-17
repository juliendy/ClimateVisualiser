# Climate Visualisation

This is a small side project. In the app, users can see how average summer and winter temperatures have evolved over the past 60 years to get a feeling for
how the climate is changing in the place where they live. This hopefully brings the urgency of fighting climate change to the minds of more people.

## preview
![ClimaVisu](https://media.giphy.com/media/NruBehLS74hrw0PRZ1/giphy-downsized-large.gif)
### todos
- [ ] improvements to current state: legibility, generalisations, unused dependencies.
- [ ] forecasts? year 2050 >
- [ ] higher regression precision, optical changes (?)
- [ ] ability to choose climate models (models differ in their assumptions and therefore yield different outcomes)
### finished
- [x] start an attempt on PWA
- [x] import data on changes in weather, rain, snowfall etc.
- [x] input should be keyboard sensitive: autosearch locations by keydown/up
- [x] location placeholders
- [x] scrape data from 1960 >
- [x] change data from 1960 > 1950
- [x] make grid approximate more accurately, 30km to 11km grid model

## setup project

```bash
# install node_modules
npm install
# run dev server
npm run dev

# build production version
npm run build
```

> make sure the correct [adapter](https://kit.svelte.dev/docs/adapters) is set up! (Netlify/Vercel/etc)