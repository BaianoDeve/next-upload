import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch
} from 'react';
import { uniqueId, concat } from 'lodash';
import filesize from 'filesize';

type UploadContextType = {
  uploadedFiles: UploadedFile[];
  handleUpload: (files: File[]) => void;
  users: User[];
  handleUser: (users: User[]) => void;
};

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

interface UploadProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  id: number;
}

const UploadContext = createContext({} as UploadContextType);

const UploadProvider = ({ children }: UploadProviderProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [users, setUser] = useState<User[]>([]);

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

    // const saveNewUploadFiles = uploadedFiles.concat(newUploadFiles);
    const save = concat(uploadedFiles, newUploadFiles);

    setUploadedFiles(save);

    console.log(save);
  };

  const handleUser = (users: User[]) => {
    const newUsers = users.map(({ name, id }) => ({
      name,
      id
    }));

    console.log(newUsers);

    setUser([...users, ...newUsers]);
  };

  return (
    <UploadContext.Provider
      value={{ uploadedFiles, handleUpload, users, handleUser }}
    >
      {children}
    </UploadContext.Provider>
  );
};

const useUploadFiles = () => useContext(UploadContext);

export { UploadProvider, useUploadFiles };
