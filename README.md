# Climate Visualisation

This is a small side project. In the app, users can see how average summer and winter temperatures have evolved over the past 60 years to get a feeling for
how the climate is changing in the place where they live. This hopefully brings the urgency of fighting climate change to the minds of more people.

URL: Coming soon

## preview
![ClimaVisu](https://media.giphy.com/media/NruBehLS74hrw0PRZ1/giphy-downsized-large.gif)
### todos
- [ ] optimize performance for older iPhones (6/7)
- [ ] scrape data longer in the past (?)
- [ ] higher regression precision, optical changes (?)
### finished
- [x] start an attempt on PWA
- [x] import data on changes in weather, rain, snowfall etc.
- [x] input should be keyboard sensitive: autosearch locations by keydown/up
- [x] location placeholders
- [x] scrape data from 1960 >

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