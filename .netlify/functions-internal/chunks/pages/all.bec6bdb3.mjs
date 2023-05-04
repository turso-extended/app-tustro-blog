import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead } from '../astro.c4abb40a.mjs';
import 'html-escaper';
/* empty css                           */import rss from '@astrojs/rss';
/* empty css                           *//* empty css                            *//* empty css                            */import { createClient } from '@libsql/client/web';
import { resolve } from 'import-meta-resolve';
import path from 'path';
import { pathToFileURL } from 'url';
import Slugger from 'github-slugger';
import { visit } from 'unist-util-visit';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
import { getHighlighter } from 'shiki';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import markdown$1 from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import { VFile } from 'vfile';

const $$Astro$9 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/tony/web-apps/app-tustro-blog/src/components/BaseHead.astro");

const $$Astro$8 = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([[className, { active: isActive }], "astro-EIMMU3LG"], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/tony/web-apps/app-tustro-blog/src/components/HeaderLink.astro");

const SITE_BASE_URL = "https://app-tustro-blog.netlify.app" ;
const SITE_TITLE = "The Tustro Blog.";
const SITE_DESCRIPTION = "Welcome to the Turstro blog, where the edge meets content!";

const $$Astro$7 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
	<h2 class="astro-3EF6KSR2">
		${SITE_TITLE}
	</h2>
	<nav class="astro-3EF6KSR2">
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Home` })}
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`About` })}
	</nav>
</header>`;
}, "/home/tony/web-apps/app-tustro-blog/src/components/Header.astro");

const $$Astro$6 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
	&copy; ${today.getFullYear()} ChiselStrike. All rights reserved.
</footer>`;
}, "/home/tony/web-apps/app-tustro-blog/src/components/Footer.astro");

const client = createClient({
  url: "libsql://astroblog-brightonmboya.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMxOTM5NzEsImlkIjoiOTJkMDkxZDctZWE1Zi0xMWVkLTk5MzMtYmVkN2QzODYwZWFhIn0.tpMj56omVpRE3Nhj4li9_VrKIkCihCJL7c4ZBcghzjFSjfaHndm2cLWMj_gzWQfgbUiX1oLeDWFxv8Zgmp95Aw"
});

const $$Astro$5 = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const dateFormat = (datetime) => {
    const dateTime = new Date(datetime * 1e3);
    const date2 = dateTime.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return date2;
  };
  return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(dateFormat(date), "datetime")}>
	${dateFormat(date)}
</time>`;
}, "/home/tony/web-apps/app-tustro-blog/src/components/FormattedDate.astro");

