import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import Footer from '../../components/Footer';
import { ISearchScreenProps } from '../../types/router';
import styles from "./styles";
import GoToPrev from '../../components/GoToPrev';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { useWindowDimensions } from 'react-native';
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

const SearchScreen: React.FC<ISearchScreenProps> = ({ navigation, route }) => {
    const [toggleTab, setToggleTab] = useState('');
    const SetToggleArticles = () => {
        setToggleTab('Articles');
    }

    const SetToggleUsers = () => {
        setToggleTab('Users');
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

    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

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
                            onChangeText={onChangeSearch}
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
                        {toggleTab === 'Articles' ?
                            (<FlatList
                                data={[
                                    { key: 1, name: 'Joel', image: Ellipse6, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 2, name: 'John', image: Ellipse7, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 3, name: 'Jillian', image: Ellipse8, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 4, name: 'Jimmy', image: Ellipse9, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 5, name: 'Julie', image: Ellipse10, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 6, name: 'Devin', image: Ellipse1, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 7, name: 'Dan', image: Ellipse2, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 8, name: 'Dominic', image: Ellipse3, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 9, name: 'Jackson', image: Ellipse4, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                    { key: 10, name: 'James', image: Ellipse5, description: 'Sit amet, consectetur adipiscing sed do eiusmod incididunt' },
                                ]}
                                renderItem={({ item }) => (
                                    <>
                                        <View style={styles.articleLine}>
                                            <View>
                                                <Image source={item.image} />
                                            </View>
                                            <View style={styles.articleText}>
                                                <Text>{item.description}</Text>
                                            </View>
                                        </View>
                                        <Divider />
                                    </>
                                )}
                            />) : (
                                <FlatList
                                    data={[
                                        { key: 1, name: 'Joel', image: Ellipse6, description: 'metacoffee' },
                                        { key: 2, name: 'John', image: Ellipse7, description: 'septwolf' },
                                        { key: 3, name: 'Jillian', image: Ellipse8, description: 'phantom' },
                                        { key: 4, name: 'Jimmy', image: Ellipse9, description: 'goldenhand' },
                                        { key: 5, name: 'Julie', image: Ellipse10, description: 'applecake' },
                                        { key: 6, name: 'Devin', image: Ellipse1, description: 'icecream' },
                                        { key: 7, name: 'Dan', image: Ellipse2, description: 'septwolf' },
                                        { key: 8, name: 'Dominic', image: Ellipse3, description: 'icecream' },
                                        { key: 9, name: 'Jackson', image: Ellipse4, description: 'applecake' },
                                        { key: 10, name: 'James', image: Ellipse5, description: 'goldenhand' },
                                        { key: 11, name: 'Devin', image: Ellipse1, description: 'metacoffee' },
                                        { key: 12, name: 'Dan', image: Ellipse2, description: 'goldenhand' },
                                        { key: 13, name: 'Dominic', image: Ellipse3, description: 'applecake' },
                                        { key: 14, name: 'Jackson', image: Ellipse4, description: 'metacoffee' },
                                        { key: 15, name: 'James', image: Ellipse5, description: 'septwolf' },
                                    ]}
                                    renderItem={({ item }) => (
                                        <>
                                            <View style={styles.userLine}>
                                                <View>
                                                    <Image source={item.image} style={styles.imageSize} />
                                                </View>
                                                <View style={styles.usersText}>
                                                    <Text>{item.description}</Text>
                                                </View>
                                            </View>
                                            <Divider horizontalInset={true} />
                                        </>
                                    )}
                                />
                            )}
                    </View>
                </View>
            </View>
            <GoToPrev />
            <Footer
                onSearch={onPressGotoSearch}
            />
        </>
    );
}

export default SearchScreen;