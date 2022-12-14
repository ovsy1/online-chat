import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import { useAuth } from '../../hooks/useAuth.js';
import { loadChats } from '../../store/features/chats-slice.js';
import Channels from '../Channels/Channels.jsx';
import Messages from '../Messages/Messages.jsx';
import Loader from '../Loader.jsx';

function Chat() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.chats);

  const { getHeader } = useAuth();
  useEffect(() => {
    dispatch(loadChats(getHeader));
  }, []); // eslint-disable-line

  return (
    <Container className="container h-100 my-4 overflow-hidden rounded shadow">
      {error && <h2>{error}</h2>}
      {status === 'loading' && <Loader />}
      {status === 'received' && (
        <Row className="h-100 bg-white flex-md-row">
          <Channels />
          <Messages />
        </Row>
      )}
    </Container>
  );
}
export default Chat;
