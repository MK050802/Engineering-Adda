import React from 'react'
import foldImage from '../pages/images/folder.png'

function NotesPage() {
  return (
    <div className='inline-flex flex-col  items-center m-5 '>
      <div>
        <img src={foldImage} alt="empty" className="w-32 h-32" />
      </div>
      <div>notes/pyq</div>
    </div>
  );
}

export default NotesPage
