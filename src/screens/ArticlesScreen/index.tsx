import React from 'react';
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
                    <ScrollView>
                        <View>
                            <Text style={styles.articleSubject}>
                                Medieval Moon
                                Observations Reveal
                                ‘Mysterious’ Volcanic
                                Eruptions
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.articleContent}>
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
                                illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <SideMenu
                color='black'
                onComment={onPressGotoComments} />
            <Footer
                onSearch={onPressGotoSearch}
                onHome={onPressGotoHome}
                onProfile={onPressGotoProfile}
            />
        </>
    );
}

export default ReadArticle;