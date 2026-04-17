import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { fields, config as config$1, collection } from '@keystatic/core';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "Ov23liDjZhLniqVYpcyr";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "18f329bdd06e67c5ce1fd467ffdcf98219cf2c80";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "K2mnYX8LxLYV0B0rHR+yGgjh0AOVF3DQqbkLoW99bhg=";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const docSchema = {
  title: fields.slug({ name: { label: "Title" } }),
  description: fields.text({ label: "Description", multiline: true }),
  sidebar: fields.object(
    { order: fields.number({ label: "Order in sidebar" }) },
    { label: "Sidebar" }
  ),
  content: fields.markdoc({ label: "Content", extension: "md" })
};
function docCollection(label, path) {
  return collection({
    label,
    slugField: "title",
    path,
    format: { contentField: "content" },
    schema: docSchema
  });
}
const sections = [
  { key: "getting_started", label: "Getting Started", dir: "getting-started" },
  { key: "models", label: "Models", dir: "models" },
  { key: "chats", label: "Chats", dir: "chats" },
  { key: "content", label: "Content", dir: "content" },
  { key: "welcome_flow", label: "Welcome Flow", dir: "welcome-flow" },
  { key: "fan_lists", label: "Fan Lists", dir: "fan-lists" },
  { key: "analytics", label: "Analytics", dir: "analytics" },
  { key: "ai_tasks", label: "AI Tasks", dir: "content-requests" },
  { key: "integrations", label: "Integrations", dir: "integrations" },
  { key: "teams", label: "Teams", dir: "teams" },
  { key: "settings", label: "Settings", dir: "settings" }
];
const languages = [
  { prefix: "", flag: "🇬🇧", base: "src/content/docs" },
  { prefix: "ru_", flag: "🇷🇺", base: "src/content/docs/ru" },
  { prefix: "uk_", flag: "🇺🇦", base: "src/content/docs/uk" }
];
const collections = {};
for (const lang of languages) {
  for (const section of sections) {
    const key = `docs_${lang.prefix}${section.key}`;
    collections[key] = docCollection(
      `${lang.flag} ${section.label}`,
      `${lang.base}/${section.dir}/*`
    );
  }
}
const config = config$1({
  storage: {
    kind: "github",
    repo: { owner: "onlyai-dev", name: "onlyai-docs" }
  },
  ui: {
    brand: {
      name: "OnlyAI Docs"
    }
  },
  collections
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
