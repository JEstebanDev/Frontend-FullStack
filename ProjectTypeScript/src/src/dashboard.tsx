import React, { useEffect, useState } from "react";
import { Request } from "../interfaces/request.interface";
import { Response } from "../interfaces/response.interfaces";
import { fetchGoogleApi } from "../utils/googleApi";
import DragDrop from "./components/dragDrop";

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
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [request, setRequest] = useState<Request[]>([]);
  const [response, setResponse] = useState<Response>();

  const onUpload = (files: File[]) => {
    getBase64(files[0]);
    setPreviewUrl(URL.createObjectURL(files[0]));
  };

  function getBase64(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result == "string") {
        const base64 = reader.result.replace("data:image/jpeg;base64,", "");
        requestValue.requests[0].image.content = base64;
        setRequest((oldArray) => [...oldArray, requestValue]);
      }
    };
    reader.onerror = (error) => console.log("Error: ", error);
  }

  useEffect(() => {
    if (request.length != 0) {
      fetchGoogleApi(request[request.length - 1])
        .then((result) => {
          setResponse(result);
        })
        .catch((err) => {});
    }
  }, [request]);

  return (
    <div>
      <DragDrop onUpload={onUpload}>
        <div className="FilesDragAndDrop__area">
          Hey, drop me some files
          <span role="img" aria-label="emoji" className="area__icon">
            &#128526;
          </span>
        </div>
      </DragDrop>
      {previewUrl && <img width={200} src={previewUrl} alt="image" />}
      {response && <span>{response.responses[0].fullTextAnnotation.text}</span>}
    </div>
  );
}
