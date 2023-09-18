import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Cross from '../assets/images/Cross.svg';
import AppColors from '../config/colors';
import { Metrics, scale } from '../config/dimentions';
const houseIcon = require('../assets/images/house.png');
const searchIcon = require('../assets/images/search.png');
const magicIcon = require('../assets/images/magic.png');
const bookIcon = require('../assets/images/book.png');

interface Props {
    onSearch: any;
}

const Footer = (props: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [opacityActive, setOpacityActive] = useState(false);

    const openCategoryModal = () => {
        setModalVisible(true);
    }

    const closeCategoryModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.background}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image
                    style={styles.houseStyle}
                    source={houseIcon}
                />
            </TouchableOpacity>
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
            <TouchableOpacity activeOpacity={0.5}>
                <Image
                    style={styles.houseStyle}
                    source={bookIcon}
                />
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <View style={styles.modal}>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={closeCategoryModal} >
                    <Text style={styles.cross}>
                        <Cross width={25} height={25} />
                    </Text>
                </TouchableOpacity>
                <View style={styles.modalContent}>
                    <Text style={styles.text}>Business</Text>
                    <Text style={styles.text}>Sports</Text>
                    <Text style={styles.text}>Culture</Text>
                    <Text style={styles.text}>World</Text>
                    <Text style={styles.text}>USA</Text>
                </View>
            </Modal>
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
