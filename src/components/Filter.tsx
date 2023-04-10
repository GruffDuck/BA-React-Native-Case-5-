import ShowAndHideFilter from "./ShowAndHideFilter";

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

const Filter = (
  props: Props & { isSelect: boolean; setIsSelect: (isSelect: boolean) => void }
) => {
  const { notessList, setNotesList, isSelect, setIsSelect } = props;

  return (
    <>
      <ShowAndHideFilter
        notessList={notessList}
        setNotesList={setNotesList}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />
    </>
  );
};

export default Filter;
