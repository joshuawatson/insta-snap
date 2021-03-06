import React, { PropTypes, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TabIcon extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={this.props.selected ? this.props.selectedTabIcon : this.props.tabIcon }
          size={22}
          color={ this.props.selected ? '#66b2ff' : '#FFFFFF'}
          style={{width:22,height:22,alignSelf:'center',fontWeight:'300'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  }
});


TabIcon.propTypes = {
  selectedTabIcon:PropTypes.string.isRequired,
  tabIcon:PropTypes.string.isRequired
};