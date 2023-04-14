import { useSelector } from "react-redux";
import AlbumCardList from "./AlbumCardList";

const YourLibrary = () => {
  const savedSongs = useSelector((state) => state.fav.savedFavSongs);
  return (
    <>
      <div className="favouriteSongs">
        {savedSongs.length > 0 ? (
          <AlbumCardList title="Your favourite songs" songs={savedSongs} />
        ) : (
          <>
            <h1>You didn' save any song!</h1>
            <h4>Add it!</h4>
          </>
        )}
      </div>
    </>
  );
};
export default YourLibrary;