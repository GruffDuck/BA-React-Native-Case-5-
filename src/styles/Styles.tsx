import { StyleSheet } from "react-native";
import { Metrics } from "../../Metric";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  notesContainer: {
    top: Metrics.measure(100),
    width: Metrics.measure(300),
    height: Metrics.measure(400),

    marginTop: Metrics.measure(20),
    borderRadius: Metrics.measure(10),
    padding: Metrics.measure(10),
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: Metrics.measure(10),
  },
  note: {
    fontSize: 18,
    marginBottom: Metrics.measure(10),
    top: Metrics.measure(5),
  },
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
  },
  delete: {
    color: "#447970",
    fontSize: 18,
    borderBottomColor: "#447970",
    borderBottomWidth: 1,
  },
  button: {
    top: Metrics.measure(20),
    backgroundColor: "#447970",
    padding: 10,
    borderRadius: 10,
    width: Metrics.measure(300),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTxt: {
    color: "#fff",
    fontSize: 20,
  },
  input: {
    top: Metrics.measure(20),
    width: Metrics.measure(300),
    height: Metrics.measure(40),
    margin: 12,

    borderRadius: 10,
    padding: 10,
    backgroundColor: "#E4EFED",
  },
  inputText: {
    top: Metrics.measure(20),
    width: Metrics.measure(300),
    height: Metrics.measure(40),
    margin: 12,

    borderRadius: 10,
    padding: 10,
    backgroundColor: "#E4EFED",
  },
  header: {
    width: `100%`,
    height: Metrics.measure(75),
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  headerTxt: {
    top: Metrics.measure(10),
    color: "black",
    fontSize: 25,
  },
  filterContainer: {
    top: Metrics.measure(20),
    width: Metrics.measure(300),
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  filterTxt: {
    fontSize: 15,
    color: "#447970",
    left: Metrics.measure(200),
  },
  filterCancelText: {
    fontSize: 15,
    color: "#447970",
    left: Metrics.measure(200),
  },

  alphabeticFilterstyle: {
    width: Metrics.measure(300),
    height: Metrics.measure(150),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  alphabeticFilterText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
  },
  deselectedButton: {
    width: Metrics.measure(50),
    height: Metrics.measure(20),
    borderRadius: 5,
    borderColor: "#447970",
    borderWidth: 2,
  },
  aztext: {
    fontSize: 15,
    fontWeight: "400",
    alignSelf: "center",
  },
  selectedButton: {
    width: Metrics.measure(50),
    height: Metrics.measure(20),
    borderRadius: 5,
    backgroundColor: "#447970",
    left: Metrics.measure(90),
  },
  addButton: {
    position: "absolute",
    top: Metrics.measure(20),
    right: Metrics.measure(-100),
    backgroundColor: "#447970",

    borderRadius: 10,
    width: Metrics.measure(300),
    height: Metrics.measure(40),
    alignItems: "center",
    justifyContent: "center",
  },
  filterButtonTxt: {
    color: "#fff",
    fontSize: 20,
  },
  inputFilter: {
    position: "absolute",
    top: Metrics.measure(0),
    width: Metrics.measure(300),
    height: Metrics.measure(40),
    margin: 12,

    borderRadius: 10,
    padding: 10,
    backgroundColor: "#E4EFED",
  },

  filterBox: {

  },
});
