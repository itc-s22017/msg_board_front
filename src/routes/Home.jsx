import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';
import Timeline from '../components/Timeline/Timeline';

const Home = () => {
  const { currentPage } = useAuthContext();
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3030/messages/create", { text }, { withCredentials: true })
      // setText('')
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="テキストを入力してください"
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">送信</button>
      </form>
      <Timeline home={{page:currentPage}}/>
    </>
  );
}

export default Home