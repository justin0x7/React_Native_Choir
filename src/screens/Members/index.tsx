import { MemberList, useChannelMembers, usePresence } from "@pubnub/react-native-chat-components";
import { useAtom } from "jotai";
import { usePubNub } from "pubnub-react";
import React from "react";
import { CurrentChannelAtom } from "../../state-atoms";
import { Text, Button } from "react-native";

export function ChannelMembersScreen(): JSX.Element {
    const [currentChannel] = useAtom(CurrentChannelAtom);
    const [channelMembers] = useChannelMembers({
        channel: currentChannel.id,
        include: { customUUIDFields: true },
    });
    const [presenceData] = usePresence({ channels: [currentChannel.id] });
    const presentUUIDs = presenceData[currentChannel.id]?.occupants?.map((o: { uuid: any; }) => o.uuid) || [];
    const pubnub = usePubNub();

    function alert(arg0: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <MemberList
            members={channelMembers}
            presentMembers={[pubnub.getUUID(), ...presentUUIDs]}
        style={{
          memberPressed: {
            backgroundColor: "red",
          },
        }}
        memberRenderer={(m) => <Text>{m.name}</Text>}
        extraActionsRenderer={(m) => (
          <Button title="EA" onPress={() => alert(`Extra! from ${m.name}`)}></Button>
        )}
        onMemberClicked={(m) => alert(`Clicked: ${m.name}`)}
        onMemberLongPressed={(m) => alert(`Long pressed: ${m.name}`)}
        >
            <Text>Hello from members</Text>
        </MemberList>
    );
}
