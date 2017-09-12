import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {

  story : Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.story = {
    	title: this.navParams.get('title'),
    	content: this.navParams.get('content'),
    	pubDate: this.navParams.get('pubDate'),
    	image: this.navParams.get('enclosure').link,
    	link: this.navParams.get('link'),
    	author: this.navParams.get('author')
    }
  }

}
