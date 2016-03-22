import {Page, NavController, NavParams} from 'ionic-angular';
import {Component} from 'angular2/core';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/blog/detail/detail.html',
})
export class DetailPage {

  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {

    this.params = params;
    this.id = this.params.get("id");
    this.blog = {
      title : "音泰思グループの皆様へ、IntaLinxへようこそ！",
      contents: `グループの皆様へ
IntaLinxへようこそ！

このプラットフォームを使って、グループ間の交流をどんどん広げて行きたいと思います。

業務ナビを使って、業務の可視化、改善して行くと同時に、お知らせやブローグ機能を使って
ノーハウをどんどん広げて行きましょう。

継続的に成果を出して行きましょう。

よろしくお願いします。
<a href='www.baidu.com'>baidu</a>`
    }
    this.comments = [
      {
        title : "test1",
        contents: "<a href='www.baidu.com'>baidu</a>"
      },
      {
        title : "test2",
        contents: "<a href='www.baidu.com'>baidu</a>"
      },
    ]
  }
}
