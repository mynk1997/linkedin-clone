import React from "react";
import "./Feed.css";
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@mui/icons-material";
import InputOptions from "./InputOptions";
import Post from "./Post";

const Feed = () => {
  return <div className="feed">
    <div className="feed-input-container">
        <div className="feed-input">
            <Create/>
            <form>
                <input type="text"/>
                <button type="submit">Send</button>
            </form>
        </div>
        <div className="feed-input-options">
            <InputOptions Icon={Image} title="Photo" color="#70B5F9"/>
            <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E"/>
            <InputOptions Icon={EventNote} title="Event" color="#C0CBCD"/>
            <InputOptions Icon={CalendarViewDay} title="Write Article" color="#7FC15E"/>
        </div>

    </div>
    <div className="">
        <Post/>
    </div>
  </div>;
};

export default Feed;
