import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Footer from '../../components/Footer';
import { ICommentScreenProps } from '../../types/router';
import styles from "./styles";
const homeTitle1 = require('../../assets/images/HomeTitle1.png');


const CommentScreen: React.FC<ICommentScreenProps> = ({ navigation, route }) => {

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
                        <ScrollView>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <Footer></Footer>
        </>
    );
}

export default CommentScreen;