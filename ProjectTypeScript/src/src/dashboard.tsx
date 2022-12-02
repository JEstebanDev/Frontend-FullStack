import React, { useEffect, useState } from "react";
import { ListData } from "../interfaces/listData.interface";
import { Request } from "../interfaces/request.interface";
import { fetchGoogleApi } from "../utils/googleApi";
import DragDrop from "./components/dragDrop";
import OutPut from "./components/outPut";
import Swal from "sweetalert2";

const requestValue: Request = {
  requests: [
    {
      image: {
        content: "",
      },
      features: [
        {
          type: "DOCUMENT_TEXT_DETECTION",
        },
      ],
    },
  ],
};

export default function Dashboard() {
  const [Image, setImage] = useState<string>();
  const [request, setRequest] = useState<Request[]>([]);
  const [Data, setData] = useState<ListData[]>([]);
  let increment = -1;
  const onUpload = (files: File[]) => {
    setImage(URL.createObjectURL(files[0]));
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      if (typeof reader.result == "string") {
        const base64 = reader.result.replace("data:image/jpeg;base64,", "");
        requestValue.requests[0].image.content = base64;
        setRequest((oldArray) => [...oldArray, requestValue]);
      }
    };
    reader.onerror = (error) => console.log("Error: ", error);
  };

  useEffect(() => {
    if (request.length != 0) {
      fetchGoogleApi(request[request.length - 1])
        .then((result) => {
          if (Image != null && result != null) {
            setData((oldArray) => [
              ...oldArray,
              {
                id: increment++,
                image: Image,
                text: result,
                color: false,
              },
            ]);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This image is not available !",
          });
        });
    }
  }, [request]);

  return (
    <div className="container">
      <DragDrop onUpload={onUpload}>
        <div className="FilesDragAndDrop__area">
          Hey, drop me some files
          <span role="img" aria-label="emoji" className="area__icon">
            &#128526;
          </span>
        </div>
      </DragDrop>
      {Data != null ? <OutPut Data={Data}></OutPut> : null}
    </div>
  );
}
