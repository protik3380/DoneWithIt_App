import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "This is title one",
    description: "This is description one",
    image: require("../assets/protik.jpg"),
  },
  {
    id: 2,
    title: "This is title Two",
    description: "This is description Two",
    image: require("../assets/protik.jpg"),
  },
  {
    id: 3,
    title: "This is title Three",
    description: "This is description Three",
    image: require("../assets/protik.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "This is title Two",
              description: "This is description Two",
              image: require("../assets/protik.jpg"),
            },
            {
              id: 3,
              title: "This is title Three",
              description: "This is description Three",
              image: require("../assets/protik.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
export default MessagesScreen;
