import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { store, type RootState } from '../../store';
import { readUserData } from '../../store/slices/user.slice';
import { readArticleData } from '../../store/slices/article.slice';
import Footer from '../../components/Footer';
import { UserType } from '../../types/common';
import { ISearchScreenProps } from '../../types/router';
import styles from "./styles";
import GoToPrev from '../../components/GoToPrev';
import { testArticleData } from '../../assets/testData';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { useWindowDimensions } from 'react-native';

const SearchScreen: React.FC<ISearchScreenProps> = ({ navigation, route }) => {
    const userData = useSelector((state: RootState) => state.user.userData)
    const articleData = useSelector((state: RootState) => state.article.articleData)
    const dispatch = store.dispatch

    const [toggleTab, setToggleTab] = useState("Articles");
    const SetToggleArticles = () => {
        setToggleTab('Articles');
    }

    const SetToggleUsers = () => {
        setToggleTab('Users');
    }

    useEffect(() => {
        dispatch(readUserData())
        dispatch(readArticleData())
    }, [])

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
    // const FirstRoute = () => (
    //     // <View style={{ backgroundColor: 'white' }} />
    //     <Text style={styles.Tab}>

    // </Text>
    // );

    // const SecondRoute = () => (
    //     <View style={{ backgroundColor: 'white' }} />
    // );

    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    // });
    const onPressGotoSearch = () => {
        navigation.navigate("SearchScreen");
    }

    const [searchQuery, setSearchQuery] = useState('');

    const renderArticleItem = ({ item }: any) => {
        if (!item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
        }

        return (
            <>
                <View style={styles.articleLine}>
                    <View>
                        <Image style={styles.image} source={item.image} />
                    </View>
                    <View style={styles.articleText}>
                        <Text>{item.description}</Text>
                    </View>
                </View>
                <Divider />
            </>
        );
    };

    const renderUsersItem = ({ item }: any) => {
        if (!item.userId.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
        }

        return (
            <>
                <View style={styles.userLine}>
                    <View>
                        <Image source={item.image} style={styles.imageSize} />
                    </View>
                    <View style={styles.usersText}>
                        <Text>{item.userId}</Text>
                    </View>
                </View>
                <Divider horizontalInset={true} />
            </>
        );
    };

    // const layout = useWindowDimensions();
    // const [index, setIndex] = React.useState(0);
    // const [routes] = React.useState([
    //     { key: 'first', title: 'Articles' },
    //     { key: 'second', title: 'Users' },
    // ]);

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.content}>
                    <View style={styles.searchTitle}>
                        <Text style={styles.searchSubject}>
                            Search
                        </Text>
                    </View>
                    <View style={styles.searchBar}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={text => setSearchQuery(text)}
                            value={searchQuery}
                            icon="false"
                            iconColor='white'
                            style={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}
                            inputStyle={{ position: 'relative', left: -40 }}
                        />
                    </View>
                    {/* <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                        /> */}
                    <View style={styles.tabTitle}>
                        <TouchableOpacity activeOpacity={0.5} onPress={SetToggleArticles}>
                            <Text style={styles.articles}>Articles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={SetToggleUsers}>
                            <Text style={styles.users}>Users</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider bold={true} />
                    <View>
                        {toggleTab !== 'Users' ?
                            (
                                // <FlatList
                                //     data={articleData}
                                //     renderItem={({ item }) => (
                                //         <>
                                //             <View style={styles.articleLine}>
                                //                 <View>
                                //                     <Image style={styles.image} source={item.image} />
                                //                 </View>
                                //                 <View style={styles.articleText}>
                                //                     <Text>{item.description}</Text> 
                                //                 </View>
                                //             </View>
                                //             <Divider />
                                //         </>
                                //     )}
                                // />
                                <FlatList
                                    data={articleData}
                                    renderItem={({ item }) => renderArticleItem({ item })}
                                    keyExtractor={item => item.toString()}
                                />
                            )
                            :
                            (
                                <FlatList
                                    data={userData}
                                    renderItem={({ item }) => renderUsersItem({ item })}
                                    keyExtractor={item => item.toString()}
                                />
                            )}
                    </View>
                </View>
            </View>
            <GoToPrev />
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

export default SearchScreen;