---
name: portfolio-r3f-3d
description: Design, implement, audit, or optimize purposeful 3D portfolio experiences with React 19 and React Three Fiber v9, including lazy scene loading, responsive Canvas sizing, reduced-motion and WebGL/static fallbacks, Three.js resource cleanup, performance and mobile budgets, and accessible DOM equivalents. Use when a portfolio task proposes, adds, reviews, debugs, or tunes React Three Fiber, Three.js scenes, models, canvases, shaders, or WebGL effects. Do not use for ordinary DOM or SVG motion or for unrelated 3D applications.
---

# Purposeful Portfolio 3D

Treat 3D as an optional progressive enhancement. Preserve the portfolio's story, static content, accessibility, and performance when JavaScript, motion, or WebGL is unavailable.

Before making technical decisions, read [references/primary-sources.md](references/primary-sources.md) completely. Reopen the linked primary documentation when an API, version, or lifecycle detail may have changed.

## Respect project scope

1. Read `AGENTS.md`, the complete implementation plan, the approved phase, and the current design and performance documents.
2. Confirm that the requested phase explicitly permits 3D. The current first-release plan defers WebGL; do not introduce it early or silently change that architecture decision.
3. Ask for approval before installing `three`, `@react-three/fiber`, or any other production dependency.
4. Keep planning and review tasks read-only unless the user explicitly requests implementation.
5. Never weaken the existing static recruiter path to accommodate the scene.

## Pass the story gate

Write down these answers before proposing an effect:

- **Portfolio claim:** Name the specific project, system, decision, or data flow the scene explains.
- **Reader benefit:** State what a recruiter or engineer understands faster or more accurately because of it.
- **Why 3D:** Explain why semantic HTML, an accessible SVG, a diagram, an image, or restrained DOM motion is insufficient.
- **Parity:** Describe the static version that conveys the same essential information.
- **Success measure:** Define an observable comprehension or interaction outcome and the performance budget.

Do not build the effect if any answer is merely "visual interest," novelty, atmosphere, polish, or trend alignment. Recommend the smallest non-3D alternative instead.

## Design the resilient path first

Create one reusable static story component before the Canvas. Use it for:

1. The server-rendered and no-JavaScript experience.
2. The lazy-module and asset-loading state.
3. The reduced-motion path.
4. Unsupported WebGL through `Canvas`'s `fallback` prop.
5. Initialization errors and context loss through an error boundary and context-loss handling.
6. Mobile or low-quality modes that cannot stay within budget.

Reserve the final scene dimensions in this component so activation does not shift the page. Keep the explanation, evidence, links, and calls to action in semantic DOM outside the canvas.

## Set up React 19 deliberately

- Pair React 19 with `@react-three/fiber` v9. Verify the installed React, React DOM, R3F, and Three.js versions instead of assuming compatibility.
- Keep the Canvas and Three.js code inside the smallest client-only boundary. Keep the static shell and portfolio content server-renderable.
- Prefer `Canvas` unless a custom root has a demonstrated bundle or integration benefit. A custom root transfers resize and unmount responsibility to the application.
- Add helpers such as Drei only for a named requirement and only after dependency approval. Do not add an ecosystem package for convenience alone.
- Preserve Strict Mode during development and fix lifecycle defects it exposes.

## Lazy-load the complete 3D boundary

- Keep `three`, `@react-three/fiber`, loaders, controls, models, and shaders out of the static wrapper's import graph.
- Dynamically import the entire scene module only after the client has mounted, reduced motion is not requested, and the agreed activation condition is met. Prefer explicit visitor activation on mobile or when the effect is nonessential.
- Wrap the lazy scene in Suspense using the reusable static story component. Use nested Suspense inside the Canvas for progressive low- then high-quality assets when justified.
- Do not eagerly preload models on the initial route. Start preloading only after intent, proximity, or activation; an eager `useGLTF.preload` defeats route-level lazy loading.
- Keep all core content and navigation usable before the scene chunk arrives and if it never arrives.

## Size the Canvas responsively

- Give the Canvas wrapper a measurable, nonzero CSS size. Let layout own its inline size and use an approved `aspect-ratio`, `clamp()`, or bounded block size rather than hard-coded viewport dimensions.
- Let `Canvas` observe its parent and update the camera by default. If using `createRoot` or a manual camera, implement resize, aspect, projection-matrix, and drawing-buffer updates explicitly.
- Set an explicit capped `dpr` range. Do not pass uncapped `window.devicePixelRatio` to a heavy scene.
- Reframe or simplify the composition at narrow container sizes; do not merely shrink controls or crop meaningful nodes.
- Test orientation changes, browser chrome changes, zoom, and containers embedded within project pages.

## Make reduced motion a complete mode

