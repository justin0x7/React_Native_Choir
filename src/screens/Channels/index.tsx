import { ChannelList, useChannels } from "@pubnub/react-native-chat-components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React from "react";
import { useColorScheme } from "react-native";
import { CurrentChannelAtom } from "../../state-atoms";
import { ICurrentChannelsScreenProps } from '../../types/router';

const CurrentChannelsScreen: React.FC<ICurrentChannelsScreenProps> = ({ navigation, route }) => {
    const [allChannels] = useChannels({ include: { customFields: true } });
    const [, setCurrentChannel] = useAtom(CurrentChannelAtom);
    // const navigation = useNavigation<NavigationProp<{ Chat: undefined }>>();
    const groupChannels = allChannels.filter((c) => c.id?.startsWith("space."));
    const theme = useColorScheme();
    const isDark = theme === "dark";
    const onPressGotoChatScreen = () => {
        console.log('on press goto ChatScreen');
        setCurrentChannel();
        navigation.navigate("ChatScreen");
      }

    return (
        <ChannelList
            channels={groupChannels}
            onChannelSwitched={(ch) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onPressGotoChatScreen(ch)
            }}
            // onChannelLongPressed={(ch) => alert(`Hi from ${ch.name}`)}
            // sort={(ch1, ch2) => (ch1.name > ch2.name ? -1 : 1)}
            style={{
                // channelPressed: {
                //   backgroundColor: "red",
                // },
                channelActive: {
                    backgroundColor: "transparent",
                },
            }}
        // channelRenderer={(ch) => <Text>{ch.name}</Text>}
        // extraActionsRenderer={(ch) => (
        //   <TouchableOpacity onPress={() => alert(`Info about ${ch.name}`)}>
        //     <Octicons name="info" size={20} color={isDark ? "#929292" : "#9b9b9b"} />
        //   </TouchableOpacity>
        // )}
        >
            {/* <Text style={{ padding: 20 }}>Hello from channels</Text> */}
        </ChannelList>
    );
}

export default CurrentChannelsScreen;