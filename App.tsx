import { StatusBar } from "expo-status-bar";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import Head from "./src/components/Head";
import Inputs from "./src/components/Inputs";
import { useState,useEffect } from "react";
import Addbutton from "./src/components/Addbutton";
import Filter from "./src/components/Filter";
import { addNoteToList, notesList, deleteNoteToList } from "./texts";
import { styles } from "./src/styles/Styles";

export default function App() {
  const [notes, setNotes] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const [position, setPosition] = useState(new Animated.Value(-200));
  const [notessList, setNotesList] = useState({
    originalNotes: notesList.originalNotes,
    filteredNotes: notesList.filteredNotes,
  });

  let note = notes;
  const addNotes = () => {
    if (note.trim() !== "") {
      addNoteToList(note.trim());
      setNotes("");
    }
  };

  const handleDelete = (index: number) => {
    deleteNoteToList(index);
    setNotesList({ ...notesList });
  };

  console.log(note);

  const renderNotes = () => {
    console.log(isSelect);
    return (
      isSelect === true
        ? notessList.filteredNotes.length > 0
          ? notessList.filteredNotes
          : notessList.originalNotes
        : notessList.originalNotes
    ).map((note, index) => (
      <View key={index} style={styles.noteContainer}>
        <Text style={styles.note} key={index}>
          {note}
        </Text>
        <TouchableOpacity onPress={() => handleDelete(index)}>
          <Text style={styles.delete}>Sil</Text>
        </TouchableOpacity>
      </View>
    ));
  };
  useEffect(() => {
    Animated.timing(position, {
      toValue: isSelect ? 10 : -120, // -200 yukarı kaydırmak için
      duration: 150,
      useNativeDriver: true
    }).start();
  }, [isSelect]);
  return (
    <View style={styles.container}>
      <Head />
      <Inputs
        style={styles.inputText}
        title={notes}
        placeholder="Not Giriniz"
        onChangeText={setNotes}
      />
      <Addbutton
        text="EKLE"
        onPress={addNotes}
        buttonstyles={styles.button}
        txtstyles={styles.buttonTxt}
      />
      <Filter
        notessList={notesList}
        setNotesList={setNotesList}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />
      <Animated.View style={[styles.notesContainer, { transform: [{ translateY: position }] }]}>
        <Text style={styles.txt}>Notlar</Text>
        {renderNotes()}
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}
