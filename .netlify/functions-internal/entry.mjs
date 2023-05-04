import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { g as server_default, h as deserializeManifest } from './chunks/astro.c4abb40a.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3 } from './chunks/pages/all.bec6bdb3.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */import '@astrojs/rss';
/* empty css                                 *//* empty css                                  *//* empty css                                  */import '@libsql/client/web';
import 'import-meta-resolve';
import 'path';
import 'url';
import 'github-slugger';
import 'unist-util-visit';
import 'prismjs';
import 'prismjs/components/index.js';
import 'shiki';
import 'rehype-raw';
import 'rehype-stringify';
import 'remark-gfm';
import 'remark-parse';
import 'remark-rehype';
import 'remark-smartypants';
import 'unified';
import 'vfile';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.js", _page1],["src/pages/about.astro", _page2],["src/pages/post/[slug].astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/_slug_.6c519acb.css","/_astro/index.2740038e.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/_slug_.6c519acb.css","/_astro/about.e1df6b9b.css"],"scripts":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/_slug_.6c519acb.css","/_astro/_slug_.26bc61b1.css"],"scripts":[],"routeData":{"route":"/post/[slug]","type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/home/tony/web-apps/app-tustro-blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/tony/web-apps/app-tustro-blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/tony/web-apps/app-tustro-blog/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/_slug_.26bc61b1.css","/_astro/_slug_.6c519acb.css","/_astro/about.e1df6b9b.css","/_astro/index.2740038e.css","/favicon.svg","/logo.jpg","/placeholder-about.png","/placeholder-hero.png","/placeholder-social.png","/images/og-image.png"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
