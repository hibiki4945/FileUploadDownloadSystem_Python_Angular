import {
  CommonModule,
  DOCUMENT,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-SH3ZCXNB.js";
import {
  APP_ID,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  combineLatest,
  concat,
  debounceTime,
  distinctUntilChanged,
  filter,
  forwardRef,
  from,
  fromEvent,
  groupBy,
  inject,
  interval,
  isObservable,
  map,
  merge,
  mergeMap,
  of,
  pairwise,
  reduce,
  setClassMetadata,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-3KOKM7AO.js";
import {
  __spreadValues
} from "./chunk-GLLL6ZVE.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.ɵfac = function Platform_Factory(t) {
  return new (t || _Platform)(ɵɵinject(PLATFORM_ID));
};
_Platform.ɵprov = ɵɵdefineInjectable({
  token: _Platform,
  factory: _Platform.ɵfac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || _PlatformModule)();
};
_PlatformModule.ɵmod = ɵɵdefineNgModule({
  type: _PlatformModule
});
_PlatformModule.ɵinj = ɵɵdefineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || _Directionality)(ɵɵinject(DIR_DOCUMENT, 8));
};
_Directionality.ɵprov = ɵɵdefineInjectable({
  token: _Directionality,
  factory: _Directionality.ɵfac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.ɵfac = function Dir_Factory(t) {
  return new (t || _Dir)();
};
_Dir.ɵdir = ɵɵdefineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || _BidiModule)();
};
_BidiModule.ɵmod = ɵɵdefineNgModule({
  type: _BidiModule,
  imports: [Dir],
  exports: [Dir]
});
_BidiModule.ɵinj = ɵɵdefineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var _UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
};
_UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
  return new (t || _UniqueSelectionDispatcher)();
};
_UniqueSelectionDispatcher.ɵprov = ɵɵdefineInjectable({
  token: _UniqueSelectionDispatcher,
  factory: _UniqueSelectionDispatcher.ɵfac,
  providedIn: "root"
});
var UniqueSelectionDispatcher = _UniqueSelectionDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var _CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
};
_CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
  return new (t || _CdkFixedSizeVirtualScroll)();
};
_CdkFixedSizeVirtualScroll.ɵdir = ɵɵdefineDirective({
  type: _CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
  }]), ɵɵNgOnChangesFeature]
});
var CdkFixedSizeVirtualScroll = _CdkFixedSizeVirtualScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var _ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
};
_ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
  return new (t || _ScrollDispatcher)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8));
};
_ScrollDispatcher.ɵprov = ɵɵdefineInjectable({
  token: _ScrollDispatcher,
  factory: _ScrollDispatcher.ɵfac,
  providedIn: "root"
});
var ScrollDispatcher = _ScrollDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from2) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from2 == "top") {
      return el.scrollTop;
    }
    if (from2 == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from2 == "start") {
      from2 = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      from2 = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from2 == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from2 == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from2 == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
};
_CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
  return new (t || _CdkScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
};
_CdkScrollable.ɵdir = ɵɵdefineDirective({
  type: _CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
  standalone: true
});
var CdkScrollable = _CdkScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var _ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime2 = DEFAULT_RESIZE_TIME) {
    return throttleTime2 > 0 ? this._change.pipe(auditTime(throttleTime2)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
};
_ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
  return new (t || _ViewportRuler)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8));
};
_ViewportRuler.ɵprov = ɵɵdefineInjectable({
  token: _ViewportRuler,
  factory: _ViewportRuler.ɵfac,
  providedIn: "root"
});
var ViewportRuler = _ViewportRuler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var _CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
};
_CdkVirtualScrollable.ɵfac = function CdkVirtualScrollable_Factory(t) {
  return new (t || _CdkVirtualScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
};
_CdkVirtualScrollable.ɵdir = ɵɵdefineDirective({
  type: _CdkVirtualScrollable,
  features: [ɵɵInheritDefinitionFeature]
});
var CdkVirtualScrollable = _CdkVirtualScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var _CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from2) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from2 ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from2) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from2 == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from2) {
      fromRect = from2;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    this._isChangeDetectionPending = false;
    this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
    this.ngZone.run(() => this._changeDetectorRef.markForCheck());
    const runAfterChangeDetection = this._runAfterChangeDetection;
    this._runAfterChangeDetection = [];
    for (const fn of runAfterChangeDetection) {
      fn();
    }
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
};
_CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
  return new (t || _CdkVirtualScrollViewport)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(VIRTUAL_SCROLLABLE, 8));
};
_CdkVirtualScrollViewport.ɵcmp = ɵɵdefineComponent({
  type: _CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation",
    appendOnly: [InputFlags.HasDecoratorInputTransform, "appendOnly", "appendOnly", booleanAttribute]
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkScrollable,
    useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
    deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵelement(3, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
  encapsulation: 2,
  changeDetection: 0
});
var CdkVirtualScrollViewport = _CdkVirtualScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var _CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
};
_CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
  return new (t || _CdkVirtualForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(_VIEW_REPEATER_STRATEGY), ɵɵdirectiveInject(CdkVirtualScrollViewport, 4), ɵɵdirectiveInject(NgZone));
};
_CdkVirtualForOf.ɵdir = ɵɵdefineDirective({
  type: _CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate",
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var CdkVirtualForOf = _CdkVirtualForOf;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var _CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2] - this.measureScrollOffset(from2);
  }
};
_CdkVirtualScrollableElement.ɵfac = function CdkVirtualScrollableElement_Factory(t) {
  return new (t || _CdkVirtualScrollableElement)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
};
_CdkVirtualScrollableElement.ɵdir = ɵɵdefineDirective({
  type: _CdkVirtualScrollableElement,
  selectors: [["", "cdkVirtualScrollingElement", ""]],
  hostAttrs: [1, "cdk-virtual-scrollable"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: VIRTUAL_SCROLLABLE,
    useExisting: _CdkVirtualScrollableElement
  }]), ɵɵInheritDefinitionFeature]
});
var CdkVirtualScrollableElement = _CdkVirtualScrollableElement;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
};
_CdkVirtualScrollableWindow.ɵfac = function CdkVirtualScrollableWindow_Factory(t) {
  return new (t || _CdkVirtualScrollableWindow)(ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
};
_CdkVirtualScrollableWindow.ɵdir = ɵɵdefineDirective({
  type: _CdkVirtualScrollableWindow,
  selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: VIRTUAL_SCROLLABLE,
    useExisting: _CdkVirtualScrollableWindow
  }]), ɵɵInheritDefinitionFeature]
});
var CdkVirtualScrollableWindow = _CdkVirtualScrollableWindow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _CdkScrollableModule = class _CdkScrollableModule {
};
_CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) {
  return new (t || _CdkScrollableModule)();
};
_CdkScrollableModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkScrollableModule,
  imports: [CdkScrollable],
  exports: [CdkScrollable]
});
_CdkScrollableModule.ɵinj = ɵɵdefineInjector({});
var CdkScrollableModule = _CdkScrollableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var _ScrollingModule = class _ScrollingModule {
};
_ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
  return new (t || _ScrollingModule)();
};
_ScrollingModule.ɵmod = ɵɵdefineNgModule({
  type: _ScrollingModule,
  imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
  exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
});
_ScrollingModule.ɵinj = ɵɵdefineInjector({
  imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
});
var ScrollingModule = _ScrollingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var META = 91;
var MAC_META = 224;

