# Primary source notes

Use only the React Three Fiber documentation and repository and the Three.js manual for external technical claims in this skill. Treat repository plans and design documents as local constraints, not as substitutes for current API documentation.

## Compatibility and setup

- React Three Fiber is a React renderer and must match React's major version. Pair R3F v9 with React 19; v8 pairs with React 18.
- Install `three` and `@react-three/fiber` only after project approval. Confirm the current package and TypeScript guidance before choosing exact versions.
- R3F's v9 migration guide identifies v9 as its React 19 compatibility release and calls out Strict Mode breaking changes that can reveal lifecycle defects.

Sources:

- [R3F installation](https://r3f.docs.pmnd.rs/getting-started/installation)
- [R3F repository and compatibility matrix](https://github.com/pmndrs/react-three-fiber)
- [R3F v9 migration guide](https://r3f.docs.pmnd.rs/tutorials/v9-migration-guide)

## Canvas, sizing, and failure

- `Canvas` accepts a DOM `fallback` when GL is unsupported, `frameloop` modes, resize configuration, and a DPR number or range.
- The default Canvas handles parent measurement. A custom `createRoot` is not responsive automatically and must be configured on resize; unmount the root to dispose its memory.
- Guard initialization and context failures separately from the unsupported-GL fallback. Prefer a seamless static visual replacement.
- Three.js distinguishes CSS display size from drawing-buffer size. Update the camera aspect and projection when managing resize yourself.
- High-DPI rendering multiplies GPU work, especially on mobile. Cap the drawing buffer or DPR rather than blindly rendering every physical pixel.

Sources:

- [R3F Canvas API](https://r3f.docs.pmnd.rs/api/canvas)
- [R3F hooks and reactive size state](https://r3f.docs.pmnd.rs/api/hooks)
- [Three.js responsive design](https://threejs.org/manual/en/responsive.html)

## Loading and performance

- R3F loaders integrate with Suspense. Use nested Suspense to present lower-quality content before higher-quality assets when appropriate.
- `useLoader` caches resources by URL, so consumers may share the same loaded asset.
- `frameloop="demand"` avoids continuous rendering when a scene can rest. Imperative changes must request a frame with `invalidate()`.
- Reuse geometry and materials. R3F advises keeping draw calls to a few hundred or fewer, with 1,000 as a maximum, and recommends instancing for repeated meshes.
- Level of detail, nested loading, and measured quality adaptation reduce work on weaker devices.
- Avoid React state updates inside `useFrame`; mutate owned Three.js objects using the supplied frame delta.
- Texture sampling, dimensions, and count matter on mobile. Real-time shadow maps can multiply scene renders and consume texture memory.

Sources:

- [R3F loading models](https://r3f.docs.pmnd.rs/tutorials/loading-models)
- [R3F scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance)
- [R3F performance pitfalls](https://r3f.docs.pmnd.rs/advanced/pitfalls)
- [Three.js rendering on demand](https://threejs.org/manual/en/rendering-on-demand.html)
- [Three.js textures](https://threejs.org/manual/en/textures.html)
- [Three.js shadows](https://threejs.org/manual/en/shadows.html)

## Cleanup and ownership

- R3F attempts to call `dispose()` on declaratively managed objects when they unmount. Set `dispose={null}` only when automatic disposal must be disabled for an explicitly shared lifetime.
- R3F does not dispose objects carried by `<primitive>`; the application owns them.
- Three.js cannot infer application lifetimes. Removing an object from a scene does not dispose its geometry or material.
- Dispose obsolete buffer geometries, materials, textures, render targets, skeletons, controls, passes, and renderers when exclusively owned. A material does not dispose its textures.
- `ImageBitmap` CPU memory needs an application-level `close()` when it is no longer shared.
- Use `renderer.info` to inspect geometry, texture, and program counts. Some internal resources remain intentionally cached and reusable after scene cleanup.

Sources:

- [R3F objects and disposal](https://r3f.docs.pmnd.rs/api/objects)
- [Three.js cleanup](https://threejs.org/manual/en/cleanup.html)
- [Three.js disposal guide](https://threejs.org/manual/en/how-to-dispose-of-objects.html)

## Project-policy inferences

The primary sources describe rendering behavior; they do not make a portfolio product decision. Apply these repository requirements as explicit policy:

- Require a story benefit before accepting 3D.
- Keep semantic DOM as the source of truth for content and controls.
- Use the same static story for lazy loading, reduced motion, WebGL failure, mobile fallback, and no JavaScript.
- Establish numeric feature budgets before implementation and preserve the repository's existing Core Web Vitals and bundle budgets.
