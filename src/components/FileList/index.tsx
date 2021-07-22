import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { UploadedFile } from '../../context/UploadContext';

import {
  Container,
  FileItem,
  FileInfo,
  Preview,
  PreviewBottom,
  PreviewBottomInfo,
  Icons
} from './styles';

interface Props {
  files: UploadedFile[];
}

export const FileList = ({ files }: Props) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <FileItem key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <PreviewBottom>
              <strong>{uploadedFile.name}</strong>
              <PreviewBottomInfo>
                {uploadedFile.readableSize}{' '}
                <button onClick={() => {}}>Excluir</button>
              </PreviewBottomInfo>
            </PreviewBottom>
          </FileInfo>

          <Icons>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                value={uploadedFile.progress}
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#8257e6' }
                }}
                strokeWidth={10}
              />
            )}

            {uploadedFile.url && (
              <a
                href="http://localhost:3001/files/8d9d1dd0977ab0b23a78ae812bb91ae4-hanako-kun-01.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#78e5d5" />
            )}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </Icons>
        </FileItem>
      ))}
    </Container>
  );
};
