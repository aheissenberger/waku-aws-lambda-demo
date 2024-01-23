import { Link } from 'waku';
import { getDirectoryList } from '../lib/directory';
import { DirectoryItem } from '../components/directory-item.js';

export const DirPage = async ({ directories }) => {
  const data = await getData(directories);

console.log('directories:',directories)
  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
      <h3 className="text-2xl font-bold tracking-tight mt4">Directory List</h3>
      <div><Link to={`/dir/${directories.slice(0,-1).join('/')}`}  className="font-bold"    >
             Zurück
          </Link></div>
      <ul>
        {data.directoryList.map((item) => (
          <Link to={`/dir/${[...directories,item].join('/')}`}      >
            <DirectoryItem key={item} item={item} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

const getData = async (directories) => {
  console.log('Directory:', directories);
  const directoryPath = directories ?? '.';
  const directoryList = getDirectoryList(directoryPath.join('/'));
  //console.log('Directory List:', directoryList);

  const data = {
    title: 'Directory List',
    headline: 'Directory List (Server Side Rendered)',
    body: 'The minimal React framework',
    directoryList
  };

  return data;
};

const removeLastElement = (array) => {
  const newArray = [...array];
  newArray.pop();
  return newArray;
};

