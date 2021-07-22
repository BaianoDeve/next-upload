import styled, { css } from 'styled-components';

type DropContainerProps = {
  isDragActive?: boolean;
  isDragReject?: boolean;
};

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs<DropContainerProps>(props => ({
  className: 'dropzone'
}))<DropContainerProps>`
  border: 1px dashed #ddd;
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2;

  ${({ isDragActive }) => isDragActive && dragActive}
  ${({ isDragReject }) => isDragReject && dragReject}
`;

type UploadMessageProps = {
  type?: 'error' | 'success';
};

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5'
};

export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  color: ${({ type }) => messageColors[type || 'default']};
  justify-content: center;
  padding: 15px 0;
`;
