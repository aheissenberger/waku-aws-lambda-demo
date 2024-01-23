import { Link } from 'waku';
import { getDirectoryList } from '../lib/directory';

export const DirPage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
      <h3 className="text-2xl font-bold tracking-tight mt4">Directory List</h3>
      {data.directoryList.map((item) => (
        <div key={item}>
          
            {item}
          
          </div>
      ))}
    </div>
  );
};

const getData = async () => {
  const directoryPath = '.';
  const directoryList = getDirectoryList(directoryPath);
  //console.log('Directory List:', directoryList);

  const data = {
    title: 'Directory List',
    headline: 'Directory List (Server Side Rendered)',
    body: 'The minimal React framework',
    directoryList
  };

  return data;
};
