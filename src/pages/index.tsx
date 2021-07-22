import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { uniqueId, concat } from 'lodash';
import filesize from 'filesize';

import { Container, Content } from '../styles/pages/home';
import { Upload } from '../components/Upload';
import { FileList } from '../components/FileList';

import { useUploadFiles } from '../context/UploadContext';

export interface UploadedFile {
  file: File;
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
  url: string | null;
}

const PageComponent: NextPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleUpload = (files: File[]) => {
    const newUploadFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    setUploadedFiles(concat(uploadedFiles, newUploadFiles));
  };

  return (
    <Container>
      <Content>
        <Upload handleUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
      </Content>
    </Container>
  );
};

export default PageComponent;
