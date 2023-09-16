import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/colors';
import { scale } from '../config/dimentions';

import VectorUp from '../assets/images/Up.svg';
import VectorRight from '../assets/images/VectorRight.svg';
import VectorMessage from '../assets/images/message.svg';

import VectorUp1 from '../assets/images/Up1.svg';
import VectorRight1 from '../assets/images/VectorRight1.svg';
import VectorMessage1 from '../assets/images/message1.svg';

interface Props {
    color: string;
    onComment: any;
}

const SideMenu = (props: Props) => {
    return (
        <>
            {props.color === "white" ?
                (
                    <View style={styles.background}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <VectorUp width={40} height={50} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={props.onComment} >
                            <VectorMessage width={40} height={50} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <VectorRight width={40} height={50} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.background}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <VectorUp1 width={40} height={50} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={props.onComment}>
                            <VectorMessage1 width={40} height={50} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <VectorRight1 width={40} height={50} />
                        </TouchableOpacity>
                    </View>
                )}
        </>
    );
};
export default SideMenu;

const styles = StyleSheet.create({
    background: {
        flexDirection: 'column',
        position: 'absolute',
        right: scale(20),
        bottom: scale(70)
    },
    message: {
        color: AppColors.white
    }
});
