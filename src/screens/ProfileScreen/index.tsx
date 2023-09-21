import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Button, Divider, Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { store, type RootState } from '../../store';
import { readUserData } from '../../store/slices/user.slice';
import { readArticleData } from '../../store/slices/article.slice';
import Footer from '../../components/Footer';
import { UserType } from '../../types/common';
import { IProfileScreenProps } from '../../types/router';
import styles from "./styles";
import GoToPrev from '../../components/GoToPrev';
import { testArticleData } from '../../assets/testData';
import { BlackButton, DoneButton } from '../../components/BlackButton';
import SettingIcon from '../../components/SettingIcon';
import AppColors from '../../config/colors';
import ProfileSetting from '../../components/ProfileEditModal';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { useWindowDimensions } from 'react-native';

const ProfileScreen: React.FC<IProfileScreenProps> = ({ navigation, route }) => {
    const userData = useSelector((state: RootState) => state.user.userData)
    const articleData = useSelector((state: RootState) => state.article.articleData)
    const dispatch = store.dispatch
    const [changeFollow, setChangeFollow] = useState('Follow');
    const [changeColor, setChangeColor] = useState(AppColors.black);
    const [changeFontColor, setChangeFontColor] = useState(AppColors.white);
    const [visibleModal, setVisibleModal] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [followerSection, setFollowerSection] = useState(false);
    const [followingsSection, setFollowingsSection] = useState(false);
    const [privacySection, setPrivacySection] = useState(false);
    const [onOldPassword, setOnOldPassword] = useState('');
    const [onNewPassword, setOnNewPassword] = useState('');
    const [onConfirmPassword, setOnConfirmPassword] = useState('');
    const [showUpdatePage, setShowUpdatePage] = useState(false);

    const [toggleTab, setToggleTab] = useState('');
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

    const onChangeFollow = () => {
        setChangeFollow('Following');
        setChangeColor(AppColors.darkgray);
        setChangeFontColor(AppColors.black)
    }

    const popUpModal = () => {
        setVisibleModal(true)
    }

    const closeModal = () => {
        setVisibleModal(false);
    };


    const crossClose = () => {
        setVisibleModal(false);
    };

    const onEditProfile = () => {
        setEditSection(true);
        setVisibleModal(false);
        setFollowerSection(false);
        setFollowingsSection(false);
        setPrivacySection(false);
        setShowUpdatePage(false)

    };

    const onFollowers = () => {
        setFollowerSection(true);
        setVisibleModal(false);
        setEditSection(false);
        setFollowingsSection(false);
        setPrivacySection(false);
        setShowUpdatePage(false)

    };

    const onFollowings = () => {
        setFollowingsSection(true);
        setVisibleModal(false);
        setEditSection(false);
        setFollowerSection(false);
        setPrivacySection(false);
        setShowUpdatePage(false)

    };

    const onPrivacy = () => {
        setPrivacySection(true);
        setVisibleModal(false);
        setEditSection(false);
        setFollowerSection(false);
        setFollowingsSection(false);
        setShowUpdatePage(false)

    };

    const onChangeOld = () => {
        // setOnOldPassword
    }

    const onChangeNew = () => {
        // setOnOldPassword
    }

    const onChangeConfirm = () => {
        // setOnOldPassword
    }

    const goToUpdate = () => {
        setShowUpdatePage(true);
        setEditSection(false);
        setFollowerSection(false);
        setFollowingsSection(false);
        setPrivacySection(false);
    }

    return (
        <>
            <TouchableWithoutFeedback style={styles.mainContainer} onPress={closeModal}>
                <View style={styles.content}>
                    <View style={styles.searchTitle}>
                        <Text style={styles.searchSubject}>
                            {/* {userData[0].name} */}Lukas Iwai
                        </Text>
                        <Text style={styles.userId}>
                            {/* @{userData[0].userId} */}@lukasiwai
                        </Text>
                    </View>
                    {privacySection ? (
                        <>
                            <TouchableOpacity activeOpacity={0.5} onPress={goToUpdate}>
                                <BlackButton
                                    ButtonName='Change Password'
                                    colors={AppColors.black}
                                    fontColor={AppColors.white}
                                />
                            </TouchableOpacity>
                            <View style={styles.privacyStyle}>
                                <View>
                                    <Text style={styles.privacyHeader}>
                                        Privacy Policy
                                    </Text>
                                </View>
                                <ScrollView >
                                    <Text style={styles.privacyContent}>
                                        Sed ut perspiciatis unde omnis iste natus
                                        error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                                        Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit fugit, sed quia consequuntur
                                        magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam dolorem ipsum
                                        quia dolor amet, consectetur, adipisci velit,
                                        numquam eius modi tempora incidunt dolore magnam
                                        aliquam quaerat voluptatem. Ut minima veniam,
                                        quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                        Quis autem vel eum iure reprehenderit qui in ea
                                        voluptate velit esse quam nihil molestiae consequatur,
                                        vel illum qui dolorem eum
                                        Sed ut perspiciatis unde omnis iste natus
                                        error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                                        Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit fugit, sed quia consequuntur
                                        magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam dolorem ipsum
                                        quia dolor amet, consectetur, adipisci velit,
                                        numquam eius modi tempora incidunt dolore magnam
                                        aliquam quaerat voluptatem. Ut minima veniam,
                                        quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                        Quis autem vel eum iure reprehenderit qui in ea
                                        voluptate velit esse quam nihil molestiae consequatur,
                                        vel illum qui dolorem eum
                                    </Text>
                                </ScrollView>
                            </View>
                        </>
                    ) : (
                        showUpdatePage ? (
                            <>
                                <View style={styles.privacyStyle}>
                                    <View>
                                        <Text style={styles.passwordHeader}>
                                            Change Password
                                        </Text>
                                    </View>
                                    <View style={styles.privacyHeader}>
                                        <View style={styles.passwordBox}>
                                            <TextInput
                                                style={styles.passwordChange}
                                                placeholder="Old password"
                                                value={onOldPassword}
                                                onChangeText={onChangeOld}

                                            />
                                        </View>
                                        <View style={styles.passwordBox}>
                                            <TextInput
                                                style={styles.passwordChange}
                                                placeholder="New password"
                                                value={onNewPassword}
                                                onChangeText={onChangeNew}

                                            />
                                        </View>
                                        <View style={styles.passwordBox}>
                                            <TextInput
                                                style={styles.passwordChange}
                                                placeholder="Confirm new password"
                                                value={onConfirmPassword}
                                                onChangeText={onChangeConfirm}

                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <DoneButton
                                            ButtonName='Done'
                                            colors={AppColors.black}
                                            fontColor={AppColors.white}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                            followerSection ? (
                                <>
                                        <View style={styles.privacyHeader}>
                                            <Text style={styles.userName}>
                                                Followers
                                            </Text>
                                            <Text style={styles.nickName}>
                                                {articleData.length}
                                            </Text>
                                        </View>
                                        <Divider />
                                        <FlatList
                                            data={userData}
                                            renderItem={({ item }) => (
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
                                            )}
                                        />
                                    </>
                            ) : (
                                followingsSection ? (
                                    <>
                                        <View style={styles.privacyHeader}>
                                            <Text style={styles.userName}>
                                                Following
                                            </Text>
                                            <Text style={styles.nickName}>
                                                {userData.length}
                                            </Text>
                                        </View>
                                        <Divider />
                                        <FlatList
                                            data={userData}
                                            renderItem={({ item }) => (
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
                                            )}
                                        />
                                    </>
                                ) : (
                                    editSection ? (
                                        <>
                                            <View style={styles.privacyStyle}>
                                                <View>
                                                    <Text style={styles.passwordHeader}>
                                                        Edit Profile
                                                    </Text>
                                                </View>
                                                <View style={styles.privacyHeader}>
                                                    <Text style={styles.userName}>User Name</Text>
                                                    <Text style={styles.nickName}>@lukasiwai</Text>
                                                </View>
                                                <TouchableOpacity activeOpacity={0.5}>
                                                    <DoneButton
                                                        ButtonName='Change'
                                                        colors={AppColors.black}
                                                        fontColor={AppColors.white}
                                                    />
                                                </TouchableOpacity>
                                                <View style={styles.privacyHeader}>
                                                    <Text style={styles.userName}>Diaply Name</Text>
                                                    <Text style={styles.nickName}>Lukas Iwai</Text>
                                                </View>
                                                <TouchableOpacity activeOpacity={0.5}>
                                                    <DoneButton
                                                        ButtonName='Change'
                                                        colors={AppColors.black}
                                                        fontColor={AppColors.white}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    ) : (
                                        <View>
                                            <View style={styles.profileSection}>
                                                <TouchableOpacity activeOpacity={0.5} onPress={onChangeFollow}>
                                                    <BlackButton
                                                        ButtonName={changeFollow}
                                                        colors={changeColor}
                                                        fontColor={changeFontColor}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.tabTitle}>
                                                <TouchableOpacity activeOpacity={0.5} onPress={SetToggleArticles}>
                                                    <Text style={styles.articles}>Comments</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.5} onPress={SetToggleUsers}>
                                                    <Text style={styles.users}>Tracked Articles</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Divider bold={true} />
                                        </View>
                                    )
                                )
                            )
                        )
                    )}

                </View>
            </TouchableWithoutFeedback >
            <GoToPrev />
            <SettingIcon
                onShowModal={popUpModal}
            />
            <ProfileSetting
                visible={visibleModal}
                onClose={crossClose}
                onEdit={onEditProfile}
                onFollower={onFollowers}
                onFollowing={onFollowings}
                onPrivacy={onPrivacy}
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

export default ProfileScreen;