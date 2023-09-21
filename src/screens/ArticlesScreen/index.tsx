import React, { useRef, useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';
import Footer from '../../components/Footer';
import SideMenu from '../../components/SideMenu';
import { IArticleScreenProps } from '../../types/router';
import styles from "./styles";
import { scale } from '../../config/dimentions';
const homeTitle1 = require('../../assets/images/HomeTitle1.png');

const ReadArticle: React.FC<IArticleScreenProps> = ({ navigation, route }) => {
    const onPressGotoComments = () => {
        navigation.navigate("CommentScreen");
    }

    const onPressGotoSearch = () => {
        console.log('on press goto SearchScreen')
        navigation.navigate("SearchScreen");
    }

    const onPressGotoHome = () => {
        console.log('on press goto HomeScreen');
        navigation.navigate("HomeScreen");
    }

    const onPressGotoProfile = () => {
        console.log('on press goto ProfileScreen');
        navigation.navigate("ProfileScreen");
    }

    const onGoToCategory = (page: string) => {
        console.log('on press goto Business');
        navigation.navigate("CategoryScreen", { page });
    }

    const { title } = route.params;
    const { content } = route.params;
    const scrollViewRef = useRef<ScrollView | null>(null);

    const onScrollTop = () => {
        // if (scrollViewRef.current) {
            scrollViewRef.current?.scrollTo({ y: -scale(50), animated: true });
            console.log('Y position:', scrollViewRef.current)
        // }
    };

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.Content}>
                    <View style={styles.homeLogo}>
                        <Image
                            style={styles.homeTitle}
                            source={homeTitle1}
                        />
                    </View>
                    <ScrollView
                        ref={scrollViewRef}
                        scrollEventThrottle={16}
                    >
                        <View>
                            <Text style={styles.articleSubject}>
                                {title}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.articleContent}>
                                {content}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <SideMenu
                color='black'
                onComment={onPressGotoComments}
                onToTop={onScrollTop}
            />
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

export default ReadArticle;