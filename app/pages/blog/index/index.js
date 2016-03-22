import {Page, NavController} from 'ionic-angular';

import {TranslatePipe} from 'ng2-translate/ng2-translate';

import {DetailPage} from '../detail/detail';

/*
  Generated class for the BlogIndexPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/blog/index/index.html',
    pipes: [TranslatePipe]
})
export class BlogIndexPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
        
        this.blogs = [
            {
                "id": "1",
                "title": "test",
                "summary": "test1"
            },
            {
                "id": "2",
                "title": "test",
                "summary": "test1"
            }
        ]
    }


    openDetail(blog) {
        this.nav.push(DetailPage, {
            "id": blog.id
        });
    }
}
