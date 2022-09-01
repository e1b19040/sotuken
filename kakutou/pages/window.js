import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {DataContext} from '../DataContext'
import {useContext} from 'react'
import { useRouter } from 'next/dist/client/router'
import phina from 'phina.js'
import phinacss from '../styles/phina.module.css'



export default function Home() {
  const router = useRouter();

/*
 * Runstant
 * 思いたったらすぐ開発. プログラミングに革命を...
 */

// グローバルに展開
phina.globalize();

// 定数
var ASSETS = {
  image: {
    bg: "http://jsrun.it/assets/a/G/5/Y/aG5YD.png",
    tomapiko: 'http://cdn.rawgit.com/phi-jp/phina.js/v0.2.0/assets/images/tomapiko_ss.png',
  },
};
var SCREEN_WIDTH  = 465;              // スクリーン幅
var SCREEN_HEIGHT = 465;              // スクリーン高さ
var SPEED         = 1;

/*
 * メインシーン
 */phina.define("DisplayButton", {
    // 継承
    superClass: 'Button',

    init(text) {
        // 初期化
        this.superInit({
            width: 150,             // 横サイズ
            height: 70,             // 縦サイズ
            text: text,             // 表示文字
            fontSize: 32,           // 文字サイズ
            fontColor: '#FFF19E',   // 文字色
            cornerRadius: 10,       // 角丸み
            fill: '#6A93CC',        // ボタン色
            stroke: '#DEE3FF',         // 枠色
            strokeWidth: 5,         // 枠太さ
            fontFamily: "digiFont",
        });

    },
});


phina.define("MainScene", {

  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function(options) {
    //superinit
    this.superInit(options);
    this.player = Sprite('tomapiko', 64, 64).addChildTo(this);
    this.player.setPosition(400, 400);
    this.player.frameIndex = 0;
    
    let self=this;
    let button=DisplayButton('ボタン');
    button.setPosition(this.gridX.center(),this.gridY.center()).addChildTo(this);
   
    button.onpush=function(){
      (100).times(function(){
        self.goleft()
      })
    }

    /* 背景
    this.bg = Sprite("bg").addChildTo(this);
    this.bg.origin.set(0, 0); // 左上基準に変更*/
  },

  goleft:function(){let self=this;
    this.player.x -= SPEED;
    this.player.scaleX = 1;
  }

  // 更新
  /*update: function(app) {
    var p = app.pointer;

    
    if (p.getPointing()) {
      var diff = this.player.x - p.x;
      if (Math.abs(diff) > SPEED) {
        // 右に移動
        if (diff < 0) {
          this.player.x += SPEED;
          this.player.scaleX = -1;
        }
        // 左に移動
        else {
          this.player.x -= SPEED;
          this.player.scaleX = 1;
        }

        // フレームアニメーション
        if (app.frame % 4 === 0) {
          this.player.frameIndex = (this.player.frameIndex === 12) ? 13:12;
        }
      }
    }
    else {
      // 待機
      this.player.frameIndex = 0;
    }
  }*/
});

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main',   // MainScene から開始
    width: SCREEN_WIDTH,  // 画面幅
    height: SCREEN_HEIGHT,// 画面高さ
    assets: ASSETS,       // アセット読み込み
    //fit:false,
    //query:phinacss.mycanvas
  });

  //app.enableStats();

  // 実行
  app.run();
});

  return(
    <>
    </>
  )
}