const $$Astro$4 = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = [];
  try {
    const allPostsResponse = await client.execute({
      sql: "select posts.title, posts.description, posts.slug, posts.hero, authors.first_name, authors.last_name, authors.slug as author_slug, authors.avatar, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id order by posts.created_at desc;",
      args: []
    });
    posts = allPostsResponse.rows.map((post) => {
      return {
        published: false,
        title: post.title,
        description: post.description,
        slug: post.slug,
        hero: post.hero,
        created_at: post.created_at,
        author: {
          first_name: post.first_name,
          last_name: post.last_name,
          slug: post.slug,
          avatar: post.avatar
        }
      };
    });
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-J7PV25F6" })}
    
  ${renderHead($$result)}</head>
  <body class="astro-J7PV25F6">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-J7PV25F6" })}
    <main class="astro-J7PV25F6">
      <section class="astro-J7PV25F6">
        <ul class="astro-J7PV25F6">
          ${posts.map((post) => renderTemplate`<li class="astro-J7PV25F6">
                ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.publish_date || post.created_at, "class": "astro-J7PV25F6" })}
                <a${addAttribute(`/post/${post.slug}/`, "href")} class="astro-J7PV25F6">${post.title}</a>
              </li>`)}
        </ul>
      </section>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}
  </body></html>`;
}, "/home/tony/web-apps/app-tustro-blog/src/pages/index.astro");

const $$file$2 = "/home/tony/web-apps/app-tustro-blog/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

let posts = [];
try {
  const allPostsResponse = await client.execute({
    sql: "select posts.title, posts.description, posts.slug, posts.hero, authors.first_name, authors.last_name, authors.slug as author_slug, authors.avatar, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id order by posts.created_at desc;",
    args: [],
  });

  posts = allPostsResponse.rows.map((post) => {
    return {
      published: false,
      title: post.title,
      description: post.description,
      slug: post.slug,
      hero: post.hero,
      created_at: post.created_at,
      publish_date: post.publish_date,
      author: {
        first_name: post.first_name,
        last_name: post.last_name,
        slug: post.slug,
        avatar: post.avatar,
      },
    };
  });
} catch (error) {
  console.log(error);
}

async function get(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_BASE_URL,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publish_date || post.created_at,
      description: post.description,
      link: `/post/${post.slug}/`,
    })),
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://example.com");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Page;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-QO5XHE7C">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-QO5XHE7C" })}
		
	${renderHead($$result)}</head>

	<body class="astro-QO5XHE7C">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-QO5XHE7C" })}
		<main class="astro-QO5XHE7C">
			<article class="astro-QO5XHE7C">
				${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" class="astro-QO5XHE7C">`}
				<h1 class="title astro-QO5XHE7C">${title}</h1>
				${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "class": "astro-QO5XHE7C" })}
				${updatedDate && renderTemplate`<div class="last-updated-on astro-QO5XHE7C">
							Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "class": "astro-QO5XHE7C" })}
						</div>`}
				<hr class="astro-QO5XHE7C">
				${renderSlot($$result, $$slots["default"])}
			</article>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-QO5XHE7C" })}
	</body></html>`;
}, "/home/tony/web-apps/app-tustro-blog/src/layouts/Page.astro");

const $$Astro$2 = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "title": "About The Tustro Blog", "description": "Lorem ipsum dolor sit amet", "pubDate": Date.parse("April 17 2023") / 1e3, "updatedDate": Date.parse("April 17 2023") / 1e3, "heroImage": "/placeholder-about.png" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
		viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
		adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
		et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
		vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
		sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
	</p>

	<p>
		Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non
		tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non
		blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna
		porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis
		massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
		Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis
		bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra
		massa massa ultricies mi.
	</p>

	<p>
		Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl
		suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet
		nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae
		turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem
		dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat
		semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
		vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum
		facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam
		vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla
		urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.
	</p>

	<p>
		Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper
		viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc
		scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur
		gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus
		pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
		blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id
		cursus metus aliquam eleifend mi.
	</p>

	<p>
		Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta
		nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam
		tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci
		ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar
		proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
	</p>
` })}`;
}, "/home/tony/web-apps/app-tustro-blog/src/pages/about.astro");

const $$file$1 = "/home/tony/web-apps/app-tustro-blog/src/pages/about.astro";
const $$url$1 = "/about";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function isValidAstroData(obj) {
  if (typeof obj === "object" && obj !== null && obj.hasOwnProperty("frontmatter")) {
    const { frontmatter } = obj;
    try {
      JSON.stringify(frontmatter);
    } catch {
      return false;
    }
    return typeof frontmatter === "object" && frontmatter !== null;
  }
  return false;
}
class InvalidAstroDataError extends TypeError {
}
function safelyGetAstroData(vfileData) {
  const { astro } = vfileData;
  if (!astro || !isValidAstroData(astro)) {
    return new InvalidAstroDataError();
  }
  return astro;
}
function toRemarkInitializeAstroData({
  userFrontmatter
}) {
  return () => function(tree, vfile) {
    if (!vfile.data.astro) {
      vfile.data.astro = { frontmatter: userFrontmatter };
    }
  };
}

const cwdUrlStr = pathToFileURL(path.join(process.cwd(), "package.json")).toString();
async function importPlugin(p) {
  if (typeof p === "string") {
    try {
      const importResult2 = await import(p);
      return importResult2.default;
    } catch {
    }
    const resolved = await resolve(p, cwdUrlStr);
    const importResult = await import(resolved);
    return importResult.default;
  }
  return p;
}
function loadPlugins(items) {
  return items.map((p) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(p)) {
        const [plugin, opts] = p;
        return importPlugin(plugin).then((m) => resolve([m, opts])).catch((e) => reject(e));
      }
      return importPlugin(p).then((m) => resolve([m])).catch((e) => reject(e));
    });
  });
}

const rawNodeTypes = /* @__PURE__ */ new Set(["text", "raw", "mdxTextExpression"]);
const codeTagNames = /* @__PURE__ */ new Set(["code", "pre"]);
function rehypeHeadingIds() {
  return function(tree, file) {
    const headings = [];
    const slugger = new Slugger();
    const isMDX = isMDXFile(file);
    const astroData = safelyGetAstroData(file.data);
    visit(tree, (node) => {
      if (node.type !== "element")
        return;
      const { tagName } = node;
      if (tagName[0] !== "h")
        return;
      const [_, level] = tagName.match(/h([0-6])/) ?? [];
      if (!level)
        return;
      const depth = Number.parseInt(level);
      let text = "";
      visit(node, (child, __, parent) => {
        if (child.type === "element" || parent == null) {
          return;
        }
        if (child.type === "raw") {
          if (child.value.match(/^\n?<.*>\n?$/)) {
            return;
          }
        }
        if (rawNodeTypes.has(child.type)) {
          if (isMDX || codeTagNames.has(parent.tagName)) {
            let value = child.value;
            if (isMdxTextExpression(child) && !(astroData instanceof InvalidAstroDataError)) {
              const frontmatterPath = getMdxFrontmatterVariablePath(child);
              if (Array.isArray(frontmatterPath) && frontmatterPath.length > 0) {
                const frontmatterValue = getMdxFrontmatterVariableValue(astroData, frontmatterPath);
                if (typeof frontmatterValue === "string") {
                  value = frontmatterValue;
                }
              }
            }
            text += value;
          } else {
            text += child.value.replace(/\{/g, "${");
          }
        }
      });
      node.properties = node.properties || {};
      if (typeof node.properties.id !== "string") {
        let slug = slugger.slug(text);
        if (slug.endsWith("-"))
          slug = slug.slice(0, -1);
        node.properties.id = slug;
      }
      headings.push({ depth, slug: node.properties.id, text });
    });
    file.data.__astroHeadings = headings;
  };
}
function isMDXFile(file) {
  var _a;
  return Boolean((_a = file.history[0]) == null ? void 0 : _a.endsWith(".mdx"));
}
function getMdxFrontmatterVariablePath(node) {
  var _a;
  if (!((_a = node.data) == null ? void 0 : _a.estree) || node.data.estree.body.length !== 1)
    return new Error();
  const statement = node.data.estree.body[0];
  if ((statement == null ? void 0 : statement.type) !== "ExpressionStatement" || statement.expression.type !== "MemberExpression")
    return new Error();
  let expression = statement.expression;
  const expressionPath = [];
  while (expression.type === "MemberExpression" && expression.property.type === (expression.computed ? "Literal" : "Identifier")) {
    expressionPath.push(
      expression.property.type === "Literal" ? String(expression.property.value) : expression.property.name
    );
    expression = expression.object;
  }
  if (expression.type !== "Identifier" || expression.name !== "frontmatter")
    return new Error();
  return expressionPath.reverse();
}
function getMdxFrontmatterVariableValue(astroData, path) {
  let value = astroData.frontmatter;
  for (const key of path) {
    if (!value[key])
      return void 0;
    value = value[key];
  }
  return value;
}
function isMdxTextExpression(node) {
  return node.type === "mdxTextExpression";
}

function remarkCollectImages() {
  return function(tree, vfile) {
    if (typeof (vfile == null ? void 0 : vfile.path) !== "string")
      return;
    const imagePaths = /* @__PURE__ */ new Set();
    visit(tree, "image", (node) => {
      if (shouldOptimizeImage(node.url))
        imagePaths.add(node.url);
    });
    vfile.data.imagePaths = imagePaths;
  };
}
function shouldOptimizeImage(src) {
  return !isValidUrl(src) && !src.startsWith("/");
}
function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

function addAstro(Prism) {
  if (Prism.languages.astro) {
    return;
  }
  let scriptLang;
  if (Prism.languages.typescript) {
    scriptLang = "typescript";
  } else {
    scriptLang = "javascript";
    console.warn(
      "Prism TypeScript language not loaded, Astro scripts will be treated as JavaScript."
    );
  }
  let script = Prism.util.clone(Prism.languages[scriptLang]);
  let space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  let braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  let spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function() {
      return space;
    }).replace(/<BRACES>/g, function() {
      return braces;
    }).replace(/<SPREAD>/g, function() {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism.languages.astro = Prism.languages.extend("markup", script);
  Prism.languages.astro.tag.pattern = re(
    /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
  );
  Prism.languages.astro.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.astro.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i;
  Prism.languages.astro.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.astro.tag.inside["comment"] = script["comment"];
  Prism.languages.insertBefore(
    "inside",
    "attr-name",
    {
      spread: {
        pattern: re(/<SPREAD>/.source),
        inside: Prism.languages.astro
      }
    },
    Prism.languages.astro.tag
  );
  Prism.languages.insertBefore(
    "inside",
    "special-attr",
    {
      script: {
        pattern: re(/=<BRACES>/.source),
        inside: {
          "script-punctuation": {
            pattern: /^=(?={)/,
            alias: "punctuation"
          },
          rest: Prism.languages.astro
        },
        alias: `language-${scriptLang}`
      }
    },
    Prism.languages.astro.tag
  );
  let stringifyToken = function(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  let walkTokens = function(tokens) {
    let openedTags = [];
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type === "style") {
        return;
      }
      let notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") ; else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          let plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism.Token("plain-text", plainText, void 0, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism.hooks.add("after-tokenize", function(env) {
    if (env.language !== "astro") {
      return;
    }
    walkTokens(env.tokens);
  });
}

const languageMap = /* @__PURE__ */ new Map([["ts", "typescript"]]);
function runHighlighterWithAstro(lang, code) {
  if (!lang) {
    lang = "plaintext";
  }
  let classLanguage = `language-${lang}`;
  const ensureLoaded = (language) => {
    if (language && !Prism.languages[language]) {
      loadLanguages([language]);
    }
  };
  if (languageMap.has(lang)) {
    ensureLoaded(languageMap.get(lang));
  } else if (lang === "astro") {
    ensureLoaded("typescript");
    addAstro(Prism);
  } else {
    ensureLoaded("markup-templating");
    ensureLoaded(lang);
  }
  if (lang && !Prism.languages[lang]) {
    console.warn(`Unable to load the language: ${lang}`);
  }
  const grammar = Prism.languages[lang];
  let html = code;
  if (grammar) {
    html = Prism.highlight(code, grammar, lang);
  }
  return { classLanguage, html };
}

function transformer(className) {
  return function(tree) {
    const visitor = (node) => {
      let { lang, value } = node;
      node.type = "html";
      let { html, classLanguage } = runHighlighterWithAstro(lang, value);
      let classes = [classLanguage];
      if (className) {
        classes.push(className);
      }
      node.value = `<pre class="${classes.join(
        " "
      )}"><code is:raw class="${classLanguage}">${html}</code></pre>`;
      return node;
    };
    return visit(tree, "code", visitor);
  };
}
function plugin(className) {
  return transformer.bind(null, className);
}
var remark_prism_default = plugin;

