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
  View,
} from 'react-native';
import GridView from './grid';

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
 
var datas = [
              {
                image:'https://facebook.github.io/react/img/logo_og.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://facebook.github.io/react/img/logo_og.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://facebook.github.io/react/img/logo_og.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://facebook.github.io/react/img/logo_og.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://facebook.github.io/react/img/logo_og.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
              {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/2000px-Wappen_Uri_matt.svg.png',
                upText:'Jess 32',
                downText:'SW developer',
              },
            ]

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
        <GridView
          itemWidth={130}
          items={datas}
          style={styles.gridView}
          renderItem={item => (
            <View>
              <Image style={styles.itemContainer} source={{url: item.image}}>
              </Image>
              <Text style={styles.itemUp}>{item.upText}</Text>
              <Text style={styles.itemDown}>{item.downText}</Text>
            </View>
          )}
        />
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
    gridView: {
    paddingTop: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemUp: {
    fontSize: 16,
    backgroundColor: '#0000',
    fontWeight: '600',
    // color: '#fff'
  },
  itemDown: {
    fontWeight: '600',
    fontSize: 12,
    backgroundColor: '#0000',
    // color: '#fff'
  },
});

AppRegistry.registerComponent('PhotoAlbum', () => PhotoAlbum);
