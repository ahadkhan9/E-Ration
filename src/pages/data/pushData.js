import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export async function pushDataToDb(dataId, data, setDataStatus = () => {}) {
  let status;
  try {
    await setDoc(doc(db, dataId, data?.aadhaarCard), data);
    setDataStatus({ status: "successful" });
  } catch (e) {
    setDataStatus({ status: "unsuccessful", statusError: e });
  }
  return status;
}

export async function pushOrderDataToDb(dataId, data) {
  try {
    await setDoc(doc(db, dataId, data?.userData?.aadhaarCard), data);
  } catch (e) {
    console.log(e);
  }
}