// node_modules/@angular/cdk/fesm2022/observers.mjs
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || _MutationObserverFactory)();
};
_MutationObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.ɵfac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new Subject();
      const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }
    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || _ContentObserver)(ɵɵinject(MutationObserverFactory));
};
_ContentObserver.ɵprov = ɵɵdefineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.ɵfac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    });
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || _CdkObserveContent)(ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_CdkObserveContent.ɵdir = ɵɵdefineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || _ObserversModule)();
};
_ObserversModule.ɵmod = ɵɵdefineNgModule({
  type: _ObserversModule,
  imports: [CdkObserveContent],
  exports: [CdkObserveContent]
});
_ObserversModule.ɵinj = ɵɵdefineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || _LayoutModule)();
};
_LayoutModule.ɵmod = ɵɵdefineNgModule({
  type: _LayoutModule
});
_LayoutModule.ɵinj = ɵɵdefineInjector({});
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
_MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
  return new (t || _MediaMatcher)(ɵɵinject(Platform), ɵɵinject(CSP_NONCE, 8));
};
_MediaMatcher.ɵprov = ɵɵdefineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.ɵfac,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.nonce = nonce;
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
};
_BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
  return new (t || _BreakpointObserver)(ɵɵinject(MediaMatcher), ɵɵinject(NgZone));
};
_BreakpointObserver.ɵprov = ɵɵdefineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.ɵfac,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || _AriaDescriber)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
};
_AriaDescriber.ɵprov = ɵɵdefineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.ɵfac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || _InteractivityChecker)(ɵɵinject(Platform));
};
_InteractivityChecker.ɵprov = ɵɵdefineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.ɵfac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe(take(1)).subscribe(fn);
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }
};
_FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || _FocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_FocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.ɵfac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || _CdkTrapFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(DOCUMENT));
};
_CdkTrapFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || _FocusTrapManager)();
};
_FocusTrapManager.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.ɵfac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }
};
_ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || _ConfigurableFocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(FocusTrapManager), ɵɵinject(DOCUMENT), ɵɵinject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.ɵfac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || _InputModalityDetector)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.ɵprov = ɵɵdefineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.ɵfac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || _LiveAnnouncer)(ɵɵinject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.ɵprov = ɵɵdefineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.ɵfac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || _CdkAriaLive)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LiveAnnouncer), ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(NgZone));
};
_CdkAriaLive.ɵdir = ɵɵdefineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [InputFlags.None, "cdkAriaLive", "politeness"],
    duration: [InputFlags.None, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || _FocusMonitor)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(InputModalityDetector), ɵɵinject(DOCUMENT, 8), ɵɵinject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.ɵprov = ɵɵdefineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.ɵfac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || _CdkMonitorFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor));
};
_CdkMonitorFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || _HighContrastModeDetector)(ɵɵinject(Platform), ɵɵinject(DOCUMENT));
};
_HighContrastModeDetector.ɵprov = ɵɵdefineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.ɵfac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || _A11yModule)(ɵɵinject(HighContrastModeDetector));
};
_A11yModule.ɵmod = ɵɵdefineNgModule({
  type: _A11yModule,
  imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
_A11yModule.ɵinj = ɵɵdefineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  constructor(_document) {
    this._document = _document;
    this.positions = /* @__PURE__ */ new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var activeEventListenerOptions = normalizePassiveListenerOptions({
  passive: false
});
var MOUSE_EVENT_IGNORE_TIME = 800;
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._hasStartedDragging = false;
    this._moveEvents = new Subject();
    this._pointerMoveSubscription = Subscription.EMPTY;
    this._pointerUpSubscription = Subscription.EMPTY;
    this._scrollSubscription = Subscription.EMPTY;
    this._resizeSubscription = Subscription.EMPTY;
    this._boundaryElement = null;
    this._nativeInteractionsEnabled = true;
    this._handles = [];
    this._disabledHandles = /* @__PURE__ */ new Set();
    this._direction = "ltr";
    this.dragStartDelay = 0;
    this._disabled = false;
    this.beforeStarted = new Subject();
    this.started = new Subject();
    this.released = new Subject();
    this.ended = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.moved = this._moveEvents;
    this._pointerDown = (event) => {
      this.beforeStarted.next();
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    this._pointerMove = (event) => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          if (!container || !container.isDragging() && !container.isReceiving()) {
            event.preventDefault();
            this._hasStartedDragging = true;
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      event.preventDefault();
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    this._pointerUp = (event) => {
      this._endDragSequence(event);
    };
    this._nativeDragStart = (event) => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
        element.addEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
        element.addEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeSubscriptions();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.remove();
    this._previewRef?.destroy();
    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeSubscriptions();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const dropContainer = this._dropContainer;
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment("");
      const shadowRoot = this._getShadowRoot();
      parent.insertBefore(anchor, element);
      this._initialTransform = element.style.transform || "";
      this._preview = this._createPreviewElement();
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasStartedDragging = this._hasMoved = false;
    this._removeSubscriptions();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */
  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      "margin": "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": `${this._config.zIndex || 1e3}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.classList.add("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = getTransformTransitionDurationInMs(this._preview);
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || _getEventTarget(event) === this._preview && event.propertyName === "transform") {
            this._preview?.removeEventListener("transitionend", handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add("cdk-drag-placeholder");
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener("mousedown", this._pointerDown, activeEventListenerOptions);
    element.removeEventListener("touchstart", this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener("dragstart", this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
};
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from2 = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from2 === to) {
    return;
  }
  const target = array[from2];
  const delta = to < from2 ? -1 : 1;
  for (let i = from2; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  constructor(_element, _dragDropRegistry) {
    this._element = _element;
    this._dragDropRegistry = _dragDropRegistry;
    this._itemPositions = [];
    this.orientation = "vertical";
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      coerceElement(this._element).appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex((currentItem) => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this.disabled = false;
    this.sortingDisabled = false;
    this.autoScrollDisabled = false;
    this.autoScrollStep = 2;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.beforeStarted = new Subject();
    this.entered = new Subject();
    this.exited = new Subject();
    this.dropped = new Subject();
    this.sorted = new Subject();
    this.receivingStarted = new Subject();
    this.receivingStopped = new Subject();
    this._isDragging = false;
    this._draggables = [];
    this._siblings = [];
    this._activeSiblings = /* @__PURE__ */ new Set();
    this._viewportScrollSubscription = Subscription.EMPTY;
    this._verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    this._horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._stopScrollTimers = new Subject();
    this._cachedShadowRoot = null;
    this._startScrollInterval = () => {
      this._stopScrolling();
      interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    this.element = coerceElement(element);
    this._document = _document;
    this.withScrollableParents([this.element]);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
    this._sortStrategy = new SingleAxisSortStrategy(this.element, _dragDropRegistry);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._sortStrategy.direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    this._sortStrategy.orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = coerceElement(this.element);
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._sortStrategy.direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = coerceElement(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true;
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    const element = coerceElement(this.element);
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = coerceElement(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    const nativeElement = coerceElement(this.element);
    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(coerceElement(this.element));
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var _DragDropRegistry = class _DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    this._dropInstances = /* @__PURE__ */ new Set();
    this._dragInstances = /* @__PURE__ */ new Set();
    this._activeDragInstances = [];
    this._globalListeners = /* @__PURE__ */ new Map();
    this._draggingPredicate = (item) => item.isDragging();
    this.pointerMove = new Subject();
    this.pointerUp = new Subject();
    this.scroll = new Subject();
    this._preventDefaultWhileDragging = (event) => {
      if (this._activeDragInstances.length > 0) {
        event.preventDefault();
      }
    };
    this._persistentTouchmoveListener = (event) => {
      if (this._activeDragInstances.length > 0) {
        if (this._activeDragInstances.some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    this._document = _document;
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._document.addEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances.indexOf(drag) > -1) {
      return;
    }
    this._activeDragInstances.push(drag);
    if (this._activeDragInstances.length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      this._globalListeners.set(isTouchEvent2 ? "touchend" : "mouseup", {
        handler: (e) => this.pointerUp.next(e),
        options: true
      }).set("scroll", {
        handler: (e) => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      }).set("selectstart", {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      if (!isTouchEvent2) {
        this._globalListeners.set("mousemove", {
          handler: (e) => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    const index = this._activeDragInstances.indexOf(drag);
    if (index > -1) {
      this._activeDragInstances.splice(index, 1);
      if (this._activeDragInstances.length === 0) {
        this._clearGlobalListeners();
      }
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances.indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;
          const callback = (event) => {
            if (this._activeDragInstances.length) {
              observer.next(event);
            }
          };
          shadowRoot.addEventListener("scroll", callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener("scroll", callback, eventOptions);
          };
        });
      }));
    }
    return merge(...streams);
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
};
_DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || _DragDropRegistry)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_DragDropRegistry.ɵprov = ɵɵdefineInjectable({
  token: _DragDropRegistry,
  factory: _DragDropRegistry.ɵfac,
  providedIn: "root"
});
var DragDropRegistry = _DragDropRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var _DragDrop = class _DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
};
_DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || _DragDrop)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone), ɵɵinject(ViewportRuler), ɵɵinject(DragDropRegistry));
};
_DragDrop.ɵprov = ɵɵdefineInjectable({
  token: _DragDrop,
  factory: _DragDrop.ɵfac,
  providedIn: "root"
});
var DragDrop = _DragDrop;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewportRuler
  }, {
    type: DragDropRegistry
  }], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var _CdkDragHandle = class _CdkDragHandle {
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  constructor(element, parentDrag) {
    this.element = element;
    this._stateChanges = new Subject();
    this._disabled = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag = parentDrag;
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
};
_CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || _CdkDragHandle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CDK_DRAG_PARENT, 12));
};
_CdkDragHandle.ɵdir = ɵɵdefineDirective({
  type: _CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDragHandleDisabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_HANDLE,
    useExisting: _CdkDragHandle
  }]), ɵɵInputTransformsFeature]
});
var CdkDragHandle = _CdkDragHandle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      standalone: true,
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var _CdkDragPlaceholder = class _CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || _CdkDragPlaceholder)(ɵɵdirectiveInject(TemplateRef));
};
_CdkDragPlaceholder.ɵdir = ɵɵdefineDirective({
  type: _CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: _CdkDragPlaceholder
  }])]
});
var CdkDragPlaceholder = _CdkDragPlaceholder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var _CdkDragPreview = class _CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this.matchSize = false;
  }
};
_CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || _CdkDragPreview)(ɵɵdirectiveInject(TemplateRef));
};
_CdkDragPreview.ɵdir = ɵɵdefineDirective({
  type: _CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data",
    matchSize: [InputFlags.HasDecoratorInputTransform, "matchSize", "matchSize", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: _CdkDragPreview
  }]), ɵɵInputTransformsFeature]
});
var CdkDragPreview = _CdkDragPreview;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [{
    type: TemplateRef
  }], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var DRAG_HOST_CLASS = "cdk-drag";
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var _CdkDrag = class _CdkDrag {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new Subject();
    this.started = new EventEmitter();
    this.released = new EventEmitter();
    this.ended = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.dropped = new EventEmitter();
    this.moved = new Observable((observer) => {
      const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    _CdkDrag._dragInstances.push(this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1), takeUntil(this._destroyed)).subscribe(() => {
        this._updateRootElement();
        this._setupHandlesListener();
        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      });
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    const index = _CdkDrag._dragInstances.indexOf(this);
    if (index > -1) {
      _CdkDrag._dragInstances.splice(index, 1);
    }
    this._ngZone.runOutsideAngular(() => {
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(_CdkDrag._dragInstances.find((drag) => {
            return drag.element.nativeElement === parent;
          })?._dragRef || null);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.changes.pipe(
      startWith(this._handles),
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const childHandleElements = handles.filter((handle) => handle._parentDrag === this).map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          childHandleElements.push(this.element);
        }
        this._dragRef.withHandles(childHandleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => {
          return item._stateChanges.pipe(startWith(item));
        }));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
};
_CdkDrag._dragInstances = [];
_CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || _CdkDrag)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CDK_DROP_LIST, 12), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_DRAG_CONFIG, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DragDrop), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CDK_DRAG_HANDLE, 10), ɵɵdirectiveInject(CDK_DRAG_PARENT, 12));
};
_CdkDrag.ɵdir = ɵɵdefineDirective({
  type: _CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CDK_DRAG_PREVIEW, 5);
      ɵɵcontentQuery(dirIndex, CDK_DRAG_PLACEHOLDER, 5);
      ɵɵcontentQuery(dirIndex, CDK_DRAG_HANDLE, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previewTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._placeholderTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    data: [InputFlags.None, "cdkDragData", "data"],
    lockAxis: [InputFlags.None, "cdkDragLockAxis", "lockAxis"],
    rootElementSelector: [InputFlags.None, "cdkDragRootElement", "rootElementSelector"],
    boundaryElement: [InputFlags.None, "cdkDragBoundary", "boundaryElement"],
    dragStartDelay: [InputFlags.None, "cdkDragStartDelay", "dragStartDelay"],
    freeDragPosition: [InputFlags.None, "cdkDragFreeDragPosition", "freeDragPosition"],
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDragDisabled", "disabled", booleanAttribute],
    constrainPosition: [InputFlags.None, "cdkDragConstrainPosition", "constrainPosition"],
    previewClass: [InputFlags.None, "cdkDragPreviewClass", "previewClass"],
    previewContainer: [InputFlags.None, "cdkDragPreviewContainer", "previewContainer"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DRAG_PARENT,
    useExisting: _CdkDrag
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkDrag = _CdkDrag;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      standalone: true,
      host: {
        "class": DRAG_HOST_CLASS,
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_DROP_LIST]
    }, {
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: CdkDragHandle,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [CDK_DRAG_HANDLE]
    }]
  }, {
    type: CdkDrag,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [CDK_DRAG_PARENT]
    }]
  }], {
    _handles: [{
      type: ContentChildren,
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: ContentChild,
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: ContentChild,
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var _CdkDropListGroup = class _CdkDropListGroup {
  constructor() {
    this._items = /* @__PURE__ */ new Set();
    this.disabled = false;
  }
  ngOnDestroy() {
    this._items.clear();
  }
};
_CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || _CdkDropListGroup)();
};
_CdkDropListGroup.ɵdir = ɵɵdefineDirective({
  type: _CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
  },
  exportAs: ["cdkDropListGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: _CdkDropListGroup
  }]), ɵɵInputTransformsFeature]
});
var CdkDropListGroup = _CdkDropListGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      standalone: true,
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var _CdkDropList = class _CdkDropList {
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  constructor(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    this._destroyed = new Subject();
    this.connectedTo = [];
    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    this.enterPredicate = () => true;
    this.sortPredicate = () => true;
    this.dropped = new EventEmitter();
    this.entered = new EventEmitter();
    this.exited = new EventEmitter();
    this.sorted = new EventEmitter();
    this._unsortedItems = /* @__PURE__ */ new Set();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map((item) => item._dragRef));
  }
};
_CdkDropList._dropLists = [];
_CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || _CdkDropList)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DragDrop), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(CDK_DROP_LIST_GROUP, 12), ɵɵdirectiveInject(CDK_DRAG_CONFIG, 8));
};
_CdkDropList.ɵdir = ɵɵdefineDirective({
  type: _CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id);
      ɵɵclassProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: [InputFlags.None, "cdkDropListConnectedTo", "connectedTo"],
    data: [InputFlags.None, "cdkDropListData", "data"],
    orientation: [InputFlags.None, "cdkDropListOrientation", "orientation"],
    id: "id",
    lockAxis: [InputFlags.None, "cdkDropListLockAxis", "lockAxis"],
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListDisabled", "disabled", booleanAttribute],
    sortingDisabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
    enterPredicate: [InputFlags.None, "cdkDropListEnterPredicate", "enterPredicate"],
    sortPredicate: [InputFlags.None, "cdkDropListSortPredicate", "sortPredicate"],
    autoScrollDisabled: [InputFlags.HasDecoratorInputTransform, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
    autoScrollStep: [InputFlags.None, "cdkDropListAutoScrollStep", "autoScrollStep"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    // Prevent child drop lists from picking up the same group as their parent.
    {
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    },
    {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }
  ]), ɵɵInputTransformsFeature]
});
var CdkDropList = _CdkDropList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      standalone: true,
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DragDrop
  }, {
    type: ChangeDetectorRef
  }, {
    type: ScrollDispatcher
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: CdkDropListGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DROP_LIST_GROUP]
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var _DragDropModule = class _DragDropModule {
};
_DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || _DragDropModule)();
};
_DragDropModule.ɵmod = ɵɵdefineNgModule({
  type: _DragDropModule,
  imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
  exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
});
_DragDropModule.ɵinj = ɵɵdefineInjector({
  providers: [DragDrop],
  imports: [CdkScrollableModule]
});
var DragDropModule = _DragDropModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs
function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r8);
      ɵɵnextContext(3);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r8);
      ɵɵnextContext(3);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.previous());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r5.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r6.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 9);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵclassProp("disabled", _r0.isFirstPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < _r0.getCurrent());
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r15);
      const page_r10 = ɵɵnextContext().$implicit;
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.setCurrent(page_r10.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r15);
      const page_r10 = ɵɵnextContext().$implicit;
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.setCurrent(page_r10.value));
    });
    ɵɵelementStart(1, "span", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ɵɵnextContext().$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r11.screenReaderPageLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r10.label === "..." ? page_r10.label : ɵɵpipeBind2(5, 2, page_r10.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 16)(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "number");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const page_r10 = ɵɵnextContext().$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r12.screenReaderCurrentLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r10.label === "..." ? page_r10.label : ɵɵpipeBind2(6, 2, page_r10.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵclassProp("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.getCurrent() !== page_r10.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.getCurrent() === page_r10.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r23);
      ɵɵnextContext(3);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r23);
      ɵɵnextContext(3);
      const _r0 = ɵɵreference(1);
      return ɵɵresetView(_r0.next());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r20.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r20.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r21.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r21.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 17);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵclassProp("disabled", _r0.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", !_r0.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    ɵɵelementStart(2, "li", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵclassProp("responsive", ctx_r1.responsive);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.directionLinks);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    ɵɵadvance();
    ɵɵproperty("ngForOf", _r0.pages)("ngForTrackBy", ctx_r1.trackByIndex);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.directionLinks);
  }
}
var PaginationService = class {
  constructor() {
    this.change = new EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = "DEFAULT_PAGINATION_ID";
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = class {
  constructor(service) {
    this.service = service;
    this.state = {};
  }
  transform(collection, args) {
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config) {
    const required = ["itemsPerPage", "currentPage"];
    const missing = required.filter((prop) => !(prop in config));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(", ")}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];
    if (!state) {
      return false;
    }
    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state.slice.every((element, index) => element === collection[start + index]);
  }
};
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
  return new (t || PaginatePipe)(ɵɵdirectiveInject(PaginationService, 16));
};
PaginatePipe.ɵpipe = ɵɵdefinePipe({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatePipe, [{
    type: Pipe,
    args: [{
      name: "paginate",
      pure: false
    }]
  }], function() {
    return [{
      type: PaginationService
    }];
  }, null);
})();
var DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
var DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;
var PaginationControlsDirective = class {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe((id) => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === void 0) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    paginationRange = +paginationRange;
    let pages = [];
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = "...";
      } else {
        label = pageNumber;
      }
      pages.push({
        label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
};
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
  return new (t || PaginationControlsDirective)(ɵɵdirectiveInject(PaginationService), ɵɵdirectiveInject(ChangeDetectorRef));
};
PaginationControlsDirective.ɵdir = ɵɵdefineDirective({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsDirective, [{
    type: Directive,
    args: [{
      selector: "pagination-template,[pagination-template]",
      exportAs: "paginationApi"
    }]
  }], function() {
    return [{
      type: PaginationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== "false";
}
var PaginationControlsComponent = class {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = "Previous";
    this.nextLabel = "Next";
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
};
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
  return new (t || PaginationControlsComponent)();
};
PaginationControlsComponent.ɵcmp = ɵɵdefineComponent({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "pagination-template", 0, 1);
      ɵɵlistener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        return ctx.pageChange.emit($event);
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        return ctx.pageBoundsCorrection.emit($event);
      });
      ɵɵelementStart(2, "nav", 2);
      ɵɵtemplate(3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(1);
      ɵɵproperty("id", ctx.id)("maxSize", ctx.maxSize);
      ɵɵadvance(2);
      ɵɵattribute("aria-label", ctx.screenReaderPaginationLabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, NgIf, NgForOf, DecimalPipe],
  styles: ['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsComponent, [{
    type: Component,
    args: [{
      selector: "pagination-controls",
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    previousLabel: [{
      type: Input
    }],
    nextLabel: [{
      type: Input
    }],
    screenReaderPaginationLabel: [{
      type: Input
    }],
    screenReaderPageLabel: [{
      type: Input
    }],
    screenReaderCurrentLabel: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
var NgxPaginationModule = class {
};
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) {
  return new (t || NgxPaginationModule)();
};
NgxPaginationModule.ɵmod = ɵɵdefineNgModule({
  type: NgxPaginationModule,
  declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
  imports: [CommonModule],
  exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
});
NgxPaginationModule.ɵinj = ɵɵdefineInjector({
  providers: [PaginationService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

// node_modules/ngx-easy-table/fesm2022/ngx-easy-table.mjs
var _c02 = ["paginationDirective"];
var _c12 = ["paginationRange"];
function PaginationComponent_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_5_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r8);
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.previous());
    })("click", function PaginationComponent_li_5_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r8);
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.previous());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r5.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r6.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵtemplate(1, PaginationComponent_li_5_a_1_Template, 4, 3, "a", 11)(2, PaginationComponent_li_5_span_2_Template, 4, 2, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵclassProp("disabled", _r0.isFirstPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < _r0.getCurrent());
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.isFirstPage());
  }
}
function PaginationComponent_li_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_8_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r15);
      const page_r10 = ɵɵnextContext().$implicit;
      ɵɵnextContext();
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.setCurrent(page_r10.value));
    })("click", function PaginationComponent_li_8_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r15);
      const page_r10 = ɵɵnextContext().$implicit;
      ɵɵnextContext();
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.setCurrent(page_r10.value));
    });
    ɵɵelementStart(1, "span", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ɵɵnextContext().$implicit;
    const ctx_r11 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r11.screenReaderPageLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r10.label);
  }
}
function PaginationComponent_li_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const page_r10 = ɵɵnextContext().$implicit;
    const ctx_r12 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r12.screenReaderCurrentLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r10.label);
  }
}
function PaginationComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, PaginationComponent_li_8_a_1_Template, 5, 2, "a", 11)(2, PaginationComponent_li_8_ng_container_2_Template, 5, 2, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵclassProp("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.getCurrent() !== page_r10.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.getCurrent() === page_r10.value);
  }
}
function PaginationComponent_li_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_9_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r23);
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.next());
    })("click", function PaginationComponent_li_9_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r23);
      ɵɵnextContext(2);
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(_r0.next());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r20.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r20.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r21.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r21.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵtemplate(1, PaginationComponent_li_9_a_1_Template, 4, 3, "a", 11)(2, PaginationComponent_li_9_span_2_Template, 4, 2, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵclassProp("disabled", _r0.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", !_r0.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", _r0.isLastPage());
  }
}
function PaginationComponent_div_10_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function PaginationComponent_div_10_ul_7_li_1_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r30);
      const limit_r28 = restoredCtx.$implicit;
      const ctx_r29 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r29.changeLimit(limit_r28, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const limit_r28 = ctx.$implicit;
    const ctx_r27 = ɵɵnextContext(3);
    ɵɵclassProp("ngx-pagination-range--selected", limit_r28 === ctx_r27.selectedLimit);
    ɵɵadvance(2);
    ɵɵtextInterpolate(limit_r28);
  }
}
function PaginationComponent_div_10_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 23);
    ɵɵtemplate(1, PaginationComponent_div_10_ul_7_li_1_Template, 3, 3, "li", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r26.ranges);
  }
}
function PaginationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16, 17)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    ɵɵlistener("click", function PaginationComponent_div_10_Template_div_click_4_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.showRange = !ctx_r31.showRange);
    });
    ɵɵtext(5);
    ɵɵelement(6, "i", 21);
    ɵɵelementEnd();
    ɵɵtemplate(7, PaginationComponent_div_10_ul_7_Template, 2, 1, "ul", 22);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("ngx-table__table--dark-pagination-range", ctx_r4.config.tableLayout.theme === "dark");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r4.selectedLimit, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.showRange);
  }
}
var _c2 = ["th"];
var _c3 = ["additionalActionMenu"];
var _c4 = ["headerDropdown"];
var _c5 = ["table-thead", ""];
var _c6 = (a0) => ({
  $implicit: a0
});
function TableTHeadComponent_tr_0_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r9.selectAllTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r9.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_0_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 11)(1, "input", 12);
    ɵɵlistener("change", function TableTHeadComponent_tr_0_th_1_label_2_Template_input_change_1_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r11.onSelectAll());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "em", 13);
    ɵɵelementEnd();
  }
}
function TableTHeadComponent_tr_0_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_1_ng_container_1_Template, 1, 4, "ng-container", 8)(2, TableTHeadComponent_tr_0_th_1_label_2_Template, 3, 0, "label", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵstyleProp("width", "3%");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.selectAllTemplate && ctx_r6.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r6.selectAllTemplate && ctx_r6.config.checkboxes);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 23);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 24);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 25);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelementContainer(1, 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r13 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", column_r13.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26, 27)(2, "a", 28);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_ng_container_2_div_12_Template_a_click_2_listener() {
      ɵɵrestoreView(_r27);
      const column_r13 = ɵɵnextContext().$implicit;
      const ctx_r25 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r25.showHeaderActionTemplateMenu(column_r13));
    });
    ɵɵelement(3, "span", 29);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template, 2, 1, "div", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r13 = ɵɵnextContext().$implicit;
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", column_r13.key === ctx_r20.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 33);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 14, 15);
    ɵɵlistener("mousedown", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousedown_1_listener($event) {
      ɵɵrestoreView(_r30);
      const _r16 = ɵɵreference(2);
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.onMouseDown($event, _r16));
    })("mouseup", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mouseup_1_listener($event) {
      ɵɵrestoreView(_r30);
      const ctx_r31 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r31.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousemove_1_listener($event) {
      ɵɵrestoreView(_r30);
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.onMouseMove($event));
    });
    ɵɵelementStart(3, "div", 16);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_ng_container_2_Template_div_click_3_listener() {
      const restoredCtx = ɵɵrestoreView(_r30);
      const column_r13 = restoredCtx.$implicit;
      const ctx_r33 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r33.orderBy(column_r13));
    });
    ɵɵelementStart(4, "div", 17);
    ɵɵtext(5);
    ɵɵelementStart(6, "span");
    ɵɵtext(7, " ");
    ɵɵelementEnd();
    ɵɵtemplate(8, TableTHeadComponent_tr_0_ng_container_2_em_8_Template, 1, 0, "em", 18);
    ɵɵelementStart(9, "div");
    ɵɵtemplate(10, TableTHeadComponent_tr_0_ng_container_2_em_10_Template, 1, 0, "em", 19)(11, TableTHeadComponent_tr_0_ng_container_2_em_11_Template, 1, 0, "em", 20);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, TableTHeadComponent_tr_0_ng_container_2_div_12_Template, 5, 1, "div", 21)(13, TableTHeadComponent_tr_0_ng_container_2_div_13_Template, 1, 0, "div", 22);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    const colIndex_r14 = ctx.index;
    const last_r15 = ctx.last;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r7.styleService.pinnedWidth(column_r13.pinned, colIndex_r14))("width", ctx_r7.getColumnWidth(column_r13));
    ɵɵclassProp("pinned-left", column_r13.pinned);
    ɵɵproperty("ngClass", column_r13.cssClass && column_r13.cssClass.includeHeader ? column_r13.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵclassProp("pointer", ctx_r7.isOrderEnabled(column_r13));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r13.title, "");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", column_r13.pinned);
    ɵɵadvance();
    ɵɵstyleProp("display", ctx_r7.config.orderEnabled ? "inline" : "none");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.sortKey === column_r13.key && ctx_r7.sortState.get(ctx_r7.sortKey) === "asc");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.sortKey === column_r13.key && ctx_r7.sortState.get(ctx_r7.sortKey) === "desc");
    ɵɵadvance();
    ɵɵproperty("ngIf", !!column_r13.headerActionTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.config.resizeColumn && !last_r15);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r37 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r37.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 31);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r36.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26, 35)(2, "a", 28);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_th_3_div_1_Template_a_click_2_listener() {
      ɵɵrestoreView(_r39);
      const ctx_r38 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r38.showMenu());
    });
    ɵɵelement(3, "span", 36);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template, 2, 1, "ul", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r34.menuActive);
  }
}
function TableTHeadComponent_tr_0_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 34);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_3_div_1_Template, 5, 1, "div", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.config.additionalActions);
  }
}
function TableTHeadComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 5);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_1_Template, 3, 4, "th", 6)(2, TableTHeadComponent_tr_0_ng_container_2_Template, 14, 17, "ng-container", 4)(3, TableTHeadComponent_tr_0_th_3_Template, 2, 1, "th", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.checkboxes || ctx_r0.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.additionalActions || ctx_r0.config.detailsTemplate || ctx_r0.config.collapseAllRows || ctx_r0.config.groupRows);
  }
}
function TableTHeadComponent_tr_1_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r43 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r43.selectAllTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r43.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_1_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 11)(1, "input", 39);
    ɵɵlistener("change", function TableTHeadComponent_tr_1_th_1_label_2_Template_input_change_1_listener() {
      ɵɵrestoreView(_r46);
      const ctx_r45 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r45.onSelectAll());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "em", 40);
    ɵɵelementEnd();
  }
}
function TableTHeadComponent_tr_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_1_ng_container_1_Template, 1, 4, "ng-container", 8)(2, TableTHeadComponent_tr_1_th_1_label_2_Template, 3, 0, "label", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(2);
    ɵɵstyleProp("width", "3%");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r40.selectAllTemplate && ctx_r40.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r40.selectAllTemplate && ctx_r40.config.checkboxes);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 23);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 24);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 25);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelementContainer(1, 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r47 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", column_r47.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26, 27)(2, "a", 28);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_ng_container_2_div_12_Template_a_click_2_listener() {
      ɵɵrestoreView(_r61);
      const column_r47 = ɵɵnextContext().$implicit;
      const ctx_r59 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r59.showHeaderActionTemplateMenu(column_r47));
    });
    ɵɵelement(3, "span", 29);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template, 2, 1, "div", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r47 = ɵɵnextContext().$implicit;
    const ctx_r54 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", column_r47.key === ctx_r54.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 33);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 41, 15);
    ɵɵlistener("mousedown", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousedown_1_listener($event) {
      ɵɵrestoreView(_r64);
      const _r50 = ɵɵreference(2);
      const ctx_r63 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r63.onMouseDown($event, _r50));
    })("mouseup", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mouseup_1_listener($event) {
      ɵɵrestoreView(_r64);
      const ctx_r65 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r65.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousemove_1_listener($event) {
      ɵɵrestoreView(_r64);
      const ctx_r66 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r66.onMouseMove($event));
    });
    ɵɵelementStart(3, "div", 42);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_ng_container_2_Template_div_click_3_listener() {
      const restoredCtx = ɵɵrestoreView(_r64);
      const column_r47 = restoredCtx.$implicit;
      const ctx_r67 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r67.orderBy(column_r47));
    });
    ɵɵelementStart(4, "div", 17);
    ɵɵtext(5);
    ɵɵelementStart(6, "span");
    ɵɵtext(7, " ");
    ɵɵelementEnd();
    ɵɵtemplate(8, TableTHeadComponent_tr_1_ng_container_2_em_8_Template, 1, 0, "em", 18);
    ɵɵelementStart(9, "div");
    ɵɵtemplate(10, TableTHeadComponent_tr_1_ng_container_2_em_10_Template, 1, 0, "em", 19)(11, TableTHeadComponent_tr_1_ng_container_2_em_11_Template, 1, 0, "em", 20);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, TableTHeadComponent_tr_1_ng_container_2_div_12_Template, 5, 1, "div", 21)(13, TableTHeadComponent_tr_1_ng_container_2_div_13_Template, 1, 0, "div", 22);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r47 = ctx.$implicit;
    const colIndex_r48 = ctx.index;
    const last_r49 = ctx.last;
    const ctx_r41 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r41.styleService.pinnedWidth(column_r47.pinned, colIndex_r48))("width", ctx_r41.getColumnWidth(column_r47));
    ɵɵclassProp("pinned-left", column_r47.pinned);
    ɵɵproperty("cdkDragStartDelay", ctx_r41.config.reorderDelay || 0)("ngClass", column_r47.cssClass && column_r47.cssClass.includeHeader ? column_r47.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵclassProp("pointer", ctx_r41.isOrderEnabled(column_r47));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r47.title, "");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", column_r47.pinned);
    ɵɵadvance();
    ɵɵstyleProp("display", ctx_r41.config.orderEnabled ? "inline" : "none");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r41.sortKey === column_r47.key && ctx_r41.sortState.get(ctx_r41.sortKey) === "asc");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r41.sortKey === column_r47.key && ctx_r41.sortState.get(ctx_r41.sortKey) === "desc");
    ɵɵadvance();
    ɵɵproperty("ngIf", !!column_r47.headerActionTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r41.config.resizeColumn && !last_r49);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r71 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r71.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 31);
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r70 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r70.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26, 35)(2, "a", 28);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_th_3_div_1_Template_a_click_2_listener() {
      ɵɵrestoreView(_r73);
      const ctx_r72 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r72.showMenu());
    });
    ɵɵelement(3, "span", 36);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template, 2, 1, "ul", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r68 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r68.menuActive);
  }
}
function TableTHeadComponent_tr_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 34);
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_3_div_1_Template, 5, 1, "div", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r42.config.additionalActions);
  }
}
function TableTHeadComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 38);
    ɵɵlistener("cdkDropListDropped", function TableTHeadComponent_tr_1_Template_tr_cdkDropListDropped_0_listener($event) {
      ɵɵrestoreView(_r75);
      const ctx_r74 = ɵɵnextContext();
      return ɵɵresetView(ctx_r74.columnDrop($event));
    });
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_1_Template, 3, 4, "th", 6)(2, TableTHeadComponent_tr_1_ng_container_2_Template, 14, 18, "ng-container", 4)(3, TableTHeadComponent_tr_1_th_3_Template, 2, 1, "th", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes || ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.additionalActions || ctx_r1.config.detailsTemplate || ctx_r1.config.collapseAllRows || ctx_r1.config.groupRows);
  }
}
function TableTHeadComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function TableTHeadComponent_ng_container_4_table_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-header", 45);
    ɵɵlistener("update", function TableTHeadComponent_ng_container_4_table_header_2_Template_table_header_update_0_listener($event) {
      ɵɵrestoreView(_r80);
      const ctx_r79 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r79.onSearch($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r76 = ɵɵnextContext().$implicit;
    ɵɵproperty("column", column_r76);
  }
}
function TableTHeadComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 43);
    ɵɵtemplate(2, TableTHeadComponent_ng_container_4_table_header_2_Template, 1, 1, "table-header", 44);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r76 = ctx.$implicit;
    const colIndex_r77 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r3.styleService.pinnedWidth(column_r76.pinned, colIndex_r77));
    ɵɵclassProp("pinned-left", column_r76.pinned);
    ɵɵproperty("ngClass", column_r76.cssClass && column_r76.cssClass.includeHeader ? column_r76.cssClass.name : "");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getColumnDefinition(column_r76));
  }
}
function TableTHeadComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function TableTHeadComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵelementContainer(2, 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.filtersTemplate);
  }
}
var _c7 = ["paginationComponent"];
var _c8 = ["contextMenu"];
var _c9 = ["table"];
var _c10 = (a1, a2) => ({
  position: "absolute",
  top: a1,
  left: a2
});
function BaseComponent_tbody_4_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵelementContainer(1, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c10, ctx_r10.rowContextMenuPosition.top, ctx_r10.rowContextMenuPosition.left));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r10.rowContextMenu)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c6, ctx_r10.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r21);
      const row_r14 = ɵɵnextContext(2).$implicit;
      const ctx_r19 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r19.collapseRow(ctx_r19.data.indexOf(row_r14)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r14 = ɵɵnextContext(2).$implicit;
    const ctx_r18 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r18.isRowCollapsed(ctx_r18.data.indexOf(row_r14)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r16.arrowDefinition);
  }
}
var _c11 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelementContainer(2, 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ɵɵnextContext().$implicit;
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r17.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r17.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c11, row_r14, ctx_r17.data.indexOf(row_r14)));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 13, 14);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r25);
      const row_r14 = restoredCtx.$implicit;
      const ctx_r24 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r24.onClick($event, row_r14, "", null, ctx_r24.data.indexOf(row_r14)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r25);
      const row_r14 = restoredCtx.$implicit;
      const ctx_r26 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r26.onRowContextMenu($event, row_r14, "", null, ctx_r26.data.indexOf(row_r14)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r25);
      const row_r14 = restoredCtx.$implicit;
      const ctx_r27 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r27.onDoubleClick($event, row_r14, "", null, ctx_r27.data.indexOf(row_r14)));
    });
    ɵɵelementContainer(3, 11);
    ɵɵtemplate(4, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template, 2, 1, "td", 4);
    ɵɵelementEnd();
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template, 3, 6, "tr", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r13 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", ctx_r13.data.indexOf(row_r14) === ctx_r13.selectedRow && !ctx_r13.config.selectCell);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r13.rowTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c11, row_r14, ctx_r13.data.indexOf(row_r14)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r13.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r13.config.detailsTemplate && ctx_r13.selectedDetailsTemplateRowId.has(ctx_r13.data.indexOf(row_r14)) || ctx_r13.config.collapseAllRows);
  }
}
var _c122 = (a0, a1, a2, a3) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2,
  id: a3
});
function BaseComponent_tbody_4_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template, 6, 9, "ng-container", 12);
    ɵɵpipe(2, "paginate");
    ɵɵpipe(3, "global");
    ɵɵpipe(4, "search");
    ɵɵpipe(5, "sort");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ɵɵpipeBind3(3, 4, ɵɵpipeBind3(4, 8, ɵɵpipeBind2(5, 12, ctx_r11.data, ctx_r11.sortBy), ctx_r11.term, ctx_r11.filteredCountSubject), ctx_r11.globalSearchTerm, ctx_r11.filteredCountSubject), ɵɵpureFunction4(15, _c122, ctx_r11.limit, ctx_r11.page, ctx_r11.count, ctx_r11.id)));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r37);
      const rowIndex_r30 = ɵɵnextContext(2).index;
      const ctx_r35 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r35.collapseRow(rowIndex_r30));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r30 = ɵɵnextContext(2).index;
    const ctx_r34 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r34.isRowCollapsed(rowIndex_r30) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r32.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelementContainer(2, 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r39 = ɵɵnextContext();
    const row_r29 = ctx_r39.$implicit;
    const rowIndex_r30 = ctx_r39.index;
    const ctx_r33 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r33.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r33.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c11, row_r29, rowIndex_r30));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 13, 14);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const row_r29 = restoredCtx.$implicit;
      const rowIndex_r30 = restoredCtx.index;
      const ctx_r40 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r40.onClick($event, row_r29, "", null, rowIndex_r30));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const row_r29 = restoredCtx.$implicit;
      const rowIndex_r30 = restoredCtx.index;
      const ctx_r42 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r42.onRowContextMenu($event, row_r29, "", null, rowIndex_r30));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r41);
      const row_r29 = restoredCtx.$implicit;
      const rowIndex_r30 = restoredCtx.index;
      const ctx_r43 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r43.onDoubleClick($event, row_r29, "", null, rowIndex_r30));
    });
    ɵɵelementContainer(3, 11);
    ɵɵtemplate(4, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template, 2, 1, "td", 4);
    ɵɵelementEnd();
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template, 3, 6, "tr", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const rowIndex_r30 = ctx.index;
    const ctx_r28 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", rowIndex_r30 === ctx_r28.selectedRow && !ctx_r28.config.selectCell);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r28.rowTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c11, row_r29, rowIndex_r30));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r28.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r28.config.detailsTemplate && ctx_r28.selectedDetailsTemplateRowId.has(rowIndex_r30) || ctx_r28.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 17);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 6, 9, "ng-container", 18);
    ɵɵpipe(2, "global");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "sort");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkVirtualForOf", ɵɵpipeBind3(2, 1, ɵɵpipeBind3(3, 5, ɵɵpipeBind2(4, 9, ctx_r12.data, ctx_r12.sortBy), ctx_r12.term, ctx_r12.filteredCountSubject), ctx_r12.globalSearchTerm, ctx_r12.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ul_1_Template, 2, 8, "ul", 8)(2, BaseComponent_tbody_4_ng_container_1_ng_container_2_Template, 6, 20, "ng-container", 4)(3, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.rowContextMenuPosition.top);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.config.infiniteScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_2_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵelementContainer(1, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r44 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c10, ctx_r44.rowContextMenuPosition.top, ctx_r44.rowContextMenuPosition.left));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r44.rowContextMenu)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c6, ctx_r44.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r56);
      const row_r48 = ɵɵnextContext().$implicit;
      const ctx_r54 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r54.onCheckboxSelect($event, row_r48, ctx_r54.data.indexOf(row_r48)));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r48 = ɵɵnextContext().$implicit;
    const ctx_r49 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-", ctx_r49.data.indexOf(row_r48), "");
    ɵɵproperty("checked", ctx_r49.isSelected || ctx_r49.selectedCheckboxes.has(ctx_r49.data.indexOf(row_r48)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r60);
      const row_r48 = ɵɵnextContext().$implicit;
      const ctx_r58 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r58.onRadioSelect($event, row_r48, ctx_r58.data.indexOf(row_r48)));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const row_r48 = ɵɵnextContext().$implicit;
    const ctx_r50 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-", ctx_r50.data.indexOf(row_r48), "");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r62 = ɵɵnextContext().$implicit;
    const row_r48 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r48, column_r62.key));
  }
}
var _c13 = (a0, a1, a2) => ({
  $implicit: a0,
  rowIndex: a1,
  column: a2
});
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 11);
  }
  if (rf & 2) {
    const column_r62 = ɵɵnextContext().$implicit;
    const row_r48 = ɵɵnextContext().$implicit;
    const ctx_r66 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", column_r62.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r48, ctx_r66.data.indexOf(row_r48), column_r62));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 23, 14);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r73);
      const column_r62 = restoredCtx.$implicit;
      const colIndex_r63 = restoredCtx.index;
      const row_r48 = ɵɵnextContext().$implicit;
      const ctx_r71 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r71.onClick($event, row_r48, column_r62.key, colIndex_r63, ctx_r71.data.indexOf(row_r48)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r73);
      const column_r62 = restoredCtx.$implicit;
      const colIndex_r63 = restoredCtx.index;
      const row_r48 = ɵɵnextContext().$implicit;
      const ctx_r74 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r74.onRowContextMenu($event, row_r48, column_r62.key, colIndex_r63, ctx_r74.data.indexOf(row_r48)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r73);
      const column_r62 = restoredCtx.$implicit;
      const colIndex_r63 = restoredCtx.index;
      const row_r48 = ɵɵnextContext().$implicit;
      const ctx_r76 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r76.onDoubleClick($event, row_r48, column_r62.key, colIndex_r63, ctx_r76.data.indexOf(row_r48)));
    });
    ɵɵtemplate(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 4)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r62 = ctx.$implicit;
    const colIndex_r63 = ctx.index;
    const row_r48 = ɵɵnextContext().$implicit;
    const ctx_r51 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r51.styleService.pinnedWidth(column_r62.pinned, colIndex_r63));
    ɵɵclassProp("pinned-left", column_r62.pinned)("ngx-table__table-col--selected", colIndex_r63 === ctx_r51.selectedCol && !ctx_r51.config.selectCell)("ngx-table__table-cell--selected", colIndex_r63 === ctx_r51.selectedCol && ctx_r51.data.indexOf(row_r48) === ctx_r51.selectedRow && !ctx_r51.config.selectCol && !ctx_r51.config.selectRow);
    ɵɵproperty("ngClass", column_r62.cssClass ? column_r62.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !column_r62.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r62.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r82);
      const row_r48 = ɵɵnextContext(2).$implicit;
      const ctx_r80 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r80.collapseRow(ctx_r80.data.indexOf(row_r48)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r48 = ɵɵnextContext(2).$implicit;
    const ctx_r79 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r79.isRowCollapsed(ctx_r79.data.indexOf(row_r48)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r52 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r52.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 4);
    ɵɵelementStart(2, "td");
    ɵɵelementContainer(3, 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r48 = ɵɵnextContext().$implicit;
    const ctx_r53 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r53.config.checkboxes || ctx_r53.config.radio);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r53.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r53.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c11, row_r48, ctx_r53.data.indexOf(row_r48)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template, 4, 2, "td", 4)(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template, 3, 1, "td", 4)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 12)(5, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template, 2, 1, "td", 4);
    ɵɵelementEnd();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template, 4, 7, "tr", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const ctx_r47 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", ctx_r47.data.indexOf(row_r48) === ctx_r47.selectedRow && !ctx_r47.config.selectCell);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r47.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r47.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r47.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r47.config.additionalActions || ctx_r47.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r47.config.detailsTemplate && ctx_r47.selectedDetailsTemplateRowId.has(ctx_r47.data.indexOf(row_r48)) || ctx_r47.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template, 7, 7, "ng-container", 12);
    ɵɵpipe(2, "paginate");
    ɵɵpipe(3, "global");
    ɵɵpipe(4, "search");
    ɵɵpipe(5, "sort");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r45 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ɵɵpipeBind3(3, 4, ɵɵpipeBind3(4, 8, ɵɵpipeBind2(5, 12, ctx_r45.data, ctx_r45.sortBy), ctx_r45.term, ctx_r45.filteredCountSubject), ctx_r45.globalSearchTerm, ctx_r45.filteredCountSubject), ɵɵpureFunction4(15, _c122, ctx_r45.limit, ctx_r45.page, ctx_r45.count, ctx_r45.id)));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 26)(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r96);
      const ctx_r95 = ɵɵnextContext();
      const row_r87 = ctx_r95.$implicit;
      const rowIndex_r88 = ctx_r95.index;
      const ctx_r94 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r94.onCheckboxSelect($event, row_r87, rowIndex_r88));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const rowIndex_r88 = ɵɵnextContext().index;
    const ctx_r89 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-infinite-scroll-", rowIndex_r88, "");
    ɵɵproperty("checked", ctx_r89.isSelected || ctx_r89.selectedCheckboxes.has(rowIndex_r88));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 26)(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r100);
      const ctx_r99 = ɵɵnextContext();
      const row_r87 = ctx_r99.$implicit;
      const rowIndex_r88 = ctx_r99.index;
      const ctx_r98 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r98.onRadioSelect($event, row_r87, rowIndex_r88));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const rowIndex_r88 = ɵɵnextContext().index;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-infinite-scroll-", rowIndex_r88, "");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r102 = ɵɵnextContext().$implicit;
    const row_r87 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r87, column_r102.key));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 11);
  }
  if (rf & 2) {
    const column_r102 = ɵɵnextContext().$implicit;
    const ctx_r110 = ɵɵnextContext();
    const row_r87 = ctx_r110.$implicit;
    const rowIndex_r88 = ctx_r110.index;
    ɵɵproperty("ngTemplateOutlet", column_r102.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r87, rowIndex_r88, column_r102));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 23, 14);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r113);
      const column_r102 = restoredCtx.$implicit;
      const colIndex_r103 = restoredCtx.index;
      const ctx_r112 = ɵɵnextContext();
      const row_r87 = ctx_r112.$implicit;
      const rowIndex_r88 = ctx_r112.index;
      const ctx_r111 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r111.onClick($event, row_r87, column_r102.key, colIndex_r103, rowIndex_r88));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r113);
      const column_r102 = restoredCtx.$implicit;
      const colIndex_r103 = restoredCtx.index;
      const ctx_r115 = ɵɵnextContext();
      const row_r87 = ctx_r115.$implicit;
      const rowIndex_r88 = ctx_r115.index;
      const ctx_r114 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r114.onRowContextMenu($event, row_r87, column_r102.key, colIndex_r103, rowIndex_r88));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r113);
      const column_r102 = restoredCtx.$implicit;
      const colIndex_r103 = restoredCtx.index;
      const ctx_r117 = ɵɵnextContext();
      const row_r87 = ctx_r117.$implicit;
      const rowIndex_r88 = ctx_r117.index;
      const ctx_r116 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r116.onDoubleClick($event, row_r87, column_r102.key, colIndex_r103, rowIndex_r88));
    });
    ɵɵtemplate(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 4)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r102 = ctx.$implicit;
    const colIndex_r103 = ctx.index;
    const rowIndex_r88 = ɵɵnextContext().index;
    const ctx_r91 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r91.styleService.pinnedWidth(column_r102.pinned, colIndex_r103));
    ɵɵclassProp("pinned-left", column_r102.pinned)("ngx-table__table-col--selected", colIndex_r103 === ctx_r91.selectedCol && !ctx_r91.config.selectCell)("ngx-table__table-cell--selected", colIndex_r103 === ctx_r91.selectedCol && rowIndex_r88 === ctx_r91.selectedRow && !ctx_r91.config.selectCol && !ctx_r91.config.selectRow);
    ɵɵproperty("ngClass", column_r102.cssClass ? column_r102.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !column_r102.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r102.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r122);
      const rowIndex_r88 = ɵɵnextContext(2).index;
      const ctx_r120 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r120.collapseRow(rowIndex_r88));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r88 = ɵɵnextContext(2).index;
    const ctx_r119 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r119.isRowCollapsed(rowIndex_r88) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r92 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r92.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 4);
    ɵɵelementStart(2, "td");
    ɵɵelementContainer(3, 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r125 = ɵɵnextContext();
    const row_r87 = ctx_r125.$implicit;
    const rowIndex_r88 = ctx_r125.index;
    const ctx_r93 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r93.config.checkboxes || ctx_r93.config.radio);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r93.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r93.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c11, row_r87, rowIndex_r88));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template, 4, 2, "td", 25)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template, 3, 1, "td", 25)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 12)(5, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template, 2, 1, "td", 4);
    ɵɵelementEnd();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template, 4, 7, "tr", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r88 = ctx.index;
    const ctx_r86 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", rowIndex_r88 === ctx_r86.selectedRow && !ctx_r86.config.selectCell);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r86.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r86.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r86.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r86.config.additionalActions || ctx_r86.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r86.config.detailsTemplate && ctx_r86.selectedDetailsTemplateRowId.has(rowIndex_r88) || ctx_r86.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 17);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 7, 7, "ng-container", 18);
    ɵɵpipe(2, "global");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "sort");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r46 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkVirtualForOf", ɵɵpipeBind3(2, 1, ɵɵpipeBind3(3, 5, ɵɵpipeBind2(4, 9, ctx_r46.data, ctx_r46.sortBy), ctx_r46.term, ctx_r46.filteredCountSubject), ctx_r46.globalSearchTerm, ctx_r46.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ul_1_Template, 2, 8, "ul", 8)(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_Template, 6, 20, "ng-container", 4)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.rowContextMenuPosition.top);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r8.config.infiniteScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td")(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r127 = ɵɵnextContext().$implicit;
    const ctx_r129 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r129.columns.length);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", group_r127[0][ctx_r129.groupRowsBy], " (", group_r127.length, ")");
  }
}
var _c14 = (a0, a1, a2, a3, a4) => ({
  total: a0,
  key: a1,
  value: a2,
  group: a3,
  index: a4
});
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 11);
  }
  if (rf & 2) {
    const ctx_r134 = ɵɵnextContext();
    const group_r127 = ctx_r134.$implicit;
    const rowIndex_r128 = ctx_r134.index;
    const ctx_r130 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r130.groupRowsHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c14, group_r127.length, ctx_r130.groupRowsBy, group_r127[0] ? group_r127[0][ctx_r130.groupRowsBy] : "", group_r127, rowIndex_r128));
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template_span_click_0_listener() {
      ɵɵrestoreView(_r137);
      const rowIndex_r128 = ɵɵnextContext().index;
      const ctx_r135 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r135.collapseRow(rowIndex_r128));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r128 = ɵɵnextContext().index;
    const ctx_r131 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r131.isRowCollapsed(rowIndex_r128) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r142 = ctx.$implicit;
    const row_r140 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, row_r140, column_r142.key), " ");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template, 3, 4, "td", 12);
    ɵɵelement(2, "td");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r139 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r139.columns);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template, 3, 1, "tr", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r127 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r127);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 4)(3, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template, 1, 8, "ng-container", 24);
    ɵɵelementStart(4, "td");
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template, 1, 1, "span", 15);
    ɵɵelementEnd()();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r128 = ctx.index;
    const ctx_r126 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r126.groupRowsHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r126.groupRowsHeaderTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r126.arrowDefinition);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r126.selectedDetailsTemplateRowId.has(rowIndex_r128));
  }
}
function BaseComponent_tbody_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 12);
    ɵɵpipe(2, "paginate");
    ɵɵpipe(3, "global");
    ɵɵpipe(4, "search");
    ɵɵpipe(5, "sort");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ɵɵpipeBind3(3, 4, ɵɵpipeBind4(4, 8, ɵɵpipeBind3(5, 13, ctx_r9.grouped, ctx_r9.sortBy, ctx_r9.config), ctx_r9.term, ctx_r9.filteredCountSubject, ctx_r9.config), ctx_r9.globalSearchTerm, ctx_r9.filteredCountSubject), ɵɵpureFunction4(17, _c122, ctx_r9.limit, ctx_r9.page, ctx_r9.count, ctx_r9.id)));
  }
}
function BaseComponent_tbody_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_Template, 4, 3, "ng-container", 4)(2, BaseComponent_tbody_4_ng_container_2_Template, 4, 3, "ng-container", 4)(3, BaseComponent_tbody_4_ng_container_3_Template, 6, 22, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rowTemplate && !ctx_r1.config.groupRows);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rowTemplate && ctx_r1.config.groupRows);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r153);
      const row_r147 = ɵɵnextContext().$implicit;
      const ctx_r151 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r151.onCheckboxSelect($event, row_r147, ctx_r151.data.indexOf(row_r147)));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r147 = ɵɵnextContext().$implicit;
    const ctx_r148 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-draggable-", ctx_r148.data.indexOf(row_r147), "");
    ɵɵproperty("checked", ctx_r148.isSelected || ctx_r148.selectedCheckboxes.has(ctx_r148.data.indexOf(row_r147)));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r157 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r157);
      const row_r147 = ɵɵnextContext().$implicit;
      const ctx_r155 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r155.onRadioSelect($event, row_r147, ctx_r155.data.indexOf(row_r147)));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const row_r147 = ɵɵnextContext().$implicit;
    const ctx_r149 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-draggable-", ctx_r149.data.indexOf(row_r147), "");
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r159 = ɵɵnextContext().$implicit;
    const row_r147 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r147, column_r159.key));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 11);
  }
  if (rf & 2) {
    const column_r159 = ɵɵnextContext().$implicit;
    const row_r147 = ɵɵnextContext().$implicit;
    const ctx_r162 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", column_r159.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r147, ctx_r162.data.indexOf(row_r147), column_r159));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 29);
    ɵɵlistener("click", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r169);
      const column_r159 = restoredCtx.$implicit;
      const colIndex_r160 = restoredCtx.index;
      const row_r147 = ɵɵnextContext().$implicit;
      const ctx_r167 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r167.onClick($event, row_r147, column_r159.key, colIndex_r160, ctx_r167.data.indexOf(row_r147)));
    })("dblclick", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r169);
      const column_r159 = restoredCtx.$implicit;
      const colIndex_r160 = restoredCtx.index;
      const row_r147 = ɵɵnextContext().$implicit;
      const ctx_r170 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r170.onDoubleClick($event, row_r147, column_r159.key, colIndex_r160, ctx_r170.data.indexOf(row_r147)));
    });
    ɵɵtemplate(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template, 3, 4, "div", 4)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r159 = ctx.$implicit;
    const colIndex_r160 = ctx.index;
    const row_r147 = ɵɵnextContext().$implicit;
    const ctx_r150 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-col--selected", colIndex_r160 === ctx_r150.selectedCol && !ctx_r150.config.selectCell)("ngx-table__table-cell--selected", colIndex_r160 === ctx_r150.selectedCol && ctx_r150.data.indexOf(row_r147) === ctx_r150.selectedRow && !ctx_r150.config.selectCol && !ctx_r150.config.selectRow);
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r159.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r159.cellTemplate);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 28);
    ɵɵlistener("cdkDragStarted", function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template_tr_cdkDragStarted_1_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r173 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r173.onDragStart($event));
    });
    ɵɵtemplate(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template, 4, 2, "td", 4)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template, 3, 1, "td", 4)(4, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 6, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r146 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkDragStartDelay", ctx_r146.config.reorderDelay || 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r146.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r146.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r146.columns);
  }
}
function BaseComponent_tbody_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_5_ng_container_1_ng_container_1_Template, 5, 4, "ng-container", 12);
    ɵɵpipe(2, "paginate");
    ɵɵpipe(3, "global");
    ɵɵpipe(4, "search");
    ɵɵpipe(5, "sort");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r145 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ɵɵpipeBind3(3, 4, ɵɵpipeBind3(4, 8, ɵɵpipeBind2(5, 12, ctx_r145.data, ctx_r145.sortBy), ctx_r145.term, ctx_r145.filteredCountSubject), ctx_r145.globalSearchTerm, ctx_r145.filteredCountSubject), ɵɵpureFunction4(15, _c122, ctx_r145.limit, ctx_r145.page, ctx_r145.count, ctx_r145.id)));
  }
}
function BaseComponent_tbody_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody", 27);
    ɵɵlistener("cdkDropListDropped", function BaseComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) {
      ɵɵrestoreView(_r176);
      const ctx_r175 = ɵɵnextContext();
      return ɵɵresetView(ctx_r175.onDrop($event));
    });
    ɵɵtemplate(1, BaseComponent_tbody_5_ng_container_1_Template, 6, 20, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.rowTemplate && !ctx_r2.config.groupRows);
  }
}
function BaseComponent_tbody_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r177 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r177.noResultsTemplate);
  }
}
function BaseComponent_tbody_6_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 33);
    ɵɵtext(2, "No results");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r178 = ɵɵnextContext(2);
    ɵɵattribute("colspan", ctx_r178.columns && ctx_r178.columns.length + 1);
  }
}
function BaseComponent_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody")(1, "tr", 30);
    ɵɵtemplate(2, BaseComponent_tbody_6_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_6_td_3_Template, 3, 1, "td", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.noResultsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.noResultsTemplate);
  }
}
function BaseComponent_tbody_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r179 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r179.loadingTemplate);
  }
}
function BaseComponent_tbody_7_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 35);
    ɵɵelement(2, "div", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r180 = ɵɵnextContext(2);
    ɵɵattribute("colspan", ctx_r180.columns && ctx_r180.columns.length + 1);
    ɵɵadvance();
    ɵɵstyleProp("height", ctx_r180.loadingHeight, "px");
  }
}
function BaseComponent_tbody_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody")(1, "tr", 34);
    ɵɵtemplate(2, BaseComponent_tbody_7_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_7_td_3_Template, 3, 3, "td", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.loadingTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.loadingTemplate);
  }
}
var _c15 = (a0, a1, a2) => ({
  total: a0,
  limit: a1,
  page: a2
});
function BaseComponent_tfoot_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot")(1, "tr");
    ɵɵelementContainer(2, 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.summaryTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c15, ctx_r5.data.length, ctx_r5.limit, ctx_r5.page));
  }
}
var STYLE;
(function(STYLE2) {
  STYLE2["TINY"] = "tiny";
  STYLE2["BIG"] = "big";
  STYLE2["NORMAL"] = "normal";
})(STYLE || (STYLE = {}));
var THEME;
(function(THEME2) {
  THEME2["LIGHT"] = "light";
  THEME2["DARK"] = "dark";
})(THEME || (THEME = {}));
var Event;
(function(Event2) {
  Event2["onPagination"] = "onPagination";
  Event2["onOrder"] = "onOrder";
  Event2["onGlobalSearch"] = "onGlobalSearch";
  Event2["onSearch"] = "onSearch";
  Event2["onClick"] = "onClick";
  Event2["onDoubleClick"] = "onDoubleClick";
  Event2["onCheckboxSelect"] = "onCheckboxSelect";
  Event2["onRadioSelect"] = "onRadioSelect";
  Event2["onCheckboxToggle"] = "onCheckboxToggle";
  Event2["onSelectAll"] = "onSelectAll";
  Event2["onInfiniteScrollEnd"] = "onInfiniteScrollEnd";
  Event2["onColumnResizeMouseDown"] = "onColumnResizeMouseDown";
  Event2["onColumnResizeMouseUp"] = "onColumnResizeMouseUp";
  Event2["onRowDrop"] = "onRowDrop";
  Event2["onReorderStart"] = "onReorderStart";
  Event2["onRowCollapsedShow"] = "onRowCollapsedShow";
  Event2["onRowCollapsedHide"] = "onRowCollapsedHide";
  Event2["onRowContextMenu"] = "onRowContextMenu";
})(Event || (Event = {}));
var API;
(function(API2) {
  API2["rowContextMenuClicked"] = "rowContextMenuClicked";
  API2["setInputValue"] = "setInputValue";
  API2["toggleRowIndex"] = "toggleRowIndex";
  API2["toggleCheckbox"] = "toggleCheckbox";
  API2["onGlobalSearch"] = "onGlobalSearch";
  API2["setPaginationCurrentPage"] = "setPaginationCurrentPage";
  API2["getPaginationCurrentPage"] = "getPaginationCurrentPage";
  API2["getPaginationTotalItems"] = "getPaginationTotalItems";
  API2["getNumberOfRowsPerPage"] = "getNumberOfRowsPerPage";
  API2["getPaginationLastPage"] = "getPaginationLastPage";
  API2["setPaginationRange"] = "setPaginationRange";
  API2["setPaginationPreviousLabel"] = "setPaginationPreviousLabel";
  API2["setPaginationNextLabel"] = "setPaginationNextLabel";
  API2["setPaginationDisplayLimit"] = "setPaginationDisplayLimit";
  API2["setTableClass"] = "setTableClass";
  API2["setRowClass"] = "setRowClass";
  API2["setCellClass"] = "setCellClass";
  API2["setRowStyle"] = "setRowStyle";
  API2["setCellStyle"] = "setCellStyle";
  API2["sortBy"] = "sortBy";
})(API || (API = {}));
var DefaultConfig = {
  searchEnabled: false,
  headerEnabled: true,
  orderEnabled: true,
  orderEventOnly: false,
  paginationEnabled: true,
  clickEvent: true,
  selectRow: false,
  selectCol: false,
  selectCell: false,
  rows: 10,
  additionalActions: false,
  serverPagination: false,
  isLoading: false,
  detailsTemplate: false,
  groupRows: false,
  paginationRangeEnabled: true,
  collapseAllRows: false,
  checkboxes: false,
  radio: false,
  resizeColumn: false,
  fixedColumnWidth: true,
  horizontalScroll: false,
  logger: false,
  showDetailsArrow: false,
  showContextMenu: false,
  persistState: false,
  paginationMaxSize: 5,
  threeWaySort: false,
  onDragOver: false,
  tableLayout: {
    style: STYLE.NORMAL,
    theme: THEME.LIGHT,
    borderless: false,
    hover: true,
    striped: false
  }
};
var _DefaultConfigService = class _DefaultConfigService {
};
_DefaultConfigService.config = DefaultConfig;
_DefaultConfigService.ɵfac = function DefaultConfigService_Factory(t) {
  return new (t || _DefaultConfigService)();
};
_DefaultConfigService.ɵprov = ɵɵdefineInjectable({
  token: _DefaultConfigService,
  factory: _DefaultConfigService.ɵfac
});
var DefaultConfigService = _DefaultConfigService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultConfigService, [{
    type: Injectable
  }], null, null);
})();
var _GroupRowsService = class _GroupRowsService {
  static doGroupRows(data, groupRowsBy) {
    const grouped = [];
    from(data).pipe(groupBy((row) => row[groupRowsBy]), mergeMap((group) => group.pipe(reduce((acc, curr) => [...acc, curr], [])))).subscribe((row) => grouped.push(row));
    return grouped;
  }
};
_GroupRowsService.ɵfac = function GroupRowsService_Factory(t) {
  return new (t || _GroupRowsService)();
};
_GroupRowsService.ɵprov = ɵɵdefineInjectable({
  token: _GroupRowsService,
  factory: _GroupRowsService.ɵfac
});
var GroupRowsService = _GroupRowsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupRowsService, [{
    type: Injectable
  }], null, null);
})();
var _StyleService = class _StyleService {
  setRowClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.classList.add(val.className);
    }
  }
  setCellClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.classList.add(val.className);
    }
  }
  setRowStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.style[val.attr] = val.value;
    }
  }
  setCellStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.style[val.attr] = val.value;
    }
  }
  pinnedWidth(pinned, column) {
    if (pinned) {
      return 150 * column + "px";
    }
  }
};
_StyleService.ɵfac = function StyleService_Factory(t) {
  return new (t || _StyleService)();
};
_StyleService.ɵprov = ɵɵdefineInjectable({
  token: _StyleService,
  factory: _StyleService.ɵfac
});
var StyleService = _StyleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleService, [{
    type: Injectable
  }], null, null);
})();
var _PaginationComponent = class _PaginationComponent {
  constructor() {
    this.updateRange = new EventEmitter();
    this.ranges = [5, 10, 25, 50, 100];
    this.showRange = false;
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = "You are on page";
    this.previousLabel = "";
    this.nextLabel = "";
    this.directionLinks = true;
  }
  onClick(targetElement) {
    if (this.paginationRange && !this.paginationRange.nativeElement.contains(targetElement)) {
      this.showRange = false;
    }
  }
  ngOnChanges(changes) {
    const {
      config
    } = changes;
    if (config && config.currentValue) {
      this.selectedLimit = this.config.rows;
    }
  }
  onPageChange(page) {
    this.updateRange.emit({
      page,
      limit: this.selectedLimit
    });
  }
  changeLimit(limit, callFromAPI) {
    if (!callFromAPI) {
      this.showRange = !this.showRange;
    }
    this.selectedLimit = limit;
    this.updateRange.emit({
      page: 1,
      limit
    });
  }
};
_PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || _PaginationComponent)();
};
_PaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _PaginationComponent,
  selectors: [["pagination"]],
  viewQuery: function PaginationComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
      ɵɵviewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationDirective = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationRange = _t.first);
    }
  },
  hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function PaginationComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    pagination: "pagination",
    config: "config",
    id: "id"
  },
  outputs: {
    updateRange: "updateRange"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 11,
  vars: 17,
  consts: [[1, "ngx-pagination-wrapper"], [1, "ngx-pagination-steps"], ["id", "pagination-controls", 3, "id", "maxSize", "pageChange"], ["paginationDirective", "paginationApi"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], ["class", "ngx-pagination-range", 3, "ngx-table__table--dark-pagination-range", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"], [1, "ngx-pagination-range"], ["paginationRange", ""], ["id", "rowAmount", 1, "ngx-dropdown", "ngx-pagination-range-dropdown"], [1, "ngx-btn-group"], [1, "ngx-pagination-range-dropdown-button", 3, "click"], [1, "ngx-icon", "ngx-icon-arrow-down"], ["class", "ngx-menu", 4, "ngIf"], [1, "ngx-menu"], ["class", "ngx-pagination-range-dropdown-button-item", 3, "ngx-pagination-range--selected", "click", 4, "ngFor", "ngForOf"], [1, "ngx-pagination-range-dropdown-button-item", 3, "click"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "pagination-template", 2, 3);
      ɵɵlistener("pageChange", function PaginationComponent_Template_pagination_template_pageChange_2_listener($event) {
        return ctx.onPageChange($event);
      });
      ɵɵelementStart(4, "ul", 4);
      ɵɵtemplate(5, PaginationComponent_li_5_Template, 3, 4, "li", 5);
      ɵɵelementStart(6, "li", 6);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵtemplate(8, PaginationComponent_li_8_Template, 3, 6, "li", 7)(9, PaginationComponent_li_9_Template, 3, 4, "li", 8);
      ɵɵelementEnd()()();
      ɵɵtemplate(10, PaginationComponent_div_10_Template, 8, 4, "div", 9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(3);
      ɵɵstyleProp("display", ctx.config.paginationEnabled ? "" : "none");
      ɵɵclassProp("ngx-table__table--dark-pagination-wrapper", ctx.config.tableLayout.theme === "dark");
      ɵɵadvance(2);
      ɵɵclassProp("ngx-table__table--dark-pagination", ctx.config.tableLayout.theme === "dark");
      ɵɵproperty("id", ctx.id)("maxSize", ctx.config.paginationMaxSize || 5);
      ɵɵadvance(2);
      ɵɵclassProp("responsive", true);
      ɵɵattribute("aria-label", ctx.screenReaderPaginationLabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.directionLinks);
      ɵɵadvance(2);
      ɵɵtextInterpolate2(" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
      ɵɵadvance();
      ɵɵproperty("ngForOf", _r0.pages);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.directionLinks);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.paginationRangeEnabled);
    }
  },
  dependencies: [NgForOf, NgIf, PaginationControlsDirective],
  encapsulation: 2,
  changeDetection: 0
});
var PaginationComponent = _PaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "pagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-pagination-wrapper"
  [style.display]="config.paginationEnabled ? '' : 'none'"
  [class.ngx-table__table--dark-pagination-wrapper]="config.tableLayout.theme === 'dark'"
>
  <div class="ngx-pagination-steps">
    <pagination-template
      #paginationDirective="paginationApi"
      id="pagination-controls"
      [id]="id"
      [class.ngx-table__table--dark-pagination]="config.tableLayout.theme === 'dark'"
      [maxSize]="config.paginationMaxSize || 5"
      (pageChange)="onPageChange($event)"
    >
      <ul
        class="ngx-pagination"
        role="navigation"
        [attr.aria-label]="screenReaderPaginationLabel"
        [class.responsive]="true"
      >
        <li
          class="pagination-previous"
          [class.disabled]="paginationDirective.isFirstPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="1 < paginationDirective.getCurrent()"
            (keyup.enter)="paginationDirective.previous()"
            (click)="paginationDirective.previous()"
            [attr.aria-label]="previousLabel + ' ' + screenReaderPageLabel"
          >
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isFirstPage()">
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
        <li class="small-screen">
          {{ paginationDirective.getCurrent() }} / {{ paginationDirective.getLastPage() }}
        </li>
        <li
          [class.current]="paginationDirective.getCurrent() === page.value"
          [class.ellipsis]="page.label === '...'"
          *ngFor="let page of paginationDirective.pages"
        >
          <a
            tabindex="0"
            (keyup.enter)="paginationDirective.setCurrent(page.value)"
            (click)="paginationDirective.setCurrent(page.value)"
            *ngIf="paginationDirective.getCurrent() !== page.value"
          >
            <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
            <span>{{ page.label }}</span>
          </a>
          <ng-container *ngIf="paginationDirective.getCurrent() === page.value">
            <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
            <span>{{ page.label }}</span>
          </ng-container>
        </li>
        <li
          class="pagination-next"
          [class.disabled]="paginationDirective.isLastPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="!paginationDirective.isLastPage()"
            (keyup.enter)="paginationDirective.next()"
            (click)="paginationDirective.next()"
            [attr.aria-label]="nextLabel + ' ' + screenReaderPageLabel"
          >
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isLastPage()">
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
      </ul>
    </pagination-template>
  </div>
  <div
    class="ngx-pagination-range"
    #paginationRange
    [class.ngx-table__table--dark-pagination-range]="config.tableLayout.theme === 'dark'"
    *ngIf="config.paginationRangeEnabled"
  >
    <div class="ngx-dropdown ngx-pagination-range-dropdown" id="rowAmount">
      <div class="ngx-btn-group">
        <div class="ngx-pagination-range-dropdown-button" (click)="showRange = !showRange">
          {{selectedLimit}} <i class="ngx-icon ngx-icon-arrow-down"></i>
        </div>
        <ul class="ngx-menu" *ngIf="showRange">
          <li
            class="ngx-pagination-range-dropdown-button-item"
            [class.ngx-pagination-range--selected]="limit === selectedLimit"
            (click)="changeLimit(limit, false)"
            *ngFor="let limit of ranges"
          >
            <span>{{limit}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    paginationDirective: [{
      type: ViewChild,
      args: ["paginationDirective"]
    }],
    paginationRange: [{
      type: ViewChild,
      args: ["paginationRange"]
    }],
    pagination: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    updateRange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    this.update = new EventEmitter();
  }
  unifyKey(key) {
    return key.replace(".", "_");
  }
  onSearch(input) {
    this.update.emit([{
      value: input.value,
      key: this.column.key
    }]);
  }
};
_HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderComponent,
  selectors: [["table-header"]],
  inputs: {
    column: "column"
  },
  outputs: {
    update: "update"
  },
  decls: 3,
  vars: 3,
  consts: [[3, "for"], ["type", "text", "aria-label", "Search", 1, "ngx-table__header-search", 3, "id", "placeholder", "input"], ["input", ""]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "label", 0)(1, "input", 1, 2);
      ɵɵlistener("input", function HeaderComponent_Template_input_input_1_listener() {
        ɵɵrestoreView(_r1);
        const _r0 = ɵɵreference(2);
        return ɵɵresetView(ctx.onSearch(_r0));
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate1("for", "search_", ctx.unifyKey(ctx.column.key), "");
      ɵɵadvance();
      ɵɵpropertyInterpolate1("id", "search_", ctx.unifyKey(ctx.column.key), "");
      ɵɵpropertyInterpolate("placeholder", ctx.column.placeholder ? ctx.column.placeholder : ctx.column.title);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "table-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<label for="search_{{ unifyKey(column.key) }}">\n  <input\n    type="text"\n    id="search_{{ unifyKey(column.key) }}"\n    aria-label="Search"\n    placeholder="{{ column.placeholder ? column.placeholder : column.title }}"\n    class="ngx-table__header-search"\n    #input\n    (input)="onSearch(input)"\n  />\n</label>\n'
    }]
  }], null, {
    column: [{
      type: Input
    }],
    update: [{
      type: Output
    }]
  });
})();
var _TableTHeadComponent = class _TableTHeadComponent {
  onClick(targetElement) {
    if (this.additionalActionMenu && !this.additionalActionMenu.nativeElement.contains(targetElement)) {
      this.menuActive = false;
    }
    if (this.openedHeaderActionTemplate && // if no header have the clicked point
    !this.headerDropdown.toArray().some((ref) => ref.nativeElement.contains(targetElement))) {
      this.openedHeaderActionTemplate = null;
    }
  }
  constructor(styleService) {
    this.styleService = styleService;
    this.menuActive = false;
    this.openedHeaderActionTemplate = null;
    this.onSelectAllBinded = this.onSelectAll.bind(this);
    this.filter = new EventEmitter();
    this.order = new EventEmitter();
    this.selectAll = new EventEmitter();
    this.event = new EventEmitter();
  }
  getColumnDefinition(column) {
    return column.searchEnabled || typeof column.searchEnabled === "undefined";
  }
  orderBy(column) {
    this.order.emit(column);
  }
  isOrderEnabled(column) {
    const columnOrderEnabled = column.orderEnabled === void 0 ? true : !!column.orderEnabled;
    return this.config.orderEnabled && columnOrderEnabled;
  }
  columnDrop(event) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  onSearch($event) {
    this.filter.emit($event);
  }
  getColumnWidth(column) {
    if (column.width) {
      return column.width;
    }
    return this.config.fixedColumnWidth ? 100 / this.columns.length + "%" : null;
  }
  onSelectAll() {
    this.selectAll.emit();
  }
  onMouseDown(event, th) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.th = th;
    this.startOffset = th.offsetWidth - event.pageX;
    this.event.emit({
      event: Event.onColumnResizeMouseDown,
      value: event
    });
  }
  onMouseMove(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    if (this.th && this.th.style) {
      this.th.style.width = this.startOffset + event.pageX + "px";
      this.th.style.cursor = "col-resize";
      this.th.style["user-select"] = "none";
    }
  }
  onMouseUp(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.event.emit({
      event: Event.onColumnResizeMouseUp,
      value: event
    });
    this.th.style.cursor = "default";
    this.th = void 0;
  }
  showHeaderActionTemplateMenu(column) {
    if (!column.headerActionTemplate) {
      console.error("Column [headerActionTemplate] property not defined");
    }
    if (this.openedHeaderActionTemplate === column.key) {
      this.openedHeaderActionTemplate = null;
      return;
    }
    this.openedHeaderActionTemplate = column.key;
  }
  showMenu() {
    if (!this.additionalActionsTemplate) {
      console.error("[additionalActionsTemplate] property not defined");
    }
    this.menuActive = !this.menuActive;
  }
};
_TableTHeadComponent.ɵfac = function TableTHeadComponent_Factory(t) {
  return new (t || _TableTHeadComponent)(ɵɵdirectiveInject(StyleService));
};
_TableTHeadComponent.ɵcmp = ɵɵdefineComponent({
  type: _TableTHeadComponent,
  selectors: [["", "table-thead", ""]],
  viewQuery: function TableTHeadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.th = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.additionalActionMenu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerDropdown = _t);
    }
  },
  hostBindings: function TableTHeadComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TableTHeadComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    config: "config",
    columns: "columns",
    sortKey: "sortKey",
    sortState: "sortState",
    selectAllTemplate: "selectAllTemplate",
    filtersTemplate: "filtersTemplate",
    additionalActionsTemplate: "additionalActionsTemplate"
  },
  outputs: {
    filter: "filter",
    order: "order",
    selectAll: "selectAll",
    event: "event"
  },
  features: [ɵɵProvidersFeature([StyleService])],
  attrs: _c5,
  decls: 7,
  vars: 8,
  consts: [["class", "ngx-table__header", 4, "ngIf"], ["class", "ngx-table__header ngx-table__header--draggable", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped", 4, "ngIf"], [1, "ngx-table__search-header"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ngx-table__header"], [3, "width", 4, "ngIf"], ["class", "ngx-table__header-cell-additional-actions", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "ngx-form-checkbox", "for", "selectAllCheckboxes", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["for", "selectAllCheckboxes", 1, "ngx-form-checkbox"], ["type", "checkbox", "id", "selectAllCheckboxes", 3, "change"], ["id", "selectAllCheckbox", 1, "ngx-form-icon"], [1, "ngx-table__header-cell", 3, "ngClass", "mousedown", "mouseup", "mousemove"], ["th", ""], [2, "display", "inline", 3, "click"], [1, "ngx-table__header-title"], ["class", "ngx-icon ngx-icon-pin", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-up", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-down", 4, "ngIf"], ["class", "ngx-dropdown", 4, "ngIf"], ["class", "ngx-table__column-resizer", 4, "ngIf"], [1, "ngx-icon", "ngx-icon-pin"], [1, "ngx-icon", "ngx-icon-arrow-up"], [1, "ngx-icon", "ngx-icon-arrow-down"], [1, "ngx-dropdown"], ["headerDropdown", ""], [1, "ngx-btn", "ngx-btn-link", 3, "click"], [1, "ngx-icon", "ngx-icon-more"], ["class", "ngx-menu ngx-table__table-menu", 4, "ngIf"], [1, "ngx-menu", "ngx-table__table-menu"], [3, "ngTemplateOutlet"], [1, "ngx-table__column-resizer"], [1, "ngx-table__header-cell-additional-actions"], ["additionalActionMenu", ""], [1, "ngx-icon", "ngx-icon-menu"], [3, "ngTemplateOutlet", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "ngx-table__header", "ngx-table__header--draggable", 3, "cdkDropListDropped"], ["type", "checkbox", "id", "selectAllCheckboxesDrag", 3, "change"], ["id", "selectAllCheckboxDrag", 1, "ngx-form-icon"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "ngx-table__header-cell", "ngx-table__header-cell--draggable", 3, "cdkDragStartDelay", "ngClass", "mousedown", "mouseup", "mousemove"], ["cdkDragHandle", "", 2, "display", "inline", 3, "click"], [3, "ngClass"], [3, "column", "update", 4, "ngIf"], [3, "column", "update"]],
  template: function TableTHeadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TableTHeadComponent_tr_0_Template, 4, 3, "tr", 0)(1, TableTHeadComponent_tr_1_Template, 4, 3, "tr", 1);
      ɵɵelementStart(2, "tr", 2);
      ɵɵtemplate(3, TableTHeadComponent_th_3_Template, 1, 0, "th", 3)(4, TableTHeadComponent_ng_container_4_Template, 3, 6, "ng-container", 4)(5, TableTHeadComponent_th_5_Template, 1, 0, "th", 3);
      ɵɵelementEnd();
      ɵɵtemplate(6, TableTHeadComponent_ng_container_6_Template, 3, 1, "ng-container", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.config.headerEnabled && !ctx.config.columnReorder);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.headerEnabled && ctx.config.columnReorder);
      ɵɵadvance();
      ɵɵstyleProp("display", ctx.config.searchEnabled && !ctx.filtersTemplate ? "table-row" : "none");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.checkboxes || ctx.config.radio);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.columns);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.additionalActions || ctx.config.detailsTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.filtersTemplate);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, CdkDropList, CdkDrag, CdkDragHandle, HeaderComponent],
  styles: [".cdk-drag-preview[_ngcontent-%COMP%]{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}"],
  changeDetection: 0
});
var TableTHeadComponent = _TableTHeadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableTHeadComponent, [{
    type: Component,
    args: [{
      selector: "[table-thead]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [StyleService],
      template: `<tr class="ngx-table__header" *ngIf="config.headerEnabled && !config.columnReorder">
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxes" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckbox"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  class="ngx-table__header ngx-table__header--draggable"
  *ngIf="config.headerEnabled && config.columnReorder"
  cdkDropList
  cdkDropListOrientation="horizontal"
  (cdkDropListDropped)="columnDrop($event)"
>
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxesDrag" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckboxDrag"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell ngx-table__header-cell--draggable"
      cdkDragLockAxis="x"
      cdkDrag
      [cdkDragStartDelay]="config.reorderDelay || 0"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        cdkDragHandle
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  [style.display]="config.searchEnabled && !filtersTemplate ? 'table-row' : 'none'"
  class="ngx-table__search-header"
>
  <th *ngIf="config.checkboxes || config.radio"></th>
  <ng-container *ngFor="let column of columns; let colIndex = index">
    <th
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [class.pinned-left]="column.pinned"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
    >
      <table-header
        *ngIf="getColumnDefinition(column)"
        (update)="onSearch($event)"
        [column]="column"
      >
      </table-header>
    </th>
  </ng-container>
  <th *ngIf="config.additionalActions || config.detailsTemplate"></th>
</tr>
<ng-container *ngIf="filtersTemplate">
  <tr>
    <ng-container [ngTemplateOutlet]="filtersTemplate"> </ng-container>
  </tr>
</ng-container>
`,
      styles: [".cdk-drag-preview{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}\n"]
    }]
  }], function() {
    return [{
      type: StyleService
    }];
  }, {
    config: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    sortKey: [{
      type: Input
    }],
    sortState: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    filter: [{
      type: Output
    }],
    order: [{
      type: Output
    }],
    selectAll: [{
      type: Output
    }],
    event: [{
      type: Output
    }],
    th: [{
      type: ViewChild,
      args: ["th"]
    }],
    headerDropdown: [{
      type: ViewChildren,
      args: ["headerDropdown"]
    }],
    additionalActionMenu: [{
      type: ViewChild,
      args: ["additionalActionMenu"]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var _FiltersService = class _FiltersService {
  static getPath(p, o) {
    const result = p.reduce((xs, x) => xs && typeof xs[x] !== "undefined" ? xs[x] : null, o);
    return result;
  }
};
_FiltersService.ɵfac = function FiltersService_Factory(t) {
  return new (t || _FiltersService)();
};
_FiltersService.ɵprov = ɵɵdefineInjectable({
  token: _FiltersService,
  factory: _FiltersService.ɵfac
});
var FiltersService = _FiltersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersService, [{
    type: Injectable
  }], null, null);
})();
var _SearchPipe = class _SearchPipe {
  constructor() {
    this.filters = {};
  }
  transform(array, filter2, filteredCountSubject, config) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined") {
      filteredCountSubject.next(array.length);
      return array;
    }
    filter2.forEach((f) => {
      this.filters[f.key] = f.value.toString().toLocaleLowerCase();
      if (Object.keys(f).length === 0 || f.value === "") {
        delete this.filters[f.key];
      }
    });
    if (config && config.groupRows) {
      return array.map((arr) => this.filterGroup(arr, filteredCountSubject));
    }
    return this.filterGroup(array, filteredCountSubject);
  }
  filterGroup(array, filteredCountSubject) {
    const arr = array.filter((obj) => {
      return Object.keys(this.filters).every((c) => {
        const split = c.split(".");
        const val = FiltersService.getPath(split, obj);
        const element = typeof val === "object" ? JSON.stringify(val) : val.toString().toLocaleLowerCase();
        const strings = this.filters[c].split(",");
        return strings.some((s) => element.indexOf(s.trim()) > -1);
      });
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
};
_SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || _SearchPipe)();
};
_SearchPipe.ɵpipe = ɵɵdefinePipe({
  name: "search",
  type: _SearchPipe,
  pure: true
});
var SearchPipe = _SearchPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPipe, [{
    type: Pipe,
    args: [{
      name: "search"
    }]
  }], null, null);
})();
var _RenderPipe = class _RenderPipe {
  transform(row, key) {
    const split = key.split(".");
    return FiltersService.getPath(split, row);
  }
};
_RenderPipe.ɵfac = function RenderPipe_Factory(t) {
  return new (t || _RenderPipe)();
};
_RenderPipe.ɵpipe = ɵɵdefinePipe({
  name: "render",
  type: _RenderPipe,
  pure: true
});
var RenderPipe = _RenderPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RenderPipe, [{
    type: Pipe,
    args: [{
      name: "render"
    }]
  }], null, null);
})();
var _GlobalSearchPipe = class _GlobalSearchPipe {
  transform(array, filter2, filteredCountSubject) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined" || Object.keys(filter2).length === 0 || filter2 === "") {
      filteredCountSubject.next(array.length);
      return array;
    }
    const arr = array.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      const strings = filter2.split(",");
      return strings.some((s) => element.toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase()) > -1);
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
};
_GlobalSearchPipe.ɵfac = function GlobalSearchPipe_Factory(t) {
  return new (t || _GlobalSearchPipe)();
};
_GlobalSearchPipe.ɵpipe = ɵɵdefinePipe({
  name: "global",
  type: _GlobalSearchPipe,
  pure: true
});
var GlobalSearchPipe = _GlobalSearchPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchPipe, [{
    type: Pipe,
    args: [{
      name: "global"
    }]
  }], null, null);
})();
var _SortPipe = class _SortPipe {
  constructor() {
    this.defaultArray = [];
  }
  static isNaN(aV, bV) {
    return isNaN(parseFloat(aV)) || !isFinite(aV) || isNaN(parseFloat(bV)) || !isFinite(bV);
  }
  static compare(a, b, key) {
    const split = key.split(".");
    const aPath = FiltersService.getPath(split, a);
    const bPath = FiltersService.getPath(split, b);
    const aValue = (aPath + "").toLowerCase();
    const bValue = (bPath + "").toLowerCase();
    if (_SortPipe.isNaN(aPath, bPath)) {
      return aValue.localeCompare(bValue);
    }
    if (parseFloat(aPath) < parseFloat(bPath)) {
      return -1;
    }
    if (parseFloat(aPath) > parseFloat(bPath)) {
      return 1;
    }
    return 0;
  }
  transform(array, filter2, config) {
    if (this.defaultArray.length === 0) {
      this.defaultArray = array;
    }
    if (!filter2.key || filter2.key === "") {
      return array;
    }
    if (filter2.order === "") {
      return this.defaultArray;
    }
    if (filter2.order === "asc") {
      return this.sortAsc(array, filter2, config);
    }
    return this.sortDesc(array, filter2, config);
  }
  sortAsc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(a, b, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(a, b, filter2.key));
  }
  sortDesc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(b, a, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(b, a, filter2.key));
  }
};
_SortPipe.ɵfac = function SortPipe_Factory(t) {
  return new (t || _SortPipe)();
};
_SortPipe.ɵpipe = ɵɵdefinePipe({
  name: "sort",
  type: _SortPipe,
  pure: true
});
var SortPipe = _SortPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortPipe, [{
    type: Pipe,
    args: [{
      name: "sort"
    }]
  }], null, null);
})();
var _BaseComponent = class _BaseComponent {
  onContextMenuClick(targetElement) {
    if (this.contextMenu && !this.contextMenu.nativeElement.contains(targetElement)) {
      this.rowContextMenuPosition = {
        top: null,
        left: null,
        value: null
      };
    }
  }
  constructor(cdr, scrollDispatcher, styleService) {
    this.cdr = cdr;
    this.scrollDispatcher = scrollDispatcher;
    this.styleService = styleService;
    this.unsubscribe = new Subject();
    this.filterCount = -1;
    this.filteredCountSubject = new Subject();
    this.tableClass = null;
    this.grouped = [];
    this.isSelected = false;
    this.page = 1;
    this.count = 0;
    this.sortState = /* @__PURE__ */ new Map();
    this.sortKey = null;
    this.rowContextMenuPosition = {
      top: null,
      left: null,
      value: null
    };
    this.sortBy = {
      key: "",
      order: "asc"
    };
    this.selectedDetailsTemplateRowId = /* @__PURE__ */ new Set();
    this.selectedCheckboxes = /* @__PURE__ */ new Set();
    this.id = "table";
    this.event = new EventEmitter();
    this.filteredCountSubject.pipe(takeUntil(this.unsubscribe)).subscribe((count) => {
      setTimeout(() => {
        this.filterCount = count;
        this.cdr.detectChanges();
      });
    });
  }
  ngOnInit() {
    if (!this.columns) {
      console.error("[columns] property required!");
    }
    if (this.configuration) {
      this.config = this.configuration;
    } else {
      this.config = DefaultConfigService.config;
    }
    this.limit = this.config.rows;
    if (this.groupRowsBy) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    this.doDecodePersistedState();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  ngAfterViewInit() {
    const throttleValue = this.config.infiniteScrollThrottleTime ? this.config.infiniteScrollThrottleTime : 200;
    this.scrollDispatcher.scrolled().pipe(throttleTime(throttleValue), filter((event) => {
      return !!event && this.viewPort && this.viewPort.getRenderedRange().end === this.viewPort.getDataLength();
    }), takeUntil(this.unsubscribe)).subscribe(() => {
      this.emitEvent(Event.onInfiniteScrollEnd, null);
    });
  }
  ngOnChanges(changes) {
    const {
      configuration,
      data,
      pagination,
      groupRowsBy
    } = changes;
    this.toggleRowIndex = changes.toggleRowIndex;
    if (configuration && configuration.currentValue) {
      this.config = configuration.currentValue;
    }
    if (data && data.currentValue) {
      this.doApplyData(data);
    }
    if (pagination && pagination.currentValue) {
      const {
        count,
        limit,
        offset
      } = pagination.currentValue;
      this.count = count;
      this.limit = limit;
      this.page = offset;
    }
    if (groupRowsBy && groupRowsBy.currentValue) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    if (this.toggleRowIndex && this.toggleRowIndex.currentValue) {
      const row = this.toggleRowIndex.currentValue;
      this.collapseRow(row.index);
    }
  }
  orderBy(column) {
    if (typeof column.orderEnabled !== "undefined" && !column.orderEnabled) {
      return;
    }
    this.sortKey = column.key;
    if (!this.config.orderEnabled || this.sortKey === "") {
      return;
    }
    this.setColumnOrder(column);
    if (!this.config.orderEventOnly && !column.orderEventOnly) {
      this.sortBy.key = this.sortKey;
      this.sortBy.order = this.sortState.get(this.sortKey);
    } else {
      this.sortBy.key = "";
      this.sortBy.order = "";
    }
    if (!this.config.serverPagination) {
      this.data = [...this.data];
      this.sortBy = __spreadValues({}, this.sortBy);
    }
    const value = {
      key: this.sortKey,
      order: this.sortState.get(this.sortKey)
    };
    this.emitEvent(Event.onOrder, value);
  }
  onClick($event, row, key, colIndex, rowIndex) {
    if (this.config.selectRow) {
      this.selectedRow = rowIndex;
    }
    if (this.config.selectCol && `${colIndex}`) {
      this.selectedCol = colIndex;
    }
    if (this.config.selectCell && `${colIndex}`) {
      this.selectedRow = rowIndex;
      this.selectedCol = colIndex;
    }
    if (this.config.clickEvent) {
      const value = {
        event: $event,
        row,
        key,
        rowId: rowIndex,
        colId: colIndex
      };
      this.emitEvent(Event.onClick, value);
    }
  }
  onDoubleClick($event, row, key, colIndex, rowIndex) {
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.emitEvent(Event.onDoubleClick, value);
  }
  onCheckboxSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onCheckboxSelect, value);
  }
  onRadioSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onRadioSelect, value);
  }
  onSelectAll() {
    this.isSelected = !this.isSelected;
    this.emitEvent(Event.onSelectAll, this.isSelected);
  }
  onSearch($event) {
    if (!this.config.serverPagination) {
      this.term = $event;
    }
    this.emitEvent(Event.onSearch, $event);
  }
  onGlobalSearch(value) {
    if (!this.config.serverPagination) {
      this.globalSearchTerm = value;
    }
    this.emitEvent(Event.onGlobalSearch, value);
  }
  onPagination(pagination) {
    this.page = pagination.page;
    this.limit = pagination.limit;
    this.config.rows = pagination.limit;
    this.emitEvent(Event.onPagination, pagination);
  }
  toggleCheckbox(rowIndex) {
    this.selectedCheckboxes.has(rowIndex) ? this.selectedCheckboxes.delete(rowIndex) : this.selectedCheckboxes.add(rowIndex);
  }
  collapseRow(rowIndex) {
    if (this.selectedDetailsTemplateRowId.has(rowIndex)) {
      this.selectedDetailsTemplateRowId.delete(rowIndex);
      this.emitEvent(Event.onRowCollapsedHide, rowIndex);
    } else {
      this.selectedDetailsTemplateRowId.add(rowIndex);
      this.emitEvent(Event.onRowCollapsedShow, rowIndex);
    }
  }
  doDecodePersistedState() {
    if (!this.config.persistState) {
      return;
    }
    const pagination = localStorage.getItem(Event.onPagination);
    const sort = localStorage.getItem(Event.onOrder);
    const search = localStorage.getItem(Event.onSearch);
    if (pagination) {
      this.onPagination(JSON.parse(pagination));
    }
    if (sort) {
      const {
        key,
        order
      } = JSON.parse(sort);
      this.bindApi({
        type: API.sortBy,
        value: {
          column: key,
          order
        }
      });
    }
    if (search) {
      this.bindApi({
        type: API.setInputValue,
        value: JSON.parse(search)
      });
    }
  }
  isRowCollapsed(rowIndex) {
    if (this.config.collapseAllRows) {
      return true;
    }
    return this.selectedDetailsTemplateRowId.has(rowIndex);
  }
  get loadingHeight() {
    const table = document.getElementById(this.id);
    if (table && table.rows && table.rows.length > 3) {
      const searchEnabled = this.config.searchEnabled ? 1 : 0;
      const headerEnabled = this.config.headerEnabled ? 1 : 0;
      const borderTrHeight = 1;
      const borderDivHeight = 2;
      return (table.rows.length - searchEnabled - headerEnabled) * (table.rows[3].offsetHeight - borderTrHeight) - borderDivHeight;
    }
    return 30;
  }
  get arrowDefinition() {
    return this.config.showDetailsArrow || typeof this.config.showDetailsArrow === "undefined";
  }
  onRowContextMenu($event, row, key, colIndex, rowIndex) {
    if (!this.config.showContextMenu) {
      return;
    }
    $event.preventDefault();
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.rowContextMenuPosition = {
      top: `${$event.pageY - 10}px`,
      left: `${$event.pageX - 10}px`,
      value
    };
    this.emitEvent(Event.onRowContextMenu, value);
  }
  doApplyData(data) {
    const order = this.columns.find((c) => !!c.orderBy);
    if (order) {
      this.sortState.set(this.sortKey, order.orderBy === "asc" ? "desc" : "asc");
      this.orderBy(order);
    } else {
      this.data = [...data.currentValue];
    }
  }
  onDragStart(event) {
    this.emitEvent(Event.onReorderStart, event);
  }
  onDrop(event) {
    this.emitEvent(Event.onRowDrop, event);
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  // DO NOT REMOVE. It is called from parent component. See src/app/demo/api-doc/api-doc.component.ts
  apiEvent(event) {
    return this.bindApi(event);
  }
  /* eslint-disable */
  bindApi(event) {
    switch (event.type) {
      case API.rowContextMenuClicked:
        this.rowContextMenuPosition = {
          top: null,
          left: null,
          value: null
        };
        break;
      case API.toggleRowIndex:
        this.collapseRow(event.value);
        break;
      case API.toggleCheckbox:
        this.toggleCheckbox(event.value);
        break;
      case API.setInputValue:
        if (this.config.searchEnabled) {
          event.value.forEach((input) => {
            const element = document.getElementById(`search_${input.key}`);
            if (!element) {
              console.error(`Column '${input.key}' not available in the DOM. Have you misspelled a name?`);
            } else {
              element.value = input.value;
            }
          });
        }
        this.onSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.onGlobalSearch:
        this.onGlobalSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.setRowClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowClass(val));
          break;
        }
        this.styleService.setRowClass(event.value);
        this.cdr.markForCheck();
        break;
      case API.setCellClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellClass(val));
          break;
        }
        this.styleService.setCellClass(event.value);
        break;
      case API.setRowStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowStyle(val));
          break;
        }
        this.styleService.setRowStyle(event.value);
        break;
      case API.setCellStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellStyle(val));
          break;
        }
        this.styleService.setCellStyle(event.value);
        break;
      case API.setTableClass:
        this.tableClass = event.value;
        this.cdr.markForCheck();
        break;
      case API.getPaginationTotalItems:
        return this.paginationComponent.paginationDirective.getTotalItems();
      case API.getPaginationCurrentPage:
        return this.paginationComponent.paginationDirective.getCurrent();
      case API.getPaginationLastPage:
        return this.paginationComponent.paginationDirective.getLastPage();
      case API.getNumberOfRowsPerPage:
        return this.paginationComponent.paginationDirective.isLastPage() ? this.paginationComponent.paginationDirective.getTotalItems() % this.limit : this.limit;
      case API.setPaginationCurrentPage:
        this.paginationComponent.paginationDirective.setCurrent(event.value);
        break;
      case API.setPaginationRange:
        this.paginationComponent.ranges = event.value;
        break;
      case API.setPaginationPreviousLabel:
        this.paginationComponent.previousLabel = event.value;
        break;
      case API.setPaginationNextLabel:
        this.paginationComponent.nextLabel = event.value;
        break;
      case API.setPaginationDisplayLimit:
        this.paginationComponent.changeLimit(event.value, true);
        break;
      case API.sortBy:
        const column = {
          title: "",
          key: event.value.column,
          orderBy: event.value.order
        };
        this.orderBy(column);
        this.cdr.detectChanges();
        break;
      default:
        break;
    }
  }
  setColumnOrder(column) {
    const key = column.key;
    switch (this.sortState.get(key)) {
      case "":
      case void 0:
        this.sortState.set(key, column.orderBy || "desc");
        break;
      case "asc":
        this.config.threeWaySort ? this.sortState.set(key, "") : this.sortState.set(key, "desc");
        break;
      case "desc":
        this.sortState.set(key, "asc");
        break;
    }
    if (this.sortState.size > 1) {
      const temp = this.sortState.get(key);
      this.sortState.clear();
      this.sortState.set(key, temp);
    }
  }
  emitEvent(event, value) {
    this.event.emit({
      event,
      value
    });
    if (this.config.persistState) {
      localStorage.setItem(event, JSON.stringify(value));
    }
    if (this.config.logger) {
      console.log({
        event,
        value
      });
    }
  }
  dragEnter($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragOver($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragLeave($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  drop($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const file = $event.dataTransfer?.files?.[0];
    if (file?.type !== "application/json") {
      console.log("File not allowed");
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      this.data = JSON.parse(event?.target?.result);
      this.cdr.markForCheck();
    };
    fileReader.readAsText(file);
  }
};
_BaseComponent.ɵfac = function BaseComponent_Factory(t) {
  return new (t || _BaseComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(StyleService));
};
_BaseComponent.ɵcmp = ɵɵdefineComponent({
  type: _BaseComponent,
  selectors: [["ngx-table"]],
  contentQueries: function BaseComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowTemplate = _t.first);
    }
  },
  viewQuery: function BaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5);
      ɵɵviewQuery(_c9, 5);
      ɵɵviewQuery(CdkVirtualScrollViewport, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contextMenu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.table = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewPort = _t.first);
    }
  },
  hostBindings: function BaseComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BaseComponent_click_HostBindingHandler($event) {
        return ctx.onContextMenuClick($event.target);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    configuration: "configuration",
    data: "data",
    pagination: "pagination",
    groupRowsBy: "groupRowsBy",
    id: "id",
    toggleRowIndex: "toggleRowIndex",
    detailsTemplate: "detailsTemplate",
    summaryTemplate: "summaryTemplate",
    groupRowsHeaderTemplate: "groupRowsHeaderTemplate",
    filtersTemplate: "filtersTemplate",
    selectAllTemplate: "selectAllTemplate",
    noResultsTemplate: "noResultsTemplate",
    loadingTemplate: "loadingTemplate",
    additionalActionsTemplate: "additionalActionsTemplate",
    rowContextMenu: "rowContextMenu",
    columns: "columns"
  },
  outputs: {
    event: "event"
  },
  features: [ɵɵProvidersFeature([DefaultConfigService, GroupRowsService, StyleService]), ɵɵNgOnChangesFeature],
  decls: 11,
  vars: 38,
  consts: [[1, "ngx-container", 3, "dragenter", "dragover", "dragleave", "drop"], [3, "id", "ngClass"], ["table", ""], ["table-thead", "", 3, "config", "sortKey", "sortState", "selectAllTemplate", "filtersTemplate", "additionalActionsTemplate", "columns", "selectAll", "filter", "order", "event"], [4, "ngIf"], ["class", "ngx-draggable-row-area", "cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [3, "id", "config", "pagination", "updateRange"], ["paginationComponent", ""], ["class", "ngx-table__table-row-context-menu", 3, "ngStyle", 4, "ngIf"], ["itemSize", "50", "class", "ngx-infinite-scroll-viewport", 4, "ngIf"], [1, "ngx-table__table-row-context-menu", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "click", "contextmenu", "dblclick"], ["contextMenu", ""], ["class", "ngx-icon", 3, "ngClass", "click", 4, "ngIf"], [1, "ngx-icon", 3, "ngClass", "click"], ["itemSize", "50", 1, "ngx-infinite-scroll-viewport"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "ngx-form-checkbox"], ["type", "checkbox", 3, "id", "checked", "change"], [1, "ngx-form-icon"], ["type", "radio", "name", "radio", 3, "id", "change"], [3, "ngClass", "click", "contextmenu", "dblclick"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["width", "3%", 4, "ngIf"], ["width", "3%"], ["cdkDropList", "", 1, "ngx-draggable-row-area", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "ngx-draggable-row", 3, "cdkDragStartDelay", "cdkDragStarted"], [3, "click", "dblclick"], [1, "ngx-table__body-empty"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ngx-table__table-no-results"], [1, "ngx-table__body-loading"], [1, "ngx-table__table-loader-wrapper"], [1, "ngx-table__table-loader"]],
  template: function BaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("dragenter", function BaseComponent_Template_div_dragenter_0_listener($event) {
        return ctx.dragEnter($event);
      })("dragover", function BaseComponent_Template_div_dragover_0_listener($event) {
        return ctx.dragOver($event);
      })("dragleave", function BaseComponent_Template_div_dragleave_0_listener($event) {
        return ctx.dragLeave($event);
      })("drop", function BaseComponent_Template_div_drop_0_listener($event) {
        return ctx.drop($event);
      });
      ɵɵelementStart(1, "table", 1, 2)(3, "thead", 3);
      ɵɵlistener("selectAll", function BaseComponent_Template_thead_selectAll_3_listener() {
        return ctx.onSelectAll();
      })("filter", function BaseComponent_Template_thead_filter_3_listener($event) {
        return ctx.onSearch($event);
      })("order", function BaseComponent_Template_thead_order_3_listener($event) {
        return ctx.orderBy($event);
      })("event", function BaseComponent_Template_thead_event_3_listener($event) {
        return ctx.emitEvent($event.event, $event.value);
      });
      ɵɵelementEnd();
      ɵɵtemplate(4, BaseComponent_tbody_4_Template, 4, 3, "tbody", 4)(5, BaseComponent_tbody_5_Template, 2, 1, "tbody", 5)(6, BaseComponent_tbody_6_Template, 4, 2, "tbody", 4)(7, BaseComponent_tbody_7_Template, 4, 2, "tbody", 4)(8, BaseComponent_tfoot_8_Template, 3, 6, "tfoot", 4);
      ɵɵelementEnd();
      ɵɵelementStart(9, "pagination", 6, 7);
      ɵɵlistener("updateRange", function BaseComponent_Template_pagination_updateRange_9_listener($event) {
        return ctx.onPagination($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassProp("ngx-container--dark", ctx.config.tableLayout.theme === "dark");
      ɵɵadvance();
      ɵɵclassProp("ngx-table__table--tiny", ctx.config.tableLayout.style === "tiny")("ngx-table__table--normal", ctx.config.tableLayout.style === "normal")("ngx-table__table--big", ctx.config.tableLayout.style === "big")("ngx-table__table--borderless", ctx.config.tableLayout.borderless)("ngx-table__table--dark", ctx.config.tableLayout.theme === "dark")("ngx-table__table--hoverable", ctx.config.tableLayout.hover)("ngx-table__table--striped", ctx.config.tableLayout.striped)("ngx-table__horizontal-scroll", ctx.config.horizontalScroll && !ctx.config.isLoading);
      ɵɵproperty("id", ctx.id)("ngClass", ctx.tableClass === null || ctx.tableClass === "" ? "ngx-table" : ctx.tableClass);
      ɵɵadvance(2);
      ɵɵclassProp("ngx-infinite-scroll-viewport-thead", ctx.config.infiniteScroll);
      ɵɵproperty("config", ctx.config)("sortKey", ctx.sortKey)("sortState", ctx.sortState)("selectAllTemplate", ctx.selectAllTemplate)("filtersTemplate", ctx.filtersTemplate)("additionalActionsTemplate", ctx.additionalActionsTemplate)("columns", ctx.columns);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.data && !ctx.config.isLoading && !ctx.config.rowReorder);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.data && !ctx.config.isLoading && ctx.config.rowReorder);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.filterCount === 0);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.isLoading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.summaryTemplate);
      ɵɵadvance();
      ɵɵproperty("id", ctx.id)("config", ctx.config)("pagination", ctx.pagination);
      ɵɵattribute("id", "pagination" + ctx.id);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, CdkDropList, CdkDrag, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, PaginationComponent, TableTHeadComponent, PaginatePipe, SearchPipe, RenderPipe, GlobalSearchPipe, SortPipe],
  encapsulation: 2,
  changeDetection: 0
});
var BaseComponent = _BaseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Component,
    args: [{
      selector: "ngx-table",
      providers: [DefaultConfigService, GroupRowsService, StyleService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-container"
  [class.ngx-container--dark]="config.tableLayout.theme === 'dark'"
  (dragenter)="dragEnter($event)"
  (dragover)="dragOver($event)"
  (dragleave)="dragLeave($event)"
  (drop)="drop($event)"
>
  <table
    [id]="id"
    #table
    [ngClass]="tableClass === null || tableClass === '' ? 'ngx-table' : tableClass"
    [class.ngx-table__table--tiny]="config.tableLayout.style === 'tiny'"
    [class.ngx-table__table--normal]="config.tableLayout.style === 'normal'"
    [class.ngx-table__table--big]="config.tableLayout.style === 'big'"
    [class.ngx-table__table--borderless]="config.tableLayout.borderless"
    [class.ngx-table__table--dark]="config.tableLayout.theme === 'dark'"
    [class.ngx-table__table--hoverable]="config.tableLayout.hover"
    [class.ngx-table__table--striped]="config.tableLayout.striped"
    [class.ngx-table__horizontal-scroll]="config.horizontalScroll && !config.isLoading"
  >
    <thead
      [class.ngx-infinite-scroll-viewport-thead]="config.infiniteScroll"
      table-thead
      [config]="config"
      [sortKey]="sortKey"
      [sortState]="sortState"
      [selectAllTemplate]="selectAllTemplate"
      [filtersTemplate]="filtersTemplate"
      [additionalActionsTemplate]="additionalActionsTemplate"
      [columns]="columns"
      (selectAll)="onSelectAll()"
      (filter)="onSearch($event)"
      (order)="orderBy($event)"
      (event)="emitEvent($event.event, $event.value)"
    ></thead>
    <tbody *ngIf="data && !config.isLoading && !config.rowReorder">
      <ng-container *ngIf="rowTemplate">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              (click)="onClick($event, row, '', null, data.indexOf(row))"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, data.indexOf(row))"
              (dblclick)="onDoubleClick($event, row, '', null, data.indexOf(row))"
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              (click)="onClick($event, row, '', null, rowIndex)"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, rowIndex)"
              (dblclick)="onDoubleClick($event, row, '', null, rowIndex)"
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-{{ data.indexOf(row) }}"
                    [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                    (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio">
                <label>
                  <input
                    type="radio"
                    id="radio-{{ data.indexOf(row) }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, data.indexOf(row))"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                  #contextMenu
                  (contextmenu)="
                    onRowContextMenu($event, row, column.key, colIndex, data.indexOf(row))
                  "
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    data.indexOf(row) === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: data.indexOf(row),
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <!-- infinite scroll -->
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes" width="3%">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-infinite-scroll-{{ rowIndex }}"
                    [checked]="isSelected || selectedCheckboxes.has(rowIndex)"
                    (change)="onCheckboxSelect($event, row, rowIndex)"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio" width="3%">
                <label>
                  <input
                    type="radio"
                    id="radio-infinite-scroll-{{ rowIndex }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, rowIndex)"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, rowIndex)"
                  #contextMenu
                  (contextmenu)="onRowContextMenu($event, row, column.key, colIndex, rowIndex)"
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, rowIndex)"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    rowIndex === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: rowIndex,
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && config.groupRows">
        <ng-container
          *ngFor="
            let group of grouped
              | sort: sortBy:config
              | search: term:filteredCountSubject:config
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id };
            let rowIndex = index
          "
        >
          <tr>
            <ng-container *ngIf="!groupRowsHeaderTemplate">
              <td [attr.colspan]="columns.length">
                <div>{{ group[0][groupRowsBy] }} ({{ group.length }})</div>
              </td>
            </ng-container>
            <ng-container
              *ngIf="groupRowsHeaderTemplate"
              [ngTemplateOutlet]="groupRowsHeaderTemplate"
              [ngTemplateOutletContext]="{
                total: group.length,
                key: groupRowsBy,
                value: group[0] ? group[0][groupRowsBy] : '',
                group: group,
                index: rowIndex
              }"
            >
            </ng-container>
            <td>
              <span
                class="ngx-icon"
                *ngIf="arrowDefinition"
                [ngClass]="
                  isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                "
                (click)="collapseRow(rowIndex)"
              >
              </span>
            </td>
          </tr>
          <ng-container *ngIf="selectedDetailsTemplateRowId.has(rowIndex)">
            <tr *ngFor="let row of group">
              <td *ngFor="let column of columns">
                {{ row | render: column.key }}
                <!-- TODO allow users to add groupRowsTemplateRef -->
              </td>
              <td></td>
            </tr>
          </ng-container>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody
      *ngIf="data && !config.isLoading && config.rowReorder"
      class="ngx-draggable-row-area"
      cdkDropList
      (cdkDropListDropped)="onDrop($event)"
    >
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ng-container
          *ngFor="
            let row of data
              | sort: sortBy
              | search: term:filteredCountSubject
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
          "
        >
          <tr
            class="ngx-draggable-row"
            cdkDrag
            (cdkDragStarted)="onDragStart($event)"
            [cdkDragStartDelay]="config.reorderDelay || 0"
            cdkDragLockAxis="y"
          >
            <td *ngIf="config.checkboxes">
              <label class="ngx-form-checkbox">
                <input
                  type="checkbox"
                  id="checkbox-draggable-{{ data.indexOf(row) }}"
                  [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                  (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                />
                <em class="ngx-form-icon"></em>
              </label>
            </td>
            <td *ngIf="config.radio">
              <label>
                <input
                  type="radio"
                  id="radio-draggable-{{ data.indexOf(row) }}"
                  name="radio"
                  (change)="onRadioSelect($event, row, data.indexOf(row))"
                />
              </label>
            </td>
            <ng-container *ngFor="let column of columns; let colIndex = index">
              <td
                (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                [class.ngx-table__table-col--selected]="
                  colIndex === selectedCol && !config.selectCell
                "
                [class.ngx-table__table-cell--selected]="
                  colIndex === selectedCol &&
                  data.indexOf(row) === selectedRow &&
                  !config.selectCol &&
                  !config.selectRow
                "
              >
                <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                <ng-container
                  *ngIf="column.cellTemplate"
                  [ngTemplateOutlet]="column.cellTemplate"
                  [ngTemplateOutletContext]="{
                    $implicit: row,
                    rowIndex: data.indexOf(row),
                    column: column
                  }"
                >
                </ng-container>
              </td>
            </ng-container>
          </tr>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody *ngIf="filterCount === 0">
      <tr class="ngx-table__body-empty">
        <ng-container *ngIf="noResultsTemplate" [ngTemplateOutlet]="noResultsTemplate">
        </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!noResultsTemplate">
          <div class="ngx-table__table-no-results">No results</div>
        </td>
      </tr>
    </tbody>
    <tbody *ngIf="config.isLoading">
      <tr class="ngx-table__body-loading">
        <ng-container *ngIf="loadingTemplate" [ngTemplateOutlet]="loadingTemplate"> </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!loadingTemplate">
          <div [style.height.px]="loadingHeight" class="ngx-table__table-loader-wrapper">
            <div class="ngx-table__table-loader"></div>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot *ngIf="summaryTemplate">
      <tr>
        <ng-container
          [ngTemplateOutlet]="summaryTemplate"
          [ngTemplateOutletContext]="{ total: data.length, limit: limit, page: page }"
        >
        </ng-container>
      </tr>
    </tfoot>
  </table>
  <pagination
    [attr.id]="'pagination' + id"
    [id]="id"
    #paginationComponent
    [config]="config"
    [pagination]="pagination"
    (updateRange)="onPagination($event)"
  >
  </pagination>
</div>
`
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ScrollDispatcher
    }, {
      type: StyleService
    }];
  }, {
    configuration: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    pagination: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    toggleRowIndex: [{
      type: Input
    }],
    detailsTemplate: [{
      type: Input
    }],
    summaryTemplate: [{
      type: Input
    }],
    groupRowsHeaderTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    noResultsTemplate: [{
      type: Input
    }],
    loadingTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    rowContextMenu: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    event: [{
      type: Output
    }],
    rowTemplate: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    paginationComponent: [{
      type: ViewChild,
      args: ["paginationComponent"]
    }],
    contextMenu: [{
      type: ViewChild,
      args: ["contextMenu"]
    }],
    table: [{
      type: ViewChild,
      args: ["table"]
    }],
    viewPort: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport]
    }],
    onContextMenuClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var _BaseModule = class _BaseModule {
};
_BaseModule.ɵfac = function BaseModule_Factory(t) {
  return new (t || _BaseModule)();
};
_BaseModule.ɵmod = ɵɵdefineNgModule({
  type: _BaseModule,
  declarations: [
    BaseComponent,
    HeaderComponent,
    PaginationComponent,
    TableTHeadComponent,
    // Pipes
    SearchPipe,
    RenderPipe,
    GlobalSearchPipe,
    SortPipe
  ],
  imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
  exports: [BaseComponent]
});
_BaseModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule]
});
var BaseModule = _BaseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModule, [{
    type: NgModule,
    args: [{
      declarations: [
        BaseComponent,
        HeaderComponent,
        PaginationComponent,
        TableTHeadComponent,
        // Pipes
        SearchPipe,
        RenderPipe,
        GlobalSearchPipe,
        SortPipe
      ],
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
      exports: [BaseComponent]
    }]
  }], null, null);
})();
var _TableModule = class _TableModule {
};
_TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || _TableModule)();
};
_TableModule.ɵmod = ɵɵdefineNgModule({
  type: _TableModule,
  imports: [CommonModule, BaseModule],
  exports: [BaseComponent]
});
_TableModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, BaseModule]
});
var TableModule = _TableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BaseModule],
      exports: [BaseComponent],
      providers: []
    }]
  }], null, null);
})();
export {
  API,
  BaseComponent,
  DefaultConfig,
  Event,
  STYLE,
  THEME,
  TableModule
};
//# sourceMappingURL=ngx-easy-table.js.map
