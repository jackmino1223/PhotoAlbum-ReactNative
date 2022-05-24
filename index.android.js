/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const windowWidth = window.width > window.height? window.height:window.width;
const windowHeight = window.width < window.height? window.height:window.width;
const CommonWidgets = {
  renderStatusBar(leftmargin, rightmargin, img, txt1, txt2) {
    return (
      <View style={{width: windowWidth/2 - leftmargin - rightmargin, marginRight: rightmargin, marginLeft: leftmargin, flexDirection: 'column'}}>
        <Image resizeMode='stretch' style={{ width: windowWidth/2 - leftmargin - rightmargin, height: windowWidth/2 - 10}} 
        source={{uri: img}}>
        </Image>
        <Text style={{fontSize: 20}}>
          {txt1}
        </Text>
        <Text style={{fontSize: 17}}>
          {txt2}
        </Text>
      </View>
    );
  }
}
var img = ['https://facebook.github.io/react/img/logo_og.png',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN6xgh6k5OqruQm9jPEKgcQTAyrnDKZ6ulSvxKk4Y3CPbBME2',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g'];
 
var upTxt=['Jess, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23'];
var downTxt=['SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer'];
export default class PhotoAlbum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: windowHeight/8,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[{backgroundColor: 'transparent',borderWidth: 0, fontSize: windowHeight/24, color: 'rgb(239, 30, 90)'}]}>
                  eastmeeteast
            </Text>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[0], upTxt[0],downTxt[0])}
            {CommonWidgets.renderStatusBar(5,10,img[1], upTxt[1],downTxt[1])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[2], upTxt[2],downTxt[2])}
            {CommonWidgets.renderStatusBar(5,10,img[3], upTxt[3],downTxt[3])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[4], upTxt[4],downTxt[4])}
            {CommonWidgets.renderStatusBar(5,10,img[5], upTxt[5],downTxt[5])}
         </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[6], upTxt[6],downTxt[6])}
            {CommonWidgets.renderStatusBar(5,10,img[7], upTxt[7],downTxt[7])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[8], upTxt[8],downTxt[8])}
            {CommonWidgets.renderStatusBar(5,10,img[9], upTxt[9],downTxt[9])}
        </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PhotoAlbum', () => PhotoAlbum);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const windowWidth = window.width > window.height? window.height:window.width;
const windowHeight = window.width < window.height? window.height:window.width;
const CommonWidgets = {
  renderStatusBar(leftmargin, rightmargin, img, txt1, txt2) {
    return (
      <View style={{width: windowWidth/2 - leftmargin - rightmargin, marginRight: rightmargin, marginLeft: leftmargin, flexDirection: 'column'}}>
        <Image resizeMode='stretch' style={{ width: windowWidth/2 - leftmargin - rightmargin, height: windowWidth/2 - 10}} 
        source={{uri: img}}>
        </Image>
        <Text style={{fontSize: 20}}>
          {txt1}
        </Text>
        <Text style={{fontSize: 17}}>
          {txt2}
        </Text>
      </View>
    );
  }
}
var img = ['https://facebook.github.io/react/img/logo_og.png',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN6xgh6k5OqruQm9jPEKgcQTAyrnDKZ6ulSvxKk4Y3CPbBME2',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g'];
 
var upTxt=['Jess, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23'];
var downTxt=['SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer'];
export default class PhotoAlbum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: windowHeight/8,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[{backgroundColor: 'transparent',borderWidth: 0, fontSize: windowHeight/24, color: 'rgb(239, 30, 90)'}]}>
                  eastmeeteast
            </Text>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[0], upTxt[0],downTxt[0])}
            {CommonWidgets.renderStatusBar(5,10,img[1], upTxt[1],downTxt[1])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[2], upTxt[2],downTxt[2])}
            {CommonWidgets.renderStatusBar(5,10,img[3], upTxt[3],downTxt[3])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[4], upTxt[4],downTxt[4])}
            {CommonWidgets.renderStatusBar(5,10,img[5], upTxt[5],downTxt[5])}
         </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[6], upTxt[6],downTxt[6])}
            {CommonWidgets.renderStatusBar(5,10,img[7], upTxt[7],downTxt[7])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[8], upTxt[8],downTxt[8])}
            {CommonWidgets.renderStatusBar(5,10,img[9], upTxt[9],downTxt[9])}
        </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PhotoAlbum', () => PhotoAlbum);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const windowWidth = window.width > window.height? window.height:window.width;
const windowHeight = window.width < window.height? window.height:window.width;
const CommonWidgets = {
  renderStatusBar(leftmargin, rightmargin, img, txt1, txt2) {
    return (
      <View style={{width: windowWidth/2 - leftmargin - rightmargin, marginRight: rightmargin, marginLeft: leftmargin, flexDirection: 'column'}}>
        <Image resizeMode='stretch' style={{ width: windowWidth/2 - leftmargin - rightmargin, height: windowWidth/2 - 10}} 
        source={{uri: img}}>
        </Image>
        <Text style={{fontSize: 20}}>
          {txt1}
        </Text>
        <Text style={{fontSize: 17}}>
          {txt2}
        </Text>
      </View>
    );
  }
}
var img = ['https://facebook.github.io/react/img/logo_og.png',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN6xgh6k5OqruQm9jPEKgcQTAyrnDKZ6ulSvxKk4Y3CPbBME2',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/UriAvnery.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKWhNNLGEPBJno1d7Db7bYk-Z63sSuC90n5PHGUTLpmSWuWzqNg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzWRWiCAIONXOKMkiZ4fBz-Y_ig9CMckVbIwEgZJ0YiVYPeJO4g'];
 
var upTxt=['Jess, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23', 'Ted, 23', 'Baby, 23','Jes, 32', 'Tony, 23'];
var downTxt=['SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer', 'Game Developer', 'Actor','SW developer', 'RN developer'];
export default class PhotoAlbum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: windowHeight/8,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[{backgroundColor: 'transparent',borderWidth: 0, fontSize: windowHeight/24, color: 'rgb(239, 30, 90)'}]}>
                  eastmeeteast
            </Text>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[0], upTxt[0],downTxt[0])}
            {CommonWidgets.renderStatusBar(5,10,img[1], upTxt[1],downTxt[1])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[2], upTxt[2],downTxt[2])}
            {CommonWidgets.renderStatusBar(5,10,img[3], upTxt[3],downTxt[3])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[4], upTxt[4],downTxt[4])}
            {CommonWidgets.renderStatusBar(5,10,img[5], upTxt[5],downTxt[5])}
         </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[6], upTxt[6],downTxt[6])}
            {CommonWidgets.renderStatusBar(5,10,img[7], upTxt[7],downTxt[7])}
          </View>
          <View style={{flexDirection: 'row'}}>
            {CommonWidgets.renderStatusBar(10,5,img[8], upTxt[8],downTxt[8])}
            {CommonWidgets.renderStatusBar(5,10,img[9], upTxt[9],downTxt[9])}
        </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PhotoAlbum', () => PhotoAlbum);
