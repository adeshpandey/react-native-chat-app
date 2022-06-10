import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  DocumentData, getDocs, getFirestore,
  QueryDocumentSnapshot,
  setDoc
} from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

const firestore = getFirestore();
const auth = getAuth();

const data = [
  {
    icon: "person-outline",
    name: "Adesh Pandey 1",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
];

const to = {}
export default function ChatDetail(props) {
  const {id,name} = props.route.params;
  const [messages, setMessages] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);

  const [room, setRoom] = useState();


  useEffect(() => {
    setDoc(
      doc(firestore, "threads", auth.currentUser?.uid + id),
      {
        name: auth.currentUser?.uid + id,
      },
      { merge: true }
    );
  }, [setRoom])

  useEffect(() => {

    getDocs(collection(firestore, doc(
        firestore,
        "threads",
        auth.currentUser?.uid + id).path, "messages"))
      .then((snapshots) => {

        const newMessages = snapshots.docs.map(snapshot => ( {
           _id: snapshot.id,
           name: '',
           ...snapshot.data(),
              createdAt: snapshot.data().createdAt.toDate()
          }));
        setMessages(newMessages);
      })
      .catch((err) => console.log(err));
  }, [setMessages]);

  const sendMessage = useCallback((messages = []) => {
    try {
      // alert(auth.currentUser?.uid + id);
      const messageRef = collection(firestore, doc(
        firestore,
        "threads",
        auth.currentUser?.uid + id).path, "messages");
      addDoc(messageRef, {
        ...messages[0],
      });

    } catch (err) {
      console.log(err);
    }
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: "tomato" },
          left: { backgroundColor: "blue" },
        
        }}
        textStyle={{ right: { color: "#fff" }, left: { color: "#fff" } }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => sendMessage(newMessage)}
        user={{ _id: auth.currentUser?.uid }}
        renderBubble={renderBubble}
        showUserAvatar
      />
    </View>
  );
}
