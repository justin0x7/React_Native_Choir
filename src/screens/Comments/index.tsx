import React, { useRef, useState } from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
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
import SendMessage from '../../assets/images/SendMessage.svg';
import ThreeDots from '../../assets/images/Dots.svg';
import VectorRight1 from '../../assets/images/VectorRight1.svg';
import SubComment from '../../assets/images/ReplyIcon.svg';

const CommentScreen: React.FC<ICommentScreenProps> = ({ navigation, route }) => {
    const [message, setMessage] = useState('');
    const [replyMessage, setReplyMessage] = useState('');
    const [dotStatus, setDotStatus] = useState<number | null>(null);
    const [showStatus, setShowStatus] = useState<number | null>(null);
    const [showReply, setShowReply] = useState(false);
    const [subMessage, setSubMessage] = useState(false);
    // const dotsRef = useRef<View>(null);

    const onPressGotoSearch = () => {
        console.log('on press goto SearchScreen')
        navigation.navigate("SearchScreen");
    }

    const onShowReply = () => {
        setShowReply(true);
        setDotStatus(null)
    }

    const toggleDots = (key: number) => {
        // setDotStatus(!dotStatus);
        setDotStatus(key === dotStatus ? null : key);
    }

    const showToggle = (key: number) => {
        // setDotStatus(!dotStatus);
        // setShowStatus(key === showStatus ? null : key);
        if (showStatus === null) {
            setShowStatus(key);
        } else {
            setShowStatus(key === showStatus ? null : key);
        }

    }

    const [data, setData] = useState([
        { followId: 0, updateHeart: false, sum: 5, key: 1, name: 'MetaCoffee', image: Ellipse6, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 29, key: 2, name: 'MetaCoffee', image: Ellipse7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 4, key: 3, name: 'Jillian', image: Ellipse8, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 9, key: 4, name: 'Jimmy', image: Ellipse9, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 0, key: 5, name: 'Julie', image: Ellipse10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 12, key: 6, name: 'Devin', image: Ellipse1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 54, key: 7, name: 'Dan', image: Ellipse2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 2, key: 8, name: 'Dominic', image: Ellipse3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 1, key: 9, name: 'Jackson', image: Ellipse4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 1, key: 10, name: 'James', image: Ellipse5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 3, key: 11, name: 'Devin', image: Ellipse1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 7, key: 12, name: 'Dan', image: Ellipse2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 16, key: 13, name: 'Dominic', image: Ellipse3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 22, key: 14, name: 'Jackson', image: Ellipse4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        { followId: 0, updateHeart: false, sum: 4, key: 15, name: 'James', image: Ellipse5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse...' },
        // ... other data items
    ]);
    const onPressHeart = (keyNum: Number) => {
        const newData = [...data];
        const index = newData.findIndex((i) => i.key === keyNum);
        newData[index].updateHeart = !newData[index].updateHeart
        newData[index].sum += newData[index].updateHeart ? 1 : -1;
        setData(newData);
    };

    const onSendMessage = () => {
        if (message) {
            const newMessage = {
                sum: 0,
                key: data.length + 1,
                name: 'MetaCoffee',
                image: Ellipse5,
                description: message,
                updateHeart: false,
                followId: 0
            };
            setData([...data, newMessage]);
            setMessage('');
        }
    }

    const onReplyMessage = () => {
        if (replyMessage) {
            const newMessage = {
                sum: 0,
                key: data.length + 1,
                name: 'MetaCoffee',
                image: Ellipse5,
                description: replyMessage,
                updateHeart: false,
                followId: 2
            };
            setData([...data, newMessage]);
            setReplyMessage('');
            setSubMessage(!subMessage);
            setShowReply(!showReply);
        }
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.CommentTitle}>
                    <Text style={styles.commentSubject}>
                        Comments
                    </Text>
                </View>
                <View>
                    <Text style={styles.articleSubject}>
                        People you follow
                    </Text>
                </View>
                <View style={styles.Content}>

                    <View>

                        <View>
                            <View>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => (
                                        <>
                                            {item.followId === 0 ? (
                                                <View style={styles.commentContent}>
                                                    <View style={styles.commentProfile}>
                                                        <Image style={styles.commentAvatar} source={item.image} />
                                                        {/* <SubComment style={styles.commentAvatar} /> */}
                                                        <Text style={styles.commentOwner}>{item.name}</Text>
                                                    </View>
                                                    <View style={styles.commmentMessages}>
                                                        {/* {
                                                                showStatus === item.key ? (
                                                                <Text numberOfLines={6}>{item.description}</Text>
                                                            ) : (
                                                                <Text>{item.description}</Text>
                                                            )} */}
                                                        <Text style={styles.fontColor} numberOfLines={6}>{item.description}</Text>
                                                        {item.followId === item.key && (
                                                            <Text style={styles.fontColor} numberOfLines={6}>{item.description}</Text>
                                                        )}
                                                        {item.name === "MetaCoffee" ? (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options}>
                                                                        <TouchableOpacity>
                                                                            <Text style={styles.fontColor}>
                                                                                Edit
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity>
                                                                            <Text style={styles.delete}>
                                                                                Delete
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                ) : (
                                                                    <></>
                                                                )}

                                                            </>
                                                        ) : (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options1}>
                                                                        <TouchableOpacity activeOpacity={0.5} onPress={onShowReply}>
                                                                            <Text style={styles.fontColor}>
                                                                                Reply
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </>
                                                        )}
                                                        {/* <TouchableOpacity onPress={() => showToggle(item.key)} activeOpacity={0.5} >
                                                                <ThreeDots />
                                                            </TouchableOpacity> */}
                                                    </View>
                                                    <View style={styles.hearts} >
                                                        <TouchableOpacity activeOpacity={0.5} onPress={() => onPressHeart(item.key)}>
                                                            <HeartIcon />
                                                        </TouchableOpacity>
                                                        <Text style={styles.heartsSum}>{item.sum} likes</Text>
                                                    </View>
                                                </View>
                                            ) : (
                                                <View style={styles.commentSubContent}>
                                                    <View style={styles.commentProfile}>
                                                        {/* <Image style={styles.commentAvatar} source={item.image} /> */}
                                                        <SubComment style={styles.commentAvatar} />
                                                        <Text style={styles.commentOwner}>{item.name}</Text>
                                                    </View>
                                                    <View style={styles.commmentMessages}>
                                                        {/* {
                                                        showStatus === item.key ? (
                                                        <Text numberOfLines={6}>{item.description}</Text>
                                                    ) : (
                                                        <Text>{item.description}</Text>
                                                    )} */}
                                                        <Text style={styles.fontColor} numberOfLines={6}>{item.description}</Text>
                                                        {item.followId === item.key && (
                                                            <Text style={styles.fontColor} numberOfLines={6}>{item.description}</Text>
                                                        )}
                                                        {item.name === "MetaCoffee" ? (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options}>
                                                                        <TouchableOpacity>
                                                                            <Text style={styles.fontColor}>
                                                                                Edit
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity>
                                                                            <Text style={styles.delete}>
                                                                                Delete
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                ) : (
                                                                    <></>
                                                                )}

                                                            </>
                                                        ) : (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options1}>
                                                                        <TouchableOpacity activeOpacity={0.5} onPress={onShowReply}>
                                                                            <Text style={styles.fontColor}>
                                                                                Reply
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </>
                                                        )}
                                                        {/* <TouchableOpacity onPress={() => showToggle(item.key)} activeOpacity={0.5} >
                                                        <ThreeDots />
                                                    </TouchableOpacity> */}
                                                    </View>
                                                    <View style={styles.hearts} >
                                                        <TouchableOpacity activeOpacity={0.5} onPress={() => onPressHeart(item.key)}>
                                                            <HeartIcon />
                                                        </TouchableOpacity>
                                                        <Text style={styles.heartsSum}>{item.sum} likes</Text>
                                                    </View>
                                                </View>
                                            )}
                                           
                                        </>
                                    )}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <GoToPrev />
            {showReply ? (
                <View style={styles.replyMessage}>
                    <TextInput
                        multiline
                        placeholder="Reply"
                        value={replyMessage}
                        onChangeText={setReplyMessage}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => onReplyMessage()}>
                        <VectorRight1 style={styles.sendMessageIcon} />
                    </TouchableOpacity>
                </View>
            ) : (
                // <View style={[styles.replyMessage, { display: 'none' }]}>
                //     <TextInput
                //         multiline
                //         placeholder="Reply"
                //         value={replyMessage}
                //         onChangeText={setReplyMessage}
                //     />
                //     <TouchableOpacity activeOpacity={0.5} onPress={() => onReplyMessage()}>
                //         <VectorRight1 style={styles.sendMessageIcon} />
                //     </TouchableOpacity>
                // </View>
                <></>
            )}

            <View style={styles.sendMessage}>
                <TextInput
                    numberOfLines={8}
                    multiline
                    placeholder="Add a comment..."
                    textAlignVertical="top"
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={() => onSendMessage()}>
                    <SendMessage style={styles.sendMessageIcon} />
                </TouchableOpacity>
            </View>
            <Footer
                onSearch={onPressGotoSearch}
            />
        </>
    );
}

export default CommentScreen;