const noVisit = /* @__PURE__ */ new Set(["root", "html", "text"]);
function scopedStyles(className) {
  const visitor = (node) => {
    var _a;
    if (noVisit.has(node.type))
      return;
    const { data } = node;
    let currentClassName = ((_a = data == null ? void 0 : data.hProperties) == null ? void 0 : _a.class) ?? "";
    node.data = node.data || {};
    node.data.hProperties = node.data.hProperties || {};
    node.data.hProperties.class = `${className} ${currentClassName}`.trim();
    return node;
  };
  return () => (tree) => visit(tree, visitor);
}

const highlighterCacheAsync = /* @__PURE__ */ new Map();
const remarkShiki = async ({ langs = [], theme = "github-dark", wrap = false }, scopedClassName) => {
  const cacheID = typeof theme === "string" ? theme : theme.name;
  let highlighterAsync = highlighterCacheAsync.get(cacheID);
  if (!highlighterAsync) {
    highlighterAsync = getHighlighter({ theme }).then((hl) => {
      hl.setColorReplacements({
        "#000001": "var(--astro-code-color-text)",
        "#000002": "var(--astro-code-color-background)",
        "#000004": "var(--astro-code-token-constant)",
        "#000005": "var(--astro-code-token-string)",
        "#000006": "var(--astro-code-token-comment)",
        "#000007": "var(--astro-code-token-keyword)",
        "#000008": "var(--astro-code-token-parameter)",
        "#000009": "var(--astro-code-token-function)",
        "#000010": "var(--astro-code-token-string-expression)",
        "#000011": "var(--astro-code-token-punctuation)",
        "#000012": "var(--astro-code-token-link)"
      });
      return hl;
    });
    highlighterCacheAsync.set(cacheID, highlighterAsync);
  }
  const highlighter = await highlighterAsync;
  for (const lang of langs) {
    await highlighter.loadLanguage(lang);
  }
  return () => (tree) => {
    visit(tree, "code", (node) => {
      let lang;
      if (typeof node.lang === "string") {
        const langExists = highlighter.getLoadedLanguages().includes(node.lang);
        if (langExists) {
          lang = node.lang;
        } else {
          console.warn(`The language "${node.lang}" doesn't exist, falling back to plaintext.`);
          lang = "plaintext";
        }
      } else {
        lang = "plaintext";
      }
      let html = highlighter.codeToHtml(node.value, { lang });
      html = html.replace(
        /<pre class="(.*?)shiki(.*?)"/,
        `<pre is:raw class="$1astro-code$2${scopedClassName ? " " + scopedClassName : ""}"`
      );
      if (node.lang === "diff") {
        html = html.replace(
          /<span class="line"><span style="(.*?)">([\+|\-])/g,
          '<span class="line"><span style="$1"><span style="user-select: none;">$2</span>'
        );
      }
      if (wrap === false) {
        html = html.replace(/style="(.*?)"/, 'style="$1; overflow-x: auto;"');
      } else if (wrap === true) {
        html = html.replace(
          /style="(.*?)"/,
          'style="$1; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;"'
        );
      }
      if (scopedClassName) {
        html = html.replace(/\<span class="line"\>/g, `<span class="line ${scopedClassName}"`);
      }
      node.type = "html";
      node.value = html;
      node.children = [];
    });
  };
};
var remark_shiki_default = remarkShiki;

