import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Cross from '../assets/images/Cross.svg';
import AppColors from '../config/colors';
import { Metrics, scale } from '../config/dimentions';
import CategoryModal from './CategoryModal';
import { useIsFocused } from '@react-navigation/native';
const houseIcon = require('../assets/images/house.png');
const searchIcon = require('../assets/images/search.png');
const magicIcon = require('../assets/images/magic.png');
const bookIcon = require('../assets/images/book.png');

interface Props {
    onSearch: any;
    onHome: any;
    onProfile: any;
    onGoToBusiness: any;
    onSports: any;
    onCulture: any;
    onWorld: any;
    onUSA: any;
}

const Footer = (props: Props) => {
    const isFocused = useIsFocused();

    const [refreshKey, setRefreshKey] = useState(0);
  
    useEffect(() => {
      if (isFocused) {
        // Increment the refresh key to trigger a screen refresh
        setModalVisible(false);
        setRefreshKey(prevKey => prevKey + 1);
      }
    }, [isFocused]);
    const [modalVisible, setModalVisible] = useState(false);

    const openCategoryModal = () => {
        setModalVisible(true);
    }

    const closeCategoryModal = () => {
        setModalVisible(false);
    }

    // const onRequestClose = () => {
    //     setModalVisible(false);
    // }

    return (
        <View style={styles.background} key={refreshKey}>
            <TouchableOpacity activeOpacity={0.5} onPress={props.onHome}>
                <Image
                    style={styles.houseStyle}
                    source={houseIcon}
                />
            </TouchableOpacity >
            <TouchableOpacity activeOpacity={0.5} onPress={props.onSearch}>
                <Image
                    style={styles.houseStyle}
                    source={searchIcon}
                />
            </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={openCategoryModal}>
                    <Image
                        style={styles.houseStyle}
                        source={magicIcon}
                    />
                </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={props.onProfile}>
                <Image
                    style={styles.houseStyle}
                    source={bookIcon}
                />
            </TouchableOpacity>
            <CategoryModal
                // onRequestClose={onRequestClose}
                // onOutsidePress={onOutsidePress}
                visible={modalVisible}
                onPress={closeCategoryModal}
                onBusiness={props.onGoToBusiness}
                onCulture={props.onCulture}
                onSports={props.onSports}
                onUSA={props.onUSA}
                onWorld={props.onWorld}
            />
        </View>
    );
};
export default Footer;

const styles = StyleSheet.create({
    background: {
        backgroundColor: AppColors.black,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingLeft: scale(30),
        paddingRight: scale(30),
        paddingTop: scale(10),
        paddingBottom: scale(5),
    },
    houseStyle: {
        width: scale(32),
        height: scale(32),
    },
    modal: {
        // alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        backgroundColor: AppColors.white,
        opacity: 0.5,
        width: Metrics.screenWidth,
        height: Metrics.screenHeight - scale(40)
    },
    modalContent: {
        position: 'absolute',
        left: scale(40),
        top: scale(120),
        backgroundColor: AppColors.white,
        width: scale(300),
        height: scale(401),
        borderRadius: scale(50),
        paddingTop: scale(30),
    },
    text: {
        color: AppColors.black,
        fontSize: scale(45),
        lineHeight: scale(65),
        textAlign: 'left',
        paddingLeft: scale(50),
        fontFamily: 'DM Serif Text',
        fontStyle: 'normal'
    },
    cross: {
        color: AppColors.white,
        fontSize: scale(30),
        position: 'absolute',
        top: scale(70),
        right: scale(70)
    }
});
