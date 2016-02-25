declare module cocos2d {
declare class cp  {
}
declare class ccui  {
	static Widget :typeof Widget ;
}
declare class Widget  {
}
declare class cc  {
	static ActionInterval :typeof ActionInterval ;
	static ORIENTATION_PORTRAIT :number;
	static ORIENTATION_PORTRAIT_UPSIDE_DOWN :number;
	static ORIENTATION_LANDSCAPE_LEFT :number;
	static ORIENTATION_LANDSCAPE_RIGHT :number;
	static container :any;
	static each(obj:any,iterator:function,context?:any): any ;
	static extend(target:any,...sources:any): any ;
	static isFunction(obj:any): boolean ;
	static isNumber(obj:any): boolean ;
	static isString(obj:any): boolean ;
	static isArray(obj:any): boolean ;
	static isUndefined(obj:any): boolean ;
	static isObject(obj:any): boolean ;
	static isCrossOrigin(url:string): boolean ;
	static AsyncPool :typeof AsyncPool ;
	static async :typeof async ;
	static path :typeof path ;
	static Loader :typeof Loader ;
	static loader :Loader;
	static formatStr(): string ;
	static sys :typeof sys ;
	static game :typeof game ;
	static view : view ;
	static director :Director;
	static winSize :Size;
	static Class :typeof Class ;
	static defineGetterSetter(proto:any,prop:string,getter:function,setter:function,getterName:string,setterName:string): any ;
	static clone(obj:any): any ;
	static associateWithNative(jsObj:any,superclass:any): any ;
	static KEY :any;
	static FMT_JPG :number;
	static FMT_PNG :number;
	static FMT_TIFF :number;
	static FMT_RAWDATA :number;
	static FMT_WEBP :number;
	static FMT_UNKNOWN :number;
	static getImageFormatByData(imgData:Array<any>): number ;
	static inherits(childCtor:function,parentCtor:function): any ;
	static base(): any ;
	static Point :typeof Point ;
	static p(x:number|Point,y:number): Point ;
	static pointEqualToPoint(point1:Point,point2:Point): boolean ;
	static Size :typeof Size ;
	static size(w:number|Size,h:number): Size ;
	static sizeEqualToSize(size1:Size,size2:Size): boolean ;
	static Rect :typeof Rect ;
	static rect(x:number|Rect,y:number,w:number,h:number): Rect ;
	static rectEqualToRect(rect1:Rect,rect2:Rect): boolean ;
	static rectContainsRect(rect1:Rect,rect2:Rect): boolean ;
	static rectGetMaxX(rect:Rect): number ;
	static rectGetMidX(rect:Rect): number ;
	static rectGetMinX(rect:Rect): number ;
	static rectGetMaxY(rect:Rect): number ;
	static rectGetMidY(rect:Rect): number ;
	static rectGetMinY(rect:Rect): number ;
	static rectContainsPoint(rect:Rect,point:Point): boolean ;
	static rectIntersectsRect(rectA:Rect,rectB:Rect): boolean ;
	static rectOverlapsRect(rectA:Rect,rectB:Rect): boolean ;
	static rectUnion(rectA:Rect,rectB:Rect): Rect ;
	static rectIntersection(rectA:Rect,rectB:Rect): Rect ;
	static saxParser :typeof saxParser ;
	static plistParser : plistParser ;
	static ENGINE_VERSION :string;
	static FIX_ARTIFACTS_BY_STRECHING_TEXEL :number;
	static DIRECTOR_STATS_POSITION :Point;
	static DIRECTOR_FPS_INTERVAL :number;
	static COCOSNODE_RENDER_SUBPIXEL :number;
	static SPRITEBATCHNODE_RENDER_SUBPIXEL :number;
	static OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA :number;
	static TEXTURE_ATLAS_USE_TRIANGLE_STRIP :number;
	static TEXTURE_ATLAS_USE_VAO :number;
	static TEXTURE_NPOT_SUPPORT :number;
	static RETINA_DISPLAY_SUPPORT :number;
	static RETINA_DISPLAY_FILENAME_SUFFIX :string;
	static USE_LA88_LABELS :number;
	static SPRITE_DEBUG_DRAW :number;
	static SPRITEBATCHNODE_DEBUG_DRAW :number;
	static LABELBMFONT_DEBUG_DRAW :number;
	static LABELATLAS_DEBUG_DRAW :number;
	static IS_RETINA_DISPLAY_SUPPORTED :number;
	static DEFAULT_ENGINE :string;
	static ENABLE_STACKABLE_ACTIONS :number;
	static ENABLE_GL_STATE_CACHE :number;
	static $ :typeof $ ;
	static $new(x:string): $ ;
	static INVALID_INDEX :number;
	static PI :number;
	static FLT_MAX :number;
	static FLT_MIN :number;
	static RAD :number;
	static DEG :number;
	static UINT_MAX :number;
	static swap(x:string,y:string,ref:any): any ;
	static lerp(a:number,b:number,r:number): any ;
	static rand(): number ;
	static randomMinus1To1(): number ;
	static random0To1(): number ;
	static degreesToRadians(angle:number): number ;
	static radiansToDegrees(angle:number): number ;
	static radiansToDegress(angle:number): number ;
	static REPEAT_FOREVER :number;
	static nodeDrawSetup(node:Node): any ;
	static enableDefaultGLStates(): any ;
	static disableDefaultGLStates(): any ;
	static incrementGLDraws(addNumber:number): any ;
	static FLT_EPSILON :number;
	static contentScaleFactor(): number ;
	static pointPointsToPixels(points:Point): Point ;
	static pointPixelsToPoints(pixels:Rect): Point ;
	static sizePointsToPixels(sizeInPoints:Size): Size ;
	static sizePixelsToPoints(sizeInPixels:Size): Size ;
	static rectPixelsToPoints(pixel:Rect): Rect ;
	static rectPointsToPixels(point:Rect): Rect ;
	static ONE :number;
	static ZERO :number;
	static SRC_ALPHA :number;
	static SRC_ALPHA_SATURATE :number;
	static SRC_COLOR :number;
	static DST_ALPHA :number;
	static DST_COLOR :number;
	static ONE_MINUS_SRC_ALPHA :number;
	static ONE_MINUS_SRC_COLOR :number;
	static ONE_MINUS_DST_ALPHA :number;
	static ONE_MINUS_DST_COLOR :number;
	static ONE_MINUS_CONSTANT_ALPHA :number;
	static ONE_MINUS_CONSTANT_COLOR :number;
	static LINEAR :number;
	static REPEAT :number;
	static CLAMP_TO_EDGE :number;
	static MIRRORED_REPEAT :number;
	static BLEND_SRC :number;
	static BLEND_DST :number;
	static checkGLErrorDebug(): any ;
	static DEVICE_ORIENTATION_PORTRAIT :number;
	static DEVICE_ORIENTATION_LANDSCAPE_LEFT :number;
	static DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN :number;
	static DEVICE_ORIENTATION_LANDSCAPE_RIGHT :number;
	static DEVICE_MAX_ORIENTATIONS :number;
	static VERTEX_ATTRIB_FLAG_NONE :number;
	static VERTEX_ATTRIB_FLAG_POSITION :number;
	static VERTEX_ATTRIB_FLAG_COLOR :number;
	static VERTEX_ATTRIB_FLAG_TEX_COORDS :number;
	static VERTEX_ATTRIB_FLAG_POS_COLOR_TEX :number;
	static GL_ALL :number;
	static VERTEX_ATTRIB_POSITION :number;
	static VERTEX_ATTRIB_COLOR :number;
	static VERTEX_ATTRIB_TEX_COORDS :number;
	static VERTEX_ATTRIB_MAX :number;
	static UNIFORM_PMATRIX :number;
	static UNIFORM_MVMATRIX :number;
	static UNIFORM_MVPMATRIX :number;
	static UNIFORM_TIME :number;
	static UNIFORM_SINTIME :number;
	static UNIFORM_COSTIME :number;
	static UNIFORM_RANDOM01 :number;
	static UNIFORM_SAMPLER :number;
	static UNIFORM_MAX :number;
	static SHADER_POSITION_TEXTURECOLOR :string;
	static SHADER_POSITION_TEXTURECOLORALPHATEST :string;
	static SHADER_POSITION_COLOR :string;
	static SHADER_POSITION_TEXTURE :string;
	static SHADER_POSITION_TEXTURE_UCOLOR :string;
	static SHADER_POSITION_TEXTUREA8COLOR :string;
	static SHADER_POSITION_UCOLOR :string;
	static SHADER_POSITION_LENGTHTEXTURECOLOR :string;
	static UNIFORM_PMATRIX_S :string;
	static UNIFORM_MVMATRIX_S :string;
	static UNIFORM_MVPMATRIX_S :string;
	static UNIFORM_TIME_S :string;
	static UNIFORM_SINTIME_S :string;
	static UNIFORM_COSTIME_S :string;
	static UNIFORM_RANDOM01_S :string;
	static UNIFORM_SAMPLER_S :string;
	static UNIFORM_ALPHA_TEST_VALUE_S :string;
	static ATTRIBUTE_NAME_COLOR :string;
	static ATTRIBUTE_NAME_POSITION :string;
	static ATTRIBUTE_NAME_TEX_COORD :string;
	static ITEM_SIZE :number;
	static CURRENT_ITEM :number;
	static ZOOM_ACTION_TAG :number;
	static NORMAL_TAG :number;
	static SELECTED_TAG :number;
	static DISABLE_TAG :number;
	static arrayVerifyType(arr:Array<any>,type:function): boolean ;
	static arrayRemoveObject(arr:Array<any>,delObj:any): any ;
	static arrayRemoveArray(arr:Array<any>,minusArr:Array<any>): any ;
	static arrayAppendObjectsToIndex(arr:Array<any>,addObjs:Array<any>,index:number): Array<any> ;
	static copyArray(arr:Array<any>): Array<any> ;
	static Color :typeof Color ;
	static color(r:number|string|Color,g:number,b:number,a?:number): Color ;
	static colorEqual(color1:Color,color2:Color): boolean ;
	static Acceleration :typeof Acceleration ;
	static Vertex2F :typeof Vertex2F ;
	static vertex2(x:number,y:number): Vertex2F ;
	static Vertex3F :typeof Vertex3F ;
	static vertex3(x:number,y:number,z:number): Vertex3F ;
	static Tex2F :typeof Tex2F ;
	static tex2(u:number,v:number): Tex2F ;
	static BlendFunc :typeof BlendFunc ;
	static blendFuncDisable(): BlendFunc ;
	static hexToColor(hex:string): Color ;
	static colorToHex(color:Color): string ;
	static TEXT_ALIGNMENT_LEFT :number;
	static TEXT_ALIGNMENT_CENTER :number;
	static TEXT_ALIGNMENT_RIGHT :number;
	static VERTICAL_TEXT_ALIGNMENT_TOP :number;
	static VERTICAL_TEXT_ALIGNMENT_CENTER :number;
	static VERTICAL_TEXT_ALIGNMENT_BOTTOM :number;
	static FontDefinition :typeof FontDefinition ;
	static Touches :any;
	static ContainerStrategy :typeof ContainerStrategy ;
	static ContentStrategy :typeof ContentStrategy ;
	static ResolutionPolicy :typeof ResolutionPolicy ;
	static screen :typeof screen ;
	static visibleRect :typeof visibleRect ;
	static UIInterfaceOrientationLandscapeLeft :number;
	static UIInterfaceOrientationLandscapeRight :number;
	static UIInterfaceOrientationPortraitUpsideDown :number;
	static UIInterfaceOrientationPortrait :number;
	static inputManager :typeof inputManager ;
	static Quad2 :typeof Quad2 ;
	static Quad3 :typeof Quad3 ;
	static V3F_C4B_T2F :typeof V3F_C4B_T2F ;
	static V3F_C4B_T2F_Quad :typeof V3F_C4B_T2F_Quad ;
	static V3F_C4B_T2F_QuadZero(): V3F_C4B_T2F_Quad ;
	static V3F_C4B_T2F_QuadCopy(sourceQuad:V3F_C4B_T2F_Quad): V3F_C4B_T2F_Quad ;
	static V3F_C4B_T2F_QuadsCopy(sourceQuads:Array<any>): Array<any> ;
	static V2F_C4B_T2F :typeof V2F_C4B_T2F ;
	static V2F_C4B_T2F_Triangle :typeof V2F_C4B_T2F_Triangle ;
	static AffineTransform :typeof AffineTransform ;
	static affineTransformMake(a:number,b:number,c:number,d:number,tx:number,ty:number): AffineTransform ;
	static pointApplyAffineTransform(point:Point|number,transOrY:AffineTransform|number,t:AffineTransform): Point ;
	static sizeApplyAffineTransform(size:Size,t:AffineTransform): Size ;
	static affineTransformMakeIdentity(): AffineTransform ;
	static affineTransformIdentity(): AffineTransform ;
	static rectApplyAffineTransform(rect:Rect,anAffineTransform:AffineTransform): Rect ;
	static affineTransformTranslate(t:AffineTransform,tx:number,ty:number): AffineTransform ;
	static affineTransformScale(t:AffineTransform,sx:number,sy:number): AffineTransform ;
	static affineTransformRotate(aTransform:AffineTransform,anAngle:number): AffineTransform ;
	static affineTransformConcat(t1:AffineTransform,t2:AffineTransform): AffineTransform ;
	static affineTransformConcatIn(t1:AffineTransform,t2:AffineTransform): AffineTransform ;
	static affineTransformEqualToTransform(t1:AffineTransform,t2:AffineTransform): boolean ;
	static affineTransformInvert(t:AffineTransform): AffineTransform ;
	static POINT_EPSILON :number;
	static pNeg(point:Point): Point ;
	static pAdd(v1:Point,v2:Point): Point ;
	static pSub(v1:Point,v2:Point): Point ;
	static pMult(point:Point,floatVar:number): Point ;
	static pMidpoint(v1:Point,v2:Point): Point ;
	static pDot(v1:Point,v2:Point): number ;
	static pCross(v1:Point,v2:Point): number ;
	static pPerp(point:Point): Point ;
	static pRPerp(point:Point): Point ;
	static pProject(v1:Point,v2:Point): Point ;
	static pRotate(v1:Point,v2:Point): Point ;
	static pUnrotate(v1:Point,v2:Point): Point ;
	static pLengthSQ(v:Point): number ;
	static pDistanceSQ(point1:Point,point2:Point): number ;
	static pLength(v:Point): number ;
	static pDistance(v1:Point,v2:Point): number ;
	static pNormalize(v:Point): Point ;
	static pForAngle(a:number): Point ;
	static pToAngle(v:Point): number ;
	static clampf(value:number,min_inclusive:number,max_inclusive:number): number ;
	static pClamp(p:Point,min_inclusive:number,max_inclusive:number): Point ;
	static pFromSize(s:Size): Point ;
	static pCompOp(p:Point,opFunc:function): Point ;
	static pLerp(a:Point,b:Point,alpha:number): Point ;
	static pFuzzyEqual(a:Point,b:Point,variance:number): boolean ;
	static pCompMult(a:Point,b:Point): Point ;
	static pAngleSigned(a:Point,b:Point): number ;
	static pAngle(a:Point,b:Point): number ;
	static pRotateByAngle(v:Point,pivot:Point,angle:number): Point ;
	static pLineIntersect(A:Point,B:Point,C:Point,D:Point,retP:Point): boolean ;
	static pSegmentIntersect(A:Point,B:Point,C:Point,D:Point): boolean ;
	static pIntersectPoint(A:Point,B:Point,C:Point,D:Point): Point ;
	static pSameAs(A:Point,B:Point): boolean ;
	static pZeroIn(v:Point): any ;
	static pIn(v1:Point,v2:Point): any ;
	static pMultIn(point:Point,floatVar:number): any ;
	static pSubIn(v1:Point,v2:Point): any ;
	static pAddIn(v1:Point,v2:Point): any ;
	static pNormalizeIn(v:Point): any ;
	static vertexLineToPolygon(points:Float32Array,stroke:number,vertices:Float32Array,offset:number,nuPoints:number): any ;
	static vertexLineIntersect(Ax:number,Ay:number,Bx:number,By:number,Cx:number,Cy:number,Dx:number,Dy:number): any ;
	static vertexListIsClockwise(verts:Array<any>): boolean ;
	static CGAffineToGL(trans:AffineTransform,mat:any): any ;
	static GLToCGAffine(mat:any,trans:AffineTransform): any ;
	static Event :typeof Event ;
	static EventCustom :typeof EventCustom ;
	static EventMouse :typeof EventMouse ;
	static EventTouch :typeof EventTouch ;
	static EventFocus :typeof EventFocus ;
	static Touch :typeof Touch ;
	static EventListener :typeof EventListener ;
	static eventManager :typeof eventManager ;
	static NODE_TAG_INVALID :number;
	static s_globalOrderOfArrival :any;
	static Node :typeof Node ;
	static AtlasNode :typeof AtlasNode ;
	static ALIGN_CENTER :number;
	static ALIGN_TOP :number;
	static ALIGN_TOP_RIGHT :number;
	static ALIGN_RIGHT :number;
	static ALIGN_BOTTOM_RIGHT :number;
	static ALIGN_BOTTOM :number;
	static ALIGN_BOTTOM_LEFT :number;
	static ALIGN_LEFT :number;
	static ALIGN_TOP_LEFT :number;
	static Texture2D :typeof Texture2D ;
	static textureCache :typeof textureCache ;
	static TextureAtlas :typeof TextureAtlas ;
	static Scene :typeof Scene ;
	static LoaderScene :typeof LoaderScene ;
	init(...p:any): boolean ;
	onEnter(): any ;
	onExit(): any ;
	initWithResources(resources:Array<any>,cb:function|string,target:any): any ;
	static Layer :typeof Layer ;
	static LayerColor :typeof LayerColor ;
	static LayerGradient :typeof LayerGradient ;
	static LayerMultiplex :typeof LayerMultiplex ;
	static Sprite :typeof Sprite ;
	static AnimationFrame :typeof AnimationFrame ;
	static Animation :typeof Animation ;
	static animationCache :typeof animationCache ;
	static SpriteFrame :typeof SpriteFrame ;
	static spriteFrameCache :typeof spriteFrameCache ;
	static SpriteBatchNode :typeof SpriteBatchNode ;
	static configuration :typeof configuration ;
	static Director :typeof Director ;
	static defaultFPS :number;
	static Camera :typeof Camera ;
	static PRIORITY_NON_SYSTEM :number;
	static ListEntry :typeof ListEntry ;
	static HashUpdateEntry :typeof HashUpdateEntry ;
	static HashTimerEntry :typeof HashTimerEntry ;
	static Timer :typeof Timer ;
	static Scheduler :typeof Scheduler ;
	static PI2 :number;
	static DrawingPrimitiveCanvas :typeof DrawingPrimitiveCanvas ;
	static LabelTTF :typeof LabelTTF ;
	static HashElement :typeof HashElement ;
	static ActionManager :typeof ActionManager ;
	static math :typeof math ;
	static kmMat4Identity(pOut:any): any ;
	static kmMat4Inverse(): any ;
	static kmMat4Multiply(): any ;
	static kmMat4Assign(): any ;
	static kmMat4Translation(): any ;
	static kmMat4PerspectiveProjection(): any ;
	static kmMat4OrthographicProjection(): any ;
	static kmMat4LookAt(): any ;
	static kmMat4RotationAxisAngle(): any ;
	static SHADER_POSITION_UCOLOR_FRAG :string;
	static SHADER_POSITION_UCOLOR_VERT :string;
	static SHADER_POSITION_COLOR_FRAG :string;
	static SHADER_POSITION_COLOR_VERT :string;
	static SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG :string;
	static SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT :string;
	static SHADER_POSITION_TEXTURE_FRAG :string;
	static SHADER_POSITION_TEXTURE_VERT :string;
	static SHADER_POSITION_TEXTURE_UCOLOR_FRAG :string;
	static SHADER_POSITION_TEXTURE_UCOLOR_VERT :string;
	static SHADER_POSITION_TEXTURE_A8COLOR_FRAG :string;
	static SHADER_POSITION_TEXTURE_A8COLOR_VERT :string;
	static SHADER_POSITION_TEXTURE_COLOR_FRAG :string;
	static SHADER_POSITION_TEXTURE_COLOR_VERT :string;
	static SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG :string;
	static SHADEREX_SWITCHMASK_FRAG :string;
	static shaderCache :typeof shaderCache ;
	static GLProgram :typeof GLProgram ;
	static setProgram(node:Node,program:GLProgram): any ;
	static glInvalidateStateCache(): any ;
	static glUseProgram(program:number): any ;
	static glDeleteProgram(program:number): any ;
	static glBlendFunc(sfactor:number,dfactor:number): any ;
	static setBlending(sfactor:number,dfactor:number): any ;
	static glBlendFuncForParticle(sfactor:number,dfactor:number): any ;
	static glBlendResetToCache(): any ;
	static setProjectionMatrixDirty(): any ;
	static glEnableVertexAttribs(flags:number): any ;
	static glBindTexture2D(textureId:Texture2D): any ;
	static glBindTexture2DN(textureUnit:number,textureId:Texture2D): any ;
	static glDeleteTexture(textureId:number): any ;
	static glDeleteTextureN(textureUnit:number,textureId:number): any ;
	static glBindVAO(vaoId:number): any ;
	static glEnable(flags:number): any ;
	static Audio :any;
	static audioEngine :typeof audioEngine ;
	static IMAGE_FORMAT_JPEG :number;
	static IMAGE_FORMAT_PNG :number;
	static IMAGE_FORMAT_RAWDATA :number;
	static NextPOT(x:number): number ;
	static RenderTexture :typeof RenderTexture ;
	static MotionStreak :typeof MotionStreak ;
	static NodeGrid : NodeGrid ;
	static stencilBits :number;
	static ClippingNode :typeof ClippingNode ;
	static GridBase :typeof GridBase ;
	static Grid3D :typeof Grid3D ;
	static TiledGrid3D :typeof TiledGrid3D ;
	static Grabber :typeof Grabber ;
	constructor(binaryData:any): any ;
	grab(texture:Texture2D): any ;
	beforeRender(texture:Texture2D): any ;
	afterRender(texture:Texture2D): any ;
	destroy(): any ;
	static v2fzero(): any ;
	static DrawNode :typeof DrawNode ;
	static ACTION_TAG_INVALID :number;
	static Action :typeof Action ;
	static action(): Action ;
	static FiniteTimeAction :typeof FiniteTimeAction ;
	static Speed :typeof Speed ;
	static speed(action:ActionInterval,speed:number): Speed ;
	static Follow :typeof Follow ;
	static follow(followedNode:Node,rect:Rect): Follow|null ;
	static actionInterval(d:number): ActionInterval ;
	static Sequence :typeof Sequence ;
	static sequence(tempArray:Array<any>|FiniteTimeAction): Sequence ;
	static Repeat :typeof Repeat ;
	static repeat(action:FiniteTimeAction,times:number): Repeat ;
	static RepeatForever :typeof RepeatForever ;
	static repeatForever(action:FiniteTimeAction): RepeatForever ;
	static Spawn :typeof Spawn ;
	static spawn(tempArray:Array<any>|FiniteTimeAction): FiniteTimeAction ;
	static RotateTo :typeof RotateTo ;
	static rotateTo(duration:number,deltaAngleX:number,deltaAngleY?:number): RotateTo ;
	static RotateBy :typeof RotateBy ;
	static rotateBy(duration:number,deltaAngleX:number,deltaAngleY?:number): RotateBy ;
	static MoveBy :typeof MoveBy ;
	static moveBy(duration:number,deltaPos:Point|number,deltaY:number): MoveBy ;
	static MoveTo :typeof MoveTo ;
	static moveTo(duration:number,position:Point,y:number): MoveBy ;
	static SkewTo :typeof SkewTo ;
	static skewTo(t:number,sx:number,sy:number): SkewTo ;
	static SkewBy :typeof SkewBy ;
	static skewBy(t:number,sx:number,sy:number): SkewBy ;
	static JumpBy :typeof JumpBy ;
	static jumpBy(duration:number,position:Point|number,y?:number,height:number,jumps:number): JumpBy ;
	static JumpTo :typeof JumpTo ;
	static jumpTo(duration:number,position:Point|number,y?:number,height:number,jumps:number): JumpTo ;
	static bezierAt(a:number,b:number,c:number,d:number,t:number): number ;
	static BezierBy :typeof BezierBy ;
	static bezierBy(t:number,c:Array<any>): BezierBy ;
	static BezierTo :typeof BezierTo ;
	static bezierTo(t:number,c:Array<any>): BezierTo ;
	static ScaleTo :typeof ScaleTo ;
	static scaleTo(duration:number,sx:number,sy?:number): ScaleTo ;
	static ScaleBy :typeof ScaleBy ;
	static scaleBy(duration:number,sx:number,sy?:number|null): ScaleBy ;
	static Blink :typeof Blink ;
	static blink(duration:number,blinks:any): Blink ;
	static FadeTo :typeof FadeTo ;
	static fadeTo(duration:number,opacity:number): FadeTo ;
	static FadeIn :typeof FadeIn ;
	static fadeIn(duration:number): FadeIn ;
	static FadeOut :typeof FadeOut ;
	static fadeOut(d:number): FadeOut ;
	static TintTo :typeof TintTo ;
	static tintTo(duration:number,red:number,green:number,blue:number): TintTo ;
	static TintBy :typeof TintBy ;
	static tintBy(duration:number,deltaRed:number,deltaGreen:number,deltaBlue:number): TintBy ;
	static DelayTime :typeof DelayTime ;
	static delayTime(d:number): DelayTime ;
	static ReverseTime :typeof ReverseTime ;
	static reverseTime(action:FiniteTimeAction): ReverseTime ;
	static Animate :typeof Animate ;
	static animate(animation:Animation): Animate ;
	static TargetedAction :typeof TargetedAction ;
	static targetedAction(target:Node,action:FiniteTimeAction): TargetedAction ;
	static ActionInstant :typeof ActionInstant ;
	static Show :typeof Show ;
	static show(): Show ;
	static Hide :typeof Hide ;
	static hide(): Hide ;
	static ToggleVisibility :typeof ToggleVisibility ;
	static toggleVisibility(): ToggleVisibility ;
	static RemoveSelf :typeof RemoveSelf ;
	update(dt:number): any ;
	reverse(): Action ;
	static removeSelf(isNeedCleanUp?:boolean): RemoveSelf ;
	static FlipX :typeof FlipX ;
	static flipX(flip:boolean): FlipX ;
	static FlipY :typeof FlipY ;
	static flipY(flip:boolean): FlipY ;
	static Place :typeof Place ;
	static place(pos:Point|number,y?:number): Place ;
	static CallFunc :typeof CallFunc ;
	static callFunc(selector:function,selectorTarget?:any,data?:any): CallFunc ;
	static ActionEase :typeof ActionEase ;
	static actionEase(action:ActionInterval): ActionEase ;
	static EaseRateAction :typeof EaseRateAction ;
	static easeRateAction(action:ActionInterval,rate:number): EaseRateAction ;
	static EaseIn :typeof EaseIn ;
	static easeIn(rate:number): any ;
	static EaseOut :typeof EaseOut ;
	static easeOut(rate:number): any ;
	static EaseInOut :typeof EaseInOut ;
	static easeInOut(rate:number): any ;
	static EaseExponentialIn :typeof EaseExponentialIn ;
	static easeExponentialIn(): any ;
	static EaseExponentialOut :typeof EaseExponentialOut ;
	static easeExponentialOut(): any ;
	static EaseExponentialInOut :typeof EaseExponentialInOut ;
	static easeExponentialInOut(): any ;
	static EaseSineIn :typeof EaseSineIn ;
	static easeSineIn(): any ;
	static EaseSineOut :typeof EaseSineOut ;
	static easeSineOut(): any ;
	static EaseSineInOut :typeof EaseSineInOut ;
	static easeSineInOut(): any ;
	static EaseElastic :typeof EaseElastic ;
	static EaseElasticIn :typeof EaseElasticIn ;
	static easeElasticIn(period?:number): any ;
	static EaseElasticOut :typeof EaseElasticOut ;
	static easeElasticOut(period?:number): any ;
	static EaseElasticInOut :typeof EaseElasticInOut ;
	static easeElasticInOut(period?:number): any ;
	static EaseBounce :typeof EaseBounce ;
	static EaseBounceIn :typeof EaseBounceIn ;
	static easeBounceIn(): any ;
	static EaseBounceOut :typeof EaseBounceOut ;
	static easeBounceOut(): any ;
	static EaseBounceInOut :typeof EaseBounceInOut ;
	static easeBounceInOut(): any ;
	static EaseBackIn :typeof EaseBackIn ;
	static easeBackIn(): any ;
	static EaseBackOut :typeof EaseBackOut ;
	static easeBackOut(): any ;
	static EaseBackInOut :typeof EaseBackInOut ;
	static easeBackInOut(): any ;
	static EaseBezierAction :typeof EaseBezierAction ;
	static easeBezierAction(p0:number,p1:number,p2:number,p3:number): any ;
	static EaseQuadraticActionIn :typeof EaseQuadraticActionIn ;
	static easeQuadraticActionIn(): any ;
	static EaseQuadraticActionOut :typeof EaseQuadraticActionOut ;
	static easeQuadraticActionOut(): any ;
	static EaseQuadraticActionInOut :typeof EaseQuadraticActionInOut ;
	static easeQuadraticActionInOut(): any ;
	static EaseQuarticActionIn :typeof EaseQuarticActionIn ;
	static easeQuarticActionIn(): any ;
	static EaseQuarticActionOut :typeof EaseQuarticActionOut ;
	static easeQuarticActionOut(): any ;
	static EaseQuarticActionInOut :typeof EaseQuarticActionInOut ;
	static easeQuarticActionInOut(): any ;
	static EaseQuinticActionIn :typeof EaseQuinticActionIn ;
	static easeQuinticActionIn(): any ;
	static EaseQuinticActionOut :typeof EaseQuinticActionOut ;
	static easeQuinticActionOut(): any ;
	static EaseQuinticActionInOut :typeof EaseQuinticActionInOut ;
	static easeQuinticActionInOut(): any ;
	static EaseCircleActionIn :typeof EaseCircleActionIn ;
	static easeCircleActionIn(): any ;
	static EaseCircleActionOut :typeof EaseCircleActionOut ;
	static easeCircleActionOut(): any ;
	static EaseCircleActionInOut :typeof EaseCircleActionInOut ;
	static easeCircleActionInOut(): any ;
	static EaseCubicActionIn :typeof EaseCubicActionIn ;
	static easeCubicActionIn(): any ;
	static EaseCubicActionOut :typeof EaseCubicActionOut ;
	static easeCubicActionOut(): any ;
	static EaseCubicActionInOut :typeof EaseCubicActionInOut ;
	static easeCubicActionInOut(): any ;
	static cardinalSplineAt(p0:Point,p1:Point,p2:Point,p3:Point,tension:number,t:number): Point ;
	static reverseControlPoints(): Array<any> ;
	static cloneControlPoints(controlPoints:any): Array<any> ;
	static copyControlPoints(controlPoints:any): Array<any> ;
	static getControlPointAt(controlPoints:Array<any>,pos:number): Array<any> ;
	static reverseControlPointsInline(controlPoints:any): any ;
	static CardinalSplineTo :typeof CardinalSplineTo ;
	static cardinalSplineTo(duration:number,points:Array<any>,tension:number): CardinalSplineTo ;
	static CardinalSplineBy :typeof CardinalSplineBy ;
	static cardinalSplineBy(duration:number,points:Array<any>,tension:number): CardinalSplineBy ;
	static CatmullRomTo :typeof CatmullRomTo ;
	static catmullRomTo(dt:number,points:Array<any>): CatmullRomTo ;
	static CatmullRomBy :typeof CatmullRomBy ;
	initWithDuration(...p:any): any ;
	static catmullRomBy(dt:number,points:Array<any>): any ;
	static ActionTweenDelegate :typeof ActionTweenDelegate ;
	static ActionTween :typeof ActionTween ;
	static actionTween(duration:number,key:string,from:number,to:number): ActionTween ;
	static ActionCamera :typeof ActionCamera ;
	static OrbitCamera :typeof OrbitCamera ;
	static orbitCamera(t:number,radius:number,deltaRadius:number,angleZ:number,deltaAngleZ:number,angleX:number,deltaAngleX:number): OrbitCamera ;
	static GridAction :typeof GridAction ;
	static gridAction(duration:number,gridSize:Size): GridAction ;
	static Grid3DAction :typeof Grid3DAction ;
	static grid3DAction(duration:number,gridSize:Size): Grid3DAction ;
	static TiledGrid3DAction :typeof TiledGrid3DAction ;
	static tiledGrid3DAction(duration:number,gridSize:Size): TiledGrid3DAction ;
	static StopGrid :typeof StopGrid ;
	static stopGrid(): StopGrid ;
	static ReuseGrid :typeof ReuseGrid ;
	static reuseGrid(times:number): ReuseGrid ;
	static Waves3D :typeof Waves3D ;
	static waves3D(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	static FlipX3D :typeof FlipX3D ;
	static flipX3D(duration:number): FlipX3D ;
	static FlipY3D :typeof FlipY3D ;
	static flipY3D(duration:number): FlipY3D ;
	static Lens3D :typeof Lens3D ;
	static lens3D(duration:number,gridSize:Size,position:Point,radius:number): Lens3D ;
	static Ripple3D :typeof Ripple3D ;
	static ripple3D(duration:number,gridSize:Size,position:Point,radius:number,waves:number,amplitude:number): Ripple3D ;
	static Shaky3D :typeof Shaky3D ;
	static shaky3D(duration:number,gridSize:Size,range:number,shakeZ:boolean): Shaky3D ;
	static Liquid :typeof Liquid ;
	static liquid(duration:number,gridSize:Size,waves:number,amplitude:number): Liquid ;
	static Waves :typeof Waves ;
	static waves(duration:number,gridSize:Size,waves:number,amplitude:number,horizontal:boolean,vertical:boolean): Waves ;
	static Twirl :typeof Twirl ;
	static twirl(duration:number,gridSize:Size,position:Point,twirls:number,amplitude:number): Twirl ;
	static ShakyTiles3D :typeof ShakyTiles3D ;
	static shakyTiles3D(duration:number,gridSize:Size,range:number,shakeZ:boolean): ShakyTiles3D ;
	static ShatteredTiles3D :typeof ShatteredTiles3D ;
	static shatteredTiles3D(duration:number,gridSize:Size,range:number,shatterZ:boolean): ShatteredTiles3D ;
	static Tile :typeof Tile ;
	static ShuffleTiles :typeof ShuffleTiles ;
	static shuffleTiles(duration:number,gridSize:Size,seed:number): ShuffleTiles ;
	static FadeOutTRTiles :typeof FadeOutTRTiles ;
	static fadeOutTRTiles(duration:any,gridSize:any): FadeOutTRTiles ;
	static FadeOutBLTiles :typeof FadeOutBLTiles ;
	static fadeOutBLTiles(duration:any,gridSize:any): FadeOutBLTiles ;
	static FadeOutUpTiles :typeof FadeOutUpTiles ;
	static fadeOutUpTiles(duration:number,gridSize:Size): FadeOutUpTiles ;
	static FadeOutDownTiles :typeof FadeOutDownTiles ;
	static fadeOutDownTiles(duration:number,gridSize:Size): FadeOutDownTiles ;
	static TurnOffTiles :typeof TurnOffTiles ;
	static turnOffTiles(duration:number,gridSize:Size,seed?:number|null): TurnOffTiles ;
	static WavesTiles3D :typeof WavesTiles3D ;
	static wavesTiles3D(duration:number,gridSize:Size,waves:number,amplitude:number): WavesTiles3D ;
	static JumpTiles3D :typeof JumpTiles3D ;
	static jumpTiles3D(duration:number,gridSize:Size,numberOfJumps:number,amplitude:number): JumpTiles3D ;
	static SplitRows :typeof SplitRows ;
	static splitRows(duration:number,rows:number): SplitRows ;
	static SplitCols :typeof SplitCols ;
	static splitCols(duration:number,cols:number): SplitCols ;
	static PageTurn3D :typeof PageTurn3D ;
	static pageTurn3D(duration:number,gridSize:Size): PageTurn3D ;
	static ProgressTimer :typeof ProgressTimer ;
	static ProgressTo :typeof ProgressTo ;
	static progressTo(duration:number,percent:number): ProgressTo ;
	static ProgressFromTo :typeof ProgressFromTo ;
	static progressFromTo(duration:number,fromPercentage:number,toPercentage:number): ProgressFromTo ;
	static SCENE_FADE :number;
	static TRANSITION_ORIENTATION_LEFT_OVER :number;
	static TRANSITION_ORIENTATION_RIGHT_OVER :number;
	static TRANSITION_ORIENTATION_UP_OVER :number;
	static TRANSITION_ORIENTATION_DOWN_OVER :number;
	static TransitionScene :typeof TransitionScene ;
	static TransitionSceneOriented :typeof TransitionSceneOriented ;
	static TransitionRotoZoom :typeof TransitionRotoZoom ;
	static TransitionJumpZoom :typeof TransitionJumpZoom ;
	static TransitionMoveInL :typeof TransitionMoveInL ;
	static TransitionMoveInR :typeof TransitionMoveInR ;
	static TransitionMoveInT :typeof TransitionMoveInT ;
	static TransitionMoveInB :typeof TransitionMoveInB ;
	static ADJUST_FACTOR :number;
	static TransitionSlideInL :typeof TransitionSlideInL ;
	static TransitionSlideInR :typeof TransitionSlideInR ;
	static TransitionSlideInB :typeof TransitionSlideInB ;
	static TransitionSlideInT :typeof TransitionSlideInT ;
	static TransitionShrinkGrow :typeof TransitionShrinkGrow ;
	static TransitionFlipX :typeof TransitionFlipX ;
	static TransitionFlipY :typeof TransitionFlipY ;
	static TransitionFlipAngular :typeof TransitionFlipAngular ;
	static TransitionZoomFlipX :typeof TransitionZoomFlipX ;
	static TransitionZoomFlipY :typeof TransitionZoomFlipY ;
	static TransitionZoomFlipAngular :typeof TransitionZoomFlipAngular ;
	static TransitionFade :typeof TransitionFade ;
	static TransitionCrossFade :typeof TransitionCrossFade ;
	static TransitionTurnOffTiles :typeof TransitionTurnOffTiles ;
	static TransitionSplitCols :typeof TransitionSplitCols ;
	static TransitionSplitRows :typeof TransitionSplitRows ;
	static TransitionFadeTR :typeof TransitionFadeTR ;
	static TransitionFadeBL :typeof TransitionFadeBL ;
	static TransitionFadeUp :typeof TransitionFadeUp ;
	static TransitionFadeDown :typeof TransitionFadeDown ;
	static SCENE_RADIAL :number;
	static TransitionProgress :typeof TransitionProgress ;
	static TransitionProgressRadialCCW :typeof TransitionProgressRadialCCW ;
	static TransitionProgressRadialCW :typeof TransitionProgressRadialCW ;
	static TransitionProgressHorizontal :typeof TransitionProgressHorizontal ;
	static TransitionProgressVertical :typeof TransitionProgressVertical ;
	static TransitionProgressInOut :typeof TransitionProgressInOut ;
	static TransitionProgressOutIn :typeof TransitionProgressOutIn ;
	static TransitionPageTurn :typeof TransitionPageTurn ;
	static LabelAtlas :typeof LabelAtlas ;
	static LABEL_AUTOMATIC_WIDTH :number;
	static LabelBMFont :typeof LabelBMFont ;
	static Codec :typeof Codec ;
	static unzip(input:Array<any>): string ;
	static unzipBase64(input:string): string ;
	static unzipBase64AsArray(input:string,bytes:number): Array<any> ;
	static unzipAsArray(input:Array<any>,bytes:number): Array<any> ;
	static StringToArray(input:string): Array<any> ;
	static Particle :typeof Particle ;
	static ParticleSystem :typeof ParticleSystem ;
	static ParticleFire :typeof ParticleFire ;
	static ParticleFireworks :typeof ParticleFireworks ;
	static ParticleSun :typeof ParticleSun ;
	static ParticleGalaxy :typeof ParticleGalaxy ;
	static ParticleFlower :typeof ParticleFlower ;
	static ParticleMeteor :typeof ParticleMeteor ;
	static ParticleSpiral :typeof ParticleSpiral ;
	static ParticleExplosion :typeof ParticleExplosion ;
	static ParticleSmoke :typeof ParticleSmoke ;
	static ParticleSnow :typeof ParticleSnow ;
	static ParticleRain :typeof ParticleRain ;
	static PARTICLE_DEFAULT_CAPACITY :number;
	static ParticleBatchNode :typeof ParticleBatchNode ;
	static IMEKeyboardNotificationInfo(begin:Rect,end:Rect,duration:number): any ;
	static IMEDelegate :typeof IMEDelegate ;
	static imeDispatcher :typeof imeDispatcher ;
	static TextFieldDelegate :typeof TextFieldDelegate ;
	static TextFieldTTF :typeof TextFieldTTF ;
	static MenuItem :typeof MenuItem ;
	static MenuItemLabel :typeof MenuItemLabel ;
	static MenuItemAtlasFont :typeof MenuItemAtlasFont ;
	static MenuItemFont :typeof MenuItemFont ;
	static MenuItemSprite :typeof MenuItemSprite ;
	static MenuItemImage :typeof MenuItemImage ;
	static MenuItemToggle :typeof MenuItemToggle ;
	static MENU_STATE_WAITING :number;
	static MENU_STATE_TRACKING_TOUCH :number;
	static MENU_HANDLER_PRIORITY :number;
	static DEFAULT_PADDING :number;
	static Menu :typeof Menu ;
	static TGA_OK :number;
	static TGA_ERROR_FILE_OPEN :number;
	static TGA_ERROR_READING_FILE :number;
	static TGA_ERROR_INDEXED_COLOR :number;
	static TGA_ERROR_MEMORY :number;
	static TGA_ERROR_COMPRESSED_FILE :number;
	static ImageTGA :typeof ImageTGA ;
	static tgaLoadHeader(buffer:Array<any>,bufSize:number,psInfo:ImageTGA): boolean ;
	static tgaLoadImageData(buffer:Array<any>,bufSize:number,psInfo:ImageTGA): boolean ;
	static tgaRGBtogreyscale(psInfo:ImageTGA): any ;
	static tgaDestroy(psInfo:ImageTGA): any ;
	static tgaLoadRLEImageData(buffer:any,bufSize:any,psInfo:any): boolean ;
	static tgaFlipImage(psInfo:ImageTGA): any ;
	static BinaryStreamReader :typeof BinaryStreamReader ;
	setBinaryData(binaryData:any): any ;
	getBinaryData(): any ;
	static TMX_ORIENTATION_ORTHO :number;
	static TMX_ORIENTATION_HEX :number;
	static TMX_ORIENTATION_ISO :number;
	static TMXTiledMap :typeof TMXTiledMap ;
	static TMX_PROPERTY_NONE :number;
	static TMX_PROPERTY_MAP :number;
	static TMX_PROPERTY_LAYER :number;
	static TMX_PROPERTY_OBJECTGROUP :number;
	static TMX_PROPERTY_OBJECT :number;
	static TMX_PROPERTY_TILE :number;
	static TMX_TILE_HORIZONTAL_FLAG :number;
	static TMX_TILE_VERTICAL_FLAG :number;
	static TMX_TILE_DIAGONAL_FLAG :number;
	static TMX_TILE_FLIPPED_ALL :number;
	static TMX_TILE_FLIPPED_MASK :number;
	static TMXLayerInfo :typeof TMXLayerInfo ;
	static TMXTilesetInfo :typeof TMXTilesetInfo ;
	static TMXMapInfo :typeof TMXMapInfo ;
	static TMXObjectGroup :typeof TMXObjectGroup ;
	static TMXLayer :typeof TMXLayer ;
	static PointObject :typeof PointObject ;
	static ParallaxNode :typeof ParallaxNode ;
}
declare class ActionInterval  {
	constructor(d:number): any ;
	constructor(d:number): any ;
	getElapsed(): number ;
	initWithDuration(...p:any): boolean ;
	isDone(): boolean ;
	clone(): ActionInterval ;
	easing(easeObj:any): ActionInterval ;
	step(dt:number): any ;
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	setAmplitudeRate(amp:number): any ;
	getAmplitudeRate(): number ;
	speed(speed:any): Action ;
	getSpeed(): number ;
	setSpeed(speed:number): ActionInterval ;
	repeat(times:any): ActionInterval ;
	repeatForever(): ActionInterval ;
	static create(...p:any): any ;
}
declare class AsyncPool  {
	constructor(srcObj:any,limit:number,iterator:function,onEnd:function,target:any): any ;
}
declare class async  {
	static series(tasks:any,cb?:function,target?:any): AsyncPool ;
	static parallel(tasks:any,cb:function,target?:any): AsyncPool ;
	static waterfall(tasks:any,cb:function,target?:any): AsyncPool ;
	static map(tasks:any,iterator:any,callback?:function,target?:any): AsyncPool ;
	static mapLimit(tasks:any,limit:number,iterator:function,cb:function,target?:any): any ;
}
declare class path  {
	static join(): string ;
	static extname(pathStr:string): any ;
	static mainFileName(fileName:string): string ;
	static basename(pathStr:string,extname?:string): any ;
	static dirname(pathStr:string): any ;
	static changeExtname(pathStr:string,extname?:string): string ;
	static changeBasename(pathStr:string,basename:string,isSameExt?:boolean): string ;
}
declare class Loader  {
	resPath :string;
	audioPath :string;
	cache :any;
	getXMLHttpRequest(): XMLHttpRequest ;
	loadJs(baseDir?:string,jsList:Array<any>,cb?:function): any ;
	loadJsWithImg(baseDir?:string,jsList:Array<any>,cb?:function): any ;
	loadTxt(url:string,cb?:function): any ;
	loadJson(url:string,cb?:function): any ;
	loadImg(url:string,option?:any,callback:function): Image ;
	getUrl(basePath:string,url?:string): any ;
	load(resources:string,option?:function,loadCallback?:any): AsyncPool ;
	loadAliases(url:string,callback?:function): any ;
	register(extNames:string,loader:function): any ;
	getRes(url:any): any ;
	release(url:any): any ;
	releaseAll(): any ;
}
declare class sys  {
	static LANGUAGE_ENGLISH :number;
	static LANGUAGE_CHINESE :number;
	static LANGUAGE_FRENCH :number;
	static LANGUAGE_ITALIAN :number;
	static LANGUAGE_GERMAN :number;
	static LANGUAGE_SPANISH :number;
	static LANGUAGE_DUTCH :number;
	static LANGUAGE_RUSSIAN :number;
	static LANGUAGE_KOREAN :number;
	static LANGUAGE_JAPANESE :number;
	static LANGUAGE_HUNGARIAN :number;
	static LANGUAGE_PORTUGUESE :number;
	static LANGUAGE_ARABIC :number;
	static LANGUAGE_NORWEGIAN :number;
	static LANGUAGE_POLISH :number;
	static LANGUAGE_UNKNOWN :number;
	static OS_IOS :string;
	static OS_ANDROID :string;
	static OS_WINDOWS :string;
	static OS_MARMALADE :string;
	static OS_LINUX :string;
	static OS_BADA :string;
	static OS_BLACKBERRY :string;
	static OS_OSX :string;
	static OS_WP8 :string;
	static OS_WINRT :string;
	static OS_UNKNOWN :string;
	static UNKNOWN :number;
	static WIN32 :number;
	static LINUX :number;
	static MACOS :number;
	static ANDROID :number;
	static IOS :number;
	static BLACKBERRY :number;
	static NACL :number;
	static EMSCRIPTEN :number;
	static TIZEN :number;
	static WINRT :number;
	static WP8 :number;
	static MOBILE_BROWSER :number;
	static DESKTOP_BROWSER :number;
	static isNative :boolean;
	static isMobile :boolean;
	static platform :number;
	static language :string;
	static os :string;
	static osVersion :string;
	static osMainVersion :number;
	static browserType :string;
	static browserVersion :number;
	static windowPixelResolution :number;
	static localStorage :any;
	static capabilities :any;
	static garbageCollect(): any ;
	static dumpRoot(): any ;
	static restartVM(): any ;
	static cleanScript(jsfile:string): any ;
	static isObjectValid(obj:any): boolean ;
	static dump(): any ;
	static openURL(url:string): any ;
}
declare class game  {
	static DEBUG_MODE_NONE :number;
	static DEBUG_MODE_INFO :number;
	static DEBUG_MODE_WARN :number;
	static DEBUG_MODE_ERROR :number;
	static DEBUG_MODE_INFO_FOR_WEB_PAGE :number;
	static DEBUG_MODE_WARN_FOR_WEB_PAGE :number;
	static DEBUG_MODE_ERROR_FOR_WEB_PAGE :number;
	static EVENT_HIDE :string;
	static EVENT_SHOW :string;
	static EVENT_RESIZE :string;
	static EVENT_RENDERER_INITED :string;
	static RENDER_TYPE_CANVAS :number;
	static RENDER_TYPE_WEBGL :number;
	static RENDER_TYPE_OPENGL :number;
	static CONFIG_KEY :any;
	static frame :any;
	static container :any;
	static canvas :any;
	static config :any;
{ name: 'onStart',
  longname: 'cc.game.onStart',
  scope: 'static',
  parent: null,
  children: {},
  kind: 'member',
  type: 'function|null' }
	static onStart :function|null;
	static onStop :function|null;
	static onResize :function|null;
	static setFrameRate(frameRate:any): any ;
	static step(): any ;
	static pause(): any ;
	static resume(): any ;
	static isPaused(): any ;
	static restart(): any ;
	static prepare(cb:any): any ;
	static run(config?:any,onStart?:function|null): any ;
}
declare class view  {
	constructor(): any ;
	setTargetDensityDPI(densityDPI:string): any ;
	getTargetDensityDPI(): string ;
	resizeWithBrowserSize(enabled:boolean): any ;
	setResizeCallback(callback:function|null): any ;
	adjustViewPort(enabled:boolean): any ;
	enableRetina(enabled:boolean): any ;
	isRetinaEnabled(): boolean ;
	enableAutoFullScreen(enabled:boolean): any ;
	isAutoFullScreenEnabled(): boolean ;
	end(): any ;
	isOpenGLReady(): boolean ;
	swapBuffers(): any ;
	setIMEKeyboardState(isOpen:boolean): any ;
	setContentTranslateLeftTop(offsetLeft:number,offsetTop:number): any ;
	getContentTranslateLeftTop(): any ;
	getCanvasSize(): Size ;
	getFrameSize(): Size ;
	setFrameSize(width:number,height:number): any ;
	centerWindow(): any ;
	getVisibleSize(): Size ;
	getVisibleSizeInPixel(): Size ;
	getVisibleOrigin(): Point ;
	getVisibleOriginInPixel(): Point ;
	canSetContentScaleFactor(): boolean ;
	getResolutionPolicy(): ResolutionPolicy ;
	setResolutionPolicy(resolutionPolicy:ResolutionPolicy|number): any ;
	setDesignResolutionSize(width:number,height:number,resolutionPolicy:ResolutionPolicy|number): any ;
	getDesignResolutionSize(): Size ;
	setRealPixelResolution(width:number,height:number,resolutionPolicy:ResolutionPolicy|number): any ;
	setViewPortInPoints(x:number,y:number,w:number,h:number): any ;
	setScissorInPoints(x:number,y:number,w:number,h:number): any ;
	isScissorEnabled(): boolean ;
	getScissorRect(): Rect ;
	setViewName(viewName:string): any ;
	getViewName(): string ;
	getViewPortRect(): Rect ;
	getScaleX(): number ;
	getScaleY(): number ;
	getDevicePixelRatio(): number ;
	convertToLocationInView(tx:number,ty:number,relatedPos:any): Point ;
}
declare class Class  {
	static extend(props:any): function ;
}
declare class Point  {
	constructor(x:number,y:number): any ;
	x :number;
	y :number;
}
declare class Size  {
	constructor(width:number,height:number): any ;
	width :number;
	height :number;
}
declare class Rect  {
	constructor(x:number,y:number,width:number,height:number): any ;
	x :number;
	y :number;
	width :number;
	height :number;
}
declare class saxParser  {
	constructor(): any ;
	parse(xmlTxt:string): Document ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class plistParser  {
	parse(xmlTxt:string): any ;
}
declare class $  {
	constructor(x:HTMLElement|string): $ ;
	translates(x:number,y:number): $ ;
	rotate(x:number): $ ;
	resize(x:number,y:number): $ ;
	setSkew(x:number,y:number): $ ;
}
declare class Color  {
	constructor(r:number,g:number,b:number,a:number,arrayBuffer:Array<any>,offset:number): Color ;
	static BYTES_PER_ELEMENT :number;
	r :any;
	g :any;
	b :any;
	a :any;
	x :any;
	y :any;
	z :any;
	u :any;
	v :any;
	tl :any;
	tr :any;
	bl :any;
	br :any;
	vertices :any;
	colors :any;
	texCoords :any;
	arrayBuffer :any;
	c :any;
}
declare class Acceleration  {
	constructor(x:number,y:number,z:number,timestamp:number): any ;
}
declare class Vertex2F  {
	constructor(x:number,y:number,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class Vertex3F  {
	constructor(x:number,y:number,z:number,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class Tex2F  {
	constructor(u:number,v:number,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class BlendFunc  {
	constructor(src1:number,dst1:number): any ;
}
declare class FontDefinition  {
	constructor(properties:any): any ;
}
declare class ContainerStrategy  {
	preApply(The:any): any ;
	apply(view:any,designedResolution:Size): any ;
	postApply(view:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class ContentStrategy  {
	preApply(view:any): any ;
	apply(view:any,designedResolution:Size): any ;
	postApply(view:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class ResolutionPolicy  {
	constructor(containerStg:ContainerStrategy,contentStg:ContentStrategy): any ;
	constructor(containerStg:ContainerStrategy,contentStg:ContentStrategy): any ;
	preApply(view:any): any ;
	apply(view:any,designedResolution:Size): any ;
	postApply(view:any): any ;
	setContainerStrategy(containerStg:ContainerStrategy): any ;
	setContentStrategy(contentStg:ContentStrategy): any ;
	static EXACT_FIT :number;
	static NO_BORDER :number;
	static SHOW_ALL :number;
	static FIXED_HEIGHT :number;
	static FIXED_WIDTH :number;
	static UNKNOWN :number;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class screen  {
	static init(...p:any): any ;
	static fullScreen(): boolean ;
	static requestFullScreen(element:Element,onFullScreenChange:function): any ;
	static exitFullScreen(): boolean ;
	static autoFullScreen(element:Element,onFullScreenChange:function): any ;
}
declare class visibleRect  {
	topLeft :Point;
	topRight :Point;
	top :Point;
	bottomLeft :Point;
	bottomRight :Point;
	bottom :Point;
	center :Point;
	left :Point;
	right :Point;
	width :number;
	height :number;
	static init(...p:any): any ;
}
declare class inputManager  {
	static handleTouchesBegin(touches:Array<any>): any ;
	static handleTouchesMove(touches:Array<any>): any ;
	static handleTouchesEnd(touches:Array<any>): any ;
	static handleTouchesCancel(touches:Array<any>): any ;
	static getSetOfTouchesEndOrCancel(touches:Array<any>): Array<any> ;
	static getHTMLElementPosition(element:HTMLElement): any ;
	static getPreTouch(touch:Touch): Touch ;
	static setPreTouch(touch:Touch): any ;
	static getTouchByXY(tx:number,ty:number,pos:Point): Touch ;
	static getMouseEvent(location:Point,pos:Point,eventType:number): EventMouse ;
	static getPointByEvent(event:Touch,pos:Point): Point ;
	static getTouchesByEvent(event:Touch,pos:Point): Array<any> ;
	static registerSystemEvent(element:HTMLElement): any ;
	static update(dt:number): any ;
}
declare class Quad2  {
	constructor(tl:Vertex2F,tr:Vertex2F,bl:Vertex2F,br:Vertex2F,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class Quad3  {
	constructor(bl1:Vertex3F,br1:Vertex3F,tl1:Vertex3F,tr1:Vertex3F): any ;
}
declare class V3F_C4B_T2F  {
	constructor(vertices:Vertex3F,colors:Color,texCoords:Tex2F,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class V3F_C4B_T2F_Quad  {
	constructor(tl:V3F_C4B_T2F,bl:V3F_C4B_T2F,tr:V3F_C4B_T2F,br:V3F_C4B_T2F,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class V2F_C4B_T2F  {
	constructor(vertices:Vertex2F,colors:Color,texCoords:Tex2F,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class V2F_C4B_T2F_Triangle  {
	constructor(a:V2F_C4B_T2F,b:V2F_C4B_T2F,c:V2F_C4B_T2F,arrayBuffer:Array<any>,offset:number): any ;
	static BYTES_PER_ELEMENT :number;
}
declare class AffineTransform  {
	constructor(a:number,b:number,c:number,d:number,tx:number,ty:number): any ;
}
declare class Event  {
	getType(): number ;
	stopPropagation(): any ;
	isStopped(): boolean ;
	getCurrentTarget(): Node ;
	static TOUCH :number;
	static KEYBOARD :number;
	static ACCELERATION :number;
	static MOUSE :number;
	static FOCUS :number;
	static CUSTOM :number;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class EventCustom extends Event {
	setUserData(data:any): any ;
	getUserData(): any ;
	getEventName(): string ;
}
declare class EventMouse extends Event {
	setScrollData(scrollX:number,scrollY:number): any ;
	getScrollX(): number ;
	getScrollY(): number ;
	setLocation(x:number,y:number): any ;
	getLocation(): Point ;
	getLocationInView(): Point ;
	getDelta(): Point ;
	getDeltaX(): number ;
	getDeltaY(): number ;
	setButton(button:number): any ;
	getButton(): number ;
	getLocationX(): number ;
	getLocationY(): number ;
	static NONE :number;
	static DOWN :number;
	static UP :number;
	static MOVE :number;
	static SCROLL :number;
	static BUTTON_LEFT :number;
	static BUTTON_RIGHT :number;
	static BUTTON_MIDDLE :number;
	static BUTTON_4 :number;
	static BUTTON_5 :number;
	static BUTTON_6 :number;
	static BUTTON_7 :number;
	static BUTTON_8 :number;
}
declare class EventTouch extends Event {
	getEventCode(): number ;
	getTouches(): Array<any> ;
	static MAX_TOUCHES :number;
	constructor(widgetLoseFocus:any,widgetGetFocus:any): any ;
}
declare class EventFocus extends Event {
}
declare class Touch  {
	constructor(x:number,y:number,id:number): any ;
	getLocation(): Point ;
	getLocationX(): number ;
	getLocationY(): number ;
	getPreviousLocation(): Point ;
	getStartLocation(): Point ;
	getDelta(): Point ;
	getLocationInView(): Point ;
	getPreviousLocationInView(): Point ;
	getStartLocationInView(): Point ;
	getID(): number ;
	getId(): number ;
	setTouchInfo(id:number,x:number,y:number): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class EventListener  {
	constructor(type:number,listenerID:string,callback:function): any ;
	checkAvailable(): boolean ;
	clone(): EventListener ;
	setEnabled(enabled:boolean): any ;
	isEnabled(): boolean ;
	retain(): any ;
	release(): any ;
	static UNKNOWN :number;
	static TOUCH_ONE_BY_ONE :number;
	static TOUCH_ALL_AT_ONCE :number;
	static KEYBOARD :number;
	static MOUSE :number;
	static ACCELERATION :number;
	static CUSTOM :number;
	static FOCUS :number;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class eventManager  {
	static pauseTarget(node:Node,recursive?:boolean): any ;
	static resumeTarget(node:Node,recursive?:boolean): any ;
	static addListener(listener:any,nodeOrPriority:Node|number): EventListener ;
	static addCustomListener(eventName:string,callback:function): EventListener ;
	static removeListener(listener:EventListener): any ;
	static removeListeners(listenerType:number|Node,recursive?:boolean): any ;
	static removeCustomListeners(customEventName:string): any ;
	static removeAllListeners(): any ;
	static setPriority(listener:EventListener,fixedPriority:number): any ;
	static setEnabled(enabled:boolean): any ;
	static isEnabled(): boolean ;
	static dispatchEvent(event:Event): any ;
	static dispatchCustomEvent(eventName:string,optionalUserData:any): any ;
}
declare class Node  {
	x :number;
	y :number;
	width :number;
	height :number;
	anchorX :number;
	anchorY :number;
	ignoreAnchor :boolean;
	skewX :number;
	skewY :number;
	zIndex :number;
	vertexZ :number;
	rotation :number;
	rotationX :number;
	rotationY :number;
	scale :number;
	scaleX :number;
	scaleY :number;
	visible :boolean;
	color :Color;
	cascadeColor :boolean;
	opacity :number;
	opacityModifyRGB :boolean;
	cascadeOpacity :boolean;
	children :Array<any>;
	childrenCount :number;
	parent :Node;
	running :boolean;
	tag :number;
	userData :any;
	userObject :any;
	arrivalOrder :number;
	actionManager :ActionManager;
	scheduler :Scheduler;
	grid :GridBase;
	shaderProgram :GLProgram;
	glServerState :number;
	constructor(): any ;
	init(...p:any): boolean ;
	attr(attrs:any): any ;
	getSkewX(): number ;
	setSkewX(newSkewX:number): any ;
	getSkewY(): number ;
	setSkewY(newSkewY:number): any ;
	setLocalZOrder(localZOrder:number): any ;
	getLocalZOrder(): number ;
	getZOrder(): number ;
	setZOrder(z:number): any ;
	setGlobalZOrder(globalZOrder:number): any ;
	getGlobalZOrder(): number ;
	getVertexZ(): number ;
	setVertexZ(Var:number): any ;
	getRotation(): number ;
	setRotation(newRotation:number): any ;
	getRotationX(): number ;
	setRotationX(rotationX:number): any ;
	getRotationY(): number ;
	setRotationY(rotationY:any): any ;
	getScale(): number ;
	setScale(scale:number,scaleY?:number): any ;
	getScaleX(): number ;
	setScaleX(newScaleX:number): any ;
	getScaleY(): number ;
	setScaleY(newScaleY:number): any ;
	setPosition(newPosOrxValue:Point|number,yValue?:number): any ;
	setNormalizedPosition(posOrX:Point|number,y?:number): any ;
	getPosition(): Point ;
	getNormalizedPosition(): Point ;
	getPositionX(): number ;
	setPositionX(x:number): any ;
	getPositionY(): number ;
	setPositionY(y:number): any ;
	getChildrenCount(): number ;
	getChildren(): Array<any> ;
	isVisible(): boolean ;
	setVisible(visible:boolean): any ;
	getAnchorPoint(): Point ;
	setAnchorPoint(point:Point|number,y?:number): any ;
	getAnchorPointInPoints(): Point ;
	getContentSize(): Size ;
	setContentSize(size:Size|number,height?:number): any ;
	isRunning(): boolean ;
	getParent(): Node ;
	setParent(parent:Node): any ;
	isIgnoreAnchorPointForPosition(): boolean ;
	ignoreAnchorPointForPosition(newValue:boolean): any ;
	getTag(): number ;
	setTag(tag:number): any ;
	setName(name:string): any ;
	getName(): string ;
	getUserData(): any ;
	setUserData(Var:any): any ;
	getUserObject(): any ;
	setUserObject(newValue:any): any ;
	getOrderOfArrival(): number ;
	setOrderOfArrival(Var:number): any ;
	getActionManager(): ActionManager ;
	setActionManager(actionManager:ActionManager): any ;
	getScheduler(): Scheduler ;
	setScheduler(scheduler:any): any ;
	boundingBox(): Rect ;
	getBoundingBox(): Rect ;
	cleanup(): any ;
	getChildByTag(aTag:number): Node ;
	getChildByName(name:string): Node ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	removeFromParent(cleanup?:boolean): any ;
	removeFromParentAndCleanup(cleanup?:boolean): any ;
	removeChild(child:Node): any ;
	removeChildByTag(tag:number,cleanup?:boolean): any ;
	removeAllChildrenWithCleanup(cleanup?:boolean): any ;
	removeAllChildren(cleanup?:boolean): any ;
	reorderChild(child:Node,zOrder:number): any ;
	sortAllChildren(): any ;
	draw(ctx:CanvasRenderingContext2D|WebGLRenderingContext): any ;
	onEnter(): any ;
	onEnterTransitionDidFinish(): any ;
	onExitTransitionDidStart(): any ;
	onExit(): any ;
	runAction(action:Action): Action ;
	stopAllActions(): any ;
	stopAction(action:Action): any ;
	stopActionByTag(tag:number): any ;
	getActionByTag(tag:number): Action ;
	getNumberOfRunningActions(): number ;
	scheduleUpdate(): any ;
	scheduleUpdateWithPriority(priority:number): any ;
	unscheduleUpdate(): any ;
	schedule(callback:function,interval:number,repeat:number,delay:number,key:string): any ;
	scheduleOnce(callback:function,delay:number,key:string): any ;
	unschedule(callback_fn:function): any ;
	unscheduleAllCallbacks(): any ;
	resumeSchedulerAndActions(): any ;
	resume(): any ;
	pauseSchedulerAndActions(): any ;
	pause(): any ;
	setAdditionalTransform(additionalTransform:AffineTransform): any ;
	getParentToNodeTransform(): AffineTransform ;
	parentToNodeTransform(): any ;
	getNodeToWorldTransform(): AffineTransform ;
	nodeToWorldTransform(): any ;
	getWorldToNodeTransform(): AffineTransform ;
	worldToNodeTransform(): any ;
	convertToNodeSpace(worldPoint:Point): Point ;
	convertToWorldSpace(nodePoint:Point): Point ;
	convertToNodeSpaceAR(worldPoint:Point): Point ;
	convertToWorldSpaceAR(nodePoint:Point): Point ;
	convertTouchToNodeSpace(touch:Touch): Point ;
	convertTouchToNodeSpaceAR(touch:Touch): Point ;
	update(dt:number): any ;
	updateTransform(): any ;
	retain(): any ;
	release(): any ;
	getComponent(name:string): any ;
	addComponent(component:any): any ;
	removeComponent(component:any): any ;
	removeAllComponents(): any ;
	visit(parentCmd:any): any ;
	transform(parentCmd:any,recursive:boolean): any ;
	nodeToParentTransform(): AffineTransform ;
	getNodeToParentTransform(): AffineTransform ;
	getCamera(): Camera ;
	getGrid(): GridBase ;
	setGrid(grid:GridBase): any ;
	getShaderProgram(): GLProgram ;
	setShaderProgram(newShaderProgram:GLProgram): any ;
	getGLServerState(): number ;
	setGLServerState(state:number): any ;
	getBoundingBoxToWorld(): Rect ;
	getOpacity(): number ;
	getDisplayedOpacity(): number ;
	setOpacity(opacity:number): any ;
	updateDisplayedOpacity(parentOpacity:number): any ;
	isCascadeOpacityEnabled(): boolean ;
	setCascadeOpacityEnabled(cascadeOpacityEnabled:boolean): any ;
	getColor(): Color ;
	getDisplayedColor(): Color ;
	setColor(color:Color): any ;
	updateDisplayedColor(parentColor:Color): any ;
	isCascadeColorEnabled(): boolean ;
	setCascadeColorEnabled(cascadeColorEnabled:boolean): any ;
	setOpacityModifyRGB(opacityValue:boolean): any ;
	isOpacityModifyRGB(): boolean ;
	enumerateChildren(name:any,callback:any): any ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class AtlasNode extends Node {
	constructor(tile:string,tileWidth:number,tileHeight:number,itemsToRender:number): any ;
	texture :Texture2D;
	textureAtlas :TextureAtlas;
	quadsToDraw :number;
	constructor(tile:string,tileWidth:number,tileHeight:number,itemsToRender:number): any ;
	updateAtlasValues(): any ;
	getColor(): Color ;
	setOpacityModifyRGB(value:boolean): any ;
	isOpacityModifyRGB(): boolean ;
	getBlendFunc(): BlendFunc ;
	setBlendFunc(src:number|BlendFunc,dst:number): any ;
	setTextureAtlas(value:TextureAtlas): any ;
	getTextureAtlas(): TextureAtlas ;
	getQuadsToDraw(): number ;
	setQuadsToDraw(quadsToDraw:number): any ;
	initWithTileFile(tile:string,tileWidth:number,tileHeight:number,itemsToRender:number): boolean ;
	initWithTexture(texture:Texture2D,tileWidth:number,tileHeight:number,itemsToRender:number): boolean ;
	setColor(color:Color): any ;
	setOpacity(opacity:number): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	static create(...p:any): any ;
}
declare class Texture2D  {
	name :number;
	pixelFormat :number;
	pixelsWidth :number;
	pixelsHeight :number;
	width :number;
	height :number;
	shaderProgram :GLProgram;
	maxS :number;
	maxT :number;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class textureCache  {
	static addPVRTCImage(filename:string): Texture2D ;
	static addETCImage(filename:string): Texture2D ;
	static description(): string ;
	static textureForKey(textureKeyName:string): Texture2D|null ;
	static getTextureForKey(textureKeyName:string): Texture2D|null ;
	static getKeyByTexture(texture:Image): string|null ;
	static getTextureColors(texture:Image): Array<any> ;
	static addPVRImage(path:string): Texture2D ;
	static removeAllTextures(): any ;
	static removeTexture(texture:Image): any ;
	static removeTextureForKey(textureKeyName:string): any ;
	static cacheImage(path:string,texture:Image|HTMLImageElement|HTMLCanvasElement): any ;
	static addUIImage(image:HTMLImageElement|HTMLCanvasElement,key:string): Texture2D ;
	static dumpCachedTextureInfo(): any ;
}
declare class TextureAtlas  {
	dirty :boolean;
	texture :Image;
	capacity :number;
	totalQuads :number;
	quads :Array<any>;
	constructor(fileName:string|Texture2D,capacity:number): any ;
	getTotalQuads(): number ;
	getCapacity(): number ;
	getTexture(): Image ;
	setTexture(texture:Image): any ;
	setDirty(dirty:boolean): any ;
	isDirty(): boolean ;
	getQuads(): Array<any> ;
	setQuads(quads:Array<any>): any ;
	description(): string ;
	initWithFile(...p:any): boolean ;
	initWithTexture(texture:Image,capacity:number): boolean ;
	updateQuad(quad:V3F_C4B_T2F_Quad,index:number): any ;
	insertQuad(quad:V3F_C4B_T2F_Quad,index:number): any ;
	insertQuads(quads:Array<any>,index:number,amount:number): any ;
	insertQuadFromIndex(fromIndex:number,newIndex:number): any ;
	removeQuadAtIndex(index:number): any ;
	removeQuadsAtIndex(index:number,amount:number): any ;
	removeAllQuads(): any ;
	resizeCapacity(newCapacity:number): boolean ;
	increaseTotalQuadsWith(amount:number): any ;
	moveQuadsFromIndex(oldIndex:number,amount:number,newIndex:number): any ;
	fillWithEmptyQuadsFromIndex(index:number,amount:number): any ;
	drawQuads(): any ;
	static create(...p:any): any ;
	static createWithTexture(): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class Scene extends Node {
	static create(...p:any): any ;
}
declare class LoaderScene extends Scene {
	static preload(resources:any,cb:any,target:any): any ;
}
declare class Layer extends Node {
	constructor(): any ;
	init(...p:any): any ;
	bake(): any ;
	unbake(): any ;
	isBaked(): boolean ;
	static create(...p:any): any ;
}
declare class LayerColor extends Layer {
	constructor(color?:Color,width?:number,height?:number): any ;
	getBlendFunc(): BlendFunc ;
	changeWidthAndHeight(w:number,h:number): any ;
	changeWidth(w:number): any ;
	changeHeight(h:number): any ;
	constructor(color?:Color,width?:number,height?:number): any ;
	init(...p:any): boolean ;
	setBlendFunc(src:number|BlendFunc,dst?:number): any ;
	static create(...p:any): any ;
}
declare class LayerGradient extends LayerColor {
	constructor(start:Color,end:Color,v?:Point): any ;
	startColor :Color;
	endColor :Color;
	startOpacity :number;
	endOpacity :number;
	vector :number;
	compressedInterpolation :number;
	constructor(start:Color,end:Color,v?:Point,stops:Array<any>|null): any ;
	init(...p:any): boolean ;
	setContentSize(size:Size|number,height?:number): any ;
	getStartColor(): Color ;
	setStartColor(color:Color): any ;
	setEndColor(color:Color): any ;
	getEndColor(): Color ;
	setStartOpacity(o:number): any ;
	getStartOpacity(): number ;
	setEndOpacity(o:number): any ;
	getEndOpacity(): number ;
	setVector(Var:Point): any ;
	getVector(): Point ;
	isCompressedInterpolation(): boolean ;
	setCompressedInterpolation(compress:boolean): any ;
	getColorStops(): Array<any> ;
	setColorStops(colorStops:any): any ;
	static create(...p:any): any ;
}
declare class LayerMultiplex extends Layer {
	constructor(layers:Array<any>): any ;
	constructor(layers:Array<any>): any ;
	initWithLayers(layers:Array<any>): boolean ;
	switchTo(n:number): any ;
	switchToAndReleaseMe(n:number): any ;
	addLayer(layer:Layer): any ;
	static create(...p:any): any ;
}
declare class Sprite extends Node {
	constructor(fileName:string|SpriteFrame|HTMLImageElement|Texture2D,rect?:Rect,rotated?:boolean): any ;
	dirty :boolean;
	flippedX :boolean;
	flippedY :boolean;
	offsetX :number;
	offsetY :number;
	atlasIndex :number;
	texture :Texture2D;
	textureRectRotated :boolean;
	textureAtlas :TextureAtlas;
	batchNode :SpriteBatchNode;
	quad :V3F_C4B_T2F_Quad;
	textureLoaded(): boolean ;
	addLoadedEventListener(callback:function,target:any): any ;
	isDirty(): boolean ;
	setDirty(bDirty:boolean): any ;
	isTextureRectRotated(): boolean ;
	getAtlasIndex(): number ;
	setAtlasIndex(atlasIndex:number): any ;
	getTextureRect(): Rect ;
	getTextureAtlas(): TextureAtlas ;
	setTextureAtlas(textureAtlas:TextureAtlas): any ;
	getOffsetPosition(): Point ;
	getBlendFunc(): BlendFunc ;
	initWithSpriteFrame(spriteFrame:SpriteFrame): boolean ;
	initWithSpriteFrameName(spriteFrameName:string): boolean ;
	useBatchNode(batchNode:SpriteBatchNode): any ;
	setVertexRect(rect:Rect): any ;
	sortAllChildren(): any ;
	reorderChild(child:Node,zOrder:number): any ;
	removeChild(child:Node): any ;
	setVisible(visible:boolean): any ;
	removeAllChildren(cleanup:any): any ;
	ignoreAnchorPointForPosition(relative:boolean): any ;
	setFlippedX(flippedX:boolean): any ;
	setFlippedY(flippedY:boolean): any ;
	isFlippedX(): boolean ;
	isFlippedY(): boolean ;
	setOpacityModifyRGB(modify:boolean): any ;
	isOpacityModifyRGB(): boolean ;
	setDisplayFrameWithAnimationName(animationName:string,frameIndex:number): any ;
	getBatchNode(): SpriteBatchNode|null ;
	getTexture(): Texture2D ;
	getQuad(): V3F_C4B_T2F_Quad|null ;
	setBlendFunc(src:number|BlendFunc,dst:number): any ;
	init(...p:any): boolean ;
	initWithFile(...p:any): boolean ;
	initWithTexture(texture:Texture2D|HTMLImageElement|HTMLCanvasElement,rect?:Rect,rotated?:boolean,counterclockwise?:boolean): boolean ;
	setTextureRect(rect:Rect,rotated?:boolean,untrimmedSize?:Size,needConvert?:boolean): any ;
	updateTransform(): any ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	setSpriteFrame(newFrame:SpriteFrame|string): any ;
	setDisplayFrame(newFrame:SpriteFrame|string): any ;
	isFrameDisplayed(frame:SpriteFrame): boolean ;
	displayFrame(): SpriteFrame ;
	getSpriteFrame(): SpriteFrame ;
	setBatchNode(spriteBatchNode:SpriteBatchNode|null): any ;
	setTexture(texture:Texture2D|string): any ;
	static create(...p:any): any ;
	static createWithTexture(): any ;
	static createWithSpriteFrameName(): any ;
	static createWithSpriteFrame(): any ;
	static INDEX_NOT_INITIALIZED :number;
}
declare class AnimationFrame  {
	constructor(spriteFrame:any,delayUnits:any,userInfo:any): AnimationFrame ;
	clone(): AnimationFrame ;
	copyWithZone(): AnimationFrame ;
	copy(): AnimationFrame ;
	initWithSpriteFrame(spriteFrame:SpriteFrame,delayUnits:number,userInfo:any): any ;
	getSpriteFrame(): SpriteFrame ;
	setSpriteFrame(spriteFrame:SpriteFrame): any ;
	getDelayUnits(): number ;
	setDelayUnits(delayUnits:any): any ;
	getUserInfo(): any ;
	setUserInfo(userInfo:any): any ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class Animation  {
	constructor(frames:Array<any>,delay:number,loops?:number): any ;
	getFrames(): Array<any> ;
	setFrames(frames:Array<any>): any ;
	addSpriteFrame(frame:SpriteFrame): any ;
	addSpriteFrameWithFile(fileName:string): any ;
	addSpriteFrameWithTexture(texture:Texture2D,rect:Rect): any ;
	initWithAnimationFrames(arrayOfAnimationFrames:Array<any>,delayPerUnit:number,loops?:number): any ;
	clone(): Animation ;
	copyWithZone(): Animation ;
	copy(pZone:any): Animation ;
	getLoops(): number ;
	setLoops(value:number): any ;
	setRestoreOriginalFrame(restOrigFrame:boolean): any ;
	getRestoreOriginalFrame(): boolean ;
	getDuration(): number ;
	getDelayPerUnit(): number ;
	setDelayPerUnit(delayPerUnit:number): any ;
	getTotalDelayUnits(): number ;
	initWithSpriteFrames(frames:Array<any>,delay:number,loops?:number): any ;
	retain(): any ;
	release(): any ;
	static create(...p:any): any ;
	static createWithAnimationFrames :function;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class animationCache  {
	static addAnimation(animation:Animation,name:string): any ;
	static removeAnimation(name:string): any ;
	static getAnimation(name:string): Animation ;
	static addAnimations(plist:string): any ;
}
declare class SpriteFrame  {
	constructor(filename:string|Texture2D,rect:Rect,rotated?:boolean,offset?:Point,originalSize?:Size): any ;
	textureLoaded(): boolean ;
	addLoadedEventListener(callback:function,target:any): any ;
	getRectInPixels(): Rect ;
	setRectInPixels(rectInPixels:Rect): any ;
	isRotated(): boolean ;
	setRotated(bRotated:boolean): any ;
	getRect(): Rect ;
	setRect(rect:Rect): any ;
	getOffsetInPixels(): Point ;
	setOffsetInPixels(offsetInPixels:Point): any ;
	getOriginalSizeInPixels(): Size ;
	setOriginalSizeInPixels(sizeInPixels:Size): any ;
	getOriginalSize(): Size ;
	setOriginalSize(sizeInPixels:Size): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	getOffset(): Point ;
	setOffset(offsets:Point): any ;
	clone(): SpriteFrame ;
	copyWithZone(): SpriteFrame ;
	copy(): SpriteFrame ;
	initWithTexture(texture:string|Texture2D,rect:Rect,rotated?:boolean,offset?:Point,originalSize?:Size): boolean ;
	static create(...p:any): any ;
	static createWithTexture(): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class spriteFrameCache  {
	static addSpriteFrames(url:string,texture?:HTMLImageElement|Texture2D|string): any ;
	static addSpriteFrame(frame:SpriteFrame,frameName:string): any ;
	static removeSpriteFrames(): any ;
	static removeSpriteFrameByName(name:string): any ;
	static removeSpriteFramesFromFile(url:string): any ;
	static removeSpriteFramesFromTexture(texture:HTMLImageElement|HTMLCanvasElement|Texture2D): any ;
	static getSpriteFrame(name:string): SpriteFrame ;
}
declare class SpriteBatchNode extends Node {
	constructor(fileImage:string|Texture2D,capacity:number): any ;
	textureAtlas :TextureAtlas;
	descendants :Array<any>;
	addSpriteWithoutQuad(child:Sprite,z:number,aTag:number): SpriteBatchNode ;
	getTextureAtlas(): TextureAtlas ;
	setTextureAtlas(textureAtlas:TextureAtlas): any ;
	getDescendants(): Array<any> ;
	initWithFile(...p:any): boolean ;
	init(...p:any): boolean ;
	increaseAtlasCapacity(): any ;
	removeChildAtIndex(index:number,doCleanup:boolean): any ;
	rebuildIndexInOrder(pobParent:Sprite,index:number): number ;
	highestAtlasIndexInChild(sprite:Sprite): number ;
	lowestAtlasIndexInChild(sprite:Sprite): number ;
	atlasIndexForChild(sprite:Sprite,nZ:number): number ;
	reorderBatch(reorder:boolean): any ;
	setBlendFunc(src:number|BlendFunc,dst:number): any ;
	getBlendFunc(): BlendFunc ;
	reorderChild(child:Node,zOrder:number): any ;
	removeChild(child:Node): any ;
	updateQuadFromSprite(sprite:Sprite,index:number): any ;
	insertQuadFromSprite(sprite:Sprite,index:number): any ;
	initWithTexture(tex:Texture2D,capacity?:number): boolean ;
	insertChild(sprite:Sprite,index:number): any ;
	appendChild(sprite:Sprite): any ;
	removeSpriteFromAtlas(sprite:Sprite): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	removeAllChildren(cleanup?:boolean): any ;
	sortAllChildren(): any ;
	static DEFAULT_CAPACITY :number;
	static create(...p:any): any ;
	static createWithTexture(): any ;
}
declare class configuration  {
	static getMaxTextureSize(): number ;
	static getMaxModelviewStackDepth(): number ;
	static getMaxTextureUnits(): number ;
	static supportsNPOT(): boolean ;
	static supportsPVRTC(): boolean ;
	static supportsETC(): boolean ;
	static supportsS3TC(): boolean ;
	static supportsATITC(): boolean ;
	static supportsBGRA8888(): boolean ;
	static supportsDiscardFramebuffer(): boolean ;
	static supportsShareableVAO(): boolean ;
	static checkForGLExtension(searchName:string): any ;
	static getValue(key:string,default_value?:any): any ;
	static setValue(key:string,value:any): any ;
	static dumpInfo(): any ;
	static gatherGPUInfo(): any ;
	static loadConfigFile(url:string): any ;
}
declare class Director  {
	calculateDeltaTime(): any ;
	convertToGL(uiPoint:Point): Point ;
	convertToUI(glPoint:Point): Point ;
	drawScene(): any ;
	end(): any ;
	getContentScaleFactor(): number ;
	getNotificationNode(): Node ;
	getWinSize(): Size ;
	getWinSizeInPixels(): Size ;
	getVisibleSize(): Size ;
	getVisibleOrigin(): Point ;
	getZEye(): number ;
	pause(): any ;
	popScene(): any ;
	purgeCachedData(): any ;
	purgeDirector(): any ;
	pushScene(scene:Scene): any ;
	runScene(scene:Scene): any ;
	resume(): any ;
	setContentScaleFactor(scaleFactor:number): any ;
	setDepthTest(on:boolean): any ;
	setClearColor(clearColor:Color): any ;
	setDefaultValues(): any ;
	setNextDeltaTimeZero(nextDeltaTimeZero:boolean): any ;
	setNextScene(): any ;
	setNotificationNode(node:Node): any ;
	getDelegate(): any ;
	setDelegate(): any ;
	setOpenGLView(openGLView:any): any ;
	setProjection(projection:number): any ;
	setViewport(): any ;
	getOpenGLView(): any ;
	getProjection(): number ;
	setAlphaBlending(on:boolean): any ;
	isSendCleanupToScene(): boolean ;
	getRunningScene(): Scene ;
	getAnimationInterval(): number ;
	isDisplayStats(): boolean ;
	setDisplayStats(displayStats:boolean): any ;
	getSecondsPerFrame(): number ;
	isNextDeltaTimeZero(): boolean ;
	isPaused(): boolean ;
	getTotalFrames(): number ;
	popToRootScene(): any ;
	popToSceneStackLevel(level:number): any ;
	getScheduler(): Scheduler ;
	setScheduler(scheduler:Scheduler): any ;
	getActionManager(): ActionManager ;
	setActionManager(actionManager:ActionManager): any ;
	getDeltaTime(): number ;
	static EVENT_PROJECTION_CHANGED :string;
	static EVENT_AFTER_UPDATE :string;
	static EVENT_AFTER_VISIT :string;
	static EVENT_AFTER_DRAW :string;
	startAnimation(): any ;
	mainLoop(): any ;
	stopAnimation(): any ;
	setAnimationInterval(value:number): any ;
	static PROJECTION_2D :number;
	static PROJECTION_3D :number;
	static PROJECTION_CUSTOM :number;
	static PROJECTION_DEFAULT :number;
}
declare class Camera  {
	constructor(): any ;
	description(): string ;
	setDirty(value:any): any ;
	isDirty(): boolean ;
	restore(): any ;
	locate(): any ;
	setEyeXYZ(eyeX:number,eyeY:number,eyeZ:number): any ;
	setEye(eyeX:number,eyeY:number,eyeZ:number): any ;
	setCenterXYZ(centerX:number,centerY:number,centerZ:number): any ;
	setCenter(centerX:number,centerY:number,centerZ:number): any ;
	setUpXYZ(upX:number,upY:number,upZ:number): any ;
	setUp(upX:number,upY:number,upZ:number): any ;
	getEyeXYZ(eyeX:number,eyeY:number,eyeZ:number): any ;
	getEye(): any ;
	getCenterXYZ(centerX:number,centerY:number,centerZ:number): any ;
	getCenter(): any ;
	getUpXYZ(upX:number,upY:number,upZ:number): any ;
	getUp(): any ;
	static getZEye(): number ;
}
declare class ListEntry  {
	constructor(prev:ListEntry,next:ListEntry,callback:function,target:any,priority:number,paused:boolean,markedForDeletion:boolean): any ;
}
declare class HashUpdateEntry  {
	constructor(list:Array<any>,entry:ListEntry,target:any,callback:function,hh:Array<any>): any ;
}
declare class HashTimerEntry  {
	constructor(timers:Array<any>,target:any,timerIndex:number,currentTimer:Timer,currentTimerSalvaged:boolean,paused:boolean,hh:Array<any>): any ;
}
declare class Timer  {
	getInterval(): number ;
	setInterval(interval:number): any ;
	constructor(): any ;
	update(dt:number): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class Scheduler  {
	setTimeScale(timeScale:number): any ;
	getTimeScale(): number ;
	update(dt:number): any ;
	scheduleCallbackForTarget(target:any,callback_fn:function,interval:number,repeat:number,delay:number,paused:boolean): any ;
	pauseAllTargets(): any ;
	pauseAllTargetsWithMinPriority(minPriority:number): any ;
	resumeTargets(targetsToResume:Array<any>): any ;
	pauseTarget(target:any): any ;
	resumeTarget(target:any): any ;
	isTargetPaused(target:any): boolean ;
	scheduleUpdateForTarget(target:any,priority:number,paused:boolean): any ;
	unscheduleCallbackForTarget(target:any,callback:function): any ;
	unscheduleUpdateForTarget(target:any): any ;
	unscheduleAllCallbacksForTarget(target:any): any ;
	unscheduleAllCallbacks(): any ;
	unscheduleAllCallbacksWithMinPriority(minPriority:number): any ;
	static PRIORITY_SYSTEM :number;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class DrawingPrimitiveCanvas  {
	constructor(renderContext:CanvasRenderingContext2D): any ;
	constructor(renderContext:any): any ;
	drawPoint(point:Point,size:number): any ;
	drawPoints(points:Array<any>,numberOfPoints:number,size:number): any ;
	drawLine(origin:Point,destination:Point): any ;
	drawRect(origin:Point,destination:Point): any ;
	drawSolidRect(origin:Point,destination:Point,color:Color): any ;
	drawPoly(vertices:Array<any>,numOfVertices:number,closePolygon:boolean,fill?:boolean): any ;
	drawSolidPoly(polygons:Array<any>,numberOfPoints:number,color:Color): any ;
	drawCircle(center:Point,radius:number,angle:number,segments:number,drawLineToCenter?:boolean): any ;
	drawQuadBezier(origin:Point,control:Point,destination:Point,segments:number): any ;
	drawCubicBezier(origin:Point,control1:Point,control2:Point,destination:Point,segments:number): any ;
	drawCatmullRom(points:Array<any>,segments:number): any ;
	drawCardinalSpline(config:Array<any>,tension:number,segments:number): any ;
	drawImage(image:HTMLImageElement|HTMLCanvasElement,sourcePoint:Point,sourceSize:Size,destPoint:Point,destSize:Size): any ;
	drawStar(ctx:any,radius:number,color:Color): any ;
	drawColorBall(ctx:any,radius:number,color:Color): any ;
	fillText(strText:string,x:number,y:number): any ;
	setDrawColor(r:number,g:number,b:number,a:number): any ;
	setPointSize(pointSize:number): any ;
	setLineWidth(width:number): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class LabelTTF extends Sprite {
	constructor(text:string,fontName?:string|FontDefinition,fontSize?:number,dimensions?:Size,hAlignment?:number,vAlignment?:number): any ;
	string :string;
	textAlign :number;
	verticalAlign :number;
	fontSize :number;
	fontName :string;
	font :string;
	boundingWidth :number;
	boundingHeight :number;
	fillStyle :Color;
	strokeStyle :Color;
	lineWidth :number;
	shadowOffsetX :number;
	shadowOffsetY :number;
	shadowOpacity :number;
	shadowBlur :number;
	initWithString(label:string,fontName:string,fontSize:number,dimensions?:Size,hAlignment?:number,vAlignment?:number): boolean ;
	getString(): string ;
	getHorizontalAlignment(): number ;
	getVerticalAlignment(): number ;
	getDimensions(): Size ;
	getFontSize(): number ;
	getFontName(): string ;
	initWithStringAndTextDefinition(text:string,textDefinition:FontDefinition): boolean ;
	setTextDefinition(theDefinition:FontDefinition): any ;
	getTextDefinition(): FontDefinition ;
	enableShadow(a:Color|number,b:Size|number,c:number,d:null|number): any ;
	disableShadow(): any ;
	enableStroke(strokeColor:Color,strokeSize:number): any ;
	disableStroke(): any ;
	setFontFillColor(fillColor:Color): any ;
	setString(text:string): any ;
	setHorizontalAlignment(alignment:number): any ;
	setVerticalAlignment(verticalAlignment:number): any ;
	setDimensions(dim:Size|number,height?:number): any ;
	setFontSize(fontSize:number): any ;
	setFontName(fontName:string): any ;
	getContentSize(): Size ;
	setDrawMode(boolean:any): any ;
	static create(...p:any): any ;
	static createWithFontDefinition(): any ;
}
declare class HashElement  {
	constructor(): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class ActionManager  {
	addAction(action:Action,target:Node,paused:boolean): any ;
	removeAllActions(): any ;
	removeAllActionsFromTarget(target:any,forceDelete:boolean): any ;
	removeAction(action:Action): any ;
	removeActionByTag(tag:number,target:any): any ;
	getActionByTag(tag:number,target:any): Action|null ;
	numberOfRunningActionsInTarget(target:any): number ;
	pauseTarget(target:any): any ;
	resumeTarget(target:any): any ;
	pauseAllRunningActions(): Array<any> ;
	resumeTargets(targetsToResume:Array<any>): any ;
	purgeSharedManager(): any ;
	update(dt:number): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class math  {
	static square(s:number): any ;
	static Matrix3 :typeof Matrix3 ;
	static Matrix4 :typeof Matrix4 ;
	static Vec3 :typeof Vec3 ;
	static Quaternion :typeof Quaternion ;
	static AABB :typeof AABB ;
	static Matrix4Stack :typeof Matrix4Stack ;
}
declare class shaderCache  {
	static TYPE_POSITION_TEXTURECOLOR :number;
	static TYPE_POSITION_TEXTURECOLOR_ALPHATEST :number;
	static TYPE_POSITION_COLOR :number;
	static TYPE_POSITION_TEXTURE :number;
	static TYPE_POSITION_TEXTURE_UCOLOR :number;
	static TYPE_POSITION_TEXTURE_A8COLOR :number;
	static TYPE_POSITION_UCOLOR :number;
	static TYPE_POSITION_LENGTH_TEXTURECOLOR :number;
	static TYPE_MAX :number;
	static loadDefaultShaders(): any ;
	static reloadDefaultShaders(): any ;
	static programForKey(key:string): any ;
	static getProgram(shaderName:string): GLProgram ;
	static addProgram(program:GLProgram,key:string): any ;
}
declare class GLProgram  {
	constructor(vShaderFileName:string,fShaderFileName:string): GLProgram ;
	destroyProgram(): any ;
	initWithVertexShaderByteArray(vertShaderStr:string,fragShaderStr:string): boolean ;
	initWithString(vertShaderStr:string,fragShaderStr:string): boolean ;
	initWithVertexShaderFilename(vShaderFilename:string,fShaderFileName:string): boolean ;
	init(...p:any): boolean ;
	addAttribute(attributeName:string,index:number): any ;
	link(): boolean ;
	use(): any ;
	updateUniforms(): any ;
	getUniformLocationForName(name:string): number ;
	getUniformMVPMatrix(): any ;
	getUniformSampler(): any ;
	setUniformLocationWith1i(location:any,i1:number): any ;
	setUniformLocationWith2i(location:any,i1:number,i2:number): any ;
	setUniformLocationWith3i(location:any,i1:number,i2:number,i3:number): any ;
	setUniformLocationWith4i(location:any,i1:number,i2:number,i3:number,i4:number): any ;
	setUniformLocationWith2iv(location:any,intArray:Int32Array,numberOfArrays:number): any ;
	setUniformLocationWith3iv(location:any,intArray:Int32Array,numberOfArrays:number): any ;
	setUniformLocationWith4iv(location:any,intArray:Int32Array,numberOfArrays:number): any ;
	setUniformLocationI32(location:any,i1:number): any ;
	setUniformLocationWith1f(location:any,f1:number): any ;
	setUniformLocationWith2f(location:any,f1:number,f2:number): any ;
	setUniformLocationWith3f(location:any,f1:number,f2:number,f3:number): any ;
	setUniformLocationWith4f(location:any,f1:number,f2:number,f3:number,f4:number): any ;
	setUniformLocationWith2fv(location:any,floatArray:Float32Array,numberOfArrays:number): any ;
	setUniformLocationWith3fv(location:any,floatArray:Float32Array,numberOfArrays:number): any ;
	setUniformLocationWith4fv(location:any,floatArray:Float32Array,numberOfArrays:number): any ;
	setUniformLocationWithMatrix4fv(location:any,matrixArray:Float32Array,numberOfMatrices:number): any ;
	setUniformsForBuiltins(): any ;
	setUniformForModelViewProjectionMatrix(): any ;
	vertexShaderLog(): string ;
	getVertexShaderLog(): string ;
	getFragmentShaderLog(): string ;
	fragmentShaderLog(): string ;
	programLog(): string ;
	getProgramLog(): string ;
	reset(): any ;
	getProgram(): number ;
	retain(): any ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class audioEngine  {
	static willPlayMusic(): boolean ;
	static playMusic(url:string,loop:boolean): any ;
	static stopMusic(releaseData?:boolean): any ;
	static pauseMusic(): any ;
	static resumeMusic(): any ;
	static rewindMusic(): any ;
	static getMusicVolume(): number ;
	static setMusicVolume(volume:number): any ;
	static isMusicPlaying(): boolean ;
	static playEffect(url:string,loop:boolean): number|null ;
	static setEffectsVolume(volume:number): any ;
	static getEffectsVolume(): number ;
	static pauseEffect(audio:number): any ;
	static pauseAllEffects(): any ;
	static resumeEffect(audio:number): any ;
	static resumeAllEffects(): any ;
	static stopEffect(audio:number): any ;
	static stopAllEffects(): any ;
	static unloadEffect(url:string): any ;
	static end(): any ;
}
declare class RenderTexture extends Node {
	sprite :Sprite;
	clearFlags :Sprite;
	clearDepthVal :number;
	autoDraw :boolean;
	clearStencilVal :number;
	clearColorVal :Color;
	constructor(width:number,height:number,format:number,depthStencilFormat:number): any ;
	cleanup(): any ;
	getSprite(): Sprite ;
	setSprite(sprite:Sprite): any ;
	setVirtualViewport(rtBegin:Point,fullRect:Rect,fullViewport:Rect): any ;
	initWithWidthAndHeight(width:number,height:number,format?:number,depthStencilFormat?:number): boolean ;
	begin(): any ;
	beginWithClear(r:number,g:number,b:number,a:number,depthValue?:number,stencilValue?:number): any ;
	end(): any ;
	clear(r:number|Rect,g:number,b:number,a:number): any ;
	clearRect(x:number,y:number,width:number,height:number): any ;
	clearDepth(depthValue:number): any ;
	clearStencil(stencilValue:number): any ;
	getClearFlags(): number ;
	setClearFlags(clearFlags:number): any ;
	getClearColor(): Color ;
	setClearColor(clearColor:Color): any ;
	getClearDepth(): number ;
	setClearDepth(clearDepth:number): any ;
	getClearStencil(): number ;
	setClearStencil(): number ;
	isAutoDraw(): boolean ;
	setAutoDraw(): boolean ;
	saveToFile(filePath:number,format:number): any ;
	newCCImage(): any ;
	listenToBackground(obj:any): any ;
	listenToForeground(obj:any): any ;
	static create(...p:any): any ;
}
declare class MotionStreak extends Node {
	texture :Texture2D;
	fastMode :boolean;
	startingPositionInitialized :boolean;
	constructor(fade:number,minSeg:number,stroke:number,color:number,texture:string|Texture2D): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	getBlendFunc(): BlendFunc ;
	setBlendFunc(src:number,dst:number): any ;
	getOpacity(): number ;
	setOpacity(opacity:any): any ;
	setOpacityModifyRGB(value:any): any ;
	isOpacityModifyRGB(): boolean ;
	isFastMode(): boolean ;
	setFastMode(fastMode:boolean): any ;
	isStartingPositionInitialized(): boolean ;
	setStartingPositionInitialized(startingPositionInitialized:boolean): any ;
	getStroke(): number ;
	setStroke(stroke:number): any ;
	initWithFade(fade:number,minSeg:number,stroke:number,color:number,texture:string|Texture2D): boolean ;
	tintWithColor(color:Color): any ;
	reset(): any ;
	setPosition(position:Point|number,yValue?:number): any ;
	getPositionX(): number ;
	setPositionX(x:number): any ;
	getPositionY(): number ;
	setPositionY(y:number): any ;
	update(delta:number): any ;
	static create(...p:any): any ;
}
declare class NodeGrid  {
	grid :GridBase;
	target :Node;
	getGrid(): GridBase ;
	setGrid(grid:GridBase): any ;
	setGridRect(rect:Rect): any ;
	getGridRect(): Rect ;
	setTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class ClippingNode extends Node {
	constructor(stencil?:Node): any ;
	alphaThreshold :number;
	inverted :boolean;
	stencil :Node;
	constructor(stencil?:Node): any ;
	init(...p:any): any ;
	onEnter(): any ;
	onEnterTransitionDidFinish(): any ;
	onExitTransitionDidStart(): any ;
	onExit(): any ;
	getAlphaThreshold(): number ;
	setAlphaThreshold(alphaThreshold:number): any ;
	isInverted(): boolean ;
	setInverted(inverted:boolean): any ;
	getStencil(): Node ;
	setStencil(stencil:Node): any ;
	static create(...p:any): any ;
}
declare class GridBase  {
	constructor(gridSize:Size,texture?:Texture2D,flipped?:boolean,rect:Rect): any ;
	isActive(): boolean ;
	setActive(active:number): any ;
	getReuseGrid(): number ;
	setReuseGrid(reuseGrid:any): any ;
	getGridSize(): Size ;
	setGridSize(gridSize:Size): any ;
	setGridRect(rect:Rect): any ;
	getGridRect(): Rect ;
	getStep(): Point ;
	setStep(step:Point): any ;
	isTextureFlipped(): boolean ;
	setTextureFlipped(flipped:boolean): any ;
	initWithSize(gridSize:Size,texture?:Texture2D,flipped?:boolean,rect?:Rect): boolean ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class Grid3D extends GridBase {
	constructor(gridSize:Size,texture?:Texture2D,flipped?:boolean,rect?:Rect): any ;
	vertex(pos:Point): Vertex3F ;
	getVertex(pos:Point): Vertex3F ;
	originalVertex(pos:Point): Vertex3F ;
	getOriginalVertex(pos:Point): Vertex3F ;
	setVertex(pos:Point,vertex:Vertex3F): any ;
	static create(...p:any): any ;
}
declare class TiledGrid3D extends GridBase {
	constructor(gridSize:Size,texture?:Texture2D,flipped?:boolean): any ;
	tile(pos:Point): Quad3 ;
	getTile(pos:Point): Quad3 ;
	getOriginalTile(pos:Point): Quad3 ;
	originalTile(pos:Point): Quad3 ;
	setTile(pos:Point,coords:Quad3): any ;
	static create(...p:any): any ;
}
declare class Grabber  {
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class DrawNode extends Node {
	getBlendFunc(): any ;
	setBlendFunc(blendFunc:any,dst:any): any ;
	setLineWidth(width:number): any ;
	getLineWidth(): number ;
	setDrawColor(color:Color): any ;
	getDrawColor(): Color ;
	static create(...p:any): any ;
	constructor(): any ;
	drawRect(origin:Point,destination:Point,fillColor:Color,lineWidth:number,lineColor:Color): any ;
	drawCircle(center:Point,radius:number,angle:number,segments:number,drawLineToCenter:boolean,lineWidth:number,color:Color): any ;
	drawQuadBezier(origin:Point,control:Point,destination:Point,segments:number,lineWidth:number,color:Color): any ;
	drawCubicBezier(origin:Point,control1:Point,control2:Point,destination:Point,segments:number,lineWidth:number,color:Color): any ;
	drawCatmullRom(points:Array<any>,segments:number,lineWidth:number,color:Color): any ;
	drawCardinalSpline(config:Array<any>,tension:number,segments:number,lineWidth:number,color:Color): any ;
	drawDot(pos:Point,radius:number,color:Color): any ;
	drawDots(points:Array<any>,radius:number,color:Color): any ;
	drawSegment(from:Point,to:Point,lineWidth:number,color:Color): any ;
	drawPoly_(verts:Array<any>,fillColor:Color,lineWidth:number,color:Color): any ;
	drawPoly(verts:Array<any>,fillColor:Color,lineWidth:number,color:Color): any ;
	clear(): any ;
}
declare class Action  {
	target :Node;
	originalTarget :Node;
	tag :number;
	constructor(): any ;
	copy(): Action ;
	clone(): Action ;
	isDone(): boolean ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	step(dt:number): any ;
	update(dt:number): any ;
	getTarget(): Node ;
	setTarget(target:Node): any ;
	getOriginalTarget(): Node ;
	setOriginalTarget(originalTarget:Node): any ;
	getTag(): number ;
	setTag(tag:number): any ;
	retain(): any ;
	release(): any ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class FiniteTimeAction extends Action {
	constructor(): any ;
	getDuration(): number ;
	setDuration(duration:number): any ;
	reverse(): Action ;
	clone(): FiniteTimeAction ;
}
declare class Speed extends Action {
	constructor(action:ActionInterval,speed:number): any ;
	constructor(action:ActionInterval,speed:number): any ;
	getSpeed(): number ;
	setSpeed(speed:number): any ;
	initWithAction(...p:any): boolean ;
	clone(): Speed ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	step(dt:number): any ;
	isDone(): boolean ;
	reverse(): Action ;
	setInnerAction(action:ActionInterval): any ;
	getInnerAction(): ActionInterval ;
	static create(...p:any): any ;
}
declare class Follow extends Action {
	constructor(followedNode:Node,rect:Rect): any ;
	leftBoundary :number;
	rightBoundary :number;
	topBoundary :number;
	bottomBoundary :number;
	constructor(followedNode:Node,rect:Rect): any ;
	clone(): Follow ;
	isBoundarySet(): boolean ;
	setBoudarySet(value:boolean): any ;
	initWithTarget(followedNode:Node,rect?:Rect): boolean ;
	step(dt:number): any ;
	isDone(): boolean ;
	stop(): any ;
	static create(...p:any): any ;
}
declare class Sequence extends ActionInterval {
	constructor(tempArray:Array<any>|FiniteTimeAction): any ;
	constructor(tempArray:Array<any>|FiniteTimeAction): any ;
	initWithTwoActions(actionOne:FiniteTimeAction,actionTwo:FiniteTimeAction): boolean ;
	clone(): Sequence ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class Repeat extends ActionInterval {
	constructor(action:FiniteTimeAction,times:number): any ;
	constructor(action:FiniteTimeAction,times:number): any ;
	initWithAction(...p:any): boolean ;
	clone(): Repeat ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	update(dt:number): any ;
	isDone(): boolean ;
	reverse(): Action ;
	setInnerAction(action:FiniteTimeAction): any ;
	getInnerAction(): FiniteTimeAction ;
	static create(...p:any): any ;
}
declare class RepeatForever extends ActionInterval {
	constructor(action:FiniteTimeAction): any ;
	constructor(action:FiniteTimeAction): any ;
	initWithAction(...p:any): boolean ;
	clone(): RepeatForever ;
	startWithTarget(target:Node): any ;
	step(dt:any): any ;
	isDone(): boolean ;
	reverse(): Action ;
	setInnerAction(action:ActionInterval): any ;
	getInnerAction(): ActionInterval ;
	static create(...p:any): any ;
}
declare class Spawn extends ActionInterval {
	constructor(tempArray:Array<any>|FiniteTimeAction): any ;
	initWithTwoActions(action1:FiniteTimeAction,action2:FiniteTimeAction): boolean ;
	clone(): Spawn ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class RotateTo extends ActionInterval {
	constructor(duration:number,deltaAngleX:number,deltaAngleY?:number): any ;
	constructor(duration:number,deltaAngleX:number,deltaAngleY?:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): RotateTo ;
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class RotateBy extends ActionInterval {
	constructor(duration:number,deltaAngleX:number,deltaAngleY?:number): any ;
	constructor(duration:number,deltaAngleX:number,deltaAngleY?:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): RotateBy ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class MoveBy extends ActionInterval {
	constructor(duration:number,deltaPos:Point|number,deltaY?:number): any ;
	constructor(duration:number,deltaPos:Point|number,deltaY?:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): MoveBy ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class MoveTo extends MoveBy {
	constructor(duration:number,position:Point|number,y:number): any ;
	constructor(duration:number,position:Point|number,y:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): MoveTo ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class SkewTo extends ActionInterval {
	constructor(t:number,sx:number,sy:number): any ;
	constructor(t:number,sx:number,sy:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): SkewTo ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class SkewBy extends SkewTo {
	constructor(t:number,sx:number,sy:number): any ;
	constructor(t:number,sx:number,sy:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): SkewBy ;
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class JumpBy extends ActionInterval {
	constructor(duration:number,position:Point|number,y?:number,height:number,jumps:number): any ;
	constructor(duration:number,position:Point|number,y?:number,height:number,jumps:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): JumpBy ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class JumpTo extends JumpBy {
	constructor(duration:number,position:Point|number,y?:number,height:number,jumps:number): any ;
	constructor(duration:number,position:Point|number,y?:number,height:number,jumps:number): any ;
	initWithDuration(...p:any): boolean ;
	startWithTarget(target:Node): any ;
	clone(): JumpTo ;
	static create(...p:any): any ;
}
declare class BezierBy extends ActionInterval {
	constructor(t:number,c:Array<any>): any ;
	constructor(t:number,c:Array<any>): any ;
	initWithDuration(...p:any): boolean ;
	clone(): BezierBy ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class BezierTo extends BezierBy {
	constructor(t:number,c:Array<any>): any ;
	constructor(t:number,c:Array<any>): any ;
	initWithDuration(...p:any): boolean ;
	clone(): BezierTo ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class ScaleTo extends ActionInterval {
	constructor(duration:number,sx:number,sy?:number): any ;
	constructor(duration:number,sx:number,sy?:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): ScaleTo ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class ScaleBy extends ScaleTo {
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	clone(): ScaleBy ;
	static create(...p:any): any ;
}
declare class Blink extends ActionInterval {
	constructor(duration:number,blinks:number): any ;
	constructor(duration:number,blinks:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): Blink ;
	update(dt:number): any ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class FadeTo extends ActionInterval {
	constructor(duration:number,opacity:number): any ;
	constructor(duration:number,opacity:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): FadeTo ;
	update(time:number): any ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class FadeIn extends FadeTo {
	constructor(duration:number): any ;
	constructor(duration:number): any ;
	reverse(): Action ;
	clone(): FadeIn ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class FadeOut extends FadeTo {
	constructor(duration:number): any ;
	constructor(duration:number): any ;
	reverse(): Action ;
	clone(): FadeOut ;
	static create(...p:any): any ;
}
declare class TintTo extends ActionInterval {
	constructor(duration:number,red:number,green:number,blue:number): any ;
	constructor(duration:number,red:number,green:number,blue:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): TintTo ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class TintBy extends ActionInterval {
	constructor(duration:number,deltaRed:number,deltaGreen:number,deltaBlue:number): any ;
	constructor(duration:number,deltaRed:number,deltaGreen:number,deltaBlue:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): TintBy ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class DelayTime extends ActionInterval {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): DelayTime ;
	static create(...p:any): any ;
}
declare class ReverseTime extends ActionInterval {
	constructor(action:FiniteTimeAction): any ;
	constructor(action:FiniteTimeAction): any ;
	initWithAction(...p:any): boolean ;
	clone(): ReverseTime ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	stop(): any ;
	static create(...p:any): any ;
}
declare class Animate extends ActionInterval {
	constructor(animation:Animation): any ;
	constructor(animation:Animation): any ;
	getAnimation(): Animation ;
	setAnimation(animation:Animation): any ;
	getCurrentFrameIndex(): number ;
	initWithAnimation(animation:Animation): boolean ;
	clone(): Animate ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	stop(): any ;
	static create(...p:any): any ;
}
declare class TargetedAction extends ActionInterval {
	constructor(target:Node,action:FiniteTimeAction): any ;
	constructor(target:Node,action:FiniteTimeAction): any ;
	initWithTarget(target:Node,action:FiniteTimeAction): boolean ;
	clone(): TargetedAction ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	update(dt:number): any ;
	getForcedTarget(): Node ;
	setForcedTarget(forcedTarget:Node): any ;
	static create(...p:any): any ;
}
declare class ActionInstant extends FiniteTimeAction {
	isDone(): boolean ;
	step(dt:number): any ;
	update(dt:number): any ;
	reverse(): Action ;
	clone(): FiniteTimeAction ;
}
declare class Show extends ActionInstant {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): FiniteTimeAction ;
	static create(...p:any): any ;
}
declare class Hide extends ActionInstant {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): Hide ;
	static create(...p:any): any ;
}
declare class ToggleVisibility extends ActionInstant {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): ToggleVisibility ;
	static create(...p:any): any ;
}
declare class RemoveSelf extends ActionInstant {
	constructor(isNeedCleanUp?:boolean): any ;
	static create(...p:any): any ;
}
declare class FlipX extends ActionInstant {
	constructor(flip:boolean): any ;
	constructor(flip:boolean): any ;
	initWithFlipX(flip:boolean): boolean ;
	update(dt:number): any ;
	reverse(): Action ;
	clone(): FiniteTimeAction ;
	static create(...p:any): any ;
}
declare class FlipY extends ActionInstant {
	constructor(flip:boolean): any ;
	constructor(flip:boolean): any ;
	initWithFlipY(flip:boolean): boolean ;
	update(dt:number): any ;
	reverse(): Action ;
	clone(): FlipY ;
	static create(...p:any): any ;
}
declare class Place extends ActionInstant {
	constructor(pos:Point|number,y?:number): any ;
	constructor(pos:Point|number,y?:number): any ;
	initWithPosition(x:number,y:number): boolean ;
	update(dt:number): any ;
	clone(): Place ;
	static create(...p:any): any ;
}
declare class CallFunc extends ActionInstant {
	constructor(selector:function,selectorTarget?:any,data?:any): any ;
	constructor(selector:function,selectorTarget?:any,data?:any): any ;
	initWithFunction(selector:function,selectorTarget:any,data?:any): boolean ;
	execute(): any ;
	update(dt:number): any ;
	getTargetCallback(): any ;
	setTargetCallback(sel:any): any ;
	clone(): CallFunc ;
	static create(...p:any): any ;
}
declare class ActionEase extends ActionInterval {
	constructor(action:ActionInterval): any ;
	constructor(action:ActionInterval): any ;
	initWithAction(...p:any): boolean ;
	clone(): ActionEase ;
	startWithTarget(target:Node): any ;
	stop(): any ;
	update(dt:number): any ;
	reverse(): Action ;
	getInnerAction(): ActionInterval ;
	static create(...p:any): any ;
}
declare class EaseRateAction extends ActionEase {
	constructor(action:ActionInterval,rate:number): any ;
	constructor(action:ActionInterval,rate:number): any ;
	setRate(rate:number): any ;
	getRate(): number ;
	initWithAction(...p:any): boolean ;
	clone(): EaseRateAction ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseIn extends EaseRateAction {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseIn ;
	static create(...p:any): any ;
}
declare class EaseOut extends EaseRateAction {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseOut ;
	static create(...p:any): any ;
}
declare class EaseInOut extends EaseRateAction {
	update(dt:number): any ;
	clone(): EaseInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseExponentialIn extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseExponentialIn ;
	static create(...p:any): any ;
}
declare class EaseExponentialOut extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseExponentialOut ;
	static create(...p:any): any ;
}
declare class EaseExponentialInOut extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseExponentialInOut ;
	static create(...p:any): any ;
}
declare class EaseSineIn extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseSineIn ;
	static create(...p:any): any ;
}
declare class EaseSineOut extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseSineOut ;
	static create(...p:any): any ;
}
declare class EaseSineInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseSineInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseElastic extends ActionEase {
	constructor(action:ActionInterval,period?:number): any ;
	constructor(action:ActionInterval,period?:number): any ;
	getPeriod(): number ;
	setPeriod(period:number): any ;
	initWithAction(...p:any): boolean ;
	reverse(): Action ;
	clone(): EaseElastic ;
	static create(...p:any): any ;
}
declare class EaseElasticIn extends EaseElastic {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseElasticIn ;
	static create(...p:any): any ;
}
declare class EaseElasticOut extends EaseElastic {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseElasticOut ;
	static create(...p:any): any ;
}
declare class EaseElasticInOut extends EaseElastic {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseElasticInOut ;
	static create(...p:any): any ;
}
declare class EaseBounce extends ActionEase {
	bounceTime(time1:number): number ;
	clone(): EaseBounce ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseBounceIn extends EaseBounce {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseBounceIn ;
	static create(...p:any): any ;
}
declare class EaseBounceOut extends EaseBounce {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseBounceOut ;
	static create(...p:any): any ;
}
declare class EaseBounceInOut extends EaseBounce {
	update(dt:number): any ;
	clone(): EaseBounceInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseBackIn extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseBackIn ;
	static create(...p:any): any ;
}
declare class EaseBackOut extends ActionEase {
	update(dt:number): any ;
	reverse(): Action ;
	clone(): EaseBackOut ;
	static create(...p:any): any ;
}
declare class EaseBackInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseBackInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseBezierAction extends ActionEase {
	constructor(action:Action): any ;
	constructor(action:Action): any ;
	update(dt:number): any ;
	clone(): EaseBezierAction ;
	reverse(): Action ;
	setBezierParamer(p0:any,p1:any,p2:any,p3:any): any ;
	static create(...p:any): any ;
}
declare class EaseQuadraticActionIn extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuadraticActionIn ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuadraticActionOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuadraticActionOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuadraticActionInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuadraticActionInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuarticActionIn extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuarticActionIn ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuarticActionOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuarticActionOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuarticActionInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuarticActionInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuinticActionIn extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuinticActionIn ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuinticActionOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuinticActionOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseQuinticActionInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseQuinticActionInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCircleActionIn extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCircleActionIn ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCircleActionOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCircleActionOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCircleActionInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCircleActionInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCubicActionIn extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCubicActionIn ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCubicActionOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCubicActionOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class EaseCubicActionInOut extends ActionEase {
	update(dt:number): any ;
	clone(): EaseCubicActionInOut ;
	reverse(): Action ;
	static create(...p:any): any ;
}
declare class CardinalSplineTo extends ActionInterval {
	constructor(duration:number,points:Array<any>,tension:number): any ;
	constructor(duration:number,points:Array<any>,tension:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): CardinalSplineTo ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	reverse(): Action ;
	updatePosition(newPos:Point): any ;
	getPoints(): Array<any> ;
	setPoints(points:Array<any>): any ;
	static create(...p:any): any ;
}
declare class CardinalSplineBy extends CardinalSplineTo {
	constructor(duration:number,points:Array<any>,tension:number): any ;
	constructor(duration:number,points:Array<any>,tension:number): any ;
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	updatePosition(newPos:Point): any ;
	clone(): CardinalSplineBy ;
	static create(...p:any): any ;
}
declare class CatmullRomTo extends CardinalSplineTo {
	constructor(dt:number,points:Array<any>): any ;
	constructor(dt:number,points:Array<any>): any ;
	initWithDuration(...p:any): any ;
	clone(): CatmullRomTo ;
	static create(...p:any): any ;
}
declare class CatmullRomBy extends CardinalSplineBy {
	constructor(dt:number,points:Array<any>): any ;
	static create :any;
}
declare class ActionTweenDelegate  {
	static updateTweenAction(value:any,key:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class ActionTween extends ActionInterval {
	constructor(duration:number,key:string,from:number,to:number): any ;
	constructor(duration:number,key:string,from:number,to:number): any ;
	static initWithDuration(...p:any): boolean ;
	static startWithTarget(target:Node): any ;
	static update(dt:number): any ;
	static reverse(): Action ;
	static clone(): ActionTween ;
	static create(...p:any): any ;
}
declare class ActionCamera extends ActionInterval {
	constructor(): any ;
	startWithTarget(target:Node): any ;
	clone(): ActionCamera ;
	reverse(): Action ;
}
declare class OrbitCamera extends ActionCamera {
	constructor(t:number,radius:number,deltaRadius:number,angleZ:number,deltaAngleZ:number,angleX:number,deltaAngleX:number): any ;
	constructor(t:number,radius:number,deltaRadius:number,angleZ:number,deltaAngleZ:number,angleX:number,deltaAngleX:number): any ;
	initWithDuration(...p:any): boolean ;
	sphericalRadius(): any ;
	startWithTarget(target:Node): any ;
	clone(): ActionCamera ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class GridAction extends ActionInterval {
	constructor(duration:number,gridSize:Size): any ;
	constructor(duration:number,gridSize:Size): any ;
	clone(): ActionInterval ;
	startWithTarget(target:Node): any ;
	reverse(): Action ;
	initWithDuration(...p:any): boolean ;
	getGrid(): GridBase ;
	static create(...p:any): any ;
}
declare class Grid3DAction extends GridAction {
	getGrid(): Grid3D ;
	getGridRect(): Rect ;
	vertex(position:Point): Vertex3F ;
	getVertex(position:Point): Vertex3F ;
	originalVertex(position:Point): Vertex3F ;
	getOriginalVertex(position:Point): Vertex3F ;
	setVertex(position:Point,vertex:Vertex3F): any ;
	static create(...p:any): any ;
}
declare class TiledGrid3DAction extends GridAction {
	tile(position:Point): Quad3 ;
	getTile(position:Point): Quad3 ;
	originalTile(position:Point): Quad3 ;
	getOriginalTile(position:Point): Quad3 ;
	setTile(position:Point,coords:Quad3): any ;
	getGrid(): TiledGrid3D ;
	static create(...p:any): any ;
}
declare class StopGrid extends ActionInstant {
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class ReuseGrid extends ActionInstant {
	constructor(times:number): any ;
	constructor(times:number): any ;
	initWithTimes(times:number): boolean ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class Waves3D extends Grid3DAction {
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class FlipX3D extends Grid3DAction {
	constructor(duration:number): any ;
	constructor(duration:number): any ;
	initWithDuration(...p:any): boolean ;
	initWithSize(gridSize:Size,duration:number): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class FlipY3D extends FlipX3D {
	constructor(duration:number): any ;
	constructor(duration:number): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Lens3D extends Grid3DAction {
	constructor(duration:number,gridSize:Size,position:Point,radius:number): any ;
	constructor(duration:number,gridSize:Size,position:Point,radius:number): any ;
	getLensEffect(): number ;
	setLensEffect(lensEffect:number): any ;
	setConcave(concave:boolean): any ;
	getPosition(): Point ;
	setPosition(position:Point): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Ripple3D extends Grid3DAction {
	constructor(duration:number,gridSize:Size,position:Point,radius:number,waves:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,position:Point,radius:number,waves:number,amplitude:number): any ;
	getPosition(): Point ;
	setPosition(position:Point): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): any ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Shaky3D extends Grid3DAction {
	constructor(duration:number,gridSize:Size,range:number,shakeZ:boolean): any ;
	constructor(duration:number,gridSize:Size,range:number,shakeZ:boolean): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Liquid extends Grid3DAction {
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Waves extends Grid3DAction {
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number,horizontal:boolean,vertical:boolean): any ;
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number,horizontal:boolean,vertical:boolean): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Twirl extends Grid3DAction {
	constructor(duration:number,gridSize:Size,position:Point,twirls:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,position:Point,twirls:number,amplitude:number): any ;
	getPosition(): Point ;
	setPosition(position:Point): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class ShakyTiles3D extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,range:number,shakeZ:boolean): any ;
	constructor(duration:number,gridSize:Size,range:number,shakeZ:boolean): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class ShatteredTiles3D extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,range:number,shatterZ:boolean): any ;
	constructor(duration:number,gridSize:Size,range:number,shatterZ:boolean): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class Tile  {
	constructor(position?:Point,startPosition?:Point,delta?:Size): any ;
}
declare class ShuffleTiles extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,seed:number): any ;
	constructor(duration:number,gridSize:Size,seed:number): any ;
	initWithDuration(...p:any): boolean ;
	shuffle(array:Array<any>,len:number): any ;
	getDelta(pos:Size): any ;
	placeTile(pos:Point,tile:Tile): any ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class FadeOutTRTiles extends TiledGrid3DAction {
	testFunc(pos:Point,time:number): any ;
	turnOnTile(pos:Point): any ;
	turnOffTile(pos:Point): any ;
	transformTile(pos:Point,distance:number): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class FadeOutBLTiles extends FadeOutTRTiles {
	testFunc(pos:Point,time:number): any ;
	static create(...p:any): any ;
}
declare class FadeOutUpTiles extends FadeOutTRTiles {
	testFunc(pos:Point,time:number): any ;
	static create(...p:any): any ;
}
declare class FadeOutDownTiles extends FadeOutUpTiles {
	testFunc(pos:Point,time:number): any ;
	static create(...p:any): any ;
}
declare class TurnOffTiles extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,seed?:number|null): any ;
	constructor(duration:number,gridSize:Size,seed?:number|null): any ;
	initWithDuration(...p:any): boolean ;
	shuffle(array:Array<any>,len:number): any ;
	turnOnTile(pos:Point): any ;
	turnOffTile(pos:Point): any ;
	startWithTarget(target:Node): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class WavesTiles3D extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,waves:number,amplitude:number): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class JumpTiles3D extends TiledGrid3DAction {
	constructor(duration:number,gridSize:Size,numberOfJumps:number,amplitude:number): any ;
	constructor(duration:number,gridSize:Size,numberOfJumps:number,amplitude:number): any ;
	getAmplitude(): number ;
	setAmplitude(amplitude:number): any ;
	getAmplitudeRate(): number ;
	setAmplitudeRate(amplitudeRate:any): any ;
	initWithDuration(...p:any): any ;
	update(dt:number): any ;
	static create(...p:any): any ;
}
declare class SplitRows extends TiledGrid3DAction {
	constructor(duration:number,rows:number): any ;
	constructor(duration:number,rows:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class SplitCols extends TiledGrid3DAction {
	constructor(duration:number,cols:number): any ;
	constructor(duration:number,cols:number): any ;
	initWithDuration(...p:any): boolean ;
	update(dt:number): any ;
	startWithTarget(target:Node): any ;
	static create(...p:any): any ;
}
declare class PageTurn3D extends Grid3DAction {
	update(): any ;
	static create(...p:any): any ;
}
declare class ProgressTimer extends Node {
	midPoint :Point;
	barChangeRate :Point;
	type :number;
	percentage :number;
	sprite :Sprite;
	reverseDir :boolean;
	constructor(sprite:Sprite): any ;
	getMidpoint(): Point ;
	setMidpoint(mpoint:Point): any ;
	getBarChangeRate(): Point ;
	setBarChangeRate(barChangeRate:Point): any ;
	getType(): number ;
	getPercentage(): number ;
	getSprite(): Sprite ;
	setPercentage(percentage:number): any ;
	setOpacityModifyRGB(bValue:any): any ;
	isOpacityModifyRGB(): boolean ;
	isReverseDirection(): boolean ;
	setColor(color:Color): any ;
	setOpacity(opacity:number): any ;
	getColor(): Color ;
	getOpacity(): number ;
	setReverseProgress(reverse:boolean): any ;
	setSprite(sprite:Sprite): any ;
	setType(type:number): any ;
	setReverseDirection(reverse:boolean): any ;
	initWithSprite(sprite:Sprite): boolean ;
	static create(...p:any): any ;
	static TEXTURE_COORDS_COUNT :number;
	static TEXTURE_COORDS :number;
	static TYPE_RADIAL :number;
	static TYPE_BAR :number;
}
declare class ProgressTo extends ActionInterval {
	constructor(duration:number,percent:number): any ;
	constructor(duration:number,percent:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): ProgressTo ;
	reverse(): Action ;
	startWithTarget(target:Node): any ;
	update(time:number): any ;
	static create(...p:any): any ;
}
declare class ProgressFromTo extends ActionInterval {
	constructor(duration:number,fromPercentage:number,toPercentage:number): any ;
	constructor(duration:number,fromPercentage:number,toPercentage:number): any ;
	initWithDuration(...p:any): boolean ;
	clone(): ProgressFromTo ;
	reverse(): Action ;
	startWithTarget(target:Node): any ;
	update(time:number): any ;
	static create(...p:any): any ;
}
declare class TransitionScene extends Scene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	visit(): any ;
	onEnter(): any ;
	onExit(): any ;
	cleanup(): any ;
	initWithDuration(...p:any): boolean ;
	finish(): any ;
	hideOutShowIn(): any ;
	static create(...p:any): any ;
}
declare class TransitionSceneOriented extends TransitionScene {
	constructor(t:number,scene:Scene,orientation:number): any ;
	constructor(t:number,scene:Scene,orientation:number): any ;
	initWithDuration(...p:any): boolean ;
	static create(...p:any): any ;
}
declare class TransitionRotoZoom extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionJumpZoom extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionMoveInL extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	initScenes(): any ;
	action(): any ;
	easeActionWithAction(action:ActionInterval): EaseOut ;
	static create(...p:any): any ;
}
declare class TransitionMoveInR extends TransitionMoveInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	static create(...p:any): any ;
}
declare class TransitionMoveInT extends TransitionMoveInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	static create(...p:any): any ;
}
declare class TransitionMoveInB extends TransitionMoveInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	static create(...p:any): any ;
}
declare class TransitionSlideInL extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	initScenes(): any ;
	action(): MoveBy ;
	easeActionWithAction(action:ActionInterval): any ;
	static create(...p:any): any ;
}
declare class TransitionSlideInR extends TransitionSlideInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	action(): MoveBy ;
	static create(...p:any): any ;
}
declare class TransitionSlideInB extends TransitionSlideInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	action(): MoveBy ;
	static create(...p:any): any ;
}
declare class TransitionSlideInT extends TransitionSlideInL {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	initScenes(): any ;
	action(): MoveBy ;
	static create(...p:any): any ;
}
declare class TransitionShrinkGrow extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	easeActionWithAction(action:any): EaseOut ;
	static create(...p:any): any ;
}
declare class TransitionFlipX extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionFlipY extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionFlipAngular extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionZoomFlipX extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionZoomFlipY extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionZoomFlipAngular extends TransitionSceneOriented {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class TransitionFade extends TransitionScene {
	constructor(t:number,scene:Scene,o:number): any ;
	constructor(t:number,scene:Scene,o:number): any ;
	onEnter(): any ;
	onExit(): any ;
	initWithDuration(...p:any): boolean ;
	static create(...p:any): any ;
}
declare class TransitionCrossFade extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	onExit(): any ;
	visit(): any ;
	draw(): any ;
	static create(...p:any): any ;
}
declare class TransitionTurnOffTiles extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	easeActionWithAction(action:ActionInterval): ActionInterval ;
	static create(...p:any): any ;
}
declare class TransitionSplitCols extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	easeActionWithAction(action:ActionInterval): EaseInOut ;
	action(): any ;
	static create(...p:any): any ;
}
declare class TransitionSplitRows extends TransitionSplitCols {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	action(): any ;
	static create(...p:any): any ;
}
declare class TransitionFadeTR extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	easeActionWithAction(action:ActionInterval): ActionInterval ;
	actionWithSize(size:Size): any ;
	static create(...p:any): any ;
}
declare class TransitionFadeBL extends TransitionFadeTR {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	actionWithSize(size:Size): any ;
	static create(...p:any): any ;
}
declare class TransitionFadeUp extends TransitionFadeTR {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	actionWithSize(size:Size): FadeOutUpTiles ;
	static create(...p:any): any ;
}
declare class TransitionFadeDown extends TransitionFadeTR {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	actionWithSize(size:Size): any ;
	static create(...p:any): any ;
}
declare class TransitionProgress extends TransitionScene {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	onEnter(): any ;
	onExit(): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressRadialCCW extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressRadialCW extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressHorizontal extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressVertical extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressInOut extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionProgressOutIn extends TransitionProgress {
	constructor(t:number,scene:Scene): any ;
	static create(...p:any): any ;
}
declare class TransitionPageTurn extends TransitionScene {
	constructor(t:number,scene:Scene,backwards:boolean): any ;
	constructor(t:number,scene:Scene,backwards:boolean): any ;
	initWithDuration(...p:any): boolean ;
	actionWithSize(vector:Size): ReverseTime|TransitionScene ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class LabelAtlas extends AtlasNode {
	constructor(strText:string,charMapFile:string,itemWidth?:number,itemHeight?:number,startCharMap?:number): any ;
	string :string;
	constructor(strText:string,charMapFile:string,itemWidth?:number,itemHeight?:number,startCharMap?:number): any ;
	textureLoaded(): boolean ;
	addLoadedEventListener(callback:function,target:Node): any ;
	initWithString(strText:string,charMapFile:string|Texture2D,itemWidth?:number,itemHeight?:number,startCharMap?:number): boolean ;
	setColor(color3:Color): any ;
	getString(): string ;
	updateAtlasValues(): any ;
	setString(label:string): any ;
	static create(...p:any): any ;
}
declare class LabelBMFont extends SpriteBatchNode {
	constructor(str:string,fntFile:string,width?:number,alignment?:number,imageOffset?:Point): any ;
	string :string;
	textAlign :number;
	boundingWidth :number;
	constructor(str:string,fntFile:string,width?:number,alignment?:number,imageOffset?:Point): any ;
	textureLoaded(): boolean ;
	addLoadedEventListener(callback:function,target:any): any ;
	isOpacityModifyRGB(): boolean ;
	setOpacityModifyRGB(opacityModifyRGB:boolean): any ;
	init(...p:any): any ;
	initWithString(str:string,fntFile:string,width?:number,alignment?:number,imageOffset?:Point): boolean ;
	createFontChars(): any ;
	updateString(fromUpdate:boolean): any ;
	getString(): string ;
	setString(newString:string,needUpdateLabel:boolean|null): any ;
	setCString(label:any): any ;
	updateLabel(): any ;
	setAlignment(alignment:number): any ;
	setBoundingWidth(width:number): any ;
	setLineBreakWithoutSpace(breakWithoutSpace:boolean): any ;
	setScale(scale:number,scaleY?:number): any ;
	setScaleX(scaleX:number): any ;
	setScaleY(scaleY:number): any ;
	setFntFile(fntFile:string): any ;
	getFntFile(): string ;
	setAnchorPoint(point:Point|number,y?:number): any ;
	static create(...p:any): any ;
}
declare class Codec  {
	static Base64 :typeof Base64 ;
	static GZip :typeof GZip ;
}
declare class Particle  {
	constructor(pos?:Point,startPos?:Point,color?:Color,deltaColor?:Color,size?:Size,deltaSize?:Size,rotation?:number,deltaRotation?:number,timeToLive?:number,atlasIndex?:number,modeA?:Particle.ModeA,modeB?:Particle.ModeA): any ;
	static ModeA :typeof cc_Particle_ModeA ;
	static ModeB :typeof cc_Particle_ModeB ;
	static TemporaryPoints :any;
}
declare class ParticleSystem extends Node {
	opacityModifyRGB :boolean;
	batchNode :SpriteBatchNode;
	active :boolean;
	shapeType :number;
	atlasIndex :number;
	particleCount :number;
	duration :number;
	sourcePos :Point;
	posVar :Point;
	life :number;
	lifeVar :number;
	angle :number;
	angleVar :number;
	startSize :number;
	startSizeVar :number;
	endSize :number;
	endSizeVar :number;
	startSpin :number;
	startSpinVar :number;
	endSpin :number;
	endSpinVar :number;
	gravity :Point;
	speed :Point;
	speedVar :Point;
	tangentialAccel :number;
	tangentialAccelVar :number;
	rotationIsDir :boolean;
	startRadius :number;
	startRadiusVar :number;
	endRadius :number;
	endRadiusVar :number;
	rotatePerS :number;
	rotatePerSVar :number;
	startColor :Color;
	startColorVar :Color;
	endColor :Color;
	endColorVar :Color;
	emissionRate :number;
	emitterMode :number;
	positionType :number;
	totalParticles :number;
	autoRemoveOnFinish :boolean;
	texture :Texture2D|HTMLImageElement|HTMLCanvasElement;
	constructor(plistFile:string|number): any ;
	ignoreColor(ignore:boolean): any ;
	initTexCoordsWithRect(pointRect:Rect): any ;
	getBatchNode(): ParticleBatchNode ;
	setBatchNode(batchNode:ParticleBatchNode): any ;
	getAtlasIndex(): number ;
	setAtlasIndex(atlasIndex:number): any ;
	getDrawMode(): number ;
	setDrawMode(drawMode:number): any ;
	getShapeType(): number ;
	setShapeType(shapeType:number): any ;
	isActive(): boolean ;
	getParticleCount(): number ;
	setParticleCount(particleCount:number): any ;
	getDuration(): number ;
	setDuration(duration:number): any ;
	getSourcePosition(): any ;
	setSourcePosition(sourcePosition:any): any ;
	getPosVar(): any ;
	setPosVar(posVar:Point): any ;
	getLife(): number ;
	setLife(life:number): any ;
	getLifeVar(): number ;
	setLifeVar(lifeVar:number): any ;
	getAngle(): number ;
	setAngle(angle:number): any ;
	getAngleVar(): number ;
	setAngleVar(angleVar:any): any ;
	getGravity(): Point ;
	setGravity(gravity:Point): any ;
	getSpeed(): number ;
	setSpeed(speed:number): any ;
	getSpeedVar(): number ;
	setSpeedVar(speedVar:number): any ;
	getTangentialAccel(): number ;
	setTangentialAccel(tangentialAccel:number): any ;
	getTangentialAccelVar(): number ;
	setTangentialAccelVar(tangentialAccelVar:number): any ;
	getRadialAccel(): number ;
	setRadialAccel(radialAccel:number): any ;
	getRadialAccelVar(): number ;
	setRadialAccelVar(radialAccelVar:number): any ;
	getRotationIsDir(): boolean ;
	setRotationIsDir(t:boolean): any ;
	getStartRadius(): number ;
	setStartRadius(startRadius:number): any ;
	getStartRadiusVar(): number ;
	setStartRadiusVar(startRadiusVar:number): any ;
	getEndRadius(): number ;
	setEndRadius(endRadius:number): any ;
	getEndRadiusVar(): number ;
	setEndRadiusVar(endRadiusVar:any): any ;
	getRotatePerSecond(): number ;
	setRotatePerSecond(degrees:number): any ;
	getRotatePerSecondVar(): number ;
	setRotatePerSecondVar(degrees:any): any ;
	getStartSize(): number ;
	setStartSize(startSize:number): any ;
	getStartSizeVar(): number ;
	setStartSizeVar(startSizeVar:number): any ;
	getEndSize(): number ;
	setEndSize(endSize:any): any ;
	getEndSizeVar(): number ;
	setEndSizeVar(endSizeVar:number): any ;
	getStartColor(): Color ;
	setStartColor(startColor:Color): any ;
	getStartColorVar(): Color ;
	setStartColorVar(startColorVar:Color): any ;
	getEndColor(): Color ;
	setEndColor(endColor:Color): any ;
	getEndColorVar(): Color ;
	setEndColorVar(endColorVar:Color): any ;
	getStartSpin(): number ;
	setStartSpin(startSpin:number): any ;
	getStartSpinVar(): number ;
	setStartSpinVar(startSpinVar:number): any ;
	getEndSpin(): number ;
	setEndSpin(endSpin:number): any ;
	getEndSpinVar(): number ;
	setEndSpinVar(endSpinVar:number): any ;
	getEmissionRate(): number ;
	setEmissionRate(emissionRate:number): any ;
	getTotalParticles(): number ;
	setTotalParticles(tp:number): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	getBlendFunc(): BlendFunc ;
	setBlendFunc(src:number,dst:number): any ;
	isOpacityModifyRGB(): boolean ;
	setOpacityModifyRGB(newValue:any): any ;
	isBlendAdditive(): boolean ;
	setBlendAdditive(isBlendAdditive:boolean): any ;
	getPositionType(): number ;
	setPositionType(positionType:number): any ;
	isAutoRemoveOnFinish(): boolean ;
	setAutoRemoveOnFinish(isAutoRemoveOnFinish:boolean): any ;
	getEmitterMode(): number ;
	setEmitterMode(emitterMode:number): any ;
	init(...p:any): any ;
	initWithFile(...p:any): boolean ;
	getBoundingBoxToWorld(): Rect ;
	initWithDictionary(dictionary:any,dirname:string): boolean ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	destroyParticleSystem(): any ;
	addParticle(): boolean ;
	initParticle(particle:Particle): any ;
	stopSystem(): any ;
	resetSystem(): any ;
	isFull(): boolean ;
	updateQuadWithParticle(particle:Particle,newPosition:Point): any ;
	postStep(): any ;
	update(dt:number): any ;
	updateWithNoTime(): any ;
	clone(): ParticleSystem ;
	setDisplayFrame(spriteFrame:SpriteFrame): any ;
	setTextureWithRect(texture:Texture2D,rect:Rect): any ;
	listenBackToForeground(obj:any): any ;
	drawMode :any;
	radialAccel :any;
	radialAccelVar :any;
	static create(...p:any): any ;
	static createWithTotalParticles(plistFile:string|number): ParticleSystem ;
	static ModeA :typeof cc_ParticleSystem_ModeA ;
	static ModeB :typeof cc_ParticleSystem_ModeB ;
	static SHAPE_MODE :number;
	static TEXTURE_MODE :number;
	static STAR_SHAPE :number;
	static BALL_SHAPE :number;
	static DURATION_INFINITY :number;
	static START_SIZE_EQUAL_TO_END_SIZE :number;
	static START_RADIUS_EQUAL_TO_END_RADIUS :number;
	static MODE_GRAVITY :number;
	static MODE_RADIUS :number;
	static TYPE_FREE :number;
	static TYPE_RELATIVE :number;
	static TYPE_GROUPED :number;
}
declare class ParticleFire extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleFireworks extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleSun extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleGalaxy extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleFlower extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleMeteor extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleSpiral extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleExplosion extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleSmoke extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleSnow extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleRain extends ParticleSystem {
	constructor(): any ;
	initWithTotalParticles(numberOfParticles:number): boolean ;
	static create(...p:any): any ;
}
declare class ParticleBatchNode extends ParticleSystem {
	constructor(fileImage:string|Texture2D,capacity:number): any ;
	texture :Texture2D|HTMLImageElement|HTMLCanvasElement;
	textureAtlas :TextureAtlas;
	constructor(fileImage:string|Texture2D,capacity:number): any ;
	initWithTexture(texture:Texture2D|HTMLImageElement|HTMLCanvasElement,capacity:number): boolean ;
	initWithFile(...p:any): boolean ;
	init(...p:any): boolean ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	insertChild(pSystem:ParticleSystem,index:number): any ;
	removeChild(child:Node): any ;
	reorderChild(child:Node,zOrder:number): any ;
	removeChildAtIndex(index:number,doCleanup:boolean): any ;
	removeAllChildren(doCleanup?:boolean): any ;
	disableParticle(particleIndex:number): any ;
	getTexture(): Texture2D ;
	setTexture(texture:Texture2D): any ;
	setBlendFunc(src:any,dst:number): any ;
	getBlendFunc(): BlendFunc ;
	getTextureAtlas(): TextureAtlas ;
	setTextureAtlas(textureAtlas:TextureAtlas): any ;
	static create(...p:any): any ;
}
declare class IMEDelegate  {
	constructor(): any ;
	removeDelegate(): any ;
	attachWithIME(): boolean ;
	detachWithIME(): boolean ;
	canAttachWithIME(): boolean ;
	didAttachWithIME(): any ;
	canDetachWithIME(): boolean ;
	didDetachWithIME(): any ;
	insertText(): any ;
	deleteBackward(): any ;
	getContentText(): string ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class imeDispatcher  {
	constructor(): any ;
	dispatchInsertText(text:string,len:number): any ;
	dispatchDeleteBackward(): any ;
	getContentText(): string ;
	dispatchKeyboardWillShow(info:any): any ;
	dispatchKeyboardDidShow(info:any): any ;
	dispatchKeyboardWillHide(info:any): any ;
	dispatchKeyboardDidHide(info:any): any ;
	addDelegate(delegate:IMEDelegate): any ;
	attachDelegateWithIME(delegate:IMEDelegate): boolean ;
	detachDelegateWithIME(delegate:IMEDelegate): boolean ;
	removeDelegate(delegate:IMEDelegate): any ;
	processKeycode(keyCode:number): any ;
}
declare class TextFieldDelegate  {
	onTextFieldAttachWithIME(sender:TextFieldTTF): boolean ;
	onTextFieldDetachWithIME(sender:TextFieldTTF): boolean ;
	onTextFieldInsertText(sender:TextFieldTTF,text:string,len:number): boolean ;
	onTextFieldDeleteBackward(sender:TextFieldTTF,delText:string,len:number): boolean ;
	onDraw(sender:TextFieldTTF): boolean ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class TextFieldTTF extends LabelTTF {
	constructor(placeholder:string,dimensions:Size,alignment:number,fontName:string,fontSize:number): any ;
	delegate :Node;
	charCount :number;
	placeHolder :string;
	colorSpaceHolder :Color;
	constructor(placeholder:string,dimensions:Size,alignment:number,fontName:string,fontSize:number): any ;
	getDelegate(): Node ;
	setDelegate(value:Node): any ;
	getCharCount(): number ;
	getColorSpaceHolder(): Color ;
	setColorSpaceHolder(value:Color): any ;
	setTextColor(textColor:Color): any ;
	initWithPlaceHolder(placeholder:string,dimensions:Size,alignment:number,fontName:string,fontSize:number): boolean ;
	setString(text:string): any ;
	getString(): string ;
	setPlaceHolder(text:string): any ;
	getPlaceHolder(): string ;
	draw(ctx:CanvasRenderingContext2D|WebGLRenderingContext): any ;
	visit(ctx:CanvasRenderingContext2D|WebGLRenderingContext): any ;
	attachWithIME(): boolean ;
	detachWithIME(): boolean ;
	canAttachWithIME(): boolean ;
	didAttachWithIME(): any ;
	canDetachWithIME(): boolean ;
	didDetachWithIME(): any ;
	deleteBackward(): any ;
	removeDelegate(): any ;
	setTipMessage(tipMessage:string): any ;
	getTipMessage(): string ;
	insertText(text:string,len:number): any ;
	getContentText(): string ;
	static create(...p:any): any ;
}
declare class MenuItem extends Node {
	constructor(callback:function|string,target:Node): any ;
	constructor(callback:function|string,target:Node): any ;
	isSelected(): boolean ;
	setOpacityModifyRGB(value:any): any ;
	isOpacityModifyRGB(): boolean ;
	setTarget(selector:function|string,rec:Node): any ;
	isEnabled(): boolean ;
	setEnabled(enable:boolean): any ;
	initWithCallback(callback:function|string,target:Node): boolean ;
	rect(): Rect ;
	selected(): any ;
	unselected(): any ;
	setCallback(callback:function|string,target:Node): any ;
	activate(): any ;
	enabled :any;
	static create(...p:any): any ;
	string :any;
	disabledColor :any;
	label :any;
	fontSize :any;
	fontName :any;
	normalImage :any;
	selectedImage :any;
	disabledImage :any;
	selectedIndex :any;
}
declare class MenuItemLabel extends MenuItem {
	constructor(label:Node,selector:function|string,target:Node): any ;
	string :string;
	label :Node;
	disabledColor :Color;
	constructor(label:Node,selector:function|string,target:Node): any ;
	getDisabledColor(): Color ;
	setDisabledColor(color:Color): any ;
	getLabel(): Node ;
	setLabel(label:Node): any ;
	setEnabled(enabled:boolean): any ;
	initWithLabel(label:Node,selector:function|string,target:Node): boolean ;
	setString(label:string): any ;
	getString(): string ;
	activate(): any ;
	selected(): any ;
	unselected(): any ;
	static create(...p:any): any ;
}
declare class MenuItemAtlasFont extends MenuItemLabel {
	constructor(value:string,charMapFile:string,itemWidth:number,itemHeight:number,startCharMap:string,callback:function|string|null,target:Node|null): any ;
	constructor(value:string,charMapFile:string,itemWidth:number,itemHeight:number,startCharMap:string,callback:function|string|null,target:Node|null): any ;
	initWithString(value:string,charMapFile:string,itemWidth:number,itemHeight:number,startCharMap:string,callback:function|string|null,target:Node|null): boolean ;
	static create(...p:any): any ;
}
declare class MenuItemFont extends MenuItemLabel {
	constructor(value:string,callback:function|string,target:Node): any ;
	static fontSize(): number ;
	static fontName(): string ;
	constructor(value:string,callback:function|string,target:Node): any ;
	initWithString(value:string,callback:function|string,target:Node): boolean ;
	static setFontSize(fontSize:number): any ;
	getFontSize(): number ;
	static setFontName(name:any): any ;
	getFontName(): string ;
	static create(...p:any): any ;
}
declare class MenuItemSprite extends MenuItem {
	constructor(normalSprite:Image|null,selectedSprite:Image|null,three:Image|Node|null,four:string|function|Node|null,five:string|function|null): any ;
	normalImage :Sprite;
	selectedImage :Sprite;
	disabledImage :Sprite;
	constructor(normalSprite:Image|null,selectedSprite:Image|null,three:Image|Node|null,four:string|function|Node|null,five:string|function|null): any ;
	getNormalImage(): Sprite ;
	setNormalImage(normalImage:Sprite): any ;
	getSelectedImage(): Sprite ;
	setSelectedImage(selectedImage:Sprite): any ;
	getDisabledImage(): Sprite ;
	setDisabledImage(disabledImage:Sprite): any ;
	initWithNormalSprite(normalSprite:Node,selectedSprite:Node,disabledSprite:Node,callback:function|string,target:Node): boolean ;
	selected(): any ;
	unselected(): any ;
	setEnabled(bEnabled:boolean): any ;
	static create(...p:any): any ;
}
declare class MenuItemImage extends MenuItemSprite {
	constructor(normalImage:string|null,selectedImage:string|null,disabledImage:string|null,callback:function|string|null,target:Node|null): any ;
	constructor(normalImage:string|null,selectedImage:string|null,disabledImage:string|null,callback:function|string|null,target:Node|null): any ;
	setNormalSpriteFrame(frame:SpriteFrame): any ;
	setSelectedSpriteFrame(frame:SpriteFrame): any ;
	setDisabledSpriteFrame(frame:SpriteFrame): any ;
	initWithNormalImage(normalImage:string|null,selectedImage:string|null,disabledImage:string|null,callback:function|string|null,target:Node|null): boolean ;
	static create(...p:any): any ;
}
declare class MenuItemToggle extends MenuItem {
	subItems :Array<any>;
	selectedIndex :number;
	constructor(): any ;
	getOpacity(): number ;
	setOpacity(opacity:number): any ;
	getColor(): Color ;
	setColor(Color:Color): any ;
	getSelectedIndex(): number ;
	setSelectedIndex(SelectedIndex:number): any ;
	getSubItems(): Array<any> ;
	setSubItems(subItems:MenuItem): any ;
	initWithItems(array:MenuItem,secondTolast:function|string,last:Node): boolean ;
	addSubItem(item:MenuItem): any ;
	activate(): any ;
	selected(): any ;
	unselected(): any ;
	setEnabled(enabled:boolean): any ;
	selectedItem(): MenuItem ;
	getSelectedItem(): MenuItem ;
	onEnter(): any ;
	static create(...p:any): any ;
}
declare class Menu extends Layer {
	constructor(menuItems:MenuItem|null): any ;
	constructor(menuItems:MenuItem|null): any ;
	onEnter(): any ;
	isEnabled(): boolean ;
	setEnabled(enabled:boolean): any ;
	initWithItems(args:Array<any>): boolean ;
	initWithArray(arrayOfItems:Array<any>): boolean ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	alignItemsVertically(): any ;
	alignItemsVerticallyWithPadding(padding:number): any ;
	alignItemsHorizontally(): any ;
	alignItemsHorizontallyWithPadding(padding:number): any ;
	alignItemsInColumns(): any ;
	alignItemsInRows(): any ;
	removeChild(child:Node): any ;
	onExit(): any ;
	setOpacityModifyRGB(value:any): any ;
	isOpacityModifyRGB(): boolean ;
	enabled :any;
	static create(...p:any): any ;
}
declare class ImageTGA  {
	constructor(status:number,type:number,pixelDepth:number,width:number,height:number,imageData:Array<any>,flipped:number): any ;
}
declare class BinaryStreamReader  {
	constructor(binaryData:any): any ;
}
declare class TMXTiledMap extends Node {
	constructor(tmxFile:string,resourcePath:string): any ;
	properties :Array<any>;
	mapOrientation :number;
	objectGroups :Array<any>;
	mapWidth :number;
	mapHeight :number;
	tileWidth :number;
	tileHeight :number;
	constructor(tmxFile:string,resourcePath:string): any ;
	getMapSize(): Size ;
	setMapSize(Var:Size): any ;
	getTileSize(): Size ;
	setTileSize(Var:Size): any ;
	getMapOrientation(): number ;
	setMapOrientation(Var:number): any ;
	getObjectGroups(): Array<any> ;
	setObjectGroups(Var:Array<any>): any ;
	getProperties(): any ;
	setProperties(Var:any): any ;
	initWithTMXFile(tmxFile:string): boolean ;
	initWithXML(tmxString:string,resourcePath:string): boolean ;
	allLayers(): Array<any> ;
	getLayer(layerName:string): TMXLayer ;
	getObjectGroup(groupName:string): TMXObjectGroup ;
	getProperty(propertyName:string): string ;
	propertiesForGID(GID:number): any ;
	getPropertiesForGID(GID:number): any ;
	static create(...p:any): any ;
}
declare class TMXLayerInfo  {
	properties :Array<any>;
	getProperties(): Array<any> ;
	setProperties(value:any): any ;
	static ATTRIB_NONE :number;
	static ATTRIB_BASE64 :number;
	static ATTRIB_GZIP :number;
	static ATTRIB_ZLIB :number;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class TMXTilesetInfo  {
	name :string;
	firstGid :number;
	spacing :number;
	margin :number;
	sourceImage :string;
	imageSize :Size|null;
	rectForGID(gid:number): Rect ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class TMXMapInfo extends saxParser {
	constructor(tmxFile:string,resourcePath:string): any ;
	properties :Array<any>;
	orientation :number;
	parentElement :any;
	parentGID :number;
	layerAttrs :any;
	storingCharacters :boolean;
	tmxFileName :string;
	currentString :string;
	mapWidth :number;
	mapHeight :number;
	tileWidth :number;
	tileHeight :number;
	constructor(tmxFile:string,resourcePath:string): any ;
	getOrientation(): number ;
	setOrientation(value:number): any ;
	getMapSize(): Size ;
	setMapSize(value:Size): any ;
	getTileSize(): Size ;
	setTileSize(value:Size): any ;
	getLayers(): Array<any> ;
	setLayers(value:TMXLayerInfo): any ;
	getTilesets(): Array<any> ;
	setTilesets(value:TMXTilesetInfo): any ;
	getObjectGroups(): Array<any> ;
	setObjectGroups(value:TMXObjectGroup): any ;
	getParentElement(): any ;
	setParentElement(value:any): any ;
	getParentGID(): number ;
	setParentGID(value:number): any ;
	getLayerAttribs(): any ;
	setLayerAttribs(value:any): any ;
	getStoringCharacters(): boolean ;
	setStoringCharacters(value:boolean): any ;
	getProperties(): Array<any> ;
	setProperties(value:any): any ;
	initWithTMXFile(tmxFile:string): Element ;
	initWithXML(tmxString:string,resourcePath:string): boolean ;
	parseXMLFile(tmxFile:string,isXmlString?:boolean): Element ;
	parseXMLString(xmlString:string): boolean ;
	getTileProperties(): any ;
	setTileProperties(tileProperties:any): any ;
	getCurrentString(): string ;
	setCurrentString(currentString:string): any ;
	getTMXFileName(): string ;
	setTMXFileName(fileName:string): any ;
	static create(...p:any): any ;
}
declare class TMXObjectGroup  {
	properties :Array<any>;
	groupName :string;
	constructor(): any ;
	getPositionOffset(): Point ;
	setPositionOffset(offset:Point): any ;
	getProperties(): Array<any> ;
	setProperties(Var:any): any ;
	getGroupName(): string ;
	setGroupName(groupName:string): any ;
	propertyNamed(propertyName:string): any ;
	objectNamed(objectName:string): any ;
	getObject(objectName:string): any ;
	getObjects(): Array<any> ;
	setObjects(objects:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class TMXLayer extends SpriteBatchNode {
	tiles :Array<any>;
	tileset :TMXTilesetInfo;
	layerOrientation :number;
	properties :Array<any>;
	layerName :string;
	layerWidth :number;
	layerHeight :number;
	tileWidth :number;
	tileHeight :number;
	constructor(tilesetInfo:TMXTilesetInfo,layerInfo:TMXLayerInfo,mapInfo:TMXMapInfo): any ;
	setContentSize(size:Size|number,height?:number): any ;
	getTexture(): Texture2D ;
	getLayerSize(): Size ;
	setLayerSize(Var:Size): any ;
	getMapTileSize(): Size ;
	setMapTileSize(Var:Size): any ;
	getTiles(): Array<any> ;
	setTiles(Var:Array<any>): any ;
	getTileset(): TMXTilesetInfo ;
	setTileset(Var:TMXTilesetInfo): any ;
	getLayerOrientation(): number ;
	setLayerOrientation(Var:number): any ;
	getProperties(): Array<any> ;
	setProperties(Var:Array<any>): any ;
	initWithTilesetInfo(tilesetInfo:TMXTilesetInfo,layerInfo:TMXLayerInfo,mapInfo:TMXMapInfo): boolean ;
	releaseMap(): any ;
	getTileAt(pos:Point|number,y?:number): Sprite ;
	getTileGIDAt(pos:Point|number,y?:number): number ;
	getTileFlagsAt(pos:Point|number,y?:number): number ;
	setTileGID(gid:number,posOrX:Point|number,flagsOrY:number,flags?:number): any ;
	removeTileAt(pos:Point|number,y?:number): any ;
	getPositionAt(pos:Point|number,y?:number): Point ;
	getProperty(propertyName:string): any ;
	setupTiles(): any ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	removeChild(child:Node): any ;
	getLayerName(): string ;
	setLayerName(layerName:string): any ;
	static create(...p:any): any ;
}
declare class PointObject  {
	getRatio(): Point ;
	setRatio(value:Point): any ;
	getOffset(): Point ;
	setOffset(value:Point): any ;
	getChild(): Node ;
	setChild(value:Node): any ;
	initWithCCPoint(ratio:Point,offset:Point): boolean ;
	static create(...p:any): any ;
	static extend(props:{ [key: string]: any }): function ;
	static implement(props:{ [key: string]: any }): function ;
}
declare class ParallaxNode extends Node {
	parallaxArray :Array<any>;
	getParallaxArray(): Array<any> ;
	setParallaxArray(value:Array<any>): any ;
	constructor(): any ;
	addChild(child:Node,localZOrder:number,tag:number|string|Point): any ;
	removeChild(child:Node): any ;
	removeAllChildren(cleanup?:boolean): any ;
	static create(...p:any): any ;
}
declare class Matrix3  {
	constructor(mat3?:math.Matrix3): any ;
}
declare class Matrix4  {
	constructor(mat4?:Matrix4): any ;
	static createByRotationX(radians:number,matrix?:Matrix4): Matrix4 ;
	static createByRotationY(radians:number,matrix?:Matrix4): any ;
	static createByRotationZ(radians:number,matrix:Matrix4): Matrix4 ;
	static createByPitchYawRoll(pitch:number,yaw:number,roll:number,matrix?:Matrix4): Matrix4 ;
	static createByQuaternion(quaternion:math.Quaternion,matrix?:Matrix4): Matrix4 ;
	static createByRotationTranslation(rotation:math.Matrix3,translation:math.Vec3,matrix?:Matrix4): Matrix4 ;
	static createByScale(x:number,y:number,z:number,matrix?:Matrix4): Matrix4 ;
	static createByTranslation(x:number,y:number,z:number,matrix?:Matrix4): Matrix4 ;
	static createPerspectiveProjection(fovY:number,aspect:number,zNear:number,zFar:number): Matrix4|null ;
	static createOrthographicProjection(left:number,right:number,bottom:number,top:number,nearVal:number,farVal:number): Matrix4 ;
	static createByAxisAndAngle(axis:math.Vec3,radians:number,matrix?:Matrix4): Matrix4 ;
}
declare class Vec3  {
	constructor(x?:number,y?:number,z?:number): any ;
}
declare class Quaternion  {
	constructor(x?:number|math.Quaternion,y?:number,z?:number,w?:number): any ;
	static rotationMatrix(mat3:any): any ;
	static rotationYawPitchRoll(yaw:any,pitch:any,roll:any): math.Quaternion ;
	static rotationBetweenVec3(vec1:math.Vec3,vec2:math.Vec3,fallback:math.Vec3): math.Quaternion ;
}
declare class AABB  {
	min :any;
	max :any;
	static containsPoint(point:math.Vec3): boolean ;
	assignFrom(aabb:math.AABB): any ;
	static assign(): any ;
}
declare class Matrix4Stack  {
	constructor(top?:Matrix4,stack?:Array<any>): any ;
}
declare class Base64  {
	static decode(input:string): string ;
	static decodeAsArray(input:string,bytes:number): Array<any> ;
}
declare class GZip  {
	constructor(data:Array<any>|string): any ;
	static gunzip(string:any): Array<any> ;
	static LITERALS :number;
	static NAMEMAX :number;
}
declare class cc_Particle_ModeA  {
	constructor(dir:Point,radialAccel:number,tangentialAccel:number): any ;
}
declare class cc_Particle_ModeB  {
	constructor(angle:number,degreesPerSecond:number,radius:number,deltaRadius:number): any ;
}
declare class cc_ParticleSystem_ModeA  {
	constructor(gravity?:Point,speed?:number,speedVar?:number,tangentialAccel?:number,tangentialAccelVar?:number,radialAccel?:number,radialAccelVar?:number,rotationIsDir?:boolean): any ;
	gravity :any;
	speed :any;
	speedVar :any;
	tangentialAccel :any;
	tangentialAccelVar :any;
	radialAccel :any;
	radialAccelVar :any;
	rotationIsDir :any;
}
declare class cc_ParticleSystem_ModeB  {
	constructor(startRadius?:number,startRadiusVar?:number,endRadius?:number,endRadiusVar?:number,rotatePerSecond?:number,rotatePerSecondVar?:number): any ;
	startRadius :any;
	startRadiusVar :any;
	endRadius :any;
	endRadiusVar :any;
	rotatePerSecond :any;
	rotatePerSecondVar :any;
}
declare class jsb  {
	static fileUtils :typeof fileUtils ;
	fullPathForFilename(arg0:string): string ;
	getStringFromFile(arg0:string): string ;
	removeFile(arg0:string): bool ;
	isAbsolutePath(arg0:string): bool ;
	renameFile(arg0:string,arg1:string,arg2:string): bool ;
	loadFilenameLookupDictionaryFromFile(arg0:string): any ;
	isPopupNotify(): bool ;
	getValueVectorFromFile(arg0:string): Array<any> ;
	getSearchPaths(): Array<any> ;
	writeToFile(arg0:{ [key: string]: any },arg1:string): bool ;
	getValueMapFromFile(arg0:string): { [key: string]: any } ;
	getFileSize(arg0:string): number ;
	removeDirectory(arg0:string): bool ;
	setSearchPaths(arg0:Array<any>): any ;
	writeStringToFile(arg0:string,arg1:string): bool ;
	setSearchResolutionsOrder(arg0:Array<any>): any ;
	addSearchResolutionsOrder(arg0:string): any ;
	addSearchPath(arg0:string): any ;
	isFileExist(arg0:string): bool ;
	purgeCachedEntries(): any ;
	fullPathFromRelativeFile(arg0:string,arg1:string): string ;
	isDirectoryExist(arg0:string): bool ;
	getSearchResolutionsOrder(): Array<any> ;
	createDirectory(arg0:string): bool ;
	createDirectories(arg0:string): bool ;
	getWritablePath(): string ;
	static EventAssetsManager :typeof EventAssetsManager ;
	getAssetsManager(): any ;
	getAssetId(): string ;
	getCURLECode(): number ;
	getMessage(): string ;
	getCURLMCode(): number ;
	getPercentByFile(): number ;
	getEventCode(): number ;
	getPercent(): number ;
	static EventListenerAssetsManager :typeof EventListenerAssetsManager ;
	init(...p:any): bool ;
	create(...p:any): any ;
	static AssetsManager :typeof AssetsManager ;
	getState(): number ;
	checkUpdate(): any ;
	getStoragePath(): string ;
	update(): any ;
	getLocalManifest(): any ;
	getRemoteManifest(): jsb.Manifest ;
	downloadFailedAssets(): any ;
	static Manifest :typeof Manifest ;
	getManifestFileUrl(): string ;
	isVersionLoaded(): bool ;
	isLoaded(): bool ;
	getPackageUrl(): string ;
	getVersion(): string ;
	getVersionFileUrl(): string ;
	static reflection :typeof reflection ;
}
declare class fileUtils  {
}
declare class EventAssetsManager  {
	constructor(arg0:string,arg1:any,arg2:number,arg3:number,arg4:number,arg5:string,arg6:string,arg7:number,arg8:number): any ;
}
declare class EventListenerAssetsManager  {
}
declare class AssetsManager  {
	constructor(arg0:string,arg1:string): any ;
}
declare class Manifest  {
}
declare class reflection  {
	static callStaticMethod(): any ;
}
declare class ClassManager  {
}
}

