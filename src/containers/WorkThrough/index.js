import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Carousel from './Carousel';

import FlowItem from './FlowItem';


export default class WorkThrough extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : 0,
            finished : false,
            back : ""
        }
    }

    _onAnimNextPage = (next) => {
        const { screens } = this.props.data;
        let current = this.state.current;

        if(parseInt(current) == (screens.length - 1) && parseInt(next) == 0)
        {
            this.setState({
                current : next,
                finished : true
            })
            this.props.onFinished();
        }
        else{
            this.setState({current : next})
        }
    }
    render(){
        const { bgColor , fgColor, screens } = this.props.data;

        let backgroundColor = bgColor;
        const backgroundStyle = {
            backgroundColor : backgroundColor,
        }

        const textColorStyle = {
            color : fgColor
        }

        const { iconpackage } = this.props;

        const { finished } = this.state;
        let CarouselComponent;
        if(!finished)
            CarouselComponent = (
                <Carousel
                    style={styles.carousel}
                    bullets = {true}
                    autoplay = { false }
                    currentPage = {0}
                    onPageBeingChanged={this._onAnimNextPage}
                    isLooped = {false}
                    >
                    {
                        screens.map((item,i)=>{
                            return(
                                <FlowItem
                                    key={i}
                                    style={styles.flowItem}
                                    textColor = {textColorStyle}
                                    data={item}
                                    iconpackage = {iconpackage}/>
                            )
                        })
                    }
                </Carousel>
            );
        return(
            <View style={[styles.container,backgroundStyle]}>
                {CarouselComponent}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carousel : {
        width : "100%",
        flex : 0.5
    },
    flowItem : {
        width : "100%",
        flex : 0.5
    }
});
