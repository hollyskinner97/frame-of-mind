"use client";
import { useEffect, useState } from "react";
import fetchCompletedComics from "../utils/fetchCompletedComics";
import fetchComicPanel from "../utils/fetchComicPanel";

import { Button, ButtonGroup, Typography, Grid2 } from "@mui/material";
import { FilterBar } from "./FilterBar";

export default function Community() {
  const [comics, setComics] = useState([]);

  console.log(comics, "<======COMICS");
  const [filteredComics, setFilteredComics] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: "completedAt",
    showMyComics: false,
    comicType: "all",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

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
            return new Date(comicA.createdAt) - new Date(comicB.createdAt);
        }
      });

      setFilteredComics(sortedAndFilteredComics);
    }
  }, [comics, filters]);

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

      <FilterBar onFilterChange={handleFilterChange} />

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
