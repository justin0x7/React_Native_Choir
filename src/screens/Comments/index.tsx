import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Footer from '../../components/Footer';
import { ICommentScreenProps } from '../../types/router';
import styles from "./styles";
import HeartIcon from '../../assets/images/HeartIcon.svg';
import GoToPrev from '../../components/GoToPrev';
import { TextInput } from 'react-native';
const Ellipse1 = require('../../assets/images/Ellipse1.png');
const Ellipse2 = require('../../assets/images/Ellipse2.png');
const Ellipse3 = require('../../assets/images/Ellipse3.png');
const Ellipse4 = require('../../assets/images/Ellipse4.png');
const Ellipse5 = require('../../assets/images/Ellipse5.png');
const Ellipse6 = require('../../assets/images/Ellipse1.png');
const Ellipse7 = require('../../assets/images/Ellipse2.png');
const Ellipse8 = require('../../assets/images/Ellipse3.png');
const Ellipse9 = require('../../assets/images/Ellipse4.png');
const Ellipse10 = require('../../assets/images/Ellipse5.png');

const CommentScreen: React.FC<ICommentScreenProps> = ({ navigation, route }) => {
    const onPressGotoSearch = () => {
        console.log('on press goto SearchScreen')
        navigation.navigate("SearchScreen");
    }

    const [data, setData] = useState([
        { updateHeart: false, sum: 5, key: 1, name: 'Joel', image: Ellipse6, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 29, key: 2, name: 'John', image: Ellipse7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 4, key: 3, name: 'Jillian', image: Ellipse8, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 9, key: 4, name: 'Jimmy', image: Ellipse9, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 0, key: 5, name: 'Julie', image: Ellipse10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 12, key: 6, name: 'Devin', image: Ellipse1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 54, key: 7, name: 'Dan', image: Ellipse2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 2, key: 8, name: 'Dominic', image: Ellipse3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 1, key: 9, name: 'Jackson', image: Ellipse4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 1, key: 10, name: 'James', image: Ellipse5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 3, key: 11, name: 'Devin', image: Ellipse1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 7, key: 12, name: 'Dan', image: Ellipse2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 16, key: 13, name: 'Dominic', image: Ellipse3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 22, key: 14, name: 'Jackson', image: Ellipse4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { updateHeart: false, sum: 4, key: 15, name: 'James', image: Ellipse5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        // ... other data items
    ]);
    const onPressHeart = (keyNum: Number) => {
        const newData = [...data];
        const index = newData.findIndex((i) => i.key === keyNum);
        newData[index].updateHeart = !newData[index].updateHeart
        newData[index].sum += newData[index].updateHeart ? -1 : 1;
        setData(newData);
    };

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.Content}>
                    <View style={styles.CommentTitle}>
                        <Text style={styles.commentSubject}>
                            Comments
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.articleSubject}>
                                People you follow
                            </Text>
                        </View>
                        <View>
                            <View>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => (
                                        <>
                                            <View style={styles.commentContent}>
                                                <View style={styles.commentProfile}>
                                                    <Image style={styles.commentAvatar} source={item.image} />
                                                    <Text style={styles.commentOwner}>{item.name}</Text>
                                                </View>
                                                <View style={styles.commmentMessages}>
                                                    <Text numberOfLines={6}>{item.description}</Text>
                                                </View>
                                                <View style={styles.hearts} >
                                                    <TouchableOpacity activeOpacity={0.5} onPress={() => onPressHeart(item.key)}>
                                                        <HeartIcon />
                                                    </TouchableOpacity>
                                                    <Text style={styles.heartsSum}>{item.sum} likes</Text>
                                                </View>
                                            </View>
                                        </>
                                    )}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <GoToPrev />
            <View >
                <TextInput
                    style={styles.sendMessage}
                    numberOfLines={8}
                    placeholder="Add a comment..."
                    textAlignVertical="top"
                />
            </View>
            <Footer
                onSearch={onPressGotoSearch}
            />
        </>
    );
}

export default CommentScreen;