function rehypeImages() {
  return () => function(tree, file) {
    visit(tree, (node) => {
      var _a, _b;
      if (node.type !== "element")
        return;
      if (node.tagName !== "img")
        return;
      if ((_a = node.properties) == null ? void 0 : _a.src) {
        if ((_b = file.data.imagePaths) == null ? void 0 : _b.has(node.properties.src)) {
          node.properties["__ASTRO_IMAGE_"] = node.properties.src;
          delete node.properties.src;
        }
      }
    });
  };
}

const markdownConfigDefaults = {
  syntaxHighlight: "shiki",
  shikiConfig: {
    langs: [],
    theme: "github-dark",
    wrap: false
  },
  remarkPlugins: [],
  rehypePlugins: [],
  remarkRehype: {},
  gfm: true,
  smartypants: true
};
const isPerformanceBenchmark = Boolean(process.env.ASTRO_PERFORMANCE_BENCHMARK);
async function renderMarkdown(content, opts) {
  var _a;
  let {
    fileURL,
    syntaxHighlight = markdownConfigDefaults.syntaxHighlight,
    shikiConfig = markdownConfigDefaults.shikiConfig,
    remarkPlugins = markdownConfigDefaults.remarkPlugins,
    rehypePlugins = markdownConfigDefaults.rehypePlugins,
    remarkRehype = markdownConfigDefaults.remarkRehype,
    gfm = markdownConfigDefaults.gfm,
    smartypants = markdownConfigDefaults.smartypants,
    frontmatter: userFrontmatter = {}
  } = opts;
  const input = new VFile({ value: content, path: fileURL });
  const scopedClassName = (_a = opts.$) == null ? void 0 : _a.scopedClassName;
  let parser = unified().use(markdown$1).use(toRemarkInitializeAstroData({ userFrontmatter })).use([]);
  if (!isPerformanceBenchmark && gfm) {
    if (gfm) {
      parser.use(remarkGfm);
    }
    if (smartypants) {
      parser.use(remarkSmartypants);
    }
  }
  const loadedRemarkPlugins = await Promise.all(loadPlugins(remarkPlugins));
  const loadedRehypePlugins = await Promise.all(loadPlugins(rehypePlugins));
  loadedRemarkPlugins.forEach(([plugin, pluginOpts]) => {
    parser.use([[plugin, pluginOpts]]);
  });
  if (!isPerformanceBenchmark) {
    if (scopedClassName) {
      parser.use([scopedStyles(scopedClassName)]);
    }
    if (syntaxHighlight === "shiki") {
      parser.use([await remark_shiki_default(shikiConfig, scopedClassName)]);
    } else if (syntaxHighlight === "prism") {
      parser.use([remark_prism_default(scopedClassName)]);
    }
    if (opts.experimentalAssets) {
      parser.use([remarkCollectImages]);
    }
  }
  parser.use([
    [
      markdownToHtml,
      {
        allowDangerousHtml: true,
        passThrough: [],
        ...remarkRehype
      }
    ]
  ]);
  loadedRehypePlugins.forEach(([plugin, pluginOpts]) => {
    parser.use([[plugin, pluginOpts]]);
  });
  if (opts.experimentalAssets) {
    parser.use(rehypeImages());
  }
  if (!isPerformanceBenchmark) {
    parser.use([rehypeHeadingIds]);
  }
  parser.use([rehypeRaw]).use(rehypeStringify, { allowDangerousHtml: true });
  let vfile;
  try {
    vfile = await parser.process(input);
  } catch (err) {
    err = prefixError(err, `Failed to parse Markdown file "${input.path}"`);
    console.error(err);
    throw err;
  }
  const headings = (vfile == null ? void 0 : vfile.data.__astroHeadings) || [];
  return {
    metadata: { headings, source: content, html: String(vfile.value) },
    code: String(vfile.value),
    vfile
  };
}
function prefixError(err, prefix) {
  if (err && err.message) {
    try {
      err.message = `${prefix}:
${err.message}`;
      return err;
    } catch (error) {
    }
  }
  const wrappedError = new Error(`${prefix}${err ? `: ${err}` : ""}`);
  try {
    wrappedError.stack = err.stack;
    wrappedError.cause = err;
  } catch (error) {
  }
  return wrappedError;
}

