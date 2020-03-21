import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import URL from '../API/Api'
import axios from 'axios'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',
      data: []
    };
  }

  static navigationOptions = () => {
    return {
        header: null
    }
  };

  componentDidMount = async() => {
    await this.setState({
      ID: this.props.navigation.getParam('ID')
    })

    await axios.get(`${URL}/users/${this.state.ID}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                data: res.data,
            })
        })
        .catch(error => {
            alert('Không thể tải dữ liệu')
        })
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Appbar.Content
            title="CHI TIẾT"
          />
        </Appbar.Header>
        <List.Subheader>Thông tin chi tiết</List.Subheader>
        <List.Item
            style={styles.listItem}
            title={this.state.data.name}
            description='Họ và tên'
            left={() => <List.Icon color="#000" icon="face" color='#FC0107'/>}
        />
        <List.Item
            style={styles.listItem}
            title={this.state.data.location}
            description='Địa chỉ'
            left={() => <List.Icon color="#000" icon="assistant-photo" color='#FC0107'/>}
        />
        <List.Item
            style={styles.listItem}
            title={this.state.data.email}
            description='Email ID'
            left={() => <List.Icon color="#000" icon="comment" color='#FC0107'/>}
        />
        <List.Item
            style={styles.listItem}
            title={this.state.data.phone}
            description='Số điện thoại'
            left={() => <List.Icon color="#000" icon="call" color='#FC0107'/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: Dimensions.get('window').height,
      backgroundColor: '#FFF'
  },
  listItem: {
      marginTop: 10,
      marginHorizontal: 15,
      borderRadius: 20,
      padding: 0,
      backgroundColor: '#FAFAFA'
  }
})
