import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DF0j4D6w.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic__5AvKEWE.mjs');
const _page1 = () => import('./chunks/get-info-playlist_DCJq0BfV.mjs');
const _page2 = () => import('./chunks/get-info-song_BV9OW6FQ.mjs');
const _page3 = () => import('./chunks/_id__BlqMVF1q.mjs');
const _page4 = () => import('./chunks/index_DVhe2iDw.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-info-playlist.json.js", _page1],
    ["src/pages/api/get-info-song.json.js", _page2],
    ["src/pages/playlist/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4f0643f8-4c3f-4fa8-a97c-f8847a8eefae"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