const symbol = Symbol.for('@astropub/md');

const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
);

/** @typedef {import('./shared').Shared} Shared */

class HTMLString extends String {
	get [Symbol.toStringTag]() {
		return 'HTMLString'
	}
}

async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	return await renderMarkdown(content, {
		...shared.markdownConfig,
		...Object(options),
	}).then(
		result => new HTMLString(result.code)
	)
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	return await renderMarkdown(content, {
		...shared.markdownConfig,
		...Object(options),
	}).then(
		result => new HTMLString(
			result.code.indexOf('<p>') === 0 &&
			result.code.indexOf('</p>') === result.code.length - 4
				? result.code.slice(3, -4)
			: result.code
		)
	)
};

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */

const Markdown = Object.assign(
	function Markdown(result, attributes, slots) {
		return {
			get [Symbol.toStringTag]() {
				return 'AstroComponent'
			},
			async *[Symbol.asyncIterator]() {
				const mdl = attributes.of;

				if (typeof mdl === 'string') {
					yield await markdown(mdl, {
						fileURL: new URL(import.meta.url),
						contentDir: new URL('./', import.meta.url),
					});
				} else {
					yield renderSlot(result, slots.default);
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
		Inline: Object.assign(
			function MarkdownInline(result, attributes, slots) {
				return {
					get [Symbol.toStringTag]() {
						return 'AstroComponent'
					},
					async *[Symbol.asyncIterator]() {
						const mdl = attributes.of;

						if (typeof mdl === 'string') {
							yield await markdown.inline(mdl, {
								fileURL: new URL(import.meta.url),
								contentDir: new URL('./', import.meta.url),
							});
						} else {
							yield renderSlot(result, slots.default);
						}
					},
				}
			},
			{
				isAstroComponentFactory: true,
			}
		)
	}
);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, publish_date, created_at, hero, author } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-BVZIHDZO">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-BVZIHDZO" })}
		
	${renderHead($$result)}</head>

	<body class="astro-BVZIHDZO">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-BVZIHDZO" })}
		<main class="astro-BVZIHDZO">
			<article class="astro-BVZIHDZO">
				${hero && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(hero, "src")} alt="" class="astro-BVZIHDZO">`}
				<h1 class="title astro-BVZIHDZO">${title}</h1>
				<span class="author astro-BVZIHDZO">${author.first_name} ${author.last_name}.</span>
				${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": publish_date | created_at, "class": "astro-BVZIHDZO" })}
				<hr class="astro-BVZIHDZO">
				${renderSlot($$result, $$slots["default"])}
			</article>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-BVZIHDZO" })}
	</body></html>`;
}, "/home/tony/web-apps/app-tustro-blog/src/layouts/BlogPost.astro");

