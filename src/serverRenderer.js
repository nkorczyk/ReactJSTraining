import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Root from './Root';
import SearchPage from './components/SearchPage';
import NotFoundPage from './components/NotFoundPage';
import configureStore from './actions/store';
import MovieDetails from './components/MovieDetails';
import Content from './components/Content';

const routes = [
  { path: '/', exact: true, component: SearchPage },
  { path: '/search/:query', exact: true, component: Content },
  { path: '/film/:id', exact: true, component: MovieDetails },
  { path: '/*', component: NotFoundPage },
];

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
          ${process.env.NODE_ENV === 'development'
          ? ''
          : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
        <div id="root">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
      const { fetchData } = route.component;

      if (!(fetchData instanceof Function)) {
        return Promise.resolve(null);
      }
      return fetchData(store.dispatch, match);
    });

    return Promise.all(promises)
      .then(() => {
        const context = {};
        const root = (
          <Root
            context={context}
            location={req.url}
            Router={StaticRouter}
            store={store}
          />
        );
        const htmlString = renderToString(root);

        if (context.url) {
          return res.redirect(context.url);
        }

        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
      });
  };
}
