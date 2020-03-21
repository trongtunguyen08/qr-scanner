import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'
const SCREEN_HEIGHT = Dimensions.get("window").height;

/*  TRANG DASHBOARD */
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scanned: false,
          status: null,
          scannerData: []
        };
    }
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    componentDidMount = async() => {
        await this.setState({
            scanned: false
        })
        this.handleBarCodeScanned();
    }
    
    checkMultiPermissions = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.CAMERA_ROLL,
            Permissions.CAMERA
        );
        this.setState({ status })
    }

    _chuyenTrang = (ID) => {
        
    }

    handleBarCodeScanned = ({ data }) => {
        this.setState({
            scanned: true,
        });
        this.props.navigation.navigate('Details', {ID: data})
    };

    render() {
        return (
            <BarCodeScanner style={[styles.container]}
                onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
            >
                {this.state.scanned}
            </BarCodeScanner>
        );
    }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    height:SCREEN_HEIGHT,
  },
};

