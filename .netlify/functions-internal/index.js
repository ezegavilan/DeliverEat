var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/ezegavilan/Facu/2023/Ing Software/Trabajos Practicos/repos/deliver-eat-pedido/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/ezegavilan/Facu/2023/Ing Software/Trabajos Practicos/repos/deliver-eat-pedido/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MLQRMGMC.css";

// app/styles/index.css
var styles_default = "/build/_assets/index-HMMOCHHB.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }, { rel: "stylesheet", href: tailwind_default }] : [{ rel: "stylesheet", href: tailwind_default }, { rel: "stylesheet", href: styles_default }]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  StepperWithContent: () => StepperWithContent,
  default: () => CheckoutPage,
  links: () => links2,
  meta: () => meta
});
var import_react3 = require("@material-tailwind/react");

// app/styles/checkout.css
var checkout_default = "/build/_assets/checkout-DIFU5CHL.css";

// app/routes/checkout.tsx
var import_react4 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => ({ title: "Complet\xE1 tu pedido" }), links2 = () => [{ rel: "stylesheet", href: checkout_default }];
function CheckoutPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "container m-5 px-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: " text-xl font-bold", children: "Complet\xE1 tu pedido" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "", children: "| One Burger" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "summary mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "summary-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "item-description", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "img" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Item 1" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "$ 3.500" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "summary-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "item-description", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "img" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Item 2" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "$ 2.000" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: "location-container mt-5", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StepperWithContent, {}) })
  ] });
}
function StepperWithContent() {
  let [activeStep, setActiveStep] = (0, import_react4.useState)(0), [selected, setSelected] = (0, import_react4.useState)("sooner"), handleSelectCard = (card) => {
    setSelected(card);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-full px-24 py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_react3.Stepper,
      {
        activeStep,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Step, { onClick: () => setActiveStep(0), children: [
            "1",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute -bottom-[4.5rem] w-max text-center" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Step, { onClick: () => setActiveStep(1), children: [
            "2",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute -bottom-[4.5rem] w-max text-center" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Step, { onClick: () => setActiveStep(2), children: [
            "3",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute -bottom-[4.5rem] w-max text-center" })
          ] })
        ]
      }
    ),
    activeStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-10 location", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "w-6 h-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("select", { id: "email-address-icon", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Seleccion\xE1 tu ciudad", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "default", selected: !0, children: "Seleccion\xE1 tu ciudad" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "C\xF3rdoba", children: "C\xF3rdoba" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "Villa Mar\xEDa", children: "Villa Mar\xEDa" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "R\xEDo Cuarto", children: "R\xEDo Cuarto" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-5 columns-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Calle", required: !0 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "N\xFAmero", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-5 columns-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Depto", required: !0 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Referencia para cadete", required: !0 })
      ] })
    ] }),
    activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "delivery-time mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `card ${selected === "sooner" ? "selected" : ""}`, onClick: () => handleSelectCard("sooner"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "\xA1Lo antes posible!" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `card ${selected !== "sooner" ? "selected" : ""}`, onClick: () => handleSelectCard("later"), children: [
        selected !== "later" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Quiero elegir cuando" }) }),
        selected === "later" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "schedule-order", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "\xBFCuando lo quer\xE9s?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "datetime-local", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "\xBFCuando lo quer\xE9s?", required: !0 })
        ] })
      ] })
    ] }),
    activeStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-10 location", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "STEP 0" }) })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_react5 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime"), meta2 = () => ({
  title: "\xBFQue est\xE1s buscando? | Comercio 1"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Link, { to: "checkout", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { children: "Ver pedido" }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HHQWTV5N.js", imports: ["/build/_shared/chunk-UEGOBHZ5.js", "/build/_shared/chunk-5HSHJSPS.js", "/build/_shared/chunk-C46C5URB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W3YY7W43.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-SWGZXXPO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3EOSV54I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "eae3ec18", hmr: void 0, url: "/build/manifest-EAE3EC18.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
