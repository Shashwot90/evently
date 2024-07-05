import React, { SetStateAction, useCallback } from 'react'

type FileUploadProps = {
  imageUrl: string,
  onFieldChange: (value: string) => void,
  setFiles: Dispatch<SetStateAction<File[]>>
}

// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
 

 

const FileUploader = ({imageUrl, onFieldChange, setFiles}: FileUploadProps) => {
 
   
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
 
   
 
  
 
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  });
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {files.length > 0 && (
          <button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}

 

export default FileUploader