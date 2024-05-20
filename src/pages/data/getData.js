import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getDataFirebase(
  dataKey,
  userId,
  setData = () => {},
  setLoading = () => {}
) {
  setLoading(true);
  const docRef = doc(db, dataKey, userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data(), "fgsdb", docSnap);
    setData(docSnap.data());
    setLoading(false);
  } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    setData("Data Not Found");
    setLoading(false);
  }
}

export async function getOrderDataFirebase(
  dataKey,
  setOrderData = () => {},
  setIsLoading = () => {}
) {
  setIsLoading(true);
  const colRef = collection(db, dataKey);
  const docsSnap = await getDocs(colRef);
  docsSnap.forEach((doc) => {
    let resultArr = [doc.data()];
    setOrderData((prev) => {
      if (prev?.length) {
        return [...prev, ...resultArr];
      } else {
        return resultArr;
      }
    });
  });
  setIsLoading(false);
}
