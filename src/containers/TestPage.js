import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import WorkThrough from 'WorkThrough';
import {icons} from '@assets';

// example data
const flowData = {
    bgColor: "#788eec", 
    fgColor: "white", 
    screens:
    [
        {icon: "react-native.png", title: "React Native Walkthrough", description: "Welcome your users with a beautiful app walkthrough."},
        {icon: "educate.png", title: "Educate", description: "Showcase features to new users so that they get to love your app."},
        {icon: "bell.png", title: "Get Notified", description: "Describe the value proposition of each core feature."},
    ]
}

export default class TestPage extends Component {
    componentDidMount(){
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('loginScreen');
        }, 1000);
    }

    _onWorkFlowFinished = () => {
        this.props.navigation.navigate('AfterTestPage');
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage = {icons}
                    data={flowData}
                    onFinished = {this._onWorkFlowFinished}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
