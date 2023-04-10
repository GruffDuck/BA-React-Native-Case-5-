import React, { useState,useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import AlphabeticalFilter from "./AlphabeticalFilter";
import { styles } from "../styles/Styles";
import { notesList } from "../../texts";

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

const ShowAndHideFilter = (
    props: Props & { isSelect: boolean; setIsSelect: (isSelect: boolean) => void }
  ) => {
    const { notessList, setNotesList, isSelect, setIsSelect } = props;
    const [showFilter, setShowFilter] = useState(false);
    const [filterText, setFilterText] = useState("");
  
    const slideAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
  
    const handleFilterPress = () => {
      setShowFilter(true);
      setIsSelect(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    };
  
    const handleFilterCancel = () => {
        setIsSelect(false);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        
        setShowFilter(false);
        
        setFilterText("");
      });
    };
  
    return (
      <View style={styles.filterContainer}>
        {showFilter ? (
          <Animated.View
            style={[
              styles.filterBox,
              {
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-60, 0],
                    }),
                  },
                ],
                opacity: opacityAnim,
              },
            ]}
          >
            <TouchableOpacity onPress={handleFilterCancel}>
              <Text style={styles.filterCancelText}>Filtreleri gizle</Text>
            </TouchableOpacity>
            <AlphabeticalFilter
              notessList={notesList}
              setNotesList={setNotesList}
            />
          </Animated.View>
        ) : (
          <TouchableOpacity onPress={handleFilterPress}>
            <Text style={styles.filterTxt}>Filtreleri göster</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };


  


export default ShowAndHideFilter;
