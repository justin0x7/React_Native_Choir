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
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: scale(105), animated: true });
        }
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
                                {/* Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem
                                sequi nesciunt. Neque porro quisquam dolorem ipsum
                                quia dolor amet, consectetur, adipisci velit, numquam
                                eius modi tempora incidunt dolore magnam aliquam
                                quaerat voluptatem. Ut minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis
                                autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel
                                illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem
                                sequi nesciunt. Neque porro quisquam dolorem ipsum
                                quia dolor amet, consectetur, adipisci velit, numquam
                                eius modi tempora incidunt dolore magnam aliquam
                                quaerat voluptatem. Ut minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis
                                autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel
                                illum qui dolorem eum fugiat quo voluptas nulla pariatur? */}
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