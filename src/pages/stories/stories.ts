import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed'; 
import { StoryPage } from '../story/story';

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  topic : String;
  stories : Array<any>;

  constructor(public feed: FeedProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StoriesPage');

    this.topic = 'edition';
    this.getStoriesFromProvider();

  }

  getStoriesFromProvider(){

  	this.feed.getStories(this.topic).subscribe( res => {
  		console.log(res.items);
  		this.stories = res.items;
  	});
  }


  storySelected(story){
  	this.navCtrl.push(StoryPage, story);
  }

  changeTopic(){

  	this.getStoriesFromProvider();
  }

}
