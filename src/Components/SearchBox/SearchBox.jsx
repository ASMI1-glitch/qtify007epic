import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="Search-Box">
      <input placeholder="Search a album of your choice" className="Text-Box" />
      <div className="Search-Icon-Box">
        <img src="./Searchicon.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBox;
