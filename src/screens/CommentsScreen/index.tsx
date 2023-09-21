import React, { useEffect, useRef, useState } from 'react';
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
import { readCommentData } from '../../store/slices/comment.slice';
import SendMessage from '../../assets/images/SendMessage.svg';
import ThreeDots from '../../assets/images/Dots.svg';
import VectorRight1 from '../../assets/images/VectorRight1.svg';
import SubComment from '../../assets/images/ReplyIcon.svg';
import { useSelector } from 'react-redux';
import { store, type RootState } from '../../store';
import { readUserData } from '../../store/slices/user.slice';
import { AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import { IArticleSlice } from '../../types/slices/article';
import { ICommentSlice } from '../../types/slices/comment';
import { IUserSlice } from '../../types/slices/user';

const CommentScreen: React.FC<ICommentScreenProps> = ({ navigation, route }) => {
    const commentData = useSelector((state: RootState) => state.comment.commentData)
    const userData = useSelector((state: RootState) => state.user.userData)
    const dispatch = store.dispatch

    const [message, setMessage] = useState('');
    const [replyMessage, setReplyMessage] = useState('');
    const [dotStatus, setDotStatus] = useState<number | null>(null);
    const [showStatus, setShowStatus] = useState<number | null>(null);
    const [showReply, setShowReply] = useState(false);
    const [subMessage, setSubMessage] = useState(false);
    const [makeFollowId, setMakeFollowId] = useState(0);
    const [goToEdit, setGoToEdit] = useState(false);
    const [copyMessage, setCopyMessage] = useState('');
    const [keyNumber, setKeyNumber] = useState(0);

    useEffect(() => {
        dispatch(readUserData())
        dispatch(readCommentData())
    }, [])

    const onPressGotoHome = () => {
        console.log('on press goto HomeScreen');
        navigation.navigate("HomeScreen");
      }
    
      const onPressGotoProfile = () => {
        console.log('on press goto ProfileScreen');
        navigation.navigate("ProfileScreen");
      }

    const onPressGotoSearch = () => {
        console.log('on press goto SearchScreen')
        navigation.navigate("SearchScreen");
    }

    const onShowReply = (key: number) => {
        setMakeFollowId(key);
        setShowReply(true);
        setDotStatus(null);
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
    // data1={data.sort((a, b) => {
    //     if (a.followId === b.key) {
    //       return 1; // Move a before b
    //     } else if (b.followId === a.key) {
    //       return -1; // Move b before a
    //     } else {
    //       return 0; // Don't change order
    //     }
    //   })}

    const [data, setData] = useState(
        commentData
    );

    const onPressHeart = (keyNum: number) => {
        // const newData = [...data];
        // const index = newData.findIndex((i) => i.key === keyNum);
        // newData[index].updateHeart = !newData[index].updateHeart
        // newData[index].sum += newData[index].updateHeart ? 1 : -1;
        // setData(newData);
        // console.log(newData)

        const newData = [...data];
        const index = newData.findIndex((i) => i.key === keyNum);
        const item = newData[index];
        const newUpdateHeart = !item.updateHeart;
        const newSum = item.sum + (newUpdateHeart ? 1 : -1);
        newData[index] = {
          ...item,
          updateHeart: newUpdateHeart,
          sum: newSum
        };
        setData(newData);
        console.log(newData);
    };

    const onDeleteItem = (key: number) => {
        const newData = data.filter(item => item.key !== key);
        setData(newData);
    }

    const onEditItem = (key: number, updatedDescription: string) => {
        setKeyNumber(key);
        setGoToEdit(true);
        setCopyMessage(updatedDescription);
    }

    const onUpdateMessage = () => {
        const newData = data.map(item => {
            if (item.key === keyNumber) {
                return {
                    ...item,
                    description: copyMessage
                };
            }
            return item;
        });
        setData(newData);
        setCopyMessage('')
    }

    const onSendMessage = () => {
        if (message) {
            const newMessage = {
                sum: 0,
                key: data.length + 1,
                name: userData[0].userId,
                image: userData[0].image,
                description: message,
                updateHeart: false,
                followId: 0
            };
            setData([...data, newMessage]);
            setMessage('');
        }
        console.log("followId:, key:", makeFollowId, data.length)
    }

    const onReplyMessage = () => {
        if (replyMessage) {
            const newMessage = {
                sum: 0,
                key: data.length + 1,
                name: userData[0].userId,
                image: userData[0].image,
                description: replyMessage,
                updateHeart: false,
                followId: makeFollowId
            };
            setData([...data, newMessage]);
            // data.sort((a, b) => {
            //     if (a.followId === b.key) {
            //       return 1; // Move a before b
            //     } else if (b.followId === a.key) {
            //       return -1; // Move b before a
            //     } else {
            //       return 0; // Don't change order
            //     }
            //   })
            setReplyMessage('');
            setSubMessage(!subMessage);
            setShowReply(!showReply);
        }
        console.log("followId:, key:", makeFollowId, data.length)
    }

    const onGoToCategory = (page: string) => {
        console.log('on press goto Business');
        navigation.navigate("CategoryScreen", {page});
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
                                    // data={data.sort(function compare(a, b) {
                                    //     if (a.followId === b.key && b.followId !== a.key) {
                                    //       return 1; // Move a after b if a's followId matches b's key
                                    //     } else if (b.followId === a.key && a.followId !== b.key) {
                                    //       return -1; // Move b after a if b's followId matches a's key
                                    //     } else {
                                    //       return a.key - b.key; // Sort by key if no match found
                                    //     }
                                    //   })}
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

                                                        {item.name === userData[0].userId ? (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options}>
                                                                        <TouchableOpacity onPress={() => onEditItem(item.key, item.description)} activeOpacity={0.5}>
                                                                            <Text style={styles.fontColor}>
                                                                                Edit
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity onPress={() => onDeleteItem(item.key)} activeOpacity={0.5}>
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
                                                                        <TouchableOpacity activeOpacity={0.5} onPress={() => onShowReply(item.key)}>
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
                                                        {item.name === userData[0].userId ? (
                                                            <>
                                                                <TouchableOpacity style={styles.dots} onPress={() => toggleDots(item.key)} activeOpacity={0.5} >
                                                                    <ThreeDots />
                                                                </TouchableOpacity>
                                                                {item.key &&
                                                                    dotStatus === item.key ? (
                                                                    <View style={styles.options}>
                                                                        <TouchableOpacity onPress={() => onEditItem(item.key, item.description)} activeOpacity={0.5}>
                                                                            <Text style={styles.fontColor}>
                                                                                Edit
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity onPress={() => onDeleteItem(item.key)} activeOpacity={0.5}>
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
                                                                        <TouchableOpacity activeOpacity={0.5} onPress={() => onShowReply(item.key)}>
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

            {!goToEdit ? (
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
            ) : (
                <View style={styles.sendMessage}>
                    <TextInput
                        numberOfLines={8}
                        multiline
                        placeholder="Add a comment..."
                        textAlignVertical="top"
                        value={copyMessage}
                        onChangeText={setCopyMessage}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => onUpdateMessage()}>
                        <SendMessage style={styles.sendMessageIcon} />
                    </TouchableOpacity>
                </View>
            )}

<Footer
                onSearch={onPressGotoSearch}
                onHome={onPressGotoHome}
                onProfile={onPressGotoProfile}
                onGoToBusiness={() => onGoToCategory('Business')}
                onCulture={() => onGoToCategory('Culture')}
                onSports={() => onGoToCategory('Sports')}
                onUSA={() => onGoToCategory('USA')}
                onWorld={() => onGoToCategory('World')}
            />
        </>
    );
}

export default CommentScreen;

// function dispatch(arg0: AsyncThunkAction<any, void, { state: { user: IUserSlice; article: IArticleSlice; comment: ICommentSlice; }; dispatch: ThunkDispatch<{ user: IUserSlice; article: IArticleSlice; comment: ICommentSlice; }, undefined, AnyAction> & Dispatch<AnyAction>; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
//     throw new Error('Function not implemented.');
// }
