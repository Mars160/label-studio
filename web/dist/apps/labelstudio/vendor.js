"use strict";
(self["webpackChunklabelstudio"] = self["webpackChunklabelstudio"] || []).push([["vendor"],{

/***/ "../../node_modules/mobx-react-lite/es/ObserverComponent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ ObserverComponent)
/* harmony export */ });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return (0,_useObserver__WEBPACK_IMPORTED_MODULE_0__.useObserver)(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/assertEnvironment.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__.spy) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* reexport safe */ _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__.Observer),
/* harmony export */   isObserverBatched: () => (/* reexport safe */ _observerBatching__WEBPACK_IMPORTED_MODULE_2__.isObserverBatched),
/* harmony export */   isUsingStaticRendering: () => (/* reexport safe */ _staticRendering__WEBPACK_IMPORTED_MODULE_3__.isUsingStaticRendering),
/* harmony export */   observer: () => (/* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_4__.observer),
/* harmony export */   observerBatching: () => (/* reexport safe */ _observerBatching__WEBPACK_IMPORTED_MODULE_2__.observerBatching),
/* harmony export */   useAsObservableSource: () => (/* reexport safe */ _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__.useAsObservableSource),
/* harmony export */   useForceUpdate: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.useForceUpdate),
/* harmony export */   useLocalStore: () => (/* reexport safe */ _useLocalStore__WEBPACK_IMPORTED_MODULE_9__.useLocalStore),
/* harmony export */   useObserver: () => (/* reexport safe */ _useObserver__WEBPACK_IMPORTED_MODULE_5__.useObserver),
/* harmony export */   useQueuedForceUpdate: () => (/* reexport safe */ _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__.useQueuedForceUpdate),
/* harmony export */   useQueuedForceUpdateBlock: () => (/* reexport safe */ _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__.useQueuedForceUpdateBlock),
/* harmony export */   useStaticRendering: () => (/* reexport safe */ _staticRendering__WEBPACK_IMPORTED_MODULE_3__.useStaticRendering)
/* harmony export */ });
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/mobx-react-lite/es/observer.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useObserver.js");
/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");



(0,_observerBatching__WEBPACK_IMPORTED_MODULE_2__.observerBatching)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);











/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/observer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observer: () => (/* binding */ observer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return (0,_useObserver__WEBPACK_IMPORTED_MODULE_1__.useObserver)(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(wrappedComponent));
    }
    else {
        memoComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/observerBatching.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultNoopBatch: () => (/* binding */ defaultNoopBatch),
/* harmony export */   isObserverBatched: () => (/* binding */ isObserverBatched),
/* harmony export */   observerBatching: () => (/* binding */ observerBatching)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSymbol)("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.configure)({ reactionScheduler: reactionScheduler });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)()[observerBatchingConfiguredSymbol]; };


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/printDebugValue.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printDebugValue: () => (/* binding */ printDebugValue)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");

function printDebugValue(v) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.getDependencyTree)(v);
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS: () => (/* binding */ CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS),
/* harmony export */   CLEANUP_TIMER_LOOP_MILLIS: () => (/* binding */ CLEANUP_TIMER_LOOP_MILLIS),
/* harmony export */   createTrackingData: () => (/* binding */ createTrackingData),
/* harmony export */   forceCleanupTimerToRunNowForTests: () => (/* binding */ forceCleanupTimerToRunNowForTests),
/* harmony export */   recordReactionAsCommitted: () => (/* binding */ recordReactionAsCommitted),
/* harmony export */   resetCleanupScheduleForTests: () => (/* binding */ resetCleanupScheduleForTests),
/* harmony export */   scheduleCleanupOfReactionIfLeaked: () => (/* binding */ scheduleCleanupOfReactionIfLeaked)
/* harmony export */ });
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/staticRendering.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUsingStaticRendering: () => (/* binding */ isUsingStaticRendering),
/* harmony export */   useStaticRendering: () => (/* binding */ useStaticRendering)
/* harmony export */ });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/useAsObservableSource.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAsObservableSource: () => (/* binding */ useAsObservableSource),
/* harmony export */   useAsObservableSourceInternal: () => (/* binding */ useAsObservableSourceInternal)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if ( true && usedByLocalStore) {
        var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(current), 1), initialSource = _a[0];
        if ((initialSource !== undefined && current === undefined) ||
            (initialSource === undefined && current !== undefined)) {
            throw new Error("make sure you never pass `undefined` to " + culprit);
        }
    }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if ( true && !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(current)) {
        throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
    }
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)(current, {}, { deep: false }); }), 1), res = _b[0];
    if ( true &&
        Object.keys(res).length !== Object.keys(current).length) {
        throw new Error("the shape of objects passed to " + culprit + " should be stable");
    }
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/useLocalStore.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocalStore: () => (/* binding */ useLocalStore)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
    var source = (0,_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__.useAsObservableSourceInternal)(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default().useState(function () {
        var local = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)(initializer(source));
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(local)) {
            (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.transaction)(function () { return fn.apply(context, args); });
    };
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/useObserver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useObserver: () => (/* binding */ useObserver)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_6__.isUsingStaticRendering)()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_4__.useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = (0,_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_5__.useQueuedForceUpdate)(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__.Reaction(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = (0,_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__.createTrackingData)(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        (0,_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__.scheduleCleanupOfReactionIfLeaked)(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__.printDebugValue);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
        // Called on first mount only
        (0,_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__.recordReactionAsCommitted)(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__.Reaction(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return (0,_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_5__.useQueuedForceUpdateBlock)(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useQueuedForceUpdate: () => (/* binding */ useQueuedForceUpdate),
/* harmony export */   useQueuedForceUpdateBlock: () => (/* binding */ useQueuedForceUpdateBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobal: () => (/* binding */ getGlobal),
/* harmony export */   getSymbol: () => (/* binding */ getSymbol),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   useForceUpdate: () => (/* binding */ useForceUpdate),
/* harmony export */   useUnmount: () => (/* binding */ useUnmount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2), setTick = _a[1];
    var update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}


/***/ }),

/***/ "../../node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react-dom/index.js");



/***/ }),

/***/ "../../node_modules/mobx-react/dist/mobxreact.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobXProviderContext: () => (/* binding */ MobXProviderContext),
/* harmony export */   Observer: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.Observer),
/* harmony export */   PropTypes: () => (/* binding */ PropTypes),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   disposeOnUnmount: () => (/* binding */ disposeOnUnmount),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isUsingStaticRendering: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering),
/* harmony export */   observer: () => (/* binding */ observer),
/* harmony export */   observerBatching: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observerBatching),
/* harmony export */   useAsObservableSource: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.useAsObservableSource),
/* harmony export */   useLocalStore: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.useLocalStore),
/* harmony export */   useObserver: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.useObserver),
/* harmony export */   useStaticRendering: () => (/* reexport safe */ mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.useStaticRendering)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/mobx-react-lite/es/index.js");





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__.$mobx || "$mobx";
var mobxObserverProperty =
/*#__PURE__*/
newSymbol("isMobXReactObserver");
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__.PureComponent) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__.Reaction(initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = (0,mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateChanges)(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx__WEBPACK_IMPORTED_MODULE_0__.createAtom)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsEnd) {
        prevReadState = (0,mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsStart)(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsEnd) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateReadsEnd)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__.forwardRef === "function" &&
/*#__PURE__*/
(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__.memo === "function" &&
/*#__PURE__*/
(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ObserverForwardRef() {
      var args = arguments;
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.Observer, null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__.Component, component)) {
    return (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === (react__WEBPACK_IMPORTED_MODULE_1___default().Component) || c === (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) || c2 === (react__WEBPACK_IMPORTED_MODULE_1___default().Component) || c2 === (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) || c3 === (react__WEBPACK_IMPORTED_MODULE_1___default().Component) || c3 === (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent))) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.untracked)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.untracked)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableArray;
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableObject;
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableMap;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.untracked)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__.Component) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__.observable) throw new Error("mobx-react requires mobx to be available");




/***/ }),

/***/ "../../node_modules/mobx-state-tree/dist/mobx-state-tree.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDisposer: () => (/* binding */ addDisposer),
/* harmony export */   addMiddleware: () => (/* binding */ addMiddleware),
/* harmony export */   applyAction: () => (/* binding */ applyAction),
/* harmony export */   applyPatch: () => (/* binding */ applyPatch),
/* harmony export */   applySnapshot: () => (/* binding */ applySnapshot),
/* harmony export */   cast: () => (/* binding */ cast),
/* harmony export */   castFlowReturn: () => (/* binding */ castFlowReturn),
/* harmony export */   castToReferenceSnapshot: () => (/* binding */ castToReferenceSnapshot),
/* harmony export */   castToSnapshot: () => (/* binding */ castToSnapshot),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   createActionTrackingMiddleware: () => (/* binding */ createActionTrackingMiddleware),
/* harmony export */   createActionTrackingMiddleware2: () => (/* binding */ createActionTrackingMiddleware2),
/* harmony export */   decorate: () => (/* binding */ decorate),
/* harmony export */   destroy: () => (/* binding */ destroy),
/* harmony export */   detach: () => (/* binding */ detach),
/* harmony export */   escapeJsonPath: () => (/* binding */ escapeJsonPath),
/* harmony export */   flow: () => (/* binding */ flow),
/* harmony export */   getChildType: () => (/* binding */ getChildType),
/* harmony export */   getEnv: () => (/* binding */ getEnv),
/* harmony export */   getIdentifier: () => (/* binding */ getIdentifier),
/* harmony export */   getLivelinessChecking: () => (/* binding */ getLivelinessChecking),
/* harmony export */   getMembers: () => (/* binding */ getMembers),
/* harmony export */   getNodeId: () => (/* binding */ getNodeId),
/* harmony export */   getParent: () => (/* binding */ getParent),
/* harmony export */   getParentOfType: () => (/* binding */ getParentOfType),
/* harmony export */   getPath: () => (/* binding */ getPath),
/* harmony export */   getPathParts: () => (/* binding */ getPathParts),
/* harmony export */   getPropertyMembers: () => (/* binding */ getPropertyMembers),
/* harmony export */   getRelativePath: () => (/* binding */ getRelativePath),
/* harmony export */   getRoot: () => (/* binding */ getRoot),
/* harmony export */   getRunningActionContext: () => (/* binding */ getRunningActionContext),
/* harmony export */   getSnapshot: () => (/* binding */ getSnapshot),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   hasParent: () => (/* binding */ hasParent),
/* harmony export */   hasParentOfType: () => (/* binding */ hasParentOfType),
/* harmony export */   isActionContextChildOf: () => (/* binding */ isActionContextChildOf),
/* harmony export */   isActionContextThisOrChildOf: () => (/* binding */ isActionContextThisOrChildOf),
/* harmony export */   isAlive: () => (/* binding */ isAlive),
/* harmony export */   isArrayType: () => (/* binding */ isArrayType),
/* harmony export */   isFrozenType: () => (/* binding */ isFrozenType),
/* harmony export */   isIdentifierType: () => (/* binding */ isIdentifierType),
/* harmony export */   isLateType: () => (/* binding */ isLateType),
/* harmony export */   isLiteralType: () => (/* binding */ isLiteralType),
/* harmony export */   isMapType: () => (/* binding */ isMapType),
/* harmony export */   isModelType: () => (/* binding */ isModelType),
/* harmony export */   isOptionalType: () => (/* binding */ isOptionalType),
/* harmony export */   isPrimitiveType: () => (/* binding */ isPrimitiveType),
/* harmony export */   isProtected: () => (/* binding */ isProtected),
/* harmony export */   isReferenceType: () => (/* binding */ isReferenceType),
/* harmony export */   isRefinementType: () => (/* binding */ isRefinementType),
/* harmony export */   isRoot: () => (/* binding */ isRoot),
/* harmony export */   isStateTreeNode: () => (/* binding */ isStateTreeNode),
/* harmony export */   isType: () => (/* binding */ isType),
/* harmony export */   isUnionType: () => (/* binding */ isUnionType),
/* harmony export */   isValidReference: () => (/* binding */ isValidReference),
/* harmony export */   joinJsonPath: () => (/* binding */ joinJsonPath),
/* harmony export */   onAction: () => (/* binding */ onAction),
/* harmony export */   onPatch: () => (/* binding */ onPatch),
/* harmony export */   onSnapshot: () => (/* binding */ onSnapshot),
/* harmony export */   process: () => (/* binding */ process$1),
/* harmony export */   protect: () => (/* binding */ protect),
/* harmony export */   recordActions: () => (/* binding */ recordActions),
/* harmony export */   recordPatches: () => (/* binding */ recordPatches),
/* harmony export */   resolveIdentifier: () => (/* binding */ resolveIdentifier),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   setLivelinessChecking: () => (/* binding */ setLivelinessChecking),
/* harmony export */   setLivelynessChecking: () => (/* binding */ setLivelynessChecking),
/* harmony export */   splitJsonPath: () => (/* binding */ splitJsonPath),
/* harmony export */   toGenerator: () => (/* binding */ toGenerator),
/* harmony export */   toGeneratorFunction: () => (/* binding */ toGeneratorFunction),
/* harmony export */   tryReference: () => (/* binding */ tryReference),
/* harmony export */   tryResolve: () => (/* binding */ tryResolve),
/* harmony export */   typecheck: () => (/* binding */ typecheck),
/* harmony export */   types: () => (/* binding */ types),
/* harmony export */   unescapeJsonPath: () => (/* binding */ unescapeJsonPath),
/* harmony export */   unprotect: () => (/* binding */ unprotect),
/* harmony export */   walk: () => (/* binding */ walk)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/mobx/lib/mobx.module.js");


var livelinessChecking = "warn";
/**
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelinessChecking(mode) {
    livelinessChecking = mode;
}
/**
 * Returns the current liveliness checking mode.
 *
 * @returns `"warn"`, `"error"` or `"ignore"`
 */
function getLivelinessChecking() {
    return livelinessChecking;
}
/**
 * @deprecated use setLivelinessChecking instead
 * @hidden
 *
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelynessChecking(mode) {
    setLivelinessChecking(mode);
}

/**
 * @hidden
 */
var Hook;
(function (Hook) {
    Hook["afterCreate"] = "afterCreate";
    Hook["afterAttach"] = "afterAttach";
    Hook["afterCreationFinalization"] = "afterCreationFinalization";
    Hook["beforeDetach"] = "beforeDetach";
    Hook["beforeDestroy"] = "beforeDestroy";
})(Hook || (Hook = {}));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * Returns the _actual_ type of the given tree node. (Or throws)
 *
 * @param object
 * @returns
 */
function getType(object) {
    assertIsStateTreeNode(object, 1);
    return getStateTreeNode(object).type;
}
/**
 * Returns the _declared_ type of the given sub property of an object, array or map.
 * In the case of arrays and maps the property name is optional and will be ignored.
 *
 * Example:
 * ```ts
 * const Box = types.model({ x: 0, y: 0 })
 * const box = Box.create()
 *
 * console.log(getChildType(box, "x").name) // 'number'
 * ```
 *
 * @param object
 * @param propertyName
 * @returns
 */
function getChildType(object, propertyName) {
    assertIsStateTreeNode(object, 1);
    return getStateTreeNode(object).getChildType(propertyName);
}
/**
 * Registers a function that will be invoked for each mutation that is applied to the provided model instance, or to any of its children.
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details. onPatch events are emitted immediately and will not await the end of a transaction.
 * Patches can be used to deep observe a model tree.
 *
 * @param target the model instance from which to receive patches
 * @param callback the callback that is invoked for each patch. The reversePatch is a patch that would actually undo the emitted patch
 * @returns function to remove the listener
 */
function onPatch(target, callback) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(callback, 2);
    return getStateTreeNode(target).onPatch(callback);
}
/**
 * Registers a function that is invoked whenever a new snapshot for the given model instance is available.
 * The listener will only be fire at the end of the current MobX (trans)action.
 * See [snapshots](https://github.com/mobxjs/mobx-state-tree#snapshots) for more details.
 *
 * @param target
 * @param callback
 * @returns
 */
function onSnapshot(target, callback) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(callback, 2);
    return getStateTreeNode(target).onSnapshot(callback);
}
/**
 * Applies a JSON-patch to the given model instance or bails out if the patch couldn't be applied
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details.
 *
 * Can apply a single past, or an array of patches.
 *
 * @param target
 * @param patch
 * @returns
 */
function applyPatch(target, patch) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertArg(patch, function (p) { return typeof p === "object"; }, "object or array", 2);
    getStateTreeNode(target).applyPatches(asArray(patch));
}
/**
 * Small abstraction around `onPatch` and `applyPatch`, attaches a patch listener to a tree and records all the patches.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IPatchRecorder {
 *      // the recorded patches
 *      patches: IJsonPatch[]
 *      // the inverse of the recorded patches
 *      inversePatches: IJsonPatch[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording patches
 *      stop(): void
 *      // resume recording patches
 *      resume(): void
 *      // apply all the recorded patches on the given target (the original subject if omitted)
 *      replay(target?: IAnyStateTreeNode): void
 *      // reverse apply the recorded patches on the given target  (the original subject if omitted)
 *      // stops the recorder if not already stopped
 *      undo(): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain patches.
 *
 * @param subject
 * @param filter
 * @returns
 */
function recordPatches(subject, filter) {
    // check all arguments
    assertIsStateTreeNode(subject, 1);
    var data = {
        patches: [],
        reversedInversePatches: []
    };
    // we will generate the immutable copy of patches on demand for public consumption
    var publicData = {};
    var disposer;
    var recorder = {
        get recording() {
            return !!disposer;
        },
        get patches() {
            if (!publicData.patches) {
                publicData.patches = data.patches.slice();
            }
            return publicData.patches;
        },
        get reversedInversePatches() {
            if (!publicData.reversedInversePatches) {
                publicData.reversedInversePatches = data.reversedInversePatches.slice();
            }
            return publicData.reversedInversePatches;
        },
        get inversePatches() {
            if (!publicData.inversePatches) {
                publicData.inversePatches = data.reversedInversePatches.slice().reverse();
            }
            return publicData.inversePatches;
        },
        stop: function () {
            if (disposer) {
                disposer();
                disposer = undefined;
            }
        },
        resume: function () {
            if (disposer)
                return;
            disposer = onPatch(subject, function (patch, inversePatch) {
                // skip patches that are asked to be filtered if there's a filter in place
                if (filter && !filter(patch, inversePatch, getRunningActionContext())) {
                    return;
                }
                data.patches.push(patch);
                data.reversedInversePatches.unshift(inversePatch);
                // mark immutable public patches as dirty
                publicData.patches = undefined;
                publicData.inversePatches = undefined;
                publicData.reversedInversePatches = undefined;
            });
        },
        replay: function (target) {
            applyPatch(target || subject, data.patches);
        },
        undo: function (target) {
            applyPatch(target || subject, data.reversedInversePatches);
        }
    };
    recorder.resume();
    return recorder;
}
/**
 * The inverse of `unprotect`.
 *
 * @param target
 */
function protect(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        throw fail$1("`protect` can only be invoked on root nodes");
    node.isProtectionEnabled = true;
}
/**
 * By default it is not allowed to directly modify a model. Models can only be modified through actions.
 * However, in some cases you don't care about the advantages (like replayability, traceability, etc) this yields.
 * For example because you are building a PoC or don't have any middleware attached to your tree.
 *
 * In that case you can disable this protection by calling `unprotect` on the root of your tree.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *     done: false
 * }).actions(self => ({
 *     toggle() {
 *         self.done = !self.done
 *     }
 * }))
 *
 * const todo = Todo.create()
 * todo.done = true // throws!
 * todo.toggle() // OK
 * unprotect(todo)
 * todo.done = false // OK
 * ```
 */
function unprotect(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        throw fail$1("`unprotect` can only be invoked on root nodes");
    node.isProtectionEnabled = false;
}
/**
 * Returns true if the object is in protected mode, @see protect
 */
function isProtected(target) {
    return getStateTreeNode(target).isProtected;
}
/**
 * Applies a snapshot to a given model instances. Patch and snapshot listeners will be invoked as usual.
 *
 * @param target
 * @param snapshot
 * @returns
 */
function applySnapshot(target, snapshot) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).applySnapshot(snapshot);
}
/**
 * Calculates a snapshot from the given model instance. The snapshot will always reflect the latest state but use
 * structural sharing where possible. Doesn't require MobX transactions to be completed.
 *
 * @param target
 * @param applyPostProcess If true (the default) then postProcessSnapshot gets applied.
 * @returns
 */
function getSnapshot(target, applyPostProcess) {
    if (applyPostProcess === void 0) { applyPostProcess = true; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (applyPostProcess)
        return node.snapshot;
    return freeze(node.type.getSnapshot(node, false));
}
/**
 * Given a model instance, returns `true` if the object has a parent, that is, is part of another object, map or array.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
function hasParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsNumber(depth, 2, 0);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--depth === 0)
            return true;
        parent = parent.parent;
    }
    return false;
}
/**
 * Returns the immediate parent of this object, or throws.
 *
 * Note that the immediate parent can be either an object, map or array, and
 * doesn't necessarily refer to the parent model.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
function getParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsNumber(depth, 2, 0);
    var d = depth;
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--d === 0)
            return parent.storedValue;
        parent = parent.parent;
    }
    throw fail$1("Failed to find the parent of " + getStateTreeNode(target) + " at depth " + depth);
}
/**
 * Given a model instance, returns `true` if the object has a parent of given type, that is, is part of another object, map or array
 *
 * @param target
 * @param type
 * @returns
 */
function hasParentOfType(target, type) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsType(type, 2);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (type.is(parent.storedValue))
            return true;
        parent = parent.parent;
    }
    return false;
}
/**
 * Returns the target's parent of a given type, or throws.
 *
 * @param target
 * @param type
 * @returns
 */
function getParentOfType(target, type) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsType(type, 2);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (type.is(parent.storedValue))
            return parent.storedValue;
        parent = parent.parent;
    }
    throw fail$1("Failed to find the parent of " + getStateTreeNode(target) + " of a given type");
}
/**
 * Given an object in a model tree, returns the root object of that tree.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @returns
 */
function getRoot(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).root.storedValue;
}
/**
 * Returns the path of the given object in the model tree
 *
 * @param target
 * @returns
 */
function getPath(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).path;
}
/**
 * Returns the path of the given object as unescaped string array.
 *
 * @param target
 * @returns
 */
function getPathParts(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return splitJsonPath(getStateTreeNode(target).path);
}
/**
 * Returns true if the given object is the root of a model tree.
 *
 * @param target
 * @returns
 */
function isRoot(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).isRoot;
}
/**
 * Resolves a path relatively to a given object.
 * Returns undefined if no value can be found.
 *
 * @param target
 * @param path escaped json path
 * @returns
 */
function resolvePath(target, path) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsString(path, 2);
    var node = resolveNodeByPath(getStateTreeNode(target), path);
    return node ? node.value : undefined;
}
/**
 * Resolves a model instance given a root target, the type and the identifier you are searching for.
 * Returns undefined if no value can be found.
 *
 * @param type
 * @param target
 * @param identifier
 * @returns
 */
function resolveIdentifier(type, target, identifier) {
    // check all arguments
    assertIsType(type, 1);
    assertIsStateTreeNode(target, 2);
    assertIsValidIdentifier(identifier, 3);
    var node = getStateTreeNode(target).root.identifierCache.resolve(type, normalizeIdentifier(identifier));
    return node ? node.value : undefined;
}
/**
 * Returns the identifier of the target node.
 * This is the *string normalized* identifier, which might not match the type of the identifier attribute
 *
 * @param target
 * @returns
 */
function getIdentifier(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).identifier;
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns such reference if it the check passes,
 * else it returns undefined.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function tryReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) { checkIfAlive = true; }
    try {
        var node = getter();
        if (node === undefined || node === null) {
            return undefined;
        }
        else if (isStateTreeNode(node)) {
            if (!checkIfAlive) {
                return node;
            }
            else {
                return isAlive(node) ? node : undefined;
            }
        }
        else {
            throw fail$1("The reference to be checked is not one of node, null or undefined");
        }
    }
    catch (e) {
        if (e instanceof InvalidReferenceError) {
            return undefined;
        }
        throw e;
    }
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns if the check passes or not.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function isValidReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) { checkIfAlive = true; }
    try {
        var node = getter();
        if (node === undefined || node === null) {
            return false;
        }
        else if (isStateTreeNode(node)) {
            return checkIfAlive ? isAlive(node) : true;
        }
        else {
            throw fail$1("The reference to be checked is not one of node, null or undefined");
        }
    }
    catch (e) {
        if (e instanceof InvalidReferenceError) {
            return false;
        }
        throw e;
    }
}
/**
 * Try to resolve a given path relative to a given node.
 *
 * @param target
 * @param path
 * @returns
 */
function tryResolve(target, path) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsString(path, 2);
    var node = resolveNodeByPath(getStateTreeNode(target), path, false);
    if (node === undefined)
        return undefined;
    try {
        return node.value;
    }
    catch (e) {
        // For what ever reason not resolvable (e.g. totally not existing path, or value that cannot be fetched)
        // see test / issue: 'try resolve doesn't work #686'
        return undefined;
    }
}
/**
 * Given two state tree nodes that are part of the same tree,
 * returns the shortest jsonpath needed to navigate from the one to the other
 *
 * @param base
 * @param target
 * @returns
 */
function getRelativePath(base, target) {
    // check all arguments
    assertIsStateTreeNode(base, 1);
    assertIsStateTreeNode(target, 2);
    return getRelativePathBetweenNodes(getStateTreeNode(base), getStateTreeNode(target));
}
/**
 * Returns a deep copy of the given state tree node as new tree.
 * Short hand for `snapshot(x) = getType(x).create(getSnapshot(x))`
 *
 * _Tip: clone will create a literal copy, including the same identifiers. To modify identifiers etc during cloning, don't use clone but take a snapshot of the tree, modify it, and create new instance_
 *
 * @param source
 * @param keepEnvironment indicates whether the clone should inherit the same environment (`true`, the default), or not have an environment (`false`). If an object is passed in as second argument, that will act as the environment for the cloned tree.
 * @returns
 */
function clone(source, keepEnvironment) {
    if (keepEnvironment === void 0) { keepEnvironment = true; }
    // check all arguments
    assertIsStateTreeNode(source, 1);
    var node = getStateTreeNode(source);
    return node.type.create(node.snapshot, keepEnvironment === true
        ? node.root.environment
        : keepEnvironment === false
            ? undefined
            : keepEnvironment); // it's an object or something else
}
/**
 * Removes a model element from the state tree, and let it live on as a new state tree
 */
function detach(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    getStateTreeNode(target).detach();
    return target;
}
/**
 * Removes a model element from the state tree, and mark it as end-of-life; the element should not be used anymore
 */
function destroy(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (node.isRoot)
        node.die();
    else
        node.parent.removeChild(node.subpath);
}
/**
 * Returns true if the given state tree node is not killed yet.
 * This means that the node is still a part of a tree, and that `destroy`
 * has not been called. If a node is not alive anymore, the only thing one can do with it
 * is requesting it's last path and snapshot
 *
 * @param target
 * @returns
 */
function isAlive(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).observableIsAlive;
}
/**
 * Use this utility to register a function that should be called whenever the
 * targeted state tree node is destroyed. This is a useful alternative to managing
 * cleanup methods yourself using the `beforeDestroy` hook.
 *
 * This methods returns the same disposer that was passed as argument.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string
 * }).actions(self => ({
 *   afterCreate() {
 *     const autoSaveDisposer = reaction(
 *       () => getSnapshot(self),
 *       snapshot => sendSnapshotToServerSomehow(snapshot)
 *     )
 *     // stop sending updates to server if this
 *     // instance is destroyed
 *     addDisposer(self, autoSaveDisposer)
 *   }
 * }))
 * ```
 *
 * @param target
 * @param disposer
 * @returns The same disposer that was passed as argument
 */
function addDisposer(target, disposer) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(disposer, 2);
    var node = getStateTreeNode(target);
    node.addDisposer(disposer);
    return disposer;
}
/**
 * Returns the environment of the current state tree. For more info on environments,
 * see [Dependency injection](https://github.com/mobxjs/mobx-state-tree#dependency-injection)
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired
 *
 * Returns an empty environment if the tree wasn't initialized with an environment
 *
 * @param target
 * @returns
 */
function getEnv(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    var env = node.root.environment;
    if (!env)
        return EMPTY_OBJECT;
    return env;
}
/**
 * Performs a depth first walk through a tree.
 */
function walk(target, processor) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(processor, 2);
    var node = getStateTreeNode(target);
    // tslint:disable-next-line:no_unused-variable
    node.getChildren().forEach(function (child) {
        if (isStateTreeNode(child.storedValue))
            walk(child.storedValue, processor);
    });
    processor(node.storedValue);
}
/**
 * Returns a reflection of the model type properties and name for either a model type or model node.
 *
 * @param typeOrNode
 * @returns
 */
function getPropertyMembers(typeOrNode) {
    var type;
    if (isStateTreeNode(typeOrNode)) {
        type = getType(typeOrNode);
    }
    else {
        type = typeOrNode;
    }
    assertArg(type, function (t) { return isModelType(t); }, "model type or model instance", 1);
    return {
        name: type.name,
        properties: __assign({}, type.properties)
    };
}
/**
 * Returns a reflection of the model node, including name, properties, views, volatile and actions.
 *
 * @param target
 * @returns
 */
function getMembers(target) {
    var type = getStateTreeNode(target).type;
    var reflected = __assign(__assign({}, getPropertyMembers(type)), { actions: [], volatile: [], views: [] });
    var props = Object.getOwnPropertyNames(target);
    props.forEach(function (key) {
        if (key in reflected.properties)
            return;
        var descriptor = Object.getOwnPropertyDescriptor(target, key);
        if (descriptor.get) {
            if ((0,mobx__WEBPACK_IMPORTED_MODULE_0__.isComputedProp)(target, key))
                reflected.views.push(key);
            else
                reflected.volatile.push(key);
            return;
        }
        if (descriptor.value._isMSTAction === true)
            reflected.actions.push(key);
        else if ((0,mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableProp)(target, key))
            reflected.volatile.push(key);
        else
            reflected.views.push(key);
    });
    return reflected;
}
/**
 * Casts a node snapshot or instance type to an instance type so it can be assigned to a type instance.
 * Note that this is just a cast for the type system, this is, it won't actually convert a snapshot to an instance,
 * but just fool typescript into thinking so.
 * Either way, casting when outside an assignation operation won't compile.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   innerModel: ModelA
 * }).actions(self => ({
 *   someAction() {
 *     // this will allow the compiler to assign a snapshot to the property
 *     self.innerModel = cast({ a: 5 })
 *   }
 * }))
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an instance
 */
function cast(snapshotOrInstance) {
    return snapshotOrInstance;
}
/**
 * Casts a node instance type to an snapshot type so it can be assigned to a type snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   innerModel: ModelA
 * })
 *
 * const a = ModelA.create({ n: 5 });
 * // this will allow the compiler to use a model as if it were a snapshot
 * const b = ModelB.create({ innerModel: castToSnapshot(a)})
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an input (creation) snapshot
 */
function castToSnapshot(snapshotOrInstance) {
    return snapshotOrInstance;
}
/**
 * Casts a node instance type to a reference snapshot type so it can be assigned to a refernence snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a refererence snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   id: types.identifier,
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   refA: types.reference(ModelA)
 * })
 *
 * const a = ModelA.create({ id: 'someId', n: 5 });
 * // this will allow the compiler to use a model as if it were a reference snapshot
 * const b = ModelB.create({ refA: castToReference(a)})
 * ```
 *
 * @param instance Instance
 * @returns The same object casted as an reference snapshot (string or number)
 */
function castToReferenceSnapshot(instance) {
    return instance;
}
/**
 * Returns the unique node id (not to be confused with the instance identifier) for a
 * given instance.
 * This id is a number that is unique for each instance.
 *
 * @export
 * @param target
 * @returns
 */
function getNodeId(target) {
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).nodeId;
}

/**
 * @internal
 * @hidden
 */
var BaseNode = /** @class */ (function () {
    function BaseNode(type, parent, subpath, environment) {
        this.type = type;
        this.environment = environment;
        this._state = NodeLifeCycle.INITIALIZING;
        this.environment = environment;
        this.baseSetParent(parent, subpath);
    }
    Object.defineProperty(BaseNode.prototype, "subpath", {
        get: function () {
            return this._subpath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "subpathUponDeath", {
        get: function () {
            return this._subpathUponDeath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "pathUponDeath", {
        get: function () {
            return this._pathUponDeath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "value", {
        get: function () {
            return this.type.getValue(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (val) {
            var wasAlive = this.isAlive;
            this._state = val;
            var isAlive = this.isAlive;
            if (this.aliveAtom && wasAlive !== isAlive) {
                this.aliveAtom.reportChanged();
            }
        },
        enumerable: false,
        configurable: true
    });
    BaseNode.prototype.fireInternalHook = function (name) {
        if (this._hookSubscribers) {
            this._hookSubscribers.emit(name, this, name);
        }
    };
    BaseNode.prototype.registerHook = function (hook, hookHandler) {
        if (!this._hookSubscribers) {
            this._hookSubscribers = new EventHandlers();
        }
        return this._hookSubscribers.register(hook, hookHandler);
    };
    Object.defineProperty(BaseNode.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    BaseNode.prototype.baseSetParent = function (parent, subpath) {
        this._parent = parent;
        this._subpath = subpath;
        this._escapedSubpath = undefined; // regenerate when needed
        if (this.pathAtom) {
            this.pathAtom.reportChanged();
        }
    };
    Object.defineProperty(BaseNode.prototype, "path", {
        /*
         * Returns (escaped) path representation as string
         */
        get: function () {
            return this.getEscapedPath(true);
        },
        enumerable: false,
        configurable: true
    });
    BaseNode.prototype.getEscapedPath = function (reportObserved) {
        if (reportObserved) {
            if (!this.pathAtom) {
                this.pathAtom = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.createAtom)("path");
            }
            this.pathAtom.reportObserved();
        }
        if (!this.parent)
            return "";
        // regenerate escaped subpath if needed
        if (this._escapedSubpath === undefined) {
            this._escapedSubpath = !this._subpath ? "" : escapeJsonPath(this._subpath);
        }
        return this.parent.getEscapedPath(reportObserved) + "/" + this._escapedSubpath;
    };
    Object.defineProperty(BaseNode.prototype, "isRoot", {
        get: function () {
            return this.parent === null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "isAlive", {
        get: function () {
            return this.state !== NodeLifeCycle.DEAD;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "isDetaching", {
        get: function () {
            return this.state === NodeLifeCycle.DETACHING;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "observableIsAlive", {
        get: function () {
            if (!this.aliveAtom) {
                this.aliveAtom = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.createAtom)("alive");
            }
            this.aliveAtom.reportObserved();
            return this.isAlive;
        },
        enumerable: false,
        configurable: true
    });
    BaseNode.prototype.baseFinalizeCreation = function (whenFinalized) {
        if (devMode()) {
            if (!this.isAlive) {
                // istanbul ignore next
                throw fail("assertion failed: cannot finalize the creation of a node that is already dead");
            }
        }
        // goal: afterCreate hooks runs depth-first. After attach runs parent first, so on afterAttach the parent has completed already
        if (this.state === NodeLifeCycle.CREATED) {
            if (this.parent) {
                if (this.parent.state !== NodeLifeCycle.FINALIZED) {
                    // parent not ready yet, postpone
                    return;
                }
                this.fireHook(Hook.afterAttach);
            }
            this.state = NodeLifeCycle.FINALIZED;
            if (whenFinalized) {
                whenFinalized();
            }
        }
    };
    BaseNode.prototype.baseFinalizeDeath = function () {
        if (this._hookSubscribers) {
            this._hookSubscribers.clearAll();
        }
        this._subpathUponDeath = this._subpath;
        this._pathUponDeath = this.getEscapedPath(false);
        this.baseSetParent(null, "");
        this.state = NodeLifeCycle.DEAD;
    };
    BaseNode.prototype.baseAboutToDie = function () {
        this.fireHook(Hook.beforeDestroy);
    };
    return BaseNode;
}());

/**
 * @internal
 * @hidden
 */
var ScalarNode = /** @class */ (function (_super) {
    __extends(ScalarNode, _super);
    function ScalarNode(simpleType, parent, subpath, environment, initialSnapshot) {
        var _this = _super.call(this, simpleType, parent, subpath, environment) || this;
        try {
            _this.storedValue = simpleType.createNewInstance(initialSnapshot);
        }
        catch (e) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            _this.state = NodeLifeCycle.DEAD;
            throw e;
        }
        _this.state = NodeLifeCycle.CREATED;
        // for scalar nodes there's no point in firing this event since it would fire on the constructor, before
        // anybody can actually register for/listen to it
        // this.fireHook(Hook.AfterCreate)
        _this.finalizeCreation();
        return _this;
    }
    Object.defineProperty(ScalarNode.prototype, "root", {
        get: function () {
            // future optimization: store root ref in the node and maintain it
            if (!this.parent)
                throw fail$1("This scalar node is not part of a tree");
            return this.parent.root;
        },
        enumerable: false,
        configurable: true
    });
    ScalarNode.prototype.setParent = function (newParent, subpath) {
        var parentChanged = this.parent !== newParent;
        var subpathChanged = this.subpath !== subpath;
        if (!parentChanged && !subpathChanged) {
            return;
        }
        if (devMode()) {
            if (!subpath) {
                // istanbul ignore next
                throw fail$1("assertion failed: subpath expected");
            }
            if (!newParent) {
                // istanbul ignore next
                throw fail$1("assertion failed: parent expected");
            }
            if (parentChanged) {
                // istanbul ignore next
                throw fail$1("assertion failed: scalar nodes cannot change their parent");
            }
        }
        this.environment = undefined; // use parent's
        this.baseSetParent(this.parent, subpath);
    };
    Object.defineProperty(ScalarNode.prototype, "snapshot", {
        get: function () {
            return freeze(this.getSnapshot());
        },
        enumerable: false,
        configurable: true
    });
    ScalarNode.prototype.getSnapshot = function () {
        return this.type.getSnapshot(this);
    };
    ScalarNode.prototype.toString = function () {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        return this.type.name + "@" + path + (this.isAlive ? "" : " [dead]");
    };
    ScalarNode.prototype.die = function () {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
            return;
        this.aboutToDie();
        this.finalizeDeath();
    };
    ScalarNode.prototype.finalizeCreation = function () {
        this.baseFinalizeCreation();
    };
    ScalarNode.prototype.aboutToDie = function () {
        this.baseAboutToDie();
    };
    ScalarNode.prototype.finalizeDeath = function () {
        this.baseFinalizeDeath();
    };
    ScalarNode.prototype.fireHook = function (name) {
        this.fireInternalHook(name);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ScalarNode.prototype, "die", null);
    return ScalarNode;
}(BaseNode));

var nextNodeId = 1;
var snapshotReactionOptions = {
    onError: function (e) {
        throw e;
    }
};
/**
 * @internal
 * @hidden
 */
var ObjectNode = /** @class */ (function (_super) {
    __extends(ObjectNode, _super);
    function ObjectNode(complexType, parent, subpath, environment, initialValue) {
        var _this = _super.call(this, complexType, parent, subpath, environment) || this;
        _this.nodeId = ++nextNodeId;
        _this.isProtectionEnabled = true;
        _this._autoUnbox = true; // unboxing is disabled when reading child nodes
        _this._isRunningAction = false; // only relevant for root
        _this._hasSnapshotReaction = false;
        _this._observableInstanceState = 0 /* UNINITIALIZED */;
        _this._cachedInitialSnapshotCreated = false;
        _this.unbox = _this.unbox.bind(_this);
        _this._initialSnapshot = freeze(initialValue);
        _this.identifierAttribute = complexType.identifierAttribute;
        if (!parent) {
            _this.identifierCache = new IdentifierCache();
        }
        _this._childNodes = complexType.initializeChildNodes(_this, _this._initialSnapshot);
        // identifier can not be changed during lifecycle of a node
        // so we safely can read it from initial snapshot
        _this.identifier = null;
        _this.unnormalizedIdentifier = null;
        if (_this.identifierAttribute && _this._initialSnapshot) {
            var id = _this._initialSnapshot[_this.identifierAttribute];
            if (id === undefined) {
                // try with the actual node if not (for optional identifiers)
                var childNode = _this._childNodes[_this.identifierAttribute];
                if (childNode) {
                    id = childNode.value;
                }
            }
            if (typeof id !== "string" && typeof id !== "number") {
                throw fail$1("Instance identifier '" + _this.identifierAttribute + "' for type '" + _this.type.name + "' must be a string or a number");
            }
            // normalize internal identifier to string
            _this.identifier = normalizeIdentifier(id);
            _this.unnormalizedIdentifier = id;
        }
        if (!parent) {
            _this.identifierCache.addNodeToCache(_this);
        }
        else {
            parent.root.identifierCache.addNodeToCache(_this);
        }
        return _this;
    }
    ObjectNode.prototype.applyPatches = function (patches) {
        this.createObservableInstanceIfNeeded();
        this._applyPatches(patches);
    };
    ObjectNode.prototype.applySnapshot = function (snapshot) {
        this.createObservableInstanceIfNeeded();
        this._applySnapshot(snapshot);
    };
    ObjectNode.prototype.createObservableInstanceIfNeeded = function () {
        if (this._observableInstanceState === 0 /* UNINITIALIZED */) {
            this.createObservableInstance();
        }
    };
    ObjectNode.prototype.createObservableInstance = function () {
        var e_1, _a;
        if (devMode()) {
            if (this.state !== NodeLifeCycle.INITIALIZING) {
                // istanbul ignore next
                throw fail$1("assertion failed: the creation of the observable instance must be done on the initializing phase");
            }
        }
        this._observableInstanceState = 1 /* CREATING */;
        // make sure the parent chain is created as well
        // array with parent chain from parent to child
        var parentChain = [];
        var parent = this.parent;
        // for performance reasons we never go back further than the most direct
        // uninitialized parent
        // this is done to avoid traversing the whole tree to the root when using
        // the same reference again
        while (parent &&
            parent._observableInstanceState === 0 /* UNINITIALIZED */) {
            parentChain.unshift(parent);
            parent = parent.parent;
        }
        try {
            // initialize the uninitialized parent chain from parent to child
            for (var parentChain_1 = __values(parentChain), parentChain_1_1 = parentChain_1.next(); !parentChain_1_1.done; parentChain_1_1 = parentChain_1.next()) {
                var p = parentChain_1_1.value;
                p.createObservableInstanceIfNeeded();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parentChain_1_1 && !parentChain_1_1.done && (_a = parentChain_1.return)) _a.call(parentChain_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var type = this.type;
        try {
            this.storedValue = type.createNewInstance(this._childNodes);
            this.preboot();
            this._isRunningAction = true;
            type.finalizeNewInstance(this, this.storedValue);
        }
        catch (e) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            this.state = NodeLifeCycle.DEAD;
            throw e;
        }
        finally {
            this._isRunningAction = false;
        }
        this._observableInstanceState = 2 /* CREATED */;
        // NOTE: we need to touch snapshot, because non-observable
        // "_observableInstanceState" field was touched
        invalidateComputed(this, "snapshot");
        if (this.isRoot)
            this._addSnapshotReaction();
        this._childNodes = EMPTY_OBJECT;
        this.state = NodeLifeCycle.CREATED;
        this.fireHook(Hook.afterCreate);
        this.finalizeCreation();
    };
    Object.defineProperty(ObjectNode.prototype, "root", {
        get: function () {
            var parent = this.parent;
            return parent ? parent.root : this;
        },
        enumerable: false,
        configurable: true
    });
    ObjectNode.prototype.clearParent = function () {
        if (!this.parent)
            return;
        // detach if attached
        this.fireHook(Hook.beforeDetach);
        var previousState = this.state;
        this.state = NodeLifeCycle.DETACHING;
        var root = this.root;
        var newEnv = root.environment;
        var newIdCache = root.identifierCache.splitCache(this);
        try {
            this.parent.removeChild(this.subpath);
            this.baseSetParent(null, "");
            this.environment = newEnv;
            this.identifierCache = newIdCache;
        }
        finally {
            this.state = previousState;
        }
    };
    ObjectNode.prototype.setParent = function (newParent, subpath) {
        var parentChanged = newParent !== this.parent;
        var subpathChanged = subpath !== this.subpath;
        if (!parentChanged && !subpathChanged) {
            return;
        }
        if (devMode()) {
            if (!subpath) {
                // istanbul ignore next
                throw fail$1("assertion failed: subpath expected");
            }
            if (!newParent) {
                // istanbul ignore next
                throw fail$1("assertion failed: new parent expected");
            }
            if (this.parent && parentChanged) {
                throw fail$1("A node cannot exists twice in the state tree. Failed to add " + this + " to path '" + newParent.path + "/" + subpath + "'.");
            }
            if (!this.parent && newParent.root === this) {
                throw fail$1("A state tree is not allowed to contain itself. Cannot assign " + this + " to path '" + newParent.path + "/" + subpath + "'");
            }
            if (!this.parent &&
                !!this.environment &&
                this.environment !== newParent.root.environment) {
                throw fail$1("A state tree cannot be made part of another state tree as long as their environments are different.");
            }
        }
        if (parentChanged) {
            // attach to new parent
            this.environment = undefined; // will use root's
            newParent.root.identifierCache.mergeCache(this);
            this.baseSetParent(newParent, subpath);
            this.fireHook(Hook.afterAttach);
        }
        else if (subpathChanged) {
            // moving to a new subpath on the same parent
            this.baseSetParent(this.parent, subpath);
        }
    };
    ObjectNode.prototype.fireHook = function (name) {
        var _this = this;
        this.fireInternalHook(name);
        var fn = this.storedValue &&
            typeof this.storedValue === "object" &&
            this.storedValue[name];
        if (typeof fn === "function") {
            // we check for it to allow old mobx peer dependencies that don't have the method to work (even when still bugged)
            if (mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateChangesInsideComputed) {
                (0,mobx__WEBPACK_IMPORTED_MODULE_0__._allowStateChangesInsideComputed)(function () {
                    fn.apply(_this.storedValue);
                });
            }
            else {
                fn.apply(this.storedValue);
            }
        }
    };
    Object.defineProperty(ObjectNode.prototype, "snapshot", {
        // advantage of using computed for a snapshot is that nicely respects transactions etc.
        get: function () {
            return freeze(this.getSnapshot());
        },
        enumerable: false,
        configurable: true
    });
    // NOTE: we use this method to get snapshot without creating @computed overhead
    ObjectNode.prototype.getSnapshot = function () {
        if (!this.isAlive)
            return this._snapshotUponDeath;
        return this._observableInstanceState === 2 /* CREATED */
            ? this._getActualSnapshot()
            : this._getCachedInitialSnapshot();
    };
    ObjectNode.prototype._getActualSnapshot = function () {
        return this.type.getSnapshot(this);
    };
    ObjectNode.prototype._getCachedInitialSnapshot = function () {
        if (!this._cachedInitialSnapshotCreated) {
            var type = this.type;
            var childNodes = this._childNodes;
            var snapshot = this._initialSnapshot;
            this._cachedInitialSnapshot = type.processInitialSnapshot(childNodes, snapshot);
            this._cachedInitialSnapshotCreated = true;
        }
        return this._cachedInitialSnapshot;
    };
    ObjectNode.prototype.isRunningAction = function () {
        if (this._isRunningAction)
            return true;
        if (this.isRoot)
            return false;
        return this.parent.isRunningAction();
    };
    ObjectNode.prototype.assertAlive = function (context) {
        var livelinessChecking = getLivelinessChecking();
        if (!this.isAlive && livelinessChecking !== "ignore") {
            var error = this._getAssertAliveError(context);
            switch (livelinessChecking) {
                case "error":
                    throw fail$1(error);
                case "warn":
                    warnError(error);
            }
        }
    };
    ObjectNode.prototype._getAssertAliveError = function (context) {
        var escapedPath = this.getEscapedPath(false) || this.pathUponDeath || "";
        var subpath = (context.subpath && escapeJsonPath(context.subpath)) || "";
        var actionContext = context.actionContext || getCurrentActionContext();
        // try to use a real action context if possible since it includes the action name
        if (actionContext && actionContext.type !== "action" && actionContext.parentActionEvent) {
            actionContext = actionContext.parentActionEvent;
        }
        var actionFullPath = "";
        if (actionContext && actionContext.name != null) {
            // try to use the context, and if it not available use the node one
            var actionPath = (actionContext && actionContext.context && getPath(actionContext.context)) ||
                escapedPath;
            actionFullPath = actionPath + "." + actionContext.name + "()";
        }
        return "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '" + this.type.name + "', Path upon death: '" + escapedPath + "', Subpath: '" + subpath + "', Action: '" + actionFullPath + "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree.";
    };
    ObjectNode.prototype.getChildNode = function (subpath) {
        this.assertAlive({
            subpath: subpath
        });
        this._autoUnbox = false;
        try {
            return this._observableInstanceState === 2 /* CREATED */
                ? this.type.getChildNode(this, subpath)
                : this._childNodes[subpath];
        }
        finally {
            this._autoUnbox = true;
        }
    };
    ObjectNode.prototype.getChildren = function () {
        this.assertAlive(EMPTY_OBJECT);
        this._autoUnbox = false;
        try {
            return this._observableInstanceState === 2 /* CREATED */
                ? this.type.getChildren(this)
                : convertChildNodesToArray(this._childNodes);
        }
        finally {
            this._autoUnbox = true;
        }
    };
    ObjectNode.prototype.getChildType = function (propertyName) {
        return this.type.getChildType(propertyName);
    };
    Object.defineProperty(ObjectNode.prototype, "isProtected", {
        get: function () {
            return this.root.isProtectionEnabled;
        },
        enumerable: false,
        configurable: true
    });
    ObjectNode.prototype.assertWritable = function (context) {
        this.assertAlive(context);
        if (!this.isRunningAction() && this.isProtected) {
            throw fail$1("Cannot modify '" + this + "', the object is protected and can only be modified by using an action.");
        }
    };
    ObjectNode.prototype.removeChild = function (subpath) {
        this.type.removeChild(this, subpath);
    };
    // bound on the constructor
    ObjectNode.prototype.unbox = function (childNode) {
        if (!childNode)
            return childNode;
        this.assertAlive({
            subpath: childNode.subpath || childNode.subpathUponDeath
        });
        return this._autoUnbox ? childNode.value : childNode;
    };
    ObjectNode.prototype.toString = function () {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        var identifier = this.identifier ? "(id: " + this.identifier + ")" : "";
        return this.type.name + "@" + path + identifier + (this.isAlive ? "" : " [dead]");
    };
    ObjectNode.prototype.finalizeCreation = function () {
        var _this = this;
        this.baseFinalizeCreation(function () {
            var e_2, _a;
            try {
                for (var _b = __values(_this.getChildren()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.finalizeCreation();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.fireInternalHook(Hook.afterCreationFinalization);
        });
    };
    ObjectNode.prototype.detach = function () {
        if (!this.isAlive)
            throw fail$1("Error while detaching, node is not alive.");
        this.clearParent();
    };
    ObjectNode.prototype.preboot = function () {
        var self = this;
        this._applyPatches = createActionInvoker(this.storedValue, "@APPLY_PATCHES", function (patches) {
            patches.forEach(function (patch) {
                var parts = splitJsonPath(patch.path);
                var node = resolveNodeByPathParts(self, parts.slice(0, -1));
                node.applyPatchLocally(parts[parts.length - 1], patch);
            });
        });
        this._applySnapshot = createActionInvoker(this.storedValue, "@APPLY_SNAPSHOT", function (snapshot) {
            // if the snapshot is the same as the current one, avoid performing a reconcile
            if (snapshot === self.snapshot)
                return;
            // else, apply it by calling the type logic
            return self.type.applySnapshot(self, snapshot);
        });
        addHiddenFinalProp(this.storedValue, "$treenode", this);
        addHiddenFinalProp(this.storedValue, "toJSON", toJSON);
    };
    ObjectNode.prototype.die = function () {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
            return;
        this.aboutToDie();
        this.finalizeDeath();
    };
    ObjectNode.prototype.aboutToDie = function () {
        if (this._observableInstanceState === 0 /* UNINITIALIZED */) {
            return;
        }
        this.getChildren().forEach(function (node) {
            node.aboutToDie();
        });
        // beforeDestroy should run before the disposers since else we could end up in a situation where
        // a disposer added with addDisposer at this stage (beforeDestroy) is actually never released
        this.baseAboutToDie();
        this._internalEventsEmit("dispose" /* Dispose */);
        this._internalEventsClear("dispose" /* Dispose */);
    };
    ObjectNode.prototype.finalizeDeath = function () {
        // invariant: not called directly but from "die"
        this.getChildren().forEach(function (node) {
            node.finalizeDeath();
        });
        this.root.identifierCache.notifyDied(this);
        // "kill" the computed prop and just store the last snapshot
        var snapshot = this.snapshot;
        this._snapshotUponDeath = snapshot;
        this._internalEventsClearAll();
        this.baseFinalizeDeath();
    };
    ObjectNode.prototype.onSnapshot = function (onChange) {
        this._addSnapshotReaction();
        return this._internalEventsRegister("snapshot" /* Snapshot */, onChange);
    };
    ObjectNode.prototype.emitSnapshot = function (snapshot) {
        this._internalEventsEmit("snapshot" /* Snapshot */, snapshot);
    };
    ObjectNode.prototype.onPatch = function (handler) {
        return this._internalEventsRegister("patch" /* Patch */, handler);
    };
    ObjectNode.prototype.emitPatch = function (basePatch, source) {
        if (this._internalEventsHasSubscribers("patch" /* Patch */)) {
            var localizedPatch = extend({}, basePatch, {
                path: source.path.substr(this.path.length) + "/" + basePatch.path // calculate the relative path of the patch
            });
            var _a = __read(splitPatch(localizedPatch), 2), patch = _a[0], reversePatch = _a[1];
            this._internalEventsEmit("patch" /* Patch */, patch, reversePatch);
        }
        if (this.parent)
            this.parent.emitPatch(basePatch, source);
    };
    ObjectNode.prototype.hasDisposer = function (disposer) {
        return this._internalEventsHas("dispose" /* Dispose */, disposer);
    };
    ObjectNode.prototype.addDisposer = function (disposer) {
        if (!this.hasDisposer(disposer)) {
            this._internalEventsRegister("dispose" /* Dispose */, disposer, true);
            return;
        }
        throw fail$1("cannot add a disposer when it is already registered for execution");
    };
    ObjectNode.prototype.removeDisposer = function (disposer) {
        if (!this._internalEventsHas("dispose" /* Dispose */, disposer)) {
            throw fail$1("cannot remove a disposer which was never registered for execution");
        }
        this._internalEventsUnregister("dispose" /* Dispose */, disposer);
    };
    ObjectNode.prototype.removeMiddleware = function (middleware) {
        if (this.middlewares) {
            var index = this.middlewares.indexOf(middleware);
            if (index >= 0) {
                this.middlewares.splice(index, 1);
            }
        }
    };
    ObjectNode.prototype.addMiddleWare = function (handler, includeHooks) {
        var _this = this;
        if (includeHooks === void 0) { includeHooks = true; }
        var middleware = { handler: handler, includeHooks: includeHooks };
        if (!this.middlewares)
            this.middlewares = [middleware];
        else
            this.middlewares.push(middleware);
        return function () {
            _this.removeMiddleware(middleware);
        };
    };
    ObjectNode.prototype.applyPatchLocally = function (subpath, patch) {
        this.assertWritable({
            subpath: subpath
        });
        this.createObservableInstanceIfNeeded();
        this.type.applyPatchLocally(this, subpath, patch);
    };
    ObjectNode.prototype._addSnapshotReaction = function () {
        var _this = this;
        if (!this._hasSnapshotReaction) {
            var snapshotDisposer = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(function () { return _this.snapshot; }, function (snapshot) { return _this.emitSnapshot(snapshot); }, snapshotReactionOptions);
            this.addDisposer(snapshotDisposer);
            this._hasSnapshotReaction = true;
        }
    };
    // we proxy the methods to avoid creating an EventHandlers instance when it is not needed
    ObjectNode.prototype._internalEventsHasSubscribers = function (event) {
        return !!this._internalEvents && this._internalEvents.hasSubscribers(event);
    };
    ObjectNode.prototype._internalEventsRegister = function (event, eventHandler, atTheBeginning) {
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (!this._internalEvents) {
            this._internalEvents = new EventHandlers();
        }
        return this._internalEvents.register(event, eventHandler, atTheBeginning);
    };
    ObjectNode.prototype._internalEventsHas = function (event, eventHandler) {
        return !!this._internalEvents && this._internalEvents.has(event, eventHandler);
    };
    ObjectNode.prototype._internalEventsUnregister = function (event, eventHandler) {
        if (this._internalEvents) {
            this._internalEvents.unregister(event, eventHandler);
        }
    };
    ObjectNode.prototype._internalEventsEmit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._internalEvents) {
            (_a = this._internalEvents).emit.apply(_a, __spread([event], args));
        }
    };
    ObjectNode.prototype._internalEventsClear = function (event) {
        if (this._internalEvents) {
            this._internalEvents.clear(event);
        }
    };
    ObjectNode.prototype._internalEventsClearAll = function () {
        if (this._internalEvents) {
            this._internalEvents.clearAll();
        }
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ObjectNode.prototype, "createObservableInstance", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.computed
    ], ObjectNode.prototype, "snapshot", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ObjectNode.prototype, "detach", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ObjectNode.prototype, "die", null);
    return ObjectNode;
}(BaseNode));

/**
 * @internal
 * @hidden
 */
var TypeFlags;
(function (TypeFlags) {
    TypeFlags[TypeFlags["String"] = 1] = "String";
    TypeFlags[TypeFlags["Number"] = 2] = "Number";
    TypeFlags[TypeFlags["Boolean"] = 4] = "Boolean";
    TypeFlags[TypeFlags["Date"] = 8] = "Date";
    TypeFlags[TypeFlags["Literal"] = 16] = "Literal";
    TypeFlags[TypeFlags["Array"] = 32] = "Array";
    TypeFlags[TypeFlags["Map"] = 64] = "Map";
    TypeFlags[TypeFlags["Object"] = 128] = "Object";
    TypeFlags[TypeFlags["Frozen"] = 256] = "Frozen";
    TypeFlags[TypeFlags["Optional"] = 512] = "Optional";
    TypeFlags[TypeFlags["Reference"] = 1024] = "Reference";
    TypeFlags[TypeFlags["Identifier"] = 2048] = "Identifier";
    TypeFlags[TypeFlags["Late"] = 4096] = "Late";
    TypeFlags[TypeFlags["Refinement"] = 8192] = "Refinement";
    TypeFlags[TypeFlags["Union"] = 16384] = "Union";
    TypeFlags[TypeFlags["Null"] = 32768] = "Null";
    TypeFlags[TypeFlags["Undefined"] = 65536] = "Undefined";
    TypeFlags[TypeFlags["Integer"] = 131072] = "Integer";
    TypeFlags[TypeFlags["Custom"] = 262144] = "Custom";
    TypeFlags[TypeFlags["SnapshotProcessor"] = 524288] = "SnapshotProcessor";
})(TypeFlags || (TypeFlags = {}));
/**
 * @internal
 * @hidden
 */
var cannotDetermineSubtype = "cannotDetermine";
/**
 * A base type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var BaseType = /** @class */ (function () {
    function BaseType(name) {
        this.isType = true;
        this.name = name;
    }
    BaseType.prototype.create = function (snapshot, environment) {
        typecheckInternal(this, snapshot);
        return this.instantiate(null, "", environment, snapshot).value;
    };
    BaseType.prototype.getSnapshot = function (node, applyPostProcess) {
        // istanbul ignore next
        throw fail$1("unimplemented method");
    };
    BaseType.prototype.isAssignableFrom = function (type) {
        return type === this;
    };
    BaseType.prototype.validate = function (value, context) {
        var node = getStateTreeNodeSafe(value);
        if (node) {
            var valueType = getType(value);
            return this.isAssignableFrom(valueType)
                ? typeCheckSuccess()
                : typeCheckFailure(context, value);
            // it is tempting to compare snapshots, but in that case we should always clone on assignments...
        }
        return this.isValidSnapshot(value, context);
    };
    BaseType.prototype.is = function (thing) {
        return this.validate(thing, [{ path: "", type: this }]).length === 0;
    };
    Object.defineProperty(BaseType.prototype, "Type", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "TypeWithoutSTN", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "SnapshotType", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "CreationType", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`");
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], BaseType.prototype, "create", null);
    return BaseType;
}());
/**
 * A complex type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var ComplexType = /** @class */ (function (_super) {
    __extends(ComplexType, _super);
    function ComplexType(name) {
        return _super.call(this, name) || this;
    }
    ComplexType.prototype.create = function (snapshot, environment) {
        if (snapshot === void 0) { snapshot = this.getDefaultSnapshot(); }
        return _super.prototype.create.call(this, snapshot, environment);
    };
    ComplexType.prototype.getValue = function (node) {
        node.createObservableInstanceIfNeeded();
        return node.storedValue;
    };
    ComplexType.prototype.tryToReconcileNode = function (current, newValue) {
        if (current.isDetaching)
            return false;
        if (current.snapshot === newValue) {
            // newValue is the current snapshot of the node, noop
            return true;
        }
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue) === current) {
            // the current node is the same as the new one
            return true;
        }
        if (current.type === this &&
            isMutable(newValue) &&
            !isStateTreeNode(newValue) &&
            (!current.identifierAttribute ||
                current.identifier ===
                    normalizeIdentifier(newValue[current.identifierAttribute]))) {
            // the newValue has no node, so can be treated like a snapshot
            // we can reconcile
            current.applySnapshot(newValue);
            return true;
        }
        return false;
    };
    ComplexType.prototype.reconcile = function (current, newValue, parent, subpath) {
        var nodeReconciled = this.tryToReconcileNode(current, newValue);
        if (nodeReconciled) {
            current.setParent(parent, subpath);
            return current;
        }
        // current node cannot be recycled in any way
        current.die(); // noop if detaching
        // attempt to reuse the new one
        if (isStateTreeNode(newValue) && this.isAssignableFrom(getType(newValue))) {
            // newValue is a Node as well, move it here..
            var newNode = getStateTreeNode(newValue);
            newNode.setParent(parent, subpath);
            return newNode;
        }
        // nothing to do, we have to create a new node
        return this.instantiate(parent, subpath, undefined, newValue);
    };
    ComplexType.prototype.getSubTypes = function () {
        return null;
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ComplexType.prototype, "create", null);
    return ComplexType;
}(BaseType));
/**
 * @internal
 * @hidden
 */
var SimpleType = /** @class */ (function (_super) {
    __extends(SimpleType, _super);
    function SimpleType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleType.prototype.createNewInstance = function (snapshot) {
        return snapshot;
    };
    SimpleType.prototype.getValue = function (node) {
        // if we ever find a case where scalar nodes can be accessed without iterating through its parent
        // uncomment this to make sure the parent chain is created when this is accessed
        // if (node.parent) {
        //     node.parent.createObservableInstanceIfNeeded()
        // }
        return node.storedValue;
    };
    SimpleType.prototype.getSnapshot = function (node) {
        return node.storedValue;
    };
    SimpleType.prototype.reconcile = function (current, newValue, parent, subpath) {
        // reconcile only if type and value are still the same, and only if the node is not detaching
        if (!current.isDetaching && current.type === this && current.storedValue === newValue) {
            return current;
        }
        var res = this.instantiate(parent, subpath, undefined, newValue);
        current.die(); // noop if detaching
        return res;
    };
    SimpleType.prototype.getSubTypes = function () {
        return null;
    };
    return SimpleType;
}(BaseType));
/**
 * Returns if a given value represents a type.
 *
 * @param value Value to check.
 * @returns `true` if the value is a type.
 */
function isType(value) {
    return typeof value === "object" && value && value.isType === true;
}
/**
 * @internal
 * @hidden
 */
function assertIsType(type, argNumber) {
    assertArg(type, isType, "mobx-state-tree type", argNumber);
}

var runningActions = new Map();
/**
 * Note: Consider migrating to `createActionTrackingMiddleware2`, it is easier to use.
 *
 * Convenience utility to create action based middleware that supports async processes more easily.
 * All hooks are called for both synchronous and asynchronous actions. Except that either `onSuccess` or `onFail` is called
 *
 * The create middleware tracks the process of an action (assuming it passes the `filter`).
 * `onResume` can return any value, which will be passed as second argument to any other hook. This makes it possible to keep state during a process.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware(hooks) {
    return function actionTrackingMiddleware(call, next, abort) {
        switch (call.type) {
            case "action": {
                if (!hooks.filter || hooks.filter(call) === true) {
                    var context = hooks.onStart(call);
                    hooks.onResume(call, context);
                    runningActions.set(call.id, {
                        call: call,
                        context: context,
                        async: false
                    });
                    try {
                        var res = next(call);
                        hooks.onSuspend(call, context);
                        if (runningActions.get(call.id).async === false) {
                            runningActions.delete(call.id);
                            hooks.onSuccess(call, context, res);
                        }
                        return res;
                    }
                    catch (e) {
                        runningActions.delete(call.id);
                        hooks.onFail(call, context, e);
                        throw e;
                    }
                }
                else {
                    return next(call);
                }
            }
            case "flow_spawn": {
                var root = runningActions.get(call.rootId);
                root.async = true;
                return next(call);
            }
            case "flow_resume":
            case "flow_resume_error": {
                var root = runningActions.get(call.rootId);
                hooks.onResume(call, root.context);
                try {
                    return next(call);
                }
                finally {
                    hooks.onSuspend(call, root.context);
                }
            }
            case "flow_throw": {
                var root = runningActions.get(call.rootId);
                runningActions.delete(call.rootId);
                hooks.onFail(call, root.context, call.args[0]);
                return next(call);
            }
            case "flow_return": {
                var root = runningActions.get(call.rootId);
                runningActions.delete(call.rootId);
                hooks.onSuccess(call, root.context, call.args[0]);
                return next(call);
            }
        }
    };
}

var RunningAction = /** @class */ (function () {
    function RunningAction(hooks, call) {
        this.hooks = hooks;
        this.call = call;
        this.flowsPending = 0;
        this.running = true;
        if (hooks) {
            hooks.onStart(call);
        }
    }
    RunningAction.prototype.finish = function (error) {
        if (this.running) {
            this.running = false;
            if (this.hooks) {
                this.hooks.onFinish(this.call, error);
            }
        }
    };
    RunningAction.prototype.incFlowsPending = function () {
        this.flowsPending++;
    };
    RunningAction.prototype.decFlowsPending = function () {
        this.flowsPending--;
    };
    Object.defineProperty(RunningAction.prototype, "hasFlowsPending", {
        get: function () {
            return this.flowsPending > 0;
        },
        enumerable: false,
        configurable: true
    });
    return RunningAction;
}());
/**
 * Convenience utility to create action based middleware that supports async processes more easily.
 * The flow is like this:
 * - for each action: if filter passes -> `onStart` -> (inner actions recursively) -> `onFinish`
 *
 * Example: if we had an action `a` that called inside an action `b1`, then `b2` the flow would be:
 * - `filter(a)`
 * - `onStart(a)`
 *   - `filter(b1)`
 *   - `onStart(b1)`
 *   - `onFinish(b1)`
 *   - `filter(b2)`
 *   - `onStart(b2)`
 *   - `onFinish(b2)`
 * - `onFinish(a)`
 *
 * The flow is the same no matter if the actions are sync or async.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware2(middlewareHooks) {
    var runningActions = new WeakMap();
    return function actionTrackingMiddleware(call, next) {
        // find parentRunningAction
        var parentRunningAction = call.parentActionEvent
            ? runningActions.get(call.parentActionEvent)
            : undefined;
        if (call.type === "action") {
            var newCall = __assign(__assign({}, call), { 
                // make a shallow copy of the parent action env
                env: parentRunningAction && parentRunningAction.call.env, parentCall: parentRunningAction && parentRunningAction.call });
            var passesFilter = !middlewareHooks.filter || middlewareHooks.filter(newCall);
            var hooks = passesFilter ? middlewareHooks : undefined;
            var runningAction = new RunningAction(hooks, newCall);
            runningActions.set(call, runningAction);
            var res = void 0;
            try {
                res = next(call);
            }
            catch (e) {
                runningAction.finish(e);
                throw e;
            }
            if (!runningAction.hasFlowsPending) {
                // sync action finished
                runningAction.finish();
            }
            return res;
        }
        else {
            if (!parentRunningAction) {
                return next(call);
            }
            switch (call.type) {
                case "flow_spawn": {
                    parentRunningAction.incFlowsPending();
                    return next(call);
                }
                case "flow_resume":
                case "flow_resume_error": {
                    return next(call);
                }
                case "flow_throw": {
                    var error = call.args[0];
                    try {
                        return next(call);
                    }
                    finally {
                        parentRunningAction.decFlowsPending();
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish(error);
                        }
                    }
                }
                case "flow_return": {
                    try {
                        return next(call);
                    }
                    finally {
                        parentRunningAction.decFlowsPending();
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish();
                        }
                    }
                }
            }
        }
    };
}

function serializeArgument(node, actionName, index, arg) {
    if (arg instanceof Date)
        return { $MST_DATE: arg.getTime() };
    if (isPrimitive(arg))
        return arg;
    // We should not serialize MST nodes, even if we can, because we don't know if the receiving party can handle a raw snapshot instead of an
    // MST type instance. So if one wants to serialize a MST node that was pass in, either explitly pass: 1: an id, 2: a (relative) path, 3: a snapshot
    if (isStateTreeNode(arg))
        return serializeTheUnserializable("[MSTNode: " + getType(arg).name + "]");
    if (typeof arg === "function")
        return serializeTheUnserializable("[function]");
    if (typeof arg === "object" && !isPlainObject(arg) && !isArray(arg))
        return serializeTheUnserializable("[object " + ((arg && arg.constructor && arg.constructor.name) ||
            "Complex Object") + "]");
    try {
        // Check if serializable, cycle free etc...
        // MWE: there must be a better way....
        JSON.stringify(arg); // or throws
        return arg;
    }
    catch (e) {
        return serializeTheUnserializable("" + e);
    }
}
function deserializeArgument(adm, value) {
    if (value && typeof value === "object" && "$MST_DATE" in value)
        return new Date(value["$MST_DATE"]);
    return value;
}
function serializeTheUnserializable(baseType) {
    return {
        $MST_UNSERIALIZABLE: true,
        type: baseType
    };
}
/**
 * Applies an action or a series of actions in a single MobX transaction.
 * Does not return any value
 * Takes an action description as produced by the `onAction` middleware.
 *
 * @param target
 * @param actions
 */
function applyAction(target, actions) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertArg(actions, function (a) { return typeof a === "object"; }, "object or array", 2);
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(function () {
        asArray(actions).forEach(function (action) { return baseApplyAction(target, action); });
    });
}
function baseApplyAction(target, action) {
    var resolvedTarget = tryResolve(target, action.path || "");
    if (!resolvedTarget)
        throw fail$1("Invalid action path: " + (action.path || ""));
    var node = getStateTreeNode(resolvedTarget);
    // Reserved functions
    if (action.name === "@APPLY_PATCHES") {
        return applyPatch.call(null, resolvedTarget, action.args[0]);
    }
    if (action.name === "@APPLY_SNAPSHOT") {
        return applySnapshot.call(null, resolvedTarget, action.args[0]);
    }
    if (!(typeof resolvedTarget[action.name] === "function"))
        throw fail$1("Action '" + action.name + "' does not exist in '" + node.path + "'");
    return resolvedTarget[action.name].apply(resolvedTarget, action.args ? action.args.map(function (v) { return deserializeArgument(node, v); }) : []);
}
/**
 * Small abstraction around `onAction` and `applyAction`, attaches an action listener to a tree and records all the actions emitted.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IActionRecorder {
 *      // the recorded actions
 *      actions: ISerializedActionCall[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording actions
 *      stop(): void
 *      // resume recording actions
 *      resume(): void
 *      // apply all the recorded actions on the given object
 *      replay(target: IAnyStateTreeNode): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain actions.
 *
 * @param subject
 * @returns
 */
function recordActions(subject, filter) {
    // check all arguments
    assertIsStateTreeNode(subject, 1);
    var actions = [];
    var listener = function (call) {
        var recordThis = filter ? filter(call, getRunningActionContext()) : true;
        if (recordThis) {
            actions.push(call);
        }
    };
    var disposer;
    var recorder = {
        actions: actions,
        get recording() {
            return !!disposer;
        },
        stop: function () {
            if (disposer) {
                disposer();
                disposer = undefined;
            }
        },
        resume: function () {
            if (disposer)
                return;
            disposer = onAction(subject, listener);
        },
        replay: function (target) {
            applyAction(target, actions);
        }
    };
    recorder.resume();
    return recorder;
}
/**
 * Registers a function that will be invoked for each action that is called on the provided model instance, or to any of its children.
 * See [actions](https://github.com/mobxjs/mobx-state-tree#actions) for more details. onAction events are emitted only for the outermost called action in the stack.
 * Action can also be intercepted by middleware using addMiddleware to change the function call before it will be run.
 *
 * Not all action arguments might be serializable. For unserializable arguments, a struct like `{ $MST_UNSERIALIZABLE: true, type: "someType" }` will be generated.
 * MST Nodes are considered non-serializable as well (they could be serialized as there snapshot, but it is uncertain whether an replaying party will be able to handle such a non-instantiated snapshot).
 * Rather, when using `onAction` middleware, one should consider in passing arguments which are 1: an id, 2: a (relative) path, or 3: a snapshot. Instead of a real MST node.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * }).actions(self => ({
 *   add(todo) {
 *     self.todos.push(todo);
 *   }
 * }))
 *
 * const s = TodoStore.create({ todos: [] })
 *
 * let disposer = onAction(s, (call) => {
 *   console.log(call);
 * })
 *
 * s.add({ task: "Grab a coffee" })
 * // Logs: { name: "add", path: "", args: [{ task: "Grab a coffee" }] }
 * ```
 *
 * @param target
 * @param listener
 * @param attachAfter (default false) fires the listener *after* the action has executed instead of before.
 * @returns
 */
function onAction(target, listener, attachAfter) {
    if (attachAfter === void 0) { attachAfter = false; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    if (devMode()) {
        if (!isRoot(target))
            warnError("Warning: Attaching onAction listeners to non root nodes is dangerous: No events will be emitted for actions initiated higher up in the tree.");
        if (!isProtected(target))
            warnError("Warning: Attaching onAction listeners to non protected nodes is dangerous: No events will be emitted for direct modifications without action.");
    }
    return addMiddleware(target, function handler(rawCall, next) {
        if (rawCall.type === "action" && rawCall.id === rawCall.rootId) {
            var sourceNode_1 = getStateTreeNode(rawCall.context);
            var info = {
                name: rawCall.name,
                path: getRelativePathBetweenNodes(getStateTreeNode(target), sourceNode_1),
                args: rawCall.args.map(function (arg, index) {
                    return serializeArgument(sourceNode_1, rawCall.name, index, arg);
                })
            };
            if (attachAfter) {
                var res = next(rawCall);
                listener(info);
                return res;
            }
            else {
                listener(info);
                return next(rawCall);
            }
        }
        else {
            return next(rawCall);
        }
    });
}

var nextActionId = 1;
var currentActionContext;
/**
 * @internal
 * @hidden
 */
function getCurrentActionContext() {
    return currentActionContext;
}
/**
 * @internal
 * @hidden
 */
function getNextActionId() {
    return nextActionId++;
}
// TODO: optimize away entire action context if there is no middleware in tree?
/**
 * @internal
 * @hidden
 */
function runWithActionContext(context, fn) {
    var node = getStateTreeNode(context.context);
    if (context.type === "action") {
        node.assertAlive({
            actionContext: context
        });
    }
    var baseIsRunningAction = node._isRunningAction;
    node._isRunningAction = true;
    var previousContext = currentActionContext;
    currentActionContext = context;
    try {
        return runMiddleWares(node, context, fn);
    }
    finally {
        currentActionContext = previousContext;
        node._isRunningAction = baseIsRunningAction;
    }
}
/**
 * @internal
 * @hidden
 */
function getParentActionContext(parentContext) {
    if (!parentContext)
        return undefined;
    if (parentContext.type === "action")
        return parentContext;
    return parentContext.parentActionEvent;
}
/**
 * @internal
 * @hidden
 */
function createActionInvoker(target, name, fn) {
    var res = function () {
        var id = getNextActionId();
        var parentContext = currentActionContext;
        var parentActionContext = getParentActionContext(parentContext);
        return runWithActionContext({
            type: "action",
            name: name,
            id: id,
            args: argsToArray(arguments),
            context: target,
            tree: getRoot(target),
            rootId: parentContext ? parentContext.rootId : id,
            parentId: parentContext ? parentContext.id : 0,
            allParentIds: parentContext
                ? __spread(parentContext.allParentIds, [parentContext.id]) : [],
            parentEvent: parentContext,
            parentActionEvent: parentActionContext
        }, fn);
    };
    res._isMSTAction = true;
    return res;
}
/**
 * Middleware can be used to intercept any action is invoked on the subtree where it is attached.
 * If a tree is protected (by default), this means that any mutation of the tree will pass through your middleware.
 *
 * For more details, see the [middleware docs](concepts/middleware.md)
 *
 * @param target Node to apply the middleware to.
 * @param middleware Middleware to apply.
 * @returns A callable function to dispose the middleware.
 */
function addMiddleware(target, handler, includeHooks) {
    if (includeHooks === void 0) { includeHooks = true; }
    var node = getStateTreeNode(target);
    if (devMode()) {
        if (!node.isProtectionEnabled) {
            warnError("It is recommended to protect the state tree before attaching action middleware, as otherwise it cannot be guaranteed that all changes are passed through middleware. See `protect`");
        }
    }
    return node.addMiddleWare(handler, includeHooks);
}
/**
 * Binds middleware to a specific action.
 *
 * Example:
 * ```ts
 * type.actions(self => {
 *   function takeA____() {
 *       self.toilet.donate()
 *       self.wipe()
 *       self.wipe()
 *       self.toilet.flush()
 *   }
 *   return {
 *     takeA____: decorate(atomic, takeA____)
 *   }
 * })
 * ```
 *
 * @param handler
 * @param fn
 * @param includeHooks
 * @returns The original function
 */
function decorate(handler, fn, includeHooks) {
    if (includeHooks === void 0) { includeHooks = true; }
    var middleware = { handler: handler, includeHooks: includeHooks };
    fn.$mst_middleware = fn.$mst_middleware || [];
    fn.$mst_middleware.push(middleware);
    return fn;
}
var CollectedMiddlewares = /** @class */ (function () {
    function CollectedMiddlewares(node, fn) {
        this.arrayIndex = 0;
        this.inArrayIndex = 0;
        this.middlewares = [];
        // we just push middleware arrays into an array of arrays to avoid making copies
        if (fn.$mst_middleware) {
            this.middlewares.push(fn.$mst_middleware);
        }
        var n = node;
        // Find all middlewares. Optimization: cache this?
        while (n) {
            if (n.middlewares)
                this.middlewares.push(n.middlewares);
            n = n.parent;
        }
    }
    Object.defineProperty(CollectedMiddlewares.prototype, "isEmpty", {
        get: function () {
            return this.middlewares.length <= 0;
        },
        enumerable: false,
        configurable: true
    });
    CollectedMiddlewares.prototype.getNextMiddleware = function () {
        var array = this.middlewares[this.arrayIndex];
        if (!array)
            return undefined;
        var item = array[this.inArrayIndex++];
        if (!item) {
            this.arrayIndex++;
            this.inArrayIndex = 0;
            return this.getNextMiddleware();
        }
        return item;
    };
    return CollectedMiddlewares;
}());
function runMiddleWares(node, baseCall, originalFn) {
    var middlewares = new CollectedMiddlewares(node, originalFn);
    // Short circuit
    if (middlewares.isEmpty)
        return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(originalFn).apply(null, baseCall.args);
    var result = null;
    function runNextMiddleware(call) {
        var middleware = middlewares.getNextMiddleware();
        var handler = middleware && middleware.handler;
        if (!handler) {
            return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(originalFn).apply(null, call.args);
        }
        // skip hooks if asked to
        if (!middleware.includeHooks && Hook[call.name]) {
            return runNextMiddleware(call);
        }
        var nextInvoked = false;
        function next(call2, callback) {
            nextInvoked = true;
            // the result can contain
            // - the non manipulated return value from an action
            // - the non manipulated abort value
            // - one of the above but manipulated through the callback function
            result = runNextMiddleware(call2);
            if (callback) {
                result = callback(result);
            }
        }
        var abortInvoked = false;
        function abort(value) {
            abortInvoked = true;
            // overwrite the result
            // can be manipulated through middlewares earlier in the queue using the callback fn
            result = value;
        }
        handler(call, next, abort);
        if (devMode()) {
            if (!nextInvoked && !abortInvoked) {
                var node2 = getStateTreeNode(call.tree);
                throw fail$1("Neither the next() nor the abort() callback within the middleware " + handler.name + " for the action: \"" + call.name + "\" on the node: " + node2.type.name + " was invoked.");
            }
            else if (nextInvoked && abortInvoked) {
                var node2 = getStateTreeNode(call.tree);
                throw fail$1("The next() and abort() callback within the middleware " + handler.name + " for the action: \"" + call.name + "\" on the node: " + node2.type.name + " were invoked.");
            }
        }
        return result;
    }
    return runNextMiddleware(baseCall);
}

/**
 * Returns the currently executing MST action context, or undefined if none.
 */
function getRunningActionContext() {
    var current = getCurrentActionContext();
    while (current && current.type !== "action") {
        current = current.parentActionEvent;
    }
    return current;
}
function _isActionContextThisOrChildOf(actionContext, sameOrParent, includeSame) {
    var parentId = typeof sameOrParent === "number" ? sameOrParent : sameOrParent.id;
    var current = includeSame
        ? actionContext
        : actionContext.parentActionEvent;
    while (current) {
        if (current.id === parentId) {
            return true;
        }
        current = current.parentActionEvent;
    }
    return false;
}
/**
 * Returns if the given action context is a parent of this action context.
 */
function isActionContextChildOf(actionContext, parent) {
    return _isActionContextThisOrChildOf(actionContext, parent, false);
}
/**
 * Returns if the given action context is this or a parent of this action context.
 */
function isActionContextThisOrChildOf(actionContext, parentOrThis) {
    return _isActionContextThisOrChildOf(actionContext, parentOrThis, true);
}

function safeStringify(value) {
    try {
        return JSON.stringify(value);
    }
    catch (e) {
        // istanbul ignore next
        return "<Unserializable: " + e + ">";
    }
}
/**
 * @internal
 * @hidden
 */
function prettyPrintValue(value) {
    return typeof value === "function"
        ? "<function" + (value.name ? " " + value.name : "") + ">"
        : isStateTreeNode(value)
            ? "<" + value + ">"
            : "`" + safeStringify(value) + "`";
}
function shortenPrintValue(valueInString) {
    return valueInString.length < 280
        ? valueInString
        : valueInString.substring(0, 272) + "......" + valueInString.substring(valueInString.length - 8);
}
function toErrorString(error) {
    var value = error.value;
    var type = error.context[error.context.length - 1].type;
    var fullPath = error.context
        .map(function (_a) {
        var path = _a.path;
        return path;
    })
        .filter(function (path) { return path.length > 0; })
        .join("/");
    var pathPrefix = fullPath.length > 0 ? "at path \"/" + fullPath + "\" " : "";
    var currentTypename = isStateTreeNode(value)
        ? "value of type " + getStateTreeNode(value).type.name + ":"
        : isPrimitive(value)
            ? "value"
            : "snapshot";
    var isSnapshotCompatible = type && isStateTreeNode(value) && type.is(getStateTreeNode(value).snapshot);
    return ("" + pathPrefix + currentTypename + " " + prettyPrintValue(value) + " is not assignable " + (type ? "to type: `" + type.name + "`" : "") +
        (error.message ? " (" + error.message + ")" : "") +
        (type
            ? isPrimitiveType(type) || isPrimitive(value)
                ? "."
                : ", expected an instance of `" + type.name + "` or a snapshot like `" + type.describe() + "` instead." +
                    (isSnapshotCompatible
                        ? " (Note that a snapshot of the provided value is compatible with the targeted type)"
                        : "")
            : "."));
}
/**
 * @internal
 * @hidden
 */
function getContextForPath(context, path, type) {
    return context.concat([{ path: path, type: type }]);
}
/**
 * @internal
 * @hidden
 */
function typeCheckSuccess() {
    return EMPTY_ARRAY;
}
/**
 * @internal
 * @hidden
 */
function typeCheckFailure(context, value, message) {
    return [{ context: context, value: value, message: message }];
}
/**
 * @internal
 * @hidden
 */
function flattenTypeErrors(errors) {
    return errors.reduce(function (a, i) { return a.concat(i); }, []);
}
// TODO; doublecheck: typecheck should only needed to be invoked from: type.create and array / map / value.property will change
/**
 * @internal
 * @hidden
 */
function typecheckInternal(type, value) {
    // runs typeChecking if it is in dev-mode or through a process.env.ENABLE_TYPE_CHECK flag
    if (isTypeCheckingEnabled()) {
        typecheck(type, value);
    }
}
/**
 * Run's the typechecker for the given type on the given value, which can be a snapshot or an instance.
 * Throws if the given value is not according the provided type specification.
 * Use this if you need typechecks even in a production build (by default all automatic runtime type checks will be skipped in production builds)
 *
 * @param type Type to check against.
 * @param value Value to be checked, either a snapshot or an instance.
 */
function typecheck(type, value) {
    var errors = type.validate(value, [{ path: "", type: type }]);
    if (errors.length > 0) {
        throw fail$1(validationErrorsToString(type, value, errors));
    }
}
function validationErrorsToString(type, value, errors) {
    if (errors.length === 0) {
        return undefined;
    }
    return ("Error while converting " + shortenPrintValue(prettyPrintValue(value)) + " to `" + type.name + "`:\n\n    " + errors.map(toErrorString).join("\n    "));
}

var identifierCacheId = 0;
/**
 * @internal
 * @hidden
 */
var IdentifierCache = /** @class */ (function () {
    function IdentifierCache() {
        this.cacheId = identifierCacheId++;
        // n.b. in cache all identifiers are normalized to strings
        this.cache = mobx__WEBPACK_IMPORTED_MODULE_0__.observable.map();
        // last time the cache (array) for a given time changed
        // n.b. it is not really the time, but just an integer that gets increased after each modification to the array
        this.lastCacheModificationPerId = mobx__WEBPACK_IMPORTED_MODULE_0__.observable.map();
    }
    IdentifierCache.prototype.updateLastCacheModificationPerId = function (identifier) {
        var lcm = this.lastCacheModificationPerId.get(identifier);
        // we start at 1 since 0 means no update since cache creation
        this.lastCacheModificationPerId.set(identifier, lcm === undefined ? 1 : lcm + 1);
    };
    IdentifierCache.prototype.getLastCacheModificationPerId = function (identifier) {
        var modificationId = this.lastCacheModificationPerId.get(identifier) || 0;
        return this.cacheId + "-" + modificationId;
    };
    IdentifierCache.prototype.addNodeToCache = function (node, lastCacheUpdate) {
        if (lastCacheUpdate === void 0) { lastCacheUpdate = true; }
        if (node.identifierAttribute) {
            var identifier = node.identifier;
            if (!this.cache.has(identifier)) {
                this.cache.set(identifier, mobx__WEBPACK_IMPORTED_MODULE_0__.observable.array([], mobxShallow));
            }
            var set = this.cache.get(identifier);
            if (set.indexOf(node) !== -1)
                throw fail$1("Already registered");
            set.push(node);
            if (lastCacheUpdate) {
                this.updateLastCacheModificationPerId(identifier);
            }
        }
    };
    IdentifierCache.prototype.mergeCache = function (node) {
        var _this = this;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.values)(node.identifierCache.cache).forEach(function (nodes) {
            return nodes.forEach(function (child) {
                _this.addNodeToCache(child);
            });
        });
    };
    IdentifierCache.prototype.notifyDied = function (node) {
        if (node.identifierAttribute) {
            var id = node.identifier;
            var set = this.cache.get(id);
            if (set) {
                set.remove(node);
                // remove empty sets from cache
                if (!set.length) {
                    this.cache.delete(id);
                }
                this.updateLastCacheModificationPerId(node.identifier);
            }
        }
    };
    IdentifierCache.prototype.splitCache = function (node) {
        var _this = this;
        var res = new IdentifierCache();
        var basePath = node.path;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.entries)(this.cache).forEach(function (_a) {
            var _b = __read(_a, 2), id = _b[0], nodes = _b[1];
            var modified = false;
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].path.indexOf(basePath) === 0) {
                    res.addNodeToCache(nodes[i], false); // no need to update lastUpdated since it is a whole new cache
                    nodes.splice(i, 1);
                    modified = true;
                }
            }
            if (modified) {
                _this.updateLastCacheModificationPerId(id);
            }
        });
        return res;
    };
    IdentifierCache.prototype.has = function (type, identifier) {
        var set = this.cache.get(identifier);
        if (!set)
            return false;
        return set.some(function (candidate) { return type.isAssignableFrom(candidate.type); });
    };
    IdentifierCache.prototype.resolve = function (type, identifier) {
        var set = this.cache.get(identifier);
        if (!set)
            return null;
        var matches = set.filter(function (candidate) { return type.isAssignableFrom(candidate.type); });
        switch (matches.length) {
            case 0:
                return null;
            case 1:
                return matches[0];
            default:
                throw fail$1("Cannot resolve a reference to type '" + type.name + "' with id: '" + identifier + "' unambigously, there are multiple candidates: " + matches
                    .map(function (n) { return n.path; })
                    .join(", "));
        }
    };
    return IdentifierCache;
}());

/**
 * @internal
 * @hidden
 */
function createObjectNode(type, parent, subpath, environment, initialValue) {
    var existingNode = getStateTreeNodeSafe(initialValue);
    if (existingNode) {
        if (existingNode.parent) {
            // istanbul ignore next
            throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + (parent ? parent.path : "") + "/" + subpath + "', but it lives already at '" + existingNode.path + "'");
        }
        if (parent) {
            existingNode.setParent(parent, subpath);
        }
        // else it already has no parent since it is a pre-requisite
        return existingNode;
    }
    // not a node, a snapshot
    return new ObjectNode(type, parent, subpath, environment, initialValue);
}
/**
 * @internal
 * @hidden
 */
function createScalarNode(type, parent, subpath, environment, initialValue) {
    return new ScalarNode(type, parent, subpath, environment, initialValue);
}
/**
 * @internal
 * @hidden
 */
function isNode(value) {
    return value instanceof ScalarNode || value instanceof ObjectNode;
}

/**
 * @internal
 * @hidden
 */
var NodeLifeCycle;
(function (NodeLifeCycle) {
    NodeLifeCycle[NodeLifeCycle["INITIALIZING"] = 0] = "INITIALIZING";
    NodeLifeCycle[NodeLifeCycle["CREATED"] = 1] = "CREATED";
    NodeLifeCycle[NodeLifeCycle["FINALIZED"] = 2] = "FINALIZED";
    NodeLifeCycle[NodeLifeCycle["DETACHING"] = 3] = "DETACHING";
    NodeLifeCycle[NodeLifeCycle["DEAD"] = 4] = "DEAD"; // no coming back from this one
})(NodeLifeCycle || (NodeLifeCycle = {}));
/**
 * Returns true if the given value is a node in a state tree.
 * More precisely, that is, if the value is an instance of a
 * `types.model`, `types.array` or `types.map`.
 *
 * @param value
 * @returns true if the value is a state tree node.
 */
function isStateTreeNode(value) {
    return !!(value && value.$treenode);
}
/**
 * @internal
 * @hidden
 */
function assertIsStateTreeNode(value, argNumber) {
    assertArg(value, isStateTreeNode, "mobx-state-tree node", argNumber);
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNode(value) {
    if (!isStateTreeNode(value)) {
        // istanbul ignore next
        throw fail$1("Value " + value + " is no MST Node");
    }
    return value.$treenode;
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNodeSafe(value) {
    return (value && value.$treenode) || null;
}
/**
 * @internal
 * @hidden
 */
function toJSON() {
    return getStateTreeNode(this).snapshot;
}
var doubleDot = function (_) { return ".."; };
/**
 * @internal
 * @hidden
 */
function getRelativePathBetweenNodes(base, target) {
    // PRE condition target is (a child of) base!
    if (base.root !== target.root) {
        throw fail$1("Cannot calculate relative path: objects '" + base + "' and '" + target + "' are not part of the same object tree");
    }
    var baseParts = splitJsonPath(base.path);
    var targetParts = splitJsonPath(target.path);
    var common = 0;
    for (; common < baseParts.length; common++) {
        if (baseParts[common] !== targetParts[common])
            break;
    }
    // TODO: assert that no targetParts paths are "..", "." or ""!
    return (baseParts.slice(common).map(doubleDot).join("/") + joinJsonPath(targetParts.slice(common)));
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPath(base, path, failIfResolveFails) {
    if (failIfResolveFails === void 0) { failIfResolveFails = true; }
    return resolveNodeByPathParts(base, splitJsonPath(path), failIfResolveFails);
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPathParts(base, pathParts, failIfResolveFails) {
    if (failIfResolveFails === void 0) { failIfResolveFails = true; }
    var current = base;
    for (var i = 0; i < pathParts.length; i++) {
        var part = pathParts[i];
        if (part === "..") {
            current = current.parent;
            if (current)
                continue; // not everything has a parent
        }
        else if (part === ".") {
            continue;
        }
        else if (current) {
            if (current instanceof ScalarNode) {
                // check if the value of a scalar resolves to a state tree node (e.g. references)
                // then we can continue resolving...
                try {
                    var value = current.value;
                    if (isStateTreeNode(value)) {
                        current = getStateTreeNode(value);
                        // fall through
                    }
                }
                catch (e) {
                    if (!failIfResolveFails) {
                        return undefined;
                    }
                    throw e;
                }
            }
            if (current instanceof ObjectNode) {
                var subType = current.getChildType(part);
                if (subType) {
                    current = current.getChildNode(part);
                    if (current)
                        continue;
                }
            }
        }
        if (failIfResolveFails)
            throw fail$1("Could not resolve '" + part + "' in path '" + (joinJsonPath(pathParts.slice(0, i)) || "/") + "' while resolving '" + joinJsonPath(pathParts) + "'");
        else
            return undefined;
    }
    return current;
}
/**
 * @internal
 * @hidden
 */
function convertChildNodesToArray(childNodes) {
    if (!childNodes)
        return EMPTY_ARRAY;
    var keys = Object.keys(childNodes);
    if (!keys.length)
        return EMPTY_ARRAY;
    var result = new Array(keys.length);
    keys.forEach(function (key, index) {
        result[index] = childNodes[key];
    });
    return result;
}

// based on: https://github.com/mobxjs/mobx-utils/blob/master/src/async-action.ts
/*
    All contents of this file are deprecated.

    The term `process` has been replaced with `flow` to avoid conflicts with the
    global `process` object.

    Refer to `flow.ts` for any further changes to this implementation.
*/
var DEPRECATION_MESSAGE = "See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information. " +
    "Note that the middleware event types starting with `process` now start with `flow`.";
/**
 * @hidden
 *
 * @deprecated has been renamed to `flow()`.
 * See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information.
 * Note that the middleware event types starting with `process` now start with `flow`.
 *
 * @returns {Promise}
 */
function process$1(asyncAction) {
    deprecated("process", "`process()` has been renamed to `flow()`. " + DEPRECATION_MESSAGE);
    return flow(asyncAction);
}

/**
 * @internal
 * @hidden
 */
var EMPTY_ARRAY = Object.freeze([]);
/**
 * @internal
 * @hidden
 */
var EMPTY_OBJECT = Object.freeze({});
/**
 * @internal
 * @hidden
 */
var mobxShallow = typeof mobx__WEBPACK_IMPORTED_MODULE_0__.$mobx === "string" ? { deep: false } : { deep: false, proxy: false };
Object.freeze(mobxShallow);
/**
 * @internal
 * @hidden
 */
function fail$1(message) {
    if (message === void 0) { message = "Illegal state"; }
    return new Error("[mobx-state-tree] " + message);
}
/**
 * @internal
 * @hidden
 */
function identity(_) {
    return _;
}
/**
 * pollyfill (for IE) suggested in MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @internal
 * @hidden
 */
var isInteger = Number.isInteger ||
    function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
/**
 * @internal
 * @hidden
 */
function isArray(val) {
    return Array.isArray(val) || (0,mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableArray)(val);
}
/**
 * @internal
 * @hidden
 */
function asArray(val) {
    if (!val)
        return EMPTY_ARRAY;
    if (isArray(val))
        return val;
    return [val];
}
/**
 * @internal
 * @hidden
 */
function extend(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < b.length; i++) {
        var current = b[i];
        for (var key in current)
            a[key] = current[key];
    }
    return a;
}
/**
 * @internal
 * @hidden
 */
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
/**
 * @internal
 * @hidden
 */
function isMutable(value) {
    return (value !== null &&
        typeof value === "object" &&
        !(value instanceof Date) &&
        !(value instanceof RegExp));
}
/**
 * @internal
 * @hidden
 */
function isPrimitive(value, includeDate) {
    if (includeDate === void 0) { includeDate = true; }
    if (value === null || value === undefined)
        return true;
    if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        (includeDate && value instanceof Date))
        return true;
    return false;
}
/**
 * @internal
 * @hidden
 * Freeze a value and return it (if not in production)
 */
function freeze(value) {
    if (!devMode())
        return value;
    return isPrimitive(value) || (0,mobx__WEBPACK_IMPORTED_MODULE_0__.isObservableArray)(value) ? value : Object.freeze(value);
}
/**
 * @internal
 * @hidden
 * Recursively freeze a value (if not in production)
 */
function deepFreeze(value) {
    if (!devMode())
        return value;
    freeze(value);
    if (isPlainObject(value)) {
        Object.keys(value).forEach(function (propKey) {
            if (!isPrimitive(value[propKey]) &&
                !Object.isFrozen(value[propKey])) {
                deepFreeze(value[propKey]);
            }
        });
    }
    return value;
}
/**
 * @internal
 * @hidden
 */
function isSerializable(value) {
    return typeof value !== "function";
}
/**
 * @internal
 * @hidden
 */
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
/**
 * @internal
 * @hidden
 */
function addHiddenWritableProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
/**
 * @internal
 * @hidden
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.handlers = [];
    }
    Object.defineProperty(EventHandler.prototype, "hasSubscribers", {
        get: function () {
            return this.handlers.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    EventHandler.prototype.register = function (fn, atTheBeginning) {
        var _this = this;
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (atTheBeginning) {
            this.handlers.unshift(fn);
        }
        else {
            this.handlers.push(fn);
        }
        return function () {
            _this.unregister(fn);
        };
    };
    EventHandler.prototype.has = function (fn) {
        return this.handlers.indexOf(fn) >= 0;
    };
    EventHandler.prototype.unregister = function (fn) {
        var index = this.handlers.indexOf(fn);
        if (index >= 0) {
            this.handlers.splice(index, 1);
        }
    };
    EventHandler.prototype.clear = function () {
        this.handlers.length = 0;
    };
    EventHandler.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // make a copy just in case it changes
        var handlers = this.handlers.slice();
        handlers.forEach(function (f) { return f.apply(void 0, __spread(args)); });
    };
    return EventHandler;
}());
/**
 * @internal
 * @hidden
 */
var EventHandlers = /** @class */ (function () {
    function EventHandlers() {
    }
    EventHandlers.prototype.hasSubscribers = function (event) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.hasSubscribers;
    };
    EventHandlers.prototype.register = function (event, fn, atTheBeginning) {
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (!this.eventHandlers) {
            this.eventHandlers = {};
        }
        var handler = this.eventHandlers[event];
        if (!handler) {
            handler = this.eventHandlers[event] = new EventHandler();
        }
        return handler.register(fn, atTheBeginning);
    };
    EventHandlers.prototype.has = function (event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.has(fn);
    };
    EventHandlers.prototype.unregister = function (event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
            handler.unregister(fn);
        }
    };
    EventHandlers.prototype.clear = function (event) {
        if (this.eventHandlers) {
            delete this.eventHandlers[event];
        }
    };
    EventHandlers.prototype.clearAll = function () {
        this.eventHandlers = undefined;
    };
    EventHandlers.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
            (_a = handler).emit.apply(_a, __spread(args));
        }
    };
    return EventHandlers;
}());
/**
 * @internal
 * @hidden
 */
function argsToArray(args) {
    var res = new Array(args.length);
    for (var i = 0; i < args.length; i++)
        res[i] = args[i];
    return res;
}
/**
 * @internal
 * @hidden
 */
function invalidateComputed(target, propName) {
    var atom = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.getAtom)(target, propName);
    atom.trackAndCompute();
}
/**
 * @internal
 * @hidden
 */
function stringStartsWith(str, beginning) {
    return str.indexOf(beginning) === 0;
}
/**
 * @internal
 * @hidden
 */
var deprecated = function (id, message) {
    // skip if running production
    if (!devMode())
        return;
    // warn if hasn't been warned before
    if (deprecated.ids && !deprecated.ids.hasOwnProperty(id)) {
        warnError("Deprecation warning: " + message);
    }
    // mark as warned to avoid duplicate warn message
    if (deprecated.ids)
        deprecated.ids[id] = true;
};
deprecated.ids = {};
/**
 * @internal
 * @hidden
 */
function warnError(msg) {
    console.warn(new Error("[mobx-state-tree] " + msg));
}
/**
 * @internal
 * @hidden
 */
function isTypeCheckingEnabled() {
    return (devMode() ||
        (typeof process !== "undefined" && ({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_WORKSPACE_ROOT":"/Users/nicholasrq/Git/label-studio/web","NX_TERMINAL_OUTPUT_PATH":"/Users/nicholasrq/Git/label-studio/web/.nx/cache/terminalOutputs/14850373422174103297","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"labelstudio","NX_TASK_TARGET_TARGET":"build","NX_TASK_TARGET_CONFIGURATION":"development","NX_TASK_HASH":"14850373422174103297"}) && ({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_WORKSPACE_ROOT":"/Users/nicholasrq/Git/label-studio/web","NX_TERMINAL_OUTPUT_PATH":"/Users/nicholasrq/Git/label-studio/web/.nx/cache/terminalOutputs/14850373422174103297","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"labelstudio","NX_TASK_TARGET_TARGET":"build","NX_TASK_TARGET_CONFIGURATION":"development","NX_TASK_HASH":"14850373422174103297"}).ENABLE_TYPE_CHECK === "true"));
}
/**
 * @internal
 * @hidden
 */
function devMode() {
    return "development" !== "production";
}
/**
 * @internal
 * @hidden
 */
function assertArg(value, fn, typeName, argNumber) {
    if (devMode()) {
        if (!fn(value)) {
            // istanbul ignore next
            throw fail$1("expected " + typeName + " as argument " + asArray(argNumber).join(" or ") + ", got " + value + " instead");
        }
    }
}
/**
 * @internal
 * @hidden
 */
function assertIsFunction(value, argNumber) {
    assertArg(value, function (fn) { return typeof fn === "function"; }, "function", argNumber);
}
/**
 * @internal
 * @hidden
 */
function assertIsNumber(value, argNumber, min, max) {
    assertArg(value, function (n) { return typeof n === "number"; }, "number", argNumber);
    if (min !== undefined) {
        assertArg(value, function (n) { return n >= min; }, "number greater than " + min, argNumber);
    }
    if (max !== undefined) {
        assertArg(value, function (n) { return n <= max; }, "number lesser than " + max, argNumber);
    }
}
/**
 * @internal
 * @hidden
 */
function assertIsString(value, argNumber, canBeEmpty) {
    if (canBeEmpty === void 0) { canBeEmpty = true; }
    assertArg(value, function (s) { return typeof s === "string"; }, "string", argNumber);
    if (!canBeEmpty) {
        assertArg(value, function (s) { return s !== ""; }, "not empty string", argNumber);
    }
}
/**
 * @internal
 * @hidden
 */
function setImmediateWithFallback(fn) {
    if (typeof queueMicrotask === "function") {
        queueMicrotask(fn);
    }
    else if (typeof setImmediate === "function") {
        setImmediate(fn);
    }
    else {
        setTimeout(fn, 1);
    }
}

/**
 * See [asynchronous actions](concepts/async-actions.md).
 *
 * @returns The flow as a promise.
 */
function flow(generator) {
    return createFlowSpawner(generator.name, generator);
}
/**
 * @deprecated Not needed since TS3.6.
 * Used for TypeScript to make flows that return a promise return the actual promise result.
 *
 * @param val
 * @returns
 */
function castFlowReturn(val) {
    return val;
}
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise-returning function to a generator-returning one.
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 * const getDataGen = toGeneratorFunction(getDataAsync);
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* getDataGen("input value");
 *     ...
 *   })
 * }))
 * ```
 */
function toGeneratorFunction(p) {
    return function () {
        var _i;
        var args = [];
        for (_i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p.apply(void 0, __spread(args))];
                case 1: return [2 /*return*/, (_a.sent())];
            }
        });
    };
}
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise to a generator yielding that promise
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* toGenerator(getDataAsync("input value"));
 *     ...
 *   })
 * }))
 * ```
 */
function toGenerator(p) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, p];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    });
}
/**
 * @internal
 * @hidden
 */
function createFlowSpawner(name, generator) {
    var spawner = function flowSpawner() {
        // Implementation based on https://github.com/tj/co/blob/master/index.js
        var runId = getNextActionId();
        var parentContext = getCurrentActionContext();
        if (!parentContext) {
            throw fail$1("a mst flow must always have a parent context");
        }
        var parentActionContext = getParentActionContext(parentContext);
        if (!parentActionContext) {
            throw fail$1("a mst flow must always have a parent action context");
        }
        var contextBase = {
            name: name,
            id: runId,
            tree: parentContext.tree,
            context: parentContext.context,
            parentId: parentContext.id,
            allParentIds: __spread(parentContext.allParentIds, [parentContext.id]),
            rootId: parentContext.rootId,
            parentEvent: parentContext,
            parentActionEvent: parentActionContext
        };
        var args = arguments;
        function wrap(fn, type, arg) {
            fn.$mst_middleware = spawner.$mst_middleware; // pick up any middleware attached to the flow
            runWithActionContext(__assign(__assign({}, contextBase), { type: type, args: [arg] }), fn);
        }
        return new Promise(function (resolve, reject) {
            var gen;
            var init = function asyncActionInit() {
                gen = generator.apply(null, arguments);
                onFulfilled(undefined); // kick off the flow
            };
            init.$mst_middleware = spawner.$mst_middleware;
            runWithActionContext(__assign(__assign({}, contextBase), { type: "flow_spawn", args: argsToArray(args) }), init);
            function onFulfilled(res) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.next(r); }, "flow_resume", res);
                }
                catch (e) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return;
                }
                next(ret);
                return;
            }
            function onRejected(err) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.throw(r); }, "flow_resume_error", err); // or yieldError?
                }
                catch (e) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return;
                }
                next(ret);
            }
            function next(ret) {
                if (ret.done) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { resolve(r); }, "flow_return", ret.value);
                    });
                    return;
                }
                // TODO: support more type of values? See https://github.com/tj/co/blob/249bbdc72da24ae44076afd716349d2089b31c4c/index.js#L100
                if (!ret.value || typeof ret.value.then !== "function") {
                    // istanbul ignore next
                    throw fail$1("Only promises can be yielded to `async`, got: " + ret);
                }
                return ret.value.then(onFulfilled, onRejected);
            }
        });
    };
    return spawner;
}

/**
 * @internal
 * @hidden
 */
function splitPatch(patch) {
    if (!("oldValue" in patch))
        throw fail$1("Patches without `oldValue` field cannot be inversed");
    return [stripPatch(patch), invertPatch(patch)];
}
/**
 * @internal
 * @hidden
 */
function stripPatch(patch) {
    // strips `oldvalue` information from the patch, so that it becomes a patch conform the json-patch spec
    // this removes the ability to undo the patch
    switch (patch.op) {
        case "add":
            return { op: "add", path: patch.path, value: patch.value };
        case "remove":
            return { op: "remove", path: patch.path };
        case "replace":
            return { op: "replace", path: patch.path, value: patch.value };
    }
}
function invertPatch(patch) {
    switch (patch.op) {
        case "add":
            return {
                op: "remove",
                path: patch.path
            };
        case "remove":
            return {
                op: "add",
                path: patch.path,
                value: patch.oldValue
            };
        case "replace":
            return {
                op: "replace",
                path: patch.path,
                value: patch.oldValue
            };
    }
}
/**
 * Simple simple check to check it is a number.
 */
function isNumber(x) {
    return typeof x === "number";
}
/**
 * Escape slashes and backslashes.
 *
 * http://tools.ietf.org/html/rfc6901
 */
function escapeJsonPath(path) {
    if (isNumber(path) === true) {
        return "" + path;
    }
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
        return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
 * Unescape slashes and backslashes.
 */
function unescapeJsonPath(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
/**
 * Generates a json-path compliant json path from path parts.
 *
 * @param path
 * @returns
 */
function joinJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    if (path.length === 0)
        return "";
    var getPathStr = function (p) { return p.map(escapeJsonPath).join("/"); };
    if (path[0] === "." || path[0] === "..") {
        // relative
        return getPathStr(path);
    }
    else {
        // absolute
        return "/" + getPathStr(path);
    }
}
/**
 * Splits and decodes a json path into several parts.
 *
 * @param path
 * @returns
 */
function splitJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    var parts = path.split("/").map(unescapeJsonPath);
    var valid = path === "" ||
        path === "." ||
        path === ".." ||
        stringStartsWith(path, "/") ||
        stringStartsWith(path, "./") ||
        stringStartsWith(path, "../");
    if (!valid) {
        throw fail$1("a json path must be either rooted, empty or relative, but got '" + path + "'");
    }
    // '/a/b/c' -> ["a", "b", "c"]
    // '../../b/c' -> ["..", "..", "b", "c"]
    // '' -> []
    // '/' -> ['']
    // './a' -> [".", "a"]
    // /./a' -> [".", "a"] equivalent to './a'
    if (parts[0] === "") {
        parts.shift();
    }
    return parts;
}

var SnapshotProcessor = /** @class */ (function (_super) {
    __extends(SnapshotProcessor, _super);
    function SnapshotProcessor(_subtype, _processors, name) {
        var _this = _super.call(this, name || _subtype.name) || this;
        _this._subtype = _subtype;
        _this._processors = _processors;
        return _this;
    }
    Object.defineProperty(SnapshotProcessor.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.SnapshotProcessor;
        },
        enumerable: false,
        configurable: true
    });
    SnapshotProcessor.prototype.describe = function () {
        return "snapshotProcessor(" + this._subtype.describe() + ")";
    };
    SnapshotProcessor.prototype.preProcessSnapshot = function (sn) {
        if (this._processors.preProcessor) {
            return this._processors.preProcessor.call(null, sn);
        }
        return sn;
    };
    SnapshotProcessor.prototype.postProcessSnapshot = function (sn) {
        if (this._processors.postProcessor) {
            return this._processors.postProcessor.call(null, sn);
        }
        return sn;
    };
    SnapshotProcessor.prototype._fixNode = function (node) {
        var _this = this;
        // the node has to use these methods rather than the original type ones
        proxyNodeTypeMethods(node.type, this, "isAssignableFrom", "create");
        var oldGetSnapshot = node.getSnapshot;
        node.getSnapshot = function () {
            return _this.postProcessSnapshot(oldGetSnapshot.call(node));
        };
    };
    SnapshotProcessor.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var processedInitialValue = isStateTreeNode(initialValue)
            ? initialValue
            : this.preProcessSnapshot(initialValue);
        var node = this._subtype.instantiate(parent, subpath, environment, processedInitialValue);
        this._fixNode(node);
        return node;
    };
    SnapshotProcessor.prototype.reconcile = function (current, newValue, parent, subpath) {
        var node = this._subtype.reconcile(current, isStateTreeNode(newValue) ? newValue : this.preProcessSnapshot(newValue), parent, subpath);
        if (node !== current) {
            this._fixNode(node);
        }
        return node;
    };
    SnapshotProcessor.prototype.getSnapshot = function (node, applyPostProcess) {
        if (applyPostProcess === void 0) { applyPostProcess = true; }
        var sn = this._subtype.getSnapshot(node);
        return applyPostProcess ? this.postProcessSnapshot(sn) : sn;
    };
    SnapshotProcessor.prototype.isValidSnapshot = function (value, context) {
        var processedSn = this.preProcessSnapshot(value);
        return this._subtype.validate(processedSn, context);
    };
    SnapshotProcessor.prototype.getSubTypes = function () {
        return this._subtype;
    };
    SnapshotProcessor.prototype.is = function (thing) {
        var value = isType(thing)
            ? this._subtype
            : isStateTreeNode(thing)
                ? getSnapshot(thing, false)
                : this.preProcessSnapshot(thing);
        return this._subtype.validate(value, [{ path: "", type: this._subtype }]).length === 0;
    };
    return SnapshotProcessor;
}(BaseType));
function proxyNodeTypeMethods(nodeType, snapshotProcessorType) {
    var e_1, _a;
    var methods = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        methods[_i - 2] = arguments[_i];
    }
    try {
        for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
            var method = methods_1_1.value;
            nodeType[method] = snapshotProcessorType[method].bind(snapshotProcessorType);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (methods_1_1 && !methods_1_1.done && (_a = methods_1.return)) _a.call(methods_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * `types.snapshotProcessor` - Runs a pre/post snapshot processor before/after serializing a given type.
 *
 * Example:
 * ```ts
 * const Todo1 = types.model({ text: types.string })
 * // in the backend the text type must be null when empty
 * interface BackendTodo {
 *     text: string | null
 * }
 * const Todo2 = types.snapshotProcessor(Todo1, {
 *     // from snapshot to instance
 *     preProcessor(sn: BackendTodo) {
 *         return {
 *             text: sn.text || "";
 *         }
 *     },
 *     // from instance to snapshot
 *     postProcessor(sn): BackendTodo {
 *         return {
 *             text: !sn.text ? null : sn.text
 *         }
 *     }
 * })
 * ```
 *
 * @param type Type to run the processors over.
 * @param processors Processors to run.
 * @param name Type name, or undefined to inherit the inner type one.
 * @returns
 */
function snapshotProcessor(type, processors, name) {
    assertIsType(type, 1);
    if (devMode()) {
        if (processors.postProcessor && typeof processors.postProcessor !== "function") {
            // istanbul ignore next
            throw fail("postSnapshotProcessor must be a function");
        }
        if (processors.preProcessor && typeof processors.preProcessor !== "function") {
            // istanbul ignore next
            throw fail("preSnapshotProcessor must be a function");
        }
    }
    return new SnapshotProcessor(type, processors, name);
}

var needsIdentifierError = "Map.put can only be used to store complex values that have an identifier type attribute";
function tryCollectModelTypes(type, modelTypes) {
    var e_1, _a;
    var subtypes = type.getSubTypes();
    if (subtypes === cannotDetermineSubtype) {
        return false;
    }
    if (subtypes) {
        var subtypesArray = asArray(subtypes);
        try {
            for (var subtypesArray_1 = __values(subtypesArray), subtypesArray_1_1 = subtypesArray_1.next(); !subtypesArray_1_1.done; subtypesArray_1_1 = subtypesArray_1.next()) {
                var subtype = subtypesArray_1_1.value;
                if (!tryCollectModelTypes(subtype, modelTypes))
                    return false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subtypesArray_1_1 && !subtypesArray_1_1.done && (_a = subtypesArray_1.return)) _a.call(subtypesArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    if (type instanceof ModelType) {
        modelTypes.push(type);
    }
    return true;
}
/**
 * @internal
 * @hidden
 */
var MapIdentifierMode;
(function (MapIdentifierMode) {
    MapIdentifierMode[MapIdentifierMode["UNKNOWN"] = 0] = "UNKNOWN";
    MapIdentifierMode[MapIdentifierMode["YES"] = 1] = "YES";
    MapIdentifierMode[MapIdentifierMode["NO"] = 2] = "NO";
})(MapIdentifierMode || (MapIdentifierMode = {}));
var MSTMap = /** @class */ (function (_super) {
    __extends(MSTMap, _super);
    function MSTMap(initialData) {
        return _super.call(this, initialData, mobx__WEBPACK_IMPORTED_MODULE_0__.observable.ref.enhancer) || this;
    }
    MSTMap.prototype.get = function (key) {
        // maybe this is over-enthousiastic? normalize numeric keys to strings
        return _super.prototype.get.call(this, "" + key);
    };
    MSTMap.prototype.has = function (key) {
        return _super.prototype.has.call(this, "" + key);
    };
    MSTMap.prototype.delete = function (key) {
        return _super.prototype.delete.call(this, "" + key);
    };
    MSTMap.prototype.set = function (key, value) {
        return _super.prototype.set.call(this, "" + key, value);
    };
    MSTMap.prototype.put = function (value) {
        if (!value)
            throw fail$1("Map.put cannot be used to set empty values");
        if (isStateTreeNode(value)) {
            var node = getStateTreeNode(value);
            if (devMode()) {
                if (!node.identifierAttribute) {
                    throw fail$1(needsIdentifierError);
                }
            }
            if (node.identifier === null) {
                throw fail$1(needsIdentifierError);
            }
            this.set(node.identifier, value);
            return value;
        }
        else if (!isMutable(value)) {
            throw fail$1("Map.put can only be used to store complex values");
        }
        else {
            var mapNode = getStateTreeNode(this);
            var mapType = mapNode.type;
            if (mapType.identifierMode !== MapIdentifierMode.YES) {
                throw fail$1(needsIdentifierError);
            }
            var idAttr = mapType.mapIdentifierAttribute;
            var id = value[idAttr];
            if (!isValidIdentifier(id)) {
                // try again but this time after creating a node for the value
                // since it might be an optional identifier
                var newNode = this.put(mapType.getChildType().create(value, mapNode.environment));
                return this.put(getSnapshot(newNode));
            }
            var key = normalizeIdentifier(id);
            this.set(key, value);
            return this.get(key);
        }
    };
    return MSTMap;
}(mobx__WEBPACK_IMPORTED_MODULE_0__.ObservableMap));
/**
 * @internal
 * @hidden
 */
var MapType = /** @class */ (function (_super) {
    __extends(MapType, _super);
    function MapType(name, _subType, hookInitializers) {
        if (hookInitializers === void 0) { hookInitializers = []; }
        var _this = _super.call(this, name) || this;
        _this._subType = _subType;
        _this.identifierMode = MapIdentifierMode.UNKNOWN;
        _this.mapIdentifierAttribute = undefined;
        _this.flags = TypeFlags.Map;
        _this.hookInitializers = [];
        _this._determineIdentifierMode();
        _this.hookInitializers = hookInitializers;
        return _this;
    }
    MapType.prototype.hooks = function (hooks) {
        var hookInitializers = this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks];
        return new MapType(this.name, this._subType, hookInitializers);
    };
    MapType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        this._determineIdentifierMode();
        return createObjectNode(this, parent, subpath, environment, initialValue);
    };
    MapType.prototype._determineIdentifierMode = function () {
        if (this.identifierMode !== MapIdentifierMode.UNKNOWN) {
            return;
        }
        var modelTypes = [];
        if (tryCollectModelTypes(this._subType, modelTypes)) {
            var identifierAttribute_1 = undefined;
            modelTypes.forEach(function (type) {
                if (type.identifierAttribute) {
                    if (identifierAttribute_1 && identifierAttribute_1 !== type.identifierAttribute) {
                        throw fail$1("The objects in a map should all have the same identifier attribute, expected '" + identifierAttribute_1 + "', but child of type '" + type.name + "' declared attribute '" + type.identifierAttribute + "' as identifier");
                    }
                    identifierAttribute_1 = type.identifierAttribute;
                }
            });
            if (identifierAttribute_1) {
                this.identifierMode = MapIdentifierMode.YES;
                this.mapIdentifierAttribute = identifierAttribute_1;
            }
            else {
                this.identifierMode = MapIdentifierMode.NO;
            }
        }
    };
    MapType.prototype.initializeChildNodes = function (objNode, initialSnapshot) {
        if (initialSnapshot === void 0) { initialSnapshot = {}; }
        var subType = objNode.type._subType;
        var result = {};
        Object.keys(initialSnapshot).forEach(function (name) {
            result[name] = subType.instantiate(objNode, name, undefined, initialSnapshot[name]);
        });
        return result;
    };
    MapType.prototype.createNewInstance = function (childNodes) {
        return new MSTMap(childNodes);
    };
    MapType.prototype.finalizeNewInstance = function (node, instance) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__._interceptReads)(instance, node.unbox);
        var type = node.type;
        type.hookInitializers.forEach(function (initializer) {
            var hooks = initializer(instance);
            Object.keys(hooks).forEach(function (name) {
                var hook = hooks[name];
                var actionInvoker = createActionInvoker(instance, name, hook);
                (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(instance, name, actionInvoker);
            });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.intercept)(instance, this.willChange);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observe)(instance, this.didChange);
    };
    MapType.prototype.describe = function () {
        return "Map<string, " + this._subType.describe() + ">";
    };
    MapType.prototype.getChildren = function (node) {
        // return (node.storedValue as ObservableMap<any>).values()
        return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.values)(node.storedValue);
    };
    MapType.prototype.getChildNode = function (node, key) {
        var childNode = node.storedValue.get("" + key);
        if (!childNode)
            throw fail$1("Not a child " + key);
        return childNode;
    };
    MapType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        var key = change.name;
        node.assertWritable({ subpath: key });
        var mapType = node.type;
        var subType = mapType._subType;
        switch (change.type) {
            case "update":
                {
                    var newValue = change.newValue;
                    var oldValue = change.object.get(key);
                    if (newValue === oldValue)
                        return null;
                    typecheckInternal(subType, newValue);
                    change.newValue = subType.reconcile(node.getChildNode(key), change.newValue, node, key);
                    mapType.processIdentifier(key, change.newValue);
                }
                break;
            case "add":
                {
                    typecheckInternal(subType, change.newValue);
                    change.newValue = subType.instantiate(node, key, undefined, change.newValue);
                    mapType.processIdentifier(key, change.newValue);
                }
                break;
        }
        return change;
    };
    MapType.prototype.processIdentifier = function (expected, node) {
        if (this.identifierMode === MapIdentifierMode.YES && node instanceof ObjectNode) {
            var identifier = node.identifier;
            if (identifier !== expected)
                throw fail$1("A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '" + identifier + "', but expected: '" + expected + "'");
        }
    };
    MapType.prototype.getSnapshot = function (node) {
        var res = {};
        node.getChildren().forEach(function (childNode) {
            res[childNode.subpath] = childNode.snapshot;
        });
        return res;
    };
    MapType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function (key) {
            processed[key] = childNodes[key].getSnapshot();
        });
        return processed;
    };
    MapType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "add":
                return void node.emitPatch({
                    op: "add",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: undefined
                }, node);
            case "delete":
                // a node got deleted, get the old snapshot and make the node die
                var oldSnapshot = change.oldValue.snapshot;
                change.oldValue.die();
                // emit the patch
                return void node.emitPatch({
                    op: "remove",
                    path: escapeJsonPath(change.name),
                    oldValue: oldSnapshot
                }, node);
        }
    };
    MapType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        switch (patch.op) {
            case "add":
            case "replace":
                target.set(subpath, patch.value);
                break;
            case "remove":
                target.delete(subpath);
                break;
        }
    };
    MapType.prototype.applySnapshot = function (node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        var currentKeys = {};
        Array.from(target.keys()).forEach(function (key) {
            currentKeys[key] = false;
        });
        if (snapshot) {
            // Don't use target.replace, as it will throw away all existing items first
            for (var key in snapshot) {
                target.set(key, snapshot[key]);
                currentKeys["" + key] = true;
            }
        }
        Object.keys(currentKeys).forEach(function (key) {
            if (currentKeys[key] === false)
                target.delete(key);
        });
    };
    MapType.prototype.getChildType = function () {
        return this._subType;
    };
    MapType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isPlainObject(value)) {
            return typeCheckFailure(context, value, "Value is not a plain object");
        }
        return flattenTypeErrors(Object.keys(value).map(function (path) {
            return _this._subType.validate(value[path], getContextForPath(context, path, _this._subType));
        }));
    };
    MapType.prototype.getDefaultSnapshot = function () {
        return EMPTY_OBJECT;
    };
    MapType.prototype.removeChild = function (node, subpath) {
        node.storedValue.delete(subpath);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], MapType.prototype, "applySnapshot", null);
    return MapType;
}(ComplexType));
/**
 * `types.map` - Creates a key based collection type who's children are all of a uniform declared type.
 * If the type stored in a map has an identifier, it is mandatory to store the child under that identifier in the map.
 *
 * This type will always produce [observable maps](https://mobx.js.org/refguide/map.html)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   id: types.identifier,
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.map(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: {} })
 * unprotect(s)
 * s.todos.set(17, { task: "Grab coffee", id: 17 })
 * s.todos.put({ task: "Grab cookie", id: 18 }) // put will infer key from the identifier
 * console.log(s.todos.get(17).task) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
function map(subtype) {
    return new MapType("map<string, " + subtype.name + ">", subtype);
}
/**
 * Returns if a given value represents a map type.
 *
 * @param type
 * @returns `true` if it is a map type.
 */
function isMapType(type) {
    return isType(type) && (type.flags & TypeFlags.Map) > 0;
}

/**
 * @internal
 * @hidden
 */
var ArrayType = /** @class */ (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, _subType, hookInitializers) {
        if (hookInitializers === void 0) { hookInitializers = []; }
        var _this = _super.call(this, name) || this;
        _this._subType = _subType;
        _this.flags = TypeFlags.Array;
        _this.hookInitializers = [];
        _this.hookInitializers = hookInitializers;
        return _this;
    }
    ArrayType.prototype.hooks = function (hooks) {
        var hookInitializers = this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks];
        return new ArrayType(this.name, this._subType, hookInitializers);
    };
    ArrayType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createObjectNode(this, parent, subpath, environment, initialValue);
    };
    ArrayType.prototype.initializeChildNodes = function (objNode, snapshot) {
        if (snapshot === void 0) { snapshot = []; }
        var subType = objNode.type._subType;
        var result = {};
        snapshot.forEach(function (item, index) {
            var subpath = "" + index;
            result[subpath] = subType.instantiate(objNode, subpath, undefined, item);
        });
        return result;
    };
    ArrayType.prototype.createNewInstance = function (childNodes) {
        return mobx__WEBPACK_IMPORTED_MODULE_0__.observable.array(convertChildNodesToArray(childNodes), mobxShallow);
    };
    ArrayType.prototype.finalizeNewInstance = function (node, instance) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__._getAdministration)(instance).dehancer = node.unbox;
        var type = node.type;
        type.hookInitializers.forEach(function (initializer) {
            var hooks = initializer(instance);
            Object.keys(hooks).forEach(function (name) {
                var hook = hooks[name];
                var actionInvoker = createActionInvoker(instance, name, hook);
                (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(instance, name, actionInvoker);
            });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.intercept)(instance, this.willChange);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observe)(instance, this.didChange);
    };
    ArrayType.prototype.describe = function () {
        return this._subType.describe() + "[]";
    };
    ArrayType.prototype.getChildren = function (node) {
        return node.storedValue.slice();
    };
    ArrayType.prototype.getChildNode = function (node, key) {
        var index = Number(key);
        if (index < node.storedValue.length)
            return node.storedValue[index];
        throw fail$1("Not a child: " + key);
    };
    ArrayType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable({ subpath: "" + change.index });
        var subType = node.type._subType;
        var childNodes = node.getChildren();
        switch (change.type) {
            case "update":
                {
                    if (change.newValue === change.object[change.index])
                        return null;
                    var updatedNodes = reconcileArrayChildren(node, subType, [childNodes[change.index]], [change.newValue], [change.index]);
                    if (!updatedNodes) {
                        return null;
                    }
                    change.newValue = updatedNodes[0];
                }
                break;
            case "splice":
                {
                    var index_1 = change.index, removedCount = change.removedCount, added = change.added;
                    var addedNodes = reconcileArrayChildren(node, subType, childNodes.slice(index_1, index_1 + removedCount), added, added.map(function (_, i) { return index_1 + i; }));
                    if (!addedNodes) {
                        return null;
                    }
                    change.added = addedNodes;
                    // update paths of remaining items
                    for (var i = index_1 + removedCount; i < childNodes.length; i++) {
                        childNodes[i].setParent(node, "" + (i + added.length - removedCount));
                    }
                }
                break;
        }
        return change;
    };
    ArrayType.prototype.getSnapshot = function (node) {
        return node.getChildren().map(function (childNode) { return childNode.snapshot; });
    };
    ArrayType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = [];
        Object.keys(childNodes).forEach(function (key) {
            processed.push(childNodes[key].getSnapshot());
        });
        return processed;
    };
    ArrayType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: "" + change.index,
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "splice":
                for (var i = change.removedCount - 1; i >= 0; i--)
                    node.emitPatch({
                        op: "remove",
                        path: "" + (change.index + i),
                        oldValue: change.removed[i].snapshot
                    }, node);
                for (var i = 0; i < change.addedCount; i++)
                    node.emitPatch({
                        op: "add",
                        path: "" + (change.index + i),
                        value: node.getChildNode("" + (change.index + i)).snapshot,
                        oldValue: undefined
                    }, node);
                return;
        }
    };
    ArrayType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        var index = subpath === "-" ? target.length : Number(subpath);
        switch (patch.op) {
            case "replace":
                target[index] = patch.value;
                break;
            case "add":
                target.splice(index, 0, patch.value);
                break;
            case "remove":
                target.splice(index, 1);
                break;
        }
    };
    ArrayType.prototype.applySnapshot = function (node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        target.replace(snapshot);
    };
    ArrayType.prototype.getChildType = function () {
        return this._subType;
    };
    ArrayType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isArray(value)) {
            return typeCheckFailure(context, value, "Value is not an array");
        }
        return flattenTypeErrors(value.map(function (item, index) {
            return _this._subType.validate(item, getContextForPath(context, "" + index, _this._subType));
        }));
    };
    ArrayType.prototype.getDefaultSnapshot = function () {
        return EMPTY_ARRAY;
    };
    ArrayType.prototype.removeChild = function (node, subpath) {
        node.storedValue.splice(Number(subpath), 1);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ArrayType.prototype, "applySnapshot", null);
    return ArrayType;
}(ComplexType));
/**
 * `types.array` - Creates an index based collection type who's children are all of a uniform declared type.
 *
 * This type will always produce [observable arrays](https://mobx.js.org/refguide/array.html)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: [] })
 * unprotect(s) // needed to allow modifying outside of an action
 * s.todos.push({ task: "Grab coffee" })
 * console.log(s.todos[0]) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
function array(subtype) {
    assertIsType(subtype, 1);
    return new ArrayType(subtype.name + "[]", subtype);
}
function reconcileArrayChildren(parent, childType, oldNodes, newValues, newPaths) {
    var nothingChanged = true;
    for (var i = 0;; i++) {
        var hasNewNode = i <= newValues.length - 1;
        var oldNode = oldNodes[i];
        var newValue = hasNewNode ? newValues[i] : undefined;
        var newPath = "" + newPaths[i];
        // for some reason, instead of newValue we got a node, fallback to the storedValue
        // TODO: https://github.com/mobxjs/mobx-state-tree/issues/340#issuecomment-325581681
        if (isNode(newValue))
            newValue = newValue.storedValue;
        if (!oldNode && !hasNewNode) {
            // both are empty, end
            break;
        }
        else if (!hasNewNode) {
            // new one does not exists
            nothingChanged = false;
            oldNodes.splice(i, 1);
            if (oldNode instanceof ObjectNode) {
                // since it is going to be returned by pop/splice/shift better create it before killing it
                // so it doesn't end up in an undead state
                oldNode.createObservableInstanceIfNeeded();
            }
            oldNode.die();
            i--;
        }
        else if (!oldNode) {
            // there is no old node, create it
            // check if already belongs to the same parent. if so, avoid pushing item in. only swapping can occur.
            if (isStateTreeNode(newValue) && getStateTreeNode(newValue).parent === parent) {
                // this node is owned by this parent, but not in the reconcilable set, so it must be double
                throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + parent.path + "/" + newPath + "', but it lives already at '" + getStateTreeNode(newValue).path + "'");
            }
            nothingChanged = false;
            var newNode = valueAsNode(childType, parent, newPath, newValue);
            oldNodes.splice(i, 0, newNode);
        }
        else if (areSame(oldNode, newValue)) {
            // both are the same, reconcile
            oldNodes[i] = valueAsNode(childType, parent, newPath, newValue, oldNode);
        }
        else {
            // nothing to do, try to reorder
            var oldMatch = undefined;
            // find a possible candidate to reuse
            for (var j = i; j < oldNodes.length; j++) {
                if (areSame(oldNodes[j], newValue)) {
                    oldMatch = oldNodes.splice(j, 1)[0];
                    break;
                }
            }
            nothingChanged = false;
            var newNode = valueAsNode(childType, parent, newPath, newValue, oldMatch);
            oldNodes.splice(i, 0, newNode);
        }
    }
    return nothingChanged ? null : oldNodes;
}
/**
 * Convert a value to a node at given parent and subpath. Attempts to reuse old node if possible and given.
 */
function valueAsNode(childType, parent, subpath, newValue, oldNode) {
    // ensure the value is valid-ish
    typecheckInternal(childType, newValue);
    function getNewNode() {
        // the new value has a MST node
        if (isStateTreeNode(newValue)) {
            var childNode = getStateTreeNode(newValue);
            childNode.assertAlive(EMPTY_OBJECT);
            // the node lives here
            if (childNode.parent !== null && childNode.parent === parent) {
                childNode.setParent(parent, subpath);
                return childNode;
            }
        }
        // there is old node and new one is a value/snapshot
        if (oldNode) {
            return childType.reconcile(oldNode, newValue, parent, subpath);
        }
        // nothing to do, create from scratch
        return childType.instantiate(parent, subpath, undefined, newValue);
    }
    var newNode = getNewNode();
    if (oldNode && oldNode !== newNode) {
        if (oldNode instanceof ObjectNode) {
            // since it is going to be returned by pop/splice/shift better create it before killing it
            // so it doesn't end up in an undead state
            oldNode.createObservableInstanceIfNeeded();
        }
        oldNode.die();
    }
    return newNode;
}
/**
 * Check if a node holds a value.
 */
function areSame(oldNode, newValue) {
    // never consider dead old nodes for reconciliation
    if (!oldNode.isAlive) {
        return false;
    }
    // the new value has the same node
    if (isStateTreeNode(newValue)) {
        var newNode = getStateTreeNode(newValue);
        return newNode.isAlive && newNode === oldNode;
    }
    // the provided value is the snapshot of the old node
    if (oldNode.snapshot === newValue) {
        return true;
    }
    // new value is a snapshot with the correct identifier
    return (oldNode instanceof ObjectNode &&
        oldNode.identifier !== null &&
        oldNode.identifierAttribute &&
        isPlainObject(newValue) &&
        oldNode.identifier === normalizeIdentifier(newValue[oldNode.identifierAttribute]) &&
        oldNode.type.is(newValue));
}
/**
 * Returns if a given value represents an array type.
 *
 * @param type
 * @returns `true` if the type is an array type.
 */
function isArrayType(type) {
    return isType(type) && (type.flags & TypeFlags.Array) > 0;
}

var PRE_PROCESS_SNAPSHOT = "preProcessSnapshot";
var POST_PROCESS_SNAPSHOT = "postProcessSnapshot";
function objectTypeToString() {
    return getStateTreeNode(this).toString();
}
var defaultObjectOptions = {
    name: "AnonymousModel",
    properties: {},
    initializers: EMPTY_ARRAY
};
function toPropertiesObject(declaredProps) {
    // loop through properties and ensures that all items are types
    return Object.keys(declaredProps).reduce(function (props, key) {
        var _a, _b, _c;
        // warn if user intended a HOOK
        if (key in Hook)
            throw fail$1("Hook '" + key + "' was defined as property. Hooks should be defined as part of the actions");
        // the user intended to use a view
        var descriptor = Object.getOwnPropertyDescriptor(props, key);
        if ("get" in descriptor) {
            throw fail$1("Getters are not supported as properties. Please use views instead");
        }
        // undefined and null are not valid
        var value = descriptor.value;
        if (value === null || value === undefined) {
            throw fail$1("The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?");
            // its a primitive, convert to its type
        }
        else if (isPrimitive(value)) {
            return Object.assign({}, props, (_a = {},
                _a[key] = optional(getPrimitiveFactoryFromValue(value), value),
                _a));
            // map defaults to empty object automatically for models
        }
        else if (value instanceof MapType) {
            return Object.assign({}, props, (_b = {},
                _b[key] = optional(value, {}),
                _b));
        }
        else if (value instanceof ArrayType) {
            return Object.assign({}, props, (_c = {}, _c[key] = optional(value, []), _c));
            // its already a type
        }
        else if (isType(value)) {
            return props;
            // its a function, maybe the user wanted a view?
        }
        else if (devMode() && typeof value === "function") {
            throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed a function. Did you forget to invoke it, or did you intend to declare a view / action?");
            // no other complex values
        }
        else if (devMode() && typeof value === "object") {
            throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed an object. Try passing another model type or a types.frozen.");
            // WTF did you pass in mate?
        }
        else {
            throw fail$1("Invalid type definition for property '" + key + "', cannot infer a type from a value like '" + value + "' (" + typeof value + ")");
        }
    }, declaredProps);
}
/**
 * @internal
 * @hidden
 */
var ModelType = /** @class */ (function (_super) {
    __extends(ModelType, _super);
    function ModelType(opts) {
        var _this = _super.call(this, opts.name || defaultObjectOptions.name) || this;
        _this.flags = TypeFlags.Object;
        _this.named = function (name) {
            return _this.cloneAndEnhance({ name: name });
        };
        _this.props = function (properties) {
            return _this.cloneAndEnhance({ properties: properties });
        };
        _this.preProcessSnapshot = function (preProcessor) {
            var currentPreprocessor = _this.preProcessor;
            if (!currentPreprocessor)
                return _this.cloneAndEnhance({ preProcessor: preProcessor });
            else
                return _this.cloneAndEnhance({
                    preProcessor: function (snapshot) { return currentPreprocessor(preProcessor(snapshot)); }
                });
        };
        _this.postProcessSnapshot = function (postProcessor) {
            var currentPostprocessor = _this.postProcessor;
            if (!currentPostprocessor)
                return _this.cloneAndEnhance({ postProcessor: postProcessor });
            else
                return _this.cloneAndEnhance({
                    postProcessor: function (snapshot) { return postProcessor(currentPostprocessor(snapshot)); }
                });
        };
        Object.assign(_this, defaultObjectOptions, opts);
        // ensures that any default value gets converted to its related type
        _this.properties = toPropertiesObject(_this.properties);
        freeze(_this.properties); // make sure nobody messes with it
        _this.propertyNames = Object.keys(_this.properties);
        _this.identifierAttribute = _this._getIdentifierAttribute();
        return _this;
    }
    ModelType.prototype._getIdentifierAttribute = function () {
        var identifierAttribute = undefined;
        this.forAllProps(function (propName, propType) {
            if (propType.flags & TypeFlags.Identifier) {
                if (identifierAttribute)
                    throw fail$1("Cannot define property '" + propName + "' as object identifier, property '" + identifierAttribute + "' is already defined as identifier property");
                identifierAttribute = propName;
            }
        });
        return identifierAttribute;
    };
    ModelType.prototype.cloneAndEnhance = function (opts) {
        return new ModelType({
            name: opts.name || this.name,
            properties: Object.assign({}, this.properties, opts.properties),
            initializers: this.initializers.concat(opts.initializers || []),
            preProcessor: opts.preProcessor || this.preProcessor,
            postProcessor: opts.postProcessor || this.postProcessor
        });
    };
    ModelType.prototype.actions = function (fn) {
        var _this = this;
        var actionInitializer = function (self) {
            _this.instantiateActions(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [actionInitializer] });
    };
    ModelType.prototype.instantiateActions = function (self, actions) {
        // check if return is correct
        if (!isPlainObject(actions))
            throw fail$1("actions initializer should return a plain object containing actions");
        // bind actions to the object created
        Object.keys(actions).forEach(function (name) {
            // warn if preprocessor was given
            if (name === PRE_PROCESS_SNAPSHOT)
                throw fail$1("Cannot define action '" + PRE_PROCESS_SNAPSHOT + "', it should be defined using 'type.preProcessSnapshot(fn)' instead");
            // warn if postprocessor was given
            if (name === POST_PROCESS_SNAPSHOT)
                throw fail$1("Cannot define action '" + POST_PROCESS_SNAPSHOT + "', it should be defined using 'type.postProcessSnapshot(fn)' instead");
            var action2 = actions[name];
            // apply hook composition
            var baseAction = self[name];
            if (name in Hook && baseAction) {
                var specializedAction_1 = action2;
                action2 = function () {
                    baseAction.apply(null, arguments);
                    specializedAction_1.apply(null, arguments);
                };
            }
            // the goal of this is to make sure actions using "this" can call themselves,
            // while still allowing the middlewares to register them
            var middlewares = action2.$mst_middleware; // make sure middlewares are not lost
            var boundAction = action2.bind(actions);
            boundAction.$mst_middleware = middlewares;
            var actionInvoker = createActionInvoker(self, name, boundAction);
            actions[name] = actionInvoker;
            (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(self, name, actionInvoker);
        });
    };
    ModelType.prototype.volatile = function (fn) {
        var _this = this;
        if (typeof fn !== "function") {
            throw fail$1("You passed an " + typeof fn + " to volatile state as an argument, when function is expected");
        }
        var stateInitializer = function (self) {
            _this.instantiateVolatileState(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [stateInitializer] });
    };
    ModelType.prototype.instantiateVolatileState = function (self, state) {
        // check views return
        if (!isPlainObject(state))
            throw fail$1("volatile state initializer should return a plain object containing state");
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.set)(self, state);
    };
    ModelType.prototype.extend = function (fn) {
        var _this = this;
        var initializer = function (self) {
            var _a = fn(self), actions = _a.actions, views = _a.views, state = _a.state, rest = __rest(_a, ["actions", "views", "state"]);
            for (var key in rest)
                throw fail$1("The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '" + key + "'");
            if (state)
                _this.instantiateVolatileState(self, state);
            if (views)
                _this.instantiateViews(self, views);
            if (actions)
                _this.instantiateActions(self, actions);
            return self;
        };
        return this.cloneAndEnhance({ initializers: [initializer] });
    };
    ModelType.prototype.views = function (fn) {
        var _this = this;
        var viewInitializer = function (self) {
            _this.instantiateViews(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [viewInitializer] });
    };
    ModelType.prototype.instantiateViews = function (self, views) {
        // check views return
        if (!isPlainObject(views))
            throw fail$1("views initializer should return a plain object containing views");
        Object.keys(views).forEach(function (key) {
            // is this a computed property?
            var descriptor = Object.getOwnPropertyDescriptor(views, key);
            if ("get" in descriptor) {
                if ((0,mobx__WEBPACK_IMPORTED_MODULE_0__.isComputedProp)(self, key)) {
                    var computedValue = (0,mobx__WEBPACK_IMPORTED_MODULE_0__._getAdministration)(self, key);
                    // TODO: mobx currently does not allow redefining computes yet, pending #1121
                    // FIXME: this binds to the internals of mobx!
                    computedValue.derivation = descriptor.get;
                    computedValue.scope = self;
                    if (descriptor.set)
                        computedValue.setter = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(computedValue.name + "-setter", descriptor.set);
                }
                else {
                    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.computed)(self, key, descriptor, true);
                }
            }
            else if (typeof descriptor.value === "function") {
                (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(self, key, descriptor.value);
            }
            else {
                throw fail$1("A view member should either be a function or getter based property");
            }
        });
    };
    ModelType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var value = isStateTreeNode(initialValue)
            ? initialValue
            : this.applySnapshotPreProcessor(initialValue);
        return createObjectNode(this, parent, subpath, environment, value);
        // Optimization: record all prop- view- and action names after first construction, and generate an optimal base class
        // that pre-reserves all these fields for fast object-member lookups
    };
    ModelType.prototype.initializeChildNodes = function (objNode, initialSnapshot) {
        if (initialSnapshot === void 0) { initialSnapshot = {}; }
        var type = objNode.type;
        var result = {};
        type.forAllProps(function (name, childType) {
            result[name] = childType.instantiate(objNode, name, undefined, initialSnapshot[name]);
        });
        return result;
    };
    ModelType.prototype.createNewInstance = function (childNodes) {
        return mobx__WEBPACK_IMPORTED_MODULE_0__.observable.object(childNodes, EMPTY_OBJECT, mobxShallow);
    };
    ModelType.prototype.finalizeNewInstance = function (node, instance) {
        addHiddenFinalProp(instance, "toString", objectTypeToString);
        this.forAllProps(function (name) {
            (0,mobx__WEBPACK_IMPORTED_MODULE_0__._interceptReads)(instance, name, node.unbox);
        });
        this.initializers.reduce(function (self, fn) { return fn(self); }, instance);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.intercept)(instance, this.willChange);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observe)(instance, this.didChange);
    };
    ModelType.prototype.willChange = function (chg) {
        // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
        var change = chg;
        var node = getStateTreeNode(change.object);
        var subpath = change.name;
        node.assertWritable({ subpath: subpath });
        var childType = node.type.properties[subpath];
        // only properties are typed, state are stored as-is references
        if (childType) {
            typecheckInternal(childType, change.newValue);
            change.newValue = childType.reconcile(node.getChildNode(subpath), change.newValue, node, subpath);
        }
        return change;
    };
    ModelType.prototype.didChange = function (chg) {
        // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
        var change = chg;
        var childNode = getStateTreeNode(change.object);
        var childType = childNode.type.properties[change.name];
        if (!childType) {
            // don't emit patches for volatile state
            return;
        }
        var oldChildValue = change.oldValue ? change.oldValue.snapshot : undefined;
        childNode.emitPatch({
            op: "replace",
            path: escapeJsonPath(change.name),
            value: change.newValue.snapshot,
            oldValue: oldChildValue
        }, childNode);
    };
    ModelType.prototype.getChildren = function (node) {
        var _this = this;
        var res = [];
        this.forAllProps(function (name) {
            res.push(_this.getChildNode(node, name));
        });
        return res;
    };
    ModelType.prototype.getChildNode = function (node, key) {
        if (!(key in this.properties))
            throw fail$1("Not a value property: " + key);
        var childNode = (0,mobx__WEBPACK_IMPORTED_MODULE_0__._getAdministration)(node.storedValue, key).value; // TODO: blegh!
        if (!childNode)
            throw fail$1("Node not available for property " + key);
        return childNode;
    };
    ModelType.prototype.getSnapshot = function (node, applyPostProcess) {
        var _this = this;
        if (applyPostProcess === void 0) { applyPostProcess = true; }
        var res = {};
        this.forAllProps(function (name, type) {
            (0,mobx__WEBPACK_IMPORTED_MODULE_0__.getAtom)(node.storedValue, name).reportObserved();
            res[name] = _this.getChildNode(node, name).snapshot;
        });
        if (applyPostProcess) {
            return this.applySnapshotPostProcessor(res);
        }
        return res;
    };
    ModelType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function (key) {
            processed[key] = childNodes[key].getSnapshot();
        });
        return this.applySnapshotPostProcessor(processed);
    };
    ModelType.prototype.applyPatchLocally = function (node, subpath, patch) {
        if (!(patch.op === "replace" || patch.op === "add")) {
            throw fail$1("object does not support operation " + patch.op);
        }
        node.storedValue[subpath] = patch.value;
    };
    ModelType.prototype.applySnapshot = function (node, snapshot) {
        var preProcessedSnapshot = this.applySnapshotPreProcessor(snapshot);
        typecheckInternal(this, preProcessedSnapshot);
        this.forAllProps(function (name) {
            node.storedValue[name] = preProcessedSnapshot[name];
        });
    };
    ModelType.prototype.applySnapshotPreProcessor = function (snapshot) {
        var processor = this.preProcessor;
        return processor ? processor.call(null, snapshot) : snapshot;
    };
    ModelType.prototype.applySnapshotPostProcessor = function (snapshot) {
        var postProcessor = this.postProcessor;
        if (postProcessor)
            return postProcessor.call(null, snapshot);
        return snapshot;
    };
    ModelType.prototype.getChildType = function (propertyName) {
        assertIsString(propertyName, 1);
        return this.properties[propertyName];
    };
    ModelType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        var snapshot = this.applySnapshotPreProcessor(value);
        if (!isPlainObject(snapshot)) {
            return typeCheckFailure(context, snapshot, "Value is not a plain object");
        }
        return flattenTypeErrors(this.propertyNames.map(function (key) {
            return _this.properties[key].validate(snapshot[key], getContextForPath(context, key, _this.properties[key]));
        }));
    };
    ModelType.prototype.forAllProps = function (fn) {
        var _this = this;
        this.propertyNames.forEach(function (key) { return fn(key, _this.properties[key]); });
    };
    ModelType.prototype.describe = function () {
        var _this = this;
        // optimization: cache
        return ("{ " +
            this.propertyNames
                .map(function (key) { return key + ": " + _this.properties[key].describe(); })
                .join("; ") +
            " }");
    };
    ModelType.prototype.getDefaultSnapshot = function () {
        return EMPTY_OBJECT;
    };
    ModelType.prototype.removeChild = function (node, subpath) {
        node.storedValue[subpath] = undefined;
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__.action
    ], ModelType.prototype, "applySnapshot", null);
    return ModelType;
}(ComplexType));
/**
 * `types.model` - Creates a new model type by providing a name, properties, volatile state and actions.
 *
 * See the [model type](/concepts/trees#creating-models) description or the [getting started](intro/getting-started.md#getting-started-1) tutorial.
 */
function model() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : "AnonymousModel";
    var properties = args.shift() || {};
    return new ModelType({ name: name, properties: properties });
}
/**
 * `types.compose` - Composes a new model from one or more existing model types.
 * This method can be invoked in two forms:
 * Given 2 or more model types, the types are composed into a new Type.
 * Given first parameter as a string and 2 or more model types,
 * the types are composed into a new Type with the given name
 */
function compose() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // TODO: just join the base type names if no name is provided
    var hasTypename = typeof args[0] === "string";
    var typeName = hasTypename ? args[0] : "AnonymousModel";
    if (hasTypename) {
        args.shift();
    }
    // check all parameters
    if (devMode()) {
        args.forEach(function (type, i) {
            assertArg(type, isModelType, "mobx-state-tree model type", hasTypename ? i + 2 : i + 1);
        });
    }
    return args
        .reduce(function (prev, cur) {
        return prev.cloneAndEnhance({
            name: prev.name + "_" + cur.name,
            properties: cur.properties,
            initializers: cur.initializers,
            preProcessor: function (snapshot) {
                return cur.applySnapshotPreProcessor(prev.applySnapshotPreProcessor(snapshot));
            },
            postProcessor: function (snapshot) {
                return cur.applySnapshotPostProcessor(prev.applySnapshotPostProcessor(snapshot));
            }
        });
    })
        .named(typeName);
}
/**
 * Returns if a given value represents a model type.
 *
 * @param type
 * @returns
 */
function isModelType(type) {
    return isType(type) && (type.flags & TypeFlags.Object) > 0;
}

// TODO: implement CoreType using types.custom ?
/**
 * @internal
 * @hidden
 */
var CoreType = /** @class */ (function (_super) {
    __extends(CoreType, _super);
    function CoreType(name, flags, checker, initializer) {
        if (initializer === void 0) { initializer = identity; }
        var _this = _super.call(this, name) || this;
        _this.flags = flags;
        _this.checker = checker;
        _this.initializer = initializer;
        _this.flags = flags;
        return _this;
    }
    CoreType.prototype.describe = function () {
        return this.name;
    };
    CoreType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    CoreType.prototype.createNewInstance = function (snapshot) {
        return this.initializer(snapshot);
    };
    CoreType.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && this.checker(value)) {
            return typeCheckSuccess();
        }
        var typeName = this.name === "Date" ? "Date or a unix milliseconds timestamp" : this.name;
        return typeCheckFailure(context, value, "Value is not a " + typeName);
    };
    return CoreType;
}(SimpleType));
/**
 * `types.string` - Creates a type that can only contain a string value.
 * This type is used for string values by default
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *   firstName: types.string,
 *   lastName: "Doe"
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var string = new CoreType("string", TypeFlags.String, function (v) { return typeof v === "string"; });
/**
 * `types.number` - Creates a type that can only contain a numeric value.
 * This type is used for numeric values by default
 *
 * Example:
 * ```ts
 * const Vector = types.model({
 *   x: types.number,
 *   y: 1.5
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var number = new CoreType("number", TypeFlags.Number, function (v) { return typeof v === "number"; });
/**
 * `types.integer` - Creates a type that can only contain an integer value.
 * This type is used for integer values by default
 *
 * Example:
 * ```ts
 * const Size = types.model({
 *   width: types.integer,
 *   height: 10
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var integer = new CoreType("integer", TypeFlags.Integer, function (v) { return isInteger(v); });
/**
 * `types.boolean` - Creates a type that can only contain a boolean value.
 * This type is used for boolean values by default
 *
 * Example:
 * ```ts
 * const Thing = types.model({
 *   isCool: types.boolean,
 *   isAwesome: false
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var boolean = new CoreType("boolean", TypeFlags.Boolean, function (v) { return typeof v === "boolean"; });
/**
 * `types.null` - The type of the value `null`
 */
var nullType = new CoreType("null", TypeFlags.Null, function (v) { return v === null; });
/**
 * `types.undefined` - The type of the value `undefined`
 */
var undefinedType = new CoreType("undefined", TypeFlags.Undefined, function (v) { return v === undefined; });
var _DatePrimitive = new CoreType("Date", TypeFlags.Date, function (v) { return typeof v === "number" || v instanceof Date; }, function (v) { return (v instanceof Date ? v : new Date(v)); });
_DatePrimitive.getSnapshot = function (node) {
    return node.storedValue.getTime();
};
/**
 * `types.Date` - Creates a type that can only contain a javascript Date value.
 *
 * Example:
 * ```ts
 * const LogLine = types.model({
 *   timestamp: types.Date,
 * })
 *
 * LogLine.create({ timestamp: new Date() })
 * ```
 */
var DatePrimitive = _DatePrimitive;
/**
 * @internal
 * @hidden
 */
function getPrimitiveFactoryFromValue(value) {
    switch (typeof value) {
        case "string":
            return string;
        case "number":
            return number; // In the future, isInteger(value) ? integer : number would be interesting, but would be too breaking for now
        case "boolean":
            return boolean;
        case "object":
            if (value instanceof Date)
                return DatePrimitive;
    }
    throw fail$1("Cannot determine primitive type from value " + value);
}
/**
 * Returns if a given value represents a primitive type.
 *
 * @param type
 * @returns
 */
function isPrimitiveType(type) {
    return (isType(type) &&
        (type.flags &
            (TypeFlags.String |
                TypeFlags.Number |
                TypeFlags.Integer |
                TypeFlags.Boolean |
                TypeFlags.Date)) >
            0);
}

/**
 * @internal
 * @hidden
 */
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    function Literal(value) {
        var _this = _super.call(this, JSON.stringify(value)) || this;
        _this.flags = TypeFlags.Literal;
        _this.value = value;
        return _this;
    }
    Literal.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    Literal.prototype.describe = function () {
        return JSON.stringify(this.value);
    };
    Literal.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && value === this.value) {
            return typeCheckSuccess();
        }
        return typeCheckFailure(context, value, "Value is not a literal " + JSON.stringify(this.value));
    };
    return Literal;
}(SimpleType));
/**
 * `types.literal` - The literal type will return a type that will match only the exact given type.
 * The given value must be a primitive, in order to be serialized to a snapshot correctly.
 * You can use literal to match exact strings for example the exact male or female string.
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *     name: types.string,
 *     gender: types.union(types.literal('male'), types.literal('female'))
 * })
 * ```
 *
 * @param value The value to use in the strict equal check
 * @returns
 */
function literal(value) {
    // check that the given value is a primitive
    assertArg(value, isPrimitive, "primitive", 1);
    return new Literal(value);
}
/**
 * Returns if a given value represents a literal type.
 *
 * @param type
 * @returns
 */
function isLiteralType(type) {
    return isType(type) && (type.flags & TypeFlags.Literal) > 0;
}

var Refinement = /** @class */ (function (_super) {
    __extends(Refinement, _super);
    function Refinement(name, _subtype, _predicate, _message) {
        var _this = _super.call(this, name) || this;
        _this._subtype = _subtype;
        _this._predicate = _predicate;
        _this._message = _message;
        return _this;
    }
    Object.defineProperty(Refinement.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Refinement;
        },
        enumerable: false,
        configurable: true
    });
    Refinement.prototype.describe = function () {
        return this.name;
    };
    Refinement.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        // create the child type
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
    };
    Refinement.prototype.isAssignableFrom = function (type) {
        return this._subtype.isAssignableFrom(type);
    };
    Refinement.prototype.isValidSnapshot = function (value, context) {
        var subtypeErrors = this._subtype.validate(value, context);
        if (subtypeErrors.length > 0)
            return subtypeErrors;
        var snapshot = isStateTreeNode(value) ? getStateTreeNode(value).snapshot : value;
        if (!this._predicate(snapshot)) {
            return typeCheckFailure(context, value, this._message(value));
        }
        return typeCheckSuccess();
    };
    Refinement.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, newValue, parent, subpath);
    };
    Refinement.prototype.getSubTypes = function () {
        return this._subtype;
    };
    return Refinement;
}(BaseType));
/**
 * `types.refinement` - Creates a type that is more specific than the base type, e.g. `types.refinement(types.string, value => value.length > 5)` to create a type of strings that can only be longer then 5.
 *
 * @param name
 * @param type
 * @param predicate
 * @returns
 */
function refinement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : isType(args[0]) ? args[0].name : null;
    var type = args[0];
    var predicate = args[1];
    var message = args[2]
        ? args[2]
        : function (v) { return "Value does not respect the refinement predicate"; };
    // ensures all parameters are correct
    assertIsType(type, [1, 2]);
    assertIsString(name, 1);
    assertIsFunction(predicate, [2, 3]);
    assertIsFunction(message, [3, 4]);
    return new Refinement(name, type, predicate, message);
}
/**
 * Returns if a given value is a refinement type.
 *
 * @param type
 * @returns
 */
function isRefinementType(type) {
    return (type.flags & TypeFlags.Refinement) > 0;
}

/**
 * `types.enumeration` - Can be used to create an string based enumeration.
 * (note: this methods is just sugar for a union of string literals)
 *
 * Example:
 * ```ts
 * const TrafficLight = types.model({
 *   color: types.enumeration("Color", ["Red", "Orange", "Green"])
 * })
 * ```
 *
 * @param name descriptive name of the enumeration (optional)
 * @param options possible values this enumeration can have
 * @returns
 */
function enumeration(name, options) {
    var realOptions = typeof name === "string" ? options : name;
    // check all options
    if (devMode()) {
        realOptions.forEach(function (option, i) {
            assertIsString(option, i + 1);
        });
    }
    var type = union.apply(void 0, __spread(realOptions.map(function (option) { return literal("" + option); })));
    if (typeof name === "string")
        type.name = name;
    return type;
}

/**
 * @internal
 * @hidden
 */
var Union = /** @class */ (function (_super) {
    __extends(Union, _super);
    function Union(name, _types, options) {
        var _this = _super.call(this, name) || this;
        _this._types = _types;
        _this._eager = true;
        options = __assign({ eager: true, dispatcher: undefined }, options);
        _this._dispatcher = options.dispatcher;
        if (!options.eager)
            _this._eager = false;
        return _this;
    }
    Object.defineProperty(Union.prototype, "flags", {
        get: function () {
            var result = TypeFlags.Union;
            this._types.forEach(function (type) {
                result |= type.flags;
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Union.prototype.isAssignableFrom = function (type) {
        return this._types.some(function (subType) { return subType.isAssignableFrom(type); });
    };
    Union.prototype.describe = function () {
        return "(" + this._types.map(function (factory) { return factory.describe(); }).join(" | ") + ")";
    };
    Union.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var type = this.determineType(initialValue, undefined);
        if (!type)
            throw fail$1("No matching type for union " + this.describe()); // can happen in prod builds
        return type.instantiate(parent, subpath, environment, initialValue);
    };
    Union.prototype.reconcile = function (current, newValue, parent, subpath) {
        var type = this.determineType(newValue, current.type);
        if (!type)
            throw fail$1("No matching type for union " + this.describe()); // can happen in prod builds
        return type.reconcile(current, newValue, parent, subpath);
    };
    Union.prototype.determineType = function (value, reconcileCurrentType) {
        // try the dispatcher, if defined
        if (this._dispatcher) {
            return this._dispatcher(value);
        }
        // find the most accomodating type
        // if we are using reconciliation try the current node type first (fix for #1045)
        if (reconcileCurrentType) {
            if (reconcileCurrentType.is(value)) {
                return reconcileCurrentType;
            }
            return this._types
                .filter(function (t) { return t !== reconcileCurrentType; })
                .find(function (type) { return type.is(value); });
        }
        else {
            return this._types.find(function (type) { return type.is(value); });
        }
    };
    Union.prototype.isValidSnapshot = function (value, context) {
        if (this._dispatcher) {
            return this._dispatcher(value).validate(value, context);
        }
        var allErrors = [];
        var applicableTypes = 0;
        for (var i = 0; i < this._types.length; i++) {
            var type = this._types[i];
            var errors = type.validate(value, context);
            if (errors.length === 0) {
                if (this._eager)
                    return typeCheckSuccess();
                else
                    applicableTypes++;
            }
            else {
                allErrors.push(errors);
            }
        }
        if (applicableTypes === 1)
            return typeCheckSuccess();
        return typeCheckFailure(context, value, "No type is applicable for the union").concat(flattenTypeErrors(allErrors));
    };
    Union.prototype.getSubTypes = function () {
        return this._types;
    };
    return Union;
}(BaseType));
/**
 * `types.union` - Create a union of multiple types. If the correct type cannot be inferred unambiguously from a snapshot, provide a dispatcher function of the form `(snapshot) => Type`.
 *
 * @param optionsOrType
 * @param otherTypes
 * @returns
 */
function union(optionsOrType) {
    var otherTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherTypes[_i - 1] = arguments[_i];
    }
    var options = isType(optionsOrType) ? undefined : optionsOrType;
    var types = isType(optionsOrType) ? __spread([optionsOrType], otherTypes) : otherTypes;
    var name = "(" + types.map(function (type) { return type.name; }).join(" | ") + ")";
    // check all options
    if (devMode()) {
        if (options) {
            assertArg(options, function (o) { return isPlainObject(o); }, "object { eager?: boolean, dispatcher?: Function }", 1);
        }
        types.forEach(function (type, i) {
            assertIsType(type, options ? i + 2 : i + 1);
        });
    }
    return new Union(name, types, options);
}
/**
 * Returns if a given value represents a union type.
 *
 * @param type
 * @returns
 */
function isUnionType(type) {
    return (type.flags & TypeFlags.Union) > 0;
}

/**
 * @hidden
 * @internal
 */
var OptionalValue = /** @class */ (function (_super) {
    __extends(OptionalValue, _super);
    function OptionalValue(_subtype, _defaultValue, optionalValues) {
        var _this = _super.call(this, _subtype.name) || this;
        _this._subtype = _subtype;
        _this._defaultValue = _defaultValue;
        _this.optionalValues = optionalValues;
        return _this;
    }
    Object.defineProperty(OptionalValue.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Optional;
        },
        enumerable: false,
        configurable: true
    });
    OptionalValue.prototype.describe = function () {
        return this._subtype.describe() + "?";
    };
    OptionalValue.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        if (this.optionalValues.indexOf(initialValue) >= 0) {
            var defaultInstanceOrSnapshot = this.getDefaultInstanceOrSnapshot();
            return this._subtype.instantiate(parent, subpath, environment, defaultInstanceOrSnapshot);
        }
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
    };
    OptionalValue.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, this.optionalValues.indexOf(newValue) < 0 && this._subtype.is(newValue)
            ? newValue
            : this.getDefaultInstanceOrSnapshot(), parent, subpath);
    };
    OptionalValue.prototype.getDefaultInstanceOrSnapshot = function () {
        var defaultInstanceOrSnapshot = typeof this._defaultValue === "function"
            ? this._defaultValue()
            : this._defaultValue;
        // while static values are already snapshots and checked on types.optional
        // generator functions must always be rechecked just in case
        if (typeof this._defaultValue === "function") {
            typecheckInternal(this, defaultInstanceOrSnapshot);
        }
        return defaultInstanceOrSnapshot;
    };
    OptionalValue.prototype.isValidSnapshot = function (value, context) {
        // defaulted values can be skipped
        if (this.optionalValues.indexOf(value) >= 0) {
            return typeCheckSuccess();
        }
        // bounce validation to the sub-type
        return this._subtype.validate(value, context);
    };
    OptionalValue.prototype.isAssignableFrom = function (type) {
        return this._subtype.isAssignableFrom(type);
    };
    OptionalValue.prototype.getSubTypes = function () {
        return this._subtype;
    };
    return OptionalValue;
}(BaseType));
function checkOptionalPreconditions(type, defaultValueOrFunction) {
    // make sure we never pass direct instances
    if (typeof defaultValueOrFunction !== "function" && isStateTreeNode(defaultValueOrFunction)) {
        throw fail$1("default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead");
    }
    assertIsType(type, 1);
    if (devMode()) {
        // we only check default values if they are passed directly
        // if they are generator functions they will be checked once they are generated
        // we don't check generator function results here to avoid generating a node just for type-checking purposes
        // which might generate side-effects
        if (typeof defaultValueOrFunction !== "function") {
            typecheckInternal(type, defaultValueOrFunction);
        }
    }
}
/**
 * `types.optional` - Can be used to create a property with a default value.
 *
 * Depending on the third argument (`optionalValues`) there are two ways of operation:
 * - If the argument is not provided, then if a value is not provided in the snapshot (`undefined` or missing),
 *   it will default to the provided `defaultValue`
 * - If the argument is provided, then if the value in the snapshot matches one of the optional values inside the array then it will
 *   default to the provided `defaultValue`. Additionally, if one of the optional values inside the array is `undefined` then a missing
 *   property is also valid.
 *
 *   Note that it is also possible to include values of the same type as the intended subtype as optional values,
 *   in this case the optional value will be transformed into the `defaultValue` (e.g. `types.optional(types.string, "unnamed", [undefined, ""])`
 *   will transform the snapshot values `undefined` (and therefore missing) and empty strings into the string `"unnamed"` when it gets
 *   instantiated).
 *
 * If `defaultValue` is a function, the function will be invoked for every new instance.
 * Applying a snapshot in which the optional value is one of the optional values (or `undefined`/_not_ present if none are provided) causes the
 * value to be reset.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string,
 *   subtitle1: types.optional(types.string, "", [null]),
 *   subtitle2: types.optional(types.string, "", [null, undefined]),
 *   done: types.optional(types.boolean, false),
 *   created: types.optional(types.Date, () => new Date()),
 * })
 *
 * // if done is missing / undefined it will become false
 * // if created is missing / undefined it will get a freshly generated timestamp
 * // if subtitle1 is null it will default to "", but it cannot be missing or undefined
 * // if subtitle2 is null or undefined it will default to ""; since it can be undefined it can also be missing
 * const todo = Todo.create({ title: "Get coffee", subtitle1: null })
 * ```
 *
 * @param type
 * @param defaultValueOrFunction
 * @param optionalValues an optional array with zero or more primitive values (string, number, boolean, null or undefined)
 *                       that will be converted into the default. `[ undefined ]` is assumed when none is provided
 * @returns
 */
function optional(type, defaultValueOrFunction, optionalValues) {
    checkOptionalPreconditions(type, defaultValueOrFunction);
    return new OptionalValue(type, defaultValueOrFunction, optionalValues ? optionalValues : undefinedAsOptionalValues);
}
var undefinedAsOptionalValues = [undefined];
/**
 * Returns if a value represents an optional type.
 *
 * @template IT
 * @param type
 * @returns
 */
function isOptionalType(type) {
    return isType(type) && (type.flags & TypeFlags.Optional) > 0;
}

var optionalUndefinedType = optional(undefinedType, undefined);
var optionalNullType = optional(nullType, null);
/**
 * `types.maybe` - Maybe will make a type nullable, and also optional.
 * The value `undefined` will be used to represent nullability.
 *
 * @param type
 * @returns
 */
function maybe(type) {
    assertIsType(type, 1);
    return union(type, optionalUndefinedType);
}
/**
 * `types.maybeNull` - Maybe will make a type nullable, and also optional.
 * The value `null` will be used to represent no value.
 *
 * @param type
 * @returns
 */
function maybeNull(type) {
    assertIsType(type, 1);
    return union(type, optionalNullType);
}

var Late = /** @class */ (function (_super) {
    __extends(Late, _super);
    function Late(name, _definition) {
        var _this = _super.call(this, name) || this;
        _this._definition = _definition;
        return _this;
    }
    Object.defineProperty(Late.prototype, "flags", {
        get: function () {
            return (this._subType ? this._subType.flags : 0) | TypeFlags.Late;
        },
        enumerable: false,
        configurable: true
    });
    Late.prototype.getSubType = function (mustSucceed) {
        if (!this._subType) {
            var t = undefined;
            try {
                t = this._definition();
            }
            catch (e) {
                if (e instanceof ReferenceError)
                    // can happen in strict ES5 code when a definition is self refering
                    t = undefined;
                else
                    throw e;
            }
            if (mustSucceed && t === undefined)
                throw fail$1("Late type seems to be used too early, the definition (still) returns undefined");
            if (t) {
                if (devMode() && !isType(t))
                    throw fail$1("Failed to determine subtype, make sure types.late returns a type definition.");
                this._subType = t;
            }
        }
        return this._subType;
    };
    Late.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return this.getSubType(true).instantiate(parent, subpath, environment, initialValue);
    };
    Late.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this.getSubType(true).reconcile(current, newValue, parent, subpath);
    };
    Late.prototype.describe = function () {
        var t = this.getSubType(false);
        return t ? t.name : "<uknown late type>";
    };
    Late.prototype.isValidSnapshot = function (value, context) {
        var t = this.getSubType(false);
        if (!t) {
            // See #916; the variable the definition closure is pointing to wasn't defined yet, so can't be evaluted yet here
            return typeCheckSuccess();
        }
        return t.validate(value, context);
    };
    Late.prototype.isAssignableFrom = function (type) {
        var t = this.getSubType(false);
        return t ? t.isAssignableFrom(type) : false;
    };
    Late.prototype.getSubTypes = function () {
        var subtype = this.getSubType(false);
        return subtype ? subtype : cannotDetermineSubtype;
    };
    return Late;
}(BaseType));
/**
 * `types.late` - Defines a type that gets implemented later. This is useful when you have to deal with circular dependencies.
 * Please notice that when defining circular dependencies TypeScript isn't smart enough to inference them.
 *
 * Example:
 * ```ts
 *   // TypeScript isn't smart enough to infer self referencing types.
 *  const Node = types.model({
 *       children: types.array(types.late((): IAnyModelType => Node)) // then typecast each array element to Instance<typeof Node>
 *  })
 * ```
 *
 * @param name The name to use for the type that will be returned.
 * @param type A function that returns the type that will be defined.
 * @returns
 */
function late(nameOrType, maybeType) {
    var name = typeof nameOrType === "string" ? nameOrType : "late(" + nameOrType.toString() + ")";
    var type = typeof nameOrType === "string" ? maybeType : nameOrType;
    // checks that the type is actually a late type
    if (devMode()) {
        if (!(typeof type === "function" && type.length === 0))
            throw fail$1("Invalid late type, expected a function with zero arguments that returns a type, got: " +
                type);
    }
    return new Late(name, type);
}
/**
 * Returns if a given value represents a late type.
 *
 * @param type
 * @returns
 */
function isLateType(type) {
    return isType(type) && (type.flags & TypeFlags.Late) > 0;
}

/**
 * @internal
 * @hidden
 */
var Frozen = /** @class */ (function (_super) {
    __extends(Frozen, _super);
    function Frozen(subType) {
        var _this = _super.call(this, subType ? "frozen(" + subType.name + ")" : "frozen") || this;
        _this.subType = subType;
        _this.flags = TypeFlags.Frozen;
        return _this;
    }
    Frozen.prototype.describe = function () {
        return "<any immutable value>";
    };
    Frozen.prototype.instantiate = function (parent, subpath, environment, value) {
        // create the node
        return createScalarNode(this, parent, subpath, environment, deepFreeze(value));
    };
    Frozen.prototype.isValidSnapshot = function (value, context) {
        if (!isSerializable(value)) {
            return typeCheckFailure(context, value, "Value is not serializable and cannot be frozen");
        }
        if (this.subType)
            return this.subType.validate(value, context);
        return typeCheckSuccess();
    };
    return Frozen;
}(SimpleType));
var untypedFrozenInstance = new Frozen();
/**
 * `types.frozen` - Frozen can be used to store any value that is serializable in itself (that is valid JSON).
 * Frozen values need to be immutable or treated as if immutable. They need be serializable as well.
 * Values stored in frozen will snapshotted as-is by MST, and internal changes will not be tracked.
 *
 * This is useful to store complex, but immutable values like vectors etc. It can form a powerful bridge to parts of your application that should be immutable, or that assume data to be immutable.
 *
 * Note: if you want to store free-form state that is mutable, or not serializeable, consider using volatile state instead.
 *
 * Frozen properties can be defined in three different ways
 * 1. `types.frozen(SubType)` - provide a valid MST type and frozen will check if the provided data conforms the snapshot for that type
 * 2. `types.frozen({ someDefaultValue: true})` - provide a primitive value, object or array, and MST will infer the type from that object, and also make it the default value for the field
 * 3. `types.frozen<TypeScriptType>()` - provide a typescript type, to help in strongly typing the field (design time only)
 *
 * Example:
 * ```ts
 * const GameCharacter = types.model({
 *   name: string,
 *   location: types.frozen({ x: 0, y: 0})
 * })
 *
 * const hero = GameCharacter.create({
 *   name: "Mario",
 *   location: { x: 7, y: 4 }
 * })
 *
 * hero.location = { x: 10, y: 2 } // OK
 * hero.location.x = 7 // Not ok!
 * ```
 *
 * ```ts
 * type Point = { x: number, y: number }
 *    const Mouse = types.model({
 *         loc: types.frozen<Point>()
 *    })
 * ```
 *
 * @param defaultValueOrType
 * @returns
 */
function frozen(arg) {
    if (arguments.length === 0)
        return untypedFrozenInstance;
    else if (isType(arg))
        return new Frozen(arg);
    else
        return optional(untypedFrozenInstance, arg);
}
/**
 * Returns if a given value represents a frozen type.
 *
 * @param type
 * @returns
 */
function isFrozenType(type) {
    return isType(type) && (type.flags & TypeFlags.Frozen) > 0;
}

function getInvalidationCause(hook) {
    switch (hook) {
        case Hook.beforeDestroy:
            return "destroy";
        case Hook.beforeDetach:
            return "detach";
        default:
            return undefined;
    }
}
var StoredReference = /** @class */ (function () {
    function StoredReference(value, targetType) {
        this.targetType = targetType;
        if (isValidIdentifier(value)) {
            this.identifier = value;
        }
        else if (isStateTreeNode(value)) {
            var targetNode = getStateTreeNode(value);
            if (!targetNode.identifierAttribute)
                throw fail$1("Can only store references with a defined identifier attribute.");
            var id = targetNode.unnormalizedIdentifier;
            if (id === null || id === undefined) {
                throw fail$1("Can only store references to tree nodes with a defined identifier.");
            }
            this.identifier = id;
        }
        else {
            throw fail$1("Can only store references to tree nodes or identifiers, got: '" + value + "'");
        }
    }
    StoredReference.prototype.updateResolvedReference = function (node) {
        var normalizedId = normalizeIdentifier(this.identifier);
        var root = node.root;
        var lastCacheModification = root.identifierCache.getLastCacheModificationPerId(normalizedId);
        if (!this.resolvedReference ||
            this.resolvedReference.lastCacheModification !== lastCacheModification) {
            var targetType = this.targetType;
            // reference was initialized with the identifier of the target
            var target = root.identifierCache.resolve(targetType, normalizedId);
            if (!target) {
                throw new InvalidReferenceError("[mobx-state-tree] Failed to resolve reference '" + this.identifier + "' to type '" + this.targetType.name + "' (from node: " + node.path + ")");
            }
            this.resolvedReference = {
                node: target,
                lastCacheModification: lastCacheModification
            };
        }
    };
    Object.defineProperty(StoredReference.prototype, "resolvedValue", {
        get: function () {
            this.updateResolvedReference(this.node);
            return this.resolvedReference.node.value;
        },
        enumerable: false,
        configurable: true
    });
    return StoredReference;
}());
/**
 * @internal
 * @hidden
 */
var InvalidReferenceError = /** @class */ (function (_super) {
    __extends(InvalidReferenceError, _super);
    function InvalidReferenceError(m) {
        var _this = _super.call(this, m) || this;
        Object.setPrototypeOf(_this, InvalidReferenceError.prototype);
        return _this;
    }
    return InvalidReferenceError;
}(Error));
/**
 * @internal
 * @hidden
 */
var BaseReferenceType = /** @class */ (function (_super) {
    __extends(BaseReferenceType, _super);
    function BaseReferenceType(targetType, onInvalidated) {
        var _this = _super.call(this, "reference(" + targetType.name + ")") || this;
        _this.targetType = targetType;
        _this.onInvalidated = onInvalidated;
        _this.flags = TypeFlags.Reference;
        return _this;
    }
    BaseReferenceType.prototype.describe = function () {
        return this.name;
    };
    BaseReferenceType.prototype.isAssignableFrom = function (type) {
        return this.targetType.isAssignableFrom(type);
    };
    BaseReferenceType.prototype.isValidSnapshot = function (value, context) {
        return isValidIdentifier(value)
            ? typeCheckSuccess()
            : typeCheckFailure(context, value, "Value is not a valid identifier, which is a string or a number");
    };
    BaseReferenceType.prototype.fireInvalidated = function (cause, storedRefNode, referenceId, refTargetNode) {
        // to actually invalidate a reference we need an alive parent,
        // since it is a scalar value (immutable-ish) and we need to change it
        // from the parent
        var storedRefParentNode = storedRefNode.parent;
        if (!storedRefParentNode || !storedRefParentNode.isAlive) {
            return;
        }
        var storedRefParentValue = storedRefParentNode.storedValue;
        if (!storedRefParentValue) {
            return;
        }
        this.onInvalidated({
            cause: cause,
            parent: storedRefParentValue,
            invalidTarget: refTargetNode ? refTargetNode.storedValue : undefined,
            invalidId: referenceId,
            replaceRef: function (newRef) {
                applyPatch(storedRefNode.root.storedValue, {
                    op: "replace",
                    value: newRef,
                    path: storedRefNode.path
                });
            },
            removeRef: function () {
                if (isModelType(storedRefParentNode.type)) {
                    this.replaceRef(undefined);
                }
                else {
                    applyPatch(storedRefNode.root.storedValue, {
                        op: "remove",
                        path: storedRefNode.path
                    });
                }
            }
        });
    };
    BaseReferenceType.prototype.addTargetNodeWatcher = function (storedRefNode, referenceId) {
        var _this = this;
        // this will make sure the target node becomes created
        var refTargetValue = this.getValue(storedRefNode);
        if (!refTargetValue) {
            return undefined;
        }
        var refTargetNode = getStateTreeNode(refTargetValue);
        var hookHandler = function (_, refTargetNodeHook) {
            var cause = getInvalidationCause(refTargetNodeHook);
            if (!cause) {
                return;
            }
            _this.fireInvalidated(cause, storedRefNode, referenceId, refTargetNode);
        };
        var refTargetDetachHookDisposer = refTargetNode.registerHook(Hook.beforeDetach, hookHandler);
        var refTargetDestroyHookDisposer = refTargetNode.registerHook(Hook.beforeDestroy, hookHandler);
        return function () {
            refTargetDetachHookDisposer();
            refTargetDestroyHookDisposer();
        };
    };
    BaseReferenceType.prototype.watchTargetNodeForInvalidations = function (storedRefNode, identifier, customGetSet) {
        var _this = this;
        if (!this.onInvalidated) {
            return;
        }
        var onRefTargetDestroyedHookDisposer;
        // get rid of the watcher hook when the stored ref node is destroyed
        // detached is ignored since scalar nodes (where the reference resides) cannot be detached
        storedRefNode.registerHook(Hook.beforeDestroy, function () {
            if (onRefTargetDestroyedHookDisposer) {
                onRefTargetDestroyedHookDisposer();
            }
        });
        var startWatching = function (sync) {
            // re-create hook in case the stored ref gets reattached
            if (onRefTargetDestroyedHookDisposer) {
                onRefTargetDestroyedHookDisposer();
            }
            // make sure the target node is actually there and initialized
            var storedRefParentNode = storedRefNode.parent;
            var storedRefParentValue = storedRefParentNode && storedRefParentNode.storedValue;
            if (storedRefParentNode && storedRefParentNode.isAlive && storedRefParentValue) {
                var refTargetNodeExists = void 0;
                if (customGetSet) {
                    refTargetNodeExists = !!customGetSet.get(identifier, storedRefParentValue);
                }
                else {
                    refTargetNodeExists = storedRefNode.root.identifierCache.has(_this.targetType, normalizeIdentifier(identifier));
                }
                if (!refTargetNodeExists) {
                    // we cannot change the reference in sync mode
                    // since we are in the middle of a reconciliation/instantiation and the change would be overwritten
                    // for those cases just let the wrong reference be assigned and fail upon usage
                    // (like current references do)
                    // this means that effectively this code will only run when it is created from a snapshot
                    if (!sync) {
                        _this.fireInvalidated("invalidSnapshotReference", storedRefNode, identifier, null);
                    }
                }
                else {
                    onRefTargetDestroyedHookDisposer = _this.addTargetNodeWatcher(storedRefNode, identifier);
                }
            }
        };
        if (storedRefNode.state === NodeLifeCycle.FINALIZED) {
            // already attached, so the whole tree is ready
            startWatching(true);
        }
        else {
            if (!storedRefNode.isRoot) {
                // start watching once the whole tree is ready
                storedRefNode.root.registerHook(Hook.afterCreationFinalization, function () {
                    // make sure to attach it so it can start listening
                    if (storedRefNode.parent) {
                        storedRefNode.parent.createObservableInstanceIfNeeded();
                    }
                });
            }
            // start watching once the node is attached somewhere / parent changes
            storedRefNode.registerHook(Hook.afterAttach, function () {
                startWatching(false);
            });
        }
    };
    return BaseReferenceType;
}(SimpleType));
/**
 * @internal
 * @hidden
 */
var IdentifierReferenceType = /** @class */ (function (_super) {
    __extends(IdentifierReferenceType, _super);
    function IdentifierReferenceType(targetType, onInvalidated) {
        return _super.call(this, targetType, onInvalidated) || this;
    }
    IdentifierReferenceType.prototype.getValue = function (storedRefNode) {
        if (!storedRefNode.isAlive)
            return undefined;
        var storedRef = storedRefNode.storedValue;
        return storedRef.resolvedValue;
    };
    IdentifierReferenceType.prototype.getSnapshot = function (storedRefNode) {
        var ref = storedRefNode.storedValue;
        return ref.identifier;
    };
    IdentifierReferenceType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var identifier = isStateTreeNode(initialValue)
            ? getIdentifier(initialValue)
            : initialValue;
        var storedRef = new StoredReference(initialValue, this.targetType);
        var storedRefNode = createScalarNode(this, parent, subpath, environment, storedRef);
        storedRef.node = storedRefNode;
        this.watchTargetNodeForInvalidations(storedRefNode, identifier, undefined);
        return storedRefNode;
    };
    IdentifierReferenceType.prototype.reconcile = function (current, newValue, parent, subpath) {
        if (!current.isDetaching && current.type === this) {
            var compareByValue = isStateTreeNode(newValue);
            var ref = current.storedValue;
            if ((!compareByValue && ref.identifier === newValue) ||
                (compareByValue && ref.resolvedValue === newValue)) {
                current.setParent(parent, subpath);
                return current;
            }
        }
        var newNode = this.instantiate(parent, subpath, undefined, newValue);
        current.die(); // noop if detaching
        return newNode;
    };
    return IdentifierReferenceType;
}(BaseReferenceType));
/**
 * @internal
 * @hidden
 */
var CustomReferenceType = /** @class */ (function (_super) {
    __extends(CustomReferenceType, _super);
    function CustomReferenceType(targetType, options, onInvalidated) {
        var _this = _super.call(this, targetType, onInvalidated) || this;
        _this.options = options;
        return _this;
    }
    CustomReferenceType.prototype.getValue = function (storedRefNode) {
        if (!storedRefNode.isAlive)
            return undefined;
        var referencedNode = this.options.get(storedRefNode.storedValue, storedRefNode.parent ? storedRefNode.parent.storedValue : null);
        return referencedNode;
    };
    CustomReferenceType.prototype.getSnapshot = function (storedRefNode) {
        return storedRefNode.storedValue;
    };
    CustomReferenceType.prototype.instantiate = function (parent, subpath, environment, newValue) {
        var identifier = isStateTreeNode(newValue)
            ? this.options.set(newValue, parent ? parent.storedValue : null)
            : newValue;
        var storedRefNode = createScalarNode(this, parent, subpath, environment, identifier);
        this.watchTargetNodeForInvalidations(storedRefNode, identifier, this.options);
        return storedRefNode;
    };
    CustomReferenceType.prototype.reconcile = function (current, newValue, parent, subpath) {
        var newIdentifier = isStateTreeNode(newValue)
            ? this.options.set(newValue, current ? current.storedValue : null)
            : newValue;
        if (!current.isDetaching &&
            current.type === this &&
            current.storedValue === newIdentifier) {
            current.setParent(parent, subpath);
            return current;
        }
        var newNode = this.instantiate(parent, subpath, undefined, newIdentifier);
        current.die(); // noop if detaching
        return newNode;
    };
    return CustomReferenceType;
}(BaseReferenceType));
/**
 * `types.reference` - Creates a reference to another type, which should have defined an identifier.
 * See also the [reference and identifiers](https://github.com/mobxjs/mobx-state-tree#references-and-identifiers) section.
 */
function reference(subType, options) {
    assertIsType(subType, 1);
    if (devMode()) {
        if (arguments.length === 2 && typeof arguments[1] === "string") {
            // istanbul ignore next
            throw fail$1("References with base path are no longer supported. Please remove the base path.");
        }
    }
    var getSetOptions = options ? options : undefined;
    var onInvalidated = options
        ? options.onInvalidated
        : undefined;
    if (getSetOptions && (getSetOptions.get || getSetOptions.set)) {
        if (devMode()) {
            if (!getSetOptions.get || !getSetOptions.set) {
                throw fail$1("reference options must either contain both a 'get' and a 'set' method or none of them");
            }
        }
        return new CustomReferenceType(subType, {
            get: getSetOptions.get,
            set: getSetOptions.set
        }, onInvalidated);
    }
    else {
        return new IdentifierReferenceType(subType, onInvalidated);
    }
}
/**
 * Returns if a given value represents a reference type.
 *
 * @param type
 * @returns
 */
function isReferenceType(type) {
    return (type.flags & TypeFlags.Reference) > 0;
}
/**
 * `types.safeReference` - A safe reference is like a standard reference, except that it accepts the undefined value by default
 * and automatically sets itself to undefined (when the parent is a model) / removes itself from arrays and maps
 * when the reference it is pointing to gets detached/destroyed.
 *
 * The optional options parameter object accepts a parameter named `acceptsUndefined`, which is set to true by default, so it is suitable
 * for model properties.
 * When used inside collections (arrays/maps), it is recommended to set this option to false so it can't take undefined as value,
 * which is usually the desired in those cases.
 *
 * Strictly speaking it is a `types.maybe(types.reference(X))` (when `acceptsUndefined` is set to true, the default) and
 * `types.reference(X)` (when `acceptsUndefined` is set to false), both of them with a customized `onInvalidated` option.
 *
 * @param subType
 * @param options
 * @returns
 */
function safeReference(subType, options) {
    var refType = reference(subType, __assign(__assign({}, options), { onInvalidated: function (ev) {
            if (options && options.onInvalidated) {
                options.onInvalidated(ev);
            }
            ev.removeRef();
        } }));
    if (options && options.acceptsUndefined === false) {
        return refType;
    }
    else {
        return maybe(refType);
    }
}

var BaseIdentifierType = /** @class */ (function (_super) {
    __extends(BaseIdentifierType, _super);
    function BaseIdentifierType(name, validType) {
        var _this = _super.call(this, name) || this;
        _this.validType = validType;
        _this.flags = TypeFlags.Identifier;
        return _this;
    }
    BaseIdentifierType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        if (!parent || !(parent.type instanceof ModelType))
            throw fail$1("Identifier types can only be instantiated as direct child of a model type");
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    BaseIdentifierType.prototype.reconcile = function (current, newValue, parent, subpath) {
        // we don't consider detaching here since identifier are scalar nodes, and scalar nodes cannot be detached
        if (current.storedValue !== newValue)
            throw fail$1("Tried to change identifier from '" + current.storedValue + "' to '" + newValue + "'. Changing identifiers is not allowed.");
        current.setParent(parent, subpath);
        return current;
    };
    BaseIdentifierType.prototype.isValidSnapshot = function (value, context) {
        if (typeof value !== this.validType) {
            return typeCheckFailure(context, value, "Value is not a valid " + this.describe() + ", expected a " + this.validType);
        }
        return typeCheckSuccess();
    };
    return BaseIdentifierType;
}(SimpleType));
/**
 * @internal
 * @hidden
 */
var IdentifierType = /** @class */ (function (_super) {
    __extends(IdentifierType, _super);
    function IdentifierType() {
        var _this = _super.call(this, "identifier", "string") || this;
        _this.flags = TypeFlags.Identifier;
        return _this;
    }
    IdentifierType.prototype.describe = function () {
        return "identifier";
    };
    return IdentifierType;
}(BaseIdentifierType));
/**
 * @internal
 * @hidden
 */
var IdentifierNumberType = /** @class */ (function (_super) {
    __extends(IdentifierNumberType, _super);
    function IdentifierNumberType() {
        return _super.call(this, "identifierNumber", "number") || this;
    }
    IdentifierNumberType.prototype.getSnapshot = function (node) {
        return node.storedValue;
    };
    IdentifierNumberType.prototype.describe = function () {
        return "identifierNumber";
    };
    return IdentifierNumberType;
}(BaseIdentifierType));
/**
 * `types.identifier` - Identifiers are used to make references, lifecycle events and reconciling works.
 * Inside a state tree, for each type can exist only one instance for each given identifier.
 * For example there couldn't be 2 instances of user with id 1. If you need more, consider using references.
 * Identifier can be used only as type property of a model.
 * This type accepts as parameter the value type of the identifier field that can be either string or number.
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifier,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifier = new IdentifierType();
/**
 * `types.identifierNumber` - Similar to `types.identifier`. This one will serialize from / to a number when applying snapshots
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifierNumber,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifierNumber = new IdentifierNumberType();
/**
 * Returns if a given value represents an identifier type.
 *
 * @param type
 * @returns
 */
function isIdentifierType(type) {
    return isType(type) && (type.flags & TypeFlags.Identifier) > 0;
}
/**
 * @internal
 * @hidden
 */
function normalizeIdentifier(id) {
    return "" + id;
}
/**
 * @internal
 * @hidden
 */
function isValidIdentifier(id) {
    return typeof id === "string" || typeof id === "number";
}
/**
 * @internal
 * @hidden
 */
function assertIsValidIdentifier(id, argNumber) {
    assertArg(id, isValidIdentifier, "string or number (identifier)", argNumber);
}

/**
 * `types.custom` - Creates a custom type. Custom types can be used for arbitrary immutable values, that have a serializable representation. For example, to create your own Date representation, Decimal type etc.
 *
 * The signature of the options is:
 * ```ts
 * export interface CustomTypeOptions<S, T> {
 *     // Friendly name
 *     name: string
 *     // given a serialized value and environment, how to turn it into the target type
 *     fromSnapshot(snapshot: S, env: any): T
 *     // return the serialization of the current value
 *     toSnapshot(value: T): S
 *     // if true, this is a converted value, if false, it's a snapshot
 *     isTargetType(value: T | S): value is T
 *     // a non empty string is assumed to be a validation error
 *     getValidationMessage?(snapshot: S): string
 * }
 * ```
 *
 * Example:
 * ```ts
 * const DecimalPrimitive = types.custom<string, Decimal>({
 *     name: "Decimal",
 *     fromSnapshot(value: string) {
 *         return new Decimal(value)
 *     },
 *     toSnapshot(value: Decimal) {
 *         return value.toString()
 *     },
 *     isTargetType(value: string | Decimal): boolean {
 *         return value instanceof Decimal
 *     },
 *     getValidationMessage(value: string): string {
 *         if (/^-?\d+\.\d+$/.test(value)) return "" // OK
 *         return `'${value}' doesn't look like a valid decimal number`
 *     }
 * })
 *
 * const Wallet = types.model({
 *     balance: DecimalPrimitive
 * })
 * ```
 *
 * @param options
 * @returns
 */
function custom(options) {
    return new CustomType(options);
}
/**
 * @internal
 * @hidden
 */
var CustomType = /** @class */ (function (_super) {
    __extends(CustomType, _super);
    function CustomType(options) {
        var _this = _super.call(this, options.name) || this;
        _this.options = options;
        _this.flags = TypeFlags.Custom;
        return _this;
    }
    CustomType.prototype.describe = function () {
        return this.name;
    };
    CustomType.prototype.isValidSnapshot = function (value, context) {
        if (this.options.isTargetType(value))
            return typeCheckSuccess();
        var typeError = this.options.getValidationMessage(value);
        if (typeError) {
            return typeCheckFailure(context, value, "Invalid value for type '" + this.name + "': " + typeError);
        }
        return typeCheckSuccess();
    };
    CustomType.prototype.getSnapshot = function (node) {
        return this.options.toSnapshot(node.storedValue);
    };
    CustomType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var valueToStore = this.options.isTargetType(initialValue)
            ? initialValue
            : this.options.fromSnapshot(initialValue, parent && parent.root.environment);
        return createScalarNode(this, parent, subpath, environment, valueToStore);
    };
    CustomType.prototype.reconcile = function (current, value, parent, subpath) {
        var isSnapshot = !this.options.isTargetType(value);
        // in theory customs use scalar nodes which cannot be detached, but still...
        if (!current.isDetaching) {
            var unchanged = current.type === this &&
                (isSnapshot ? value === current.snapshot : value === current.storedValue);
            if (unchanged) {
                current.setParent(parent, subpath);
                return current;
            }
        }
        var valueToStore = isSnapshot
            ? this.options.fromSnapshot(value, parent.root.environment)
            : value;
        var newNode = this.instantiate(parent, subpath, undefined, valueToStore);
        current.die(); // noop if detaching
        return newNode;
    };
    return CustomType;
}(SimpleType));

// we import the types to re-export them inside types.
var types = {
    enumeration: enumeration,
    model: model,
    compose: compose,
    custom: custom,
    reference: reference,
    safeReference: safeReference,
    union: union,
    optional: optional,
    literal: literal,
    maybe: maybe,
    maybeNull: maybeNull,
    refinement: refinement,
    string: string,
    boolean: boolean,
    number: number,
    integer: integer,
    Date: DatePrimitive,
    map: map,
    array: array,
    frozen: frozen,
    identifier: identifier,
    identifierNumber: identifierNumber,
    late: late,
    undefined: undefinedType,
    null: nullType,
    snapshotProcessor: snapshotProcessor
};




/***/ }),

/***/ "../../node_modules/mobx/lib/mobx.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $mobx: () => (/* binding */ $mobx),
/* harmony export */   FlowCancellationError: () => (/* binding */ FlowCancellationError),
/* harmony export */   IDerivationState: () => (/* binding */ IDerivationState),
/* harmony export */   ObservableMap: () => (/* binding */ ObservableMap),
/* harmony export */   ObservableSet: () => (/* binding */ ObservableSet),
/* harmony export */   Reaction: () => (/* binding */ Reaction),
/* harmony export */   _allowStateChanges: () => (/* binding */ allowStateChanges),
/* harmony export */   _allowStateChangesInsideComputed: () => (/* binding */ allowStateChangesInsideComputed),
/* harmony export */   _allowStateReadsEnd: () => (/* binding */ allowStateReadsEnd),
/* harmony export */   _allowStateReadsStart: () => (/* binding */ allowStateReadsStart),
/* harmony export */   _endAction: () => (/* binding */ _endAction),
/* harmony export */   _getAdministration: () => (/* binding */ getAdministration),
/* harmony export */   _getGlobalState: () => (/* binding */ getGlobalState),
/* harmony export */   _interceptReads: () => (/* binding */ interceptReads),
/* harmony export */   _isComputingDerivation: () => (/* binding */ isComputingDerivation),
/* harmony export */   _resetGlobalState: () => (/* binding */ resetGlobalState),
/* harmony export */   _startAction: () => (/* binding */ _startAction),
/* harmony export */   action: () => (/* binding */ action),
/* harmony export */   autorun: () => (/* binding */ autorun),
/* harmony export */   comparer: () => (/* binding */ comparer),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   configure: () => (/* binding */ configure),
/* harmony export */   createAtom: () => (/* binding */ createAtom),
/* harmony export */   decorate: () => (/* binding */ decorate),
/* harmony export */   entries: () => (/* binding */ entries),
/* harmony export */   extendObservable: () => (/* binding */ extendObservable),
/* harmony export */   flow: () => (/* binding */ flow),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getAtom: () => (/* binding */ getAtom),
/* harmony export */   getDebugName: () => (/* binding */ getDebugName),
/* harmony export */   getDependencyTree: () => (/* binding */ getDependencyTree),
/* harmony export */   getObserverTree: () => (/* binding */ getObserverTree),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   intercept: () => (/* binding */ intercept),
/* harmony export */   isAction: () => (/* binding */ isAction),
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike),
/* harmony export */   isBoxedObservable: () => (/* binding */ isObservableValue),
/* harmony export */   isComputed: () => (/* binding */ isComputed),
/* harmony export */   isComputedProp: () => (/* binding */ isComputedProp),
/* harmony export */   isFlowCancellationError: () => (/* binding */ isFlowCancellationError),
/* harmony export */   isObservable: () => (/* binding */ isObservable),
/* harmony export */   isObservableArray: () => (/* binding */ isObservableArray),
/* harmony export */   isObservableMap: () => (/* binding */ isObservableMap),
/* harmony export */   isObservableObject: () => (/* binding */ isObservableObject),
/* harmony export */   isObservableProp: () => (/* binding */ isObservableProp),
/* harmony export */   isObservableSet: () => (/* binding */ isObservableSet),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   observable: () => (/* binding */ observable),
/* harmony export */   observe: () => (/* binding */ observe),
/* harmony export */   onBecomeObserved: () => (/* binding */ onBecomeObserved),
/* harmony export */   onBecomeUnobserved: () => (/* binding */ onBecomeUnobserved),
/* harmony export */   onReactionError: () => (/* binding */ onReactionError),
/* harmony export */   reaction: () => (/* binding */ reaction),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   runInAction: () => (/* binding */ runInAction),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   spy: () => (/* binding */ spy),
/* harmony export */   toJS: () => (/* binding */ toJS),
/* harmony export */   trace: () => (/* binding */ trace),
/* harmony export */   transaction: () => (/* binding */ transaction),
/* harmony export */   untracked: () => (/* binding */ untracked),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   when: () => (/* binding */ when)
/* harmony export */ });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail("Cannot convert to map from '" + dataStructure + "'");
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Object.getOwnPropertySymbols
        ? function (obj) { return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); }
        : /* istanbul ignore next */ Object.getOwnPropertyNames;

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && ({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_WORKSPACE_ROOT":"/Users/nicholasrq/Git/label-studio/web","NX_TERMINAL_OUTPUT_PATH":"/Users/nicholasrq/Git/label-studio/web/.nx/cache/terminalOutputs/14850373422174103297","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"labelstudio","NX_TASK_TARGET_TARGET":"build","NX_TASK_TARGET_CONFIGURATION":"development","NX_TASK_HASH":"14850373422174103297"}) && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    if (true) {
        invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + stringifyKey(propertyName) + "'");
    }
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (true) {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (false)
        {}
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false)
        {}
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {}
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = ownKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservable' only accepts plain objects as second argument");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ( true && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "flat",
    "includes",
    "indexOf",
    "join",
    "lastIndexOf",
    "slice",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    // Feature detection (eg flat may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
});
["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function (funcName) {
    // Feature detection (eg flatMap may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function (callback, thisArg) {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    };
});
["reduce", "reduceRight"].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    getPlainObjectKeys(other).forEach(function (key) {
                        return _this.set(key, other[key]);
                    });
                else if (Array.isArray(other))
                    other.forEach(function (_b) {
                        var _c = __read(_b, 2), key = _c[0], value = _c[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            var e_3, _b, e_4, _c;
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            try {
                // Delete keys that don't exist in replacement map
                // if the key deletion is prevented by interceptor
                // add entry at the beginning of the result map
                for (var _d = __values(_this._data.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    // Concurrently iterating/deleting keys
                    // iterator should handle this correctly
                    if (!replacementMap.has(key)) {
                        var deleted = _this.delete(key);
                        // Was the key removed?
                        if (deleted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                        else {
                            // Delete prevented by interceptor
                            var value = _this._data.get(key);
                            orderedData.set(key, value);
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                // Merge entries
                for (var _f = __values(replacementMap.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                    // We will want to know whether a new key is added
                    var keyExisted = _this._data.has(key);
                    // Add or update value
                    _this.set(key, value);
                    // The addition could have been prevent by interceptor
                    if (_this._data.has(key)) {
                        // The update could have been prevented by interceptor
                        // and also we want to preserve existing values
                        // so use value from _data map (instead of replacement map)
                        var value_1 = _this._data.get(key);
                        orderedData.set(key, value_1);
                        // Was a new key added?
                        if (!keyExisted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_5, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && ({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_WORKSPACE_ROOT":"/Users/nicholasrq/Git/label-studio/web","NX_TERMINAL_OUTPUT_PATH":"/Users/nicholasrq/Git/label-studio/web/.nx/cache/terminalOutputs/14850373422174103297","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"labelstudio","NX_TASK_TARGET_TARGET":"build","NX_TASK_TARGET_CONFIGURATION":"development","NX_TASK_HASH":"14850373422174103297"}).IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}




/***/ }),

/***/ "../../node_modules/react-dom/cjs/react-dom.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function noop() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      JSCompiler_inline_result &&
        (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            key[Symbol.toStringTag]) ||
            key.constructor.name ||
            "Object"
        ),
        testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children: children,
        containerInfo: containerInfo,
        implementation: implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return null === thing
        ? "`null`"
        : void 0 === thing
          ? "`undefined`"
          : "" === thing
            ? "an empty string"
            : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return null === thing
        ? "`null`"
        : void 0 === thing
          ? "`undefined`"
          : "" === thing
            ? "an empty string"
            : "string" === typeof thing
              ? JSON.stringify(thing)
              : "number" === typeof thing
                ? "`" + thing + "`"
                : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __webpack_require__("../../node_modules/react/index.js"),
      Internals = {
        d: {
          f: noop,
          r: function () {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      },
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      ReactSharedInternals =
        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ("function" === typeof Map &&
      null != Map.prototype &&
      "function" === typeof Map.prototype.forEach &&
      "function" === typeof Set &&
      null != Set.prototype &&
      "function" === typeof Set.prototype.clear &&
      "function" === typeof Set.prototype.forEach) ||
      console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      Internals;
    exports.createPortal = function (children, container) {
      var key =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (
        !container ||
        (1 !== container.nodeType &&
          9 !== container.nodeType &&
          11 !== container.nodeType)
      )
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function (fn) {
      var previousTransition = ReactSharedInternals.T,
        previousUpdatePriority = Internals.p;
      try {
        if (((ReactSharedInternals.T = null), (Internals.p = 2), fn))
          return fn();
      } finally {
        (ReactSharedInternals.T = previousTransition),
          (Internals.p = previousUpdatePriority),
          Internals.d.f() &&
            console.error(
              "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
            );
      }
    };
    exports.preconnect = function (href, options) {
      "string" === typeof href && href
        ? null != options && "object" !== typeof options
          ? console.error(
              "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : null != options &&
            "string" !== typeof options.crossOrigin &&
            console.error(
              "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
              getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
            )
        : console.error(
            "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
      "string" === typeof href &&
        (options
          ? ((options = options.crossOrigin),
            (options =
              "string" === typeof options
                ? "use-credentials" === options
                  ? options
                  : ""
                : void 0))
          : (options = null),
        Internals.d.C(href, options));
    };
    exports.prefetchDNS = function (href) {
      if ("string" !== typeof href || !href)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
      else if (1 < arguments.length) {
        var options = arguments[1];
        "object" === typeof options && options.hasOwnProperty("crossOrigin")
          ? console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            );
      }
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function (href, options) {
      "string" === typeof href && href
        ? null == options || "object" !== typeof options
          ? console.error(
              "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : "style" !== options.as &&
            "script" !== options.as &&
            console.error(
              'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
              getValueDescriptorExpectingEnumForWarning(options.as)
            )
        : console.error(
            "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
      if (
        "string" === typeof href &&
        options &&
        "string" === typeof options.as
      ) {
        var as = options.as,
          crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
          integrity =
            "string" === typeof options.integrity ? options.integrity : void 0,
          fetchPriority =
            "string" === typeof options.fetchPriority
              ? options.fetchPriority
              : void 0;
        "style" === as
          ? Internals.d.S(
              href,
              "string" === typeof options.precedence
                ? options.precedence
                : void 0,
              {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority
              }
            )
          : "script" === as &&
            Internals.d.X(href, {
              crossOrigin: crossOrigin,
              integrity: integrity,
              fetchPriority: fetchPriority,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
      }
    };
    exports.preinitModule = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      void 0 !== options && "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : options &&
          "as" in options &&
          "script" !== options.as &&
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingEnumForWarning(options.as) +
            ".");
      if (encountered)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          encountered
        );
      else
        switch (
          ((encountered =
            options && "string" === typeof options.as ? options.as : "script"),
          encountered)
        ) {
          case "script":
            break;
          default:
            (encountered =
              getValueDescriptorExpectingEnumForWarning(encountered)),
              console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
        }
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as)
            (encountered = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            )),
              Internals.d.M(href, {
                crossOrigin: encountered,
                integrity:
                  "string" === typeof options.integrity
                    ? options.integrity
                    : void 0,
                nonce:
                  "string" === typeof options.nonce ? options.nonce : void 0
              });
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      null == options || "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : ("string" === typeof options.as && options.as) ||
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingObjectForWarning(options.as) +
            ".");
      encountered &&
        console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
      if (
        "string" === typeof href &&
        "object" === typeof options &&
        null !== options &&
        "string" === typeof options.as
      ) {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(
          encountered,
          options.crossOrigin
        );
        Internals.d.L(href, encountered, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority:
            "string" === typeof options.fetchPriority
              ? options.fetchPriority
              : void 0,
          referrerPolicy:
            "string" === typeof options.referrerPolicy
              ? options.referrerPolicy
              : void 0,
          imageSrcSet:
            "string" === typeof options.imageSrcSet
              ? options.imageSrcSet
              : void 0,
          imageSizes:
            "string" === typeof options.imageSizes
              ? options.imageSizes
              : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports.preloadModule = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      void 0 !== options && "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : options &&
          "as" in options &&
          "string" !== typeof options.as &&
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingObjectForWarning(options.as) +
            ".");
      encountered &&
        console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
      "string" === typeof href &&
        (options
          ? ((encountered = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            )),
            Internals.d.m(href, {
              as:
                "string" === typeof options.as && "script" !== options.as
                  ? options.as
                  : void 0,
              crossOrigin: encountered,
              integrity:
                "string" === typeof options.integrity
                  ? options.integrity
                  : void 0
            }))
          : Internals.d.m(href));
    };
    exports.requestFormReset = function (form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function (fn, a) {
      return fn(a);
    };
    exports.useFormState = function (action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function () {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.0.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "../../node_modules/react-dom/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = __webpack_require__("../../node_modules/react-dom/cjs/react-dom.development.js");
}


/***/ }),

/***/ "../../node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE$2
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: !0,
          enumerable: !0,
          value: disabledLog,
          writable: !0
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth &&
        console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = (match && match[1]) || "";
          suffix =
            -1 < x.stack.indexOf("\n    at")
              ? " (<anonymous>)"
              : -1 < x.stack.indexOf("@")
                ? "@unknown:0:0"
                : "";
        }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (void 0 !== frame) return frame;
      reentry = !0;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function () {
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) &&
                  "function" === typeof Fake.catch &&
                  Fake.catch(function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor &&
          namePropDescriptor.configurable &&
          Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
        var _RunInRootFrame$Deter =
            RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (
            _RunInRootFrame$Deter = namePropDescriptor = 0;
            namePropDescriptor < sampleLines.length &&
            !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            );

          )
            namePropDescriptor++;
          for (
            ;
            _RunInRootFrame$Deter < controlLines.length &&
            !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            );

          )
            _RunInRootFrame$Deter++;
          if (
            namePropDescriptor === sampleLines.length ||
            _RunInRootFrame$Deter === controlLines.length
          )
            for (
              namePropDescriptor = sampleLines.length - 1,
                _RunInRootFrame$Deter = controlLines.length - 1;
              1 <= namePropDescriptor &&
              0 <= _RunInRootFrame$Deter &&
              sampleLines[namePropDescriptor] !==
                controlLines[_RunInRootFrame$Deter];

            )
              _RunInRootFrame$Deter--;
          for (
            ;
            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
            namePropDescriptor--, _RunInRootFrame$Deter--
          )
            if (
              sampleLines[namePropDescriptor] !==
              controlLines[_RunInRootFrame$Deter]
            ) {
              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                do
                  if (
                    (namePropDescriptor--,
                    _RunInRootFrame$Deter--,
                    0 > _RunInRootFrame$Deter ||
                      sampleLines[namePropDescriptor] !==
                        controlLines[_RunInRootFrame$Deter])
                  ) {
                    var _frame =
                      "\n" +
                      sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                    fn.displayName &&
                      _frame.includes("<anonymous>") &&
                      (_frame = _frame.replace("<anonymous>", fn.displayName));
                    "function" === typeof fn &&
                      componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        (reentry = !1),
          (ReactSharedInternals.H = previousDispatcher),
          reenableLogs(),
          (Error.prepareStackTrace = frame);
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
        ? describeBuiltInComponentFrame(sampleLines)
        : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(
          type,
          !(!prototype || !prototype.isReactComponent)
        );
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return (type = describeNativeComponentFrame(type.render, !1)), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(
      type,
      config,
      maybeKey,
      isStaticChildren,
      source,
      self
    ) {
      if (
        "string" === typeof type ||
        "function" === typeof type ||
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        type === REACT_OFFSCREEN_TYPE ||
        ("object" === typeof type &&
          null !== type &&
          (type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_CONSUMER_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
            void 0 !== type.getModuleId))
      ) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (
                isStaticChildren = 0;
                isStaticChildren < children.length;
                isStaticChildren++
              )
                validateChildKeys(children[isStaticChildren], type);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children, type);
      } else {
        children = "";
        if (
          void 0 === type ||
          ("object" === typeof type &&
            null !== type &&
            0 === Object.keys(type).length)
        )
          children +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        null === type
          ? (isStaticChildren = "null")
          : isArrayImpl(type)
            ? (isStaticChildren = "array")
            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
              ? ((isStaticChildren =
                  "<" +
                  (getComponentNameFromType(type.type) || "Unknown") +
                  " />"),
                (children =
                  " Did you accidentally export a JSX literal instead of a component?"))
              : (isStaticChildren = typeof type);
        console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          isStaticChildren,
          children
        );
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren =
          0 < keys.length
            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
            : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] ||
          ((keys =
            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
          console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ),
          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
      }
      children = null;
      void 0 !== maybeKey &&
        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
      hasValidKey(config) &&
        (checkKeyStringCoercion(config.key), (children = "" + config.key));
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children &&
        defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if (
        "object" === typeof node &&
        node &&
        node.$$typeof !== REACT_CLIENT_REFERENCE
      )
        if (isArrayImpl(node))
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (
          (null === node || "object" !== typeof node
            ? (i = null)
            : ((i =
                (MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL]) ||
                node["@@iterator"]),
              (i = "function" === typeof i ? i : null)),
          "function" === typeof i &&
            i !== node.entries &&
            ((i = i.call(node)), i !== node))
        )
          for (; !(node = i.next()).done; )
            isValidElement(node.value) &&
              validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function validateExplicitKey(element, parentType) {
      if (
        element._store &&
        !element._store.validated &&
        null == element.key &&
        ((element._store.validated = 1),
        (parentType = getCurrentComponentErrorInfo(parentType)),
        !ownerHasKeyUseWarning[parentType])
      ) {
        ownerHasKeyUseWarning[parentType] = !0;
        var childOwner = "";
        element &&
          null != element._owner &&
          element._owner !== getOwner() &&
          ((childOwner = null),
          "number" === typeof element._owner.tag
            ? (childOwner = getComponentNameFromType(element._owner.type))
            : "string" === typeof element._owner.name &&
              (childOwner = element._owner.name),
          (childOwner = " It was passed a child from " + childOwner + "."));
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          parentType,
          childOwner
        );
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner &&
        (owner = getComponentNameFromType(owner.type)) &&
        (info = "\n\nCheck the render method of `" + owner + "`.");
      info ||
        ((parentType = getComponentNameFromType(parentType)) &&
          (info =
            "\n\nCheck the top-level render call using <" + parentType + ">."));
      return info;
    }
    var React = __webpack_require__("../../node_modules/react/index.js"),
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
      ReactSharedInternals =
        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      assign = Object.assign,
      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
      isArrayImpl = Array.isArray,
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix,
      suffix,
      reentry = !1;
    var componentFrameCache = new (
      "function" === typeof WeakMap ? WeakMap : Map
    )();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {},
      ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function (
      type,
      config,
      maybeKey,
      isStaticChildren,
      source,
      self
    ) {
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
  })();


/***/ }),

/***/ "../../node_modules/react/cjs/react-jsx-runtime.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE$2
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: !0,
          enumerable: !0,
          value: disabledLog,
          writable: !0
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth &&
        console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = (match && match[1]) || "";
          suffix =
            -1 < x.stack.indexOf("\n    at")
              ? " (<anonymous>)"
              : -1 < x.stack.indexOf("@")
                ? "@unknown:0:0"
                : "";
        }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (void 0 !== frame) return frame;
      reentry = !0;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function () {
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) &&
                  "function" === typeof Fake.catch &&
                  Fake.catch(function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor &&
          namePropDescriptor.configurable &&
          Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
        var _RunInRootFrame$Deter =
            RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (
            _RunInRootFrame$Deter = namePropDescriptor = 0;
            namePropDescriptor < sampleLines.length &&
            !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            );

          )
            namePropDescriptor++;
          for (
            ;
            _RunInRootFrame$Deter < controlLines.length &&
            !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            );

          )
            _RunInRootFrame$Deter++;
          if (
            namePropDescriptor === sampleLines.length ||
            _RunInRootFrame$Deter === controlLines.length
          )
            for (
              namePropDescriptor = sampleLines.length - 1,
                _RunInRootFrame$Deter = controlLines.length - 1;
              1 <= namePropDescriptor &&
              0 <= _RunInRootFrame$Deter &&
              sampleLines[namePropDescriptor] !==
                controlLines[_RunInRootFrame$Deter];

            )
              _RunInRootFrame$Deter--;
          for (
            ;
            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
            namePropDescriptor--, _RunInRootFrame$Deter--
          )
            if (
              sampleLines[namePropDescriptor] !==
              controlLines[_RunInRootFrame$Deter]
            ) {
              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                do
                  if (
                    (namePropDescriptor--,
                    _RunInRootFrame$Deter--,
                    0 > _RunInRootFrame$Deter ||
                      sampleLines[namePropDescriptor] !==
                        controlLines[_RunInRootFrame$Deter])
                  ) {
                    var _frame =
                      "\n" +
                      sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                    fn.displayName &&
                      _frame.includes("<anonymous>") &&
                      (_frame = _frame.replace("<anonymous>", fn.displayName));
                    "function" === typeof fn &&
                      componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        (reentry = !1),
          (ReactSharedInternals.H = previousDispatcher),
          reenableLogs(),
          (Error.prepareStackTrace = frame);
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
        ? describeBuiltInComponentFrame(sampleLines)
        : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(
          type,
          !(!prototype || !prototype.isReactComponent)
        );
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return (type = describeNativeComponentFrame(type.render, !1)), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(
      type,
      config,
      maybeKey,
      isStaticChildren,
      source,
      self
    ) {
      if (
        "string" === typeof type ||
        "function" === typeof type ||
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        type === REACT_OFFSCREEN_TYPE ||
        ("object" === typeof type &&
          null !== type &&
          (type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_CONSUMER_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
            void 0 !== type.getModuleId))
      ) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (
                isStaticChildren = 0;
                isStaticChildren < children.length;
                isStaticChildren++
              )
                validateChildKeys(children[isStaticChildren], type);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children, type);
      } else {
        children = "";
        if (
          void 0 === type ||
          ("object" === typeof type &&
            null !== type &&
            0 === Object.keys(type).length)
        )
          children +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        null === type
          ? (isStaticChildren = "null")
          : isArrayImpl(type)
            ? (isStaticChildren = "array")
            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
              ? ((isStaticChildren =
                  "<" +
                  (getComponentNameFromType(type.type) || "Unknown") +
                  " />"),
                (children =
                  " Did you accidentally export a JSX literal instead of a component?"))
              : (isStaticChildren = typeof type);
        console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          isStaticChildren,
          children
        );
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren =
          0 < keys.length
            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
            : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] ||
          ((keys =
            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
          console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ),
          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
      }
      children = null;
      void 0 !== maybeKey &&
        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
      hasValidKey(config) &&
        (checkKeyStringCoercion(config.key), (children = "" + config.key));
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children &&
        defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if (
        "object" === typeof node &&
        node &&
        node.$$typeof !== REACT_CLIENT_REFERENCE
      )
        if (isArrayImpl(node))
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (
          (null === node || "object" !== typeof node
            ? (i = null)
            : ((i =
                (MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL]) ||
                node["@@iterator"]),
              (i = "function" === typeof i ? i : null)),
          "function" === typeof i &&
            i !== node.entries &&
            ((i = i.call(node)), i !== node))
        )
          for (; !(node = i.next()).done; )
            isValidElement(node.value) &&
              validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function validateExplicitKey(element, parentType) {
      if (
        element._store &&
        !element._store.validated &&
        null == element.key &&
        ((element._store.validated = 1),
        (parentType = getCurrentComponentErrorInfo(parentType)),
        !ownerHasKeyUseWarning[parentType])
      ) {
        ownerHasKeyUseWarning[parentType] = !0;
        var childOwner = "";
        element &&
          null != element._owner &&
          element._owner !== getOwner() &&
          ((childOwner = null),
          "number" === typeof element._owner.tag
            ? (childOwner = getComponentNameFromType(element._owner.type))
            : "string" === typeof element._owner.name &&
              (childOwner = element._owner.name),
          (childOwner = " It was passed a child from " + childOwner + "."));
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          parentType,
          childOwner
        );
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner &&
        (owner = getComponentNameFromType(owner.type)) &&
        (info = "\n\nCheck the render method of `" + owner + "`.");
      info ||
        ((parentType = getComponentNameFromType(parentType)) &&
          (info =
            "\n\nCheck the top-level render call using <" + parentType + ">."));
      return info;
    }
    var React = __webpack_require__("../../node_modules/react/index.js"),
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
      ReactSharedInternals =
        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      assign = Object.assign,
      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
      isArrayImpl = Array.isArray,
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix,
      suffix,
      reentry = !1;
    var componentFrameCache = new (
      "function" === typeof WeakMap ? WeakMap : Map
    )();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {},
      ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, !1, source, self);
    };
    exports.jsxs = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, !0, source, self);
    };
  })();


/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function () {
          console.warn(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            info[0],
            info[1]
          );
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance =
        ((publicInstance = publicInstance.constructor) &&
          (publicInstance.displayName || publicInstance.name)) ||
        "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] ||
        (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ),
        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE$2
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function isValidElementType(type) {
      return "string" === typeof type ||
        "function" === typeof type ||
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        type === REACT_OFFSCREEN_TYPE ||
        ("object" === typeof type &&
          null !== type &&
          (type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_CONSUMER_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
            void 0 !== type.getModuleId))
        ? !0
        : !1;
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: !0,
          enumerable: !0,
          value: disabledLog,
          writable: !0
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth &&
        console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = (match && match[1]) || "";
          suffix =
            -1 < x.stack.indexOf("\n    at")
              ? " (<anonymous>)"
              : -1 < x.stack.indexOf("@")
                ? "@unknown:0:0"
                : "";
        }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (void 0 !== frame) return frame;
      reentry = !0;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function () {
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) &&
                  "function" === typeof Fake.catch &&
                  Fake.catch(function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor &&
          namePropDescriptor.configurable &&
          Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
        var _RunInRootFrame$Deter =
            RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (
            _RunInRootFrame$Deter = namePropDescriptor = 0;
            namePropDescriptor < sampleLines.length &&
            !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            );

          )
            namePropDescriptor++;
          for (
            ;
            _RunInRootFrame$Deter < controlLines.length &&
            !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            );

          )
            _RunInRootFrame$Deter++;
          if (
            namePropDescriptor === sampleLines.length ||
            _RunInRootFrame$Deter === controlLines.length
          )
            for (
              namePropDescriptor = sampleLines.length - 1,
                _RunInRootFrame$Deter = controlLines.length - 1;
              1 <= namePropDescriptor &&
              0 <= _RunInRootFrame$Deter &&
              sampleLines[namePropDescriptor] !==
                controlLines[_RunInRootFrame$Deter];

            )
              _RunInRootFrame$Deter--;
          for (
            ;
            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
            namePropDescriptor--, _RunInRootFrame$Deter--
          )
            if (
              sampleLines[namePropDescriptor] !==
              controlLines[_RunInRootFrame$Deter]
            ) {
              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                do
                  if (
                    (namePropDescriptor--,
                    _RunInRootFrame$Deter--,
                    0 > _RunInRootFrame$Deter ||
                      sampleLines[namePropDescriptor] !==
                        controlLines[_RunInRootFrame$Deter])
                  ) {
                    var _frame =
                      "\n" +
                      sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                    fn.displayName &&
                      _frame.includes("<anonymous>") &&
                      (_frame = _frame.replace("<anonymous>", fn.displayName));
                    "function" === typeof fn &&
                      componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        (reentry = !1),
          (ReactSharedInternals.H = previousDispatcher),
          reenableLogs(),
          (Error.prepareStackTrace = frame);
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
        ? describeBuiltInComponentFrame(sampleLines)
        : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(
          type,
          !(!prototype || !prototype.isReactComponent)
        );
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return (type = describeNativeComponentFrame(type.render, !1)), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        oldElement._owner,
        oldElement.props
      );
      newKey._store.validated = oldElement._store.validated;
      return newKey;
    }
    function validateChildKeys(node, parentType) {
      if (
        "object" === typeof node &&
        node &&
        node.$$typeof !== REACT_CLIENT_REFERENCE
      )
        if (isArrayImpl(node))
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (
          ((i = getIteratorFn(node)),
          "function" === typeof i &&
            i !== node.entries &&
            ((i = i.call(node)), i !== node))
        )
          for (; !(node = i.next()).done; )
            isValidElement(node.value) &&
              validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function validateExplicitKey(element, parentType) {
      if (
        element._store &&
        !element._store.validated &&
        null == element.key &&
        ((element._store.validated = 1),
        (parentType = getCurrentComponentErrorInfo(parentType)),
        !ownerHasKeyUseWarning[parentType])
      ) {
        ownerHasKeyUseWarning[parentType] = !0;
        var childOwner = "";
        element &&
          null != element._owner &&
          element._owner !== getOwner() &&
          ((childOwner = null),
          "number" === typeof element._owner.tag
            ? (childOwner = getComponentNameFromType(element._owner.type))
            : "string" === typeof element._owner.name &&
              (childOwner = element._owner.name),
          (childOwner = " It was passed a child from " + childOwner + "."));
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          parentType,
          childOwner
        );
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner &&
        (owner = getComponentNameFromType(owner.type)) &&
        (info = "\n\nCheck the render method of `" + owner + "`.");
      info ||
        ((parentType = getComponentNameFromType(parentType)) &&
          (info =
            "\n\nCheck the top-level render call using <" + parentType + ">."));
      return info;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return (
        "$" +
        key.replace(/[=:]/g, function (match) {
          return escaperLookup[match];
        })
      );
    }
    function getElementKey(element, index) {
      return "object" === typeof element &&
        null !== element &&
        null != element.key
        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
        : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (
            ("string" === typeof thenable.status
              ? thenable.then(noop$1, noop$1)
              : ((thenable.status = "pending"),
                thenable.then(
                  function (fulfilledValue) {
                    "pending" === thenable.status &&
                      ((thenable.status = "fulfilled"),
                      (thenable.value = fulfilledValue));
                  },
                  function (error) {
                    "pending" === thenable.status &&
                      ((thenable.status = "rejected"),
                      (thenable.reason = error));
                  }
                )),
            thenable.status)
          ) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = !1;
      if (null === children) invokeCallback = !0;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = !0;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = !0;
                break;
              case REACT_LAZY_TYPE:
                return (
                  (invokeCallback = children._init),
                  mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  )
                );
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey =
          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback)
          ? ((escapedPrefix = ""),
            null != childKey &&
              (escapedPrefix =
                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            }))
          : null != callback &&
            (isValidElement(callback) &&
              (null != callback.key &&
                ((invokeCallback && invokeCallback.key === callback.key) ||
                  checkKeyStringCoercion(callback.key)),
              (escapedPrefix = cloneAndReplaceKey(
                callback,
                escapedPrefix +
                  (null == callback.key ||
                  (invokeCallback && invokeCallback.key === callback.key)
                    ? ""
                    : ("" + callback.key).replace(
                        userProvidedKeyEscapeRegex,
                        "$&/"
                      ) + "/") +
                  childKey
              )),
              "" !== nameSoFar &&
                null != invokeCallback &&
                isValidElement(invokeCallback) &&
                null == invokeCallback.key &&
                invokeCallback._store &&
                !invokeCallback._store.validated &&
                (escapedPrefix._store.validated = 2),
              (callback = escapedPrefix)),
            array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          (nameSoFar = children[i]),
            (type = childKey + getElementKey(nameSoFar, i)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if (((i = getIteratorFn(children)), "function" === typeof i))
        for (
          i === children.entries &&
            (didWarnAboutMaps ||
              console.warn(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (didWarnAboutMaps = !0)),
            children = i.call(children),
            i = 0;
          !(nameSoFar = children.next()).done;

        )
          (nameSoFar = nameSoFar.value),
            (type = childKey + getElementKey(nameSoFar, i++)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === array
              ? "object with keys {" + Object.keys(children).join(", ") + "}"
              : array) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [],
        count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function (moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 1), (payload._result = moduleObject);
          },
          function (error) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 2), (payload._result = error);
          }
        );
        -1 === payload._status &&
          ((payload._status = 0), (payload._result = ctor));
      }
      if (1 === payload._status)
        return (
          (ctor = payload._result),
          void 0 === ctor &&
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ),
          "default" in ctor ||
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ),
          ctor.default
        );
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (null === enqueueTaskImpl)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(
            module,
            "timers"
          ).setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function (callback) {
            !1 === didWarnAboutMessageChannel &&
              ((didWarnAboutMessageChannel = !0),
              "undefined" === typeof MessageChannel &&
                console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(void 0);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && "function" === typeof AggregateError
        ? new AggregateError(errors)
        : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 &&
        console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (null !== queue)
        if (0 !== queue.length)
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length
        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          reject(queue))
        : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = !0;
        var i = 0;
        try {
          for (; i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = !1;
              var continuation = callback(!1);
              if (null !== continuation) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = !1;
        }
      }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      didWarnStateUpdateForUnmountedComponent = {},
      ReactNoopUpdateQueue = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function (publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function (publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function (publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      },
      assign = Object.assign,
      emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function (partialState, callback) {
      if (
        "object" !== typeof partialState &&
        "function" !== typeof partialState &&
        null != partialState
      )
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      },
      fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) &&
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray,
      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
      ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      },
      hasOwnProperty = Object.prototype.hasOwnProperty,
      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix,
      suffix,
      reentry = !1;
    var componentFrameCache = new (
      "function" === typeof WeakMap ? WeakMap : Map
    )();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      specialPropKeyWarningShown,
      didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {},
      didWarnAboutMaps = !1,
      userProvidedKeyEscapeRegex = /\/+/g,
      reportGlobalError =
        "function" === typeof reportError
          ? reportError
          : function (error) {
              if (
                "object" === typeof window &&
                "function" === typeof window.ErrorEvent
              ) {
                var event = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" === typeof error &&
                    null !== error &&
                    "string" === typeof error.message
                      ? String(error.message)
                      : String(error),
                  error: error
                });
                if (!window.dispatchEvent(event)) return;
              } else if (
                "object" === typeof process &&
                "function" === typeof process.emit
              ) {
                process.emit("uncaughtException", error);
                return;
              }
              console.error(error);
            },
      didWarnAboutMessageChannel = !1,
      enqueueTaskImpl = null,
      actScopeDepth = 0,
      didWarnNoAwaitAct = !1,
      isFlushing = !1,
      queueSeveralMicrotasks =
        "function" === typeof queueMicrotask
          ? function (callback) {
              queueMicrotask(function () {
                return queueMicrotask(callback);
              });
            }
          : enqueueTask;
    exports.Children = {
      map: mapChildren,
      forEach: function (children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function (children) {
        var n = 0;
        mapChildren(children, function () {
          n++;
        });
        return n;
      },
      toArray: function (children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      },
      only: function (children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      ReactSharedInternals;
    exports.act = function (callback) {
      var prevActQueue = ReactSharedInternals.actQueue,
        prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = (ReactSharedInternals.actQueue =
          null !== prevActQueue ? prevActQueue : []),
        didAwaitActCall = !1;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          (popActScope(prevActQueue, prevActScopeDepth),
          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      if (
        null !== result &&
        "object" === typeof result &&
        "function" === typeof result.then
      ) {
        var thenable = result;
        queueSeveralMicrotasks(function () {
          didAwaitActCall ||
            didWarnNoAwaitAct ||
            ((didWarnNoAwaitAct = !0),
            console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
        });
        return {
          then: function (resolve, reject) {
            didAwaitActCall = !0;
            thenable.then(
              function (returnValue) {
                popActScope(prevActQueue, prevActScopeDepth);
                if (0 === prevActScopeDepth) {
                  try {
                    flushActQueue(queue),
                      enqueueTask(function () {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                  } catch (error$2) {
                    ReactSharedInternals.thrownErrors.push(error$2);
                  }
                  if (0 < ReactSharedInternals.thrownErrors.length) {
                    var _thrownError = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    );
                    ReactSharedInternals.thrownErrors.length = 0;
                    reject(_thrownError);
                  }
                } else resolve(returnValue);
              },
              function (error) {
                popActScope(prevActQueue, prevActScopeDepth);
                0 < ReactSharedInternals.thrownErrors.length
                  ? ((error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    )),
                    (ReactSharedInternals.thrownErrors.length = 0),
                    reject(error))
                  : reject(error);
              }
            );
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      0 === prevActScopeDepth &&
        (flushActQueue(queue),
        0 !== queue.length &&
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = !0),
              console.error(
                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
              ));
          }),
        (ReactSharedInternals.actQueue = null));
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      return {
        then: function (resolve, reject) {
          didAwaitActCall = !0;
          0 === prevActScopeDepth
            ? ((ReactSharedInternals.actQueue = queue),
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              }))
            : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function (element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " +
            element +
            "."
        );
      var props = assign({}, element.props),
        key = element.key,
        owner = element._owner;
      if (null != config) {
        var JSCompiler_inline_result;
        a: {
          if (
            hasOwnProperty.call(config, "ref") &&
            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) &&
            JSCompiler_inline_result.isReactWarning
          ) {
            JSCompiler_inline_result = !1;
            break a;
          }
          JSCompiler_inline_result = void 0 !== config.ref;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (key = "" + config.key));
        for (propName in config)
          !hasOwnProperty.call(config, propName) ||
            "key" === propName ||
            "__self" === propName ||
            "__source" === propName ||
            ("ref" === propName && void 0 === config.ref) ||
            (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0; i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, void 0, void 0, owner, props);
      for (key = 2; key < arguments.length; key++)
        validateChildKeys(arguments[key], props.type);
      return props;
    };
    exports.createContext = function (defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function (type, config, children) {
      if (isValidElementType(type))
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i], type);
      else {
        i = "";
        if (
          void 0 === type ||
          ("object" === typeof type &&
            null !== type &&
            0 === Object.keys(type).length)
        )
          i +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        if (null === type) var typeString = "null";
        else
          isArrayImpl(type)
            ? (typeString = "array")
            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
              ? ((typeString =
                  "<" +
                  (getComponentNameFromType(type.type) || "Unknown") +
                  " />"),
                (i =
                  " Did you accidentally export a JSX literal instead of a component?"))
              : (typeString = typeof type);
        console.error(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          typeString,
          i
        );
      }
      var propName;
      i = {};
      typeString = null;
      if (null != config)
        for (propName in (didWarnAboutOldJSXRuntime ||
          !("__self" in config) ||
          "key" in config ||
          ((didWarnAboutOldJSXRuntime = !0),
          console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )),
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (typeString = "" + config.key)),
        config))
          hasOwnProperty.call(config, propName) &&
            "key" !== propName &&
            "__self" !== propName &&
            "__source" !== propName &&
            (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) i.children = children;
      else if (1 < childrenLength) {
        for (
          var childArray = Array(childrenLength), _i = 0;
          _i < childrenLength;
          _i++
        )
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in ((childrenLength = type.defaultProps), childrenLength))
          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
      typeString &&
        defineKeyPropWarningGetter(
          i,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
    };
    exports.createRef = function () {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function (render) {
      null != render && render.$$typeof === REACT_MEMO_TYPE
        ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" !== typeof render
          ? console.error(
              "forwardRef requires a render function but was given %s.",
              null === render ? "null" : typeof render
            )
          : 0 !== render.length &&
            2 !== render.length &&
            console.error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              1 === render.length
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
      null != render &&
        null != render.defaultProps &&
        console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
        ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          render.name ||
            render.displayName ||
            (Object.defineProperty(render, "name", { value: name }),
            (render.displayName = name));
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function (ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function (type, compare) {
      isValidElementType(type) ||
        console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          type.name ||
            type.displayName ||
            (Object.defineProperty(type, "name", { value: name }),
            (type.displayName = name));
        }
      });
      return compare;
    };
    exports.startTransition = function (scope) {
      var prevTransition = ReactSharedInternals.T,
        currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set();
      try {
        var returnValue = scope(),
          onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish &&
          onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue &&
          null !== returnValue &&
          "function" === typeof returnValue.then &&
          returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null === prevTransition &&
          currentTransition._updatedFibers &&
          ((scope = currentTransition._updatedFibers.size),
          currentTransition._updatedFibers.clear(),
          10 < scope &&
            console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )),
          (ReactSharedInternals.T = prevTransition);
      }
    };
    exports.unstable_useCacheRefresh = function () {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function (usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function (action, initialState, permalink) {
      return resolveDispatcher().useActionState(
        action,
        initialState,
        permalink
      );
    };
    exports.useCallback = function (callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function (Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE &&
        console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function (value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function (value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function (create, deps) {
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function () {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function (ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function (create, deps) {
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function (create, deps) {
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function (create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function (passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function (reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function (initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function (initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function (
      subscribe,
      getSnapshot,
      getServerSnapshot
    ) {
      return resolveDispatcher().useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function () {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "../../node_modules/react/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../../node_modules/react/jsx-dev-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "../../node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "../../node_modules/react-router-dom/dist/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Await: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Await),
/* harmony export */   BrowserRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.BrowserRouter),
/* harmony export */   Form: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Form),
/* harmony export */   HashRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.HashRouter),
/* harmony export */   HydratedRouter: () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_1__.HydratedRouter),
/* harmony export */   IDLE_BLOCKER: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.IDLE_NAVIGATION),
/* harmony export */   Link: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Link),
/* harmony export */   Links: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Links),
/* harmony export */   MemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter),
/* harmony export */   Meta: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Meta),
/* harmony export */   NavLink: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.NavLink),
/* harmony export */   Navigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.NavigationType),
/* harmony export */   Outlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Outlet),
/* harmony export */   PrefetchPageLinks: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.PrefetchPageLinks),
/* harmony export */   Route: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   Router: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   RouterProvider: () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_1__.RouterProvider),
/* harmony export */   Routes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Routes),
/* harmony export */   Scripts: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Scripts),
/* harmony export */   ScrollRestoration: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.ScrollRestoration),
/* harmony export */   ServerRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.ServerRouter),
/* harmony export */   StaticRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter),
/* harmony export */   StaticRouterProvider: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouterProvider),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_DataRouterStateContext),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_ErrorResponseImpl),
/* harmony export */   UNSAFE_FetchersContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_FetchersContext),
/* harmony export */   UNSAFE_FrameworkContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_FrameworkContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_NavigationContext),
/* harmony export */   UNSAFE_RemixErrorBoundary: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_RemixErrorBoundary),
/* harmony export */   UNSAFE_RouteContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_RouteContext),
/* harmony export */   UNSAFE_ServerMode: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_ServerMode),
/* harmony export */   UNSAFE_SingleFetchRedirectSymbol: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_SingleFetchRedirectSymbol),
/* harmony export */   UNSAFE_ViewTransitionContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_ViewTransitionContext),
/* harmony export */   UNSAFE_createBrowserHistory: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_createBrowserHistory),
/* harmony export */   UNSAFE_createClientRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_createClientRoutes),
/* harmony export */   UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_createClientRoutesWithHMRRevalidationOptOut),
/* harmony export */   UNSAFE_createRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_createRouter),
/* harmony export */   UNSAFE_decodeViaTurboStream: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_decodeViaTurboStream),
/* harmony export */   UNSAFE_deserializeErrors: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_deserializeErrors),
/* harmony export */   UNSAFE_getPatchRoutesOnNavigationFunction: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPatchRoutesOnNavigationFunction),
/* harmony export */   UNSAFE_getSingleFetchDataStrategy: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getSingleFetchDataStrategy),
/* harmony export */   UNSAFE_invariant: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant),
/* harmony export */   UNSAFE_mapRouteProperties: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_mapRouteProperties),
/* harmony export */   UNSAFE_shouldHydrateRouteLoader: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_shouldHydrateRouteLoader),
/* harmony export */   UNSAFE_useFogOFWarDiscovery: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_useFogOFWarDiscovery),
/* harmony export */   UNSAFE_useScrollRestoration: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_useScrollRestoration),
/* harmony export */   createBrowserRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createBrowserRouter),
/* harmony export */   createCookie: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createCookie),
/* harmony export */   createCookieSessionStorage: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createCookieSessionStorage),
/* harmony export */   createHashRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryRouter),
/* harmony export */   createMemorySessionStorage: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createMemorySessionStorage),
/* harmony export */   createPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createPath),
/* harmony export */   createRequestHandler: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createRequestHandler),
/* harmony export */   createRoutesFromChildren: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createRoutesFromElements),
/* harmony export */   createRoutesStub: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createRoutesStub),
/* harmony export */   createSearchParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createSearchParams),
/* harmony export */   createSession: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createSession),
/* harmony export */   createSessionStorage: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createSessionStorage),
/* harmony export */   createStaticHandler: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createStaticHandler),
/* harmony export */   createStaticRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.createStaticRouter),
/* harmony export */   data: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.data),
/* harmony export */   generatePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   isCookie: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.isCookie),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse),
/* harmony export */   isSession: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.isSession),
/* harmony export */   matchPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.redirectDocument),
/* harmony export */   renderMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.renderMatches),
/* harmony export */   replace: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.replace),
/* harmony export */   resolvePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.resolvePath),
/* harmony export */   unstable_HistoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.unstable_HistoryRouter),
/* harmony export */   unstable_setDevServerHooks: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.unstable_setDevServerHooks),
/* harmony export */   unstable_usePrompt: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.unstable_usePrompt),
/* harmony export */   useActionData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useActionData),
/* harmony export */   useAsyncError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useAsyncError),
/* harmony export */   useAsyncValue: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useBeforeUnload),
/* harmony export */   useBlocker: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useBlocker),
/* harmony export */   useFetcher: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useFetcher),
/* harmony export */   useFetchers: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useFetchers),
/* harmony export */   useFormAction: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useFormAction),
/* harmony export */   useHref: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHref),
/* harmony export */   useInRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLoaderData),
/* harmony export */   useLocation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation),
/* harmony export */   useMatch: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useMatch),
/* harmony export */   useMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useMatches),
/* harmony export */   useNavigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useNavigate),
/* harmony export */   useNavigation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useNavigation),
/* harmony export */   useNavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useNavigationType),
/* harmony export */   useOutlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useOutlet),
/* harmony export */   useOutletContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useOutletContext),
/* harmony export */   useParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams),
/* harmony export */   useResolvedPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useResolvedPath),
/* harmony export */   useRevalidator: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRevalidator),
/* harmony export */   useRouteError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRoutes),
/* harmony export */   useSearchParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useSearchParams),
/* harmony export */   useSubmit: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useSubmit),
/* harmony export */   useViewTransitionState: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useViewTransitionState)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react-router/dist/development/dom-export.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react-router/dist/development/index.mjs");
/**
 * react-router-dom v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

// index.ts





/***/ }),

/***/ "../../node_modules/react-router/dist/development/chunk-D52XG6IA.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Await: () => (/* binding */ Await),
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   DataRouterContext: () => (/* binding */ DataRouterContext),
/* harmony export */   DataRouterStateContext: () => (/* binding */ DataRouterStateContext),
/* harmony export */   ErrorResponseImpl: () => (/* binding */ ErrorResponseImpl),
/* harmony export */   FetchersContext: () => (/* binding */ FetchersContext),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   FrameworkContext: () => (/* binding */ FrameworkContext),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   HistoryRouter: () => (/* binding */ HistoryRouter),
/* harmony export */   IDLE_BLOCKER: () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* binding */ IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Links: () => (/* binding */ Links),
/* harmony export */   LocationContext: () => (/* binding */ LocationContext),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   Meta: () => (/* binding */ Meta),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Navigate: () => (/* binding */ Navigate),
/* harmony export */   NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   Outlet: () => (/* binding */ Outlet),
/* harmony export */   PrefetchPageLinks: () => (/* binding */ PrefetchPageLinks),
/* harmony export */   RemixErrorBoundary: () => (/* binding */ RemixErrorBoundary),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   RouteContext: () => (/* binding */ RouteContext),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   Scripts: () => (/* binding */ Scripts),
/* harmony export */   ScrollRestoration: () => (/* binding */ ScrollRestoration),
/* harmony export */   ServerMode: () => (/* binding */ ServerMode),
/* harmony export */   ServerRouter: () => (/* binding */ ServerRouter),
/* harmony export */   SingleFetchRedirectSymbol: () => (/* binding */ SingleFetchRedirectSymbol),
/* harmony export */   StaticRouter: () => (/* binding */ StaticRouter),
/* harmony export */   StaticRouterProvider: () => (/* binding */ StaticRouterProvider),
/* harmony export */   ViewTransitionContext: () => (/* binding */ ViewTransitionContext),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createBrowserRouter: () => (/* binding */ createBrowserRouter),
/* harmony export */   createClientRoutes: () => (/* binding */ createClientRoutes),
/* harmony export */   createClientRoutesWithHMRRevalidationOptOut: () => (/* binding */ createClientRoutesWithHMRRevalidationOptOut),
/* harmony export */   createCookie: () => (/* binding */ createCookie),
/* harmony export */   createCookieSessionStorage: () => (/* binding */ createCookieSessionStorage),
/* harmony export */   createHashRouter: () => (/* binding */ createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* binding */ createMemoryRouter),
/* harmony export */   createMemorySessionStorage: () => (/* binding */ createMemorySessionStorage),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   createRequestHandler: () => (/* binding */ createRequestHandler),
/* harmony export */   createRouter: () => (/* binding */ createRouter),
/* harmony export */   createRoutesFromChildren: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* binding */ createRoutesFromElements),
/* harmony export */   createRoutesStub: () => (/* binding */ createRoutesStub),
/* harmony export */   createSearchParams: () => (/* binding */ createSearchParams),
/* harmony export */   createSession: () => (/* binding */ createSession),
/* harmony export */   createSessionStorage: () => (/* binding */ createSessionStorage),
/* harmony export */   createStaticHandler: () => (/* binding */ createStaticHandler2),
/* harmony export */   createStaticRouter: () => (/* binding */ createStaticRouter),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   decodeViaTurboStream: () => (/* binding */ decodeViaTurboStream),
/* harmony export */   deserializeErrors: () => (/* binding */ deserializeErrors2),
/* harmony export */   generatePath: () => (/* binding */ generatePath),
/* harmony export */   getPatchRoutesOnNavigationFunction: () => (/* binding */ getPatchRoutesOnNavigationFunction),
/* harmony export */   getSingleFetchDataStrategy: () => (/* binding */ getSingleFetchDataStrategy),
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   isCookie: () => (/* binding */ isCookie),
/* harmony export */   isRouteErrorResponse: () => (/* binding */ isRouteErrorResponse),
/* harmony export */   isSession: () => (/* binding */ isSession),
/* harmony export */   mapRouteProperties: () => (/* binding */ mapRouteProperties),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   redirectDocument: () => (/* binding */ redirectDocument),
/* harmony export */   renderMatches: () => (/* binding */ renderMatches),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   setDevServerHooks: () => (/* binding */ setDevServerHooks),
/* harmony export */   shouldHydrateRouteLoader: () => (/* binding */ shouldHydrateRouteLoader),
/* harmony export */   useActionData: () => (/* binding */ useActionData),
/* harmony export */   useAsyncError: () => (/* binding */ useAsyncError),
/* harmony export */   useAsyncValue: () => (/* binding */ useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* binding */ useBeforeUnload),
/* harmony export */   useBlocker: () => (/* binding */ useBlocker),
/* harmony export */   useFetcher: () => (/* binding */ useFetcher),
/* harmony export */   useFetchers: () => (/* binding */ useFetchers),
/* harmony export */   useFogOFWarDiscovery: () => (/* binding */ useFogOFWarDiscovery),
/* harmony export */   useFormAction: () => (/* binding */ useFormAction),
/* harmony export */   useHref: () => (/* binding */ useHref),
/* harmony export */   useInRouterContext: () => (/* binding */ useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* binding */ useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useMatches: () => (/* binding */ useMatches),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationType: () => (/* binding */ useNavigationType),
/* harmony export */   useOutlet: () => (/* binding */ useOutlet),
/* harmony export */   useOutletContext: () => (/* binding */ useOutletContext),
/* harmony export */   useParams: () => (/* binding */ useParams),
/* harmony export */   usePrompt: () => (/* binding */ usePrompt),
/* harmony export */   useResolvedPath: () => (/* binding */ useResolvedPath),
/* harmony export */   useRevalidator: () => (/* binding */ useRevalidator),
/* harmony export */   useRouteError: () => (/* binding */ useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* binding */ useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* binding */ useRoutes),
/* harmony export */   useScrollRestoration: () => (/* binding */ useScrollRestoration),
/* harmony export */   useSearchParams: () => (/* binding */ useSearchParams),
/* harmony export */   useSubmit: () => (/* binding */ useSubmit),
/* harmony export */   useViewTransitionState: () => (/* binding */ useViewTransitionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var turbo_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/turbo-stream/dist/turbo-stream.mjs");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/cookie/index.js");
/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/set-cookie-parser/lib/set-cookie.js");
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

// lib/router/history.ts
var Action = /* @__PURE__ */ ((Action2) => {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
  return Action2;
})(Action || {});
var PopStateEventType = "popstate";
function createMemoryHistory(options = {}) {
  let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
  let entries;
  entries = initialEntries.map(
    (entry, index2) => createMemoryLocation(
      entry,
      typeof entry === "string" ? null : entry.state,
      index2 === 0 ? "default" : void 0
    )
  );
  let index = clampIndex(
    initialIndex == null ? entries.length - 1 : initialIndex
  );
  let action = "POP" /* Pop */;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state = null, key) {
    let location = createLocation(
      entries ? getCurrentLocation().pathname : "/",
      to,
      state,
      key
    );
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in memory history: ${JSON.stringify(
        to
      )}`
    );
    return location;
  }
  function createHref2(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref: createHref2,
    createURL(to) {
      return new URL(createHref2(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = "PUSH" /* Push */;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 1 });
      }
    },
    replace(to, state) {
      action = "REPLACE" /* Replace */;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 0 });
      }
    },
    go(delta) {
      action = "POP" /* Pop */;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({ action, location: nextLocation, delta });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function createHashHistory(options = {}) {
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substring(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        to
      )})`
    );
  }
  return getUrlBasedHistory(
    createHashLocation,
    createHashHref,
    validateHashLocation,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state = null, key) {
  let location = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP" /* Pop */;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP" /* Pop */;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH" /* Push */;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE" /* Replace */;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href}`
    );
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}

// lib/router/utils.ts
var immutableRouteKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}) {
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(
      route.index !== true || !route.children,
      `Cannot specify children on an index route`
    );
    invariant(
      !manifest[id],
      `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`
    );
    if (isIndexRoute(route)) {
      let indexRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id
      };
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id,
        children: void 0
      };
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(
          route.children,
          mapRouteProperties2,
          treePath,
          manifest
        );
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(originalPath, params = {}) {
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(
      false,
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    path = path.replace(/\*$/, "/*");
  }
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    if (isLastSegment && segment === "*") {
      const star = "*";
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, `Missing ":${key}" param`);
      return stringify(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  );
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var DataWithResponseInit = class {
  constructor(data2, init) {
    this.type = "DataWithResponseInit";
    this.data = data2;
    this.init = init || null;
  }
};
function data(data2, init) {
  return new DataWithResponseInit(
    data2,
    typeof init === "number" ? { status: init } : init
  );
}
var redirect = (url, init = 302) => {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, {
    ...responseInit,
    headers
  });
};
var redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
var replace = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Replace", "true");
  return response;
};
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

// lib/router/router.ts
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  invariant(
    init.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    init.routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  let future = {
    ...init.future
  };
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions2 = null;
  let getScrollRestorationKey2 = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let { matches, route } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = { [route.id]: error };
  }
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(
      initialMatches,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    let fogOfWar = checkFogOfWar(
      null,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active && fogOfWar.matches) {
      initialMatches = fogOfWar.matches;
    }
  } else if (initialMatches.some((m) => m.route.lazy)) {
    initialized = false;
  } else if (!initialMatches.some((m) => m.route.loader)) {
    initialized = true;
  } else {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    if (errors) {
      let idx = initialMatches.findIndex(
        (m) => errors[m.route.id] !== void 0
      );
      initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(
        (m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors)
      );
    }
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = "POP" /* Pop */;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledFetcherLoads = /* @__PURE__ */ new Set();
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let unblockBlockerHistoryUpdate = void 0;
  let pendingRevalidationDfd = null;
  function initialize() {
    unlistenHistory = init.history.listen(
      ({ action: historyAction, location, delta }) => {
        if (unblockBlockerHistoryUpdate) {
          unblockBlockerHistoryUpdate();
          unblockBlockerHistoryUpdate = void 0;
          return;
        }
        warning(
          blockerFunctions.size === 0 || delta != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location,
          historyAction
        });
        if (blockerKey && delta != null) {
          let nextHistoryUpdatePromise = new Promise((resolve) => {
            unblockBlockerHistoryUpdate = resolve;
          });
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location
              });
              nextHistoryUpdatePromise.then(() => init.history.go(delta));
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        return startNavigation(historyAction, location);
      }
    );
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation("POP" /* Pop */, state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts = {}) {
    state = {
      ...state,
      ...newState
    };
    let unmountedFetchers = [];
    let mountedFetchers = [];
    state.fetchers.forEach((fetcher, key) => {
      if (fetcher.state === "idle") {
        if (fetchersQueuedForDeletion.has(key)) {
          unmountedFetchers.push(key);
        } else {
          mountedFetchers.push(key);
        }
      }
    });
    [...subscribers].forEach(
      (subscriber) => subscriber(state, {
        deletedFetchers: unmountedFetchers,
        viewTransitionOpts: opts.viewTransitionOpts,
        flushSync: opts.flushSync === true
      })
    );
    unmountedFetchers.forEach((key) => deleteFetcher(key));
    mountedFetchers.forEach((key) => state.fetchers.delete(key));
  }
  function completeNavigation(location, newState, { flushSync } = {}) {
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(
      state.loaderData,
      newState.loaderData,
      newState.matches || [],
      newState.errors
    ) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation) {
    } else if (pendingAction === "POP" /* Pop */) {
    } else if (pendingAction === "PUSH" /* Push */) {
      init.history.push(location, location.state);
    } else if (pendingAction === "REPLACE" /* Replace */) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === "POP" /* Pop */) {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(
      {
        ...newState,
        // matches, errors, fetchers go through as-is
        actionData,
        loaderData,
        historyAction: pendingAction,
        location,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition: getSavedScrollPosition(
          location,
          newState.matches || state.matches
        ),
        preventScrollReset,
        blockers
      },
      {
        viewTransitionOpts,
        flushSync: flushSync === true
      }
    );
    pendingAction = "POP" /* Pop */;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    pendingRevalidationDfd?.resolve();
    pendingRevalidationDfd = null;
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      to,
      opts?.fromRouteId,
      opts?.relative
    );
    let { path, submission, error } = normalizeNavigateOptions(
      false,
      normalizedPath,
      opts
    );
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = {
      ...nextLocation,
      ...init.history.encodeLocation(nextLocation)
    };
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = "PUSH" /* Push */;
    if (userReplace === true) {
      historyAction = "REPLACE" /* Replace */;
    } else if (userReplace === false) {
    } else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = "REPLACE" /* Replace */;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({ blockers });
        }
      });
      return;
    }
    await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  function revalidate() {
    if (!pendingRevalidationDfd) {
      pendingRevalidationDfd = createDeferred();
    }
    interruptActiveLoads();
    updateState({ revalidation: "loading" });
    let promise = pendingRevalidationDfd.promise;
    if (state.navigation.state === "submitting") {
      return promise;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return promise;
    }
    startNavigation(
      pendingAction || state.historyAction,
      state.navigation.location,
      {
        overrideNavigation: state.navigation,
        // Proxy through any rending view transition
        enableViewTransition: pendingViewTransitionEnabled === true
      }
    );
    return promise;
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let { error, notFoundMatches, route } = handleNavigational404(
        location.pathname
      );
      completeNavigation(
        location,
        {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        },
        { flushSync }
      );
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, { matches }, { flushSync });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(
      init.history,
      location,
      pendingNavigationController.signal,
      opts && opts.submission
    );
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [
        findNearestBoundary(matches).route.id,
        { type: "error" /* error */, error: opts.pendingError }
      ];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(
        request,
        location,
        opts.submission,
        matches,
        fogOfWar.active,
        { replace: opts.replace, flushSync }
      );
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      fogOfWar.active = false;
      request = createClientSideRequest(
        init.history,
        request.url,
        request.signal
      );
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(
      request,
      location,
      matches,
      fogOfWar.active,
      loadingNavigation,
      opts && opts.submission,
      opts && opts.fetcherSubmission,
      opts && opts.replace,
      opts && opts.initialHydration === true,
      flushSync,
      pendingActionResult
    );
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, {
      matches: updatedMatches || matches,
      ...getActionDataForCommit(pendingActionResult),
      loaderData,
      errors
    });
  }
  async function handleAction(request, location, submission, matches, isFogOfWar, opts = {}) {
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({ navigation }, { flushSync: opts.flushSync === true });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [
            boundaryId,
            {
              type: "error" /* error */,
              error: discoverResult.error
            }
          ]
        };
      } else if (!discoverResult.matches) {
        let { notFoundMatches, error, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          pendingActionResult: [
            route.id,
            {
              type: "error" /* error */,
              error
            }
          ]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: "error" /* error */,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy(
        "action",
        state,
        request,
        [actionMatch],
        matches,
        null
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
    }
    if (isRedirectResult(result)) {
      let replace2;
      if (opts && opts.replace != null) {
        replace2 = opts.replace;
      } else {
        let location2 = normalizeRedirectLocation(
          result.response.headers.get("Location"),
          new URL(request.url),
          basename
        );
        replace2 = location2 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace: replace2
      });
      return { shortCircuited: true };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = "PUSH" /* Push */;
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(
          {
            navigation: loadingNavigation,
            ...actionData !== void 0 ? { actionData } : {}
          },
          {
            flushSync
          }
        );
      }
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let { error, notFoundMatches, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      activeSubmission,
      location,
      initialHydration === true,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      pendingActionResult
    );
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(
        location,
        {
          matches,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
          ...getActionDataForCommit(pendingActionResult),
          ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
        },
        { flushSync }
      );
      return { shortCircuited: true };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== void 0) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, { flushSync });
    }
    revalidatingFetchers.forEach((rf) => {
      abortFetcher(rf.key);
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      request
    );
    if (request.signal.aborted) {
      return { shortCircuited: true };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      pendingActionResult,
      revalidatingFetchers,
      fetcherResults
    );
    if (initialHydration && state.errors) {
      errors = { ...state.errors, ...errors };
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return {
      matches,
      loaderData,
      errors,
      ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
    };
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf) => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        fetcher ? fetcher.data : void 0
      );
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  async function fetch2(key, routeId, href, opts) {
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      href,
      routeId,
      opts?.relative
    );
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(
        key,
        routeId,
        getInternalRouterError(404, { pathname: normalizedPath }),
        { flushSync }
      );
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(
      true,
      normalizedPath,
      opts
    );
    if (error) {
      setFetcherError(key, routeId, error, { flushSync });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      await handleFetcherAction(
        key,
        routeId,
        path,
        match,
        matches,
        fogOfWar.active,
        flushSync,
        preventScrollReset,
        submission
      );
      return;
    }
    fetchLoadMatches.set(key, { routeId, path });
    await handleFetcherLoader(
      key,
      routeId,
      path,
      match,
      matches,
      fogOfWar.active,
      flushSync,
      preventScrollReset,
      submission
    );
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, { flushSync });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal,
      submission
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        requestMatches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy(
      "action",
      state,
      fetchRequest,
      [match],
      requestMatches,
      key
    );
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(
      init.history,
      nextLocation,
      abortController.signal
    );
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      false,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      [match.route.id, actionResult]
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        existingFetcher2 ? existingFetcher2.data : void 0
      );
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({ fetchers: new Map(state.fetchers) });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      revalidationRequest
    );
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      void 0,
      revalidatingFetchers,
      fetcherResults
    );
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(
          state.loaderData,
          loaderData,
          matches,
          errors
        ),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(
      key,
      getLoadingFetcher(
        submission,
        existingFetcher ? existingFetcher.data : void 0
      ),
      { flushSync }
    );
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy(
      "loader",
      state,
      fetchRequest,
      [match],
      matches,
      key
    );
    let result = results[match.route.id];
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect2, isNavigation, {
    submission,
    fetcherSubmission,
    preventScrollReset,
    replace: replace2
  } = {}) {
    if (redirect2.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect2.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(
      location,
      new URL(request.url),
      basename
    );
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace2) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" /* Replace */ : "PUSH" /* Push */;
    let { formMethod, formAction, formEncType } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectNavigationType, redirectLocation, {
        submission: {
          ...activeSubmission,
          formAction: location
        },
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    } else {
      let overrideNavigation = getLoadingNavigation(
        redirectLocation,
        submission
      );
      await startNavigation(redirectNavigationType, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    }
  }
  async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(
        dataStrategyImpl,
        type,
        state2,
        request,
        matchesToLoad,
        matches,
        fetcherKey,
        manifest,
        mapRouteProperties2
      );
    } catch (e) {
      matchesToLoad.forEach((m) => {
        dataResults[m.route.id] = {
          type: "error" /* error */,
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: "redirect" /* redirect */,
          response: normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            routeId,
            matches,
            basename
          )
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(
          result
        );
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
    let loaderResultsPromise = callDataStrategy(
      "loader",
      state2,
      request,
      matchesToLoad,
      matches,
      null
    );
    let fetcherResultsPromise = Promise.all(
      fetchersToLoad.map(async (f) => {
        if (f.matches && f.match && f.controller) {
          let results = await callDataStrategy(
            "loader",
            state2,
            createClientSideRequest(init.history, f.path, f.controller.signal),
            [f.match],
            f.matches,
            f.key
          );
          let result = results[f.match.route.id];
          return { [f.key]: result };
        } else {
          return Promise.resolve({
            [f.key]: {
              type: "error" /* error */,
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            }
          });
        }
      })
    );
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce(
      (acc, r) => Object.assign(acc, r),
      {}
    );
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts = {}) {
    state.fetchers.set(key, fetcher);
    updateState(
      { fetchers: new Map(state.fetchers) },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function setFetcherError(key, routeId, error, opts = {}) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState(
      {
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    if (fetchersQueuedForDeletion.has(key)) {
      fetchersQueuedForDeletion.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    fetchersQueuedForDeletion.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function queueFetcherForDeletion(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      fetchersQueuedForDeletion.add(key);
    } else {
      activeFetchers.set(key, count);
    }
    updateState({ fetchers: new Map(state.fetchers) });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(
      blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked",
      `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`
    );
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({ blockers });
  }
  function shouldBlockNavigation({
    currentLocation,
    nextLocation,
    historyAction
  }) {
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, { pathname });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { matches, route } = getShortCircuitMatches(routesToUse);
    return { notFoundMatches: matches, route, error };
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions2 = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey2 = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({ restoreScrollPosition: y });
      }
    }
    return () => {
      savedScrollPositions2 = null;
      getScrollPosition = null;
      getScrollRestorationKey2 = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey2) {
      let key = getScrollRestorationKey2(
        location,
        matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))
      );
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions2[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(
          routesToUse,
          pathname,
          basename,
          true
        );
        return { active: true, matches: fogMatches || [] };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(
            routesToUse,
            pathname,
            basename,
            true
          );
          return { active: true, matches: partialMatches };
        }
      }
    }
    return { active: false, matches: null };
  }
  async function discoverRoutes(matches, pathname, signal) {
    if (!patchRoutesOnNavigationImpl) {
      return { type: "success", matches };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          path: pathname,
          matches: partialMatches,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(
              routeId,
              children,
              routesToUse,
              localManifest,
              mapRouteProperties2
            );
          }
        });
      } catch (e) {
        return { type: "error", error: e, partialMatches };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return { type: "aborted" };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return { type: "success", matches: newMatches };
      }
      let newPartialMatches = matchRoutesImpl(
        routesToUse,
        pathname,
        basename,
        true
      );
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(
        (m, i) => m.route.id === newPartialMatches[i].route.id
      )) {
        return { type: "success", matches: null };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(
      newRoutes,
      mapRouteProperties2,
      void 0,
      manifest
    );
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(
      routeId,
      children,
      routesToUse,
      manifest,
      mapRouteProperties2
    );
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: queueFetcherForDeletion,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
function createStaticHandler(routes, opts) {
  invariant(
    routes.length > 0,
    "You must provide a non-empty routes array to createStaticHandler"
  );
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties2 = opts?.mapRouteProperties || defaultMapRouteProperties;
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  async function query(request, {
    requestContext,
    skipLoaderErrorBubbling,
    dataStrategy
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, { method });
      let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, { pathname: location.pathname });
      let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      skipLoaderErrorBubbling === true,
      null
    );
    if (isResponse(result)) {
      return result;
    }
    return { location, basename, ...result };
  }
  async function queryRoute(request, {
    routeId,
    requestContext,
    dataStrategy
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, { method });
    } else if (!matches) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      false,
      match
    );
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      return Object.values(result.loaderData)[0];
    }
    return void 0;
  }
  async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(
      request.signal,
      "query()/queryRoute() requests must contain an AbortController signal"
    );
    try {
      if (isMutationMethod(request.method)) {
        let result2 = await submit(
          request,
          matches,
          routeMatch || getTargetMatch(matches, location),
          requestContext,
          dataStrategy,
          skipLoaderErrorBubbling,
          routeMatch != null
        );
        return result2;
      }
      let result = await loadRouteData(
        request,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        routeMatch
      );
      return isResponse(result) ? result : {
        ...result,
        actionData: null,
        actionHeaders: {}
      };
    } catch (e) {
      if (isDataStrategyResult(e) && isResponse(e.result)) {
        if (e.type === "error" /* error */) {
          throw e.result;
        }
        return e.result;
      }
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: "error" /* error */,
        error
      };
    } else {
      let results = await callDataStrategy(
        "action",
        request,
        [actionMatch],
        matches,
        isRouteRequest,
        requestContext,
        dataStrategy
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest);
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: { [actionMatch.route.id]: result.data },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context2 = await loadRouteData(
        loaderRequest,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        null,
        [boundaryMatch.route.id, result]
      );
      return {
        ...context2,
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: {
          ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
        }
      };
    }
    let context = await loadRouteData(
      loaderRequest,
      matches,
      requestContext,
      dataStrategy,
      skipLoaderErrorBubbling,
      null
    );
    return {
      ...context,
      actionData: {
        [actionMatch.route.id]: result.data
      },
      // action status codes take precedence over loader status codes
      ...result.statusCode ? { statusCode: result.statusCode } : {},
      actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
    };
  }
  async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch?.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(
      (m) => m.route.loader || m.route.lazy
    );
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce(
          (acc, m) => Object.assign(acc, { [m.route.id]: null }),
          {}
        ),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }
    let results = await callDataStrategy(
      "loader",
      request,
      matchesToLoad,
      matches,
      isRouteRequest,
      requestContext,
      dataStrategy
    );
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest);
    }
    let context = processRouteLoaderData(
      matches,
      results,
      pendingActionResult,
      true,
      skipLoaderErrorBubbling
    );
    let executedLoaders = new Set(
      matchesToLoad.map((match) => match.route.id)
    );
    matches.forEach((match) => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return {
      ...context,
      matches
    };
  }
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
    let results = await callDataStrategyImpl(
      dataStrategy || defaultDataStrategy,
      type,
      null,
      request,
      matchesToLoad,
      matches,
      null,
      manifest,
      mapRouteProperties2,
      requestContext
    );
    let dataResults = {};
    await Promise.all(
      matches.map(async (match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let result = results[match.route.id];
        if (isRedirectDataStrategyResult(result)) {
          let response = result.result;
          throw normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            match.route.id,
            matches,
            basename
          );
        }
        if (isResponse(result.result) && isRouteRequest) {
          throw result;
        }
        dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
      })
    );
    return dataResults;
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes, context, error) {
  let newContext = {
    ...context,
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  };
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
  if (request.signal.reason !== void 0) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(
    `${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`
  );
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(
    to ? to : ".",
    getResolveToMatches(contextualMatches),
    stripBasename(location.pathname, basename) || location.pathname,
    relative === "path"
  );
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return { path };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, { method: opts.formMethod })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, { type: "invalid-body" })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = rawFormMethod.toUpperCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce(
          (acc, [name, value]) => `${acc}${name}=${value}
`,
          ""
        )
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(
    typeof FormData === "function",
    "FormData is not available in this environment"
  );
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return { path, submission };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = `?${searchParams}`;
  return { path: createPath(parsedPath), submission };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary = false) {
  let index = matches.findIndex((m) => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      Object.keys(state.errors)[0],
      true
    );
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      pendingActionResult[0]
    );
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let { route } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, {
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params,
      ...submission,
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    });
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, {
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params,
        ...submission,
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      });
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== void 0;
  let hasError = errors != null && errors[route.id] !== void 0;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(
      route,
      `No route found to patch children into: routeId = ${routeId}`
    );
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = children.filter(
    (newRoute) => !childrenToPatch.some(
      (existingRoute) => isSameRoute(newRoute, existingRoute)
    )
  );
  let newRoutes = convertRoutesToDataRoutes(
    uniqueChildren,
    mapRouteProperties2,
    [routeId || "_", "patch", String(childrenToPatch?.length || "0")],
    manifest
  );
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every(
    (aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild))
  );
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(
      !isPropertyStaticallyDefined,
      `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`
    );
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided `mapRouteProperties`
    // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
    // since the logic will differ between frameworks.
    ...mapRouteProperties2(routeToUpdate),
    lazy: void 0
  });
}
async function defaultDataStrategy({
  matches
}) {
  let matchesToLoad = matches.filter((m) => m.shouldLoad);
  let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
  return results.reduce(
    (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
    {}
  );
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, requestContext) {
  let loadRouteDefinitionsPromises = matches.map(
    (m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties2, manifest) : void 0
  );
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
    let resolve = async (handlerOverride) => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(
        type,
        request,
        match,
        loadRoutePromise,
        handlerOverride,
        requestContext
      ) : Promise.resolve({ type: "data" /* data */, result: void 0 });
    };
    return {
      ...match,
      shouldLoad,
      resolve
    };
  });
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
  }
  return results;
}
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(
          new Error(
            `You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`
          )
        );
      }
      return handler(
        {
          request,
          params: match.params,
          context: staticContext
        },
        ...ctx !== void 0 ? [ctx] : []
      );
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
        return { type: "data", result: val };
      } catch (e) {
        return { type: "error", result: e };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (loadRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadRoutePromise
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return { type: "data" /* data */, result: void 0 };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
  } catch (e) {
    return { type: "error" /* error */, result: e };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let { result, type } = dataStrategyResult;
  if (isResponse(result)) {
    let data2;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data2 = null;
        } else {
          data2 = await result.json();
        }
      } else {
        data2 = await result.text();
      }
    } catch (e) {
      return { type: "error" /* error */, error: e };
    }
    if (type === "error" /* error */) {
      return {
        type: "error" /* error */,
        error: new ErrorResponseImpl(result.status, result.statusText, data2),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: "data" /* data */,
      data: data2,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === "error" /* error */) {
    if (isDataWithResponseInit(result)) {
      if (result.data instanceof Error) {
        return {
          type: "error" /* error */,
          error: result.data,
          statusCode: result.init?.status
        };
      }
      result = new ErrorResponseImpl(
        result.init?.status || 500,
        void 0,
        result.data
      );
    }
    return {
      type: "error" /* error */,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : void 0
    };
  }
  if (isDataWithResponseInit(result)) {
    return {
      type: "data" /* data */,
      data: result.data,
      statusCode: result.init?.status,
      headers: result.init?.headers ? new Headers(result.init.headers) : void 0
    };
  }
  return { type: "data" /* data */, data: result };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
  let location = response.headers.get("Location");
  invariant(
    location,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  );
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(
      0,
      matches.findIndex((m) => m.route.id === routeId) + 1
    );
    location = normalizeTo(
      new URL(request.url),
      trimmedMatches,
      basename,
      location
    );
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = { signal };
  if (submission && isMutationMethod(submission.formMethod)) {
    let { formMethod, formEncType } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({ "Content-Type": formEncType });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(
      !isRedirectResult(result),
      "Cannot handle redirect results in processLoaderData"
    );
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      if (!isStaticHandler) {
        loaderData[id] = ResetLoaderDataSymbol;
      }
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      loaderData[id] = result.data;
      if (result.statusCode && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors = { [pendingActionResult[0]]: pendingError };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
  let { loaderData, errors } = processRouteLoaderData(
    matches,
    results,
    pendingActionResult
  );
  revalidatingFetchers.forEach((rf) => {
    let { key, match, controller } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (controller && controller.signal.aborted) {
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = {
          ...errors,
          [boundaryMatch.route.id]: result.error
        };
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return { loaderData, errors };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
    merged[k] = v;
    return merged;
  }, {});
  for (let match of matches) {
    let id = match.route.id;
    if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: `__shim-error-route__`
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }
    ],
    route
  };
}
function getInternalRouterError(status, {
  pathname,
  routeId,
  method,
  type,
  message
} = {}) {
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = `No route matches URL "${pathname}"`;
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (method) {
      errorMessage = `Invalid request method "${method.toUpperCase()}"`;
    }
  }
  return new ErrorResponseImpl(
    status || 500,
    statusText,
    new Error(errorMessage),
    true
  );
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return { key, result };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath({ ...parsedPath, hash: "" });
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" /* data */ || result.type === "error" /* error */);
}
function isRedirectDataStrategyResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
  return result.type === "error" /* error */;
}
function isRedirectResult(result) {
  return (result && result.type) === "redirect" /* redirect */;
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
  return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let { formMethod, formAction, formEncType, text, formData, json } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data2) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: data2
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: data2
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data2) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: data2
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(
      TRANSITIONS_STORAGE_KEY
    );
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(
        TRANSITIONS_STORAGE_KEY,
        JSON.stringify(json)
      );
    } catch (error) {
      warning(
        false,
        `Failed to save applied view transitions in sessionStorage (${error}).`
      );
    }
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}

// lib/components.tsx


// lib/context.ts

var DataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var ViewTransitionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
RouteErrorContext.displayName = "RouteError";

// lib/hooks.tsx

var ENABLE_DEV_WARNINGS = true;
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useMatch() may be used only in the context of a <Router> component.`
  );
  let { pathname } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matchPath(pattern, decodePath(pathname)),
    [pathname, pattern]
  );
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
var OutletContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, { value: context }, outlet);
  }
  return outlet;
}
function useParams() {
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { matches: parentMatches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (ENABLE_DEV_WARNINGS) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  if (ENABLE_DEV_WARNINGS) {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP" /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  if (ENABLE_DEV_WARNINGS) {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "React Router caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && errors?.[m.route.id] !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            "route-fallback",
            false,
            "No `HydrateFallback` element provided to render during initial hydration"
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        }
      );
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      RenderErrorBoundary,
      {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }
    ) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId("useRouteId" /* UseRouteId */);
}
function useNavigation() {
  let state = useDataRouterState("useNavigation" /* UseNavigation */);
  return state.navigation;
}
function useRevalidator() {
  let dataRouterContext = useDataRouterContext("useRevalidator" /* UseRevalidator */);
  let state = useDataRouterState("useRevalidator" /* UseRevalidator */);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      async revalidate() {
        await dataRouterContext.router.revalidate();
      },
      state: state.revalidation
    }),
    [dataRouterContext.router, state.revalidation]
  );
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState(
    "useMatches" /* UseMatches */
  );
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
    [matches, loaderData]
  );
}
function useLoaderData() {
  let state = useDataRouterState("useLoaderData" /* UseLoaderData */);
  let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
  return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
  let state = useDataRouterState("useRouteLoaderData" /* UseRouteLoaderData */);
  return state.loaderData[routeId];
}
function useActionData() {
  let state = useDataRouterState("useActionData" /* UseActionData */);
  let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
  return state.actionData ? state.actionData[routeId] : void 0;
}
function useRouteError() {
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState("useRouteError" /* UseRouteError */);
  let routeId = useCurrentRouteId("useRouteError" /* UseRouteError */);
  if (error !== void 0) {
    return error;
  }
  return state.errors?.[routeId];
}
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value?._data;
}
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value?._error;
}
var blockerId = 0;
function useBlocker(shouldBlock) {
  let { router, basename } = useDataRouterContext("useBlocker" /* UseBlocker */);
  let state = useDataRouterState("useBlocker" /* UseBlocker */);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (arg) => {
      if (typeof shouldBlock !== "function") {
        return !!shouldBlock;
      }
      if (basename === "/") {
        return shouldBlock(arg);
      }
      let { currentLocation, nextLocation, historyAction } = arg;
      return shouldBlock({
        currentLocation: {
          ...currentLocation,
          pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
        },
        nextLocation: {
          ...nextLocation,
          pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
        },
        historyAction
      });
    },
    [basename, shouldBlock]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
  let { router } = useDataRouterContext("useNavigate" /* UseNavigateStable */);
  let id = useCurrentRouteId("useNavigate" /* UseNavigateStable */);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}

// lib/server-runtime/warnings.ts
var alreadyWarned2 = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}

// lib/components.tsx
var ENABLE_DEV_WARNINGS2 = true;
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.element) {
        warning(
          false,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        );
      }
    }
    Object.assign(updates, {
      element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: void 0
    });
  }
  if (route.HydrateFallback) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.hydrateFallbackElement) {
        warning(
          false,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        );
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
      HydrateFallback: void 0
    });
  }
  if (route.ErrorBoundary) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.errorElement) {
        warning(
          false,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        );
      }
    }
    Object.assign(updates, {
      errorElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: void 0
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    future: opts?.future,
    history: createMemoryHistory({
      initialEntries: opts?.initialEntries,
      initialIndex: opts?.initialIndex
    }),
    hydrationData: opts?.hydrationData,
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation
  }).initialize();
}
var Deferred = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider({
  router,
  flushSync: reactDomFlushSyncImpl
}) {
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map());
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
      deletedFetchers.forEach((key) => fetcherData.current.delete(key));
      newState.fetchers.forEach((fetcher, key) => {
        if (fetcher.data !== void 0) {
          fetcherData.current.set(key, fetcher.data);
        }
      });
      warnOnce(
        flushSync === false || reactDomFlushSyncImpl != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
      warnOnce(
        viewTransitionOpts == null || isViewTransitionAvailable,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      );
      if (!viewTransitionOpts || !isViewTransitionAvailable) {
        if (reactDomFlushSyncImpl && flushSync) {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        } else {
          react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
        }
        return;
      }
      if (reactDomFlushSyncImpl && flushSync) {
        reactDomFlushSyncImpl(() => {
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
          }
          setVtContext({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation
          });
        });
        let t = router.window.document.startViewTransition(() => {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        });
        t.finished.finally(() => {
          reactDomFlushSyncImpl(() => {
            setRenderDfd(void 0);
            setTransition(void 0);
            setPendingState(void 0);
            setVtContext({ isTransitioning: false });
          });
        });
        reactDomFlushSyncImpl(() => setTransition(t));
        return;
      }
      if (transition) {
        renderDfd && renderDfd.resolve();
        transition.skipTransition();
        setInterruption({
          state: newState,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      } else {
        setPendingState(newState);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      }
    },
    [router.window, reactDomFlushSyncImpl, transition, renderDfd]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router.window.document.startViewTransition(async () => {
        react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(void 0);
        setTransition(void 0);
        setPendingState(void 0);
        setVtContext({ isTransitioning: false });
      });
      setTransition(transition2);
    }
  }, [pendingState, renderDfd, router.window]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(void 0);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator2 = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: (n) => router.navigate(n),
      push: (to, state2, opts) => router.navigate(to, {
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      }),
      replace: (to, state2, opts) => router.navigate(to, {
        replace: true,
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      router,
      navigator: navigator2,
      static: false,
      basename
    }),
    [router, navigator2, basename]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: navigator2
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      MemoizedDataRoutes,
      {
        routes: router.routes,
        future: router.future,
        state
      }
    )
  ))))), null);
}
var MemoizedDataRoutes = react__WEBPACK_IMPORTED_MODULE_0__.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function MemoryRouter({
  basename,
  children,
  initialEntries,
  initialIndex
}) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function Navigate({
  to,
  replace: replace2,
  state,
  relative
}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    `<Navigate> may be used only in the context of a <Router> component.`
  );
  let { static: isStatic } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  warning(
    !isStatic,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
  );
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let navigate = useNavigate();
  let path = resolveTo(
    to,
    getResolveToMatches(matches),
    locationPathname,
    relative === "path"
  );
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
  }, [navigate, jsonPath, relative, replace2, state]);
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP" /* Pop */,
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function Await({
  children,
  errorElement,
  resolve
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, { resolve, errorElement }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "<Await> caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    let { children, errorElement, resolve } = this.props;
    let promise = null;
    let status = 0 /* pending */;
    if (!(resolve instanceof Promise)) {
      status = 1 /* success */;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_data", { get: () => resolve });
    } else if (this.state.error) {
      status = 2 /* error */;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {
      });
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_error", { get: () => renderError });
    } else if (resolve._tracked) {
      promise = resolve;
      status = "_error" in promise ? 2 /* error */ : "_data" in promise ? 1 /* success */ : 0 /* pending */;
    } else {
      status = 0 /* pending */;
      Object.defineProperty(resolve, "_tracked", { get: () => true });
      promise = resolve.then(
        (data2) => Object.defineProperty(resolve, "_data", { get: () => data2 }),
        (error) => Object.defineProperty(resolve, "_error", { get: () => error })
      );
    }
    if (status === 2 /* error */ && !errorElement) {
      throw promise._error;
    }
    if (status === 2 /* error */) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, { value: promise, children: errorElement });
    }
    if (status === 1 /* success */) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, { value: promise, children });
    }
    throw promise;
  }
};
function ResolveAwait({
  children
}) {
  let data2 = useAsyncValue();
  let toRender = typeof children === "function" ? children(data2) : children;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
var createRoutesFromElements = createRoutesFromChildren;
function renderMatches(matches) {
  return _renderMatches(matches);
}

// lib/dom/lib.tsx


// lib/dom/dom.ts
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
function createSearchParams(init = "") {
  return new URLSearchParams(
    typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
      let value = init[key];
      return memo2.concat(
        Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
      );
    }, [])
  );
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}

// lib/dom/ssr/components.tsx


// lib/dom/ssr/invariant.ts
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// lib/dom/ssr/routeModules.ts
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    /* unsupported import.meta.hot */ undefined) {}
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// lib/dom/ssr/links.ts
function getKeyedLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    let module = routeModules[match.route.id];
    let route = manifest.routes[match.route.id];
    return [
      route && route.css ? route.css.map((href) => ({ rel: "stylesheet", href })) : [],
      module?.links?.() || []
    ];
  }).flat(2);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupeLinkDescriptors(descriptors, preloads);
}
async function prefetchStyleLinks(route, routeModule) {
  if (!route.css && !routeModule.links || !isPreloadSupported()) return;
  let descriptors = [];
  if (route.css) {
    descriptors.push(...route.css.map((href) => ({ rel: "stylesheet", href })));
  }
  if (routeModule.links) {
    descriptors.push(...routeModule.links());
  }
  if (descriptors.length === 0) return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter(
    (link) => (!link.media || window.matchMedia(link.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${link.href}"]`)
  );
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifestPatch.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
var _isPreloadSupported;
function isPreloadSupported() {
  if (_isPreloadSupported !== void 0) {
    return _isPreloadSupported;
  }
  let el = document.createElement("link");
  _isPreloadSupported = el.relList.supports("preload");
  el = null;
  return _isPreloadSupported;
}

// lib/dom/ssr/markup.ts
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return { __html: html };
}

// lib/dom/ssr/single-fetch.tsx



// lib/dom/ssr/data.ts
async function createRequestInit(request) {
  let init = { signal: request.signal };
  if (request.method !== "GET") {
    init.method = request.method;
    let contentType = request.headers.get("Content-Type");
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = JSON.stringify(await request.json());
    } else if (contentType && /\btext\/plain\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = await request.text();
    } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
      init.body = new URLSearchParams(await request.text());
    } else {
      init.body = await request.formData();
    }
  }
  return init;
}

// lib/dom/ssr/single-fetch.tsx
var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
function StreamTransfer({
  context,
  identifier,
  reader,
  textDecoder,
  nonce
}) {
  if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
    return null;
  }
  if (!context.renderMeta.streamCache) {
    context.renderMeta.streamCache = {};
  }
  let { streamCache } = context.renderMeta;
  let promise = streamCache[identifier];
  if (!promise) {
    promise = streamCache[identifier] = reader.read().then((result) => {
      streamCache[identifier].result = {
        done: result.done,
        value: textDecoder.decode(result.value, { stream: true })
      };
    }).catch((e) => {
      streamCache[identifier].error = e;
    });
  }
  if (promise.error) {
    throw promise.error;
  }
  if (promise.result === void 0) {
    throw promise;
  }
  let { done, value } = promise.result;
  let scriptTag = value ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      nonce,
      dangerouslySetInnerHTML: {
        __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(
          JSON.stringify(value)
        )});`
      }
    }
  ) : null;
  if (done) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, scriptTag, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        nonce,
        dangerouslySetInnerHTML: {
          __html: `window.__reactRouterContext.streamController.close();`
        }
      }
    ));
  } else {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, scriptTag, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      StreamTransfer,
      {
        context,
        identifier: identifier + 1,
        reader,
        textDecoder,
        nonce
      }
    )));
  }
}
function getSingleFetchDataStrategy(manifest, routeModules, getRouter) {
  return async ({ request, matches, fetcherKey }) => {
    if (request.method !== "GET") {
      return singleFetchActionStrategy(request, matches);
    }
    if (fetcherKey) {
      return singleFetchLoaderFetcherStrategy(request, matches);
    }
    return singleFetchLoaderNavigationStrategy(
      manifest,
      routeModules,
      getRouter(),
      request,
      matches
    );
  };
}
async function singleFetchActionStrategy(request, matches) {
  let actionMatch = matches.find((m) => m.shouldLoad);
  invariant2(actionMatch, "No action match found");
  let actionStatus = void 0;
  let result = await actionMatch.resolve(async (handler) => {
    let result2 = await handler(async () => {
      let url = singleFetchUrl(request.url);
      let init = await createRequestInit(request);
      let { data: data2, status } = await fetchAndDecode(url, init);
      actionStatus = status;
      return unwrapSingleFetchResult(
        data2,
        actionMatch.route.id
      );
    });
    return result2;
  });
  if (isResponse(result.result) || isRouteErrorResponse(result.result)) {
    return { [actionMatch.route.id]: result };
  }
  return {
    [actionMatch.route.id]: {
      type: result.type,
      result: data(result.result, actionStatus)
    }
  };
}
async function singleFetchLoaderNavigationStrategy(manifest, routeModules, router, request, matches) {
  let routesParams = /* @__PURE__ */ new Set();
  let foundOptOutRoute = false;
  let routeDfds = matches.map(() => createDeferred2());
  let routesLoadedPromise = Promise.all(routeDfds.map((d) => d.promise));
  let singleFetchDfd = createDeferred2();
  let url = stripIndexParam(singleFetchUrl(request.url));
  let init = await createRequestInit(request);
  let results = {};
  let resolvePromise = Promise.all(
    matches.map(
      async (m, i) => m.resolve(async (handler) => {
        routeDfds[i].resolve();
        let manifestRoute = manifest.routes[m.route.id];
        if (!m.shouldLoad) {
          if (!router.state.initialized) {
            return;
          }
          if (m.route.id in router.state.loaderData && manifestRoute && manifestRoute.hasLoader && routeModules[m.route.id]?.shouldRevalidate) {
            foundOptOutRoute = true;
            return;
          }
        }
        if (manifestRoute && manifestRoute.hasClientLoader) {
          if (manifestRoute.hasLoader) {
            foundOptOutRoute = true;
          }
          try {
            let result = await fetchSingleLoader(
              handler,
              url,
              init,
              m.route.id
            );
            results[m.route.id] = { type: "data", result };
          } catch (e) {
            results[m.route.id] = { type: "error", result: e };
          }
          return;
        }
        if (manifestRoute && manifestRoute.hasLoader) {
          routesParams.add(m.route.id);
        }
        try {
          let result = await handler(async () => {
            let data2 = await singleFetchDfd.promise;
            return unwrapSingleFetchResults(data2, m.route.id);
          });
          results[m.route.id] = {
            type: "data",
            result
          };
        } catch (e) {
          results[m.route.id] = {
            type: "error",
            result: e
          };
        }
      })
    )
  );
  await routesLoadedPromise;
  if ((!router.state.initialized || routesParams.size === 0) && !window.__reactRouterHdrActive) {
    singleFetchDfd.resolve({});
  } else {
    try {
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          matches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      let data2 = await fetchAndDecode(url, init);
      singleFetchDfd.resolve(data2.data);
    } catch (e) {
      singleFetchDfd.reject(e);
    }
  }
  await resolvePromise;
  return results;
}
async function singleFetchLoaderFetcherStrategy(request, matches) {
  let fetcherMatch = matches.find((m) => m.shouldLoad);
  invariant2(fetcherMatch, "No fetcher match found");
  let result = await fetcherMatch.resolve(async (handler) => {
    let url = stripIndexParam(singleFetchUrl(request.url));
    let init = await createRequestInit(request);
    return fetchSingleLoader(handler, url, init, fetcherMatch.route.id);
  });
  return { [fetcherMatch.route.id]: result };
}
function fetchSingleLoader(handler, url, init, routeId) {
  return handler(async () => {
    let singleLoaderUrl = new URL(url);
    singleLoaderUrl.searchParams.set("_routes", routeId);
    let { data: data2 } = await fetchAndDecode(singleLoaderUrl, init);
    return unwrapSingleFetchResults(data2, routeId);
  });
}
function stripIndexParam(url) {
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return url;
}
function singleFetchUrl(reqUrl) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.data";
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
  }
  return url;
}
async function fetchAndDecode(url, init) {
  let res = await fetch(url, init);
  if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
    throw new ErrorResponseImpl(404, "Not Found", true);
  }
  invariant2(res.body, "No response body to decode");
  try {
    let decoded = await decodeViaTurboStream(res.body, window);
    return { status: res.status, data: decoded.value };
  } catch (e) {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function decodeViaTurboStream(body, global2) {
  return (0,turbo_stream__WEBPACK_IMPORTED_MODULE_1__.decode)(body, {
    plugins: [
      (type, ...rest) => {
        if (type === "SanitizedError") {
          let [name, message, stack] = rest;
          let Constructor = Error;
          if (name && name in global2 && typeof global2[name] === "function") {
            Constructor = global2[name];
          }
          let error = new Constructor(message);
          error.stack = stack;
          return { value: error };
        }
        if (type === "ErrorResponse") {
          let [data2, status, statusText] = rest;
          return {
            value: new ErrorResponseImpl(status, statusText, data2)
          };
        }
        if (type === "SingleFetchRedirect") {
          return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
        }
        if (type === "SingleFetchClassInstance") {
          return { value: rest[0] };
        }
        if (type === "SingleFetchFallback") {
          return { value: void 0 };
        }
      }
    ]
  });
}
function unwrapSingleFetchResults(results, routeId) {
  let redirect2 = results[SingleFetchRedirectSymbol];
  if (redirect2) {
    return unwrapSingleFetchResult(redirect2, routeId);
  }
  return results[routeId] !== void 0 ? unwrapSingleFetchResult(results[routeId], routeId) : null;
}
function unwrapSingleFetchResult(result, routeId) {
  if ("error" in result) {
    throw result.error;
  } else if ("redirect" in result) {
    let headers = {};
    if (result.revalidate) {
      headers["X-Remix-Revalidate"] = "yes";
    }
    if (result.reload) {
      headers["X-Remix-Reload-Document"] = "yes";
    }
    if (result.replace) {
      headers["X-Remix-Replace"] = "yes";
    }
    return redirect(result.redirect, { status: result.status, headers });
  } else if ("data" in result) {
    return result.data;
  } else {
    throw new Error(`No response found for routeId "${routeId}"`);
  }
}
function createDeferred2() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}

// lib/dom/ssr/fog-of-war.ts


// lib/dom/ssr/routes.tsx


// lib/dom/ssr/errorBoundaries.tsx

var RemixErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: props.error || null, location: props.location };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return { error: props.error || null, location: props.location };
    }
    return { error: props.error || state.error, location: state.location };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        RemixRootDefaultErrorBoundary,
        {
          error: this.state.error,
          isOutsideRemixApp: true
        }
      );
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error,
  isOutsideRemixApp
}) {
  console.error(error);
  let heyDeveloper = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
      }
    }
  );
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
  }
  let errorInstance;
  if (error instanceof Error) {
    errorInstance = error;
  } else {
    let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    errorInstance = new Error(errorString);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    BoundaryShell,
    {
      title: "Application Error!",
      isOutsideRemixApp
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      },
      errorInstance.stack
    ),
    heyDeveloper
  );
}
function BoundaryShell({
  title,
  renderScripts,
  isOutsideRemixApp,
  children
}) {
  let { routeModules } = useFrameworkContext();
  if (routeModules.root?.Layout && !isOutsideRemixApp) {
    return children;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { lang: "en" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("head", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("body", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children, renderScripts ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scripts, null) : null)));
}

// lib/dom/ssr/fallback.tsx

function RemixRootDefaultHydrateFallback() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoundaryShell, { title: "Loading...", renderScripts: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
      }
    }
  ));
}

// lib/dom/ssr/routes.tsx
function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function getRouteComponents(route, routeModule, isSpaMode) {
  let Component4 = getRouteModuleComponent(routeModule);
  let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
  let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError() }) : void 0;
  if (route.id === "root" && routeModule.Layout) {
    return {
      ...Component4 ? {
        element: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component4, null))
      } : { Component: Component4 },
      ...ErrorBoundary ? {
        errorElement: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary, null))
      } : { ErrorBoundary },
      ...HydrateFallback ? {
        hydrateFallbackElement: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HydrateFallback, null))
      } : { HydrateFallback }
    };
  }
  return { Component: Component4, ErrorBoundary, HydrateFallback };
}
function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
  return (routesByParentId[parentId] || []).map((route) => {
    let routeModule = routeModules[route.id];
    invariant2(
      routeModule,
      "No `routeModule` available to create server routes"
    );
    let dataRoute = {
      ...getRouteComponents(route, routeModule, isSpaMode),
      caseSensitive: route.caseSensitive,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: routeModule.handle,
      // For SPA Mode, all routes are lazy except root.  However we tell the
      // router root is also lazy here too since we don't need a full
      // implementation - we just need a `lazy` prop to tell the RR rendering
      // where to stop which is always at the root route in SPA mode
      lazy: isSpaMode ? () => spaModeLazyPromise : void 0,
      // For partial hydration rendering, we need to indicate when the route
      // has a loader/clientLoader, but it won't ever be called during the static
      // render, so just give it a no-op function so we can render down to the
      // proper fallback
      loader: route.hasLoader || route.hasClientLoader ? () => null : void 0
      // We don't need action/shouldRevalidate on these routes since they're
      // for a static render
    };
    let children = createServerRoutes(
      manifest,
      routeModules,
      future,
      isSpaMode,
      route.id,
      routesByParentId,
      spaModeLazyPromise
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, future, isSpaMode) {
  return createClientRoutes(
    manifest,
    routeModulesCache,
    initialState,
    isSpaMode,
    "",
    groupRoutesByParentId(manifest),
    needsRevalidation
  );
}
function preventInvalidServerHandlerCall(type, route, isSpaMode) {
  if (isSpaMode) {
    let fn2 = type === "action" ? "serverAction()" : "serverLoader()";
    let msg2 = `You cannot call ${fn2} in SPA Mode (routeId: "${route.id}")`;
    console.error(msg2);
    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg2), true);
  }
  let fn = type === "action" ? "serverAction()" : "serverLoader()";
  let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
  if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
    console.error(msg);
    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
  }
}
function noActionDefinedError(type, routeId) {
  let article = type === "clientAction" ? "a" : "an";
  let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
  console.error(msg);
  throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
}
function createClientRoutes(manifest, routeModulesCache, initialState, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
  return (routesByParentId[parentId] || []).map((route) => {
    let routeModule = routeModulesCache[route.id];
    function fetchServerHandler(singleFetch) {
      invariant2(
        typeof singleFetch === "function",
        "No single fetch function available for route handler"
      );
      return singleFetch();
    }
    function fetchServerLoader(singleFetch) {
      if (!route.hasLoader) return Promise.resolve(null);
      return fetchServerHandler(singleFetch);
    }
    function fetchServerAction(singleFetch) {
      if (!route.hasAction) {
        throw noActionDefinedError("action", route.id);
      }
      return fetchServerHandler(singleFetch);
    }
    async function prefetchStylesAndCallHandler(handler) {
      let cachedModule = routeModulesCache[route.id];
      let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
      try {
        return handler();
      } finally {
        await linkPrefetchPromise;
      }
    }
    let dataRoute = {
      id: route.id,
      index: route.index,
      path: route.path
    };
    if (routeModule) {
      Object.assign(dataRoute, {
        ...dataRoute,
        ...getRouteComponents(route, routeModule, isSpaMode),
        handle: routeModule.handle,
        shouldRevalidate: getShouldRevalidateFunction(
          routeModule,
          route.id,
          needsRevalidation
        )
      });
      let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
      let initialData = hasInitialData ? initialState?.loaderData?.[route.id] : void 0;
      let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
      let initialError = hasInitialError ? initialState?.errors?.[route.id] : void 0;
      let isHydrationRequest = needsRevalidation == null && (routeModule.clientLoader?.hydrate === true || !route.hasLoader);
      dataRoute.loader = async ({ request, params }, singleFetch) => {
        try {
          let result = await prefetchStylesAndCallHandler(async () => {
            invariant2(
              routeModule,
              "No `routeModule` available for critical-route loader"
            );
            if (!routeModule.clientLoader) {
              if (isSpaMode) return null;
              return fetchServerLoader(singleFetch);
            }
            return routeModule.clientLoader({
              request,
              params,
              async serverLoader() {
                preventInvalidServerHandlerCall("loader", route, isSpaMode);
                if (isHydrationRequest) {
                  if (hasInitialData) {
                    return initialData;
                  }
                  if (hasInitialError) {
                    throw initialError;
                  }
                }
                return fetchServerLoader(singleFetch);
              }
            });
          });
          return result;
        } finally {
          isHydrationRequest = false;
        }
      };
      dataRoute.loader.hydrate = shouldHydrateRouteLoader(
        route,
        routeModule,
        isSpaMode
      );
      dataRoute.action = ({ request, params }, singleFetch) => {
        return prefetchStylesAndCallHandler(async () => {
          invariant2(
            routeModule,
            "No `routeModule` available for critical-route action"
          );
          if (!routeModule.clientAction) {
            if (isSpaMode) {
              throw noActionDefinedError("clientAction", route.id);
            }
            return fetchServerAction(singleFetch);
          }
          return routeModule.clientAction({
            request,
            params,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route, isSpaMode);
              return fetchServerAction(singleFetch);
            }
          });
        });
      };
    } else {
      if (!route.hasClientLoader) {
        dataRoute.loader = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
          if (isSpaMode) return Promise.resolve(null);
          return fetchServerLoader(singleFetch);
        });
      }
      if (!route.hasClientAction) {
        dataRoute.action = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
          if (isSpaMode) {
            throw noActionDefinedError("clientAction", route.id);
          }
          return fetchServerAction(singleFetch);
        });
      }
      dataRoute.lazy = async () => {
        let mod = await loadRouteModuleWithBlockingLinks(
          route,
          routeModulesCache
        );
        let lazyRoute = { ...mod };
        if (mod.clientLoader) {
          let clientLoader = mod.clientLoader;
          lazyRoute.loader = (args, singleFetch) => clientLoader({
            ...args,
            async serverLoader() {
              preventInvalidServerHandlerCall("loader", route, isSpaMode);
              return fetchServerLoader(singleFetch);
            }
          });
        }
        if (mod.clientAction) {
          let clientAction = mod.clientAction;
          lazyRoute.action = (args, singleFetch) => clientAction({
            ...args,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route, isSpaMode);
              return fetchServerAction(singleFetch);
            }
          });
        }
        return {
          ...lazyRoute.loader ? { loader: lazyRoute.loader } : {},
          ...lazyRoute.action ? { action: lazyRoute.action } : {},
          hasErrorBoundary: lazyRoute.hasErrorBoundary,
          shouldRevalidate: getShouldRevalidateFunction(
            lazyRoute,
            route.id,
            needsRevalidation
          ),
          handle: lazyRoute.handle,
          // No need to wrap these in layout since the root route is never
          // loaded via route.lazy()
          Component: lazyRoute.Component,
          ErrorBoundary: lazyRoute.ErrorBoundary
        };
      };
    }
    let children = createClientRoutes(
      manifest,
      routeModulesCache,
      initialState,
      isSpaMode,
      route.id,
      routesByParentId,
      needsRevalidation
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function getShouldRevalidateFunction(route, routeId, needsRevalidation) {
  if (needsRevalidation) {
    return wrapShouldRevalidateForHdr(
      routeId,
      route.shouldRevalidate,
      needsRevalidation
    );
  }
  if (route.shouldRevalidate) {
    let fn = route.shouldRevalidate;
    return (opts) => fn({ ...opts, defaultShouldRevalidate: true });
  }
  return route.shouldRevalidate;
}
function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
  let handledRevalidation = false;
  return (arg) => {
    if (!handledRevalidation) {
      handledRevalidation = true;
      return needsRevalidation.has(routeId);
    }
    return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(route, routeModule);
  return {
    Component: getRouteModuleComponent(routeModule),
    ErrorBoundary: routeModule.ErrorBoundary,
    clientAction: routeModule.clientAction,
    clientLoader: routeModule.clientLoader,
    handle: routeModule.handle,
    links: routeModule.links,
    meta: routeModule.meta,
    shouldRevalidate: routeModule.shouldRevalidate
  };
}
function getRouteModuleComponent(routeModule) {
  if (routeModule.default == null) return void 0;
  let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
  if (!isEmptyObject) {
    return routeModule.default;
  }
}
function shouldHydrateRouteLoader(route, routeModule, isSpaMode) {
  return isSpaMode && route.id !== "root" || routeModule.clientLoader != null && (routeModule.clientLoader.hydrate === true || route.hasLoader !== true);
}

// lib/dom/ssr/fog-of-war.ts
var nextPaths = /* @__PURE__ */ new Set();
var discoveredPathsMaxSize = 1e3;
var discoveredPaths = /* @__PURE__ */ new Set();
var URL_LIMIT = 7680;
function isFogOfWarEnabled(isSpaMode) {
  return !isSpaMode;
}
function getPartialManifest(manifest, router) {
  let routeIds = new Set(router.state.matches.map((m) => m.route.id));
  let segments = router.state.location.pathname.split("/").filter(Boolean);
  let paths = ["/"];
  segments.pop();
  while (segments.length > 0) {
    paths.push(`/${segments.join("/")}`);
    segments.pop();
  }
  paths.forEach((path) => {
    let matches = matchRoutes(router.routes, path, router.basename);
    if (matches) {
      matches.forEach((m) => routeIds.add(m.route.id));
    }
  });
  let initialRoutes = [...routeIds].reduce(
    (acc, id) => Object.assign(acc, { [id]: manifest.routes[id] }),
    {}
  );
  return {
    ...manifest,
    routes: initialRoutes
  };
}
function getPatchRoutesOnNavigationFunction(manifest, routeModules, isSpaMode, basename) {
  if (!isFogOfWarEnabled(isSpaMode)) {
    return void 0;
  }
  return async ({ path, patch }) => {
    if (discoveredPaths.has(path)) {
      return;
    }
    await fetchAndApplyManifestPatches(
      [path],
      manifest,
      routeModules,
      isSpaMode,
      basename,
      patch
    );
  };
}
function useFogOFWarDiscovery(router, manifest, routeModules, isSpaMode) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!isFogOfWarEnabled(isSpaMode) || navigator.connection?.saveData === true) {
      return;
    }
    function registerElement(el) {
      let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
      if (!path) {
        return;
      }
      let url = new URL(path, window.location.origin);
      if (!discoveredPaths.has(url.pathname)) {
        nextPaths.add(url.pathname);
      }
    }
    async function fetchPatches() {
      let lazyPaths = Array.from(nextPaths.keys()).filter((path) => {
        if (discoveredPaths.has(path)) {
          nextPaths.delete(path);
          return false;
        }
        return true;
      });
      if (lazyPaths.length === 0) {
        return;
      }
      try {
        await fetchAndApplyManifestPatches(
          lazyPaths,
          manifest,
          routeModules,
          isSpaMode,
          router.basename,
          router.patchRoutes
        );
      } catch (e) {
        console.error("Failed to fetch manifest patches", e);
      }
    }
    document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => registerElement(el));
    fetchPatches();
    let debouncedFetchPatches = debounce(fetchPatches, 100);
    function isElement(node) {
      return node.nodeType === Node.ELEMENT_NODE;
    }
    let observer = new MutationObserver((records) => {
      let elements = /* @__PURE__ */ new Set();
      records.forEach((r) => {
        [r.target, ...r.addedNodes].forEach((node) => {
          if (!isElement(node)) return;
          if (node.tagName === "A" && node.getAttribute("data-discover")) {
            elements.add(node);
          } else if (node.tagName === "FORM" && node.getAttribute("data-discover")) {
            elements.add(node);
          }
          if (node.tagName !== "A") {
            node.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => elements.add(el));
          }
        });
      });
      elements.forEach((el) => registerElement(el));
      debouncedFetchPatches();
    });
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-discover", "href", "action"]
    });
    return () => observer.disconnect();
  }, [isSpaMode, manifest, routeModules, router]);
}
async function fetchAndApplyManifestPatches(paths, manifest, routeModules, isSpaMode, basename, patchRoutes) {
  let manifestPath = `${basename != null ? basename : "/"}/__manifest`.replace(
    /\/+/g,
    "/"
  );
  let url = new URL(manifestPath, window.location.origin);
  paths.sort().forEach((path) => url.searchParams.append("p", path));
  url.searchParams.set("version", manifest.version);
  if (url.toString().length > URL_LIMIT) {
    nextPaths.clear();
    return;
  }
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  } else if (res.status >= 400) {
    throw new Error(await res.text());
  }
  let serverPatches = await res.json();
  let knownRoutes = new Set(Object.keys(manifest.routes));
  let patches = Object.values(serverPatches).reduce((acc, route) => {
    if (route && !knownRoutes.has(route.id)) {
      acc[route.id] = route;
    }
    return acc;
  }, {});
  Object.assign(manifest.routes, patches);
  paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
  let parentIds = /* @__PURE__ */ new Set();
  Object.values(patches).forEach((patch) => {
    if (patch && (!patch.parentId || !patches[patch.parentId])) {
      parentIds.add(patch.parentId);
    }
  });
  parentIds.forEach(
    (parentId) => patchRoutes(
      parentId || null,
      createClientRoutes(patches, routeModules, null, isSpaMode, parentId)
    )
  );
}
function addToFifoQueue(path, queue) {
  if (queue.size >= discoveredPathsMaxSize) {
    let first = queue.values().next().value;
    queue.delete(first);
  }
  queue.add(path);
}
function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}

// lib/dom/ssr/components.tsx
function useDataRouterContext2() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function getActiveMatches(matches, errors, isSpaMode) {
  if (isSpaMode && !isHydrated) {
    return [matches[0]];
  }
  if (errors) {
    let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
    return matches.slice(0, errorIdx + 1);
  }
  return matches;
}
function Links() {
  let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
  let { errors, matches: routerMatches } = useDataRouterStateContext();
  let matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let keyedLinks = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getKeyedLinksForMatches(matches, routeModules, manifest),
    [matches, routeModules, manifest]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, criticalCss ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", { dangerouslySetInnerHTML: { __html: criticalCss } }) : null, keyedLinks.map(
    ({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinks, { key, ...link }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key, ...link })
  ));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let { router } = useDataRouterContext2();
  let matches = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page);
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key, ...link })
  )));
}
function Meta() {
  let { isSpaMode, routeModules } = useFrameworkContext();
  let {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext();
  let location = useLocation();
  let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let error = null;
  if (errors) {
    error = errors[_matches[_matches.length - 1].route.id];
  }
  let meta = [];
  let leafMeta = null;
  let matches = [];
  for (let i = 0; i < _matches.length; i++) {
    let _match = _matches[i];
    let routeId = _match.route.id;
    let data2 = loaderData[routeId];
    let params = _match.params;
    let routeModule = routeModules[routeId];
    let routeMeta = [];
    let match = {
      id: routeId,
      data: data2,
      meta: [],
      params: _match.params,
      pathname: _match.pathname,
      handle: _match.route.handle,
      error
    };
    matches[i] = match;
    if (routeModule?.meta) {
      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data: data2,
        params,
        location,
        matches,
        error
      }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
    } else if (leafMeta) {
      routeMeta = [...leafMeta];
    }
    routeMeta = routeMeta || [];
    if (!Array.isArray(routeMeta)) {
      throw new Error(
        "The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta"
      );
    }
    match.meta = routeMeta;
    matches[i] = match;
    meta = [...routeMeta];
    leafMeta = meta;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, meta.flat().map((metaProps) => {
    if (!metaProps) {
      return null;
    }
    if ("tagName" in metaProps) {
      let { tagName, ...rest } = metaProps;
      if (!isValidMetaTag(tagName)) {
        console.warn(
          `A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`
        );
        return null;
      }
      let Comp = tagName;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, { key: JSON.stringify(rest), ...rest });
    }
    if ("title" in metaProps) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", { key: "title" }, String(metaProps.title));
    }
    if ("charset" in metaProps) {
      metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
      delete metaProps.charset;
    }
    if ("charSet" in metaProps && metaProps.charSet != null) {
      return typeof metaProps.charSet === "string" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { key: "charSet", charSet: metaProps.charSet }) : null;
    }
    if ("script:ld+json" in metaProps) {
      try {
        let json = JSON.stringify(metaProps["script:ld+json"]);
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "script",
          {
            key: `script:ld+json:${json}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: json }
          }
        );
      } catch (err) {
        return null;
      }
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { key: JSON.stringify(metaProps), ...metaProps });
  }));
}
function isValidMetaTag(tagName) {
  return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
var isHydrated = false;
function Scripts(props) {
  let { manifest, serverHandoffString, isSpaMode, renderMeta } = useFrameworkContext();
  let { router, static: isStatic, staticContext } = useDataRouterContext2();
  let { matches: routerMatches } = useDataRouterStateContext();
  let enableFogOfWar = isFogOfWarEnabled(isSpaMode);
  if (renderMeta) {
    renderMeta.didRenderScripts = true;
  }
  let matches = getActiveMatches(routerMatches, null, isSpaMode);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
    let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
    let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map(
      (match, index) => `import * as route${index} from ${JSON.stringify(
        manifest.routes[match.route.id].module
      )};`
    ).join("\n")}
  ${enableFogOfWar ? (
      // Inline a minimal manifest with the SSR matches
      `window.__reactRouterManifest = ${JSON.stringify(
        getPartialManifest(manifest, router),
        null,
        2
      )};`
    ) : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(contextScript),
        type: void 0
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(routeModulesScript),
        type: "module",
        async: true
      }
    ));
  }, []);
  let routePreloads = matches.map((match) => {
    let route = manifest.routes[match.route.id];
    return route ? (route.imports || []).concat([route.module]) : [];
  }).flat(1);
  let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return isHydrated ? null : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !enableFogOfWar ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.url,
      crossOrigin: props.crossOrigin
    }
  ) : null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.entry.module,
      crossOrigin: props.crossOrigin
    }
  ), dedupe(preloads).map((path) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      key: path,
      rel: "modulepreload",
      href: path,
      crossOrigin: props.crossOrigin
    }
  )), initialScripts);
}
function dedupe(array) {
  return [...new Set(array)];
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

// lib/dom/lib.tsx
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.0.2";
  }
} catch (e) {
}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    future: opts?.future,
    history: createBrowserHistory({ window: opts?.window }),
    hydrationData: opts?.hydrationData || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
    window: opts?.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    future: opts?.future,
    history: createHashHistory({ window: opts?.window }),
    hydrationData: opts?.hydrationData || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
    window: opts?.window
  }).initialize();
}
function parseHydrationData() {
  let state = window?.__staticRouterHydrationData;
  if (state && state.errors) {
    state = {
      ...state,
      errors: deserializeErrors(state.errors)
    };
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HashRouter({ basename, children, window: window2 }) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HistoryRouter({
  basename,
  children,
  history
}) {
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, link, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location = useLocation();
    let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = submitter?.getAttribute("formmethod") || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function ScrollRestoration({
  getKey,
  storageKey,
  ...props
}) {
  let remixContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  useScrollRestoration({ getKey, storageKey });
  let ssrKey = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => {
      if (!remixContext || !getKey) return null;
      let userKey = getScrollRestorationKey(
        location,
        matches,
        basename,
        getKey
      );
      return userKey !== location.key ? userKey : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!remixContext || remixContext.isSpaMode) {
    return null;
  }
  let restoreScroll = ((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  }).toString();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      ...props,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `(${restoreScroll})(${JSON.stringify(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        )}, ${JSON.stringify(ssrKey)})`
      }
    }
  );
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useDataRouterState2(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError2(hookName));
  return state;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
function useSearchParams(defaultInit) {
  warning(
    typeof URLSearchParams !== "undefined",
    `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`
  );
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = useLocation();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      getSearchParamsForLocation(
        location.search,
        hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current
      )
    ),
    [location.search]
  );
  let navigate = useNavigate();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(
        typeof nextInit === "function" ? nextInit(searchParams) : nextInit
      );
      hasSetSearchParamsRef.current = true;
      navigate("?" + newSearchParams, navigateOptions);
    },
    [navigate, searchParams]
  );
  return [searchParams, setSearchParams];
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3("useSubmit" /* UseSubmit */);
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useFetcher({
  key
} = {}) {
  let { router } = useDataRouterContext3("useFetcher" /* UseFetcher */);
  let state = useDataRouterState2("useFetcher" /* UseFetcher */);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeId = route.matches[route.matches.length - 1]?.route.id;
  invariant(fetcherData, `useFetcher must be used inside a FetchersContext`);
  invariant(route, `useFetcher must be used inside a RouteContext`);
  invariant(
    routeId != null,
    `useFetcher can only be used on routes that contain a unique "id"`
  );
  let defaultKey = react__WEBPACK_IMPORTED_MODULE_0__.useId();
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => router.deleteFetcher(fetcherKey);
  }, [router, fetcherKey]);
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (href, opts) => {
      invariant(routeId, "No routeId available for fetcher.load()");
      await router.fetch(fetcherKey, routeId, href, opts);
    },
    [fetcherKey, routeId, router]
  );
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (target, opts) => {
      await submitImpl(target, {
        ...opts,
        navigate: false,
        fetcherKey
      });
    },
    [fetcherKey, submitImpl]
  );
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, { ...props, navigate: false, fetcherKey, ref });
      }
    );
    FetcherForm2.displayName = "fetcher.Form";
    return FetcherForm2;
  }, [fetcherKey]);
  let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
  let data2 = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      Form: FetcherForm,
      submit,
      load,
      ...fetcher,
      data: data2
    }),
    [FetcherForm, submit, load, fetcher, data2]
  );
  return fetcherWithComponents;
}
function useFetchers() {
  let state = useDataRouterState2("useFetchers" /* UseFetchers */);
  return Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
    ...fetcher,
    key
  }));
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location, matches, basename, getKey) {
  let key = null;
  if (getKey) {
    if (basename !== "/") {
      key = getKey(
        {
          ...location,
          pathname: stripBasename(location.pathname, basename) || location.pathname
        },
        matches
      );
    } else {
      key = getKey(location, matches);
    }
  }
  if (key == null) {
    key = location.key;
  }
  return key;
}
function useScrollRestoration({
  getKey,
  storageKey
} = {}) {
  let { router } = useDataRouterContext3("useScrollRestoration" /* UseScrollRestoration */);
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
    "useScrollRestoration" /* UseScrollRestoration */
  );
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(
    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
      if (navigation.state === "idle") {
        let key = getScrollRestorationKey(location, matches, basename, getKey);
        savedScrollPositions[key] = window.scrollY;
      }
      try {
        sessionStorage.setItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY,
          JSON.stringify(savedScrollPositions)
        );
      } catch (error) {
        warning(
          false,
          `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
        );
      }
      window.history.scrollRestoration = "auto";
    }, [navigation.state, getKey, basename, location, matches, storageKey])
  );
  if (typeof document !== "undefined") {
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        );
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
      }
    }, [storageKey]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let disableScrollRestoration = router?.enableScrollRestoration(
        savedScrollPositions,
        () => window.scrollY,
        getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
      );
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      if (location.hash) {
        let el = document.getElementById(
          decodeURIComponent(location.hash.slice(1))
        );
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
function useBeforeUnload(callback, options) {
  let { capture } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
function usePageHide(callback, options) {
  let { capture } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function usePrompt({
  when,
  message
}) {
  let blocker = useBlocker(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState" /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

// lib/dom/server.tsx

function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = "POP" /* Pop */;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location,
      navigationType: action,
      navigator: staticNavigator,
      static: true
    }
  );
}
function StaticRouterProvider({
  context,
  router,
  hydrate = true,
  nonce
}) {
  invariant(
    router && context,
    "You must provide `router` and `context` to <StaticRouterProvider>"
  );
  let dataRouterContext = {
    router,
    navigator: getStatelessNavigator(),
    static: true,
    staticContext: context,
    basename: context.basename || "/"
  };
  let fetchersContext = /* @__PURE__ */ new Map();
  let hydrateScript = "";
  if (hydrate !== false) {
    let data2 = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors(context.errors)
    };
    let json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
    hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
  }
  let { state } = dataRouterContext.router;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, { value: { isTransitioning: false } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename: dataRouterContext.basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: dataRouterContext.navigator,
      static: dataRouterContext.static
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      DataRoutes2,
      {
        routes: router.routes,
        future: router.future,
        state
      }
    )
  ))))), hydrateScript ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      suppressHydrationWarning: true,
      nonce,
      dangerouslySetInnerHTML: { __html: hydrateScript }
    }
  ) : null);
}
function DataRoutes2({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function serializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      serialized[key] = {
        message: val.message,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.
        ...val.name !== "Error" ? {
          __subType: val.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(
        `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`
      );
    },
    replace(to) {
      throw new Error(
        `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`
      );
    },
    go(delta) {
      throw new Error(
        `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`
      );
    },
    back() {
      throw new Error(
        `You cannot use navigator.back() on the server because it is a stateless environment.`
      );
    },
    forward() {
      throw new Error(
        `You cannot use navigator.forward() on the server because it is a stateless environment.`
      );
    }
  };
}
function createStaticHandler2(routes, opts) {
  return createStaticHandler(routes, {
    ...opts,
    mapRouteProperties
  });
}
function createStaticRouter(routes, context, opts = {}) {
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties,
    void 0,
    manifest
  );
  let matches = context.matches.map((match) => {
    let route = manifest[match.route.id] || match.route;
    return {
      ...match,
      route
    };
  });
  let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
  return {
    get basename() {
      return context.basename;
    },
    get future() {
      return {
        ...opts?.future
      };
    },
    get state() {
      return {
        historyAction: "POP" /* Pop */,
        location: context.location,
        matches,
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: context.errors,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        restoreScrollPosition: null,
        preventScrollReset: false,
        revalidation: "idle",
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return void 0;
    },
    initialize() {
      throw msg("initialize");
    },
    subscribe() {
      throw msg("subscribe");
    },
    enableScrollRestoration() {
      throw msg("enableScrollRestoration");
    },
    navigate() {
      throw msg("navigate");
    },
    fetch() {
      throw msg("fetch");
    },
    revalidate() {
      throw msg("revalidate");
    },
    createHref,
    encodeLocation,
    getFetcher() {
      return IDLE_FETCHER;
    },
    deleteFetcher() {
      throw msg("deleteFetcher");
    },
    dispose() {
      throw msg("dispose");
    },
    getBlocker() {
      return IDLE_BLOCKER;
    },
    deleteBlocker() {
      throw msg("deleteBlocker");
    },
    patchRoutes() {
      throw msg("patchRoutes");
    },
    _internalFetchControllers: /* @__PURE__ */ new Map(),
    _internalSetRoutes() {
      throw msg("_internalSetRoutes");
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var ESCAPE_LOOKUP2 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
function htmlEscape(str) {
  return str.replace(ESCAPE_REGEX2, (match) => ESCAPE_LOOKUP2[match]);
}

// lib/dom/ssr/server.tsx

function ServerRouter({
  context,
  url,
  abortDelay,
  nonce
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let { manifest, routeModules, criticalCss, serverHandoffString } = context;
  let routes = createServerRoutes(
    manifest.routes,
    routeModules,
    context.future,
    context.isSpaMode
  );
  context.staticHandlerContext.loaderData = {
    ...context.staticHandlerContext.loaderData
  };
  for (let match of context.staticHandlerContext.matches) {
    let routeId = match.route.id;
    let route = routeModules[routeId];
    let manifestRoute = context.manifest.routes[routeId];
    if (route && manifestRoute && shouldHydrateRouteLoader(manifestRoute, route, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
      delete context.staticHandlerContext.loaderData[routeId];
    }
  }
  let router = createStaticRouter(routes, context.staticHandlerContext);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    FrameworkContext.Provider,
    {
      value: {
        manifest,
        routeModules,
        criticalCss,
        serverHandoffString,
        future: context.future,
        isSpaMode: context.isSpaMode,
        serializeError: context.serializeError,
        abortDelay,
        renderMeta: context.renderMeta
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixErrorBoundary, { location: router.state.location }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      StaticRouterProvider,
      {
        router,
        context: context.staticHandlerContext,
        hydrate: false
      }
    ))
  ), context.serverHandoffStream ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    StreamTransfer,
    {
      context,
      identifier: 0,
      reader: context.serverHandoffStream.getReader(),
      textDecoder: new TextDecoder(),
      nonce
    }
  )) : null);
}

// lib/dom/ssr/routes-test-stub.tsx

function createRoutesStub(routes, context = {}) {
  return function RoutesTestStub({
    initialEntries,
    initialIndex,
    hydrationData,
    future
  }) {
    let routerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    let remixContextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (routerRef.current == null) {
      remixContextRef.current = {
        future: {},
        manifest: {
          routes: {},
          entry: { imports: [], module: "" },
          url: "",
          version: ""
        },
        routeModules: {},
        isSpaMode: false
      };
      let patched = processRoutes(
        // @ts-expect-error loader/action context types don't match :/
        convertRoutesToDataRoutes(routes, (r) => r),
        context,
        remixContextRef.current.manifest,
        remixContextRef.current.routeModules
      );
      routerRef.current = createMemoryRouter(patched, {
        initialEntries,
        initialIndex,
        hydrationData
      });
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FrameworkContext.Provider, { value: remixContextRef.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouterProvider, { router: routerRef.current }));
  };
}
function processRoutes(routes, context, manifest, routeModules, parentId) {
  return routes.map((route) => {
    if (!route.id) {
      throw new Error(
        "Expected a route.id in @remix-run/testing processRoutes() function"
      );
    }
    let { loader, action } = route;
    let newRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      Component: route.Component,
      HydrateFallback: route.HydrateFallback,
      ErrorBoundary: route.ErrorBoundary,
      action: action ? (args) => action({ ...args, context }) : void 0,
      loader: loader ? (args) => loader({ ...args, context }) : void 0,
      handle: route.handle,
      shouldRevalidate: route.shouldRevalidate
    };
    let entryRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      parentId,
      hasAction: route.action != null,
      hasLoader: route.loader != null,
      // When testing routes, you should just be stubbing loader/action, not
      // trying to re-implement the full loader/clientLoader/SSR/hydration flow.
      // That is better tested via E2E tests.
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: route.ErrorBoundary != null,
      module: "build/stub-path-to-module.js"
      // any need for this?
    };
    manifest.routes[newRoute.id] = entryRoute;
    routeModules[route.id] = {
      default: route.Component || Outlet,
      ErrorBoundary: route.ErrorBoundary || void 0,
      handle: route.handle,
      links: route.links,
      meta: route.meta,
      shouldRevalidate: route.shouldRevalidate
    };
    if (route.children) {
      newRoute.children = processRoutes(
        route.children,
        context,
        manifest,
        routeModules,
        newRoute.id
      );
    }
    return newRoute;
  });
}

// lib/server-runtime/cookies.ts


// lib/server-runtime/crypto.ts
var encoder = new TextEncoder();
var sign = async (value, secret) => {
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["sign"]);
  let signature = await crypto.subtle.sign("HMAC", key, data2);
  let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(
    /=+$/,
    ""
  );
  return value + "." + hash;
};
var unsign = async (cookie, secret) => {
  let index = cookie.lastIndexOf(".");
  let value = cookie.slice(0, index);
  let hash = cookie.slice(index + 1);
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["verify"]);
  let signature = byteStringToUint8Array(atob(hash));
  let valid = await crypto.subtle.verify("HMAC", key, signature, data2);
  return valid ? value : false;
};
var createKey2 = async (secret, usages) => crypto.subtle.importKey(
  "raw",
  encoder.encode(secret),
  { name: "HMAC", hash: "SHA-256" },
  false,
  usages
);
function byteStringToUint8Array(byteString) {
  let array = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    array[i] = byteString.charCodeAt(i);
  }
  return array;
}

// lib/server-runtime/cookies.ts
var createCookie = (name, cookieOptions = {}) => {
  let { secrets = [], ...options } = {
    path: "/",
    sameSite: "lax",
    ...cookieOptions
  };
  warnOnceAboutExpiresCookie(name, options.expires);
  return {
    get name() {
      return name;
    },
    get isSigned() {
      return secrets.length > 0;
    },
    get expires() {
      return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
    },
    async parse(cookieHeader, parseOptions) {
      if (!cookieHeader) return null;
      let cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(cookieHeader, { ...options, ...parseOptions });
      if (name in cookies) {
        let value = cookies[name];
        if (typeof value === "string" && value !== "") {
          let decoded = await decodeCookieValue(value, secrets);
          return decoded;
        } else {
          return "";
        }
      } else {
        return null;
      }
    },
    async serialize(value, serializeOptions) {
      return (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(
        name,
        value === "" ? "" : await encodeCookieValue(value, secrets),
        {
          ...options,
          ...serializeOptions
        }
      );
    }
  };
};
var isCookie = (object) => {
  return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
};
async function encodeCookieValue(value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length) result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(
    !expires,
    `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
  );
}

// lib/server-runtime/entry.ts
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo2, routeId) => {
    let route = manifest[routeId];
    if (route) {
      memo2[routeId] = route.module;
    }
    return memo2;
  }, {});
}

// lib/server-runtime/mode.ts
var ServerMode = /* @__PURE__ */ ((ServerMode2) => {
  ServerMode2["Development"] = "development";
  ServerMode2["Production"] = "production";
  ServerMode2["Test"] = "test";
  return ServerMode2;
})(ServerMode || {});
function isServerMode(value) {
  return value === "development" /* Development */ || value === "production" /* Production */ || value === "test" /* Test */;
}

// lib/server-runtime/errors.ts
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== "development" /* Development */) {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors2(errors, serverMode) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}

// lib/server-runtime/routeMatching.ts
function matchServerRoutes(routes, pathname, basename) {
  let matches = matchRoutes(
    routes,
    pathname,
    basename
  );
  if (!matches) return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// lib/server-runtime/data.ts
async function callRouteHandler(handler, args) {
  let result = await handler({
    request: stripRoutesParam(stripIndexParam2(args.request)),
    params: args.params,
    context: args.context
  });
  if (isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status)) {
    throw new Response(null, result.init);
  }
  return result;
}
function stripIndexParam2(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function stripRoutesParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_routes");
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}

// lib/server-runtime/invariant.ts
function invariant3(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    console.error(
      "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
    );
    throw new Error(message);
  }
}

// lib/server-runtime/routes.ts
function groupRoutesByParentId2(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      // Need to use RR's version in the param typed here to permit the optional
      // context even though we know it'll always be provided in remix
      loader: route.module.loader ? async (args) => {
        if (args.request.headers.has("X-React-Router-Prerender-Data")) {
          const preRenderedData = args.request.headers.get(
            "X-React-Router-Prerender-Data"
          );
          let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
          invariant3(encoded, "Missing prerendered data for route");
          let uint8array = new TextEncoder().encode(encoded);
          let stream = new ReadableStream({
            start(controller) {
              controller.enqueue(uint8array);
              controller.close();
            }
          });
          let decoded = await decodeViaTurboStream(stream, global);
          let data2 = decoded.value;
          invariant3(
            data2 && route.id in data2,
            "Unable to decode prerendered data"
          );
          let result = data2[route.id];
          invariant3("data" in result, "Unable to process prerendered data");
          return result.data;
        }
        let val = await callRouteHandler(route.module.loader, args);
        return val;
      } : void 0,
      action: route.module.action ? (args) => callRouteHandler(route.module.action, args) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: true,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(
        manifest,
        future,
        route.id,
        routesByParentId
      ),
      ...commonRoute
    };
  });
}

// lib/server-runtime/markup.ts
var ESCAPE_LOOKUP3 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX3 = /[&><\u2028\u2029]/g;
function escapeHtml2(html) {
  return html.replace(ESCAPE_REGEX3, (match) => ESCAPE_LOOKUP3[match]);
}

// lib/server-runtime/serverHandoff.ts
function createServerHandoffString(serverHandoff) {
  return escapeHtml2(JSON.stringify(serverHandoff));
}

// lib/server-runtime/dev.ts
var globalDevServerHooksKey = "__reactRouterDevServerHooks";
function setDevServerHooks(devServerHooks) {
  globalThis[globalDevServerHooksKey] = devServerHooks;
}
function getDevServerHooks() {
  return globalThis[globalDevServerHooksKey];
}

// lib/server-runtime/single-fetch.ts


// lib/server-runtime/headers.ts

function getDocumentHeaders(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
  let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
  let errorHeaders;
  if (boundaryIdx >= 0) {
    let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) {
        errorHeaders = actionHeaders[id];
      } else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) {
        errorHeaders = loaderHeaders[id];
      }
      return errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let { id } = match.route;
    let route = build.routes[id];
    invariant3(route, `Route with id "${id}" not found in build`);
    let routeModule = route.module;
    let loaderHeaders = context.loaderHeaders[id] || new Headers();
    let actionHeaders = context.actionHeaders[id] || new Headers();
    let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
    let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null) {
      let headers2 = new Headers(parentHeaders);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers2);
      }
      prependCookies(actionHeaders, headers2);
      prependCookies(loaderHeaders, headers2);
      return headers2;
    }
    let headers = new Headers(
      routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
        loaderHeaders,
        parentHeaders,
        actionHeaders,
        errorHeaders: includeErrorHeaders ? errorHeaders : void 0
      }) : routeModule.headers : void 0
    );
    if (includeErrorCookies) {
      prependCookies(errorHeaders, headers);
    }
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0,set_cookie_parser__WEBPACK_IMPORTED_MODULE_3__.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}

// lib/server-runtime/single-fetch.ts
var SINGLE_FETCH_REDIRECT_STATUS = 202;
function getSingleFetchDataStrategy2({
  isActionDataRequest,
  loadRouteIds
} = {}) {
  return async ({ request, matches }) => {
    if (isActionDataRequest && request.method === "GET") {
      return {};
    }
    let matchesToLoad = loadRouteIds ? matches.filter((m) => loadRouteIds.includes(m.route.id)) : matches;
    let results = await Promise.all(
      matchesToLoad.map((match) => match.resolve())
    );
    return results.reduce(
      (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
      {}
    );
  };
}
async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let handlerRequest = new Request(handlerUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal,
      ...request.body ? { duplex: "half" } : void 0
    });
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      dataStrategy: getSingleFetchDataStrategy2({
        isActionDataRequest: true
      })
    });
    if (isResponse(result)) {
      return {
        result: getSingleFetchRedirect(
          result.status,
          result.headers,
          build.basename
        ),
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: getSingleFetchRedirect(
          context.statusCode,
          headers,
          build.basename
        ),
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    if (context.errors) {
      Object.values(context.errors).forEach((err) => {
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let singleFetchResult;
    if (context.errors) {
      singleFetchResult = { error: Object.values(context.errors)[0] };
    } else {
      singleFetchResult = { data: Object.values(context.actionData || {})[0] };
    }
    return {
      result: singleFetchResult,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    return {
      result: { error },
      headers: new Headers(),
      status: 500
    };
  }
}
async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let handlerRequest = new Request(handlerUrl, {
      headers: request.headers,
      signal: request.signal
    });
    let loadRouteIds = new URL(request.url).searchParams.get("_routes")?.split(",") || void 0;
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      dataStrategy: getSingleFetchDataStrategy2({
        loadRouteIds
      })
    });
    if (isResponse(result)) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
            result.status,
            result.headers,
            build.basename
          )
        },
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
            context.statusCode,
            headers,
            build.basename
          )
        },
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    if (context.errors) {
      Object.values(context.errors).forEach((err) => {
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let results = {};
    let loadedMatches = loadRouteIds ? context.matches.filter(
      (m) => m.route.loader && loadRouteIds.includes(m.route.id)
    ) : context.matches;
    loadedMatches.forEach((m) => {
      let { id } = m.route;
      if (context.errors && context.errors.hasOwnProperty(id)) {
        results[id] = { error: context.errors[id] };
      } else if (context.loaderData.hasOwnProperty(id)) {
        results[id] = { data: context.loaderData[id] };
      }
    });
    return {
      result: results,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    return {
      result: { root: { error } },
      headers: new Headers(),
      status: 500
    };
  }
}
function getSingleFetchRedirect(status, headers, basename) {
  let redirect2 = headers.get("Location");
  if (basename) {
    redirect2 = stripBasename(redirect2, basename) || redirect2;
  }
  return {
    redirect: redirect2,
    status,
    revalidate: (
      // Technically X-Remix-Revalidate isn't needed here - that was an implementation
      // detail of ?_data requests as our way to tell the front end to revalidate when
      // we didn't have a response body to include that information in.
      // With single fetch, we tell the front end via this revalidate boolean field.
      // However, we're respecting it for now because it may be something folks have
      // used in their own responses
      // TODO(v3): Consider removing or making this official public API
      headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie")
    ),
    reload: headers.has("X-Remix-Reload-Document"),
    replace: headers.has("X-Remix-Replace")
  };
}
function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
  let controller = new AbortController();
  let timeoutId = setTimeout(
    () => controller.abort(new Error("Server Timeout")),
    typeof streamTimeout === "number" ? streamTimeout : 4950
  );
  requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
  return (0,turbo_stream__WEBPACK_IMPORTED_MODULE_1__.encode)(data2, {
    signal: controller.signal,
    plugins: [
      (value) => {
        if (value instanceof Error) {
          let { name, message, stack } = serverMode === "production" /* Production */ ? sanitizeError(value, serverMode) : value;
          return ["SanitizedError", name, message, stack];
        }
        if (value instanceof ErrorResponseImpl) {
          let { data: data3, status, statusText } = value;
          return ["ErrorResponse", data3, status, statusText];
        }
        if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
          return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
        }
      }
    ],
    postPlugins: [
      (value) => {
        if (!value) return;
        if (typeof value !== "object") return;
        return [
          "SingleFetchClassInstance",
          Object.fromEntries(Object.entries(value))
        ];
      },
      () => ["SingleFetchFallback"]
    ]
  });
}

// lib/server-runtime/server.ts
function derive(build, mode) {
  let routes = createRoutes(build.routes);
  let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
  let serverMode = isServerMode(mode) ? mode : "production" /* Production */;
  let staticHandler = createStaticHandler(dataRoutes, {
    basename: build.basename
  });
  let errorHandler = build.entry.module.handleError || ((error, { request }) => {
    if (serverMode !== "test" /* Test */ && !request.signal.aborted) {
      console.error(
        // @ts-expect-error This is "private" from users but intended for internal use
        isRouteErrorResponse(error) && error.error ? error.error : error
      );
    }
  });
  return {
    routes,
    dataRoutes,
    serverMode,
    staticHandler,
    errorHandler
  };
}
var createRequestHandler = (build, mode) => {
  let _build;
  let routes;
  let serverMode;
  let staticHandler;
  let errorHandler;
  return async function requestHandler(request, loadContext = {}) {
    _build = typeof build === "function" ? await build() : build;
    if (typeof build === "function") {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    }
    let url = new URL(request.url);
    let params = {};
    let handleError = (error) => {
      if (mode === "development" /* Development */) {
        getDevServerHooks()?.processRequestError?.(error);
      }
      errorHandler(error, {
        context: loadContext,
        params,
        request
      });
    };
    let manifestUrl = `${_build.basename ?? "/"}/__manifest`.replace(
      /\/+/g,
      "/"
    );
    if (url.pathname === manifestUrl) {
      try {
        let res = await handleManifestRequest(_build, routes, url);
        return res;
      } catch (e) {
        handleError(e);
        return new Response("Unknown Server Error", { status: 500 });
      }
    }
    let matches = matchServerRoutes(routes, url.pathname, _build.basename);
    if (matches && matches.length > 0) {
      Object.assign(params, matches[0].params);
    }
    let response;
    if (url.pathname.endsWith(".data")) {
      let handlerUrl = new URL(request.url);
      handlerUrl.pathname = handlerUrl.pathname.replace(/\.data$/, "").replace(/^\/_root$/, "/");
      let singleFetchMatches = matchServerRoutes(
        routes,
        handlerUrl.pathname,
        _build.basename
      );
      response = await handleSingleFetchRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        handlerUrl,
        loadContext,
        handleError
      );
      if (_build.entry.module.handleDataRequest) {
        response = await _build.entry.module.handleDataRequest(response, {
          context: loadContext,
          params: singleFetchMatches ? singleFetchMatches[0].params : {},
          request
        });
        if (isRedirectResponse(response)) {
          let result = getSingleFetchRedirect(
            response.status,
            response.headers,
            _build.basename
          );
          if (request.method === "GET") {
            result = {
              [SingleFetchRedirectSymbol]: result
            };
          }
          let headers = new Headers(response.headers);
          headers.set("Content-Type", "text/x-script");
          return new Response(
            encodeViaTurboStream(
              result,
              request.signal,
              _build.entry.module.streamTimeout,
              serverMode
            ),
            {
              status: SINGLE_FETCH_REDIRECT_STATUS,
              headers
            }
          );
        }
      }
    } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
      response = await handleResourceRequest(
        serverMode,
        staticHandler,
        matches.slice(-1)[0].route.id,
        request,
        loadContext,
        handleError
      );
    } else {
      let criticalCss = mode === "development" /* Development */ ? await getDevServerHooks()?.getCriticalCss?.(_build, url.pathname) : void 0;
      response = await handleDocumentRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        loadContext,
        handleError,
        criticalCss
      );
    }
    if (request.method === "HEAD") {
      return new Response(null, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      });
    }
    return response;
  };
};
async function handleManifestRequest(build, routes, url) {
  let patches = {};
  if (url.searchParams.has("p")) {
    for (let path of url.searchParams.getAll("p")) {
      let matches = matchServerRoutes(routes, path, build.basename);
      if (matches) {
        for (let match of matches) {
          let routeId = match.route.id;
          let route = build.assets.routes[routeId];
          if (route) {
            patches[routeId] = route;
          }
        }
      }
    }
    return Response.json(patches, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }
  return new Response("Invalid Request", { status: 400 });
}
async function handleSingleFetchRequest(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
  let { result, headers, status } = request.method !== "GET" ? await singleFetchAction(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  ) : await singleFetchLoaders(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  );
  let resultHeaders = new Headers(headers);
  resultHeaders.set("X-Remix-Response", "yes");
  if (status === 304) {
    return new Response(null, { status: 304, headers: resultHeaders });
  }
  resultHeaders.set("Content-Type", "text/x-script");
  return new Response(
    encodeViaTurboStream(
      result,
      request.signal,
      build.entry.module.streamTimeout,
      serverMode
    ),
    {
      status: status || 200,
      headers: resultHeaders
    }
  );
}
async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
  let context;
  try {
    context = await staticHandler.query(request, {
      requestContext: loadContext
    });
  } catch (error) {
    handleError(error);
    return new Response(null, { status: 500 });
  }
  if (isResponse(context)) {
    return context;
  }
  let headers = getDocumentHeaders(build, context);
  if (context.statusCode === 304) {
    return new Response(null, { status: 304, headers });
  }
  if (context.errors) {
    Object.values(context.errors).forEach((err) => {
      if (!isRouteErrorResponse(err) || err.error) {
        handleError(err);
      }
    });
    context.errors = sanitizeErrors(context.errors, serverMode);
  }
  let state = {
    loaderData: context.loaderData,
    actionData: context.actionData,
    errors: serializeErrors2(context.errors, serverMode)
  };
  let entryContext = {
    manifest: build.assets,
    routeModules: createEntryRouteModules(build.routes),
    staticHandlerContext: context,
    criticalCss,
    serverHandoffString: createServerHandoffString({
      basename: build.basename,
      criticalCss,
      future: build.future,
      isSpaMode: build.isSpaMode
    }),
    serverHandoffStream: encodeViaTurboStream(
      state,
      request.signal,
      build.entry.module.streamTimeout,
      serverMode
    ),
    renderMeta: {},
    future: build.future,
    isSpaMode: build.isSpaMode,
    serializeError: (err) => serializeError(err, serverMode)
  };
  let handleDocumentRequestFunction = build.entry.module.default;
  try {
    return await handleDocumentRequestFunction(
      request,
      context.statusCode,
      headers,
      entryContext,
      loadContext
    );
  } catch (error) {
    handleError(error);
    let errorForSecondRender = error;
    if (isResponse(error)) {
      try {
        let data2 = await unwrapResponse(error);
        errorForSecondRender = new ErrorResponseImpl(
          error.status,
          error.statusText,
          data2
        );
      } catch (e) {
      }
    }
    context = getStaticContextFromError(
      staticHandler.dataRoutes,
      context,
      errorForSecondRender
    );
    if (context.errors) {
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let state2 = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors2(context.errors, serverMode)
    };
    entryContext = {
      ...entryContext,
      staticHandlerContext: context,
      serverHandoffString: createServerHandoffString({
        basename: build.basename,
        future: build.future,
        isSpaMode: build.isSpaMode
      }),
      serverHandoffStream: encodeViaTurboStream(
        state2,
        request.signal,
        build.entry.module.streamTimeout,
        serverMode
      ),
      renderMeta: {}
    };
    try {
      return await handleDocumentRequestFunction(
        request,
        context.statusCode,
        headers,
        entryContext,
        loadContext
      );
    } catch (error2) {
      handleError(error2);
      return returnLastResortErrorResponse(error2, serverMode);
    }
  }
}
async function handleResourceRequest(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    invariant3(
      isResponse(response),
      "Expected a Response to be returned from resource route handler"
    );
    return response;
  } catch (error) {
    if (isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    handleError(error);
    return returnLastResortErrorResponse(error, serverMode);
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return Response.json(
    serializeError(
      // @ts-expect-error This is "private" from users but intended for internal use
      errorResponse.error || new Error("Unexpected Server Error"),
      serverMode
    ),
    {
      status: errorResponse.status,
      statusText: errorResponse.statusText,
      headers: {
        "X-Remix-Error": "yes"
      }
    }
  );
}
function returnLastResortErrorResponse(error, serverMode) {
  let message = "Unexpected Server Error";
  if (serverMode !== "production" /* Production */) {
    message += `

${String(error)}`;
  }
  return new Response(message, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
function unwrapResponse(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
}

// lib/server-runtime/sessions.ts
function flash(name) {
  return `__flash_${name}__`;
}
var createSession = (initialData = {}, id = "") => {
  let map = new Map(Object.entries(initialData));
  return {
    get id() {
      return id;
    },
    get data() {
      return Object.fromEntries(map);
    },
    has(name) {
      return map.has(name) || map.has(flash(name));
    },
    get(name) {
      if (map.has(name)) return map.get(name);
      let flashName = flash(name);
      if (map.has(flashName)) {
        let value = map.get(flashName);
        map.delete(flashName);
        return value;
      }
      return void 0;
    },
    set(name, value) {
      map.set(name, value);
    },
    flash(name, value) {
      map.set(flash(name), value);
    },
    unset(name) {
      map.delete(name);
    }
  };
};
var isSession = (object) => {
  return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
};
function createSessionStorage({
  cookie: cookieArg,
  createData,
  readData,
  updateData,
  deleteData
}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      let id = cookieHeader && await cookie.parse(cookieHeader, options);
      let data2 = id && await readData(id);
      return createSession(data2 || {}, id || "");
    },
    async commitSession(session, options) {
      let { id, data: data2 } = session;
      let expires = options?.maxAge != null ? new Date(Date.now() + options.maxAge * 1e3) : options?.expires != null ? options.expires : cookie.expires;
      if (id) {
        await updateData(id, data2, expires);
      } else {
        id = await createData(data2, expires);
      }
      return cookie.serialize(id, options);
    },
    async destroySession(session, options) {
      await deleteData(session.id);
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(
    cookie.isSigned,
    `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`
  );
}

// lib/server-runtime/sessions/cookieStorage.ts
function createCookieSessionStorage({ cookie: cookieArg } = {}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      return createSession(
        cookieHeader && await cookie.parse(cookieHeader, options) || {}
      );
    },
    async commitSession(session, options) {
      let serializedCookie = await cookie.serialize(session.data, options);
      if (serializedCookie.length > 4096) {
        throw new Error(
          "Cookie length will exceed browser maximum. Length: " + serializedCookie.length
        );
      }
      return serializedCookie;
    },
    async destroySession(_session, options) {
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}

// lib/server-runtime/sessions/memoryStorage.ts
function createMemorySessionStorage({ cookie } = {}) {
  let map = /* @__PURE__ */ new Map();
  return createSessionStorage({
    cookie,
    async createData(data2, expires) {
      let id = Math.random().toString(36).substring(2, 10);
      map.set(id, { data: data2, expires });
      return id;
    },
    async readData(id) {
      if (map.has(id)) {
        let { data: data2, expires } = map.get(id);
        if (!expires || expires > /* @__PURE__ */ new Date()) {
          return data2;
        }
        if (expires) map.delete(id);
      }
      return null;
    },
    async updateData(id, data2, expires) {
      map.set(id, { data: data2, expires });
    },
    async deleteData(id) {
      map.delete(id);
    }
  });
}

// lib/dom/ssr/errors.ts
function deserializeErrors2(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = val.stack;
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = val.stack;
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}




/***/ }),

/***/ "../../node_modules/react-router/dist/development/dom-export.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HydratedRouter: () => (/* binding */ HydratedRouter),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider2)
/* harmony export */ });
/* harmony import */ var _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-router/dist/development/chunk-D52XG6IA.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react-dom/index.js");
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


// lib/dom-export/dom-router-provider.tsx


function RouterProvider2(props) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.RouterProvider, { flushSync: react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync, ...props });
}

// lib/dom-export/hydrated-router.tsx

var ssrInfo = null;
var router = null;
function initSsrInfo() {
  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    ssrInfo = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: false
    };
  }
}
function createHydratedRouter() {
  initSsrInfo();
  if (!ssrInfo) {
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  }
  let localSsrInfo = ssrInfo;
  if (!ssrInfo.stateDecodingPromise) {
    let stream = ssrInfo.context.stream;
    (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.invariant)(stream, "No stream found for single fetch decoding");
    ssrInfo.context.stream = void 0;
    ssrInfo.stateDecodingPromise = (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.decodeViaTurboStream)(stream, window).then((value) => {
      ssrInfo.context.state = value.value;
      localSsrInfo.stateDecodingPromise.value = true;
    }).catch((e) => {
      localSsrInfo.stateDecodingPromise.error = e;
    });
  }
  if (ssrInfo.stateDecodingPromise.error) {
    throw ssrInfo.stateDecodingPromise.error;
  }
  if (!ssrInfo.stateDecodingPromise.value) {
    throw ssrInfo.stateDecodingPromise;
  }
  let routes = (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.createClientRoutes)(
    ssrInfo.manifest.routes,
    ssrInfo.routeModules,
    ssrInfo.context.state,
    ssrInfo.context.isSpaMode
  );
  let hydrationData = void 0;
  if (!ssrInfo.context.isSpaMode) {
    hydrationData = {
      ...ssrInfo.context.state,
      loaderData: { ...ssrInfo.context.state.loaderData }
    };
    let initialMatches = (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(
      routes,
      window.location,
      window.__reactRouterContext?.basename
    );
    if (initialMatches) {
      for (let match of initialMatches) {
        let routeId = match.route.id;
        let route = ssrInfo.routeModules[routeId];
        let manifestRoute = ssrInfo.manifest.routes[routeId];
        if (route && manifestRoute && (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.shouldHydrateRouteLoader)(
          manifestRoute,
          route,
          ssrInfo.context.isSpaMode
        ) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
          delete hydrationData.loaderData[routeId];
        } else if (manifestRoute && !manifestRoute.hasLoader) {
          hydrationData.loaderData[routeId] = null;
        }
      }
    }
    if (hydrationData && hydrationData.errors) {
      hydrationData.errors = (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.deserializeErrors)(hydrationData.errors);
    }
  }
  let router2 = (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    routes,
    history: (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)(),
    basename: ssrInfo.context.basename,
    hydrationData,
    mapRouteProperties: _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.mapRouteProperties,
    dataStrategy: (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.getSingleFetchDataStrategy)(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      () => router2
    ),
    patchRoutesOnNavigation: (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.getPatchRoutesOnNavigationFunction)(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.isSpaMode,
      ssrInfo.context.basename
    )
  });
  ssrInfo.router = router2;
  if (router2.state.initialized) {
    ssrInfo.routerInitialized = true;
    router2.initialize();
  }
  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.createClientRoutesWithHMRRevalidationOptOut;
  window.__reactRouterDataRouter = router2;
  return router2;
}
function HydratedRouter() {
  if (!router) {
    router = createHydratedRouter();
  }
  let [criticalCss, setCriticalCss] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
     true ? ssrInfo?.context.criticalCss : 0
  );
  if (true) {
    if (ssrInfo) {
      window.__reactRouterClearCriticalCss = () => setCriticalCss(void 0);
    }
  }
  let [location, setLocation] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state.location);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
      ssrInfo.routerInitialized = true;
      ssrInfo.router.initialize();
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router) {
      return ssrInfo.router.subscribe((newState) => {
        if (newState.location !== location) {
          setLocation(newState.location);
        }
      });
    }
  }, [location]);
  (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.invariant)(ssrInfo, "ssrInfo unavailable for HydratedRouter");
  (0,_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.useFogOFWarDiscovery)(
    router,
    ssrInfo.manifest,
    ssrInfo.routeModules,
    ssrInfo.context.isSpaMode
  );
  return (
    // This fragment is important to ensure we match the <ServerRouter> JSX
    // structure so that useId values hydrate correctly
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.FrameworkContext.Provider,
      {
        value: {
          manifest: ssrInfo.manifest,
          routeModules: ssrInfo.routeModules,
          future: ssrInfo.context.future,
          criticalCss,
          isSpaMode: ssrInfo.context.isSpaMode
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_2__.RemixErrorBoundary, { location }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouterProvider2, { router }))
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))
  );
}



/***/ }),

/***/ "../../node_modules/react-router/dist/development/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Await: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Await),
/* harmony export */   BrowserRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.BrowserRouter),
/* harmony export */   Form: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Form),
/* harmony export */   HashRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.HashRouter),
/* harmony export */   IDLE_BLOCKER: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.IDLE_NAVIGATION),
/* harmony export */   Link: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Link),
/* harmony export */   Links: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Links),
/* harmony export */   MemoryRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter),
/* harmony export */   Meta: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Meta),
/* harmony export */   NavLink: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.NavLink),
/* harmony export */   Navigate: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   Outlet: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Outlet),
/* harmony export */   PrefetchPageLinks: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.PrefetchPageLinks),
/* harmony export */   Route: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   Router: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   RouterProvider: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.RouterProvider),
/* harmony export */   Routes: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Routes),
/* harmony export */   Scripts: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.Scripts),
/* harmony export */   ScrollRestoration: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollRestoration),
/* harmony export */   ServerRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.ServerRouter),
/* harmony export */   StaticRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.StaticRouter),
/* harmony export */   StaticRouterProvider: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.StaticRouterProvider),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.DataRouterStateContext),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.ErrorResponseImpl),
/* harmony export */   UNSAFE_FetchersContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.FetchersContext),
/* harmony export */   UNSAFE_FrameworkContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.FrameworkContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.NavigationContext),
/* harmony export */   UNSAFE_RemixErrorBoundary: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.RemixErrorBoundary),
/* harmony export */   UNSAFE_RouteContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.RouteContext),
/* harmony export */   UNSAFE_ServerMode: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.ServerMode),
/* harmony export */   UNSAFE_SingleFetchRedirectSymbol: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.SingleFetchRedirectSymbol),
/* harmony export */   UNSAFE_ViewTransitionContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.ViewTransitionContext),
/* harmony export */   UNSAFE_createBrowserHistory: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory),
/* harmony export */   UNSAFE_createClientRoutes: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createClientRoutes),
/* harmony export */   UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createClientRoutesWithHMRRevalidationOptOut),
/* harmony export */   UNSAFE_createRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createRouter),
/* harmony export */   UNSAFE_decodeViaTurboStream: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.decodeViaTurboStream),
/* harmony export */   UNSAFE_deserializeErrors: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.deserializeErrors),
/* harmony export */   UNSAFE_getPatchRoutesOnNavigationFunction: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.getPatchRoutesOnNavigationFunction),
/* harmony export */   UNSAFE_getSingleFetchDataStrategy: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.getSingleFetchDataStrategy),
/* harmony export */   UNSAFE_invariant: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant),
/* harmony export */   UNSAFE_mapRouteProperties: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.mapRouteProperties),
/* harmony export */   UNSAFE_shouldHydrateRouteLoader: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.shouldHydrateRouteLoader),
/* harmony export */   UNSAFE_useFogOFWarDiscovery: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useFogOFWarDiscovery),
/* harmony export */   UNSAFE_useScrollRestoration: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useScrollRestoration),
/* harmony export */   createBrowserRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createBrowserRouter),
/* harmony export */   createCookie: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createCookie),
/* harmony export */   createCookieSessionStorage: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createCookieSessionStorage),
/* harmony export */   createHashRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createMemoryRouter),
/* harmony export */   createMemorySessionStorage: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createMemorySessionStorage),
/* harmony export */   createPath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createPath),
/* harmony export */   createRequestHandler: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createRequestHandler),
/* harmony export */   createRoutesFromChildren: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createRoutesFromElements),
/* harmony export */   createRoutesStub: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createRoutesStub),
/* harmony export */   createSearchParams: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createSearchParams),
/* harmony export */   createSession: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createSession),
/* harmony export */   createSessionStorage: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createSessionStorage),
/* harmony export */   createStaticHandler: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createStaticHandler),
/* harmony export */   createStaticRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.createStaticRouter),
/* harmony export */   data: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.data),
/* harmony export */   generatePath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   isCookie: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.isCookie),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse),
/* harmony export */   isSession: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.isSession),
/* harmony export */   matchPath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.redirectDocument),
/* harmony export */   renderMatches: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.renderMatches),
/* harmony export */   replace: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.replace),
/* harmony export */   resolvePath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.resolvePath),
/* harmony export */   unstable_HistoryRouter: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.HistoryRouter),
/* harmony export */   unstable_setDevServerHooks: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.setDevServerHooks),
/* harmony export */   unstable_usePrompt: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.usePrompt),
/* harmony export */   useActionData: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useActionData),
/* harmony export */   useAsyncError: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useAsyncError),
/* harmony export */   useAsyncValue: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useBeforeUnload),
/* harmony export */   useBlocker: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useBlocker),
/* harmony export */   useFetcher: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useFetcher),
/* harmony export */   useFetchers: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useFetchers),
/* harmony export */   useFormAction: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useFormAction),
/* harmony export */   useHref: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useHref),
/* harmony export */   useInRouterContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useLoaderData),
/* harmony export */   useLocation: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useLocation),
/* harmony export */   useMatch: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useMatch),
/* harmony export */   useMatches: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useMatches),
/* harmony export */   useNavigate: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useNavigate),
/* harmony export */   useNavigation: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useNavigation),
/* harmony export */   useNavigationType: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useNavigationType),
/* harmony export */   useOutlet: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useOutlet),
/* harmony export */   useOutletContext: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useOutletContext),
/* harmony export */   useParams: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useParams),
/* harmony export */   useResolvedPath: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useResolvedPath),
/* harmony export */   useRevalidator: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useRevalidator),
/* harmony export */   useRouteError: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useRoutes),
/* harmony export */   useSearchParams: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useSearchParams),
/* harmony export */   useSubmit: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useSubmit),
/* harmony export */   useViewTransitionState: () => (/* reexport safe */ _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__.useViewTransitionState)
/* harmony export */ });
/* harmony import */ var _chunk_D52XG6IA_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react-router/dist/development/chunk-D52XG6IA.mjs");
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




/***/ })

}]);
//# sourceMappingURL=vendor.js.map