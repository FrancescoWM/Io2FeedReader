import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedProvider {

  apiUrl : string;
  feedUrl : string;

  constructor(public http: Http) {
    //console.log('Hello FeedProvider Provider');

    this.apiUrl = ' https://api.rss2json.com/v1/api.json';
    this.feedUrl = 'http://rss.cnn.com/rss';

  }

  getStories(topic){

  	//Get request
  	return this.http.get(this.apiUrl+'?rss_url='+this.feedUrl+'/'+topic+'.rss').map(res => res.json());

  }

}
