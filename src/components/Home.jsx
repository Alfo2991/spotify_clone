import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_HIPHOP, ADD_TO_POP, ADD_TO_ROCK, mainFetch } from "../redux/actions/actions";
import AlbumCardList from "./AlbumCardList";
import NavBar from "./NavBar";

const rockArtists = ["oasis", "queen", "thedoors", "thewho", "thepolice", "eagkes", "u2", "bonjovi"];
const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

const Home = () => {
  const dispatch = useDispatch();
  const rockSongs = useSelector((state) => state.mainSongs.rockSongs);
  const popSongs = useSelector((state) => state.mainSongs.popSongs);
  const hipHopSongs = useSelector((state) => state.mainSongs.hipHopSongs);
  const searchedSongs = useSelector((state) => state.search.searchResult);

  const fetchDataFromArtists = useCallback(async (artists, actionType) => {
    const promises = artists.map((artist) => dispatch(mainFetch(artist, actionType)));
    const data = await Promise.all(promises);
    return data.flat();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rockData = await fetchDataFromArtists(rockArtists, ADD_TO_ROCK);
        const popData = await fetchDataFromArtists(popArtists, ADD_TO_POP);
        const hipHopData = await fetchDataFromArtists(hipHopArtists, ADD_TO_HIPHOP);

        dispatch(rockData);
        dispatch(popData);
        dispatch(hipHopData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, fetchDataFromArtists]);

  return (
    <>
      <NavBar />
      {searchedSongs.length > 0 && <AlbumCardList title="Search" songs={searchedSongs} id="rock" />}
      <AlbumCardList title="Rock Classics" songs={rockSongs} id="rock" />
      <AlbumCardList title="Pop Culture" songs={popSongs} id="pop" />
      <AlbumCardList title="#HipHop" songs={hipHopSongs} id="hiphop" />
    </>
  );
};

export default Home;