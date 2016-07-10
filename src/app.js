// 背景の作成


/**
 * デフォルトレイヤ・シーン
 */
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});






var SampleLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //TODO 背景作成は関数化する
        var background = cc.Sprite.create(res.background_01_png);
        background.setPosition(size.width/2, size.height/2);
        this.addChild(background, 1);

        //TODO 半透明層を追加する
        // var semi_transparent_layer = cc.LayerColor.create(cc.Color(0, 0, 0, 50), size.width, size.height);
        // semi_transparent_layer.setPosition(0, 0);
        // this.addChild(semi_transparent_layer, 0);

        return true;
    }
});

var Samp
    onEnter:function () {
        this._super();
        var layer = new SampleLayer();
        this.addChild(layer);
    }
});
