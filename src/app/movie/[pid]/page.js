"use client";

import { useEffect, useState, useMemo, createContext } from "react";
import "./movie.style.css";
import Comments from "../../../components/comments/comments";
import Rating from "../../../components/rating/page";
import { useSession, signIn, signOut } from "next-auth/react";
import SinglePageBanner from "@/components/singlepagebanner/singlepagebanner";
import EpisodesGrid from "@/components/episodesgrid/episodesgrid";
import AppContext from "../../../context/context";

const CommentsContext = createContext();

export default function SingleMoviePage({ params }) {
  const movieId = params.pid;
  const { data: session } = useSession();
  const [movie, setMovie] = useState({});
  const [userData, setUserData] = useState({});
  const [comment, setComment] = useState();
  const [editedComment, setEditedComment] = useState("");
  const [reply, setReply] = useState("");
  const user = "dima";
  const comments = movie?.comments;
  const date = new Date();
  const milliseconds = date.getTime();
  const [parentId, setParentId] = useState(null);
  const [removeCommentData, setRemoveCommentData] = useState({});
  let isMovieInFavs = userData.favorites?.some((x) => x.movie === movieId);
  const movieRatingArray = movie?.likes;
  const totalRating = movie?.likes;
  const [updateStatus, setUpdateStatus] = useState(false);
  const [movieDataError, setMovieDataError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userDataError, setUserDataError] = useState(null);
  const [ratingError, setRatingError] = useState(null);
  const [favoritesError, setFavoritesError] = useState(null);
  const [commentError, setCommentError] = useState(null);
  const [addCommentError, setAddCommentError] = useState(null);
  const [commentIsLoading, setCommentIsLoading] = useState(false);
  // const [updateData, setUpdateData] = useState(false)

  //  FETCH MOVIE DATA

  useEffect(() => {
    async function fetchedData() {
      try {
        const response = await fetch(`/api/singlemovie/${movieId}`);
        if (!response.ok) throw Error("Movie data is not received");
        const data = await response.json();
        setMovie(data);
        setMovieDataError(null);
      } catch (err) {
        setMovieDataError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchedData();
  }, [comment, updateStatus]);

  //  FETCH USER DATA

  useEffect(() => {
    async function fetchedData() {
      try {
        const response = await fetch(`/api/user/${session.user.id}`);
        if (!response.ok) throw Error("User data is not received");
        const data = await response.json();
        setUserData(data);
        setUserDataError(null);
      } catch (error) {
        setUserDataError(error.message);
      }
    }
    fetchedData();
  }, [updateStatus, session]);

  // RATE MOVIE

  async function rateMovie(arg) {
    try {
      const res = await fetch(`/api/like/${movieId}`, {
        method: "POST",
        body: JSON.stringify({ userID: session.user.id, rating: arg }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Rating Error");
      const data = await res.json();
      setMovie(data);
      setUpdateStatus((prev) => !prev);
      setRatingError(null);
    } catch (err) {
      setRatingError(err.message);
    }
  }

  // ADD TO FAVORITES

  async function addToFavs() {
    try {
      const res = await fetch(`/api/favs/${session.user.id}`, {
        method: "POST",
        body: JSON.stringify({ movie: [movie] }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Error");
      const data = await res.json();
      setUpdateStatus((prev) => !prev);
      setFavoritesError(null);
    } catch (err) {
      setFavoritesError(err.message);
    }
  }

  // COMMENTS

  async function addComment(e) {
    setCommentIsLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(`api/addcomment/${movieId}`, {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          user,
          comment,
          parentId,
          date,
          milliseconds,
          likes: [],
        }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      setComment("");
      setAddCommentError(null);
      setCommentIsLoading(false);
    } catch (err) {
      setAddCommentError(err.message);
    }
  }

  async function likeComment(arg) {
    try {
      const res = await fetch(`/api/likecomment/${movieId}`, {
        method: "POST",
        body: JSON.stringify({
          id: arg.id,
          user: arg.user,
          comment: arg.comment,
          parentId: arg.parentId,
          date: arg.date,
          milliseconds: arg.milliseconds,
          likes: arg.likes,
          userWhoLiked: user,
        }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      setUpdateStatus((prev) => !prev);
      setCommentError(null);
    } catch (err) {
      setCommentError(err.message);
    }
  }

  async function editComment(arg) {
    try {
      const res = await fetch(`/api/editcomment/${movieId}`, {
        method: "POST",
        body: JSON.stringify({
          id: arg.id,
          user: arg.user,
          comment: arg.comment,
          parentId: arg.parentId,
          date: arg.date,
          milliseconds: arg.milliseconds,
          likes: arg.likes,
          newComment: editedComment,
        }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      setUpdateStatus((prev) => !prev);
      setCommentError(null);
    } catch (err) {
      setCommentError(err.message);
    }
  }

  async function replyToComment(e) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/addcomment/${movieId}`, {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          user,
          comment: reply,
          parentId,
          date,
          milliseconds,
          likes: [],
        }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      setReply("");
      setParentId(null);
      setCommentError(null);
      setUpdateStatus((prev) => !prev);
    } catch (err) {
      setCommentError(err.message);
    }
  }

  async function removeComment(arg) {
    try {
      const res = await fetch(`/api/removecomment/${movieId}`, {
        method: "POST",
        body: JSON.stringify({ arg }),
        headers: {
          "Content-Type": "application.json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      setUpdateStatus((prev) => !prev);
      setCommentError(null);
    } catch (err) {
      setCommentError(err.message);
    }
  }

  // GROUPED COMMENTS

  const commentsByParentId = useMemo(() => {
    const group = {};
    comments?.map((comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });

    return group;
  }, [comments]);

  function getReplies(parentId) {
    return commentsByParentId[parentId];
  }

  const rootComments = commentsByParentId[null];

  return (
    <AppContext.Provider
      value={{
        commentError,
        movie,
        rateMovie,
        commentIsLoading,
        setCommentIsLoading,
      }}
    >
      <div className="single-page-boss-container">
        <SinglePageBanner addToFavs={addToFavs} movie={movie} user={userData} />
        {Object.keys(movie) != 0 && (
          <EpisodesGrid movieId={movie.id}></EpisodesGrid>
        )}
        {Object.keys(userData) != 0 && (
          <form className="add-comment-container">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea"
            ></textarea>
            <div className="leave-comment-btn-container">
              <input
                className={
                  commentIsLoading
                    ? "submit-comment-disabled"
                    : "submit-comment"
                }
                type="submit"
                value="Leave comment"
                onClick={addComment}
                disabled={commentIsLoading}
              />
              {addCommentError && (
                <p className="add-comment-error">{addCommentError}</p>
              )}
              {commentIsLoading && (
                <p className="add-comment-loading">Loading...</p>
              )}
            </div>
          </form>
        )}
        <CommentsContext.Provider
          value={{
            session,
            comments,
            setComment,
            user,
            comment,
            removeComment,
            likeComment,
            editComment,
            setEditedComment,
            editedComment,
            reply,
            setReply,
            replyToComment,
            getReplies,
            setParentId,
          }}
        >
          <div className="comments-stack">
            <Comments rootComments={rootComments} />
          </div>
        </CommentsContext.Provider>
      </div>
    </AppContext.Provider>
  );
}

export { CommentsContext };
