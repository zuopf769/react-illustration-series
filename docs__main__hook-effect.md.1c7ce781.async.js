(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"/lce":function(e,t,n){e.exports=n.p+"static/hook-commit-layout.be2606b4.png"},ORX0:function(e,t,n){e.exports=n.p+"static/hook-flushpassive.014c9923.png"},kLVF:function(e,t,n){e.exports=n.p+"static/renderwithhooks-create.b9763719.png"},oXxw:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),a=n.n(c),l=n("dEAq"),o=n("H1Ra"),f=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"hook-\u539f\u7406\u526f\u4f5c\u7528-hook"},a.a.createElement(l["AnchorLink"],{to:"#hook-\u539f\u7406\u526f\u4f5c\u7528-hook","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Hook \u539f\u7406(\u526f\u4f5c\u7528 Hook)"),a.a.createElement("p",null,"\u672c\u8282\u5efa\u7acb\u5728\u524d\u6587",a.a.createElement(l["Link"],{to:"./hook-summary"},"Hook \u539f\u7406(\u6982\u89c8)"),"\u548c",a.a.createElement(l["Link"],{to:"./hook-state"},"Hook \u539f\u7406(\u72b6\u6001 Hook)"),"\u7684\u57fa\u7840\u4e4b\u4e0a, \u91cd\u70b9\u8ba8\u8bba",a.a.createElement("code",null,"useEffect, useLayoutEffect"),"\u7b49\u6807\u51c6\u7684",a.a.createElement("code",null,"\u526f\u4f5c\u7528Hook"),"."),a.a.createElement("h2",{id:"\u521b\u5efa-hook"},a.a.createElement(l["AnchorLink"],{to:"#\u521b\u5efa-hook","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa Hook"),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"fiber"),"\u521d\u6b21\u6784\u9020\u9636\u6bb5, ",a.a.createElement("code",null,"useEffect"),"\u5bf9\u5e94\u6e90\u7801",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1232-L1248"},"mountEffect"),", ",a.a.createElement("code",null,"useLayoutEffect"),"\u5bf9\u5e94\u6e90\u7801",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1268-L1273"},"mountLayoutEffect")),a.a.createElement("p",null,a.a.createElement("code",null,"mountEffect"),":"),a.a.createElement(o["a"],{code:"function mountEffect(\n  create: () => (() => void) | void,\n  deps: Array<mixed> | void | null,\n): void {\n  return mountEffectImpl(\n    UpdateEffect | PassiveEffect, // fiberFlags\n    HookPassive, // hookFlags\n    create,\n    deps,\n  );\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement("code",null,"mountLayoutEffect"),":"),a.a.createElement(o["a"],{code:"function mountLayoutEffect(\n  create: () => (() => void) | void,\n  deps: Array<mixed> | void | null,\n): void {\n  return mountEffectImpl(\n    UpdateEffect, // fiberFlags\n    HookLayout, // hookFlags\n    create,\n    deps,\n  );\n}",lang:"js"}),a.a.createElement("p",null,"\u53ef\u89c1",a.a.createElement("code",null,"mountEffect"),"\u548c",a.a.createElement("code",null,"mountLayoutEffect"),"\u5185\u90e8\u90fd\u76f4\u63a5\u8c03\u7528",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1193-L1203"},"mountEffectImpl"),", \u53ea\u662f\u53c2\u6570\u4e0d\u540c."),a.a.createElement("p",null,a.a.createElement("code",null,"mountEffectImpl"),":"),a.a.createElement(o["a"],{code:"function mountEffectImpl(fiberFlags, hookFlags, create, deps): void {\n  // 1. \u521b\u5efahook\n  const hook = mountWorkInProgressHook();\n  const nextDeps = deps === undefined ? null : deps;\n  // 2. \u8bbe\u7f6eworkInProgress\u7684\u526f\u4f5c\u7528\u6807\u8bb0\n  currentlyRenderingFiber.flags |= fiberFlags; // fiberFlags \u88ab\u6807\u8bb0\u5230workInProgress\n  // 2. \u521b\u5efaEffect, \u6302\u8f7d\u5230hook.memoizedState\u4e0a\n  hook.memoizedState = pushEffect(\n    HookHasEffect | hookFlags, // hookFlags\u7528\u4e8e\u521b\u5efaeffect\n    create,\n    undefined,\n    nextDeps,\n  );\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement("code",null,"mountEffectImpl"),"\u903b\u8f91:"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u521b\u5efa",a.a.createElement("code",null,"hook")),a.a.createElement("li",null,"\u8bbe\u7f6e",a.a.createElement("code",null,"workInProgress"),"\u7684\u526f\u4f5c\u7528\u6807\u8bb0: ",a.a.createElement("code",null,"flags |= fiberFlags")),a.a.createElement("li",null,"\u521b\u5efa",a.a.createElement("code",null,"effect"),"(\u5728",a.a.createElement("code",null,"pushEffect"),"\u4e2d), \u6302\u8f7d\u5230",a.a.createElement("code",null,"hook.memoizedState"),"\u4e0a, \u5373 ",a.a.createElement("code",null,"hook.memoizedState = effect"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6ce8\u610f: ",a.a.createElement("code",null,"\u72b6\u6001Hook"),"\u4e2d",a.a.createElement("code",null,"hook.memoizedState = state"))))),a.a.createElement("h3",{id:"\u521b\u5efa-effect"},a.a.createElement(l["AnchorLink"],{to:"#\u521b\u5efa-effect","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa Effect"),a.a.createElement("p",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1150-L1176"},"pushEffect"),":"),a.a.createElement(o["a"],{code:"function pushEffect(tag, create, destroy, deps) {\n  // 1. \u521b\u5efaeffect\u5bf9\u8c61\n  const effect: Effect = {\n    tag,\n    create,\n    destroy,\n    deps,\n    next: (null: any),\n  };\n  // 2. \u628aeffect\u5bf9\u8c61\u6dfb\u52a0\u5230\u73af\u5f62\u94fe\u8868\u672b\u5c3e\n  let componentUpdateQueue: null | FunctionComponentUpdateQueue = (currentlyRenderingFiber.updateQueue: any);\n  if (componentUpdateQueue === null) {\n    // \u65b0\u5efa workInProgress.updateQueue \u7528\u4e8e\u6302\u8f7deffect\u5bf9\u8c61\n    componentUpdateQueue = createFunctionComponentUpdateQueue();\n    currentlyRenderingFiber.updateQueue = (componentUpdateQueue: any);\n    // updateQueue.lastEffect\u662f\u4e00\u4e2a\u73af\u5f62\u94fe\u8868\n    componentUpdateQueue.lastEffect = effect.next = effect;\n  } else {\n    const lastEffect = componentUpdateQueue.lastEffect;\n    if (lastEffect === null) {\n      componentUpdateQueue.lastEffect = effect.next = effect;\n    } else {\n      const firstEffect = lastEffect.next;\n      lastEffect.next = effect;\n      effect.next = firstEffect;\n      componentUpdateQueue.lastEffect = effect;\n    }\n  }\n  // 3. \u8fd4\u56deeffect\n  return effect;\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement("code",null,"pushEffect"),"\u903b\u8f91:"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u521b\u5efa",a.a.createElement("code",null,"effect"),"."),a.a.createElement("li",null,"\u628a",a.a.createElement("code",null,"effect"),"\u5bf9\u8c61\u6dfb\u52a0\u5230\u73af\u5f62\u94fe\u8868\u672b\u5c3e."),a.a.createElement("li",null,"\u8fd4\u56de",a.a.createElement("code",null,"effect"),".")),a.a.createElement("p",null,a.a.createElement("code",null,"effect"),"\u7684\u6570\u636e\u7ed3\u6784:"),a.a.createElement(o["a"],{code:"export type Effect = {|\n  tag: HookFlags,\n  create: () => (() => void) | void,\n  destroy: (() => void) | void,\n  deps: Array<mixed> | null,\n  next: Effect,\n|};",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"effect.tag"),": \u4e8c\u8fdb\u5236\u5c5e\u6027, \u4ee3\u8868",a.a.createElement("code",null,"effect"),"\u7684\u7c7b\u578b(",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactHookEffectTags.js#L12-L19"},"\u6e90\u7801"),")."),a.a.createElement(o["a"],{code:"export const NoFlags = /*  */ 0b000;\nexport const HasEffect = /* */ 0b001; // \u6709\u526f\u4f5c\u7528, \u53ef\u4ee5\u88ab\u89e6\u53d1\nexport const Layout = /*    */ 0b010; // Layout, dom\u7a81\u53d8\u540e\u540c\u6b65\u89e6\u53d1\nexport const Passive = /*   */ 0b100; // Passive, dom\u7a81\u53d8\u524d\u5f02\u6b65\u89e6\u53d1",lang:"js"})),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"effect.create"),": \u5b9e\u9645\u4e0a\u5c31\u662f\u901a\u8fc7",a.a.createElement("code",null,"useEffect()"),"\u6240\u4f20\u5165\u7684\u51fd\u6570.")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"effect.deps"),": \u4f9d\u8d56\u9879, \u5982\u679c\u4f9d\u8d56\u9879\u53d8\u52a8, \u4f1a\u521b\u5efa\u65b0\u7684",a.a.createElement("code",null,"effect"),"."))),a.a.createElement("p",null,a.a.createElement("code",null,"renderWithHooks"),"\u6267\u884c\u5b8c\u6210\u540e, \u6211\u4eec\u53ef\u4ee5\u753b\u51fa",a.a.createElement("code",null,"fiber"),",",a.a.createElement("code",null,"hook"),",",a.a.createElement("code",null,"effect"),"\u4e09\u8005\u7684\u5f15\u7528\u5173\u7cfb:"),a.a.createElement("p",null,a.a.createElement("img",{src:n("kLVF"),alt:""})),a.a.createElement("p",null,"\u73b0\u5728",a.a.createElement("code",null,"workInProgress.flags"),"\u88ab\u6253\u4e0a\u4e86\u6807\u8bb0, \u6700\u540e\u4f1a\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5\u7684",a.a.createElement("code",null,"commitRoot"),"\u51fd\u6570\u4e2d\u5904\u7406. (\u8fd9\u671f\u95f4\u7684\u6240\u6709\u8fc7\u7a0b\u53ef\u4ee5\u56de\u987e\u524d\u6587",a.a.createElement("code",null,"fiber\u6811\u6784\u9020/fiber\u6811\u6e32\u67d3"),"\u7cfb\u5217, \u6b64\u5904\u4e0d\u518d\u8d58\u8ff0)"),a.a.createElement("h3",{id:"useeffect--uselayouteffect"},a.a.createElement(l["AnchorLink"],{to:"#useeffect--uselayouteffect","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"useEffect & useLayoutEffect"),a.a.createElement("p",null,"\u7ad9\u5728",a.a.createElement("code",null,"fiber,hook,effect"),"\u7684\u89c6\u89d2, \u65e0\u9700\u5173\u5fc3\u8fd9\u4e2a",a.a.createElement("code",null,"hook"),"\u662f\u901a\u8fc7",a.a.createElement("code",null,"useEffect"),"\u8fd8\u662f",a.a.createElement("code",null,"useLayoutEffect"),"\u521b\u5efa\u7684. \u53ea\u9700\u8981\u5173\u5fc3\u5185\u90e8",a.a.createElement("code",null,"fiber.flags"),",",a.a.createElement("code",null,"effect.tag"),"\u7684\u72b6\u6001."),a.a.createElement("p",null,"\u6240\u4ee5",a.a.createElement("code",null,"useEffect"),"\u4e0e",a.a.createElement("code",null,"useLayoutEffect"),"\u7684\u533a\u522b\u5982\u4e0b:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"fiber.flags"),"\u4e0d\u540c")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528",a.a.createElement("code",null,"useEffect"),"\u65f6: ",a.a.createElement("code",null,"fiber.flags = UpdateEffect | PassiveEffect"),"."),a.a.createElement("li",null,"\u4f7f\u7528",a.a.createElement("code",null,"useLayoutEffect"),"\u65f6: ",a.a.createElement("code",null,"fiber.flags = UpdateEffect"),".")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,a.a.createElement("code",null,"effect.tag"),"\u4e0d\u540c")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528",a.a.createElement("code",null,"useEffect"),"\u65f6: ",a.a.createElement("code",null,"effect.tag = HookHasEffect | HookPassive"),"."),a.a.createElement("li",null,"\u4f7f\u7528",a.a.createElement("code",null,"useLayoutEffect"),"\u65f6: ",a.a.createElement("code",null,"effect.tag = HookHasEffect | HookLayout"),".")),a.a.createElement("h2",{id:"\u5904\u7406-effect-\u56de\u8c03"},a.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-effect-\u56de\u8c03","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 Effect \u56de\u8c03"),a.a.createElement("p",null,"\u5b8c\u6210",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u540e, \u903b\u8f91\u4f1a\u8fdb\u5165",a.a.createElement("code",null,"\u6e32\u67d3"),"\u9636\u6bb5. \u901a\u8fc7",a.a.createElement(l["Link"],{to:"./fibertree-commit"},"fiber \u6811\u6e32\u67d3"),"\u4e2d\u7684\u4ecb\u7ecd, \u5728",a.a.createElement("code",null,"commitRootImpl"),"\u51fd\u6570\u4e2d, \u6574\u4e2a\u6e32\u67d3\u8fc7\u7a0b\u88ab 3 \u4e2a\u51fd\u6570\u5206\u5e03\u5b9e\u73b0:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2256-L2300"},"commitBeforeMutationEffects")),a.a.createElement("li",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2302-L2383"},"commitMutationEffects")),a.a.createElement("li",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2385-L2432"},"commitLayoutEffects"))),a.a.createElement("p",null,"\u8fd9 3 \u4e2a\u51fd\u6570\u4f1a\u5904\u7406",a.a.createElement("code",null,"fiber.flags"),", \u4e5f\u4f1a\u6839\u636e\u60c5\u51b5\u5904\u7406",a.a.createElement("code",null,"fiber.updateQueue.lastEffect")),a.a.createElement("h3",{id:"commitbeforemutationeffects"},a.a.createElement(l["AnchorLink"],{to:"#commitbeforemutationeffects","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"commitBeforeMutationEffects"),a.a.createElement("p",null,"\u7b2c\u4e00\u9636\u6bb5: dom \u53d8\u66f4\u4e4b\u524d, \u5904\u7406\u526f\u4f5c\u7528\u961f\u5217\u4e2d\u5e26\u6709",a.a.createElement("code",null,"Passive"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"fiber"),"\u8282\u70b9."),a.a.createElement(o["a"],{code:"function commitBeforeMutationEffects() {\n  while (nextEffect !== null) {\n    // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\n\n    // \u5904\u7406`Passive`\u6807\u8bb0\n    const flags = nextEffect.flags;\n    if ((flags & Passive) !== NoFlags) {\n      if (!rootDoesHavePassiveEffects) {\n        rootDoesHavePassiveEffects = true;\n        scheduleCallback(NormalSchedulerPriority, () => {\n          flushPassiveEffects();\n          return null;\n        });\n      }\n    }\n    nextEffect = nextEffect.nextEffect;\n  }\n}",lang:"js"}),a.a.createElement("p",null,"\u6ce8\u610f: \u7531\u4e8e",a.a.createElement("code",null,"flushPassiveEffects"),"\u88ab\u5305\u88f9\u5728",a.a.createElement("code",null,"scheduleCallback"),"\u56de\u8c03\u4e2d, \u7531",a.a.createElement("code",null,"\u8c03\u5ea6\u4e2d\u5fc3"),"\u6765\u5904\u7406, \u4e14\u53c2\u6570\u662f",a.a.createElement("code",null,"NormalSchedulerPriority"),", \u6545\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u56de\u8c03(\u5177\u4f53\u539f\u7406\u53ef\u4ee5\u56de\u987e",a.a.createElement(l["Link"],{to:"./scheduler"},"React \u8c03\u5ea6\u539f\u7406(scheduler)"),")."),a.a.createElement("p",null,"\u7531\u4e8e",a.a.createElement("code",null,"scheduleCallback(NormalSchedulerPriority,callback)"),"\u662f\u5f02\u6b65\u7684, ",a.a.createElement("code",null,"flushPassiveEffects"),"\u5e76\u4e0d\u4f1a\u7acb\u5373\u6267\u884c. \u6b64\u5904\u5148\u8df3\u8fc7",a.a.createElement("code",null,"flushPassiveEffects"),"\u7684\u5206\u6790, \u7ee7\u7eed\u8ddf\u8fdb",a.a.createElement("code",null,"commitRoot"),"."),a.a.createElement("h3",{id:"commitmutationeffects"},a.a.createElement(l["AnchorLink"],{to:"#commitmutationeffects","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"commitMutationEffects"),a.a.createElement("p",null,"\u7b2c\u4e8c\u9636\u6bb5: dom \u53d8\u66f4, \u754c\u9762\u5f97\u5230\u66f4\u65b0."),a.a.createElement(o["a"],{code:"function commitMutationEffects(\n  root: FiberRoot,\n  renderPriorityLevel: ReactPriorityLevel,\n) {\n  // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\n  while (nextEffect !== null) {\n    const flags = nextEffect.flags;\n    const primaryFlags = flags & (Placement | Update | Deletion | Hydrating);\n    switch (primaryFlags) {\n      case Update: {\n        // useEffect,useLayoutEffect\u90fd\u4f1a\u8bbe\u7f6eUpdate\u6807\u8bb0\n        // \u66f4\u65b0\u8282\u70b9\n        const current = nextEffect.alternate;\n        commitWork(current, nextEffect);\n        break;\n      }\n    }\n    nextEffect = nextEffect.nextEffect;\n  }\n}\n\nfunction commitWork(current: Fiber | null, finishedWork: Fiber): void {\n  // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\n  switch (finishedWork.tag) {\n    case FunctionComponent:\n    case ForwardRef:\n    case MemoComponent:\n    case SimpleMemoComponent:\n    case Block: {\n      // \u5728\u7a81\u53d8\u9636\u6bb5\u8c03\u7528\u9500\u6bc1\u51fd\u6570, \u4fdd\u8bc1\u6240\u6709\u7684effect.destroy\u51fd\u6570\u90fd\u4f1a\u5728effect.create\u4e4b\u524d\u6267\u884c\n      commitHookEffectListUnmount(HookLayout | HookHasEffect, finishedWork);\n      return;\n    }\n  }\n}\n\n// \u4f9d\u6b21\u6267\u884c: effect.destroy\nfunction commitHookEffectListUnmount(tag: number, finishedWork: Fiber) {\n  const updateQueue: FunctionComponentUpdateQueue | null = (finishedWork.updateQueue: any);\n  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;\n  if (lastEffect !== null) {\n    const firstEffect = lastEffect.next;\n    let effect = firstEffect;\n    do {\n      if ((effect.tag & tag) === tag) {\n        // \u6839\u636e\u4f20\u5165\u7684tag\u8fc7\u6ee4 effect\u94fe\u8868.\n        const destroy = effect.destroy;\n        effect.destroy = undefined;\n        if (destroy !== undefined) {\n          destroy();\n        }\n      }\n      effect = effect.next;\n    } while (effect !== firstEffect);\n  }\n}",lang:"js"}),a.a.createElement("p",null,"\u8c03\u7528\u5173\u7cfb: ",a.a.createElement("code",null,"commitMutationEffects->commitWork->commitHookEffectListUnmount"),"."),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6ce8\u610f\u5728\u8c03\u7528",a.a.createElement("code",null,"commitMutationEffects(HookLayout | HookHasEffect, finishedWork)"),"\u65f6, \u53c2\u6570\u662f",a.a.createElement("code",null,"HookLayout | HookHasEffect"),", \u6240\u4ee5\u53ea\u5904\u7406\u7531",a.a.createElement("code",null,"useLayoutEffect()"),"\u521b\u5efa\u7684",a.a.createElement("code",null,"effect"),"."),a.a.createElement("li",null,"\u6839\u636e\u4e0a\u6587\u7684\u5206\u6790",a.a.createElement("code",null,"HookLayout | HookHasEffect"),"\u662f\u901a\u8fc7",a.a.createElement("code",null,"useLayoutEffect"),"\u521b\u5efa\u7684",a.a.createElement("code",null,"effect"),". \u6240\u4ee5",a.a.createElement("code",null,"commitMutationEffects"),"\u51fd\u6570\u53ea\u80fd\u5904\u7406\u7531",a.a.createElement("code",null,"useLayoutEffect()"),"\u521b\u5efa\u7684",a.a.createElement("code",null,"effect"),"."),a.a.createElement("li",null,"\u540c\u6b65\u8c03\u7528",a.a.createElement("code",null,"effect.destroy()"),".")),a.a.createElement("h3",{id:"commitlayouteffects"},a.a.createElement(l["AnchorLink"],{to:"#commitlayouteffects","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"commitLayoutEffects"),a.a.createElement("p",null,"\u7b2c\u4e09\u9636\u6bb5: dom \u53d8\u66f4\u540e"),a.a.createElement(o["a"],{code:"function commitLayoutEffects(root: FiberRoot, committedLanes: Lanes) {\n  // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\n  while (nextEffect !== null) {\n    const flags = nextEffect.flags;\n    if (flags & (Update | Callback)) {\n      // useEffect,useLayoutEffect\u90fd\u4f1a\u8bbe\u7f6eUpdate\u6807\u8bb0\n      const current = nextEffect.alternate;\n      commitLayoutEffectOnFiber(root, current, nextEffect, committedLanes);\n    }\n    nextEffect = nextEffect.nextEffect;\n  }\n}\n\nfunction commitLifeCycles(\n  finishedRoot: FiberRoot,\n  current: Fiber | null,\n  finishedWork: Fiber,\n  committedLanes: Lanes,\n): void {\n  // ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\n  switch (finishedWork.tag) {\n    case FunctionComponent:\n    case ForwardRef:\n    case SimpleMemoComponent:\n    case Block: {\n      // \u5728\u6b64\u4e4b\u524dcommitMutationEffects\u51fd\u6570\u4e2d, effect.destroy\u5df2\u7ecf\u88ab\u8c03\u7528, \u6240\u4ee5effect.destroy\u6c38\u8fdc\u4e0d\u4f1a\u5f71\u54cd\u5230effect.create\n      commitHookEffectListMount(HookLayout | HookHasEffect, finishedWork);\n\n      schedulePassiveEffects(finishedWork);\n      return;\n    }\n  }\n}\n\nfunction commitHookEffectListMount(tag: number, finishedWork: Fiber) {\n  const updateQueue: FunctionComponentUpdateQueue | null = (finishedWork.updateQueue: any);\n  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;\n  if (lastEffect !== null) {\n    const firstEffect = lastEffect.next;\n    let effect = firstEffect;\n    do {\n      if ((effect.tag & tag) === tag) {\n        const create = effect.create;\n        effect.destroy = create();\n      }\n      effect = effect.next;\n    } while (effect !== firstEffect);\n  }\n}",lang:"js"}),a.a.createElement("ol",null,a.a.createElement("li",null,"\u8c03\u7528\u5173\u7cfb: ",a.a.createElement("code",null,"commitLayoutEffects->commitLayoutEffectOnFiber(commitLifeCycles)->commitHookEffectListMount"),".")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6ce8\u610f\u5728\u8c03\u7528",a.a.createElement("code",null,"commitHookEffectListMount(HookLayout | HookHasEffect, finishedWork)"),"\u65f6, \u53c2\u6570\u662f",a.a.createElement("code",null,"HookLayout | HookHasEffect"),",\u6240\u4ee5\u53ea\u5904\u7406\u7531",a.a.createElement("code",null,"useLayoutEffect()"),"\u521b\u5efa\u7684",a.a.createElement("code",null,"effect"),"."),a.a.createElement("li",null,"\u8c03\u7528",a.a.createElement("code",null,"effect.create()"),"\u4e4b\u540e, \u5c06\u8fd4\u56de\u503c\u8d4b\u503c\u5230",a.a.createElement("code",null,"effect.destroy"),".")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,a.a.createElement("p",null,"\u4e3a",a.a.createElement("code",null,"flushPassiveEffects"),"\u505a\u51c6\u5907"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"commitLifeCycles"),"\u4e2d\u7684",a.a.createElement("code",null,"schedulePassiveEffects(finishedWork)"),", \u5176\u5f62\u53c2",a.a.createElement("code",null,"finishedWork"),"\u5b9e\u9645\u4e0a\u6307\u4ee3\u5f53\u524d\u6b63\u5728\u88ab\u904d\u5386\u7684",a.a.createElement("code",null,"\u6709\u526f\u4f5c\u7528\u7684fiber"))),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"schedulePassiveEffects"),"\u6bd4\u8f83\u7b80\u5355, \u5c31\u662f\u628a\u5e26\u6709",a.a.createElement("code",null,"Passive"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"effect"),"\u7b5b\u9009\u51fa\u6765(\u7531",a.a.createElement("code",null,"useEffect"),"\u521b\u5efa), \u6dfb\u52a0\u5230\u4e00\u4e2a\u5168\u5c40\u6570\u7ec4(",a.a.createElement("code",null,"pendingPassiveHookEffectsUnmount"),"\u548c",a.a.createElement("code",null,"pendingPassiveHookEffectsMount"),")."),a.a.createElement(o["a"],{code:"function schedulePassiveEffects(finishedWork: Fiber) {\n  // 1. \u83b7\u53d6 fiber.updateQueue\n  const updateQueue: FunctionComponentUpdateQueue | null = (finishedWork.updateQueue: any);\n  // 2. \u83b7\u53d6 effect\u73af\u5f62\u961f\u5217\n  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;\n  if (lastEffect !== null) {\n    const firstEffect = lastEffect.next;\n    let effect = firstEffect;\n    do {\n      const { next, tag } = effect;\n      // 3. \u7b5b\u9009\u51fa\u7531useEffect()\u521b\u5efa\u7684`effect`\n      if (\n        (tag & HookPassive) !== NoHookEffect &&\n        (tag & HookHasEffect) !== NoHookEffect\n      ) {\n        // \u628aeffect\u6dfb\u52a0\u5230\u5168\u5c40\u6570\u7ec4, \u7b49\u5f85`flushPassiveEffects`\u5904\u7406\n        enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);\n        enqueuePendingPassiveHookEffectMount(finishedWork, effect);\n      }\n      effect = next;\n    } while (effect !== firstEffect);\n  }\n}\n\nexport function enqueuePendingPassiveHookEffectUnmount(\n  fiber: Fiber,\n  effect: HookEffect,\n): void {\n  // unmount effects \u6570\u7ec4\n  pendingPassiveHookEffectsUnmount.push(effect, fiber);\n}\n\nexport function enqueuePendingPassiveHookEffectMount(\n  fiber: Fiber,\n  effect: HookEffect,\n): void {\n  // mount effects \u6570\u7ec4\n  pendingPassiveHookEffectsMount.push(effect, fiber);\n}",lang:"js"}))))),a.a.createElement("p",null,"\u7efc\u4e0a",a.a.createElement("code",null,"commitMutationEffects"),"\u548c",a.a.createElement("code",null,"commitLayoutEffects"),"2 \u4e2a\u51fd\u6570, \u5e26\u6709",a.a.createElement("code",null,"Layout"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"effect"),"(\u7531",a.a.createElement("code",null,"useLayoutEffect"),"\u521b\u5efa), \u5df2\u7ecf\u5f97\u5230\u4e86\u5b8c\u6574\u7684\u56de\u8c03\u5904\u7406(",a.a.createElement("code",null,"destroy"),"\u548c",a.a.createElement("code",null,"create"),"\u5df2\u7ecf\u88ab\u8c03\u7528)."),a.a.createElement("p",null,"\u5982\u4e0b\u56fe: \u5176\u4e2d\u7b2c\u4e00\u4e2a",a.a.createElement("code",null,"effect"),"\u62e5\u6709",a.a.createElement("code",null,"Layout"),"\u6807\u8bb0, \u6240\u4ee5\u6709",a.a.createElement("code",null,"effect.destroy(); effect.destroy = effect.create()")),a.a.createElement("p",null,a.a.createElement("img",{src:n("/lce"),alt:""})),a.a.createElement("h3",{id:"flushpassiveeffects"},a.a.createElement(l["AnchorLink"],{to:"#flushpassiveeffects","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"flushPassiveEffects"),a.a.createElement("p",null,"\u5728\u4e0a\u6587",a.a.createElement("code",null,"commitBeforeMutationEffects"),"\u9636\u6bb5, \u5f02\u6b65\u8c03\u7528\u4e86",a.a.createElement("code",null,"flushPassiveEffects"),". \u5728\u8fd9\u671f\u95f4\u5e26\u6709",a.a.createElement("code",null,"Passive"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"effect"),"\u5df2\u7ecf\u88ab\u6dfb\u52a0\u5230",a.a.createElement("code",null,"pendingPassiveHookEffectsUnmount"),"\u548c",a.a.createElement("code",null,"pendingPassiveHookEffectsMount"),"\u5168\u5c40\u6570\u7ec4\u4e2d."),a.a.createElement("p",null,"\u63a5\u4e0b\u6765",a.a.createElement("code",null,"flushPassiveEffects"),"\u5c31\u53ef\u4ee5\u8131\u79bb",a.a.createElement("code",null,"fiber\u8282\u70b9"),", \u76f4\u63a5\u8bbf\u95ee",a.a.createElement("code",null,"effects")),a.a.createElement(o["a"],{code:"export function flushPassiveEffects(): boolean {\n  // Returns whether passive effects were flushed.\n  if (pendingPassiveEffectsRenderPriority !== NoSchedulerPriority) {\n    const priorityLevel =\n      pendingPassiveEffectsRenderPriority > NormalSchedulerPriority\n        ? NormalSchedulerPriority\n        : pendingPassiveEffectsRenderPriority;\n    pendingPassiveEffectsRenderPriority = NoSchedulerPriority;\n    // `runWithPriority`\u8bbe\u7f6eSchedule\u4e2d\u7684\u8c03\u5ea6\u4f18\u5148\u7ea7, \u5982\u679c\u5728flushPassiveEffectsImpl\u4e2d\u5904\u7406effect\u65f6\u53c8\u53d1\u8d77\u4e86\u65b0\u7684\u66f4\u65b0, \u90a3\u4e48\u65b0\u7684update.lane\u5c06\u4f1a\u53d7\u5230\u8fd9\u4e2apriorityLevel\u5f71\u54cd.\n    return runWithPriority(priorityLevel, flushPassiveEffectsImpl);\n  }\n  return false;\n}\n\n// ...\u7701\u7565\u65e0\u5173\u4ee3\u7801, \u53ea\u4fdd\u7559Hook\u76f8\u5173\nfunction flushPassiveEffectsImpl() {\n  if (rootWithPendingPassiveEffects === null) {\n    return false;\n  }\n  rootWithPendingPassiveEffects = null;\n  pendingPassiveEffectsLanes = NoLanes;\n\n  // 1. \u6267\u884c effect.destroy()\n  const unmountEffects = pendingPassiveHookEffectsUnmount;\n  pendingPassiveHookEffectsUnmount = [];\n  for (let i = 0; i < unmountEffects.length; i += 2) {\n    const effect = ((unmountEffects[i]: any): HookEffect);\n    const fiber = ((unmountEffects[i + 1]: any): Fiber);\n    const destroy = effect.destroy;\n    effect.destroy = undefined;\n    if (typeof destroy === 'function') {\n      destroy();\n    }\n  }\n\n  // 2. \u6267\u884c\u65b0 effect.create(), \u91cd\u65b0\u8d4b\u503c\u5230 effect.destroy\n  const mountEffects = pendingPassiveHookEffectsMount;\n  pendingPassiveHookEffectsMount = [];\n  for (let i = 0; i < mountEffects.length; i += 2) {\n    const effect = ((mountEffects[i]: any): HookEffect);\n    const fiber = ((mountEffects[i + 1]: any): Fiber);\n    effect.destroy = create();\n  }\n}",lang:"js"}),a.a.createElement("p",null,"\u5176\u6838\u5fc3\u903b\u8f91:"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u904d\u5386",a.a.createElement("code",null,"pendingPassiveHookEffectsUnmount"),"\u4e2d\u7684\u6240\u6709",a.a.createElement("code",null,"effect"),", \u8c03\u7528",a.a.createElement("code",null,"effect.destroy()"),".",a.a.createElement("ul",null,a.a.createElement("li",null,"\u540c\u65f6\u6e05\u7a7a",a.a.createElement("code",null,"pendingPassiveHookEffectsUnmount")))),a.a.createElement("li",null,"\u904d\u5386",a.a.createElement("code",null,"pendingPassiveHookEffectsMount"),"\u4e2d\u7684\u6240\u6709",a.a.createElement("code",null,"effect"),", \u8c03\u7528",a.a.createElement("code",null,"effect.create()"),", \u5e76\u66f4\u65b0",a.a.createElement("code",null,"effect.destroy"),".",a.a.createElement("ul",null,a.a.createElement("li",null,"\u540c\u65f6\u6e05\u7a7a",a.a.createElement("code",null,"pendingPassiveHookEffectsMount"))))),a.a.createElement("p",null,"\u6240\u4ee5, \u5e26\u6709",a.a.createElement("code",null,"Passive"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"effect"),", \u5728",a.a.createElement("code",null,"flushPassiveEffects"),"\u51fd\u6570\u4e2d\u5f97\u5230\u4e86\u5b8c\u6574\u7684\u56de\u8c03\u5904\u7406."),a.a.createElement("p",null,"\u5982\u4e0b\u56fe: \u5176\u4e2d\u62e5\u6709",a.a.createElement("code",null,"Passive"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"effect"),", \u90fd\u4f1a\u6267\u884c",a.a.createElement("code",null,"effect.destroy(); effect.destroy = effect.create()")),a.a.createElement("p",null,a.a.createElement("img",{src:n("ORX0"),alt:""})),a.a.createElement("h2",{id:"\u66f4\u65b0-hook"},a.a.createElement(l["AnchorLink"],{to:"#\u66f4\u65b0-hook","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u65b0 Hook"),a.a.createElement("p",null,"\u5047\u8bbe\u5728\u521d\u6b21\u8c03\u7528\u4e4b\u540e, \u53d1\u8d77\u66f4\u65b0, \u4f1a\u518d\u6b21\u6267\u884c",a.a.createElement("code",null,"function"),", \u8fd9\u65f6",a.a.createElement("code",null,"function"),"\u53ea\u4f7f\u7528\u7684",a.a.createElement("code",null,"useEffect"),", ",a.a.createElement("code",null,"useLayoutEffect"),"\u7b49",a.a.createElement("code",null,"api"),"\u4e5f\u4f1a\u518d\u6b21\u6267\u884c."),a.a.createElement("p",null,"\u5728\u66f4\u65b0\u8fc7\u7a0b\u4e2d",a.a.createElement("code",null,"useEffect"),"\u5bf9\u5e94\u6e90\u7801",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1250-L1266"},"updateEffect"),", ",a.a.createElement("code",null,"useLayoutEffect"),"\u5bf9\u5e94\u6e90\u7801",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1275-L1280"},"updateLayoutEffect"),".\u5b83\u4eec\u5185\u90e8\u90fd\u4f1a\u8c03\u7528",a.a.createElement("code",null,"updateEffectImpl"),", \u4e0e\u521d\u6b21\u521b\u5efa\u65f6\u4e00\u6837, \u53ea\u662f\u53c2\u6570\u4e0d\u540c."),a.a.createElement("h3",{id:"\u66f4\u65b0-effect"},a.a.createElement(l["AnchorLink"],{to:"#\u66f4\u65b0-effect","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u65b0 Effect"),a.a.createElement("p",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1205-L1230"},"updateEffectImpl"),":"),a.a.createElement(o["a"],{code:"function updateEffectImpl(fiberFlags, hookFlags, create, deps): void {\n  // 1. \u83b7\u53d6\u5f53\u524dhook\n  const hook = updateWorkInProgressHook();\n  const nextDeps = deps === undefined ? null : deps;\n  let destroy = undefined;\n  // 2. \u5206\u6790\u4f9d\u8d56\n  if (currentHook !== null) {\n    const prevEffect = currentHook.memoizedState;\n    // \u7ee7\u7eed\u4f7f\u7528\u5148\u524deffect.destroy\n    destroy = prevEffect.destroy;\n    if (nextDeps !== null) {\n      const prevDeps = prevEffect.deps;\n      // \u6bd4\u8f83\u4f9d\u8d56\u662f\u5426\u53d8\u5316\n      if (areHookInputsEqual(nextDeps, prevDeps)) {\n        // 2.1 \u5982\u679c\u4f9d\u8d56\u4e0d\u53d8, \u65b0\u5efaeffect(tag\u4e0d\u542bHookHasEffect)\n        pushEffect(hookFlags, create, destroy, nextDeps);\n        return;\n      }\n    }\n  }\n  // 2.2 \u5982\u679c\u4f9d\u8d56\u6539\u53d8, \u66f4\u6539fiber.flag, \u65b0\u5efaeffect\n  currentlyRenderingFiber.flags |= fiberFlags;\n\n  hook.memoizedState = pushEffect(\n    HookHasEffect | hookFlags,\n    create,\n    destroy,\n    nextDeps,\n  );\n}",lang:"js"}),a.a.createElement("p",null,a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1205-L1230"},"updateEffectImpl"),"\u4e0e",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1193-L1203"},"mountEffectImpl"),"\u903b\u8f91\u6709\u6240\u4e0d\u540c: - \u5982\u679c",a.a.createElement("code",null,"useEffect/useLayoutEffect"),"\u7684\u4f9d\u8d56\u4e0d\u53d8, \u65b0\u5efa\u7684",a.a.createElement("code",null,"effect"),"\u5bf9\u8c61\u4e0d\u5e26",a.a.createElement("code",null,"HasEffect"),"\u6807\u8bb0."),a.a.createElement("p",null,"\u6ce8\u610f: \u65e0\u8bba\u4f9d\u8d56\u662f\u5426\u53d8\u5316, \u90fd\u590d\u7528\u4e4b\u524d\u7684",a.a.createElement("code",null,"effect.destroy"),". \u7b49\u5f85",a.a.createElement("code",null,"commitRoot"),"\u9636\u6bb5\u7684\u8c03\u7528(\u4e0a\u6587\u5df2\u7ecf\u8bf4\u660e)."),a.a.createElement("p",null,"\u5982\u4e0b\u56fe:"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u56fe\u4e2d\u7b2c 1,2 \u4e2a",a.a.createElement("code",null,"hook"),"\u5176",a.a.createElement("code",null,"deps"),"\u6ca1\u53d8, \u6545",a.a.createElement("code",null,"effect.tag"),"\u4e2d\u4e0d\u4f1a\u5305\u542b",a.a.createElement("code",null,"HookHasEffect"),"."),a.a.createElement("li",null,"\u56fe\u4e2d\u7b2c 3 \u4e2a",a.a.createElement("code",null,"hook"),"\u5176",a.a.createElement("code",null,"deps"),"\u6539\u53d8, \u6545",a.a.createElement("code",null,"effect.tag"),"\u4e2d\u7ee7\u7eed\u542b\u6709",a.a.createElement("code",null,"HookHasEffect"),".")),a.a.createElement("p",null,a.a.createElement("img",{src:n("sMf/"),alt:""})),a.a.createElement("h3",{id:"\u5904\u7406-effect-\u56de\u8c03-1"},a.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-effect-\u56de\u8c03-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 Effect \u56de\u8c03"),a.a.createElement("p",null,"\u65b0\u7684",a.a.createElement("code",null,"hook"),"\u4ee5\u53ca\u65b0\u7684",a.a.createElement("code",null,"effect"),"\u521b\u5efa\u5b8c\u6210\u4e4b\u540e, \u4f59\u4e0b\u903b\u8f91\u4e0e\u521d\u6b21\u6e32\u67d3\u5b8c\u5168\u4e00\u81f4. \u5904\u7406 Effect \u56de\u8c03\u65f6\u4e5f\u4f1a\u6839\u636e",a.a.createElement("code",null,"effect.tag"),"\u8fdb\u884c\u5224\u65ad: \u53ea\u6709",a.a.createElement("code",null,"effect.tag"),"\u5305\u542b",a.a.createElement("code",null,"HookHasEffect"),"\u65f6\u624d\u4f1a\u8c03\u7528",a.a.createElement("code",null,"effect.destroy"),"\u548c",a.a.createElement("code",null,"effect.create()")),a.a.createElement("h2",{id:"\u7ec4\u4ef6\u9500\u6bc1"},a.a.createElement(l["AnchorLink"],{to:"#\u7ec4\u4ef6\u9500\u6bc1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u9500\u6bc1"),a.a.createElement("p",null,"\u5f53",a.a.createElement("code",null,"function"),"\u7ec4\u4ef6\u88ab\u9500\u6bc1\u65f6, ",a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u5fc5\u7136\u4f1a\u88ab\u6253\u4e0a",a.a.createElement("code",null,"Deletion"),"\u6807\u8bb0, \u5373",a.a.createElement("code",null,"fiber.flags |= Deletion"),". \u5e26\u6709",a.a.createElement("code",null,"Deletion"),"\u6807\u8bb0\u7684",a.a.createElement("code",null,"fiber"),"\u5728",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2302-L2383"},"commitMutationEffects"),"\u88ab\u5904\u7406:"),a.a.createElement(o["a"],{code:"// ...\u7701\u7565\u65e0\u5173\u4ee3\u7801\nfunction commitMutationEffects(\n  root: FiberRoot,\n  renderPriorityLevel: ReactPriorityLevel,\n) {\n  while (nextEffect !== null) {\n    const primaryFlags = flags & (Placement | Update | Deletion | Hydrating);\n    switch (primaryFlags) {\n      case Deletion: {\n        commitDeletion(root, nextEffect, renderPriorityLevel);\n        break;\n      }\n    }\n  }\n}",lang:"js"}),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"commitDeletion"),"\u51fd\u6570\u4e4b\u540e, \u7ee7\u7eed\u8c03\u7528",a.a.createElement("code",null,"unmountHostComponents->commitUnmount"),", \u5728",a.a.createElement(l["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L866-L963"},"commitUnmount"),"\u4e2d, \u6267\u884c",a.a.createElement("code",null,"effect.destroy()"),", \u7ed3\u675f\u6574\u4e2a\u95ed\u73af."),a.a.createElement("h2",{id:"\u603b\u7ed3"},a.a.createElement(l["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),a.a.createElement("p",null,"\u672c\u8282\u5206\u6790\u4e86",a.a.createElement("code",null,"\u526f\u4f5c\u7528Hook"),"\u4ece\u521b\u5efa\u5230\u9500\u6bc1\u7684\u5168\u90e8\u8fc7\u7a0b, \u5728",a.a.createElement("code",null,"react"),"\u5185\u90e8, \u4f9d\u9760",a.a.createElement("code",null,"fiber.flags"),"\u548c",a.a.createElement("code",null,"effect.tag"),"\u5b9e\u73b0\u4e86\u5bf9",a.a.createElement("code",null,"effect"),"\u7684\u7cbe\u51c6\u8bc6\u522b. \u5728",a.a.createElement("code",null,"commitRoot"),"\u9636\u6bb5, \u5bf9\u4e0d\u540c\u7c7b\u578b\u7684",a.a.createElement("code",null,"effect"),"\u8fdb\u884c\u5904\u7406, \u5148\u540e\u8c03\u7528",a.a.createElement("code",null,"effect.destroy()"),"\u548c",a.a.createElement("code",null,"effect.create()"),".")))}));t["default"]=e=>{var t=a.a.useContext(l["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(f,{demos:n})}},"sMf/":function(e,t,n){e.exports=n.p+"static/renderwithhooks-update.6d314320.png"}}]);