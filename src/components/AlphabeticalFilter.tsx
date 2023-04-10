import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Metrics } from "../../Metric";
import { useState } from "react";
import Inputs from "./Inputs";
import Addbutton from "./Addbutton";
import { notesList } from "../../texts";
import { styles } from "../styles/Styles";
type Props = {
    notessList: {
      originalNotes: string[];
      filteredNotes: string[];
    };
    setNotesList: React.Dispatch<
      React.SetStateAction<{
        originalNotes: string[];
        filteredNotes: string[];
      }>
    >;
  };
const AlphabeticalFilter = (props: Props) => {
    const { notessList, setNotesList } = props;
  
    const [isSelectAZ, setIsSelectAZ] = useState(true);
    const [isSelectZA, setIsSelectZA] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [sortedNotes, setSortedNotes] = useState<string[]>([]);
    const [filteredNotes, setFilteredNotes] = useState<string[]>([]);
  
    const handleSelectAZ = () => {
      setIsSelectAZ(true);
      setIsSelectZA(false);
    };
  
    const handleSelectZA = () => {
      setIsSelectAZ(false);
      setIsSelectZA(true);
    };
    const filterAllChoices = () => {
      let sortedNotes = [
        ...notessList.originalNotes,
        ...notessList.filteredNotes,
      ];
      if (isSelectAZ) {
        sortedNotes.sort();
      } else if (isSelectZA) {
        sortedNotes.sort().reverse();
      }
      let filteredNotes = sortedNotes.filter(
        (note) => note.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      setSortedNotes(sortedNotes);
      setFilteredNotes(filteredNotes);
      setNotesList({
        originalNotes: notesList.originalNotes,
        filteredNotes: filteredNotes,
      });
      console.log("sortedNotes", sortedNotes);
    };
  
    return (
      <View style={styles.alphabeticFilterstyle}>
        <Inputs
          style={styles.inputFilter}
          title={searchText}
          onChangeText={setSearchText}
          placeholder="Filtrele"
        />
        <Text style={styles.alphabeticFilterText}>Alfabetik sıralama</Text>
        <TouchableOpacity
          onPress={handleSelectAZ}
          style={[
            isSelectAZ ? styles.selectedButton : styles.deselectedButton,
            { left: Metrics.measure(70) },
          ]}
        >
          <Text
            style={[styles.aztext, { color: isSelectAZ ? "white" : "#447970" }]}
          >
            A-Z
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSelectZA}
          style={[
            isSelectZA ? styles.selectedButton : styles.deselectedButton,
            { left: Metrics.measure(90) },
          ]}
        >
          <Text
            style={[styles.aztext, { color: isSelectZA ? "white" : "#447970" }]}
          >
            Z-A
          </Text>
        </TouchableOpacity>
        <Addbutton
          text="Filtrele"
          onPress={filterAllChoices}
          buttonstyles={styles.addButton}
          txtstyles={styles.filterButtonTxt}
        />
      </View>
    );
  };
  export default AlphabeticalFilter;