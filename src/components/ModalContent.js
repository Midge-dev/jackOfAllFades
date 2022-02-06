import React from 'react';
import { Button } from 'bootstrap';

export default function ModalComponent({isModalOpen, onClick}) {
  return (
    <div>
      <h1>Modal</h1>
      <div>
      <iframe
            src="https://squareup.com/appointments/book/4l2xlvamig0bve/J50HSBN83C0E1/start"
            frameborder="0"
            width="96%"
            height="800px"
            title='modalAPI'
          ></iframe>
      </div>
      <button onClick={onClick}>X</button>
    </div>
  )
}
