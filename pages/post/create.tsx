import React, { useState } from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import axios from "axios";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await axios.post("/api/post", body);
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Post</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            cols={50}
            rows={8}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
    </Layout>
  );
};

export default Draft;