- Evaluate `prefers-reduced-motion` before importing or initializing the scene. Default to the static story rather than a frozen first frame.
- Disable automatic camera motion, parallax, orbiting, particles, looping transforms, and animated shader time in the reduced path.
- React to preference changes while the page is open. Unmount the Canvas and release its owned resources when switching to the static path.
- Offer an explicit opt-in only when the visitor can understand what will move before activating it. Never make activation necessary to access content.

## Own every resource lifecycle

- Prefer declarative R3F geometry, material, and object construction so unmounting can invoke disposal automatically.
- Treat objects passed through `<primitive>` as manually owned; R3F does not dispose the carried object on unmount.
- Treat `useLoader` results as cached and potentially shared. Do not dispose a cached geometry, material, or texture from an individual consumer.
- Document the owner and lifetime of every shared or global resource. Use `dispose={null}` only when that higher-level owner is explicit.
- For manually owned resources, remove scene objects and dispose obsolete geometries, materials, textures, render targets, skeletons, controls, post-processing passes, and renderers as applicable. Close exclusively owned `ImageBitmap` data.
- Remove event listeners, observers, timers, animation frames, workers, and context-loss handlers during cleanup.
- Verify repeated mount, unmount, route change, and fallback transitions. Use `renderer.info` to investigate monotonic geometry, texture, or program growth while accounting for Three.js internal caches.

## Enforce budgets before implementation

Preserve the repository's existing site budgets: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, CLS at or below 0.1, mobile Lighthouse performance at least 90, and initial homepage JavaScript at or below 180 KB compressed.

Add a feature budget with numeric limits before code. Do not accept "keep it fast" as a budget.

| Surface | Required gate |
| --- | --- |
| Critical route | Load zero 3D modules or assets before the agreed lazy-activation gate. |
| Deferred transfer | Cap compressed scene JavaScript, models, textures, and environment assets separately. |
| GPU work | Target a few hundred draw calls or fewer and never exceed R3F's documented 1,000-call maximum; budget triangles, lights, shadows, and passes. |
| Resolution | Cap DPR and drawing-buffer pixels for the named mobile and desktop test devices. |
| Runtime | Set a frame-time or sustained-FPS target and measure it on named devices under the agreed interaction. |
| Lifecycle | Require bounded `renderer.info` counts and no monotonic growth across repeated mount/unmount cycles. |
| Fallback | Require the static path to meet the site budgets independently of the scene. |

Record unmeasured limits and results as `TODO_CONTENT`; never present estimates as measurements.

## Optimize for mobile first

- Start mobile with the static story or an explicit "View interactive 3D" action unless testing proves automatic activation stays within budget.
- Prefer `frameloop="demand"`; use continuous rendering only for a story-critical interval. Stop or unmount work when the scene is offscreen.
- Reuse geometries and materials, instance repeated meshes, reduce draw calls, and use level of detail or nested low/high loading where it improves the story.
- Limit texture dimensions and count. Remember that compressed transfer size does not represent expanded GPU memory.
- Avoid or sharply limit real-time shadows, post-processing, transparency, and high-cost shaders. Prefer baked or static lighting cues when they communicate the same thing.
- Adapt quality from measured performance, not only viewport width or user-agent detection.
- Make every direct manipulation work with touch and without hover precision.

## Preserve accessibility

- Never put a portfolio claim, label, project link, metric, or required control only inside WebGL.
- Provide a semantic DOM description and equivalent links or controls adjacent to the canvas. Keep DOM reading order logical when the scene is absent.
- Treat decorative canvases as hidden from assistive technology. For informative scenes, label the surrounding figure and provide a visible caption or structured text alternative.
- Do not rely on color, depth, rotation, drag, hover, or spatial audio alone. Mirror state through text and ordinary buttons when interaction changes meaning.
- Keep focus in DOM controls with visible focus styles. Do not create inaccessible mesh-only controls or keyboard traps.
- Make pointer targets usable by touch and preserve browser scrolling and zooming.
- Ensure the static, reduced-motion, failure, and no-JavaScript paths expose the same core story.

## Verify every delivery

Run the project's required checks plus targeted verification:

1. Confirm the production dependency graph uses React 19 and R3F v9.
2. Inspect the initial production route and network log; verify no Three.js, R3F, model, texture, or shader asset loads before the activation gate.
3. Test loading, reduced-motion, unsupported-WebGL, initialization-error, context-loss, and no-JavaScript paths.
4. Test responsive layout at the project widths, orientation changes, touch input, keyboard navigation, zoom, and the semantic reading order.
5. Measure the approved mobile and desktop budgets in production mode and record device, viewport, throttling, and run variance.
6. Navigate into and away from the scene repeatedly and inspect console errors and resource counts.
7. Review the final diff for unrelated application changes, eager imports, unowned resources, invented results, and content hidden behind 3D.

Report changed files, story-gate decision, dependency decisions, measured budgets, fallback coverage, lifecycle ownership, commands, skipped checks, missing information, and remaining problems. Stop at the active phase boundary and wait for approval.
