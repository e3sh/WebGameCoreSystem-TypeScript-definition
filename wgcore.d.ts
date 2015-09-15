//　WebGameCoreSystem declare file (to ver.2012/12/16)
// 2015/09/08

// GameCore

interface InitialSystemParam {
    canvasId: string,
    resolution: { w: number, h: number };
}

interface fontParam {
    name: string,
    id: string,
    pattern: {
        x: number, y: number, w: number, h: number
    }[]
}

interface spPattern {
    image: string,
    wait: number,
    pattern: { x: number, y: number, w: number, h: number, r: number, fv: boolean, fh: boolean }[];
}

declare class GameCore {
    constructor(sysParam: InitialSystemParam[]);

    public setSpFont(fontParam: fontParam): void;

    public task: GameTaskControl;
    public asset: Asset;

    public keyboard: inputKeyboard;
    public mouse: inputMouse;
    public dsp: DisplayControl;
    public screen: DisplayControl[];

    public sound: SoundControl;

    public sprite: SpriteControl;
    public font: SpriteFontControl;

    public run(): void;
    public pause(): void;

}

// GameTaskControl

declare class GameTaskControl {

    public read(taskid: string): Gametask;
    public add(task: Gametask): void;
    public del(task: Gametask): void;
}

/*
declare class Gametask {
    constructor(id: string);

    public id: string;

    public enable: boolean;
    public visible: boolean;
    public preFlag: boolean;

    public init(g: GameCore): void;
    public pre(g: GameCore): void;
    public step(g: GameCore): void;
    public draw(g: GameCore): void;
    public post(g: GameCore): void;
}
*/

// GameAssetManager

declare class Asset {
    public imageLoad(id: string, url: string): ImageObject;
    public soundLoad(id: string, url: string): SoundObject;

    public image: ImageObject[];
    public sound: SoundObject[];
}

declare class ImageObject {
    public ready: boolean;
}

declare class SoundObject {
    public ready: boolean;
}

// DisplayControl

declare class DisplayControl {
    public cw: number;
    public ch: number;

    public print(str: string, x: number, y: number, c?: string): void;
    //    public print(str: string, x: number, y: number): void;
    public clear(c_str: string): void;
    public reset(): void;
    public draw(): void;
}


// SpriteControl
declare class SpriteControl {
    public set(spNumber: number, PatternID: string, colisionEnable?: boolean, colWidth?: number, colHeight?: number): void;
    public pos(spNumber: number, x: number, y: number, r?: number, zoom?: number): void;
    public put(spNumber: number, x: number, y: number, r?: number, zoom?: number): void;
    public setMove(spNumber: number, r: number, v: number, alive: number): void;
    public check(spNumber: number): number[];
    public get(): SpItem;
    public get(spNumber): SpItem;

    public useScreen(screenNo: number): void;
    public allDrawSprite(): void;

    public setPattern(PatternID: string, spPattern: spPattern): void;

}

interface SpItem {
    x: number;
    y: number;
    r: number;
    z: number;
    priority: number;
    collisionEnable: number;
    collision: {
        w: number, h: number
    };
    id: string;
    count: number;
    pcnt: number;
    visible: boolean;
    hit: number[];

    alive: number;
    vx: number;
    vy: number;
}

// SpriteFontControl
declare class SpriteFontControl {

    public useScreen(screenNo: number): void;
    public putchar(text: string, x: number, y: number, z?: number);
}

// KeyboardControl
declare class inputKeyboard {
    public upkey: boolean;
    public downkey: boolean;
    public leftkey: boolean;
    public rightkey: boolean;

    public shift: boolean;
    public ctrl: boolean;
    public alt: boolean;
    public space: boolean;

    public qkey: boolean;
    public wkey: boolean;
    public ekey: boolean;

    public akey: boolean;
    public skey: boolean;
    public dkey: boolean;

    public zkey: boolean;
    public xkey: boolean;
    public ckey: boolean;

    public keyStateReset(): void;
    public check(): boolean[];
    public state(): boolean[];
}

// MouseControl
declare class inputMouse {
    public check(): { x: number; y: number; button: number; wheel: number };
    public check_last(): { x: number; y: number; button: number; wheel: number };
}

// SoundControl
declare class SoundControl {
    public play(id: string): void;
    public effect(id: string): void;
    public running(id: string): boolean;
    public info(id: string): number;
    public restart(id: string): void;
    public volume(id: string, vol: number): void;
}
