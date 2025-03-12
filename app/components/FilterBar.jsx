import { useState } from "react";
import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export function FilterBar({ onFilterChange, userId }) {
  const [sortBy, setSortBy] = useState("completedAt"); //by default
  const [showMyComics, setShowMyComics] = useState(false); //show my comics by default
  const [comicType, setComicType] = useState("all");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onFilterChange({ sortBy: value, showMyComics, comicType });
};

//for thee ToggleButton 
const handleMyComicsToggle = (event) => {
    const newValue = !showMyComics;
    setShowMyComics(newValue);
    onFilterChange({ sortBy, showMyComics: newValue, comicType });
};

//for the ToggleButtonGroup solo/team 
const handleComicTypeToggle = (event, newValue) => {
    if (newValue !== null) {  
        setComicType(newValue);
        onFilterChange({ sortBy, showMyComics, comicType: newValue });
    }
};

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ bgcolor: "background.paper" }}
      variant="outlined"
    >
      <Toolbar sx={{ gap: 2, display: "flex", flexWrap: "wrap" }}>

        <FormControl sx={{ minWidth: 180 }}>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            displayEmpty
            variant="standard"
          >
            <MenuItem value="completedAt">Most Recent</MenuItem>
            <MenuItem value="likes">Most Liked</MenuItem>
            <MenuItem value="theme">Theme (A-Z)</MenuItem>
          </Select>
        </FormControl>

      
        {userId && (
          <ToggleButton
            value="myComics"
            selected={showMyComics}
            onChange={handleMyComicsToggle}
            sx={{ mx: 1 }}
          >
            My Comics
          </ToggleButton>
        )}

        <ToggleButtonGroup
          value={comicType}
          exclusive
          onChange={handleComicTypeToggle}
          aria-label="comic type"
        >
          <ToggleButton value="solo" aria-label="show solo comics">
            Solo
          </ToggleButton>
          <ToggleButton value="team" aria-label="show team comics">
            Team
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