const $$Astro = createAstro("https://example.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  console.log({ slug });
  if (!slug) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  try {
    const postResponse = await client.execute({
      sql: "select posts.content, posts.published, posts.title, posts.description, posts.slug, posts.hero, posts.created_at, authors.first_name, authors.last_name, authors.slug, authors.avatar, authors.twitter from posts left join authors on authors.id = posts.author_id where posts.slug = ?;",
      args: [slug]
    });
    if (!postResponse) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    const blogPostData = postResponse.rows[0];
    if (!blogPostData) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    post = {
      content: blogPostData.content,
      published: blogPostData.published,
      title: blogPostData.title,
      description: blogPostData.description,
      slug: blogPostData.slug,
      hero: blogPostData.hero,
      created_at: blogPostData.created_at,
      author: {
        first_name: blogPostData.first_name,
        last_name: blogPostData.last_name,
        slug: blogPostData.slug,
        avatar: blogPostData.avatar,
        email: blogPostData.email,
        socials: {
          twitter: blogPostData.twitter
        },
        created_at: blogPostData.created_at
      }
    };
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Markdown", Markdown, { "of": post?.content || "" })}
` })}`;
}, "/home/tony/web-apps/app-tustro-blog/src/pages/post/[slug].astro");

const $$file = "/home/tony/web-apps/app-tustro-blog/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
