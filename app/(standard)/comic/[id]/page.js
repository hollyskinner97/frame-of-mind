"use client";
import { use, useEffect, useState } from "react";
import CommentsList from "../components/CommentsList";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import ComicGrid from "../components/ComicGrid";
import fetchCommentsForComic from "../utils/fetchCommentsForComic";
import getData from "@/app/firestore/getData";


export default function ComicPage({ params }) {
  const comicId = use(params).id;
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [authUser] = useAuthState(auth);
  const [userRef, setUserRef] = useState(null);

  const comicRef = doc(db, "comics", comicId);
  const [comicInfo, setComicInfo] = useState(null);
  const [isUsersComic, setIsUsersComic] = useState(false);
  const [comicIsPublic, setComicIsPublic] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  // const [filters, setFilters] = useState({
    // sortBy: "completedAt",
    // showMyComics: false,
    // comicType: "all",
  // });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    if (authUser) {
      setUserRef(doc(db, "users", authUser.uid));
    }
  }, [authUser]);

  useEffect(() => {
   async function fetchComicsAndComments(comicId, comicRef) {
     try {
       setLoading(true);
       const comicInfo = (await getData("comics", comicId)).result.data();
       setComicInfo(comicInfo);

       if (comicData) {
         const filteredComicData = {
           ...comicData,
           ...(Array.isArray(comicData.comics) && {
             comics: comicData.comics
               .filter((comic) => {
                 //filter by user's comics
                 if (
                   filters.showMyComics &&
                   comic.createdBy !== authUser?.uid //using?(optional chaining) we won't get an error even when sth is undefined
                 ) {
                   return false;
                 }
                 //filter by comic type
                 if (filters.comicType === "solo" && !comic.isSolo) {
                   return false;
                 }
                 if (filters.comicType === "team" && comic.isSolo) {
                   return false;
                 }
                 return true;
               })
               .sort((comicA, comicB) => {
                 switch (filters.sortBy) {   //sortBy filtered results
                   case "likes":
                     return (comicB.likes || 0) - (comicA.likes || 0);
                   case "theme":
                     return (comicA.theme || "").localeCompare(comicB.theme || "");
                   case "completedAt":
                   default:
                     return (
                       new Date(comicB.completedAt || 0) -
                       new Date(comicA.completedAt || 0)
                     );
                 }
               }),
           }),
         };
         setComicInfo(filteredComicData);
       }
       const comments = await fetchCommentsForComic(comicRef);
        setComments(comments);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    fetchComicsAndComments(comicId, comicRef);

    if (comicInfo.userRef === userRef) {
      setIsUsersComic(true);
    }
  }, [comicId, filters]);

  async function handlePrivacySetting() {
    setComicIsPublic(!comicIsPublic);

    await updateDoc(comicRef, {
      isPublic: comicIsPublic,
    });
  }

  async function handlePostComment(event) {
    try {
      event.preventDefault();
      setIsPosting(true);

      const displayName = authUser.displayName;
      const uid = authUser.uid;
      const avatarUrl = authUser.avatarUrl;

      // commentBody to be set in state while typing in the comment form

      const newComment = {
        uid,
        displayName,
        avatarUrl,
        commentBody,
      };

      // We also want to do some sort of posting state, the new comment should be optimistically rendered but greyed out or something until it's confirmed to have gone through successfully and we should lock the posting function until that's completed so they don't double submit.

      // to optimistically render the new comment we can immediately add it to comments array
      // and because this is just to display feedback for the user, we can use their local time instead of the server time
      // also adding the isOptimistic flag so we can distinguish it from comments fetched from the database
      setComments([
        {
          ...newComment,
          commentPostedDate: Date.now(),
          isOptimistic: true,
        },
        ...comments,
      ]);

      await postCommentToComic({ authUser, comicId, ...newComment });

      setIsPosting(false);
    } catch (error) {
      // Comment failed: remove optimistically rendered comment from the comments state
      setComments(comments.filter((comment) => !comment.isOptimistic));
      console.log(error);
      setError(error);
      setIsPosting(false);
    }
  }

  return (
    <>
      <FilterBar onFilterChange={handleFilterChange} userId={authUser.uid} />
      <ComicGrid />
      <hr />
      <CommentsList />
    </>
  );
}
