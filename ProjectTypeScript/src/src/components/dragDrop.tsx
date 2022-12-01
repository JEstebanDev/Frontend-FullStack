import React, { useEffect, useRef } from "react";

export default function DragDrop({ onUpload, children, count, formats }: any) {
  const drop = useRef<HTMLInputElement>(null);
  const drag = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);

  useEffect(() => {
    if (drop.current != null) {
      drop.current.addEventListener("dragover", handleDragOver);
      drop.current.addEventListener("drop", handleDrop);
      drop.current.addEventListener("dragenter", handleDragEnter);
      drop.current.addEventListener("dragleave", handleDragLeave);
      return () => {
        if (drop.current != null) {
          drop.current.removeEventListener("dragover", handleDragOver);
          drop.current.removeEventListener("drop", handleDrop);
          drop.current.removeEventListener("dragenter", handleDragEnter);
          drop.current.removeEventListener("dragleave", handleDragLeave);
        }
      };
    }
  }, []);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target !== drag.current) {
      setDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target === drag.current) {
      setDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    // this is required to convert FileList object to array

    if (e.dataTransfer) {
      const files = [...e.dataTransfer.files];

      // check if the provided count prop is less than uploaded count of files
      if (count && count < files.length) {
        console.log(
          `Only ${count} file${
            count !== 1 ? "s" : ""
          } can be uploaded at a time`
        );
        return;
      }
      // check if some uploaded file is not in one of the allowed formats
      if (
        formats &&
        files.some(
          (file) =>
            !formats.some((format: string) =>
              file.name.toLowerCase().endsWith(format.toLowerCase())
            )
        )
      ) {
        console.log(
          `Only following file formats are acceptable: ${formats.join(", ")}`
        );
        return;
      }
      if (files && files.length) {
        onUpload(files);
      }
    }
  };

  return (
    <div ref={drop} className="FilesDragAndDrop">
      {dragging && (
        <div ref={drag} className="FilesDragAndDrop__placeholder">
          Drop that file down low
          <span role="img" aria-label="emoji" className="area__icon">
            &#128526;
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
