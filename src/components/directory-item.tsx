'use client';
export const DirectoryItem = ({switchDirectory,item}) => {
    return (
      <li onClick={()=>switchDirectory(item)}>
        {item}
      </li>
    );
  };