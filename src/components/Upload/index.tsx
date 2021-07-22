import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { useUploadFiles } from '../../context/UploadContext';

import { DropContainer, UploadMessage } from './styles';

interface Props {
  handleUpload: (files: File[]) => void;
}

export const Upload = ({ handleUpload }: Props) => {
  // const { handleUpload } = useUploadFiles();

  const onDrop = useCallback(acceptedFiles => {
    handleUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: 'image/*' });

  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) {
      return <UploadMessage>Drop arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>;
    }

    return (
      <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
    );
  }

  return (
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
    >
      <input {...getInputProps()} />
      {renderDragMessage(isDragActive, isDragReject)}
    </DropContainer>
  );
};
