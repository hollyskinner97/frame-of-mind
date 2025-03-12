"use client";
import { useEffect, useState } from "react";
import fetchCompletedComics from "../utils/fetchCompletedComics";
import fetchComicPanel from "../utils/fetchComicPanel";

import { Button, ButtonGroup, Typography, Grid2 } from "@mui/material";
import { FilterBar } from "./FilterBar";

export default function Community() {
  const [comics, setComics] = useState([]);

  console.log(comics, "<======COMICS");
  const [sortedComics, setSortedComics] = useState([]);
  const [filteredComics, setFilteredComics] = useState([]);
  const [typeFilteredComics, setTypeFilteredComics] = useState([]); //solo/team filtering
  const [filters, setFilters] = useState({
    sortBy: "completedAt",
    showMyComics: false,
    comicType: "all",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCompletedComics();

      for (const comic of data) {
        const firstPanelImage = await fetchComicPanel(comic.panels[0]);
        comic.firstPanelImage = firstPanelImage;
      }

      setComics(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (comics.length > 0) {
      const sortedAndFilteredComics = [...comics].sort((comicA, comicB) => {
        switch (filters.sortBy) {
          case "likes":
            return (comicB.comicLikes || 0) - (comicA.comicLikes || 0);
          case "theme":
            return (comicA.comicTheme || "").localeCompare(
              comicB.comicTheme || ""
            );
          case "completedAt":
          default:
            return (
              comicB.createdAt.toDate().getTime() -
              comicA.createdAt.toDate().getTime()
            );
        }
      });

      setFilteredComics(sortedAndFilteredComics);
    }
  }, [comics, filters]);

  useEffect(() => {
    if (sortedComics.length > 0) {
      const typeFiltered = sortedComics.filter((comic) => {
        if (filters.comicType === "all") return true; //show all comics
        if (filters.comicType === "solo") return comic.isSolo === true; //show only solo comics
        if (filters.comicType === "team") return comic.isSolo === false; //show only team comics
        return true;
      });
      setTypeFilteredComics(typeFiltered);
    }
  }, [sortedComics, filters.comicType]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <ButtonGroup sx={{ mb: 2, gap: 0.5, justifyContent: "center" }}>
        <Button href={"/"} size="large" variant="contained">
          Home
        </Button>

        <Button href={"/create"} size="large" variant="contained">
          Create
        </Button>
      </ButtonGroup>

      <FilterBar onFilterChange={handleFilterChange} filters={filters} />

      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Community
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        See what other users have created!
      </Typography>

      <Grid2
        container
        spacing={3}
        sx={{
          justifyContent: "center",
        }}
      >
        {filteredComics.map((comic) => (
          <div key={comic.id}>
            <img src={comic.firstPanelImage} alt="" />
            <Typography variant="body1">{comic.comicTheme}</Typography>
            <Typography variant="body2">
              Created: {comic.createdAt.toDate().toLocaleDateString()}
            </Typography>
            <Typography variant="body2">Likes: {comic.comicLikes}</Typography>
          </div>
        ))}
      </Grid2>
    </>
  );
}
