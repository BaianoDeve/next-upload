import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
`;

export const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #444;

  & + li {
    margin-top: 15px;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Preview = styled.div<{ src: string }>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;

export const PreviewBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewBottomInfo = styled.span`
  font-size: 12px;
  color: '#999';
  margin-top: 5px;

  button {
    border: 0;
    background: transparent;
    color: #e57878;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
