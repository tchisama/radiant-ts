import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container mx-auto'>
      <iframe
        src="http://localhost:8069/web#action=97&active_id=mailbox_inbox&cids=1&menu_id=79"
        width="100%"
        height="700"
        frameBorder="0"
      ></iframe>
    </div>
  )
}

export default page